import type { Metadata } from "next";
import Link from "next/link";
import { getJudgments, BUNDLE_PRICE, BUNDLE_SAVINGS } from "@/lib/products";
import { EmailForm } from "@/components/EmailForm";

export const metadata: Metadata = {
  title: "The Four Judgments",
  description: "Four archetypes of reckoning. The Prophet. The Executioner. The Heretic. The Witness. A narrative-driven capsule by BL3GH.CO.",
};

export default function FourJudgmentsPage() {
  const judgments = getJudgments();

  return (
    <div>
      {/* Header */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#030303] to-black" />
        <div className="relative z-10">
          <h1 className="bl3gh-mark text-4xl md:text-6xl tracking-[0.15em] text-[#f0f0f0] mb-6 opacity-0 animate-fade-up">
            The Four Judgments
          </h1>
          <p className="lore-text text-[#b0b0b0] max-w-lg mx-auto opacity-0 animate-fade-up stagger-1">
            Consequence is inevitable. Observation outlives action. 
            Devotion does not erase guilt. Judgment arrives whether invited or not.
          </p>
        </div>
      </section>

      {/* Individual Judgments */}
      {judgments.map((product, i) => (
        <section
          key={product.slug}
          className="border-t border-[#1a1a1a] py-20 md:py-32"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
              {/* Image */}
              <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="aspect-square bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg overflow-hidden relative">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-[#333] text-sm tracking-wider uppercase">{product.name}</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] tracking-widest uppercase text-[#707070] bg-black/80 px-2 py-1 rounded">
                      Limited Run
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="text-xs tracking-[0.3em] text-[#707070] uppercase mb-3">
                  — {product.chapter}. —
                </div>
                <h2 className="bl3gh-mark text-3xl md:text-4xl tracking-wider text-[#f0f0f0] mb-6">
                  {product.name}
                </h2>
                <p className="lore-text text-[#b0b0b0] leading-relaxed mb-8">
                  &ldquo;{product.lore}&rdquo;
                </p>

                {/* Colorway + Price */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    {product.colorways.map((c) => (
                      <div
                        key={c.name}
                        className="w-6 h-6 rounded-full border border-[#333]"
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-[#707070]">|</span>
                  <span className="text-lg text-[#f0f0f0]">${product.price}</span>
                </div>

                {/* Sizes */}
                <div className="flex items-center gap-2 mb-8">
                  {product.sizes.map((size) => (
                    <div
                      key={size}
                      className="w-10 h-10 border border-[#1a1a1a] rounded flex items-center justify-center text-xs text-[#b0b0b0] hover:border-[#333] cursor-pointer transition-colors"
                    >
                      {size}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/product/${product.slug}`}
                  className="inline-block bg-[#f0f0f0] text-black px-8 py-3 text-sm tracking-wider uppercase font-medium hover:bg-white transition-colors"
                >
                  View Product
                </Link>

                <p className="text-xs text-[#707070] mt-4">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* BUNDLE */}
      <section id="bundle" className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="bl3gh-mark text-2xl md:text-3xl tracking-wider text-[#f0f0f0] mb-4">
            The Complete Judgment
          </h2>
          <p className="text-sm text-[#b0b0b0] mb-3">
            All four. One cycle. One price.
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-3xl text-[#f0f0f0] font-light">${BUNDLE_PRICE}</span>
            <span className="text-sm text-[#707070] line-through">${38 * 4}</span>
            <span className="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded">
              Save ${BUNDLE_SAVINGS}
            </span>
          </div>

          {/* Bundle Grid */}
          <div className="grid grid-cols-4 gap-3 mb-8">
            {judgments.map((p) => (
              <div key={p.slug} className="aspect-square bg-[#0a0a0a] border border-[#1a1a1a] rounded flex items-center justify-center">
                <span className="text-[10px] text-[#707070] tracking-wider uppercase">{p.name.replace("The ", "")}</span>
              </div>
            ))}
          </div>

          <button
            className="snipcart-add-item bg-[#f0f0f0] text-black px-10 py-4 text-sm tracking-wider uppercase font-medium hover:bg-white transition-colors"
            data-item-id="complete-judgment-bundle"
            data-item-price={BUNDLE_PRICE}
            data-item-description="All four Judgments in one complete set. The Prophet, The Executioner, The Heretic, and The Witness."
            data-item-image="/products/complete-judgment.jpg"
            data-item-name="The Complete Judgment"
            data-item-custom1-name="Size"
            data-item-custom1-options="S|M|L|XL|XXL"
            data-item-custom1-required="true"
            data-item-custom2-name="Color"
            data-item-custom2-options="White|Black"
            data-item-custom2-required="true"
          >
            Claim the Complete Judgment — ${BUNDLE_PRICE}
          </button>
        </div>
      </section>

      {/* BOOK OF BL3GH TEASER */}
      <section className="border-t border-[#1a1a1a] py-24">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-xs tracking-[0.3em] text-[#707070] uppercase mb-4">Coming Soon</h2>
          <h3 className="bl3gh-mark text-2xl tracking-wider text-[#f0f0f0] mb-4">
            Book of BL3GH
          </h3>
          <p className="lore-text text-[#b0b0b0] mb-8">
            Before the Judgments, there was The Penitent. 
            Twelve chapters of voluntary suffering. 
            The prelude is being written.
          </p>
          <EmailForm placeholder="email for Chapter I" buttonText="Notify" className="max-w-sm mx-auto" />
        </div>
      </section>
    </div>
  );
}
