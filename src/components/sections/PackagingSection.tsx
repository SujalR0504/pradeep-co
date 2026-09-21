"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, PackageCheck, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PackagingStep {
  id: string;
  stepNum: string;
  title: string;
  category: string;
  specs: string;
  description: string;
  image: string;
}

const PACKAGING_STEPS: PackagingStep[] = [
  {
    id: "bulk-bags",
    stepNum: "01",
    title: "Bulk Bags (Jumbo & PP)",
    category: "BULK CARGO",
    specs: "500kg / 1000kg Jumbo Bags & 50kg PP",
    description: "High-tensile woven polypropylene and jumbo bulk bags for high-volume processors and industrial confectionery milling.",
    image: "/images/packaging/samman-peanuts-packaging.webp",
  },
  {
    id: "export-bags",
    stepNum: "02",
    title: "Export Jute Sacks",
    category: "EXPORT STANDARD",
    specs: "25kg / 50kg Twill Burlap",
    description: "Traditional breathable twill jute sacks. Aerated weave allows natural ventilation, preventing sweat condensation during ocean voyages.",
    image: "/images/packaging/authentic-jute-sacks.webp",
  },
  {
    id: "warehouse",
    stepNum: "03",
    title: "Bonded Warehouse",
    category: "CLIMATE STABILIZATION",
    specs: "Controlled Ambient Storage",
    description: "Stacked in organized lot batches on raised slatted platforms with continuous humidity monitoring before dispatch.",
    image: "/images/peanut-heap-warehouse.jpg",
  },
  {
    id: "pallets",
    stepNum: "04",
    title: "ISPM-15 Export Pallets",
    category: "UNITIZED STACKING",
    specs: "Heat-Treated Wood & Stretch Wrap",
    description: "Unitized on phytosanitary certified wooden pallets, tightly wrapped in multi-layer stretch film with edge board protection.",
    image: "/images/packaging/stacked-pallet-export.jpg",
  },
  {
    id: "container",
    stepNum: "05",
    title: "FCL Container Stuffing",
    category: "MARITIME INTERMODAL",
    specs: "20ft & 40ft Desiccant Lined",
    description: "Stuffed into ocean containers lined with kraft moisture barriers and hanging silica gel blankets. Tamper-evident bolt sealed.",
    image: "/images/container-loading-dock.jpg",
  },
];

export default function PackagingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const cards = trackRef.current?.querySelectorAll(".packaging-card");
      if (cards) {
        // Horizontal entrance reveal: bags -> second bag -> warehouse -> pallet -> container
        gsap.fromTo(
          cards,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="packaging"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#F6F1E8]/35 text-[#26180E] border-t border-[#5A3218]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#A16B3C] uppercase block">
              LOGISTICS &amp; PACKAGING // 07
            </span>
            <h2 className="font-serif text-[38px] sm:text-[50px] lg:text-[60px] font-normal leading-[1.08] tracking-tight text-[#5A3218]">
              FROM BURLAP SACK
              <br />
              TO OCEAN CONTAINER.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base font-sans text-[#26180E]/75 leading-relaxed">
            A continuous horizontal packing sequence engineered to maintain physiological freshness and prevent cargo sweat during long ocean transits.
          </p>
        </div>

        {/* 10. Horizontal Visual Sequence: bag enters -> second bag -> warehouse -> pallet -> container */}
        <div
          ref={trackRef}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5"
        >
          {PACKAGING_STEPS.map((step, idx) => (
            <div
              key={step.id}
              className="packaging-card rounded-2xl bg-[#FFFDF9] border border-[#5A3218]/12 overflow-hidden flex flex-col justify-between group hover:bg-[#F6F1E8]/80 transition-all duration-300 shadow-xs"
            >
              {/* Image Container */}
              <div className="relative w-full h-44 bg-[#26180E]/5 overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#FFFDF9]/95 backdrop-blur-xs text-[10px] font-sans font-bold text-[#5A3218] uppercase">
                  {step.stepNum}
                </div>
              </div>

              {/* Information Body */}
              <div className="p-5 space-y-3 flex-grow flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-sans font-bold tracking-wider text-[#A16B3C] uppercase block">
                    {step.category}
                  </span>
                  <h3 className="font-serif text-lg text-[#5A3218] font-normal leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs font-sans text-[#26180E]/70 leading-relaxed pt-1">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#5A3218]/10 text-[11px] font-mono text-[#5A3218] font-semibold">
                  {step.specs}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Flow Indicator */}
        <div className="hidden lg:flex items-center justify-between text-xs font-mono text-[#8A5834] px-4 pt-2">
          <span>01 BULK BAG</span>
          <ArrowRight className="w-4 h-4 text-[#8A5834]/40" />
          <span>02 EXPORT JUTE</span>
          <ArrowRight className="w-4 h-4 text-[#8A5834]/40" />
          <span>03 LOT WAREHOUSE</span>
          <ArrowRight className="w-4 h-4 text-[#8A5834]/40" />
          <span>04 PALLETIZED</span>
          <ArrowRight className="w-4 h-4 text-[#8A5834]/40" />
          <span>05 FCL CONTAINER</span>
        </div>
      </div>
    </section>
  );
}
