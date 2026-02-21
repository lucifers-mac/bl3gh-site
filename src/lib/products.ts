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
}

export const products: Product[] = [
  // THE FOUR JUDGMENTS
  {
    slug: "the-prophet",
    name: "The Prophet",
    subtitle: "The Four Judgments — I",
    collection: "the-four-judgments",
    chapter: "I",
    price: 38,
    description: "Printed in-house at BL3GH.CO. Heavyweight cotton. Limited run — not restocked.",
    lore: "He does not preach. He sees what others refuse to. He carries foresight as burden, not authority. The Prophet initiates the Judgment cycle.",
    colorways: [
      { name: "White", hex: "#f0f0f0", image: "/products/prophet-white.png", modelImage: "/products/prophet-white-model.png" },
      { name: "Black", hex: "#111111", image: "/products/prophet-black.png", modelImage: "/products/prophet-black-model.png" },
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
    price: 38,
    description: "Printed in-house at BL3GH.CO. Heavyweight cotton. Limited run — not restocked.",
    lore: "He is not rage. He is inevitability. The moment talk ends and outcome begins. This piece anchors the capsule in certainty.",
    colorways: [
      { name: "White", hex: "#f0f0f0", image: "/products/executioner-white.png", modelImage: "/products/executioner-white-model.png" },
      { name: "Black", hex: "#111111", image: "/products/executioner-black.png", modelImage: "/products/executioner-black-model.png" },
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
    price: 38,
    description: "Printed in-house at BL3GH.CO. Heavyweight cotton. Limited run — not restocked.",
    lore: "He refuses imposed truth. He dismantles belief systems and exposes hypocrisy. Where the Prophet warns and the Executioner enforces, the Heretic destabilizes.",
    colorways: [
      { name: "White", hex: "#f0f0f0", image: "/products/heretic-white.png", modelImage: "/products/heretic-white-model.png" },
      { name: "Black", hex: "#111111", image: "/products/heretic-black.png", modelImage: "/products/heretic-black-model.png" },
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
    price: 38,
    description: "Printed in-house at BL3GH.CO. Heavyweight cotton. Limited run — not restocked.",
    lore: "He judges last. He does not act. He records. He is silent presence, unblinking and enduring. Nothing dramatic — because everything has already happened. The Witness completes the cycle.",
    colorways: [
      { name: "White", hex: "#f0f0f0", image: "/products/witness-white.png", modelImage: "/products/witness-white-model.png" },
      { name: "Black", hex: "#111111", image: "/products/witness-black.png", modelImage: "/products/witness-black-model.png" },
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
    price: 38,
    description: "Printed in-house at BL3GH.CO. Heavyweight cotton. Limited run.",
    lore: "",
    colorways: [
      { name: "Black", hex: "#111111", image: "/products/occult-ascension.jpg" },
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
    price: 38,
    description: "Printed in-house at BL3GH.CO. Heavyweight cotton. Limited run.",
    lore: "",
    colorways: [
      { name: "Black", hex: "#111111", image: "/products/favorite-ex.jpg" },
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
    price: 38,
    description: "Printed in-house at BL3GH.CO. Heavyweight cotton. Limited run.",
    lore: "",
    colorways: [
      { name: "Black", hex: "#111111", image: "/products/not-today-jesus.jpg" },
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
    price: 38,
    description: "Printed in-house at BL3GH.CO. Heavyweight cotton. Limited run.",
    lore: "",
    colorways: [
      { name: "Black", hex: "#111111", image: "/products/sandpit-turtle.jpg" },
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
    price: 65,
    description: "Printed in-house at BL3GH.CO. Heavyweight fleece. Limited run.",
    lore: "",
    colorways: [
      { name: "Black", hex: "#111111", image: "/products/hardcore-maxx.jpg" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    limited: true,
    inStock: true,
  },
];

export const BUNDLE_PRICE = 135;
export const BUNDLE_SAVINGS = 38 * 4 - BUNDLE_PRICE;

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getJudgments(): Product[] {
  return products.filter((p) => p.collection === "the-four-judgments");
}

export function getArchive(): Product[] {
  return products.filter((p) => p.collection === "archive");
}
