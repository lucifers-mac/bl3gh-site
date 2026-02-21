"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";

export default function SuccessPage() {
  useEffect(() => {
    // Track purchase conversion in Meta Pixel
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Purchase");
    }

    // Track in GA4 via dataLayer
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "purchase",
        ecommerce: {
          transaction_id: new URLSearchParams(window.location.search).get("session_id") || "unknown",
        },
      });
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24 text-center">
      <div className="mb-8">
        <div className="inline-flex w-16 h-16 rounded-full bg-green-500/10 items-center justify-center mb-6">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="bl3gh-mark text-4xl tracking-wider text-[#f0f0f0] mb-4">
          Order Confirmed
        </h1>

        <p className="text-[#b0b0b0] text-lg mb-2">
          You'll receive a confirmation email shortly.
        </p>
        <p className="text-[#707070] text-sm">
          Orders ship within 5-10 business days.
        </p>
      </div>

      <div className="border-t border-[#1a1a1a] pt-8 mt-8">
        <p className="text-[#505050] text-sm mb-6">
          Questions? Email <a href="mailto:orders@bl3gh.co" className="text-[#b0b0b0] hover:text-[#f0f0f0] transition-colors">orders@bl3gh.co</a>
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-block bg-[#f0f0f0] text-black px-8 py-3 text-sm tracking-wider uppercase font-medium hover:bg-white transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/the-four-judgments"
            className="inline-block border border-[#333] px-8 py-3 text-sm tracking-wider uppercase text-[#b0b0b0] hover:text-[#f0f0f0] hover:border-[#666] transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
