"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";

interface BundleSectionProps {
  judgments: Product[];
  bundlePrice: number;
  bundleSavings: number;
}

export function BundleSection({ judgments, bundlePrice, bundleSavings }: BundleSectionProps) {
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("White");

  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = ["White", "Black"];

  return (
    <section id="bundle" className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="bl3gh-mark text-2xl md:text-3xl tracking-wider text-[#f0f0f0] mb-4">
          The Complete Judgment
        </h2>
        <p className="text-sm text-[#b0b0b0] mb-3">
          All four. One cycle. One price.
        </p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-3xl text-[#f0f0f0] font-light">${bundlePrice}</span>
          <span className="text-sm text-[#707070] line-through">${38 * 4}</span>
          <span className="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded">
            Save ${bundleSavings}
          </span>
        </div>

        {/* Bundle Grid */}
        <div className="grid grid-cols-4 gap-3 mb-8">
          {judgments.map((p) => (
            <div key={p.slug} className="aspect-square bg-[#0a0a0a] border border-[#1a1a1a] rounded flex items-center justify-center">
              <span className="text-[10px] text-[#707070] tracking-wider uppercase">{p.name.replace("The ", "")}</span>
            </div>
          ))}
        </div>

        {/* Size Selection */}
        <div className="mb-6">
          <label className="text-xs tracking-wider text-[#707070] uppercase block mb-3">
            Size: {selectedSize}
          </label>
          <div className="flex items-center justify-center gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-10 h-10 border rounded flex items-center justify-center text-sm transition-colors ${
                  selectedSize === size
                    ? "border-[#f0f0f0] text-[#f0f0f0]"
                    : "border-[#333] text-[#b0b0b0] hover:border-[#666]"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div className="mb-8">
          <label className="text-xs tracking-wider text-[#707070] uppercase block mb-3">
            Color: {selectedColor}
          </label>
          <div className="flex items-center justify-center gap-3">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-10 h-10 rounded-full border-2 transition-colors ${
                  selectedColor === color 
                    ? "border-[#f0f0f0]" 
                    : "border-[#333] hover:border-[#666]"
                }`}
                style={{ backgroundColor: color === "White" ? "#f0f0f0" : "#111111" }}
                title={color}
              />
            ))}
          </div>
        </div>

        <button
          className="snipcart-add-item bg-[#f0f0f0] text-black px-10 py-4 text-sm tracking-wider uppercase font-medium hover:bg-white transition-colors"
          data-item-id={`complete-judgment-bundle-${selectedColor.toLowerCase()}-${selectedSize.toLowerCase()}`}
          data-item-price={bundlePrice}
          data-item-description={`All four Judgments in one complete set. The Prophet, The Executioner, The Heretic, and The Witness. ${selectedColor}, Size ${selectedSize}`}
          data-item-image="/products/complete-judgment.jpg"
          data-item-name={`The Complete Judgment - ${selectedColor}`}
          data-item-custom1-name="Size"
          data-item-custom1-value={selectedSize}
          data-item-custom2-name="Color"
          data-item-custom2-value={selectedColor}
        >
          Claim the Complete Judgment — ${bundlePrice}
        </button>
      </div>
    </section>
  );
}