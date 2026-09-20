"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Filter, Package, ShieldCheck, Sparkles } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import ContactCtaSection from "@/components/sections/ContactCtaSection";

const CATEGORIES = [
  "All Products",
  "Raw Kernels",
  "In-Shell",
  "Blanched",
  "Value-Added",
  "Specialty Brands",
] as const;

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");

  const filteredProducts =
    selectedCategory === "All Products"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex flex-col w-full bg-[#FFFDF8] text-[#2E2117] pt-24">
      {/* Page Hero Header */}
      <section className="relative w-full py-16 sm:py-24 border-b border-[#5A3218]/15 bg-[#F7F1E7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5A3218]/10 border border-[#5A3218]/20 text-xs font-mono tracking-widest text-[#5A3218] uppercase">
              <Package className="w-3.5 h-3.5 text-[#5A3218]" />
              <span>PRADEEP TRADING COMPANY • COMMODITY EXPORT CATALOG</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.02] text-[#2E2117]">
              Premium Groundnut &amp;
              <span className="block italic font-light text-[#5A3218]">
                Peanut Product Portfolio.
              </span>
            </h1>

            <p className="text-base sm:text-lg font-sans text-[#2E2117]/80 font-light leading-relaxed">
              Precision-sorted, calibrated caliber grades, and export packaging formats engineered for maritime stability.
              All consignments comply with strict moisture ceiling &lt; 7.5% and destination-certified aflatoxin tolerances.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="py-8 border-b border-[#5A3218]/15 bg-[#FFFDF8] sticky top-[68px] z-30 backdrop-blur-md bg-[#FFFDF8]/90">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#5A3218] text-[#FFFDF8] font-bold shadow-sm"
                    : "bg-[#F7F1E7] text-[#2E2117]/80 hover:text-[#5A3218] hover:bg-[#5A3218]/10 border border-[#5A3218]/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col justify-between bg-[#FFFDF8] border border-[#5A3218]/20 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#5A3218]/40"
              >
                {/* Product Image Frame */}
                <div className="relative aspect-[4/3] w-full bg-[#F7F1E7] overflow-hidden p-6 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#5A3218] text-[#FFFDF8] text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full">
                    {product.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-[#FFFDF8]/90 text-[#7A4824] text-[9px] font-mono px-2.5 py-1 rounded-full border border-[#5A3218]/15">
                    {product.size || product.grade}
                  </div>
                </div>

                {/* Product Content Body */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl text-[#2E2117] font-medium group-hover:text-[#5A3218] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs font-sans text-[#2E2117]/75 mt-2 line-clamp-3 leading-relaxed font-light">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Specifications Pill Strip */}
                  <div className="space-y-2 pt-2 border-t border-[#5A3218]/10 text-[10px] font-mono">
                    <div className="flex items-center justify-between text-[#2E2117]/70">
                      <span>COUNTS / OUNCE:</span>
                      <span className="font-bold text-[#5A3218]">{product.specs.counts || "Custom Caliber"}</span>
                    </div>
                    <div className="flex items-center justify-between text-[#2E2117]/70">
                      <span>MOISTURE CEILING:</span>
                      <span className="font-bold text-[#5A3218]">{product.specs.moisture || "7.0% – 8.0% Max"}</span>
                    </div>
                    <div className="flex items-center justify-between text-[#2E2117]/70">
                      <span>AFLATOXIN SPEC:</span>
                      <span className="font-bold text-[#5A3218]">{product.specs.aflatoxin || "&lt; 4 PPB"}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-3 border-t border-[#5A3218]/10">
                    <Link
                      href={`/products/${product.slug}`}
                      className="flex-1 py-2.5 rounded-xl bg-[#F7F1E7] text-[#5A3218] hover:bg-[#5A3218] hover:text-[#FFFDF8] font-mono text-xs font-bold text-center uppercase tracking-wider transition-colors border border-[#5A3218]/15"
                    >
                      VIEW SPECS
                    </Link>
                    <Link
                      href={`/contact?product=${product.slug}`}
                      className="py-2.5 px-3.5 rounded-xl bg-[#5A3218] text-[#FFFDF8] hover:bg-[#7A4824] transition-colors"
                      title="Request Quotation"
                    >
                      <ArrowUpRight className="w-4 h-4 text-[#D5B58C]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universal Reusable Contact CTA */}
      <ContactCtaSection
        title="LOOKING FOR CUSTOM COUNT CALIBRATION OR PRIVATE PACKAGING?"
        subtitle="We provide bespoke counts, custom branded jute sacks, and container stuffing at Mundra Port."
      />
    </div>
  );
}
