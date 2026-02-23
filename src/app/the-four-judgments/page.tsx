import type { Metadata } from "next";
import { getJudgments, BUNDLE_PRICE, BUNDLE_SAVINGS } from "@/lib/products";
import { EmailForm } from "@/components/EmailForm";
import { BundleSection } from "@/components/BundleSection";
import { JudgmentCard } from "@/components/JudgmentCard";

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
        <JudgmentCard key={product.slug} product={product} index={i} />
      ))}

      {/* BUNDLE */}
      <BundleSection 
        judgments={judgments} 
        bundlePrice={BUNDLE_PRICE} 
        bundleSavings={BUNDLE_SAVINGS} 
      />

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
          <EmailForm placeholder="email for Chapter I" buttonText="Notify" className="max-w-sm mx-auto" segment="lore" source="Book of BL3GH Teaser" />
        </div>
      </section>
    </div>
  );
}
