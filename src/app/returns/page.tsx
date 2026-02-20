import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns & Refunds",
  description: "BL3GH returns and refund policy. All sales are final except for damaged or defective items.",
};

export default function ReturnsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <h1 className="bl3gh-mark text-3xl tracking-wider text-[#f0f0f0] mb-8">
        Returns &amp; Refunds
      </h1>

      <div className="space-y-8 text-[#b0b0b0] leading-relaxed">
        <section>
          <p>
            This policy applies to all purchases made through bl3gh.co, operated by 
            House of BL3GH, LLC.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Overview</h2>
          <p>
            All items are produced in limited quantities or made to order. Because of this, 
            all sales are final except in cases of damage, defect, or misprint.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Non-Returnable Items</h2>
          <ul className="space-y-2">
            <li>Sale or discounted items</li>
            <li>Limited drops or capsule collection items</li>
            <li>Gift cards</li>
            <li>Digital products</li>
            <li>Items worn, washed, or used</li>
            <li>Size-related issues</li>
          </ul>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Damaged or Defective Items</h2>
          <p>
            If your item arrives damaged, misprinted, or defective, you must contact us 
            within 7 days of delivery. Email{" "}
            <a href="mailto:support@bl3gh.co" className="text-[#f0f0f0] hover:underline">
              support@bl3gh.co
            </a>{" "}
            with your order number and clear photos of the issue. Approved claims will be 
            replaced or refunded at no cost.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Refund Processing</h2>
          <p>
            Approved refunds are issued to the original payment method. Processing times 
            vary depending on your payment provider.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Return Shipping</h2>
          <p>
            Return shipping costs are the responsibility of the customer unless the return 
            is due to our error.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Contact</h2>
          <p>
            For all order-related issues, contact{" "}
            <a href="mailto:support@bl3gh.co" className="text-[#f0f0f0] hover:underline">
              support@bl3gh.co
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
