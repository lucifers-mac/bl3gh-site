import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "BL3GH is a heavy culture product studio. Built in-house. Released in limited runs. Rooted in metalcore, hardcore, and the underground.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <h1 className="bl3gh-mark text-4xl md:text-5xl tracking-wider text-[#f0f0f0] mb-8 opacity-0 animate-fade-up">
        BL3GH
      </h1>

      <div className="space-y-8 opacity-0 animate-fade-up stagger-1">
        <p className="text-lg text-[#b0b0b0] leading-relaxed font-light">
          Heavy culture product studio. Built in-house. Released in limited runs. 
          Rooted in metalcore, hardcore, and the underground.
        </p>

        <div className="h-px bg-[#1a1a1a]" />

        <div className="space-y-6 text-[#b0b0b0] leading-relaxed">
          <p>
            We don&apos;t do merch. We build mythology.
          </p>

          <p>
            Every piece is designed, printed, and shipped from our own production floor. 
            CO2 laser engraving. DTG and screen printing. 3D manufacturing. 
            No middlemen. No print-on-demand. No dropshipping.
          </p>

          <p>
            BL3GH exists at the intersection of heavy music and physical product. 
            Each release is part of an expanding narrative universe — serialized drops 
            built around archetypes, mythology, and the aesthetics of collapse.
          </p>

          <p>
            Our current collection, <em>The Four Judgments</em>, explores consequence, 
            rebellion, and observation through four archetypal figures: The Prophet, 
            The Executioner, The Heretic, and The Witness. Before them came the story 
            of The Penitent — a figure who believed suffering could prevent judgment. 
            He was wrong.
          </p>

          <p>
            Every item is limited. We don&apos;t restock. When it&apos;s gone, it&apos;s gone. 
            This isn&apos;t artificial scarcity — it&apos;s intentional craft. 
            Small runs mean we control quality. Limited means every piece has weight.
          </p>
        </div>

        <div className="h-px bg-[#1a1a1a]" />

        {/* Production photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src="/production-1.jpg"
            alt="T-shirt on heat press platen with alignment ruler for centering a design"
            className="w-full aspect-video object-cover rounded-lg border border-[#1a1a1a]"
          />
          <img
            src="/production-2.jpg"
            alt="Clamshell heat press in the BL3GH production workspace"
            className="w-full aspect-video object-cover rounded-lg border border-[#1a1a1a]"
          />
        </div>

        <div className="h-px bg-[#1a1a1a]" />

        <div className="flex items-center gap-8 text-sm text-[#707070]">
          <div>
            <span className="block text-[#b0b0b0] mb-1">Location</span>
            Santa Rosa, CA
          </div>
          <div>
            <span className="block text-[#b0b0b0] mb-1">Entity</span>
            House of BL3GH, LLC
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://instagram.com/bl3gh.co" target="_blank" rel="noopener" className="text-sm text-[#707070] hover:text-[#b0b0b0] transition-colors">
            Instagram →
          </a>
          <a href="https://tiktok.com/@bl3gh.co" target="_blank" rel="noopener" className="text-sm text-[#707070] hover:text-[#b0b0b0] transition-colors">
            TikTok →
          </a>
          <a href="https://www.facebook.com/people/BL3GHco/61585376762346/" target="_blank" rel="noopener" className="text-sm text-[#707070] hover:text-[#b0b0b0] transition-colors">
            Facebook →
          </a>
        </div>
      </div>
    </div>
  );
}
