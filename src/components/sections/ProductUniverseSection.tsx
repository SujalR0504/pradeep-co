"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";

// 5 Verified core products for the primary showcase
const SHOWCASE_SLUGS = [
  "bold-peanuts",
  "java-peanuts",
  "whole-blanched-peanuts",
  "peanuts-in-shell",
  "roasted-peanuts",
];

const PRODUCT_PHOTOS: Record<string, string> = {
  "bold-peanuts": "/images/single-kernel-cutout.png",
  "java-peanuts": "/images/red-kernel-cutout.png",
  "whole-blanched-peanuts": "/images/whole-blanched-peanuts.webp",
  "peanuts-in-shell": "/images/new-uploaded-image.png",
  "roasted-peanuts": "/images/peanut-roasted.webp",
};

export default function ProductUniverseSection() {
  const [activeSlug, setActiveSlug] = useState<string>("bold-peanuts");
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const activeProduct = PRODUCTS.find((p) => p.slug === activeSlug) || PRODUCTS[0];
  const supportingProducts = PRODUCTS.filter(
    (p) => SHOWCASE_SLUGS.includes(p.slug) && p.slug !== activeSlug
  ).slice(0, 2);

  const handleProductChange = (newSlug: string) => {
    if (newSlug === activeSlug) return;

    // 17 — Only ONE major animation: current moves slightly, new enters smoothly (0.8s)
    if (imageRef.current && textRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          setActiveSlug(newSlug);
          gsap.fromTo(
            imageRef.current,
            { opacity: 0, x: 30, scale: 0.98 },
            { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: "power2.out" }
          );
          gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
          );
        },
      });

      tl.to(imageRef.current, {
        opacity: 0,
        x: -25,
        duration: 0.25,
        ease: "power2.in",
      });
      tl.to(
        textRef.current,
        {
          opacity: 0,
          y: -10,
          duration: 0.25,
          ease: "power2.in",
        },
        0
      );
    } else {
      setActiveSlug(newSlug);
    }
  };

  return (
    <section
      id="products"
      className="relative w-full py-20 lg:py-28 bg-[#FAF7F1] text-[#26180E] border-t border-[#623719]/10"
    >
      {/* 18 — Extremely subtle background texture (3-5% opacity) */}
      <div className="absolute inset-0 bg-[radial-gradient(#623719_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        {/* 14 — Clean Product Introduction Section */}
        <div className="max-w-3xl mb-14 sm:mb-16 space-y-3 text-left">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#8A5834] uppercase block">
            OUR PRODUCTS
          </span>

          <h2 className="font-serif text-[38px] sm:text-[50px] lg:text-[60px] font-normal leading-[1.08] tracking-tight text-[#26180E]">
            PEANUTS, PREPARED
            <br />
            FOR THE WORLD.
          </h2>

          <p className="text-base sm:text-lg font-sans text-[#26180E]/80 leading-relaxed font-normal pt-1 max-w-2xl">
            Sourced directly from certified farming networks in Madhya Pradesh and Gujarat. Double-sortex cleaned, laboratory tested, and calibrated for international food and snack processors.
          </p>
        </div>

        {/* Product Switcher Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#623719]/10 no-scrollbar">
          {SHOWCASE_SLUGS.map((slug) => {
            const prod = PRODUCTS.find((p) => p.slug === slug);
            if (!prod) return null;
            const isActive = slug === activeSlug;
            return (
              <button
                key={slug}
                onClick={() => handleProductChange(slug)}
                className={`px-5 py-2.5 rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#623719] text-[#FAF7F1]"
                    : "bg-[#F3EBDD]/60 text-[#623719] hover:bg-[#F3EBDD]"
                }`}
              >
                {prod.name.split("(")[0].trim()}
              </button>
            );
          })}
        </div>

        {/* 15 & 16 — Clean Showcase Layout: One Primary Product + Supporting Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Primary Product Information */}
          <div ref={textRef} className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-sans font-semibold tracking-wider text-[#8A5834] uppercase">
                {activeProduct.category} • {activeProduct.grade}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#623719]">
                {activeProduct.name}
              </h3>
            </div>

            <p className="text-base font-sans text-[#26180E]/85 leading-relaxed">
              {activeProduct.description}
            </p>

            {/* Small Clean Specification Information */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#F3EBDD]/50 border border-[#623719]/10">
                <span className="text-[11px] font-sans font-medium text-[#8A5834] uppercase block">CALIBER / COUNTS</span>
                <span className="font-sans font-bold text-sm text-[#26180E] mt-0.5 block">
                  {activeProduct.specs.counts ? activeProduct.specs.counts.split(",")[0] : activeProduct.size}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F3EBDD]/50 border border-[#623719]/10">
                <span className="text-[11px] font-sans font-medium text-[#8A5834] uppercase block">MOISTURE</span>
                <span className="font-sans font-bold text-sm text-[#26180E] mt-0.5 block">
                  {activeProduct.specs.moisture || "7.0% Max"}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F3EBDD]/50 border border-[#623719]/10">
                <span className="text-[11px] font-sans font-medium text-[#8A5834] uppercase block">AFLATOXIN</span>
                <span className="font-sans font-bold text-sm text-[#26180E] mt-0.5 block">
                  &lt; 4 PPB EU Spec
                </span>
              </div>
            </div>

            {/* Packaging and Origin */}
            <div className="pt-1 text-xs font-sans text-[#26180E]/75 space-y-1">
              <div><strong className="text-[#623719]">Standard Packaging:</strong> 25kg / 50kg Jute Sacks, Vacuum Cartons</div>
              <div><strong className="text-[#623719]">Origin:</strong> Bhonti, Dist. Shivpuri (Madhya Pradesh) &amp; Gujarat, India</div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex items-center gap-4">
              <Link
                href={`/products/${activeProduct.slug}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#623719] text-[#FAF7F1] hover:bg-[#8A5834] text-xs font-sans font-bold uppercase tracking-wider transition-colors shadow-xs"
              >
                <span>REQUEST PRODUCT DETAILS</span>
                <ArrowUpRight className="w-4 h-4 text-[#F3EBDD]" />
              </Link>
            </div>
          </div>

          {/* 16 — Large Sharp Photorealistic Product Image on Clean Soft Cream Background */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[460px] aspect-square rounded-3xl bg-[#F3EBDD]/70 border border-[#623719]/10 p-8 flex items-center justify-center shadow-xs">
              <div
                ref={imageRef}
                className="relative w-full h-full flex items-center justify-center"
              >
                <Image
                  src={PRODUCT_PHOTOS[activeProduct.slug] || activeProduct.image}
                  alt={activeProduct.name}
                  fill
                  sizes="(max-width: 768px) 320px, 460px"
                  className="object-contain p-4 drop-shadow-[0_16px_28px_rgba(98,55,25,0.18)]"
                  priority
                />
              </div>
            </div>

            {/* Supporting Products Preview */}
            <div className="w-full max-w-[460px] mt-4 flex items-center justify-between gap-3">
              <span className="text-[11px] font-sans uppercase tracking-wider text-[#8A5834] font-semibold">
                ALSO AVAILABLE:
              </span>
              <div className="flex items-center gap-2">
                {supportingProducts.map((supp) => (
                  <button
                    key={supp.slug}
                    onClick={() => handleProductChange(supp.slug)}
                    className="text-xs font-sans font-medium text-[#623719] hover:underline px-2.5 py-1 rounded-md bg-[#F3EBDD]/50 border border-[#623719]/10 cursor-pointer"
                  >
                    {supp.name.split("(")[0].trim()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
