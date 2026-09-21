"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Package, ShieldCheck } from "lucide-react";

interface PackagingTier {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  specs: { label: string; value: string }[];
  image: string;
}

const PACKAGING_TIERS: PackagingTier[] = [
  {
    id: "jute",
    tag: "EXPORT STANDARD // 01",
    title: "AUTHENTIC TWILL JUTE SACKS",
    subtitle: "King Brand & Samman Singdana",
    description: "Packed in breathable, food-grade biodegradable twill jute sacks (25kg / 50kg). The aerated cross-weave naturally prevents internal sweat condensation during long-distance maritime ocean voyages.",
    specs: [
      { label: "Weights", value: "25 kg / 50 kg Net" },
      { label: "Seam", value: "Triple Lock-Stitched" },
      { label: "Branding", value: "King Brand / Samman" },
      { label: "Aeration", value: "Anti-Sweat Weave" },
    ],
    image: "/images/packaging/authentic-jute-sacks.webp",
  },
  {
    id: "vacuum",
    tag: "HERMETIC BARRIER // 02",
    title: "MULTI-LAYER VACUUM CARTONS",
    subtitle: "Nitrogen-Flushed Extended Freshness",
    description: "Co-extruded 5-layer EVOH barrier polymer pouches with nitrogen flushing (< 0.5% residual oxygen). Completely protects against ambient humidity, mold, and lipid oxidation for European and Far-East destinations.",
    specs: [
      { label: "Cartons", value: "10 kg / 25 kg Brick" },
      { label: "Residual O2", value: "< 0.5% Certified" },
      { label: "Barrier", value: "5-Layer EVOH" },
      { label: "Shelf Life", value: "24 Months Ambient" },
    ],
    image: "/images/packaging/samman-peanuts-packaging.webp",
  },
  {
    id: "container",
    tag: "INTERMODAL FCL // 03",
    title: "20FT / 40FT SEA CONTAINERS",
    subtitle: "Palletized & Desiccant Protected",
    description: "Loaded into intermodal shipping containers lined with kraft paper condensation blankets and hanging silica gel desiccants. Palletized on ISPM-15 heat-treated pallets with tamper-evident bolt seals.",
    specs: [
      { label: "20ft Payload", value: "19.0 Metric Tons" },
      { label: "40ft Payload", value: "27.5 Metric Tons" },
      { label: "Desiccants", value: "Silica Gel Blankets" },
      { label: "Port Dispatch", value: "Mundra Port (INMUN1)" },
    ],
    image: "/images/container-loading-dock.jpg",
  },
];

export default function PackagingSequenceSection() {
  const [activeTierId, setActiveTierId] = useState<string>("jute");
  const activeTier = PACKAGING_TIERS.find((t) => t.id === activeTierId) || PACKAGING_TIERS[0];

  return (
    <section
      id="packaging"
      className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#FAF7F1] text-[#26180E] border-t border-[#623719]/10"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 text-left">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#8A5834] uppercase block">
            EXPORT PACKAGING
          </span>

          <h2 className="font-serif text-[38px] sm:text-[50px] lg:text-[60px] font-normal leading-[1.08] tracking-tight text-[#26180E]">
            ENGINEERED FOR
            <br />
            GLOBAL MARITIME TRANSIT.
          </h2>

          <p className="text-base sm:text-lg font-sans text-[#26180E]/80 leading-relaxed font-normal pt-1 max-w-2xl">
            From breathable natural twill burlap to nitrogen vacuum barrier cartons, our export packaging ensures peak organoleptic freshness upon arrival.
          </p>
        </div>

        {/* 19 — Packaging Hero Element: 3-Tier Packaging Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PACKAGING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className="rounded-3xl bg-[#F3EBDD]/40 border border-[#623719]/10 overflow-hidden flex flex-col justify-between p-6 sm:p-8 space-y-6 shadow-xs hover:bg-[#F3EBDD]/70 transition-all"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-sans font-semibold tracking-wider text-[#8A5834] uppercase block">
                  {tier.tag}
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#623719]">
                  {tier.title}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-[#26180E]/75 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              {/* Photo */}
              <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-[#26180E]/5 border border-[#623719]/10">
                <Image
                  src={tier.image}
                  alt={tier.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#623719]/10 text-xs font-sans">
                {tier.specs.map((sp, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-[#FAF7F1] border border-[#623719]/5">
                    <span className="text-[10px] text-[#8A5834] uppercase block font-medium">{sp.label}</span>
                    <span className="font-semibold text-[#26180E] mt-0.5 block">{sp.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
