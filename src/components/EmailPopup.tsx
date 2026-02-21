"use client";

import { useState, useEffect } from "react";

export function EmailPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [segment, setSegment] = useState<"drops" | "lore">("drops");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    // Don't show if already dismissed or subscribed
    const dismissed = localStorage.getItem("bl3gh-popup-dismissed");
    if (dismissed) return;

    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    // Don't show again for 7 days
    localStorage.setItem("bl3gh-popup-dismissed", Date.now().toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, segment }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      // Don't show popup again
      localStorage.setItem("bl3gh-popup-dismissed", "subscribed");

      setTimeout(() => {
        setVisible(false);
      }, 2000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleDismiss}
      />

      {/* Modal */}
      <div className="relative bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg max-w-md w-full p-8 animate-fade-up">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-[#707070] hover:text-[#f0f0f0] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {status === "success" ? (
          <div className="text-center py-4">
            <p className="text-green-400 text-lg mb-2">You're in ✓</p>
            <p className="text-[#707070] text-sm">Watch your inbox.</p>
          </div>
        ) : (
          <>
            <h2 className="bl3gh-mark text-2xl tracking-wider text-[#f0f0f0] mb-2 text-center">
              Join the Cycle
            </h2>
            <p className="text-sm text-[#707070] text-center mb-6">
              Limited drops sell out. Get in before they're gone.
            </p>

            {/* Segment Toggle */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setSegment("drops")}
                className={`flex-1 py-2.5 text-xs tracking-wider uppercase rounded transition-colors ${
                  segment === "drops"
                    ? "bg-[#f0f0f0] text-black font-medium"
                    : "border border-[#333] text-[#707070] hover:text-[#b0b0b0] hover:border-[#666]"
                }`}
              >
                Drop Alerts
              </button>
              <button
                onClick={() => setSegment("lore")}
                className={`flex-1 py-2.5 text-xs tracking-wider uppercase rounded transition-colors ${
                  segment === "lore"
                    ? "bg-[#f0f0f0] text-black font-medium"
                    : "border border-[#333] text-[#707070] hover:text-[#b0b0b0] hover:border-[#666]"
                }`}
              >
                Lore Updates
              </button>
            </div>

            <p className="text-xs text-[#505050] text-center mb-4">
              {segment === "drops"
                ? "New drops, restocks, and early access."
                : "Lore chapters, origin stories, and the Book of BL3GH."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@address.com"
                required
                disabled={status === "submitting"}
                className="w-full bg-black border border-[#1a1a1a] rounded px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#404040] focus:border-[#333] focus:outline-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === "submitting" || !email}
                className="w-full bg-[#f0f0f0] text-black py-3 text-sm tracking-wider uppercase font-medium rounded hover:bg-white transition-colors disabled:opacity-50"
              >
                {status === "submitting"
                  ? "..."
                  : status === "error"
                  ? "Try Again"
                  : "Subscribe"}
              </button>
            </form>

            <p className="text-[10px] text-[#404040] text-center mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
