"use client";

export function EmailForm({ placeholder = "email@address.com", buttonText = "Join", className = "" }: {
  placeholder?: string;
  buttonText?: string;
  className?: string;
}) {
  return (
    <form
      className={`flex gap-3 ${className}`}
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: Connect to Mailchimp/Klaviyo
        alert("Email signup coming soon!");
      }}
    >
      <input
        type="email"
        placeholder={placeholder}
        required
        className="flex-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#404040] focus:border-[#333] focus:outline-none transition-colors"
      />
      <button
        type="submit"
        className="px-6 py-3 border border-[#333] text-sm tracking-wider uppercase text-[#b0b0b0] rounded hover:bg-[#111] hover:text-[#f0f0f0] transition-colors"
      >
        {buttonText}
      </button>
    </form>
  );
}

export function SmallEmailForm() {
  return (
    <form
      className="flex gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Email signup coming soon!");
      }}
    >
      <input
        type="email"
        placeholder="email@address.com"
        required
        className="flex-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded px-3 py-2 text-sm text-[#f0f0f0] placeholder-[#404040] focus:border-[#333] focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 border border-[#333] text-sm text-[#b0b0b0] rounded hover:bg-[#111] hover:text-[#f0f0f0] transition-colors"
      >
        Join
      </button>
    </form>
  );
}
