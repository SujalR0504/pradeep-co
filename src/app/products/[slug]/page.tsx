import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Shield, Package, Sparkles, Send, MapPin } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";
import ProductDetailClient from "./ProductDetailClient";

const SLUG_ALIASES: Record<string, string> = {
  "blanched-peanuts": "whole-blanched-peanuts",
  "inshell-groundnuts": "peanuts-in-shell",
  "peanut-oil": "cold-pressed-groundnut-oil",
  "peanut-butter": "pure-peanut-butter",
  "samman-peanuts": "samman-peanut",
  "bold-runner-peanuts": "bold-peanuts",
};

export async function generateStaticParams() {
  const baseParams = PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
  const aliasParams = Object.keys(SLUG_ALIASES).map((alias) => ({
    slug: alias,
  }));
  return [...baseParams, ...aliasParams];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const canonicalSlug = SLUG_ALIASES[slug] || slug;
  const product = PRODUCTS.find((p) => p.slug === canonicalSlug);
  if (!product) return { title: "Product Not Found | Pradeep Trading Company" };

  return {
    title: `${product.name} | Pradeep Trading Company`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Export Specifications • Pradeep Trading Company`,
      description: product.shortDescription,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const canonicalSlug = SLUG_ALIASES[slug] || slug;
  const product = PRODUCTS.find((p) => p.slug === canonicalSlug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
