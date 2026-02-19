"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Connect to form handler (Formspree, email API, etc.)
    setSubmitted(true);
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <h1 className="bl3gh-mark text-3xl tracking-wider text-[#f0f0f0] mb-4">
        Contact
      </h1>
      <p className="text-sm text-[#707070] mb-12">
        Questions about an order, collaboration inquiries, or just want to talk heavy culture.
      </p>

      {submitted ? (
        <div className="text-center py-16">
          <p className="text-[#b0b0b0] text-lg mb-2">Message received.</p>
          <p className="text-[#707070] text-sm">We&apos;ll get back to you.</p>
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs tracking-wider text-[#707070] uppercase block mb-2">Name</label>
              <input
                type="text"
                required
                className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#404040] focus:border-[#333] focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs tracking-wider text-[#707070] uppercase block mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#404040] focus:border-[#333] focus:outline-none transition-colors"
                placeholder="email@address.com"
              />
            </div>
          </div>

          <div>
            <label className="text-xs tracking-wider text-[#707070] uppercase block mb-2">Subject</label>
            <select className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded px-4 py-3 text-sm text-[#f0f0f0] focus:border-[#333] focus:outline-none transition-colors">
              <option value="order">Order Question</option>
              <option value="collab">Collaboration / Partnership</option>
              <option value="custom">Custom Order Inquiry</option>
              <option value="press">Press / Media</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="text-xs tracking-wider text-[#707070] uppercase block mb-2">Message</label>
            <textarea
              rows={6}
              required
              className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#404040] focus:border-[#333] focus:outline-none resize-none transition-colors"
              placeholder="What's on your mind..."
            />
          </div>

          <button
            type="submit"
            className="bg-[#f0f0f0] text-black px-8 py-3 text-sm tracking-wider uppercase font-medium hover:bg-white transition-colors"
          >
            Send Message
          </button>
        </form>
      )}

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
