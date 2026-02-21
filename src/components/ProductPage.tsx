"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

interface ProductPageProps {
  product: Product;
  siblings: Product[];
}

export function ProductPage({ product, siblings }: ProductPageProps) {
  const [selectedColor, setSelectedColor] = useState(product.colorways[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2] || product.sizes[0]);
  const [addedToCart, setAddedToCart] = useState(false);
  const [showModel, setShowModel] = useState(false);

  const currentImage = showModel && selectedColor.modelImage
    ? selectedColor.modelImage
    : selectedColor.image;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div>
          <div className="aspect-square bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg overflow-hidden relative sticky top-20">
            <Image
              src={currentImage}
              alt={`${product.name} - ${selectedColor.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {product.limited && (
              <div className="absolute top-4 left-4">
                <span className="text-[10px] tracking-widest uppercase text-[#707070] bg-black/80 px-2 py-1 rounded">
                  Limited Run
                </span>
              </div>
            )}
            {/* Image toggle */}
            {selectedColor.modelImage && (
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={() => setShowModel(false)}
                  className={`text-[10px] tracking-wider uppercase px-3 py-1.5 rounded transition-colors ${
                    !showModel
                      ? "bg-white/20 text-white backdrop-blur-sm"
                      : "bg-black/50 text-[#707070] backdrop-blur-sm hover:text-white"
                  }`}
                >
                  Product
                </button>
                <button
                  onClick={() => setShowModel(true)}
                  className={`text-[10px] tracking-wider uppercase px-3 py-1.5 rounded transition-colors ${
                    showModel
                      ? "bg-white/20 text-white backdrop-blur-sm"
                      : "bg-black/50 text-[#707070] backdrop-blur-sm hover:text-white"
                  }`}
                >
                  On Model
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div>
          {product.chapter && (
            <div className="text-xs tracking-[0.3em] text-[#707070] uppercase mb-2">
              The Four Judgments — Chapter {product.chapter}
            </div>
          )}

          <h1 className="bl3gh-mark text-3xl md:text-4xl tracking-wider text-[#f0f0f0] mb-4">
            {product.name}
          </h1>

          {product.lore && (
            <p className="lore-text text-[#b0b0b0] leading-relaxed mb-6">
              &ldquo;{product.lore}&rdquo;
            </p>
          )}

          <div className="text-2xl text-[#f0f0f0] mb-8">${product.price}</div>

          {/* Colorways */}
          {product.colorways.length > 1 && (
            <div className="mb-6">
              <label className="text-xs tracking-wider text-[#707070] uppercase block mb-3">
                Color: {selectedColor.name}
              </label>
              <div className="flex items-center gap-3">
                {product.colorways.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-colors ${
                      selectedColor.name === color.name
                        ? "border-[#f0f0f0]"
                        : "border-[#333] hover:border-[#666]"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          <div className="mb-8">
            <label className="text-xs tracking-wider text-[#707070] uppercase block mb-3">
              Size: {selectedSize}
            </label>
            <div className="flex items-center gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 border rounded flex items-center justify-center text-sm transition-colors ${
                    selectedSize === size
                      ? "border-[#f0f0f0] text-[#f0f0f0]"
                      : "border-[#1a1a1a] text-[#b0b0b0] hover:border-[#333]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart - Snipcart */}
          <button
            className={`snipcart-add-item w-full py-4 text-sm tracking-wider uppercase font-medium transition-all duration-300 mb-4 ${
              addedToCart
                ? "bg-green-600 text-white"
                : "bg-[#f0f0f0] text-black hover:bg-white"
            }`}
            data-item-id={`${product.slug}-${selectedColor.name.toLowerCase()}-${selectedSize.toLowerCase()}`}
            data-item-price={product.price}
            data-item-description={`${product.description} - ${selectedColor.name}, Size ${selectedSize}`}
            data-item-image={selectedColor.image}
            data-item-name={`${product.name} - ${selectedColor.name}`}
            data-item-custom1-name="Size"
            data-item-custom1-value={selectedSize}
            data-item-custom2-name="Color"
            data-item-custom2-value={selectedColor.name}
            onClick={() => {
              setAddedToCart(true);
              setTimeout(() => setAddedToCart(false), 2000);
            }}
          >
            {addedToCart ? "✓ Added to Cart" : `Add to Cart — $${product.price}`}
          </button>

          {product.collection === "the-four-judgments" && (
            <Link
              href="/the-four-judgments#bundle"
              className="block w-full text-center border border-[#333] py-3 text-sm tracking-wider text-[#b0b0b0] hover:text-[#f0f0f0] hover:border-[#666] transition-colors mb-8"
            >
              Or get all four — The Complete Judgment
            </Link>
          )}

          {/* Details */}
          <div className="border-t border-[#1a1a1a] pt-6 space-y-3">
            <h3 className="text-xs tracking-wider text-[#707070] uppercase mb-3">Details</h3>
            <ul className="space-y-2 text-sm text-[#b0b0b0]">
              <li className="flex items-center gap-2">
                <span className="text-[#707070]">·</span>
                Printed in-house at BL3GH.CO
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#707070]">·</span>
                Heavyweight cotton
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#707070]">·</span>
                Limited run — not restocked
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#707070]">·</span>
                Ships within 3–5 business days
              </li>
            </ul>
          </div>

          {/* Cross-sell siblings */}
          {siblings.length > 0 && (
            <div className="border-t border-[#1a1a1a] pt-6 mt-8">
              <h3 className="text-xs tracking-wider text-[#707070] uppercase mb-4">
                From The Four Judgments
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {siblings.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/product/${s.slug}`}
                    className="group"
                  >
                    <div className="aspect-square bg-[#0a0a0a] border border-[#1a1a1a] rounded overflow-hidden relative mb-2">
                      <Image
                        src={s.colorways[0].image}
                        alt={s.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 33vw, 15vw"
                      />
                    </div>
                    <p className="text-xs text-[#b0b0b0] group-hover:text-[#f0f0f0] transition-colors">{s.name}</p>
                    <p className="text-xs text-[#707070]">${s.price}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
