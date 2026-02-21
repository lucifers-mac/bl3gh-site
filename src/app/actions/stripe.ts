"use server";

import { getStripe } from "@/lib/stripe";

export interface CheckoutItem {
  slug: string;
  name: string;
  price: number;
  colorway: string;
  size: string;
  quantity: number;
  image: string;
}

export async function createCheckoutSession(items: CheckoutItem[]) {
  if (!items || items.length === 0) {
    throw new Error("Cart is empty");
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bl3gh.co";

  const lineItems = items.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: `${item.name} — ${item.colorway}`,
        description: `Size: ${item.size}`,
        ...(item.image
          ? { images: [`${siteUrl}${item.image}`] }
          : {}),
      },
      unit_amount: Math.round(item.price * 100),
    },
    quantity: item.quantity,
  }));

  const stripe = getStripe();

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    redirect_on_completion: "never",
    line_items: lineItems,
    mode: "payment",
    shipping_address_collection: {
      allowed_countries: [
        "US", "CA", "GB", "AU", "DE", "FR", "IT", "ES", "NL", "SE", "NO", "DK",
      ],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 0, currency: "usd" },
          display_name: "Free US Shipping",
          delivery_estimate: {
            minimum: { unit: "business_day", value: 5 },
            maximum: { unit: "business_day", value: 10 },
          },
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 1500, currency: "usd" },
          display_name: "International Shipping",
          delivery_estimate: {
            minimum: { unit: "business_day", value: 10 },
            maximum: { unit: "business_day", value: 21 },
          },
        },
      },
    ],
    metadata: {
      items: JSON.stringify(
        items.map((i) => ({
          slug: i.slug,
          name: i.name,
          colorway: i.colorway,
          size: i.size,
          quantity: i.quantity,
        }))
      ),
    },
  });

  return session.client_secret;
}
