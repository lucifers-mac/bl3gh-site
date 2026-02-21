"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { Product } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";

interface BundleSectionProps {
  judgments: Product[];
  bundlePrice: number;
  bundleSavings: number;
}

export function BundleSection({ judgments, bundlePrice, bundleSavings }: BundleSectionProps) {
  const router = useRouter();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("White");
  const [addedToCart, setAddedToCart] = useState(false);

  const sizes = ["S", "M", "L", "XL", "2XL"];
  const colors = ["White", "Black"];

  const handleAddBundle = () => {
    // Add as a single bundle item at the discounted bundle price
    const firstJudgment = judgments[0];
    const colorway = firstJudgment.colorways.find((c) => c.name === selectedColor) || firstJudgment.colorways[0];

    addItem({
      slug: "complete-judgment-bundle",
      name: "The Complete Judgment — All Four",
      price: bundlePrice,
      colorway: selectedColor,
      size: selectedSize,
      image: colorway.image,
    });

    setAddedToCart(true);

    setTimeout(() => {
      router.push("/cart");
    }, 1500);
  };

  return (
    <section id="bundle" className="border-t border-[#1a1a1a] py-24 bg-[#050505]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="bl3gh-mark text-2xl md:text-3xl tracking-wider text-[#f0f0f0] mb-4">
          The Complete Judgment
        </h2>
        <p className="text-sm text-[#b0b0b0] mb-3">
          All four. One cycle. One price.
        </p>
        <div className="flex items-center justify-center gap-4 mb-2">
          <span className="text-3xl text-[#f0f0f0] font-light">${bundlePrice}</span>
          <span className="text-sm text-[#707070] line-through">${43 * 4}</span>
          <span className="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded">
            Save ${bundleSavings}
          </span>
        </div>
        <p className="text-xs text-green-500 mb-8">FREE US SHIPPING</p>

        {/* Bundle Grid */}
        <div className="grid grid-cols-4 gap-3 mb-8">
          {judgments.map((p) => {
            const colorway = p.colorways.find((c) => c.name === selectedColor) || p.colorways[0];
            return (
              <div key={p.slug} className="aspect-square bg-[#0a0a0a] border border-[#1a1a1a] rounded overflow-hidden relative">
                <Image
                  src={colorway.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, 15vw"
                />
              </div>
            );
          })}
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
          onClick={handleAddBundle}
          disabled={addedToCart}
          className={`px-10 py-4 text-sm tracking-wider uppercase font-medium transition-all duration-300 disabled:opacity-70 ${
            addedToCart 
              ? "bg-green-600 text-white" 
              : "bg-[#f0f0f0] text-black hover:bg-white"
          }`}
        >
          {addedToCart ? "✓ Added — Going to Cart..." : `Claim the Complete Judgment — $${bundlePrice}`}
        </button>
      </div>
    </section>
  );
}
