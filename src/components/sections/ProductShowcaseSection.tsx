"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { gsap } from "gsap";

interface ShowcaseProduct {
  num: string;
  shortLabel: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  grade: string;
  size: string;
  packaging: string;
  applications: string;
}

const SHOWCASE_PRODUCTS: ShowcaseProduct[] = [
  {
    num: "01",
    shortLabel: "BOLD",
    name: "Bold Peanuts (Singdana)",
    category: "Raw Kernels",
    tagline: "Premium large-caliber Indian groundnut variety.",
    description:
      "Bold Peanuts are the benchmark of Indian groundnut exports, prized globally for their large kernel size, elongated shape, and rich nutritional profile. Cultivated in fertile semi-arid belts and processed through multi-stage optical sorters.",
    image: "/images/peanut-bold.webp",
    grade: "Double Sortex Clean / Machine Cleaned",
    size: "38/42, 40/50, 50/60, 60/70, 70/80 Counts / Oz",
    packaging: "25 kg / 50 kg New Jute Bags, PP Woven Bags & Vacuum Cartons",
    applications: "Direct Snacking, Roasting, Confectionery & Peanut Butter",
  },
  {
    num: "02",
    shortLabel: "JAVA",
    name: "Java Peanuts",
    category: "Raw Kernels",
    tagline: "Round-shaped, pink-skinned kernels with high natural oil content.",
    description:
      "Java peanuts are distinctively rounded with bright pink skins and high oil concentration (50-52%). Their consistent spherical shape ensures even heat distribution during commercial roasting and candy bar inclusion.",
    image: "/images/single-kernel-cutout.png",
    grade: "Export Grade / Electronic Sortex Cleaned",
    size: "40/50, 50/60, 60/70, 70/80, 80/90 Counts / Oz",
    packaging: "25 kg / 50 kg Jute Bags, PP Bags & Corrugated Vacuum Cartons",
    applications: "Confectionery, Nougat Production, High-Yield Oil Pressing",
  },
  {
    num: "03",
    shortLabel: "BLANCHED",
    name: "Whole Blanched Peanuts",
    category: "Blanched",
    tagline: "Pristine skin-free ivory-white whole peanut kernels.",
    description:
      "Produced by gently heating high-grade raw kernels, passing them through gentle de-skinning rollers, and optical sorters. Pristine ivory-white whole kernels ready for instant industrial frying, coating, and chocolate panning.",
    image: "/images/blanched-peanuts.webp",
    grade: "Grade A / 100% Skin Removed / Sortex Clean",
    size: "38/42, 40/50, 50/60 Counts / Oz",
    packaging: "10 kg / 25 kg Vacuum Nitrogen-Flushed Bags in Cartons",
    applications: "Gourmet Fried Snacks, Chocolate Centers, Super-Fine Peanut Butter",
  },
  {
    num: "04",
    shortLabel: "RED SKIN",
    name: "Red Skin Peanuts (TJ Kernels)",
    category: "Specialty Kernels",
    tagline: "Characteristic reddish-brown testae with concentrated antioxidants.",
    description:
      "Selected for rich coloration, robust skin adherence, and sweet aromatic crunch. Especially favored across Middle Eastern and Southeast Asian snack markets for traditional roasting with natural edible skins.",
    image: "/images/red-kernel-cutout.png",
    grade: "Export Standard / Double Sortex Clean",
    size: "50/60, 60/70, 70/80 Counts / Oz",
    packaging: "25 kg / 50 kg Aerated Jute Sacks & Vacuum Barrier Cartons",
    applications: "Traditional Roasted Snacks, Ethnic Mixes, Salted Kernel Pouches",
  },
  {
    num: "05",
    shortLabel: "IN-SHELL",
    name: "Groundnuts In-Shell",
    category: "In-Shell Pods",
    tagline: "Naturally sun-cured, fibrous whole peanut pods.",
    description:
      "Harvested at peak physiological maturity, our In-Shell Groundnuts undergo gentle de-stoning, mechanical de-dusting, and thorough hand-sorting. Intact pods naturally protect inner kernels from oxidation during ocean transit.",
    image: "/images/peanut-inshell.webp",
    grade: "Hand Picked Selected (HPS) / Machine Cleaned",
    size: "18/22, 22/26 pods / Ounce",
    packaging: "20 kg / 30 kg Aerated Jute Sacks & Bulk Container Stuffing",
    applications: "Traditional Sand Roasting, Shell Snacking, Wholesale Re-packaging",
  },
];

export default function ProductShowcaseSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [transitioningFrom, setTransitioningFrom] = useState<number | null>(null);

  const activeProduct = SHOWCASE_PRODUCTS[selectedIndex];
  const outgoingProduct = transitioningFrom !== null ? SHOWCASE_PRODUCTS[transitioningFrom] : null;

  const outgoingImgRef = useRef<HTMLDivElement>(null);
  const incomingImgRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  // Peanut image hover state: max 10px movement, scale 1 -> 1.03
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, hovering: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Clamp to max 10px in either direction
    const rawX = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const rawY = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    const x = Math.max(-10, Math.min(10, rawX));
    const y = Math.max(-10, Math.min(10, rawY));
    setMousePos({ x, y, hovering: true });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0, hovering: false });
  };

  const handleSelectProduct = (newIndex: number) => {
    if (newIndex === selectedIndex) return;
    setTransitioningFrom(selectedIndex);
    setSelectedIndex(newIndex);
  };

  // GSAP Product Transition:
  // previous image: scale 1 -> 0.96, move left 30px, opacity 1 -> 0
  // new image: scale 1.04 -> 1, move right 30px -> 0, opacity 0 -> 1
  // Duration: 0.7 - 1.0s
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setTransitioningFrom(null);
        },
      });

      // Outgoing product image
      if (outgoingImgRef.current) {
        tl.to(
          outgoingImgRef.current,
          {
            scale: 0.96,
            x: -30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          0
        );
      }

      // Incoming product image
      if (incomingImgRef.current) {
        tl.fromTo(
          incomingImgRef.current,
          {
            scale: 1.04,
            x: 30,
            opacity: 0,
          },
          {
            scale: 1,
            x: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power2.out",
          },
          0
        );
      }

      // Information text subtle reveal
      if (infoRef.current) {
        tl.fromTo(
          infoRef.current,
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
          },
          0.05
        );
      }
    });

    return () => ctx.revert();
  }, [selectedIndex]);

  return (
    <section
      id="products"
      className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#FFFDF9] text-[#26180E] border-t border-[#5A3218]/10"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#A16B3C] uppercase block">
              PRODUCT EXPERIENCE // 03
            </span>
            <h2 className="font-serif text-[38px] sm:text-[50px] lg:text-[60px] font-normal leading-[1.08] tracking-tight text-[#5A3218]">
              PEANUTS, PREPARED
              <br />
              FOR THE WORLD.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base font-sans text-[#26180E]/75 leading-relaxed">
            Every batch undergoes multi-stage mechanical screening, optical bichromatic color sorting, and strict moisture stabilization before export dispatch.
          </p>
        </div>

        {/* 3. PRODUCT NAVIGATION: Small, clean product selector */}
        <div className="w-full border-y border-[#5A3218]/12 py-3">
          <div className="flex items-center justify-start sm:justify-between overflow-x-auto no-scrollbar gap-2 sm:gap-4">
            {SHOWCASE_PRODUCTS.map((prod, idx) => {
              const isActive = selectedIndex === idx;
              return (
                <button
                  key={prod.num}
                  onClick={() => handleSelectProduct(idx)}
                  className={`group relative flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full transition-all duration-300 text-xs font-sans tracking-wider uppercase whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#5A3218] text-[#FFFDF9] shadow-xs font-bold"
                      : "bg-transparent text-[#26180E]/70 hover:text-[#5A3218] hover:bg-[#F6F1E8]"
                  }`}
                >
                  <span
                    className={`font-mono text-[11px] font-bold ${
                      isActive ? "text-[#D7B88F]" : "text-[#A16B3C]"
                    }`}
                  >
                    {prod.num}
                  </span>
                  <span>{prod.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. PRODUCT SHOWCASE: Large horizontal experience (Left: Image, Right: Information) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[520px]">
          {/* LEFT: Product Image with Subtle Physical Hover Interaction (max 10px, scale 1 -> 1.03) */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl bg-[#F6F1E8]/70 border border-[#5A3218]/12 flex items-center justify-center p-6 sm:p-10 overflow-hidden cursor-crosshair group shadow-xs"
          >
            {/* Subtle warm depth glow under product */}
            <div className="absolute inset-0 bg-radial from-[#A16B3C]/10 via-transparent to-transparent pointer-events-none" />

            {/* Outgoing Image during transition */}
            {outgoingProduct && (
              <div
                ref={outgoingImgRef}
                className="absolute inset-0 flex items-center justify-center p-6 sm:p-10 pointer-events-none transform-gpu"
              >
                <div className="relative w-full h-full max-w-[420px] max-h-[380px] flex items-center justify-center">
                  <Image
                    src={outgoingProduct.image}
                    alt={outgoingProduct.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain filter drop-shadow-md"
                    priority
                  />
                </div>
              </div>
            )}

            {/* Incoming / Active Product Image with Hover Interaction */}
            <div
              ref={incomingImgRef}
              style={{
                transform: mousePos.hovering
                  ? `translate3d(${mousePos.x}px, ${mousePos.y}px, 0px) scale(1.03)`
                  : "translate3d(0px, 0px, 0px) scale(1)",
                transition: mousePos.hovering
                  ? "transform 0.12s ease-out"
                  : "transform 0.5s ease-out",
              }}
              className="relative w-full h-full max-w-[420px] max-h-[380px] flex items-center justify-center transform-gpu"
            >
              <Image
                src={activeProduct.image}
                alt={activeProduct.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain filter drop-shadow-md transition-all duration-300"
                priority
              />
            </div>

            {/* Origin Pill Badge */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FFFDF9]/95 backdrop-blur-xs border border-[#5A3218]/12 text-[10px] font-sans font-bold tracking-wider text-[#A16B3C] uppercase">
              {activeProduct.category}
            </div>

            {/* Physical Interaction Hint */}
            <div className="absolute bottom-4 right-4 text-[10px] font-sans text-[#26180E]/40 uppercase tracking-widest hidden sm:block">
              HOVER TO INSPECT KERNEL
            </div>
          </div>

          {/* RIGHT: Product Information (Real specifications only) */}
          <div ref={infoRef} className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#A16B3C] uppercase block">
                {activeProduct.num} {"//"} {activeProduct.category}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#5A3218] leading-tight">
                {activeProduct.name}
              </h3>
              <p className="text-base font-sans text-[#A16B3C] font-medium">
                {activeProduct.tagline}
              </p>
            </div>

            <p className="text-sm sm:text-base font-sans text-[#26180E]/80 leading-relaxed font-normal">
              {activeProduct.description}
            </p>

            {/* Information Grid: Grade, Size, Packaging, Application */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#5A3218]/12">
              <div className="p-4 rounded-xl bg-[#F6F1E8]/70 border border-[#5A3218]/10 space-y-1">
                <span className="text-[11px] font-sans font-bold text-[#A16B3C] tracking-wider uppercase block">
                  GRADE SPECIFICATION
                </span>
                <p className="text-xs sm:text-sm font-sans font-semibold text-[#26180E]">
                  {activeProduct.grade}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F6F1E8]/70 border border-[#5A3218]/10 space-y-1">
                <span className="text-[11px] font-sans font-bold text-[#A16B3C] tracking-wider uppercase block">
                  COUNTS &amp; SIZING
                </span>
                <p className="text-xs sm:text-sm font-sans font-semibold text-[#26180E]">
                  {activeProduct.size}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F6F1E8]/70 border border-[#5A3218]/10 space-y-1">
                <span className="text-[11px] font-sans font-bold text-[#A16B3C] tracking-wider uppercase block">
                  EXPORT PACKAGING
                </span>
                <p className="text-xs sm:text-sm font-sans font-semibold text-[#26180E]">
                  {activeProduct.packaging}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F6F1E8]/70 border border-[#5A3218]/10 space-y-1">
                <span className="text-[11px] font-sans font-bold text-[#A16B3C] tracking-wider uppercase block">
                  KEY APPLICATIONS
                </span>
                <p className="text-xs sm:text-sm font-sans font-semibold text-[#26180E]">
                  {activeProduct.applications}
                </p>
              </div>
            </div>

            {/* Action CTA: REQUEST A QUOTE */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href={`/contact?product=${encodeURIComponent(activeProduct.name)}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#5A3218] hover:bg-[#754522] text-[#FFFDF9] text-xs font-sans font-bold uppercase tracking-wider transition-colors shadow-xs"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-[#A16B3C] hover:text-[#5A3218] transition-colors"
              >
                <span>VIEW COMPLETE CATALOGUE</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
