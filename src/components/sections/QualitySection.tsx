"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface QualityCallout {
  id: string;
  title: string;
  spec: string;
  description: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const CALLOUTS: QualityCallout[] = [
  {
    id: "size",
    title: "SIZE",
    spec: "38/42, 40/50, 50/60 Counts/Oz",
    description: "Multi-deck rotary sizing screens sort kernels into exact count calibrations for uniform industrial roasting.",
    position: "top-left",
  },
  {
    id: "color",
    title: "COLOR",
    spec: "Bichromatic CCD Detection",
    description: "High-resolution optical cameras inspect each seed in free fall, rejecting off-color testae, dark spots, and immature grains.",
    position: "top-right",
  },
  {
    id: "consistency",
    title: "CONSISTENCY",
    spec: "Controlled Moisture 7.0% - 8.0%",
    description: "Even physiological drying preserves cellular membrane integrity, preventing lipid rancidity and mold growth.",
    position: "bottom-left",
  },
  {
    id: "cleanliness",
    title: "CLEANLINESS",
    spec: "> 99.5% Purity • < 0.5% Broken",
    description: "Dual-cyclone pre-cleaning and destoning eliminate field stones, dust, and plant stalks before precision grading.",
    position: "bottom-right",
  },
];

export default function QualitySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const peanutImgRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<SVGSVGElement>(null);
  const labelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Peanut slow subtle scale on scroll (scale 1.0 -> 1.06)
      if (peanutImgRef.current) {
        gsap.fromTo(
          peanutImgRef.current,
          { scale: 1 },
          {
            scale: 1.06,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      }

      // 2. Lines draw on scroll and labels fade in
      const lineElements = sectionRef.current?.querySelectorAll(".quality-line");
      const labelElements = sectionRef.current?.querySelectorAll(".quality-card");

      if (lineElements && labelElements) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          lineElements,
          { strokeDashoffset: 100, opacity: 0 },
          { strokeDashoffset: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" }
        ).fromTo(
          labelElements,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" },
          "-=0.5"
        );
      }
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="quality"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#F6F1E8]/40 text-[#26180E] border-t border-[#5A3218]/10"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 text-left">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#A16B3C] uppercase block">
            QUALITY CONTROL // 05
          </span>

          <h2 className="font-serif text-[38px] sm:text-[50px] lg:text-[60px] font-normal leading-[1.08] tracking-tight text-[#5A3218]">
            QUALITY YOU CAN SEE.
          </h2>

          <p className="text-base sm:text-lg font-sans text-[#26180E]/80 leading-relaxed font-normal max-w-2xl">
            Every export consignment is evaluated against four uncompromising physical benchmarks before release from our Bhonti processing plant.
          </p>
        </div>

        {/* Central Visual Stage: Macro Peanut Kernel with Subtle Thin Lines and Callouts */}
        <div className="relative w-full max-w-5xl mx-auto min-h-[500px] lg:min-h-[580px] flex items-center justify-center">
          {/* Subtle SVG leader lines (Desktop) */}
          <svg
            ref={linesRef}
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-10"
            viewBox="0 0 1000 600"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Top-Left Line: SIZE */}
            <path
              d="M 280 140 L 400 240"
              stroke="#A16B3C"
              strokeWidth="1.5"
              strokeDasharray="100"
              className="quality-line opacity-60"
            />
            <circle cx="400" cy="240" r="3.5" fill="#5A3218" />

            {/* Top-Right Line: COLOR */}
            <path
              d="M 720 140 L 600 230"
              stroke="#A16B3C"
              strokeWidth="1.5"
              strokeDasharray="100"
              className="quality-line opacity-60"
            />
            <circle cx="600" cy="230" r="3.5" fill="#5A3218" />

            {/* Bottom-Left Line: CONSISTENCY */}
            <path
              d="M 280 460 L 420 380"
              stroke="#A16B3C"
              strokeWidth="1.5"
              strokeDasharray="100"
              className="quality-line opacity-60"
            />
            <circle cx="420" cy="380" r="3.5" fill="#5A3218" />

            {/* Bottom-Right Line: CLEANLINESS */}
            <path
              d="M 720 460 L 590 390"
              stroke="#A16B3C"
              strokeWidth="1.5"
              strokeDasharray="100"
              className="quality-line opacity-60"
            />
            <circle cx="590" cy="390" r="3.5" fill="#5A3218" />
          </svg>

          {/* Central Macro Peanut Image (Slowly scales on scroll) */}
          <div
            ref={peanutImgRef}
            className="relative w-64 sm:w-80 md:w-96 aspect-[3/4] flex items-center justify-center z-0"
          >
            <Image
              src="/images/single-kernel-cutout.png"
              alt="Macro photograph of premium inspected peanut kernel"
              fill
              sizes="(max-width: 768px) 260px, 380px"
              className="object-contain filter drop-shadow-xl"
              priority
            />
          </div>

          {/* Callout Cards (Desktop: positioned around peanut; Mobile: stacked grid) */}
          <div ref={labelsRef} className="hidden lg:block">
            {/* 1. SIZE - Top Left */}
            <div className="quality-card absolute top-8 left-4 max-w-[260px] p-5 rounded-2xl bg-[#FFFDF9]/85 border border-[#5A3218]/12 backdrop-blur-xs space-y-1.5 shadow-xs">
              <span className="text-[11px] font-sans font-bold text-[#A16B3C] uppercase tracking-wider block">
                01 // SIZE
              </span>
              <h4 className="font-serif text-xl text-[#5A3218] font-normal">
                Calibrated Caliber
              </h4>
              <p className="text-xs font-sans text-[#5A3218] font-semibold">
                {CALLOUTS[0].spec}
              </p>
              <p className="text-[11px] font-sans text-[#26180E]/70 leading-relaxed">
                {CALLOUTS[0].description}
              </p>
            </div>

            {/* 2. COLOR - Top Right */}
            <div className="quality-card absolute top-8 right-4 max-w-[260px] p-5 rounded-2xl bg-[#FFFDF9]/85 border border-[#5A3218]/12 backdrop-blur-xs space-y-1.5 shadow-xs text-right">
              <span className="text-[11px] font-sans font-bold text-[#A16B3C] uppercase tracking-wider block">
                02 // COLOR
              </span>
              <h4 className="font-serif text-xl text-[#5A3218] font-normal">
                Optical Purity
              </h4>
              <p className="text-xs font-sans text-[#5A3218] font-semibold">
                {CALLOUTS[1].spec}
              </p>
              <p className="text-[11px] font-sans text-[#26180E]/70 leading-relaxed">
                {CALLOUTS[1].description}
              </p>
            </div>

            {/* 3. CONSISTENCY - Bottom Left */}
            <div className="quality-card absolute bottom-8 left-4 max-w-[260px] p-5 rounded-2xl bg-[#FFFDF9]/85 border border-[#5A3218]/12 backdrop-blur-xs space-y-1.5 shadow-xs">
              <span className="text-[11px] font-sans font-bold text-[#A16B3C] uppercase tracking-wider block">
                03 // CONSISTENCY
              </span>
              <h4 className="font-serif text-xl text-[#5A3218] font-normal">
                Moisture &amp; Aroma
              </h4>
              <p className="text-xs font-sans text-[#5A3218] font-semibold">
                {CALLOUTS[2].spec}
              </p>
              <p className="text-[11px] font-sans text-[#26180E]/70 leading-relaxed">
                {CALLOUTS[2].description}
              </p>
            </div>

            {/* 4. CLEANLINESS - Bottom Right */}
            <div className="quality-card absolute bottom-8 right-4 max-w-[260px] p-5 rounded-2xl bg-[#FFFDF9]/85 border border-[#5A3218]/12 backdrop-blur-xs space-y-1.5 shadow-xs text-right">
              <span className="text-[11px] font-sans font-bold text-[#A16B3C] uppercase tracking-wider block">
                04 // CLEANLINESS
              </span>
              <h4 className="font-serif text-xl text-[#5A3218] font-normal">
                Foreign Matter Zero
              </h4>
              <p className="text-xs font-sans text-[#5A3218] font-semibold">
                {CALLOUTS[3].spec}
              </p>
              <p className="text-[11px] font-sans text-[#26180E]/70 leading-relaxed">
                {CALLOUTS[3].description}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Fallback: Responsive 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden pt-6">
          {CALLOUTS.map((c, i) => (
            <div
              key={c.id}
              className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#5A3218]/12 space-y-2 shadow-xs"
            >
              <span className="text-[11px] font-sans font-bold text-[#A16B3C] uppercase tracking-wider block">
                0{i + 1} // {c.title}
              </span>
              <h4 className="font-serif text-xl text-[#5A3218] font-normal">
                {c.title === "SIZE" ? "Calibrated Caliber" : c.title === "COLOR" ? "Optical Purity" : c.title === "CONSISTENCY" ? "Moisture & Aroma" : "Foreign Matter Zero"}
              </h4>
              <p className="text-xs font-sans text-[#5A3218] font-semibold">
                {c.spec}
              </p>
              <p className="text-xs font-sans text-[#26180E]/70 leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
