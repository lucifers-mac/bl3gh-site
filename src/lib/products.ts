export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  collection: "the-four-judgments" | "archive";
  chapter?: string;
  price: number;
  description: string;
  lore: string;
  colorways: { name: string; hex: string; image: string; modelImage?: string }[];
  sizes: string[];
  limited: boolean;
  inStock: boolean;
  imageLabel?: string;
  altImageLabel?: string;
}

export const products: Product[] = [
  // THE FOUR JUDGMENTS
  {
    slug: "the-prophet",
    name: "The Prophet",
    subtitle: "The Four Judgments — I",
    collection: "the-four-judgments",
    chapter: "I",
    price: 43,
    description: "Printed in-house at BL3GH.CO. Heavyweight cotton. Limited run — not restocked. Free US shipping.",
    lore: "He does not preach. He sees what others refuse to. He carries foresight as burden, not authority. The Prophet announces inevitability — he does not initiate judgment, he confirms it was always coming.",
    colorways: [
      { name: "White", hex: "#f0f0f0", image: "/products/prophet-white.webp", modelImage: "/products/prophet-white-model.webp" },
      { name: "Black", hex: "#111111", image: "/products/prophet-black.webp", modelImage: "/products/prophet-black-model.webp" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    limited: true,
    inStock: true,
  },
  {
    slug: "the-executioner",
    name: "The Executioner",
    subtitle: "The Four Judgments — II",
    collection: "the-four-judgments",
    chapter: "II",
    price: 43,
    description: "Printed in-house at BL3GH.CO. Heavyweight cotton. Limited run — not restocked. Free US shipping.",
    lore: "He is not rage. He is inevitability. The moment talk ends and outcome begins. This piece anchors the capsule in certainty.",
    colorways: [
      { name: "White", hex: "#f0f0f0", image: "/products/executioner-white.webp", modelImage: "/products/executioner-white-model.webp" },
      { name: "Black", hex: "#111111", image: "/products/executioner-black.webp", modelImage: "/products/executioner-black-model.webp" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    limited: true,
    inStock: true,
  },
  {
    slug: "the-heretic",
    name: "The Heretic",
    subtitle: "The Four Judgments — III",
    collection: "the-four-judgments",
    chapter: "III",
    price: 43,
    description: "Printed in-house at BL3GH.CO. Heavyweight cotton. Limited run — not restocked. Free US shipping.",
    lore: "He refuses imposed truth. He dismantles belief systems and exposes hypocrisy. Where the Prophet warns and the Executioner enforces, the Heretic destabilizes.",
    colorways: [
      { name: "White", hex: "#f0f0f0", image: "/products/heretic-white.webp", modelImage: "/products/heretic-white-model.webp" },
      { name: "Black", hex: "#111111", image: "/products/heretic-black.webp", modelImage: "/products/heretic-black-model.webp" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    limited: true,
    inStock: true,
  },
  {
    slug: "the-witness",
    name: "The Witness",
    subtitle: "The Four Judgments — IV",
    collection: "the-four-judgments",
    chapter: "IV",
    price: 43,
    description: "Printed in-house at BL3GH.CO. Heavyweight cotton. Limited run — not restocked. Free US shipping.",
    lore: "He judges last. He does not act. He records. He is silent presence, unblinking and enduring. Nothing dramatic — because everything has already happened. The Witness completes the cycle.",
    colorways: [
      { name: "White", hex: "#f0f0f0", image: "/products/witness-white.webp", modelImage: "/products/witness-white-model.webp" },
      { name: "Black", hex: "#111111", image: "/products/witness-black.webp", modelImage: "/products/witness-black-model.webp" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    limited: true,
    inStock: true,
  },

  // ARCHIVE
  {
    slug: "occult-ascension",
    name: "Occult Ascension",
    subtitle: "Archive Release",
    collection: "archive",
    price: 43,
    description: "Printed in-house at BL3GH.CO. Heavyweight cotton. Limited run. Free US shipping.",
    lore: "",
    colorways: [
      { name: "Black", hex: "#111111", image: "/products/occult-ascension.webp" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    limited: true,
    inStock: true,
  },
  {
    slug: "favorite-ex-deathcore",
    name: "I'm Her Favorite Ex Deathcore Tee",
    subtitle: "Archive Release",
    collection: "archive",
    price: 43,
    description: "Printed in-house at BL3GH.CO. Heavyweight cotton. Limited run. Free US shipping.",
    lore: "",
    colorways: [
      { name: "Black", hex: "#111111", image: "/products/archive-placeholder.webp" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    limited: true,
    inStock: true,
  },
  {
    slug: "not-today-jesus",
    name: "NOT TODAY, JESUS — Baphomet",
    subtitle: "Archive Release",
    collection: "archive",
    price: 43,
    description: "Printed in-house at BL3GH.CO. Heavyweight cotton. Limited run. Free US shipping.",
    lore: "",
    colorways: [
      { name: "Black", hex: "#111111", image: "/products/not-today-jesus.webp", modelImage: "/products/not-today-jesus-model.webp" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    limited: true,
    inStock: true,
  },
  {
    slug: "sandpit-turtle",
    name: "THIS IS SANDPIT TURTLE",
    subtitle: "Archive Release",
    collection: "archive",
    price: 43,
    description: "Printed in-house at BL3GH.CO. Heavyweight cotton. Limited run. Free US shipping.",
    lore: "",
    colorways: [
      { name: "White", hex: "#f0f0f0", image: "/products/sandpit-turtle.webp", modelImage: "/products/sandpit-turtle-model.webp" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    limited: true,
    inStock: true,
  },
  {
    slug: "hardcore-maxx-hoodie",
    name: "Hardcore Maxx Hoodie",
    subtitle: "Archive Release",
    collection: "archive",
    price: 70,
    description: "Printed in-house at BL3GH.CO. Heavyweight fleece. Limited run. Free US shipping.",
    lore: "",
    colorways: [
      { name: "White", hex: "#f0f0f0", image: "/products/hardcore-maxx.webp", modelImage: "/products/hardcore-maxx-model.webp" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    limited: true,
    inStock: true,
    imageLabel: "Front",
    altImageLabel: "Back",
  },
];

export const BUNDLE_PRICE = 150;
export const BUNDLE_SAVINGS = 43 * 4 - BUNDLE_PRICE;

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getJudgments(): Product[] {
  return products.filter((p) => p.collection === "the-four-judgments");
}

export function getArchive(): Product[] {
  return products.filter((p) => p.collection === "archive");
}
