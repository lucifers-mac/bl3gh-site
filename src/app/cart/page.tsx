import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cart",
};

export default function CartPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <h1 className="bl3gh-mark text-3xl tracking-wider text-[#f0f0f0] mb-8">
        Cart
      </h1>

      {/* Empty State */}
      <div className="text-center py-16">
        <p className="text-[#707070] mb-6">Your cart is empty.</p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/the-four-judgments"
            className="inline-block bg-[#f0f0f0] text-black px-6 py-3 text-sm tracking-wider uppercase font-medium hover:bg-white transition-colors"
          >
            The Four Judgments
          </Link>
          <Link
            href="/archive"
            className="inline-block border border-[#333] px-6 py-3 text-sm tracking-wider uppercase text-[#b0b0b0] hover:text-[#f0f0f0] hover:border-[#666] transition-colors"
          >
            The Vault
          </Link>
        </div>
      </div>

      {/* Cart will be managed by Snipcart — this is the fallback empty state */}
      <div className="mt-12 text-center">
        <p className="text-xs text-[#404040]">
          Secure checkout powered by Snipcart + Stripe
        </p>
      </div>
    </div>
  );
}
