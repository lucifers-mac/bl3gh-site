import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "BL3GH terms and conditions. By using bl3gh.co you agree to these terms.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <h1 className="bl3gh-mark text-3xl tracking-wider text-[#f0f0f0] mb-8">
        Terms &amp; Conditions
      </h1>

      <div className="space-y-8 text-[#b0b0b0] leading-relaxed">
        <section>
          <p>
            This website is operated by House of BL3GH, LLC, doing business as BL3GH.CO 
            (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or 
            using this site, you agree to be bound by the following terms.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Age Requirement</h2>
          <p>
            You must be at least 18 years of age or the age of majority in your jurisdiction 
            to make purchases on this site.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Orders & Payment</h2>
          <ul className="space-y-2">
            <li>All products are made to order or produced in limited quantities.</li>
            <li>Production and fulfillment times may vary.</li>
            <li>All sales are final except for damaged, defective, or incorrect items.</li>
            <li>No refunds or exchanges are offered for sizing issues, buyer&apos;s remorse, or normal wear.</li>
            <li>Claims for damaged or incorrect items must be submitted within 7 days of delivery.</li>
            <li>We are not responsible for carrier delays, incorrect addresses, or packages marked as delivered.</li>
          </ul>
          <p className="mt-3">
            By completing checkout, you acknowledge and agree to these terms.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Intellectual Property</h2>
          <p>
            All content on this site — including but not limited to logos, artwork, designs, 
            product names, photography, text, and the BL3GH.CO® mark — is the property of 
            House of BL3GH, LLC and is protected by U.S. and international copyright and 
            trademark laws. You may not reproduce, distribute, modify, or create derivative 
            works from any content without our prior written consent.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Site Use</h2>
          <p>
            You agree to use this site for lawful purposes only. You may not use the site 
            in any way that could damage, disable, or impair it, or interfere with any other 
            party&apos;s use. Unauthorized use of this site may give rise to a claim for damages 
            and/or be a criminal offense.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Product Availability & Pricing</h2>
          <p>
            All products are subject to availability. We reserve the right to discontinue 
            any product at any time. Prices are subject to change without notice. We reserve 
            the right to cancel any order due to pricing errors, stock issues, or suspected 
            fraud.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, House of BL3GH, LLC shall not be liable 
            for any indirect, incidental, special, consequential, or punitive damages arising 
            from your use of this site or purchase of any products. Our total liability for 
            any claim shall not exceed the amount you paid for the product giving rise to 
            the claim.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the 
            State of California, without regard to conflict of law principles. Any disputes 
            shall be resolved in the courts located in Sonoma County, California.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Changes to These Terms</h2>
          <p>
            We reserve the right to update these terms at any time. Changes take effect 
            immediately upon posting. Continued use of the site after changes constitutes 
            acceptance of the updated terms.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Contact</h2>
          <p>
            Questions about these terms? Contact{" "}
            <a href="mailto:support@bl3gh.co" className="text-[#f0f0f0] hover:underline">
              support@bl3gh.co
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
