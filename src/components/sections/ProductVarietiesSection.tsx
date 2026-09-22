"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface VarietyItem {
  num: string;
  name: string;
  hindiName: string;
  type: string;
  counts: string;
  description: string;
  image: string;
  slug: string;
}

const VARIETIES: VarietyItem[] = [
  {
    num: "01",
    name: "BOLD",
    hindiName: "बोल्ड सींगदाना",
    type: "Large Export Caliber",
    counts: "38/42, 40/50, 50/60, 60/70, 70/80 / oz",
    description: "The premier large elongated Indian peanut. Rich reddish skin, high crunch, and balanced oleic acid for roasting and confectionery.",
    image: "/images/peanut-bold.webp",
    slug: "bold-peanuts",
  },
  {
    num: "02",
    name: "JAVA",
    hindiName: "जावा मूंगफली",
    type: "Spherical Oil Caliber",
    counts: "40/50, 50/60, 60/70, 70/80, 80/90 / oz",
    description: "Round, pink-skinned kernels with 50-52% oil content. Exceptional roasting heat distribution for candy bars and premium paste.",
    image: "/images/single-kernel-cutout.png",
    slug: "java-peanuts",
  },
  {
    num: "03",
    name: "BLANCHED",
    hindiName: "होल एवं स्प्लिट",
    type: "100% Skin-Removed",
    counts: "38/42, 40/50, 50/60 Whole & Splits",
    description: "Ivory-white steam de-skinned whole and halved splits, double-sortex sorted for zero skin specks and immediate food manufacture.",
    image: "/images/blanched-peanuts.webp",
    slug: "whole-blanched-peanuts",
  },
  {
    num: "04",
    name: "RED SKIN",
    hindiName: "लाल सींगदाना (TJ)",
    type: "Polyphenol Rich",
    counts: "50/60, 60/70, 70/80 / oz",
    description: "Distinct ruby-red testae rich in natural antioxidants. Highly coveted in the Gulf and ASEAN for salted and roasted snack pouches.",
    image: "/images/red-kernel-cutout.png",
    slug: "bold-peanuts",
  },
  {
    num: "05",
    name: "VIRGINIA",
    hindiName: "वर्जिनिया मूंगफली",
    type: "Gourmet Shell Pod",
    counts: "18/22, 22/26 Pods / oz",
    description: "Extra-large fibrous shells holding firm sweet kernels. Hand picked selected (HPS) for traditional in-shell roasting and bulk trade.",
    image: "/images/peanut-inshell.webp",
    slug: "peanuts-in-shell",
  },
  {
    num: "06",
    name: "G20",
    hindiName: "जी-20 वेरायटी",
    type: "High-Yield Export Grade",
    counts: "45/55, 50/60 Counts / oz",
    description: "Celebrated western-belt variety recognized for uniform pod size, high germination vitality, and excellent roasting stability.",
    image: "/images/user-red-kernel-square.webp",
    slug: "bold-peanuts",
  },
  {
    num: "07",
    name: "K6",
    hindiName: "के-6 वेरायटी",
    type: "Confectionery Caliber",
    counts: "40/50, 50/60 Counts / oz",
    description: "Nutty, high-density peanut kernels ideal for peanut brittle, energy bars, and high-temperature extrusion processing.",
    image: "/images/single-pod.webp",
    slug: "java-peanuts",
  },
  {
    num: "08",
    name: "ORGANIC",
    hindiName: "जैविक मूंगफली",
    type: "Bio-Certified Origin",
    counts: "Tested Lot-by-Lot / Traceable",
    description: "Grown using traditional zero-synthetic agricultural protocols in certified soil clusters, tested for pesticide MRL compliance.",
    image: "/images/sustainability-soil.webp",
    slug: "bold-peanuts",
  },
];

export default function ProductVarietiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const getScrollDistance = () => track.scrollWidth - window.innerWidth + 160;

      // Pinned Horizontal Scroll with GSAP ScrollTrigger
      gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="varieties"
      ref={sectionRef}
      className="relative w-full h-screen bg-[#F5EFE5]/60 text-[#2D241D] border-t border-[#5C341B]/12 overflow-hidden flex flex-col justify-between py-12 sm:py-16"
    >
      {/* Top Section Header Bar */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-[#A4774C] uppercase block">
            04 // PEANUT VARIETIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#5C341B] font-normal tracking-tight">
            HORIZONTAL VARIETY GALLERY
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs font-sans text-[#754522]">
          <span className="w-2 h-2 rounded-full bg-[#5C341B] animate-pulse" />
          <span>SCROLL HORIZONTALLY TO DISCOVER ALL 8 EXPORT VARIETIES</span>
        </div>
      </div>

      {/* Horizontal Pinned Track */}
      <div className="w-full flex-grow flex items-center overflow-visible pl-6 sm:pl-12 lg:pl-20">
        <div
          ref={trackRef}
          className="flex items-stretch gap-6 sm:gap-8 flex-nowrap will-change-transform pr-16 sm:pr-24"
        >
          {VARIETIES.map((v) => (
            <div
              key={v.num}
              className="w-[300px] sm:w-[360px] lg:w-[400px] shrink-0 rounded-3xl bg-[#FCFAF5] border border-[#5C341B]/12 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* Card Top: Number + Type */}
              <div className="flex items-center justify-between border-b border-[#5C341B]/10 pb-4">
                <span className="font-mono text-xs font-bold text-[#A4774C]">
                  {v.num} // VARIETY
                </span>
                <span className="text-[10px] font-sans font-semibold tracking-wider text-[#68704E] uppercase">
                  {v.type}
                </span>
              </div>

              {/* Large High-Quality Image Box */}
              <div className="relative w-full h-44 sm:h-52 my-4 rounded-2xl bg-[#F5EFE5]/50 border border-[#5C341B]/10 flex items-center justify-center p-4 overflow-hidden">
                <Image
                  src={v.image}
                  alt={`${v.name} Peanuts`}
                  fill
                  sizes="400px"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out filter drop-shadow-md"
                />
              </div>

              {/* Information Body */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#5C341B] font-normal tracking-tight">
                    {v.name}
                  </h3>
                  <span className="text-xs font-sans text-[#754522]/80">
                    {v.hindiName}
                  </span>
                </div>

                <p className="text-xs font-mono text-[#A4774C] font-semibold">
                  {v.counts}
                </p>

                <p className="text-xs sm:text-sm font-sans text-[#2D241D]/75 leading-relaxed line-clamp-3">
                  {v.description}
                </p>
              </div>

              {/* Card Action CTA */}
              <div className="pt-4 border-t border-[#5C341B]/10 flex items-center justify-between">
                <Link
                  href={`/contact?variety=${encodeURIComponent(v.name)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-[#5C341B] group-hover:text-[#754522] transition-colors"
                >
                  <span>INQUIRE BATCH</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href={`/products/${v.slug}`}
                  className="p-2 rounded-full bg-[#F5EFE5] hover:bg-[#5C341B] hover:text-[#FCFAF5] text-[#5C341B] transition-colors"
                  aria-label={`View ${v.name} details`}
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Subtle Status Bar */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 flex items-center justify-between text-xs font-sans text-[#A4774C]">
        <span>01 BOLD &bull; 02 JAVA &bull; 03 BLANCHED &bull; 04 RED SKIN &bull; 05 VIRGINIA &bull; 06 G20 &bull; 07 K6 &bull; 08 ORGANIC</span>
        <span className="hidden sm:inline">END OF HORIZONTAL TRACK TRANSITIONS TO FARM JOURNEY</span>
      </div>
    </section>
  );
}
