import Link from "next/link";
import { getJudgments, BUNDLE_PRICE, BUNDLE_SAVINGS } from "@/lib/products";
import { EmailForm } from "@/components/EmailForm";

export default function Home() {
  const judgments = getJudgments();

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        {/* Background atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-3xl">
          {/* BL3GH Mark */}
          <h1
            className="bl3gh-mark text-7xl md:text-9xl tracking-[0.2em] text-[#f0f0f0] mb-6 opacity-0 animate-fade-up"
            style={{ textShadow: "0 0 80px rgba(255,255,255,0.05)" }}
          >
            BL3GH
          </h1>

          <p className="text-sm md:text-base text-[#707070] tracking-widest uppercase mb-12 opacity-0 animate-fade-up stagger-1">
            The Four Judgments Are Here
          </p>

          <Link
            href="/the-four-judgments"
            className="inline-block border border-[#333] px-10 py-4 text-sm tracking-widest uppercase text-[#b0b0b0] hover:text-[#f0f0f0] hover:border-[#666] hover:bg-white/[0.02] transition-all duration-500 opacity-0 animate-fade-up stagger-2"
          >
            Enter the Judgment
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in stagger-5">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#333] to-transparent animate-slow-pulse" />
        </div>
      </section>

      {/* THE FOUR - Product Grid */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-xs tracking-[0.3em] text-[#707070] uppercase mb-4">The Four Judgments</h2>
          <p className="lore-text text-[#b0b0b0] max-w-lg mx-auto">
            Consequence is inevitable. Observation outlives action. 
            Devotion does not erase guilt. Judgment arrives whether invited or not.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {judgments.map((product) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className="group"
            >
              <div className="aspect-square bg-[#0a0a0a] border border-[#1a1a1a] rounded overflow-hidden mb-3 relative">
                {/* Placeholder - replace with actual product images */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-[#333] text-xs tracking-wider uppercase">{product.name}</span>
                </div>
                {product.limited && (
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] tracking-widest uppercase text-[#707070] bg-black/80 px-2 py-1 rounded">
                      Limited
                    </span>
                  </div>
                )}
              </div>
              <h3 className="text-sm text-[#f0f0f0] group-hover:text-white transition-colors">
                {product.name}
              </h3>
              <p className="text-xs text-[#707070] mt-0.5">${product.price}</p>
            </Link>
          ))}
        </div>

        {/* Bundle CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/the-four-judgments#bundle"
            className="inline-block border border-[#333] px-8 py-3 text-sm tracking-wider uppercase text-[#b0b0b0] hover:text-[#f0f0f0] hover:border-[#666] transition-all duration-300"
          >
            The Complete Judgment — ${BUNDLE_PRICE}
            <span className="text-[#707070] ml-2 text-xs">(save ${BUNDLE_SAVINGS})</span>
          </Link>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="border-t border-b border-[#1a1a1a] py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-lg md:text-xl text-[#b0b0b0] leading-relaxed font-light">
            BL3GH is a heavy culture product studio.
          </p>
          <p className="text-lg md:text-xl text-[#707070] leading-relaxed font-light mt-4">
            We manufacture limited physical drops rooted in metalcore, hardcore, 
            and the underground. This is serialized mythology — not merch.
          </p>
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <section className="max-w-xl mx-auto px-6 py-24 text-center">
        <h2 className="text-xs tracking-[0.3em] text-[#707070] uppercase mb-4">Stay in the cycle</h2>
        <p className="text-sm text-[#b0b0b0] mb-8">
          Get notified before drops go live. No spam. Only judgment.
        </p>
        <EmailForm className="max-w-md mx-auto" />
      </section>
    </div>
  );
}
