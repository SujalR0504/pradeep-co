"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  image: string;
  video?: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "DIRECT ORIGIN SOURCING",
    subtitle: "Madhya Pradesh & Gujarat Belts",
    description: "Procurement directly from verified farming networks at peak physiological maturity with full lot traceability and moisture screening.",
    metric: "100% Origin Traceable",
    image: "/images/harvest-farmer.webp",
  },
  {
    step: "02",
    title: "PRE-CLEANING & DE-STONING",
    subtitle: "High-Capacity Air Aspirators",
    description: "Mechanical multi-deck screen cleaners and rotary aspirators eliminate field soil, plant stalks, and inert debris prior to shelling.",
    metric: "99.8% Initial Purity",
    image: "/images/sustainability-soil.webp",
  },
  {
    step: "03",
    title: "DOUBLE-SORTEX SELECTION",
    subtitle: "Bichromatic Optical CCD Cameras",
    description: "Multi-channel electronic sorters scan each kernel in free fall, pneumatically ejecting discolored, split, or damaged seeds at microsecond speed.",
    metric: "4 MT / Hour Sortex Line",
    image: "/images/sortex-machine.webp",
  },
  {
    step: "04",
    title: "CALIBRATED GRADING & PACKAGING",
    subtitle: "Rotary Screens & Jute Sacks",
    description: "Classified into exact count-per-ounce specifications (38/42 to 70/80) and weigh-filled into breathable King Brand and Samman jute bags.",
    metric: "25kg / 50kg Bags",
    image: "/images/packaging/authentic-jute-sacks.webp",
  },
];

export default function FactoryStorySection() {
  return (
    <section
      id="process"
      className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#FAF7F1] text-[#26180E] border-t border-[#623719]/10"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 text-left">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#8A5834] uppercase block">
            FACTORY PROCESS
          </span>

          <h2 className="font-serif text-[38px] sm:text-[50px] lg:text-[60px] font-normal leading-[1.08] tracking-tight text-[#26180E]">
            FROM RAW PEANUT
            <br />
            TO EXPORT-READY PRODUCT.
          </h2>

          <p className="text-base sm:text-lg font-sans text-[#26180E]/80 leading-relaxed font-normal pt-1 max-w-2xl">
            Inside our Bhonti processing facility in District Shivpuri (M.P.), advanced optical sorters and rotary screens process up to 4 metric tons per hour to meet stringent international standards.
          </p>
        </div>

        {/* 19 — Process Hero Element: 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="rounded-2xl bg-[#F3EBDD]/40 border border-[#623719]/10 overflow-hidden flex flex-col justify-between transition-all hover:bg-[#F3EBDD]/70 shadow-xs"
            >
              <div className="relative w-full h-48 sm:h-52 bg-[#26180E]/5">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#FAF7F1] text-[#623719] text-[10px] font-sans font-bold tracking-wider uppercase shadow-xs">
                  STEP {step.step}
                </div>
              </div>

              <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-sans font-semibold tracking-wider text-[#8A5834] uppercase block">
                    {step.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-[#623719]">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-[#26180E]/75 leading-relaxed pt-1">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#623719]/10 flex items-center justify-between text-xs font-sans font-semibold text-[#8A5834]">
                  <span>CAPACITY</span>
                  <span className="text-[#623719]">{step.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
