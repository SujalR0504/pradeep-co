"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck, Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface EditorialProductBlock {
  num: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  secondaryImage: string;
  specs: { label: string; value: string }[];
  packaging: string;
  slug: string;
}

const EDITORIAL_BLOCKS: EditorialProductBlock[] = [
  {
    num: "01",
    category: "RAW KERNELS",
    title: "Bold & Java Groundnut Kernels",
    subtitle: "Calibrated Indian Calibers (38/42 to 80/90 Counts)",
    description:
      "The benchmark of Indian agro exports. Bold kernels offer an elongated calibered profile with reddish skins and sweet nutty depth, while Java kernels provide uniform spherical symmetry and 50–52% oil concentration ideal for confectionery inclusions and premium roasting.",
    image: "/images/peanut-bold.webp",
    secondaryImage: "/images/single-kernel-cutout.png",
    specs: [
      { label: "Counts / Ounce", value: "38/42, 40/50, 50/60, 60/70, 70/80, 80/90" },
      { label: "Moisture", value: "7.0% - 8.0% Max" },
      { label: "Purity", value: "> 99.5% Double Sortex" },
      { label: "Aflatoxin", value: "< 4 ppb (EU/GCC Compliance)" },
    ],
    packaging: "25kg / 50kg New Jute Sacks, PP Bags, Vacuum Cartons",
    slug: "bold-peanuts",
  },
  {
    num: "02",
    category: "BLANCHED PEANUTS",
    title: "Whole & Split Blanched Peanuts",
    subtitle: "100% Skin Removed • Pristine Ivory-White",
    description:
      "Gentle warm-air de-skinning and multi-pass optical color sorters produce pure ivory-white whole and split cotyledons. Zero red skin residue, heart/germ removed on splits, ready for chocolate bars, dragees, and super-fine industrial peanut butter grinding.",
    image: "/images/blanched-peanuts.webp",
    secondaryImage: "/images/split-cotyledon-cutout.png",
    specs: [
      { label: "Available Calibers", value: "38/42, 40/50, 50/60 Counts / Ounce" },
      { label: "Moisture", value: "5.0% - 6.0% Max" },
      { label: "Skin Residue", value: "Nil (< 0.5% Tolerance)" },
      { label: "Aflatoxin", value: "Negative / < 2 ppb" },
    ],
    packaging: "10kg / 25kg Nitrogen-Flushed Vacuum Cartons, Jumbo Totes",
    slug: "whole-blanched-peanuts",
  },
  {
    num: "03",
    category: "IN-SHELL GROUNDNUTS",
    title: "Naturally Sun-Cured Pods",
    subtitle: "Intact Pods for Traditional Roasting & Bulk Pod Trade",
    description:
      "Harvested at physiological maturity from certified Central India soils. Thoroughly de-stoned, de-dusted, and hand-selected (HPS). The natural fibrous shell acts as an airtight protective barrier, guarding inner kernels against oxidation across long maritime voyages.",
    image: "/images/peanut-inshell.webp",
    secondaryImage: "/images/single-pod-cutout.png",
    specs: [
      { label: "Counts / Ounce", value: "18/22, 22/26 Pods / Ounce" },
      { label: "Shell Condition", value: "Clean, Fibrous, Unbroken" },
      { label: "Moisture", value: "8.0% - 9.0% Max" },
      { label: "Foreign Matter", value: "< 0.5% Machine Cleaned" },
    ],
    packaging: "20kg / 30kg Aerated Jute Bags & Bulk Sea Container Stuffing",
    slug: "peanuts-in-shell",
  },
  {
    num: "04",
    category: "PROPRIETARY BRANDS",
    title: "King Brand & Samman Singdana",
    subtitle: "Authentic Double-Sortex Jute Sacks from Bhonti, Shivpuri",
    description:
      "Processed directly at our Bhonti facility under our proprietary trademark standards. Rigorously double-sortex cleaned and weigh-filled into breathable twill jute burlap sacks that prevent condensation during tropical freight transit.",
    image: "/images/packaging/king-brand-singdana.webp",
    secondaryImage: "/images/packaging/authentic-jute-sacks.webp",
    specs: [
      { label: "Origin Facility", value: "Bhonti, Shivpuri (M.P.), India" },
      { label: "Process Standard", value: "Bichromatic Optical CCD Sortex" },
      { label: "Seam Finish", value: "Triple Lock-Stitched Twill Burlap" },
      { label: "Container Load", value: "19 MT (20ft) / 27.5 MT (40ft)" },
    ],
    packaging: "50kg Heavy-Duty Branded Jute Bags & Export PP Sacks",
    slug: "king-brand-singdana",
  },
];

export default function ProductIntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const blocks = sectionRef.current?.querySelectorAll(".editorial-product-block");
      blocks?.forEach((block) => {
        gsap.fromTo(
          block,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: block,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-[#F6F1E8] text-[#26180E] border-b border-[#5A3218]/10"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16 lg:space-y-24">
        {/* 11 — Section Header */}
        <div className="max-w-3xl space-y-4 text-left">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#A16B3C] uppercase block">
            OUR PEANUTS
          </span>

          <h2 className="font-serif text-[38px] sm:text-[50px] lg:text-[62px] font-normal leading-[1.05] tracking-tight text-[#5A3218]">
            FROM ONE CROP,
            <br />
            A WORLD OF POSSIBILITIES.
          </h2>

          <p className="text-base sm:text-lg font-sans text-[#26180E]/80 leading-relaxed font-normal pt-1 max-w-2xl">
            We transform raw Indian harvest pods into precisely calibrated raw kernels, skinless blanched nuts, in-shell pods, and proprietary export-grade sacks.
          </p>
        </div>

        {/* 11 — Large Editorial Product Blocks (Not generic 3-column cards) */}
        <div className="space-y-16 lg:space-y-24">
          {EDITORIAL_BLOCKS.map((prod, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={prod.num}
                className={`editorial-product-block grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#FFFDF9] border border-[#5A3218]/12 shadow-xs`}
              >
                {/* Visual Side (6 cols) */}
                <div
                  className={`lg:col-span-6 w-full ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl bg-[#F6F1E8]/70 border border-[#5A3218]/10 p-6 sm:p-10 flex items-center justify-center overflow-hidden group">
                    {/* Primary Hero Visual */}
                    <div className="relative w-full h-full max-w-[380px] max-h-[320px] flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105">
                      <Image
                        src={prod.image}
                        alt={prod.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain filter drop-shadow-lg"
                      />
                    </div>

                    {/* Secondary Supporting Cutout Visual */}
                    <div className="absolute bottom-3 right-3 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#FFFDF9] border border-[#5A3218]/15 p-2 shadow-xs hidden sm:flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={prod.secondaryImage}
                          alt="Supporting detail cutout"
                          fill
                          sizes="80px"
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#5A3218]/15 text-[10px] font-sans font-bold text-[#A16B3C] tracking-wider uppercase">
                      {prod.num} // {prod.category}
                    </div>
                  </div>
                </div>

                {/* Content Side (6 cols) */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#A16B3C] uppercase block">
                      CATEGORY {prod.num}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#5A3218] font-normal leading-tight">
                      {prod.title}
                    </h3>
                    <p className="text-sm sm:text-base font-sans font-semibold text-[#754522]">
                      {prod.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base font-sans text-[#26180E]/80 leading-relaxed font-normal">
                    {prod.description}
                  </p>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#5A3218]/10 text-xs font-sans">
                    {prod.specs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-[#F6F1E8]/60 border border-[#5A3218]/10 space-y-0.5"
                      >
                        <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#A16B3C] block">
                          {spec.label}
                        </span>
                        <p className="font-semibold text-[#26180E]">
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Packaging Note */}
                  <div className="p-3.5 rounded-xl bg-[#5A3218]/5 border border-[#5A3218]/10 text-xs font-sans">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#5A3218] block">
                      EXPORT PACKAGING
                    </span>
                    <p className="text-[#26180E]/85 mt-0.5">{prod.packaging}</p>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/contact?product=${encodeURIComponent(prod.title)}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5A3218] hover:bg-[#754522] text-[#FFFDF9] text-xs font-sans font-bold uppercase tracking-wider transition-all shadow-xs"
                    >
                      <span>REQUEST QUOTE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href={`/products/${prod.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-[#754522] hover:text-[#5A3218] transition-colors"
                    >
                      <span>VIEW FULL SPECIFICATION</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
