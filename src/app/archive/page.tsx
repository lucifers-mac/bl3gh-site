import type { Metadata } from "next";
import Link from "next/link";
import { getArchive } from "@/lib/products";

export const metadata: Metadata = {
  title: "The Vault — Archive",
  description: "Previous releases from BL3GH. Once they're gone, they're gone.",
};

export default function ArchivePage() {
  const archive = getArchive();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="bl3gh-mark text-3xl md:text-4xl tracking-wider text-[#f0f0f0] mb-4 opacity-0 animate-fade-up">
          The Vault
        </h1>
        <p className="text-sm text-[#707070] opacity-0 animate-fade-up stagger-1">
          Previous releases from BL3GH. Once they&apos;re gone, they&apos;re gone.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {archive.map((product) => (
          <Link
            key={product.slug}
            href={`/product/${product.slug}`}
            className="group"
          >
            <div className="aspect-square bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg overflow-hidden mb-3 relative group-hover:border-[#333] transition-colors">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-[#333] text-xs tracking-wider uppercase group-hover:text-[#707070] transition-colors">
                  {product.name}
                </span>
              </div>
            </div>
            <h3 className="text-sm text-[#f0f0f0] group-hover:text-white transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-[#707070] mt-0.5">${product.price}</p>
          </Link>
        ))}
      </div>

      {/* CTA to Judgments */}
      <div className="mt-24 text-center border-t border-[#1a1a1a] pt-16">
        <p className="text-xs tracking-[0.3em] text-[#707070] uppercase mb-4">Current Collection</p>
        <Link
          href="/the-four-judgments"
          className="inline-block border border-[#333] px-8 py-3 text-sm tracking-wider uppercase text-[#b0b0b0] hover:text-[#f0f0f0] hover:border-[#666] transition-all"
        >
          The Four Judgments →
        </Link>
      </div>
    </div>
  );
}
