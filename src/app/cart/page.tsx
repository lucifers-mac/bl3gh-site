"use client";

import { useCart } from "@/contexts/CartContext";
import { EmbeddedCheckoutForm } from "@/components/EmbeddedCheckout";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);

  if (checkingOut && items.length > 0) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="flex items-center justify-between mb-8">
          <h1 className="bl3gh-mark text-3xl tracking-wider text-[#f0f0f0]">
            Checkout
          </h1>
          <button
            onClick={() => setCheckingOut(false)}
            className="text-xs text-[#707070] hover:text-[#b0b0b0] transition-colors uppercase tracking-wider"
          >
            ← Back to Cart
          </button>
        </div>

        <EmbeddedCheckoutForm
          items={items}
          onComplete={() => {
            clearCart();
            window.location.href = "/success";
          }}
        />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="bl3gh-mark text-3xl tracking-wider text-[#f0f0f0] mb-8">
          Cart
        </h1>

        <div className="text-center py-16">
          <p className="text-[#707070] mb-6">Your cart is empty.</p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/the-four-judgments"
              className="inline-block bg-[#f0f0f0] text-black px-6 py-3 text-sm tracking-wider uppercase font-medium hover:bg-white transition-colors"
            >
              The Four Judgments
            </Link>
            <Link
              href="/archive"
              className="inline-block border border-[#333] px-6 py-3 text-sm tracking-wider uppercase text-[#b0b0b0] hover:text-[#f0f0f0] hover:border-[#666] transition-colors"
            >
              The Vault
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="flex items-center justify-between mb-8">
        <h1 className="bl3gh-mark text-3xl tracking-wider text-[#f0f0f0]">
          Cart
        </h1>
        <button
          onClick={clearCart}
          className="text-xs text-[#707070] hover:text-[#b0b0b0] transition-colors uppercase tracking-wider"
        >
          Clear Cart
        </button>
      </div>

      {/* Cart Items */}
      <div className="space-y-6 mb-8">
        {items.map((item) => {
          const itemKey = `${item.slug}-${item.colorway}-${item.size}`;

          return (
            <div
              key={itemKey}
              className="flex gap-4 border-b border-[#1a1a1a] pb-6"
            >
              {/* Product Image */}
              <div className="relative w-24 h-24 bg-[#0a0a0a] rounded overflow-hidden flex-shrink-0">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                    sizes="96px"
                    priority
                  />
                )}
              </div>

              {/* Product Details */}
              <div className="flex-grow">
                <h3 className="text-[#f0f0f0] font-medium mb-1">{item.name}</h3>
                <p className="text-[#707070] text-sm mb-2">
                  {item.colorway} · Size {item.size}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.slug,
                        item.colorway,
                        item.size,
                        item.quantity - 1
                      )
                    }
                    className="w-7 h-7 border border-[#333] text-[#b0b0b0] hover:border-[#666] hover:text-[#f0f0f0] transition-colors flex items-center justify-center"
                  >
                    −
                  </button>
                  <span className="text-[#f0f0f0] w-8 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.slug,
                        item.colorway,
                        item.size,
                        item.quantity + 1
                      )
                    }
                    className="w-7 h-7 border border-[#333] text-[#b0b0b0] hover:border-[#666] hover:text-[#f0f0f0] transition-colors flex items-center justify-center"
                  >
                    +
                  </button>
                  <button
                    onClick={() =>
                      removeItem(item.slug, item.colorway, item.size)
                    }
                    className="ml-4 text-xs text-[#707070] hover:text-[#b0b0b0] transition-colors uppercase tracking-wider"
                  >
                    Remove
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="text-right">
                <p className="text-[#f0f0f0] font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Totals & Checkout */}
      <div className="border-t border-[#1a1a1a] pt-6">
        <div className="max-w-sm ml-auto space-y-3 mb-6">
          <div className="flex justify-between text-[#b0b0b0]">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-[#b0b0b0]">
            <span>Shipping</span>
            <span className="text-green-500">FREE (US)</span>
          </div>
          <div className="flex justify-between text-[#707070] text-sm">
            <span>Tax</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="flex justify-between text-[#f0f0f0] font-medium text-lg pt-3 border-t border-[#1a1a1a]">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex gap-4 justify-end">
          <Link
            href="/the-four-judgments"
            className="inline-block border border-[#333] px-8 py-3 text-sm tracking-wider uppercase text-[#b0b0b0] hover:text-[#f0f0f0] hover:border-[#666] transition-colors"
          >
            Continue Shopping
          </Link>
          <button
            onClick={() => setCheckingOut(true)}
            className="bg-[#f0f0f0] text-black px-12 py-3 text-sm tracking-wider uppercase font-medium hover:bg-white transition-colors"
          >
            Checkout
          </button>
        </div>

        <p className="text-xs text-[#404040] text-right mt-4">
          Secure checkout powered by Stripe
        </p>
      </div>
    </div>
  );
}
