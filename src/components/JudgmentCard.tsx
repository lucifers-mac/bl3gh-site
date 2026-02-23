"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

interface JudgmentCardProps {
  product: Product;
  index: number;
}

export function JudgmentCard({ product, index }: JudgmentCardProps) {
  const [selectedColorway, setSelectedColorway] = useState(0);

  const currentImage =
    product.colorways[selectedColorway].modelImage ||
    product.colorways[selectedColorway].image;

  return (
    <section className="border-t border-[#1a1a1a] py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
            index % 2 === 1 ? "md:direction-rtl" : ""
          }`}
        >
          {/* Image */}
          <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
            <div className="aspect-square bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg overflow-hidden relative">
              <Image
                src={currentImage}
                alt={`${product.name} — ${product.colorways[selectedColorway].name}`}
                fill
                className="object-contain transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
                key={currentImage} // Force re-render on image change
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] tracking-widest uppercase text-[#707070] bg-black/80 px-2 py-1 rounded">
                  Limited Run
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
            <div className="text-xs tracking-[0.3em] text-[#707070] uppercase mb-3">
              — {product.chapter}. —
            </div>
            <h2 className="bl3gh-mark text-3xl md:text-4xl tracking-wider text-[#f0f0f0] mb-6">
              {product.name}
            </h2>
            <p className="lore-text text-[#b0b0b0] leading-relaxed mb-8">
              &ldquo;{product.lore}&rdquo;
            </p>

            {/* Colorway + Price */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                {product.colorways.map((c, idx) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColorway(idx)}
                    className={`w-6 h-6 rounded-full border transition-all ${
                      selectedColorway === idx
                        ? "border-[#666] ring-2 ring-[#333] ring-offset-2 ring-offset-black scale-110"
                        : "border-[#333] hover:border-[#555] hover:scale-105"
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                    aria-label={`Select ${c.name} colorway`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#707070]">|</span>
              <span className="text-lg text-[#f0f0f0]">${product.price}</span>
            </div>

            {/* Sizes */}
            <p className="text-xs text-[#707070] tracking-wider mb-8">
              Available in {product.sizes[0]}–{product.sizes[product.sizes.length - 1]}
            </p>

            {/* CTA */}
            <Link
              href={`/product/${product.slug}`}
              className="inline-block bg-[#f0f0f0] text-black px-8 py-3 text-sm tracking-wider uppercase font-medium hover:bg-white transition-colors"
            >
              View Product
            </Link>

            <p className="text-xs text-[#707070] mt-4">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
