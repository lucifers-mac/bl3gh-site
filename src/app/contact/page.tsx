import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <h1 className="bl3gh-mark text-3xl tracking-wider text-[#f0f0f0] mb-4">
        Contact
      </h1>
      <p className="text-sm text-[#707070] mb-12">
        Questions about an order, collaboration inquiries, or just want to talk heavy culture.
        Reach us directly at{" "}
        <a href="mailto:contact@bl3gh.co" className="text-[#f0f0f0] hover:underline">contact@bl3gh.co</a>.
      </p>

      <ContactForm />

      <div className="mt-16 pt-8 border-t border-[#1a1a1a]">
        <div className="flex items-center gap-8 text-sm">
          <a href="https://instagram.com/bl3gh.co" target="_blank" rel="noopener" className="text-[#707070] hover:text-[#b0b0b0] transition-colors">
            Instagram →
          </a>
          <a href="https://tiktok.com/@bl3gh.co" target="_blank" rel="noopener" className="text-[#707070] hover:text-[#b0b0b0] transition-colors">
            TikTok →
          </a>
        </div>
      </div>
    </div>
  );
}