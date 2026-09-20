"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Box,
  ShieldCheck,
  Truck,
  PackageCheck,
  Anchor,
  Layers,
  Sparkles,
  CheckCircle2,
  Maximize2,
  Calculator,
  Container,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type PackagingMode = "jute" | "vacuum" | "container";

interface PackagingOption {
  id: PackagingMode;
  tag: string;
  name: string;
  subtitle: string;
  weight: string;
  image: string;
  features: string[];
  specs: { label: string; value: string }[];
  accentColor: string;
}

const PACKAGING_OPTIONS: PackagingOption[] = [
  {
    id: "jute",
    tag: "EXPORT STANDARD // 01",
    name: "Authentic Jute Sacks",
    subtitle: "King Brand & Sortex Cleaned",
    weight: "50 KG / 25 KG NET",
    image: "/images/packaging/authentic-jute-sacks.webp",
    features: [
      "Natural 100% biodegradable, hydrocarbon-free food-grade jute yarn",
      "Natural cross-weave micro-aeration prevents moisture sweating at sea",
      "High tensile triple lock-stitch handles up to 12-tier vertical cargo stacking",
      "Official King Brand & Pradeep Trading Company export stencil markings",
    ],
    specs: [
      { label: "Material", value: "Twill Food Jute" },
      { label: "Tare Weight", value: "± 750 Grams" },
      { label: "Moisture Ceiling", value: "< 7.5% Guaranteed" },
      { label: "Drop Impact", value: "Passed 2.5m Test" },
    ],
    accentColor: "#70421F",
  },
  {
    id: "vacuum",
    tag: "PREMIUM HERMETIC // 02",
    name: "Nitrogen Vacuum Packs",
    subtitle: "Samman Peanut Double-Sortex",
    weight: "25 KG / 10 KG BRICK",
    image: "/images/packaging/samman-peanuts-packaging.webp",
    features: [
      "Co-extruded 5-layer EVOH gas-barrier polymer film",
      "Pre-conditioned nitrogen flush reduces residual oxygen to < 0.5%",
      "Complete exclusion of ambient humidity, insect vectors, and airborne mold",
      "Extended 24-month organoleptic freshness for European & Far-East markets",
    ],
    specs: [
      { label: "Barrier Film", value: "5-Layer Nylon/EVOH" },
      { label: "O2 Residual", value: "< 0.5% Certified" },
      { label: "Shelf Life", value: "24 Months Ambient" },
      { label: "Puncture Res.", value: "> 450 N Strength" },
    ],
    accentColor: "#8C4A1E",
  },
  {
    id: "container",
    tag: "INTERMODAL FCL // 03",
    name: "20FT / 40FT Sea Container",
    subtitle: "Palletized & Desiccant Protected",
    weight: "19.0 TO 27.5 METRIC TONS",
    image: "/images/container-loading-dock.jpg",
    features: [
      "Heavy-duty corrugated kraft paper bottom liner & side condensation barriers",
      "High-absorption hanging silica gel desiccant bags throughout ceiling rafters",
      "ISPM-15 certified heat-treated phytosanitary wooden pallets with edge guards",
      "Tamper-evident ISO/PAS 17712 high-security container bolt seal certified",
    ],
    specs: [
      { label: "20ft FCL Payload", value: "19.00 Metric Tons" },
      { label: "40ft FCL Payload", value: "27.50 Metric Tons" },
      { label: "Fumigation", value: "Phosphine / MBr Cert" },
      { label: "Port Dispatch", value: "Mundra / Nhava Sheva" },
    ],
    accentColor: "#4A2810",
  },
];

export default function Scene10PackagingFold() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const previewImageRef = useRef<HTMLDivElement>(null);
  const palletStackRef = useRef<HTMLDivElement>(null);

  const [selectedPackaging, setSelectedPackaging] = useState<PackagingMode>("jute");
  const [containerSize, setContainerSize] = useState<"20ft" | "40ft">("20ft");
  const [bagWeight, setBagWeight] = useState<50 | 25>(50);

  // Dynamic calculations based on user selection
  const totalCapacityKg = containerSize === "20ft" ? 19000 : 27000;
  const calculatedBags = Math.floor(totalCapacityKg / bagWeight);
  const calculatedPallets = containerSize === "20ft" ? (bagWeight === 50 ? 10 : 16) : (bagWeight === 50 ? 20 : 24);
  const bagsPerPallet = Math.ceil(calculatedBags / calculatedPallets);

  const activeOption = PACKAGING_OPTIONS.find((opt) => opt.id === selectedPackaging) || PACKAGING_OPTIONS[0];

  useEffect(() => {
    if (!containerRef.current || !pinWrapperRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=160%",
          scrub: 1.1,
          pin: pinWrapperRef.current,
          anticipatePin: 1,
        },
      });

      // Subtle scroll parallax for the pallet stack and specs
      tl.fromTo(
        palletStackRef.current,
        { scale: 0.95, y: 20 },
        { scale: 1.03, y: -10, duration: 1, ease: "power1.inOut" }
      );
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="packaging-scene"
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#F5EDE1] text-[#2E2117] overflow-hidden select-none border-t border-[#70421F]/15"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#70421F_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div
        ref={pinWrapperRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col justify-between min-h-screen"
      >
        {/* TOP STATUS BAR: TELEMETRY, CERTIFICATION & PORT ORIGIN */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#70421F]/20 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#70421F] text-[#FCFAF5] text-[11px] font-mono tracking-widest font-bold">
              <Box className="w-3.5 h-3.5" />
              <span>ACT 09 • GLOBAL EXPORT PACKAGING</span>
            </div>
            <span className="hidden sm:inline-block text-[10px] font-mono text-[#70421F]/75 tracking-wider font-semibold">
              MUNDRA (INMUN1) &amp; NHAVA SHEVA (INNSA1) DISPATCH
            </span>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-mono text-[#70421F] font-bold">
            <div className="flex items-center gap-1.5 bg-[#FFFFFF]/70 px-3 py-1 rounded-full border border-[#70421F]/20 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#70421F]" />
              <span>FUMIGATION: ISPM-15 / PHOSPHINE</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 bg-[#FFFFFF]/70 px-3 py-1 rounded-full border border-[#70421F]/20 shadow-sm">
              <Truck className="w-3.5 h-3.5 text-[#70421F]" />
              <span>19.00 MT PAYLOAD GUARANTEE</span>
            </div>
          </div>
        </div>

        {/* SECTION HERO HEADLINE */}
        <div className="text-center my-4 lg:my-6">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#70421F] uppercase font-bold block mb-1">
            HERMETICALLY SEALED &amp; MARITIME PROTECTED
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#2E2117] font-normal tracking-tight">
            Engineered Export Packaging
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-sans text-[#2E2117]/75 max-w-2xl mx-auto leading-relaxed">
            Every shipment is calibrated for long-haul maritime routes. Breathable food-grade jute,
            airtight vacuum nitrogen preservation, and strict 19-metric-ton container matrices ensure zero mold,
            retained moisture below 7.5%, and pristine seed integrity.
          </p>

          {/* PACKAGING TYPE SELECTOR TABS */}
          <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 bg-[#FFFFFF]/80 backdrop-blur-md p-1.5 rounded-2xl border border-[#70421F]/25 shadow-md">
            {PACKAGING_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedPackaging(opt.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  selectedPackaging === opt.id
                    ? "bg-[#70421F] text-[#FCFAF5] font-bold shadow-md"
                    : "text-[#70421F]/80 hover:text-[#70421F] hover:bg-[#70421F]/10"
                }`}
              >
                <PackageCheck className="w-3.5 h-3.5" />
                <span>{opt.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* MAIN DISPLAY: INTERACTIVE 2-COLUMN LUXURY SHOWCASE */}
        <div className="relative w-full my-auto py-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* LEFT COLUMN (7 COLS): AUTHENTIC PACKAGING SHOWCASE & BRAND LABELS */}
          <div className="lg:col-span-7 bg-[#FFFFFF]/90 rounded-3xl p-6 sm:p-8 border border-[#70421F]/20 shadow-[0_20px_50px_rgba(112,66,31,0.08)] flex flex-col justify-between backdrop-blur-sm">
            <div>
              {/* Header inside card */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#70421F]/15 pb-3 mb-4">
                <span className="text-[10px] font-mono tracking-widest font-bold text-[#70421F] bg-[#70421F]/10 px-2.5 py-0.5 rounded-full">
                  {activeOption.tag}
                </span>
                <span className="text-xs font-mono font-bold text-[#70421F]">
                  {activeOption.weight}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2E2117] font-medium">
                  {activeOption.name}
                </h3>
                <span className="text-xs font-mono text-[#8A5A34] italic font-normal">
                  {activeOption.subtitle}
                </span>
              </div>
            </div>

            {/* REAL PACKAGING IMAGE DISPLAY */}
            <div
              ref={previewImageRef}
              className="relative w-full h-64 sm:h-72 my-4 rounded-2xl overflow-hidden bg-radial from-[#F5EDE1] to-[#E8D8C1] border border-[#70421F]/15 flex items-center justify-center p-4 group"
            >
              <Image
                src={activeOption.image}
                alt={activeOption.name}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain transition-transform duration-700 group-hover:scale-105 filter drop-shadow-[0_15px_30px_rgba(112,66,31,0.25)]"
                priority
              />

              {/* Watermark / Brand stamp */}
              <div className="absolute bottom-3 right-3 bg-[#70421F]/90 backdrop-blur-sm text-[#FCFAF5] text-[9px] font-mono tracking-widest px-3 py-1 rounded-full uppercase font-bold shadow-md">
                PRADEEP EXPORT VERIFIED
              </div>
            </div>

            {/* Packaging Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              {activeOption.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs font-sans text-[#2E2117]/85">
                  <CheckCircle2 className="w-4 h-4 text-[#70421F] shrink-0 mt-0.5" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>

            {/* Technical Specs Footer Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-t border-[#70421F]/15 pt-4 mt-4 text-[10px] font-mono">
              {activeOption.specs.map((spec, i) => (
                <div key={i} className="bg-[#F5EDE1]/60 p-2 rounded-xl border border-[#70421F]/10">
                  <div className="text-[#2E2117]/60 text-[9px] uppercase">{spec.label}</div>
                  <div className="font-bold text-[#70421F] mt-0.5">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN (5 COLS): INTERACTIVE CONTAINER & PALLET CALCULATOR */}
          <div
            ref={palletStackRef}
            className="lg:col-span-5 bg-[#2E2117] text-[#FCFAF5] rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(46,33,23,0.3)] flex flex-col justify-between border border-[#C7A77C]/30 relative overflow-hidden"
          >
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C7A77C]/10 rounded-full filter blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between border-b border-[#C7A77C]/25 pb-3 mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C7A77C] tracking-wider uppercase font-bold">
                  <Calculator className="w-4 h-4 text-[#C7A77C]" />
                  <span>CONTAINER STUFFING SIMULATOR</span>
                </div>
                <span className="text-[10px] font-mono text-[#E8D8C1]/70">FCL OPTIMIZER</span>
              </div>

              <h4 className="font-serif text-2xl text-[#FCFAF5] font-normal mb-1">
                Pallet &amp; Volume Matrix
              </h4>
              <p className="text-xs font-sans text-[#FCFAF5]/70 mb-4 leading-relaxed">
                Configure container footprint and sack weights to preview payload capacity and pallet layout.
              </p>

              {/* User Interactive Switches */}
              <div className="space-y-3 bg-black/25 p-4 rounded-2xl border border-[#C7A77C]/20">
                {/* Switch 1: Container Size */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#E8D8C1]">CONTAINER SPEC:</span>
                  <div className="inline-flex gap-1 bg-[#1A0E06] p-1 rounded-xl border border-[#C7A77C]/30">
                    <button
                      onClick={() => setContainerSize("20ft")}
                      className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer ${
                        containerSize === "20ft"
                          ? "bg-[#C7A77C] text-[#1A0E06]"
                          : "text-[#E8D8C1]/70 hover:text-white"
                      }`}
                    >
                      20FT FCL (19 MT)
                    </button>
                    <button
                      onClick={() => setContainerSize("40ft")}
                      className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer ${
                        containerSize === "40ft"
                          ? "bg-[#C7A77C] text-[#1A0E06]"
                          : "text-[#E8D8C1]/70 hover:text-white"
                      }`}
                    >
                      40FT HC (27 MT)
                    </button>
                  </div>
                </div>

                {/* Switch 2: Bag Weight */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#E8D8C1]">SACK CALIBRATION:</span>
                  <div className="inline-flex gap-1 bg-[#1A0E06] p-1 rounded-xl border border-[#C7A77C]/30">
                    <button
                      onClick={() => setBagWeight(50)}
                      className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer ${
                        bagWeight === 50
                          ? "bg-[#C7A77C] text-[#1A0E06]"
                          : "text-[#E8D8C1]/70 hover:text-white"
                      }`}
                    >
                      50 KG SACKS
                    </button>
                    <button
                      onClick={() => setBagWeight(25)}
                      className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer ${
                        bagWeight === 25
                          ? "bg-[#C7A77C] text-[#1A0E06]"
                          : "text-[#E8D8C1]/70 hover:text-white"
                      }`}
                    >
                      25 KG BAGS
                    </button>
                  </div>
                </div>
              </div>

              {/* Dynamic Pallet Stack Grid Visualization */}
              <div className="mt-4 p-4 rounded-2xl bg-black/35 border border-[#C7A77C]/20">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#C7A77C] mb-2 font-bold">
                  <span>PALLET STACK BLUEPRINT</span>
                  <span>{calculatedPallets} PALLETS • {bagsPerPallet} BAGS/PALLET</span>
                </div>

                {/* Animated visual sack grid */}
                <div className="grid grid-cols-6 sm:grid-cols-8 gap-1.5 py-2">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-6 rounded-md border flex items-center justify-center text-[8px] font-mono font-bold transition-all duration-300 ${
                        i < 18
                          ? "bg-[#C7A77C] text-[#1A0E06] border-[#E8D8C1]/60 shadow-sm"
                          : "bg-[#C7A77C]/40 text-[#FCFAF5]/70 border-[#C7A77C]/30"
                      }`}
                    >
                      #{i + 1}
                    </div>
                  ))}
                </div>
                <div className="text-[9px] font-mono text-[#E8D8C1]/60 mt-1 flex items-center justify-between">
                  <span>ISPM-15 HEAT TREATED BASE</span>
                  <span>STRETCH WRAPPED + CORNER GUARDS</span>
                </div>
              </div>
            </div>

            {/* Real-time Calculation Readout */}
            <div className="mt-4 pt-4 border-t border-[#C7A77C]/25">
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-black/40 p-3 rounded-xl border border-[#C7A77C]/15">
                  <div className="text-[9px] font-mono text-[#E8D8C1]/60 uppercase">TOTAL SACKS</div>
                  <div className="text-xl font-mono font-bold text-[#FCFAF5] mt-0.5">
                    {calculatedBags} <span className="text-xs font-normal text-[#C7A77C]">Units</span>
                  </div>
                </div>
                <div className="bg-black/40 p-3 rounded-xl border border-[#C7A77C]/15">
                  <div className="text-[9px] font-mono text-[#E8D8C1]/60 uppercase">NET PAYLOAD</div>
                  <div className="text-xl font-mono font-bold text-[#FCFAF5] mt-0.5">
                    {(totalCapacityKg / 1000).toFixed(1)} <span className="text-xs font-normal text-[#C7A77C]">MT</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[#E8D8C1]/80">
                <span className="flex items-center gap-1.5">
                  <Anchor className="w-3.5 h-3.5 text-[#C7A77C]" />
                  <span>SEALED TARE: {(totalCapacityKg * 1.02).toLocaleString()} KG GROSS</span>
                </span>
                <span className="text-[#C7A77C] font-bold">DISPATCH READY</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM LOGISTICS STRIP */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#70421F]/20 pt-4 mt-2 text-[10px] font-mono text-[#70421F]">
          <div className="flex items-center gap-3">
            <Container className="w-3.5 h-3.5 text-[#70421F]" />
            <span className="font-bold">
              LOGISTICS PARTNERS: MAERSK • MSC • CMA CGM • DIRECT ROUTE SHIPMENTS
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#70421F]/80">
            <span>CUSTOM CLIENT STENCIL &amp; PRIVATE LABEL BRANDING AVAILABLE</span>
            <Sparkles className="w-3 h-3 text-[#70421F]" />
          </div>
        </div>
      </div>
    </section>
  );
}
