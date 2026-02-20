"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/the-four-judgments", label: "The Four Judgments" },
    { href: "/archive", label: "Archive" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="bl3gh-mark text-lg tracking-widest text-[#f0f0f0] hover:text-white transition-colors">
          BL3GH
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-[#f0f0f0]"
                  : "text-[#707070] hover:text-[#b0b0b0]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            className="snipcart-checkout text-[#707070] hover:text-[#b0b0b0] transition-colors relative"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <span className="snipcart-items-count absolute -top-2 -right-2 bg-[#f0f0f0] text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium"></span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#707070]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-[#1a1a1a] px-6 py-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-[#b0b0b0] hover:text-[#f0f0f0]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
