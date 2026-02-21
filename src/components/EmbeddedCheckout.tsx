"use client";

import { useCallback, useState } from "react";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { createCheckoutSession, type CheckoutItem } from "@/app/actions/stripe";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface EmbeddedCheckoutFormProps {
  items: CheckoutItem[];
  onComplete?: () => void;
}

export function EmbeddedCheckoutForm({ items, onComplete }: EmbeddedCheckoutFormProps) {
  const [error, setError] = useState<string | null>(null);

  const fetchClientSecret = useCallback(async () => {
    try {
      const clientSecret = await createCheckoutSession(items);
      if (!clientSecret) {
        throw new Error("Failed to create checkout session");
      }
      return clientSecret;
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      throw err;
    }
  }, [items]);

  if (error) {
    return (
      <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-6 py-4 rounded text-sm">
        <p className="font-medium mb-1">Checkout Error</p>
        <p>{error}</p>
        <button
          onClick={() => setError(null)}
          className="mt-3 text-xs underline hover:no-underline"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div id="checkout" className="stripe-checkout-wrapper">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ fetchClientSecret, onComplete }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
