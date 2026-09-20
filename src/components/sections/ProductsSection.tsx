"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Filter } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PRODUCTS, PRODUCT_CATEGORIES, Product } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All Products");
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  const filteredProducts =
    activeCategory === "All Products"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsGridRef.current?.children;
    if (cards && cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 35, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsGridRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, [activeCategory]);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#FFFDF8] text-[#2B1A0F] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 lg:mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8A572F]">
              <span className="w-6 h-[1.5px] bg-[#8A572F]" />
              <span>Export Portfolio</span>
            </div>
            <h2 className="font-serif font-light text-editorial-heading leading-[1.02] tracking-tight text-[#2B1A0F]">
              OUR PRODUCTS
            </h2>
            <p className="text-base sm:text-lg text-[#7D6B5D] font-light leading-relaxed">
              Carefully selected agricultural products prepared for diverse global requirements. Sourced from Central India and processed to international standards.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <MagneticButton strength={10}>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5A3215] text-[#FFFDF8] hover:bg-[#74431F] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
              >
                <span>Custom Bulk Specifications</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </MagneticButton>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-[#E8DDCB]">
          <span className="text-xs uppercase tracking-wider text-[#8A572F] font-semibold flex items-center gap-1.5 mr-2 flex-shrink-0">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all duration-200 rounded-full flex-shrink-0 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#2B1A0F] text-[#FFFDF8] shadow-sm scale-102"
                  : "text-[#7D6B5D] hover:text-[#2B1A0F] hover:bg-[#FAF6EE]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid with Staggered ScrollTrigger */}
        <div
          ref={cardsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-[#FAF6EE] border border-[#E8DDCB] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="font-serif text-xl sm:text-2xl text-[#2B1A0F]">
              Need a Custom Count or Destination-Specific Standard?
            </h4>
            <p className="text-sm text-[#7D6B5D] font-light max-w-2xl">
              We accommodate specialized grading screens, customized aflatoxin thresholds for European or Asian markets, private label branding, and multi-layer vacuum bulk packaging.
            </p>
          </div>
          <MagneticButton strength={10}>
            <Link
              href="#contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5A3215] text-[#FFFDF8] hover:bg-[#74431F] text-xs font-semibold tracking-wider uppercase transition-all shadow-sm"
            >
              <span>Inquire Custom Lot</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
