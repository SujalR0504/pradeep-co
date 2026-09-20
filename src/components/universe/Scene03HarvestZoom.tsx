"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ZoomIn, Eye, Sun } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MACRO_SLIDES = [
  {
    id: "shell",
    title: "01 // THE CALCIUM FIBROUS SHELL",
    heading: "Cellular Shell Protection",
    desc: "A natural porous barrier shielding raw seeds from pests, solar heat, and tropical humidity during dormancy.",
    image: "/images/shell-cracked-open.jpg",
    spec: "MINERALIZED POD HUSK",
  },
  {
    id: "skin",
    title: "02 // THE PAPERY LIPID SKIN",
    heading: "Polyphenol Tannin Husk",
    desc: "Microscopic thin papery skin rich in natural antioxidants, sealing in oleic and linoleic fatty acid integrity.",
    image: "/images/peanut-macro-texture.jpg",
    spec: "0.12 MM LIPID SHIELD",
  },
  {
    id: "split",
    title: "03 // THE SPLIT COTYLEDON",
    heading: "Interior Embryo & Cotyledon",
    desc: "Pure ivory density showing the heart embryo at the nexus, calibrated for moisture under 7.0%.",
    image: "/images/split-kernel-macro.jpg",
    spec: "TWIN ENERGY STORAGE",
  },
  {
    id: "heap",
    title: "04 // THE AGGREGATE HEAP",
    heading: "Uniform Caliber Calibration",
    desc: "Hundreds of thousands of identical kernels sorted by Sortex cameras with 99.9% color purity.",
    image: "/images/peanut-heap-warehouse.jpg",
    spec: "COMMODITY CONVERGENCE",
  },
];

export default function Scene03HarvestZoom() {
  const containerRef = useRef<HTMLDivElement>(null);
  const harvestBgRef = useRef<HTMLDivElement>(null);
  const farmerCardRef = useRef<HTMLDivElement>(null);
  const harvestCopyRef = useRef<HTMLDivElement>(null);
  const macroGalleryRef = useRef<HTMLDivElement>(null);
  const macroTrackRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Master Scroll-Driven Timeline: Harvest Zoom -> Macro Gallery
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=340%",
          scrub: 1.1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Determine active macro slide based on progress
            if (self.progress > 0.45) {
              const macroProg = (self.progress - 0.45) / 0.55;
              const idx = Math.min(
                Math.floor(macroProg * MACRO_SLIDES.length),
                MACRO_SLIDES.length - 1
              );
              setActiveSlide(idx);
            }
          },
        },
      });

      // Stage 1: Camera slowly zooms deep toward the groundnut pod mounds in the field
      tl.fromTo(
        harvestBgRef.current,
        { scale: 1.0, opacity: 1 },
        { scale: 1.45, opacity: 0.15, duration: 1.4, ease: "power2.inOut" }
      );

      // Farmer portrait floats in, then dissolves as we enter macro world
      tl.fromTo(
        farmerCardRef.current,
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.2
      );
      tl.to(
        [farmerCardRef.current, harvestCopyRef.current],
        { opacity: 0, scale: 0.85, duration: 0.6, ease: "power2.in" },
        0.9
      );

      // Stage 2: Reveal Horizontal Extreme Macro Gallery
      tl.fromTo(
        macroGalleryRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
        1.1
      );

      // Horizontal Gallery Slides scroll smoothly across
      tl.to(
        macroTrackRef.current,
        {
          xPercent: -75,
          ease: "none",
          duration: 2.2,
        },
        1.3
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="harvest-macro"
      ref={containerRef}
      className="relative w-full h-screen min-h-[750px] overflow-hidden bg-[#24150B] text-[#FCFAF5] select-none"
    >
      {/* ============================================================ */}
      {/* 1. CINEMATIC FULL-WIDTH HARVEST BACKGROUND WITH ZOOM */}
      {/* ============================================================ */}
      <div
        ref={harvestBgRef}
        className="absolute inset-0 w-full h-full pointer-events-none will-change-transform"
      >
        <Image
          src="/images/harvest-field-tractor.jpg"
          alt="Golden-Hour Groundnut Harvest Field with Tractors and Fresh Pods"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-95 contrast-[1.06]"
        />
        {/* Warm Golden Sunlight Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#24150B] via-transparent to-[#24150B]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#24150B]/80 via-transparent to-[#24150B]/60 pointer-events-none" />
      </div>

      {/* ============================================================ */}
      {/* 2. AUTHENTIC FARMER SELECTION CARD */}
      {/* ============================================================ */}
      <div
        ref={farmerCardRef}
        className="absolute bottom-16 left-6 sm:left-14 z-20 max-w-sm bg-[#FCFAF5]/95 backdrop-blur-md p-6 rounded-3xl border border-[#C7A77C]/30 shadow-[0_20px_50px_rgba(0,0,0,0.4)] text-[#2E2117]"
      >
        <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 border border-[#70421F]/15">
          <Image
            src="/images/harvest-farmer.webp"
            alt="Central Indian Farmer holding freshly harvested groundnut plant cluster"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2E2117]/70 via-transparent to-transparent" />
          <span className="absolute bottom-2.5 left-3 text-[10px] font-mono text-[#FCFAF5] uppercase tracking-widest font-bold">
            SHIVPURI MANDI BELT • DIRECT SOURCING
          </span>
        </div>

        <div className="space-y-1.5">
          <div className="text-[10px] font-mono tracking-[0.25em] text-[#70421F] uppercase font-bold flex items-center gap-2">
            <Sun className="w-3.5 h-3.5 text-[#70421F]" />
            <span>SEASONAL UPROOTING</span>
          </div>
          <h3 className="font-serif text-xl text-[#2E2117] leading-tight">
            Freshly Dug from Fertile Soil
          </h3>
          <p className="text-xs font-sans text-[#2E2117]/80 leading-relaxed">
            Plants are mechanically loosened and inverted in the field, sun-cured for 3 days to lower pod moisture before mechanized thresher separation.
          </p>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. EDITORIAL CENTER-RIGHT HARVEST HEADLINE */}
      {/* ============================================================ */}
      <div
        ref={harvestCopyRef}
        className="absolute top-24 right-6 sm:right-16 z-20 max-w-md text-right pointer-events-none"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCFAF5]/85 backdrop-blur-md border border-[#70421F]/20 text-[10px] font-mono tracking-[0.25em] text-[#70421F] uppercase font-bold mb-3">
          <Sparkles className="w-3 h-3 text-[#70421F]" />
          <span>ACT 03 // THE HARVEST</span>
        </div>
        <h2 className="font-serif text-4xl sm:text-6xl text-[#FCFAF5] font-normal leading-[1.02]">
          From The Field
          <span className="block font-light italic text-[#E8D8C1]">
            Into The Light.
          </span>
        </h2>
        <p className="text-xs sm:text-sm font-sans text-[#E8D8C1]/85 mt-3 leading-relaxed">
          Millions of pods emerge from the darkness into intense Central Indian sunshine, beginning their journey of classification.
        </p>
      </div>

      {/* ============================================================ */}
      {/* 4. HORIZONTAL EXTREME MACRO PEANUT GALLERY (SCROLL-CONTROLLED) */}
      {/* ============================================================ */}
      <div
        ref={macroGalleryRef}
        className="absolute inset-0 w-full h-full z-30 opacity-0 pointer-events-none flex flex-col justify-between py-12 px-6 sm:px-12 bg-[#1A0E07]/95 backdrop-blur-lg"
      >
        {/* Top Macro Header */}
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between text-[11px] font-mono tracking-[0.25em] text-[#C7A77C] uppercase font-bold z-20">
          <div className="flex items-center gap-2">
            <ZoomIn className="w-4 h-4 text-[#C7A77C]" />
            <span>SECTION 04 // EXTREME MACRO PHOTOGRAPHY</span>
          </div>
          <div className="hidden sm:block text-[#E8D8C1]/75">
            SLIDE 0{activeSlide + 1} / 0{MACRO_SLIDES.length} • SCROLL DRIVEN
          </div>
        </div>

        {/* The 4 Horizontal Macro Slides Track */}
        <div className="relative w-full overflow-hidden my-auto flex items-center">
          <div
            ref={macroTrackRef}
            className="flex items-center w-[400%] h-[480px] sm:h-[540px] will-change-transform"
          >
            {MACRO_SLIDES.map((slide, idx) => (
              <div
                key={slide.id}
                className="w-[100vw] h-full flex-shrink-0 px-6 sm:px-16 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16"
              >
                {/* Large Macro Photograph */}
                <div className="relative w-full max-w-xl h-64 sm:h-80 md:h-[380px] rounded-3xl overflow-hidden border-2 border-[#C7A77C]/30 shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
                  <Image
                    src={slide.image}
                    alt={slide.heading}
                    fill
                    sizes="(max-width: 1024px) 90vw, 580px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E07]/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-4 left-5 text-[10px] font-mono tracking-widest text-[#FCFAF5] bg-[#70421F]/80 backdrop-blur-sm px-3 py-1 rounded-full uppercase">
                    {slide.spec}
                  </span>
                </div>

                {/* Editorial Text Overlay */}
                <div className="max-w-md space-y-3 text-left">
                  <span className="text-xs font-mono tracking-[0.3em] text-[#C7A77C] uppercase font-bold block">
                    {slide.title}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-5xl text-[#FCFAF5] font-normal leading-tight">
                    {slide.heading}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-[#E8D8C1]/80 leading-relaxed">
                    {slide.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Pagination Tracker */}
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between text-[10px] font-mono tracking-widest text-[#E8D8C1]/70 uppercase z-20">
          <div className="flex items-center gap-3">
            {MACRO_SLIDES.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeSlide ? "w-10 bg-[#C7A77C]" : "w-2.5 bg-[#C7A77C]/30"
                }`}
              />
            ))}
          </div>
          <span>CONTINUE SCROLLING TO ENTER THE SHELL FRACTURE ↓</span>
        </div>
      </div>
    </section>
  );
}
