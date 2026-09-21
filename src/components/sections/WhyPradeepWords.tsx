"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface PillarItem {
  num: string;
  word: string;
  subtitle: string;
  desc: string;
  image: string;
}

const PILLARS: PillarItem[] = [
  {
    num: "01",
    word: "QUALITY",
    subtitle: "Double Sortex Benchmark",
    desc: "Rigorous moisture calibration (max 7-8%), zero tolerance for foreign matter, and certified aflatoxin limits below 4.0 PPB.",
    image: "/images/split-kernel-macro.jpg",
  },
  {
    num: "02",
    word: "SOURCE",
    subtitle: "Central Indian Agriculture",
    desc: "Direct farm sourcing in Shivpuri and surrounding fertile mandis, ensuring transparent origin traceability.",
    image: "/images/harvest-field-tractor.jpg",
  },
  {
    num: "03",
    word: "PROCESS",
    subtitle: "Optical & Sieve Grading",
    desc: "High-frequency multi-spectral sorting machines analyzing 12,000 grains/sec to remove microscopic defects.",
    image: "/images/sortex-machine.webp",
  },
  {
    num: "04",
    word: "PRECISION",
    subtitle: "Strict Count Uniformity",
    desc: "Sieve calibration screens sorting Bold 38/42, 40/50 and Java 50/60 with dependable count-per-ounce accuracy.",
    image: "/images/quality-lab.webp",
  },
  {
    num: "05",
    word: "RELIABILITY",
    subtitle: "Dependable Contract Execution",
    desc: "Transparent shipping schedules, prompt container dispatch from Mundra, and verified phytosanitary documentation.",
    image: "/images/container-loading-dock.jpg",
  },
  {
    num: "06",
    word: "PARTNERSHIP",
    subtitle: "Multi-Season Buyer Alliances",
    desc: "Long-term relationships with global food manufacturers, snack roasters, and commodity trading houses.",
    image: "/images/cargo-ship-ocean.jpg",
  },
];

export default function WhyPradeepWords() {
  const [activeIdx, setActiveIdx] = useState(0);

  const activePillar = PILLARS[activeIdx] || PILLARS[0];

  return (
    <section
      id="why-pradeep-trading"
      className="relative w-full py-28 lg:py-36 bg-[#F4EBDD] text-[#2E2117] overflow-hidden border-t border-[rgba(112,66,31,0.18)]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#70421F] font-semibold block">
            Why Pradeep Trading Company
          </span>
          <h2 className="font-serif font-normal text-3xl sm:text-5xl text-[#2E2117]">
            OUR CORE FOUNDATION
          </h2>
          <p className="text-sm sm:text-base text-[#2E2117]/75 font-sans font-light leading-relaxed">
            International agricultural trade demands dependable sourcing, rigorous quality controls, and transparent execution.
          </p>
        </div>

        {/* EDITORIAL LIST + REVEALING SUPPORTING IMAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: LARGE EDITORIAL LIST (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-1">
            {PILLARS.map((p, idx) => {
              const isSelected = activeIdx === idx;

              return (
                <div
                  key={p.num}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`group py-4 sm:py-5 border-b border-[rgba(112,66,31,0.18)] transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isSelected ? "opacity-100 pl-3" : "opacity-45 hover:opacity-80"
                  }`}
                >
                  <div className="flex items-center gap-6 sm:gap-8">
                    <span className="font-serif text-lg sm:text-xl text-[#70421F]/70">
                      {p.num}
                    </span>
                    <h3
                      className={`font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight transition-colors duration-200 ${
                        isSelected ? "text-[#70421F]" : "text-[#2E2117]"
                      }`}
                    >
                      {p.word}
                    </h3>
                  </div>

                  <span className="text-xs font-mono text-[#70421F] hidden sm:block">
                    {p.subtitle}
                  </span>
                </div>
              );
            })}
          </div>

          {/* RIGHT: DYNAMIC SUPPORTING IMAGE ON HOVER (Cols 8-12) */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border border-[rgba(112,66,31,0.18)] shadow-[0_12px_35px_rgba(112,66,31,0.06)] space-y-4">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#FBF8F2]">
                <Image
                  key={activePillar.image}
                  src={activePillar.image}
                  alt={activePillar.word}
                  fill
                  sizes="400px"
                  className="object-cover transition-opacity duration-300"
                />
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-mono text-[#70421F] uppercase tracking-wider block">
                  Pillar {activePillar.num} {"//"} {activePillar.subtitle}
                </span>
                <h4 className="font-serif text-2xl text-[#2E2117] font-medium">
                  {activePillar.word}
                </h4>
                <p className="text-xs sm:text-sm text-[#2E2117]/75 font-sans font-light leading-relaxed">
                  {activePillar.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
