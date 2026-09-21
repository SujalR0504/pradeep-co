"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Factory,
  Globe2,
  CheckCircle2,
  FileCheck,
  Scale,
  ArrowRight,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

const REASONS = [
  {
    num: "01",
    icon: Factory,
    title: "Direct Farmgate Sourcing",
    subtitle: "Zero Middlemen Across Madhya Pradesh & Gujarat",
    description:
      "Deep 65-year relationships with grower cooperatives ensure harvest freshness, uniform crop varieties, and full agricultural traceability from soil to processing.",
  },
  {
    num: "02",
    icon: Scale,
    title: "4 MT / Hour Double-Sortex Lines",
    subtitle: "Bichromatic Optical CCD Purity",
    description:
      "Multi-deck mechanical aspirators and high-speed optical sorters guarantee >99.5% kernel purity, removing damaged, split, and discolored seeds at microsecond speed.",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "EU Aflatoxin & Chemical Compliance",
    subtitle: "Strict < 4 ppb Total Aflatoxin Guarantee",
    description:
      "Every batch is verified through certified independent laboratories (SGS / Geo-Chem / FARE Labs) to ensure total compliance with European, GCC, and ASEAN food safety thresholds.",
  },
  {
    num: "04",
    icon: Globe2,
    title: "Dedicated Intermodal Rail to Mundra Port",
    subtitle: "Port Code: INMUN1 & INNSA1",
    description:
      "Direct western railway freight connections from Shivpuri ensure rapid, dry container transit to Mundra and Nhava Sheva, minimizing transit lag and ocean freight demurrage.",
  },
  {
    num: "05",
    icon: FileCheck,
    title: "Transparent Pre-Shipment Inspection",
    subtitle: "Phytosanitary & Certificate of Analysis",
    description:
      "Full documentation provided with each export invoice: Certificate of Origin, Phytosanitary Certificate, Fumigation Certificate, and Weight/Quality COA.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#FAF7F1] text-[#26180E] border-t border-[#623719]/10"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#8A5834] uppercase block">
              OUR COMMITMENT // 07
            </span>
            <h2 className="font-serif text-[38px] sm:text-[50px] lg:text-[60px] font-normal leading-[1.08] tracking-tight text-[#26180E]">
              WHY GLOBAL IMPORTERS
              <br />
              CHOOSE PRADEEP TRADING.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <p className="text-sm sm:text-base font-sans text-[#26180E]/75 leading-relaxed">
              Decades of agrarian integrity, continuous capital investment in modern sorting lines, and dependable maritime delivery.
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="p-7 rounded-2xl bg-[#F3EBDD]/40 border border-[#623719]/15 flex flex-col justify-between space-y-5 hover:bg-[#F3EBDD]/70 transition-all duration-300 shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#8A5834]">
                      {item.num} // TRUST PILLAR
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#623719]/10 flex items-center justify-center text-[#623719]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl font-normal text-[#26180E]">
                      {item.title}
                    </h3>
                    <p className="text-xs font-sans font-semibold text-[#8A5834]">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm font-sans text-[#26180E]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#623719]/10 flex items-center gap-2 text-xs font-sans text-[#623719]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#623719]" />
                  <span>Contractually Verified Standard</span>
                </div>
              </div>
            );
          })}

          {/* Quick Stats Summary Card */}
          <div className="p-7 rounded-2xl bg-[#623719] text-[#FAF7F1] flex flex-col justify-between space-y-6 shadow-md">
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold text-[#F3EBDD] uppercase tracking-wider block">
                ANNUAL EXPORT CAPACITY
              </span>
              <div className="font-serif text-4xl sm:text-5xl font-normal text-[#FAF7F1]">
                35,000+ MT
              </div>
              <p className="text-xs sm:text-sm font-sans text-[#F3EBDD]/80 leading-relaxed">
                Processed, graded, and packed annually for international food manufacturers, confectionery brands, and oil mills.
              </p>
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center justify-between p-3.5 rounded-xl bg-[#FAF7F1] text-[#623719] hover:bg-[#F3EBDD] text-xs font-sans font-bold uppercase tracking-wider transition-colors"
            >
              <span>DISCUSS SHIPMENT TERMS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
