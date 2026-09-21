"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";

export default function ProductVarietiesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");

  const filteredProducts =
    selectedCategory === "All Products"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="varieties"
      className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#FAF7F1] text-[#26180E] border-t border-[#623719]/10"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#8A5834] uppercase block">
              PRODUCT VARIETIES // 02
            </span>
            <h2 className="font-serif text-[38px] sm:text-[50px] lg:text-[60px] font-normal leading-[1.08] tracking-tight text-[#26180E]">
              EXPORT SPECIFICATIONS
              <br />
              &amp; PROCESSED VARIETIES.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {PRODUCT_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-sans tracking-wider uppercase transition-colors cursor-pointer ${
                    active
                      ? "bg-[#623719] text-[#FAF7F1] font-bold shadow-xs"
                      : "bg-[#F3EBDD]/50 text-[#26180E]/70 hover:text-[#623719] hover:bg-[#F3EBDD]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Variety Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-[#F3EBDD]/30 border border-[#623719]/15 overflow-hidden flex flex-col justify-between p-6 space-y-6 hover:bg-[#F3EBDD]/60 hover:border-[#623719]/30 transition-all duration-300 group shadow-xs"
            >
              <div className="space-y-4">
                {/* Image Box */}
                <div className="relative w-full h-48 rounded-xl bg-[#FAF7F1] border border-[#623719]/10 overflow-hidden flex items-center justify-center p-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#FAF7F1] border border-[#623719]/15 text-[10px] font-sans font-bold text-[#8A5834] uppercase">
                    {product.category}
                  </div>
                </div>

                {/* Title & Origin */}
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-normal text-[#26180E] group-hover:text-[#623719] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs font-sans text-[#8A5834]">
                    {product.origin}
                  </p>
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm font-sans text-[#26180E]/75 line-clamp-2 leading-relaxed">
                  {product.shortDescription}
                </p>

                {/* Key Verified Specs */}
                <div className="pt-2 border-t border-[#623719]/10 space-y-2 text-xs font-sans">
                  <div className="flex justify-between">
                    <span className="text-[#26180E]/60">Grade:</span>
                    <span className="font-semibold text-[#26180E] truncate max-w-[60%] text-right">
                      {product.grade}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#26180E]/60">Counts / Caliber:</span>
                    <span className="font-semibold text-[#623719] truncate max-w-[60%] text-right">
                      {product.size}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-[#623719]/10 flex items-center justify-between">
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-[#623719] hover:text-[#8A5834] transition-colors"
                >
                  <span>INQUIRE BATCH</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <span className="text-[10px] font-mono text-[#8A5834] uppercase">
                  {product.availability}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
