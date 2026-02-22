"use client";

import { useState } from "react";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [segment, setSegment] = useState<"drops" | "lore">("drops");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, segment, source: "Homepage Email Capture" }),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <section className="relative border-t border-[#1a1a1a] overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#060606] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

      <div className="relative max-w-3xl mx-auto px-6 py-32 text-center">

        {/* Label */}
        <p className="text-[10px] tracking-[0.4em] text-[#404040] uppercase mb-6">
          Transmission
        </p>

        {/* Headline */}
        <h2 className="bl3gh-mark text-5xl md:text-7xl tracking-[0.15em] text-[#f0f0f0] mb-6"
          style={{ textShadow: "0 0 60px rgba(255,255,255,0.04)" }}>
          Join the Cycle
        </h2>

        {/* Segment toggle */}
        <div className="flex justify-center gap-0 mb-4 mt-10">
          <button
            onClick={() => setSegment("drops")}
            className={`px-8 py-3 text-xs tracking-[0.2em] uppercase border transition-all duration-300 ${
              segment === "drops"
                ? "border-[#555] text-[#f0f0f0] bg-white/[0.04]"
                : "border-[#222] text-[#404040] hover:text-[#707070] hover:border-[#333]"
            }`}
          >
            Drop Alerts
          </button>
          <button
            onClick={() => setSegment("lore")}
            className={`px-8 py-3 text-xs tracking-[0.2em] uppercase border-t border-b border-r transition-all duration-300 ${
              segment === "lore"
                ? "border-[#555] text-[#f0f0f0] bg-white/[0.04]"
                : "border-[#222] text-[#404040] hover:text-[#707070] hover:border-[#333]"
            }`}
          >
            Lore Updates
          </button>
        </div>

        {/* Segment description */}
        <p className="text-xs text-[#505050] tracking-wider mb-10 h-4">
          {segment === "drops"
            ? "New releases, restocks, and early access — before they're gone."
            : "Lore chapters, origin stories, and dispatches from the Book of BL3GH."}
        </p>

        {/* Form */}
        {status === "success" ? (
          <div className="py-6">
            <p className="text-sm tracking-widest uppercase text-[#707070]">
              You're in the cycle ✓
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@address.com"
              required
              disabled={status === "submitting"}
              className="flex-1 bg-black border border-[#222] px-5 py-4 text-sm text-[#f0f0f0] placeholder-[#303030] focus:border-[#444] focus:outline-none transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "submitting" || !email}
              className="px-8 py-4 bg-[#f0f0f0] text-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === "submitting" ? "..." : status === "error" ? "Try Again" : "Transmit"}
            </button>
          </form>
        )}

        {/* Fine print */}
        <p className="text-[10px] text-[#303030] tracking-wider mt-6 uppercase">
          No noise. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
