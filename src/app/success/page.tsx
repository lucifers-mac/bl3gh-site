import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Order Confirmed",
};

export default function SuccessPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24 text-center">
      <div className="mb-8">
        <div className="inline-block w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
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
