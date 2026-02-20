import Link from "next/link";
import { SmallEmailForm } from "./EmailForm";

export function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] mt-32">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="bl3gh-mark text-lg tracking-widest text-[#f0f0f0] mb-3">BL3GH</h3>
            <p className="text-sm text-[#707070] leading-relaxed max-w-sm">
              Heavy culture product studio. Limited drops rooted in metalcore, 
              hardcore, and the underground. Manufactured in-house. 
              No print-on-demand. No dropshipping.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-wider text-[#707070] mb-4">NAVIGATE</h4>
            <div className="space-y-2">
              <Link href="/the-four-judgments" className="block text-sm text-[#b0b0b0] hover:text-[#f0f0f0] transition-colors">
                The Four Judgments
              </Link>
              <Link href="/archive" className="block text-sm text-[#b0b0b0] hover:text-[#f0f0f0] transition-colors">
                Archive
              </Link>
              <Link href="/about" className="block text-sm text-[#b0b0b0] hover:text-[#f0f0f0] transition-colors">
                About
              </Link>
              <Link href="/shipping" className="block text-sm text-[#b0b0b0] hover:text-[#f0f0f0] transition-colors">
                Shipping
              </Link>
              <Link href="/returns" className="block text-sm text-[#b0b0b0] hover:text-[#f0f0f0] transition-colors">
                Returns &amp; Refunds
              </Link>
              <Link href="/terms" className="block text-sm text-[#b0b0b0] hover:text-[#f0f0f0] transition-colors">
                Terms &amp; Conditions
              </Link>
              <Link href="/privacy" className="block text-sm text-[#b0b0b0] hover:text-[#f0f0f0] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="block text-sm text-[#b0b0b0] hover:text-[#f0f0f0] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-wider text-[#707070] mb-4">CONNECT</h4>
            <div className="space-y-2">
              <a href="https://instagram.com/bl3gh.co" target="_blank" rel="noopener" className="block text-sm text-[#b0b0b0] hover:text-[#f0f0f0] transition-colors">
                Instagram
              </a>
              <a href="https://tiktok.com/@bl3gh.co" target="_blank" rel="noopener" className="block text-sm text-[#b0b0b0] hover:text-[#f0f0f0] transition-colors">
                TikTok
              </a>
              <a href="https://www.facebook.com/people/BL3GHco/61585376762346/" target="_blank" rel="noopener" className="block text-sm text-[#b0b0b0] hover:text-[#f0f0f0] transition-colors">
                Facebook
              </a>
            </div>

            {/* Email Signup */}
            <div className="mt-6">
              <h4 className="text-xs tracking-wider text-[#707070] mb-3">DROP ALERTS</h4>
              <SmallEmailForm />
            </div>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] mt-12 pt-8 flex items-center justify-between">
          <p className="text-xs text-[#404040]">
            © {new Date().getFullYear()} House of BL3GH, LLC. All rights reserved.
          </p>
          <p className="text-xs text-[#404040]">
            Manufactured in-house · Santa Rosa, CA
          </p>
        </div>
      </div>
    </footer>
  );
}
