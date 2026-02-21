import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { trackEvent } from "@/lib/klaviyo";
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

  switch (event.type) {
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

      // Track order in Klaviyo
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
      }

      // TODO: Create Notion task for fulfillment

      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
