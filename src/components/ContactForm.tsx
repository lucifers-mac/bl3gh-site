"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      // Use Formspree (free form handler)
      const response = await fetch('https://formspree.io/f/maqddjok', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      alert('Error sending message. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <p className="text-[#b0b0b0] text-lg mb-2">Message received.</p>
        <p className="text-[#707070] text-sm">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-xs tracking-wider text-[#707070] uppercase block mb-2">Name</label>
          <input
            name="name"
            type="text"
            required
            className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#404040] focus:border-[#333] focus:outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-xs tracking-wider text-[#707070] uppercase block mb-2">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#404040] focus:border-[#333] focus:outline-none transition-colors"
            placeholder="email@address.com"
          />
        </div>
      </div>

      <div>
        <label className="text-xs tracking-wider text-[#707070] uppercase block mb-2">Subject</label>
        <select 
          name="subject"
          className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded px-4 py-3 text-sm text-[#f0f0f0] focus:border-[#333] focus:outline-none transition-colors"
        >
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
          name="message"
          rows={6}
          required
          className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#404040] focus:border-[#333] focus:outline-none resize-none transition-colors"
          placeholder="What's on your mind..."
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="bg-[#f0f0f0] text-black px-8 py-3 text-sm tracking-wider uppercase font-medium hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}