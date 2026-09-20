"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  RotateCcw,
  Sprout,
  Flower2,
  Leaf,
  Layers,
  ShieldCheck,
  Compass,
  ArrowRight,
  Globe2,
  Sparkles,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type StageKey = "seed" | "flower" | "pod" | "soil";

interface LifecycleStage {
  id: StageKey;
  num: string;
  name: string;
  phase: string;
  duration: string;
  headline: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  image: string;
  alt: string;
}

const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    id: "seed",
    num: "01",
    name: "Certified Seed Sowing",
    phase: "DAY 01 – 15",
    duration: "Emergence & Germination",
    headline: "The Golden Seed Awakens in Fertile Alluvium",
    description:
      "Hand-selected, double-sortex bold seeds planted in calibrated moisture-rich loam. Within 72 hours, the living germ plumule heart pushes downward to anchor into the deep earth.",
    metricLabel: "GERMINATION VIABILITY",
    metricValue: "98.7% Certified",
    image: "/images/india-farm-aerial.jpg",
    alt: "Aerial View of Indian Peanut Farmlands",
  },
  {
    id: "flower",
    num: "02",
    name: "Botanical Geocarpy",
    phase: "DAY 30 – 50",
    duration: "Blooming & Pegging",
    headline: "The Miraculous Flower That Burrows Underground",
    description:
      "Bright golden blossoms pollinate above ground at sunrise. In a unique botanical phenomenon called geocarpy, the fertilized ovarian peg bends downwards, penetrating the soil to birth the pod.",
    metricLabel: "FLOWER TO PEG RETENTION",
    metricValue: "94.2% Success",
    image: "/images/groundnut-flower.jpg",
    alt: "Peanut Flower Pegging Downward into Soil",
  },
  {
    id: "pod",
    num: "03",
    name: "Subterranean Vault",
    phase: "DAY 60 – 100",
    duration: "Pod Filling & Maturation",
    headline: "Underground Armor & Natural Nitrogen Fixation",
    description:
      "Beneath the soil surface, pods swell into rigid cellulose vaults while root nodules capture atmospheric nitrogen, naturally enriching the soil without synthetic chemical dependency.",
    metricLabel: "NITROGEN SELF-FIXING",
    metricValue: "+42 KG N/Hectare",
    image: "/images/underground-root-crosssection.jpg",
    alt: "Underground Peanut Pods and Root Nodules",
  },
  {
    id: "soil",
    num: "04",
    name: "Regenerative Earth Return",
    phase: "DAY 110 – 140",
    duration: "Harvest & Biomass Loop",
    headline: "Zero-Waste Harvest Replenishing Soil for Generations",
    description:
      "The crop is gently uprooted at peak solar ripeness. Residual leaf biomass and organic shell matter are ploughed back into the soil as natural humus, closing the infinite regenerative loop.",
    metricLabel: "CIRCULAR BIOMASS RETENTION",
    metricValue: "100% Zero-Waste",
    image: "/images/sustainability-soil.webp",
    alt: "Regenerative Living Soil Network",
  },
];

export default function Scene12ReturnToEarthLoop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const orbitWheelRef = useRef<HTMLDivElement>(null);

  const [activeStage, setActiveStage] = useState<StageKey>("seed");

  const currentStage = LIFECYCLE_STAGES.find((s) => s.id === activeStage) || LIFECYCLE_STAGES[0];

  useEffect(() => {
    if (!containerRef.current || !pinWrapperRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1.1,
          pin: pinWrapperRef.current,
          anticipatePin: 1,
        },
      });

      // Subtle orbit rotation effect on scroll
      if (orbitWheelRef.current) {
        tl.to(orbitWheelRef.current, {
          rotation: 360,
          ease: "none",
        });
      }
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTradeDesk = () => {
    const el = document.getElementById("trade-desk") || document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="return-to-earth"
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#FBF7F0] text-[#2E2117] overflow-hidden select-none border-t border-[#70421F]/15"
    >
      {/* Background Architectural Grid & Subtle Radial Earth Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#70421F_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(112,66,31,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div
        ref={pinWrapperRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col justify-between min-h-screen"
      >
        {/* TOP STATUS BAR: LIFECYCLE SPEC & REGENERATIVE METRICS */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#70421F]/20 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#70421F] text-[#FCFAF5] text-[11px] font-mono tracking-widest font-bold">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>ACT 12 • THE INFINITE REGENERATIVE LOOP</span>
            </div>
            <span className="hidden sm:inline-block text-[10px] font-mono text-[#70421F]/75 tracking-wider font-semibold">
              BIOLOGICAL TIMELINE: 120 – 140 DAYS SEED-TO-SOIL
            </span>
          </div>

          <div className="flex items-center gap-3 text-[10px] font-mono text-[#70421F] font-bold">
            <div className="flex items-center gap-1.5 bg-[#FFFFFF]/80 px-3 py-1 rounded-full border border-[#70421F]/20 shadow-sm">
              <Leaf className="w-3.5 h-3.5 text-[#2E7D32]" />
              <span>CARBON-BALANCED LEAF BIOMASS</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 bg-[#FFFFFF]/80 px-3 py-1 rounded-full border border-[#70421F]/20 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#70421F]" />
              <span>100% NON-GMO HERITAGE SEED</span>
            </div>
          </div>
        </div>

        {/* SECTION HERO HEADLINE */}
        <div className="text-center my-4 lg:my-6">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#70421F] uppercase font-bold block mb-1">
            ALL EXPORT RETURNS TO SEED • THE BOTANICAL CYCLE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#2E2117] font-normal tracking-tight">
            The Infinite Earth Loop
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-sans text-[#2E2117]/75 max-w-2xl mx-auto leading-relaxed">
            Every shipping container dispatched across the oceans traces back to a single seed sown into Indian soil.
            The harvest nourishes global markets, while the crop naturally replenishes the earth for the next generation.
          </p>

          {/* 4-STAGE INTERACTIVE ORBITAL TABS */}
          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-2 bg-[#FFFFFF]/85 backdrop-blur-md p-1.5 rounded-2xl border border-[#70421F]/25 shadow-md">
            {LIFECYCLE_STAGES.map((stg) => (
              <button
                key={stg.id}
                onClick={() => setActiveStage(stg.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeStage === stg.id
                    ? "bg-[#70421F] text-[#FCFAF5] font-bold shadow-md"
                    : "text-[#70421F]/80 hover:text-[#70421F] hover:bg-[#70421F]/10"
                }`}
              >
                <span className="opacity-60 text-[10px]">{stg.num}.</span>
                <span>{stg.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* MAIN STAGE: INTERACTIVE SPLIT DISPLAY (VISUAL APERTURE + BOTANICAL DOSSIER) */}
        <div className="relative w-full my-auto py-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* LEFT (7 COLS): HERO PHOTOGRAPHIC APERTURE WITH BOTANICAL ORBIT */}
          <div className="lg:col-span-7 bg-[#FFFFFF]/90 rounded-3xl p-6 sm:p-8 border border-[#70421F]/20 shadow-[0_20px_50px_rgba(112,66,31,0.08)] flex flex-col justify-between backdrop-blur-sm relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between border-b border-[#70421F]/15 pb-3 mb-4 text-[10px] font-mono text-[#70421F]">
                <span className="font-bold bg-[#70421F]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  PHASE: {currentStage.phase}
                </span>
                <span className="font-semibold text-[#8A5A34]">{currentStage.duration}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#2E2117] font-medium leading-snug">
                {currentStage.headline}
              </h3>
            </div>

            {/* FOCUSED HIGH-RESOLUTION PHOTOGRAPHIC FRAME */}
            <div className="relative w-full h-64 sm:h-72 my-4 rounded-2xl overflow-hidden border border-[#70421F]/15 group">
              <Image
                src={currentStage.image}
                alt={currentStage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E2117]/70 via-transparent to-transparent" />

              {/* Stage Pin Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#FCFAF5]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C7A77C] animate-ping" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase">
                    STAGE {currentStage.num} // {currentStage.name}
                  </span>
                </div>
                <div className="bg-[#FCFAF5]/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono border border-white/30">
                  {currentStage.metricLabel}: <span className="text-[#C7A77C] font-bold">{currentStage.metricValue}</span>
                </div>
              </div>
            </div>

            {/* Botanical narrative */}
            <p className="text-xs sm:text-sm font-sans text-[#2E2117]/85 leading-relaxed">
              {currentStage.description}
            </p>

            {/* Quick Lifecycle Progress Bar */}
            <div className="mt-4 pt-4 border-t border-[#70421F]/15 flex items-center justify-between gap-2">
              {LIFECYCLE_STAGES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveStage(s.id)}
                  className={`flex-1 h-2 rounded-full transition-all cursor-pointer ${
                    activeStage === s.id
                      ? "bg-[#70421F]"
                      : "bg-[#70421F]/20 hover:bg-[#70421F]/40"
                  }`}
                  title={s.name}
                />
              ))}
            </div>
          </div>

          {/* RIGHT (5 COLS): BRAND HERITAGE STATEMENT & INFINITE LOOP CONTROLS */}
          <div className="lg:col-span-5 bg-[#2E2117] text-[#FCFAF5] rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(46,33,23,0.3)] flex flex-col justify-between border border-[#C7A77C]/30 relative overflow-hidden">
            {/* Ambient Warm Golden Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C7A77C]/10 rounded-full filter blur-3xl pointer-events-none" />

            <div>
              {/* Rotating Dashed Orbit Symbol */}
              <div className="flex items-center justify-between border-b border-[#C7A77C]/25 pb-3 mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C7A77C] tracking-wider uppercase font-bold">
                  <div ref={orbitWheelRef}>
                    <Globe2 className="w-4 h-4 text-[#C7A77C]" />
                  </div>
                  <span>PERPETUAL SEED CYCLE</span>
                </div>
                <span className="text-[10px] font-mono text-[#E8D8C1]/70">100% REGENERATIVE</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-1 mb-4">
                <span className="text-[11px] font-mono text-[#C7A77C] uppercase tracking-widest block font-bold">
                  PRADEEP TRADING COMPANY
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#FCFAF5] font-normal leading-tight">
                  FROM INDIA.
                  <span className="block font-light italic text-[#E8D8C1]">
                    FOR THE WORLD.
                  </span>
                </h3>
              </div>

              <p className="text-xs font-sans text-[#FCFAF5]/75 leading-relaxed mb-5">
                From our processing facilities in Shivpuri to deep-water berths at Mundra, our operations
                connect domestic farming heartlands with over 35 global trade destinations.
              </p>

              {/* 4 Sustainability Pillars Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="bg-black/35 p-3 rounded-2xl border border-[#C7A77C]/20">
                  <div className="text-[10px] font-mono text-[#C7A77C] font-bold">NITROGEN FIXING</div>
                  <div className="text-xs text-[#FCFAF5]/85 mt-1 leading-snug">
                    Zero chemical fertilizers; root nodules capture atmospheric N2.
                  </div>
                </div>

                <div className="bg-black/35 p-3 rounded-2xl border border-[#C7A77C]/20">
                  <div className="text-[10px] font-mono text-[#C7A77C] font-bold">WATER EFFICIENCY</div>
                  <div className="text-xs text-[#FCFAF5]/85 mt-1 leading-snug">
                    Rain-fed semi-arid cultivation with deep taproot resistance.
                  </div>
                </div>

                <div className="bg-black/35 p-3 rounded-2xl border border-[#C7A77C]/20">
                  <div className="text-[10px] font-mono text-[#C7A77C] font-bold">ZERO-WASTE HUSK</div>
                  <div className="text-xs text-[#FCFAF5]/85 mt-1 leading-snug">
                    100% shell by-product converted into eco-friendly bio-fuel.
                  </div>
                </div>

                <div className="bg-black/35 p-3 rounded-2xl border border-[#C7A77C]/20">
                  <div className="text-[10px] font-mono text-[#C7A77C] font-bold">TRACEABLE SOURCING</div>
                  <div className="text-xs text-[#FCFAF5]/85 mt-1 leading-snug">
                    Direct APMC farmgate purchase without intermediary tampering.
                  </div>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS: REPLAY OR ADVANCE TO TRADE DESK */}
            <div className="mt-6 pt-4 border-t border-[#C7A77C]/25 space-y-2.5">
              <button
                onClick={scrollToTop}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#C7A77C] text-[#1A0E06] font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#D9B98E] transition-all cursor-pointer shadow-md"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>REPLAY JOURNEY FROM SEED (ACT 01)</span>
              </button>

              <button
                onClick={scrollToTradeDesk}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-black/40 border border-[#C7A77C]/30 text-[#E8D8C1] hover:text-white hover:bg-black/60 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>REQUEST EXPORT QUOTATION (RFQ)</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C7A77C]" />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM METRIC STRIP */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#70421F]/20 pt-4 mt-2 text-[10px] font-mono text-[#70421F]">
          <div className="flex items-center gap-3">
            <Compass className="w-3.5 h-3.5 text-[#70421F]" />
            <span className="font-bold">
              ORIGIN: SHIVPURI, MADHYA PRADESH • EXPORT PORT: MUNDRA (INMUN1)
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#70421F]/80">
            <span>ANNUAL HANDLING CAPACITY: 50,000+ METRIC TONS</span>
            <Sparkles className="w-3 h-3 text-[#70421F]" />
          </div>
        </div>
      </div>
    </section>
  );
}
