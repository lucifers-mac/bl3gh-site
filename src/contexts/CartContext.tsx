"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface CartItem {
  slug: string;
  name: string;
  price: number;
  colorway: string;
  size: string;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (slug: string, colorway: string, size: string) => void;
  updateQuantity: (slug: string, colorway: string, size: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("bl3gh-cart");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load cart:", e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("bl3gh-cart", JSON.stringify(items));
  }, [items]);

  const addItem = (item: Omit<CartItem, "quantity">) => {
    setItems((current) => {
      const existing = current.find(
        (i) => i.slug === item.slug && i.colorway === item.colorway && i.size === item.size
      );

      if (existing) {
        return current.map((i) =>
          i.slug === item.slug && i.colorway === item.colorway && i.size === item.size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...current, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (slug: string, colorway: string, size: string) => {
    setItems((current) =>
      current.filter((i) => !(i.slug === slug && i.colorway === colorway && i.size === size))
    );
  };

  const updateQuantity = (slug: string, colorway: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(slug, colorway, size);
      return;
    }

    setItems((current) =>
      current.map((i) =>
        i.slug === slug && i.colorway === colorway && i.size === size ? { ...i, quantity } : i
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, total, itemCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
