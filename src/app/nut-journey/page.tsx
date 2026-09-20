"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, CheckCircle2, ShieldCheck, ArrowUpRight, Compass, Sparkles } from "lucide-react";
import ContactCtaSection from "@/components/sections/ContactCtaSection";

interface JourneyStep {
  step: string;
  stage: string;
  headline: string;
  tagline: string;
  description: string;
  metrics: { label: string; val: string }[];
  image: string;
  alt: string;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: "01",
    stage: "FARM & CULTIVATION",
    headline: "Selected Non-GMO Seeds in Fertile Soil",
    tagline: "Shivpuri & Saurashtra Agricultural Belts",
    description:
      "The lifecycle begins in rich, well-drained sandy loam soil under optimal sunlight. High-germination Bold and Java seed varieties are planted with natural nitrogen-fixing crop rotation.",
    metrics: [
      { label: "SOIL TYPE", val: "Well-aerated Sandy Loam" },
      { label: "GROWING SEASON", val: "120 – 140 Days" },
      { label: "WATERING", val: "Rain-fed Monsoon Cycle" },
    ],
    image: "/images/hero-field.webp",
    alt: "Peanut Cultivation Farm",
  },
  {
    step: "02",
    stage: "PHYSIOLOGICAL HARVEST",
    headline: "Sun-Dried Inflow at Peak Ripeness",
    tagline: "Farmgate Hand-Uprooting & Inversion",
    description:
      "When pods reach optimal maturity, mechanical and manual uprooting gently lifts the plants. Vines are field-cured under natural solar warmth to bring pod moisture from 40% down to 10% naturally.",
    metrics: [
      { label: "HARVEST WINDOW", val: "October – December" },
      { label: "PRE-CURE MOISTURE", val: "< 10.0% Target" },
      { label: "FARM NETWORK", val: "10,000+ Grower Acreage" },
    ],
    image: "/images/harvest-farmer.webp",
    alt: "Peanut Harvest by Farmers",
  },
  {
    step: "03",
    stage: "PRE-CLEANING & DE-STONING",
    headline: "Dual-Aspiration Density Separation",
    tagline: "Automated Foreign Particle Extraction",
    description:
      "Pods arrive at our Bhonti processing terminal where high-velocity air aspiration removes dust, pod stems, and hollow shells, while vibratory gravity tables extract field stones.",
    metrics: [
      { label: "PURITY EFFICIENCY", val: "99.8% Removal" },
      { label: "FEED RATE", val: "4 Metric Tons / Hour" },
      { label: "MAGNETIC TRAPS", val: "Ferrous-Free Guarantee" },
    ],
    image: "/images/peanut-heap-warehouse.jpg",
    alt: "Pre-Cleaned Peanut Warehouse Heap",
  },
  {
    step: "04",
    stage: "DECORTICATING & SHELLING",
    headline: "Gentle Pericarp Hulling Without Kernel Rupture",
    tagline: "Preserving Whole Kernel Integrity",
    description:
      "Precision rubber-roller hullers gently crack open the fibrous shells without scoring or bruising the fragile internal red testa skin, ensuring oleic oil pockets remain unruptured.",
    metrics: [
      { label: "SPLIT PREVENTION", val: "< 0.8% Split Rate" },
      { label: "SHELL BYPRODUCT", val: "100% Eco-Briquettes" },
      { label: "TEMPERATURE", val: "Ambient Cold Hulling" },
    ],
    image: "/images/new-uploaded-image.png",
    alt: "Decorticated Peanut Pod and Kernels",
  },
  {
    step: "05",
    stage: "OPTICAL DOUBLE-SORTEX SORTING",
    headline: "20,000 Frames/Sec Bichromatic Inspection",
    tagline: "Micro-Ejection of Every Defective Grain",
    description:
      "Kernels free-fall through multi-channel optical CCD sensors. Discolored, insect-damaged, or undersized grains are blasted out with precision pneumatic air pulses in milliseconds.",
    metrics: [
      { label: "CCD RESOLUTION", val: "Multi-Spectral Optical" },
      { label: "COLOR ACCURACY", val: "99.95% Consistency" },
      { label: "BROKEN ALLOWANCE", val: "< 0.5% Maximum" },
    ],
    image: "/images/sortex-machine.webp",
    alt: "High Speed Optical CCD Sortex Machine",
  },
  {
    step: "06",
    stage: "SIZE CALIBRATION & GRADING",
    headline: "Strict Count-Per-Ounce Mechanical Sieving",
    tagline: "Uniform Sizing Across Consignments",
    description:
      "Perforated precision screens divide intact kernels into calibrated commercial caliber sizes: Bold 38/42, 40/50, 50/60 and Java 50/60, 60/70, 70/80 with tight count tolerances.",
    metrics: [
      { label: "COUNT ACCURACY", val: "± 1 Kernel / Ounce" },
      { label: "CALIBER GRADES", val: "6 Export Standards" },
      { label: "ROASTING UNIFORMITY", val: "100% Thermal Match" },
    ],
    image: "/images/split-cotyledon-cutout.png",
    alt: "Calibrated Groundnut Kernels",
  },
  {
    step: "07",
    stage: "HERMETIC PACKAGING",
    headline: "Hydrocarbon-Free Jute & Vacuum Nitrogen Barrier",
    tagline: "Maritime Humidity Shielding",
    description:
      "Packaged in fresh 25kg/50kg breathable food-grade jute bags or multi-layer EVOH nitrogen vacuum packs (<0.5% O2) to protect nutritional oleic lipids during sea voyages.",
    metrics: [
      { label: "MOISTURE CEILING", val: "< 7.5% Guaranteed" },
      { label: "VACUUM BARRIER", val: "5-Layer Nylon / EVOH" },
      { label: "STITCHING", val: "Triple-Lock Security" },
    ],
    image: "/images/packaging/authentic-jute-sacks.webp",
    alt: "Authentic Export Jute Sacks",
  },
  {
    step: "08",
    stage: "CONTAINER STUFFING & GLOBAL EXPORT",
    headline: "19.00 MT Intermodal Dispatch via Mundra",
    tagline: "Desiccant Protected Sea Freight to 35+ Nations",
    description:
      "Container floors are lined with heavy kraft paper, ceiling rafter desiccant bags are installed, and ISPM-15 heat-treated pallets are loaded for seamless delivery to international ports.",
    metrics: [
      { label: "FCL PAYLOAD", val: "19.00 MT in 20ft FCL" },
      { label: "EXPORT PORTS", val: "Mundra & Nhava Sheva" },
      { label: "SEAL LOCK", val: "ISO 17712 High-Security" },
    ],
    image: "/images/cargo-ship-ocean.jpg",
    alt: "Container Cargo Ship on Global Ocean Route",
  },
];

export default function NutJourneyPage() {
  return (
    <div className="flex flex-col w-full bg-[#FFFDF8] text-[#2E2117] pt-24">
      {/* Editorial Header */}
      <section className="relative w-full py-16 sm:py-24 border-b border-[#5A3218]/15 bg-[#F7F1E7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5A3218]/10 border border-[#5A3218]/20 text-xs font-mono tracking-widest text-[#5A3218] uppercase">
              <Compass className="w-3.5 h-3.5 text-[#5A3218]" />
              <span>THE NUT JOURNEY • SOIL TO GLOBAL PORT</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.02] text-[#2E2117]">
              From Indian Soil
              <span className="block italic font-light text-[#5A3218]">
                To Global Destination.
              </span>
            </h1>

            <p className="text-base sm:text-lg font-sans text-[#2E2117]/80 font-light leading-relaxed">
              Trace the continuous 8-stage journey of Balaji Exports groundnuts. From farmgate planting in Madhya Pradesh
              to high-speed optical sorting, hermetic barrier packaging, and container vessel departure at Mundra Port.
            </p>
          </div>
        </div>
      </section>

      {/* 8-Stage Continuous Visual Journey */}
      <section className="py-20 lg:py-28 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-24 lg:space-y-32">
            {JOURNEY_STEPS.map((step, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Frame (6 cols) */}
                <div className={`lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#5A3218]/20 bg-[#F7F1E7] group ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5A3218]/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#5A3218] text-[#FFFDF8] px-3.5 py-1 rounded-full font-mono text-xs font-bold shadow">
                    STEP {step.step}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-[#FFFDF8]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D5B58C] block">
                      {step.stage}
                    </span>
                    <span className="font-serif text-xl font-medium">{step.headline}</span>
                  </div>
                </div>

                {/* Narrative Details (6 cols) */}
                <div className={`lg:col-span-6 space-y-5 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#7A4824] uppercase tracking-wider font-bold">
                    <span>STAGE {step.step} // 08</span>
                    <span>•</span>
                    <span>{step.tagline}</span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl text-[#2E2117] font-medium leading-tight">
                    {step.headline}
                  </h2>

                  <p className="text-sm sm:text-base font-sans text-[#2E2117]/80 leading-relaxed font-light">
                    {step.description}
                  </p>

                  {/* 3 Metric Pills */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                    {step.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-3 bg-[#F7F1E7] rounded-xl border border-[#5A3218]/15">
                        <div className="text-[9px] font-mono text-[#7A4824] uppercase">{m.label}</div>
                        <div className="text-xs font-mono font-bold text-[#5A3218] mt-0.5">{m.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universal Reusable Contact CTA */}
      <ContactCtaSection
        title="COMMENCE YOUR CONTRACT WITH BALAJI EXPORTS"
        subtitle="Reserve guaranteed harvest volumes, customized packaging, and direct Mundra Port container loading."
      />
    </div>
  );
}
