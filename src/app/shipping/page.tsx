import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "BL3GH shipping policy. All orders ship from Santa Rosa, CA.",
};

export default function ShippingPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <h1 className="bl3gh-mark text-3xl tracking-wider text-[#f0f0f0] mb-8">
        Shipping Policy
      </h1>

      <div className="space-y-8 text-[#b0b0b0] leading-relaxed">
        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Processing Time</h2>
          <p>
            All orders are printed and packed in-house. Please allow 3–5 business days 
            for processing before shipment. During drop launches, processing times may 
            extend to 5–7 business days due to volume.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Domestic Shipping (US)</h2>
          <ul className="space-y-2">
            <li><span className="text-[#707070]">Standard:</span> 5–7 business days · USPS First Class / Priority</li>
            <li><span className="text-[#707070]">Expedited:</span> 2–3 business days · USPS Priority</li>
          </ul>
          <p className="mt-3 text-sm text-[#707070]">
            Shipping rates calculated at checkout based on weight and destination.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">International Shipping</h2>
          <p>
            International shipping is available to select countries. Delivery times vary 
            by destination (typically 10–21 business days). International customers are 
            responsible for any customs duties, taxes, or import fees charged by their country.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Tracking</h2>
          <p>
            All orders include tracking. You&apos;ll receive a tracking number via email 
            once your order ships.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Returns & Exchanges</h2>
          <p>
            Due to the limited nature of our releases, all sales are final. We do not 
            accept returns or exchanges unless the item arrives damaged or defective. 
            If you receive a damaged item, contact us within 7 days of delivery with 
            photos and we&apos;ll make it right.
          </p>
        </section>

        <div className="h-px bg-[#1a1a1a]" />

        <section>
          <h2 className="text-sm tracking-wider text-[#f0f0f0] uppercase mb-3">Ship From</h2>
          <p className="text-[#707070]">
            All orders ship from Santa Rosa, CA · House of BL3GH, LLC
          </p>
        </section>
      </div>
    </div>
  );
}
