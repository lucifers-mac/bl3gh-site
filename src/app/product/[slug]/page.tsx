import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProduct, getJudgments } from "@/lib/products";
import { ProductPage } from "@/components/ProductPage";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.lore || product.description} $${product.price}`,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const judgments = getJudgments();
  const siblings = product.collection === "the-four-judgments"
    ? judgments.filter((p) => p.slug !== product.slug)
    : [];

  return <ProductPage product={product} siblings={siblings} />;
}