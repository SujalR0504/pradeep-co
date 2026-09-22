"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface QualityBenchmark {
  id: string;
  title: string;
  spec: string;
  description: string;
  dotX: number;
  dotY: number;
  lineFromX: number;
  lineFromY: number;
}

const QUALITY_BENCHMARKS: QualityBenchmark[] = [
  {
    id: "size",
    title: "SIZE",
    spec: "Calibrated 38/42 to 70/80 Counts / Oz",
    description: "Multi-deck rotary sizing screens screen kernels into exact count calibrations for uniform industrial roasting and confection caliber.",
    dotX: 420,
    dotY: 220,
    lineFromX: 250,
    lineFromY: 130,
  },
  {
    id: "purity",
    title: "PURITY",
    spec: "> 99.5% Purity • < 0.5% Broken",
    description: "Mechanical aspirators, vibratory sieves, and dual destoners eliminate mud, stones, and foreign matter before sorting.",
    dotX: 580,
    dotY: 210,
    lineFromX: 750,
    lineFromY: 130,
  },
  {
    id: "color",
    title: "COLOR",
    spec: "Bichromatic Optical CCD Detection",
    description: "High-resolution optical cameras inspect each seed in free fall, rejecting off-color testae, dark spots, and immature grains.",
    dotX: 380,
    dotY: 340,
    lineFromX: 250,
    lineFromY: 410,
  },
  {
    id: "consistency",
    title: "CONSISTENCY",
    spec: "Stabilized Moisture 7.0% - 8.0%",
    description: "Even drying preserves cellular membrane integrity, preventing lipid rancidity, shell mold, and transit decay.",
    dotX: 620,
    dotY: 350,
    lineFromX: 750,
    lineFromY: 410,
  },
  {
    id: "quality-control",
    title: "QUALITY CONTROL",
    spec: "Aflatoxin < 4 ppb • Lab Certified",
    description: "Every shipment is certified by HPLC / ELISA analysis conforming to strict European, GCC, and Asian food import limits.",
    dotX: 500,
    dotY: 420,
    lineFromX: 500,
    lineFromY: 530,
  },
];

// Transformation Stages for Signature Animation 1
const TRANSFORMATION_STAGES = [
  {
    id: "whole",
    label: "01 WHOLE POD",
    image: "/images/peanut-inshell.webp",
    caption: "Intact sun-cured pod peg with fibrous cellular wall protecting inner kernels.",
  },
  {
    id: "split-pod",
    label: "02 SPLIT POD",
    image: "/images/shell-cracked-open.jpg",
    caption: "Gentle mechanical cracking releasing twin calibrated kernels without bruising.",
  },
  {
    id: "kernel",
    label: "03 RAW KERNEL",
    image: "/images/single-kernel-cutout.png",
    caption: "Intact natural red skin kernel retaining essential oleic fats and minerals.",
  },
  {
    id: "graded",
    label: "04 GRADED KERNELS",
    image: "/images/peanut-bold.webp",
    caption: "Pristine double-sortex graded bold kernels ready for ocean container export.",
  },
];

export default function QualitySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const peanutImgRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<SVGSVGElement>(null);
  const [activeTransformIndex, setActiveTransformIndex] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Slow subtle scaling of central macro peanut photography
      if (peanutImgRef.current) {
        gsap.fromTo(
          peanutImgRef.current,
          { scale: 0.96 },
          {
            scale: 1.05,
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

      // 2. Animated line draw with strokeDashoffset
      const lines = sectionRef.current?.querySelectorAll(".quality-line");
      const cards = sectionRef.current?.querySelectorAll(".quality-card");

      if (lines && cards) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          lines,
          { strokeDashoffset: 120, opacity: 0 },
          { strokeDashoffset: 0, opacity: 0.85, duration: 0.8, stagger: 0.1, ease: "power2.out" }
        ).fromTo(
          cards,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
          "-=0.4"
        );
      }
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="quality"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#FCFAF5] text-[#2D241D] border-t border-[#5C341B]/12"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 text-left">
          <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-[#A4774C] uppercase block">
            07 // QUALITY STANDARDS &amp; ANALYSIS
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-normal leading-[1.06] tracking-tight text-[#5C341B]">
            QUALITY
            <br />
            YOU CAN SEE.
          </h2>

          <p className="text-sm sm:text-base font-sans text-[#2D241D]/80 leading-relaxed font-normal max-w-2xl">
            Every export consignment is evaluated against five uncompromising physical and laboratory benchmarks before dispatch from our Bhonti processing facility.
          </p>
        </div>

        {/* Central Macro Visual Stage: Macro Photography with Drawn Thin Brown Leader Lines */}
        <div className="relative w-full max-w-5xl mx-auto min-h-[520px] lg:min-h-[600px] flex items-center justify-center">
          {/* Subtle Thin Brown SVG Leader Lines (Desktop) */}
          <svg
            ref={linesRef}
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-10"
            viewBox="0 0 1000 600"
            fill="none"
            preserveAspectRatio="none"
          >
            {QUALITY_BENCHMARKS.map((b) => (
              <g key={b.id}>
                <path
                  d={`M ${b.lineFromX} ${b.lineFromY} L ${b.dotX} ${b.dotY}`}
                  stroke="#754522"
                  strokeWidth="1.2"
                  strokeDasharray="120"
                  className="quality-line opacity-70"
                />
                <circle cx={b.dotX} cy={b.dotY} r="3.5" fill="#5C341B" stroke="#FCFAF5" strokeWidth="1.5" />
              </g>
            ))}
          </svg>

          {/* Central Macro Peanut Image (Slowly scales on scroll) */}
          <div
            ref={peanutImgRef}
            className="relative w-64 sm:w-80 md:w-96 aspect-[3/4] flex items-center justify-center z-0 transition-transform will-change-transform"
          >
            <Image
              src="/images/single-kernel-cutout.png"
              alt="Macro inspected peanut kernel"
              fill
              sizes="(max-width: 768px) 260px, 380px"
              className="object-contain filter drop-shadow-xl"
              priority
            />
          </div>

          {/* Desktop Quality Cards surrounding central kernel */}
          <div className="hidden lg:block">
            {/* 01 SIZE (Top-Left) */}
            <div className="quality-card absolute top-4 left-4 max-w-[250px] p-4 rounded-2xl bg-[#FCFAF5]/90 border border-[#5C341B]/15 backdrop-blur-xs space-y-1 shadow-xs">
              <span className="text-[10px] font-sans font-bold text-[#A4774C] uppercase tracking-wider block">
                01 // {QUALITY_BENCHMARKS[0].title}
              </span>
              <h4 className="font-serif text-lg text-[#5C341B] font-normal">
                Calibrated Sizing
              </h4>
              <p className="text-[11px] font-sans text-[#5C341B] font-bold">
                {QUALITY_BENCHMARKS[0].spec}
              </p>
              <p className="text-[11px] font-sans text-[#2D241D]/70 leading-relaxed">
                {QUALITY_BENCHMARKS[0].description}
              </p>
            </div>

            {/* 02 PURITY (Top-Right) */}
            <div className="quality-card absolute top-4 right-4 max-w-[250px] p-4 rounded-2xl bg-[#FCFAF5]/90 border border-[#5C341B]/15 backdrop-blur-xs space-y-1 shadow-xs text-right">
              <span className="text-[10px] font-sans font-bold text-[#A4774C] uppercase tracking-wider block">
                02 // {QUALITY_BENCHMARKS[1].title}
              </span>
              <h4 className="font-serif text-lg text-[#5C341B] font-normal">
                Mechanical Purity
              </h4>
              <p className="text-[11px] font-sans text-[#5C341B] font-bold">
                {QUALITY_BENCHMARKS[1].spec}
              </p>
              <p className="text-[11px] font-sans text-[#2D241D]/70 leading-relaxed">
                {QUALITY_BENCHMARKS[1].description}
              </p>
            </div>

            {/* 03 COLOR (Bottom-Left) */}
            <div className="quality-card absolute bottom-12 left-4 max-w-[250px] p-4 rounded-2xl bg-[#FCFAF5]/90 border border-[#5C341B]/15 backdrop-blur-xs space-y-1 shadow-xs">
              <span className="text-[10px] font-sans font-bold text-[#A4774C] uppercase tracking-wider block">
                03 // {QUALITY_BENCHMARKS[2].title}
              </span>
              <h4 className="font-serif text-lg text-[#5C341B] font-normal">
                Optical Inspection
              </h4>
              <p className="text-[11px] font-sans text-[#5C341B] font-bold">
                {QUALITY_BENCHMARKS[2].spec}
              </p>
              <p className="text-[11px] font-sans text-[#2D241D]/70 leading-relaxed">
                {QUALITY_BENCHMARKS[2].description}
              </p>
            </div>

            {/* 04 CONSISTENCY (Bottom-Right) */}
            <div className="quality-card absolute bottom-12 right-4 max-w-[250px] p-4 rounded-2xl bg-[#FCFAF5]/90 border border-[#5C341B]/15 backdrop-blur-xs space-y-1 shadow-xs text-right">
              <span className="text-[10px] font-sans font-bold text-[#A4774C] uppercase tracking-wider block">
                04 // {QUALITY_BENCHMARKS[3].title}
              </span>
              <h4 className="font-serif text-lg text-[#5C341B] font-normal">
                Moisture Balance
              </h4>
              <p className="text-[11px] font-sans text-[#5C341B] font-bold">
                {QUALITY_BENCHMARKS[3].spec}
              </p>
              <p className="text-[11px] font-sans text-[#2D241D]/70 leading-relaxed">
                {QUALITY_BENCHMARKS[3].description}
              </p>
            </div>

            {/* 05 QUALITY CONTROL (Bottom Center) */}
            <div className="quality-card absolute bottom-0 left-1/2 -translate-x-1/2 max-w-[280px] p-3 rounded-2xl bg-[#FCFAF5]/95 border border-[#5C341B]/15 backdrop-blur-xs text-center space-y-1 shadow-sm">
              <span className="text-[10px] font-sans font-bold text-[#A4774C] uppercase tracking-wider block">
                05 // {QUALITY_BENCHMARKS[4].title}
              </span>
              <p className="text-xs font-sans text-[#5C341B] font-bold">
                {QUALITY_BENCHMARKS[4].spec}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Fallback List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden pt-4">
          {QUALITY_BENCHMARKS.map((b, i) => (
            <div
              key={b.id}
              className="p-4 rounded-2xl bg-[#F5EFE5]/70 border border-[#5C341B]/12 space-y-1.5 shadow-xs"
            >
              <span className="text-[10px] font-sans font-bold text-[#A4774C] uppercase tracking-wider block">
                0{i + 1} // {b.title}
              </span>
              <h4 className="font-serif text-lg text-[#5C341B]">
                {b.title}
              </h4>
              <p className="text-xs font-sans text-[#5C341B] font-bold">
                {b.spec}
              </p>
              <p className="text-xs font-sans text-[#2D241D]/75 leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        {/* SIGNATURE ANIMATION 1: PEANUT TRANSFORMATION */}
        <div className="pt-12 border-t border-[#5C341B]/12 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#A4774C] uppercase block">
                SIGNATURE INTERACTION 01 // PEANUT TRANSFORMATION
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#5C341B] font-normal tracking-tight">
                THE MORPHOLOGY OF EXCELLENCE
              </h3>
            </div>

            {/* Interactive stage selector */}
            <div className="flex items-center gap-2">
              {TRANSFORMATION_STAGES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setActiveTransformIndex(idx)}
                  className={`px-3 py-1 rounded-full text-xs font-sans font-bold uppercase transition-all cursor-pointer ${
                    activeTransformIndex === idx
                      ? "bg-[#5C341B] text-[#FCFAF5] shadow-xs"
                      : "bg-[#F5EFE5] text-[#2D241D]/60 hover:text-[#5C341B]"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Morphing Visual Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-[#F5EFE5]/50 border border-[#5C341B]/12 p-6 sm:p-10 shadow-xs">
            {/* Visual Display with Crossfade & Mask */}
            <div className="lg:col-span-6 h-[260px] sm:h-[320px] relative rounded-2xl bg-[#FCFAF5] border border-[#5C341B]/10 overflow-hidden flex items-center justify-center p-6 shadow-inner">
              <div className="relative w-full h-full max-w-[340px] max-h-[260px] flex items-center justify-center transition-all duration-500 ease-out">
                <Image
                  src={TRANSFORMATION_STAGES[activeTransformIndex].image}
                  alt={TRANSFORMATION_STAGES[activeTransformIndex].label}
                  fill
                  sizes="360px"
                  className="object-contain filter drop-shadow-lg transition-all duration-500"
                />
              </div>

              <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#5C341B] text-[#FCFAF5] text-[10px] font-sans font-bold uppercase">
                {TRANSFORMATION_STAGES[activeTransformIndex].label}
              </div>
            </div>

            {/* Explanation & Steps */}
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-xs font-bold text-[#A4774C]">
                TRANSFORMATION STAGE {activeTransformIndex + 1} OF 4
              </span>
              <h4 className="font-serif text-2xl text-[#5C341B] font-normal">
                {TRANSFORMATION_STAGES[activeTransformIndex].label}
              </h4>
              <p className="text-sm font-sans text-[#2D241D]/80 leading-relaxed">
                {TRANSFORMATION_STAGES[activeTransformIndex].caption}
              </p>

              <div className="flex items-center gap-2 pt-2 text-xs font-mono text-[#A4774C]">
                <span>WHOLE POD</span>
                <span>&rarr;</span>
                <span>SPLIT POD</span>
                <span>&rarr;</span>
                <span>RAW KERNEL</span>
                <span>&rarr;</span>
                <span>GRADED CALIBER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
