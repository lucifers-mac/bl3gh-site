"use client";

import { useState } from "react";

export function EmailForm({ placeholder = "email@address.com", buttonText = "Join", className = "" }: {
  placeholder?: string;
  buttonText?: string;
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");

    try {
      // Use a simple Formspree endpoint for email capture
      const response = await fetch('https://formspree.io/f/YOUR_EMAIL_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email,
          source: placeholder.includes('Chapter') ? 'Book of BL3GH' : 'Email Signup',
          page: window.location.pathname 
        }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    // Reset status after 3 seconds
    setTimeout(() => setStatus("idle"), 3000);
  }

  if (status === "success") {
    return (
      <div className={`text-center py-4 ${className}`}>
        <p className="text-sm text-green-400">Added to the list ✓</p>
      </div>
    );
  }

  return (
    <form className={`flex gap-3 ${className}`} onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        disabled={status === "submitting"}
        className="flex-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#404040] focus:border-[#333] focus:outline-none transition-colors disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === "submitting" || !email}
        className="px-6 py-3 border border-[#333] text-sm tracking-wider uppercase text-[#b0b0b0] rounded hover:bg-[#111] hover:text-[#f0f0f0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "..." : buttonText}
      </button>
      
      {status === "error" && (
        <div className="absolute mt-14 text-xs text-red-400">
          Error - please try again
        </div>
      )}
    </form>
  );
}

export function SmallEmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");

    // TODO: Replace with actual email service
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 2000);
    }, 1000);
  }

  if (status === "success") {
    return (
      <div className="text-center py-2">
        <p className="text-xs text-green-400">Subscribed ✓</p>
      </div>
    );
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email@address.com"
        required
        disabled={status === "submitting"}
        className="flex-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded px-3 py-2 text-sm text-[#f0f0f0] placeholder-[#404040] focus:border-[#333] focus:outline-none disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === "submitting" || !email}
        className="px-4 py-2 border border-[#333] text-sm text-[#b0b0b0] rounded hover:bg-[#111] hover:text-[#f0f0f0] transition-colors disabled:opacity-50"
      >
        {status === "submitting" ? "..." : "Join"}
      </button>
    </form>
  );
}