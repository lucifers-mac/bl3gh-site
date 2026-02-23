import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { trackEvent } from "@/lib/klaviyo";
import { sendOrderConfirmation } from "@/lib/email";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  const stripe = getStripe();
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }

  switch (event.type as string) {
    case "checkout.session.expired": {
      const session = event.data.object as Stripe.Checkout.Session;
      const email = session.customer_details?.email;

      console.log("Checkout abandoned:", session.id);

      // Track abandoned checkout in Klaviyo
      if (email) {
        let items: any[] = [];
        try {
          items = JSON.parse(session.metadata?.items || "[]");
        } catch (e) {
          console.error("Failed to parse items metadata");
        }

        try {
          await trackEvent({
            email,
            eventName: "Abandoned Checkout",
            properties: {
              checkout_id: session.id,
              checkout_url: session.url,
              items,
              item_names: items.map((i: any) => i.name).join(", "),
              item_count: items.reduce((sum: number, i: any) => sum + (i.quantity || 1), 0),
            },
            value: (session.amount_total || 0) / 100,
          });
          console.log("Klaviyo abandoned checkout tracked:", email);
        } catch (e) {
          console.error("Klaviyo tracking failed:", e);
        }
      }
      break;
    }

    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const email = session.customer_details?.email;

      console.log("Payment successful:", session.id);
      console.log("Customer email:", email);

      // Parse items from metadata
      let items: any[] = [];
      try {
        items = JSON.parse(session.metadata?.items || "[]");
      } catch (e) {
        console.error("Failed to parse items metadata");
      }

      // Track order in Klaviyo + send confirmation email
      if (email) {
        try {
          await trackEvent({
            email,
            eventName: "Placed Order",
            properties: {
              order_id: session.id,
              items,
              item_names: items.map((i: any) => i.name).join(", "),
              item_count: items.reduce((sum: number, i: any) => sum + (i.quantity || 1), 0),
            },
            value: (session.amount_total || 0) / 100,
          });
          console.log("Klaviyo event tracked for:", email);
        } catch (e) {
          console.error("Klaviyo tracking failed:", e);
        }

        // Send order confirmation email
        try {
          const shipping = session.shipping_details?.address;
          await sendOrderConfirmation({
            email,
            name: session.customer_details?.name || "",
            orderId: session.id,
            items,
            amountTotal: session.amount_total || 0,
            shippingAddress: shipping ? {
              line1: shipping.line1 || undefined,
              line2: shipping.line2 || undefined,
              city: shipping.city || undefined,
              state: shipping.state || undefined,
              postal_code: shipping.postal_code || undefined,
              country: shipping.country || undefined,
            } : undefined,
          });
          console.log("Order confirmation sent to:", email);
        } catch (e) {
          console.error("Order confirmation email failed:", e);
        }
      }

        // Create Notion fulfillment task
      try {
        const notionKey = process.env.NOTION_API_KEY;
        const notionTasksDb = "825f9b44-ab3b-4024-a024-79295cfe984e";
        if (notionKey) {
          const itemSummary = items.map((i: any) => `${i.name} (${i.colorway}, ${i.size}) x${i.quantity}`).join(", ");
          await fetch("https://api.notion.com/v1/pages", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${notionKey}`,
              "Notion-Version": "2022-06-28",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              parent: { database_id: notionTasksDb },
              properties: {
                Name: { title: [{ text: { content: `FULFILL: ${itemSummary}` } }] },
                Status: { select: { name: "To Do" } },
                Priority: { select: { name: "High" } },
              },
            }),
          });
          console.log("Notion fulfillment task created");
        }
      } catch (e) {
        console.error("Notion fulfillment task failed:", e);
      }

      break;
    }

    case "payment_intent.payment_failed": {
      const intent = event.data.object as Stripe.PaymentIntent;
      console.error("Payment failed:", intent.id, intent.last_payment_error?.message);
      break;
    }

    case "charge.refunded": {
      const charge = event.data.object as Stripe.Charge;
      console.log("Refund issued for charge:", charge.id, "amount:", charge.amount_refunded);
      break;
    }

    case "charge.dispute.created": {
      const dispute = event.data.object as Stripe.Dispute;
      console.error("DISPUTE CREATED — charge:", dispute.charge, "amount:", dispute.amount, "reason:", dispute.reason);
      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
