import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "BL3GH privacy policy. How we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <h1 className="bl3gh-mark text-3xl tracking-wider text-[#f0f0f0] mb-8">
        Privacy Policy
      </h1>

      <div className="space-y-8 text-[#b0b0b0] leading-relaxed">
        <section>
          <p>
            This website is operated by House of BL3GH, LLC, doing business as BL3GH.CO 
            (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). Our website address 
            is https://bl3gh.co. This policy explains what data we collect, how we use it, 
            and your rights.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Information We Collect</h2>
          <p className="mb-3">When you interact with our site, we may collect:</p>
          <ul className="space-y-2">
            <li><span className="text-[#707070]">Orders:</span> Name, email, billing and shipping address, phone number, and order details</li>
            <li><span className="text-[#707070]">Email signup:</span> Email address when you subscribe to updates</li>
            <li><span className="text-[#707070]">Contact form:</span> Name, email, and message content</li>
            <li><span className="text-[#707070]">Automatic:</span> IP address, browser type, pages visited, and referring URLs via analytics</li>
          </ul>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">How We Use Your Data</h2>
          <ul className="space-y-2">
            <li>Process and fulfill your orders</li>
            <li>Send order confirmations and shipping updates</li>
            <li>Send marketing emails (only if you opted in — you can unsubscribe anytime)</li>
            <li>Improve our site and product offerings</li>
            <li>Prevent fraud and abuse</li>
          </ul>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Cookies</h2>
          <p>
            We use cookies to enhance your browsing experience and analyze site traffic. 
            Our payment processor (Snipcart) uses cookies necessary to operate the shopping 
            cart. You can disable cookies in your browser settings, but some site features 
            may not work properly.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Payments</h2>
          <p>
            Payments are processed securely through Snipcart and its underlying payment 
            providers (Stripe, PayPal). We do not store credit card numbers or full payment 
            details on our servers. All payment data is handled by PCI-compliant third parties.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Embedded Content</h2>
          <p>
            Pages on this site may include embedded content from third parties (videos, 
            social media). This content may collect data and use cookies as if you visited 
            those sites directly.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Who We Share Data With</h2>
          <p>
            We share personal data only with trusted third parties required to operate our 
            store, including:
          </p>
          <ul className="space-y-2 mt-3">
            <li>Payment processors (Snipcart, Stripe, PayPal)</li>
            <li>Shipping carriers (USPS)</li>
            <li>Email service providers (for marketing emails)</li>
            <li>Analytics tools (for site traffic data)</li>
          </ul>
          <p className="mt-3">We do not sell your personal data.</p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Data Retention</h2>
          <p>
            Order records and account information are retained for legal, accounting, and 
            operational purposes. Email subscriber data is retained until you unsubscribe.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Your Rights</h2>
          <p>
            You may request an exported file of your personal data or request deletion by 
            contacting{" "}
            <a href="mailto:support@bl3gh.co" className="text-[#f0f0f0] hover:underline">
              support@bl3gh.co
            </a>. 
            California residents have additional rights under the CCPA — contact us for details.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Changes take effect 
            immediately upon posting.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Contact</h2>
          <p>
            Questions about your data? Contact{" "}
            <a href="mailto:support@bl3gh.co" className="text-[#f0f0f0] hover:underline">
              support@bl3gh.co
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
