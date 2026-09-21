"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Factory, Award } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function CompanyIntroSection() {
  return (
    <section
      id="about"
      className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#FAF7F1] text-[#26180E] border-t border-[#623719]/10"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16">
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#8A5834] uppercase block">
              COMPANY INTRODUCTION
            </span>

            <h2 className="font-serif text-[38px] sm:text-[50px] lg:text-[58px] font-normal leading-[1.08] tracking-tight text-[#26180E]">
              65+ YEARS OF HERITAGE
              <br />
              IN INDIA&apos;S PEANUT HEARTLAND.
            </h2>

            <p className="text-base sm:text-lg font-sans text-[#26180E]/80 leading-relaxed font-normal pt-2">
              Pradeep Trading Company is an established processor and exporter of benchmark groundnuts and peanuts, rooted in Bhonti, District Shivpuri (Madhya Pradesh). By pairing deep generational relationships with farming communities across Central India with advanced double-sortex processing lines, we deliver consistent commodity shipments to international snack manufacturers, confectionery brands, and importers across 35+ countries.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6 pt-2">
            <div className="p-6 rounded-2xl bg-[#F3EBDD]/50 border border-[#623719]/10 space-y-4">
              <span className="text-xs font-sans font-semibold tracking-wider text-[#8A5834] uppercase block">
                PROCESSING &amp; EXPORT BENCHMARKS
              </span>

              <div className="space-y-3.5 text-sm font-sans">
                <div className="flex items-center justify-between pb-3 border-b border-[#623719]/10">
                  <span className="text-[#26180E]/70">Farming Lineage:</span>
                  <span className="font-bold text-[#623719]">{COMPANY_INFO.heritage.yearsOfExpertise}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#623719]/10">
                  <span className="text-[#26180E]/70">Sortex Processing:</span>
                  <span className="font-bold text-[#623719]">{COMPANY_INFO.heritage.processingCapacity}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#623719]/10">
                  <span className="text-[#26180E]/70">Annual Volume:</span>
                  <span className="font-bold text-[#623719]">{COMPANY_INFO.heritage.annualVolume}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#26180E]/70">Export Gateways:</span>
                  <span className="font-bold text-[#623719]">Mundra &amp; Nhava Sheva Ports</span>
                </div>
              </div>
            </div>

            <Link
              href="#products"
              className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#623719] hover:text-[#8A5834] transition-colors"
            >
              <span>EXPLORE PRODUCTS &amp; SPECIFICATIONS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3 Pillars Visual Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-7 rounded-3xl bg-[#FAF7F1] border border-[#623719]/15 shadow-xs space-y-3">
            <span className="text-xs font-sans font-bold text-[#8A5834] uppercase block">01 // ORIGIN SOURCING</span>
            <h3 className="font-serif text-2xl text-[#623719]">Direct Farm Gate Belts</h3>
            <p className="text-xs sm:text-sm font-sans text-[#26180E]/75 leading-relaxed">
              Procured directly at peak physiological maturity from certified farming clusters across Madhya Pradesh and Gujarat, ensuring complete harvest traceability.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#FAF7F1] border border-[#623719]/15 shadow-xs space-y-3">
            <span className="text-xs font-sans font-bold text-[#8A5834] uppercase block">02 // PROCESSING</span>
            <h3 className="font-serif text-2xl text-[#623719]">Double-Sortex Optical Purity</h3>
            <p className="text-xs sm:text-sm font-sans text-[#26180E]/75 leading-relaxed">
              Multi-spectral bichromatic CCD optical cameras scan every seed in free fall, guaranteeing &gt;99.5% purity and negligible broken seed percentages.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#FAF7F1] border border-[#623719]/15 shadow-xs space-y-3">
            <span className="text-xs font-sans font-bold text-[#8A5834] uppercase block">03 // CERTIFICATION</span>
            <h3 className="font-serif text-2xl text-[#623719]">EU Aflatoxin Compliance</h3>
            <p className="text-xs sm:text-sm font-sans text-[#26180E]/75 leading-relaxed">
              Every shipment is backed by lot-specific laboratory analysis certificates, guaranteeing aflatoxins below 4 ppb and controlled moisture below 7.5%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
