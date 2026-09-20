"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  SlidersHorizontal,
  Microscope,
  Cpu,
  Layers,
  ShieldCheck,
  ArrowUpRight,
  Filter,
} from "lucide-react";

type ProcessStage = "cleaning" | "grading" | "sortex" | "lab";

interface StageInfo {
  id: ProcessStage;
  num: string;
  name: string;
  headline: string;
  description: string;
  metric: string;
  metricLabel: string;
  image: string;
  alt: string;
}

const STAGES: StageInfo[] = [
  {
    id: "cleaning",
    num: "01",
    name: "Pre-Cleaning & De-Stoning",
    headline: "Dual-Aspiration Density Separator",
    description:
      "Raw field harvest passes through multi-deck vibratory screens with calibrated negative-pressure air suction. Light foreign matter, chaff, and heavy field stones are completely removed before shelling.",
    metric: "99.8%",
    metricLabel: "IMPURITY REMOVAL EFFICIENCY",
    image: "/images/peanut-heap-warehouse.jpg",
    alt: "Pre-Cleaned Raw Groundnut Inflow",
  },
  {
    id: "grading",
    num: "02",
    name: "Mechanical Caliber Sizing",
    headline: "Precision Count-Per-Ounce Grading",
    description:
      "Perforated precision screens divide intact kernels into calibrated commercial sizes: Bold 38/42, 40/50, 50/60 and Java 50/60, 60/70, 70/80. Zero size variance ensures even roasting.",
    metric: "± 1 Kernel",
    metricLabel: "COUNT-PER-OUNCE PRECISION",
    image: "/images/split-cotyledon-cutout.png",
    alt: "Calibrated Sized Groundnut Kernels",
  },
  {
    id: "sortex",
    num: "03",
    name: "Double-Sortex Optical Sorting",
    headline: "High-Resolution CCD Bichromatic Cameras",
    description:
      "Free-falling kernels pass through high-frequency optical cameras capturing 20,000 frames per second. High-pressure pneumatic micro-ejection nozzles instantly blast away discolored or defective kernels.",
    metric: "4 MT / Hr",
    metricLabel: "OPTICAL SORTING CAPACITY",
    image: "/images/sortex-machine.webp",
    alt: "Modern Optical Color Sorter Machine",
  },
  {
    id: "lab",
    num: "04",
    name: "Quality Assurance & Lab Testing",
    headline: "HPLC Aflatoxin & Moisture Certification",
    description:
      "Every batch undergoes rigorous quality testing before bagging: digital moisture titration (guaranteed 7.0–8.0%), free fatty acid assessment (<0.3%), and destination-certified HPLC aflatoxin testing (<4 ppb).",
    metric: "< 4 PPB",
    metricLabel: "AFLATOXIN COMPLIANCE (EU SPEC)",
    image: "/images/quality-lab.webp",
    alt: "In-House Quality Testing Laboratory",
  },
];

const GRADES = [
  {
    name: "Bold Peanuts (Singdana)",
    count: "38/42 & 40/50 / oz",
    purity: "99.9% Sortex Clean",
    moisture: "7.0% Max",
    aflatoxin: "< 4 ppb",
    usage: "Direct Snacking, Salting & Peanut Butter",
  },
  {
    name: "Java Peanuts (Spanish)",
    count: "50/60 & 60/70 / oz",
    purity: "99.8% Sortex Clean",
    moisture: "7.0% Max",
    aflatoxin: "< 4 ppb",
    usage: "Confectionery, Candy Coating & Roasting",
  },
  {
    name: "Blanched Whole & Splits",
    count: "40/50 & 50/60 / oz",
    purity: "99.95% Skinless",
    moisture: "5.0% Max",
    aflatoxin: "< 2 ppb",
    usage: "European Food Processors & Pastes",
  },
];

export default function Scene08SortingGravityLab() {
  const [activeStage, setActiveStage] = useState<ProcessStage>("sortex");
  const [selectedGrade, setSelectedGrade] = useState(0);

  const currentStageData = STAGES.find((s) => s.id === activeStage) || STAGES[0];

  return (
    <section
      id="sorting-lab"
      className="relative w-full py-24 lg:py-32 bg-[#FFFDF8] text-[#2E2117] overflow-hidden border-b border-[#5A3218]/15"
    >
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#5A3218_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#5A3218]/15 pb-4 mb-10 gap-4">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#5A3218]" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#7A4824] uppercase font-bold">
              ACT 08 • QUALITY &amp; GRADING EXPERIENCE
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#5A3218] font-bold uppercase bg-[#5A3218]/10 px-3 py-1 rounded-full">
            4 METRIC TONS / HOUR SORTEX INFRASTRUCTURE
          </span>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2E2117] font-normal tracking-tight">
            Automated Sortex &amp; Quality Lab
          </h2>
          <p className="mt-3 text-sm sm:text-base font-sans text-[#2E2117]/80 leading-relaxed font-light">
            Every grain of Balaji Exports groundnuts undergoes a 4-tier screening workflow.
            From density separation to high-speed optical color sorters, we guarantee unmatched purity for international food processors.
          </p>

          {/* Interactive 4-Stage Navigation Switcher */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 bg-[#F7F1E7] p-1.5 rounded-2xl border border-[#5A3218]/15 shadow-sm">
            {STAGES.map((stg) => (
              <button
                key={stg.id}
                onClick={() => setActiveStage(stg.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeStage === stg.id
                    ? "bg-[#5A3218] text-[#FFFDF8] font-bold shadow"
                    : "text-[#2E2117]/70 hover:text-[#5A3218] hover:bg-[#5A3218]/5"
                }`}
              >
                <span className="opacity-60 text-[10px]">{stg.num}.</span>
                <span>{stg.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* STAGE DISPLAY: INTERACTIVE 2-COLUMN SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-16">
          {/* Left: Stage Visual & Metric Card */}
          <div className="lg:col-span-7 bg-[#F7F1E7] rounded-3xl p-6 sm:p-8 border border-[#5A3218]/20 shadow-[0_20px_50px_rgba(90,50,24,0.08)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#5A3218]/15 pb-3 mb-4">
                <span className="text-[10px] font-mono tracking-widest text-[#7A4824] uppercase font-bold">
                  STAGE {currentStageData.num} // WORKFLOW SPEC
                </span>
                <span className="text-xs font-mono font-bold text-[#5A3218]">
                  BALAJI SORTEX UNIT
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#2E2117] font-medium mb-2">
                {currentStageData.headline}
              </h3>
            </div>

            {/* Stage Image */}
            <div className="relative w-full h-64 sm:h-72 my-4 rounded-2xl overflow-hidden border border-[#5A3218]/15 bg-[#FFFDF8] group">
              <Image
                src={currentStageData.image}
                alt={currentStageData.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5A3218]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#FFFDF8]">
                <span className="font-serif text-lg font-medium">{currentStageData.name}</span>
                <span className="text-[10px] font-mono bg-black/40 px-2.5 py-1 rounded border border-white/20">
                  {currentStageData.metricLabel}: <span className="font-bold text-[#D5B58C]">{currentStageData.metric}</span>
                </span>
              </div>
            </div>

            <p className="text-sm font-sans text-[#2E2117]/85 leading-relaxed font-light">
              {currentStageData.description}
            </p>
          </div>

          {/* Right: Interactive Grade Quality Inspector */}
          <div className="lg:col-span-5 bg-[#5A3218] text-[#FFFDF8] rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(90,50,24,0.25)] flex flex-col justify-between border border-[#D5B58C]/25 relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#D5B58C]/20 pb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D5B58C] uppercase font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#D5B58C]" />
                  <span>EXPORT GRADE CALIBRATION</span>
                </div>
                <span className="text-[10px] font-mono text-[#D5B58C]/70">SPECIFICATION</span>
              </div>

              <h4 className="font-serif text-2xl text-[#FFFDF8] font-normal">
                Double-Sortex Grades
              </h4>
              <p className="text-xs font-sans text-[#FFFDF8]/75 leading-relaxed font-light">
                Select a certified grade to view calibrated count-per-ounce tolerances and purity levels:
              </p>

              {/* Grade Buttons */}
              <div className="space-y-2 pt-1">
                {GRADES.map((grd, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedGrade(i)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                      selectedGrade === i
                        ? "bg-[#7A4824] border-[#D5B58C] shadow-md"
                        : "bg-black/20 border-[#D5B58C]/20 hover:bg-black/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-base font-medium text-[#FFFDF8]">{grd.name}</span>
                      <span className="text-[11px] font-mono text-[#D5B58C] font-bold">{grd.count}</span>
                    </div>
                    <div className="text-[11px] font-mono text-[#FFFDF8]/70 mt-1 flex items-center gap-3">
                      <span>{grd.purity}</span>
                      <span>•</span>
                      <span>{grd.aflatoxin}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Grade Detail Card */}
            <div className="mt-6 pt-4 border-t border-[#D5B58C]/20 bg-black/25 p-4 rounded-2xl border border-[#D5B58C]/20">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#D5B58C] mb-1">
                RECOMMENDED COMMODITY APPLICATION:
              </div>
              <div className="text-xs font-sans text-[#FFFDF8] leading-relaxed">
                {GRADES[selectedGrade].usage}
              </div>
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#D5B58C]">
                <span>MOISTURE CEILING: {GRADES[selectedGrade].moisture}</span>
                <Link href="/products" className="inline-flex items-center gap-1 text-[#FFFDF8] hover:underline font-bold">
                  <span>SPECS &amp; INQUIRY</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
