"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Award } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CompanyIntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Image entrance reveal
      if (imageWrapperRef.current) {
        gsap.fromTo(
          imageWrapperRef.current,
          {
            opacity: 0,
            scale: 0.96,
            clipPath: "inset(8% 8% 8% 8% round 24px)",
          },
          {
            opacity: 1,
            scale: 1,
            clipPath: "inset(0% 0% 0% 0% round 24px)",
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 72%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Smooth text reveal
      if (textContentRef.current) {
        gsap.fromTo(
          textContentRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#FFFDF9] text-[#26180E] border-t border-[#5A3218]/10"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16">
        {/* Top Split Layout: 45-55% Macro Peanut Visual + Company Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Large Macro Peanut Visual (~45-50% Viewport) */}
          <div className="lg:col-span-6 w-full flex items-center justify-center">
            <div
              ref={imageWrapperRef}
              className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] rounded-3xl bg-[#F6F1E8] border border-[#5A3218]/12 p-8 sm:p-12 flex items-center justify-center shadow-xs overflow-hidden group"
            >
              {/* Subtle ambient radial glow */}
              <div className="absolute inset-0 bg-radial from-[#A16B3C]/10 via-transparent to-transparent pointer-events-none" />

              {/* Central Macro Calibrated Peanut Kernel */}
              <div className="relative w-full h-full max-w-[420px] max-h-[380px] flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105">
                <Image
                  src="/images/single-kernel-cutout.png"
                  alt="Premium calibrated Indian peanut kernel macro photograph"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain filter drop-shadow-xl"
                  priority
                />
              </div>

              {/* Origin Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FFFDF9]/90 backdrop-blur-xs border border-[#5A3218]/10 text-[10px] font-sans font-bold tracking-wider text-[#A16B3C] uppercase">
                BHONTI, SHIVPURI (M.P.) • CENTRAL INDIA
              </div>

              <div className="absolute bottom-4 right-4 text-[10px] font-mono text-[#5A3218]/60 uppercase tracking-widest hidden sm:block">
                65+ YEARS AGRONOMY
              </div>
            </div>
          </div>

          {/* Right: Company Introduction & Core Statement */}
          <div ref={textContentRef} className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#A16B3C] uppercase block">
                COMPANY INTRODUCTION // 02
              </span>

              <h2 className="font-serif text-[38px] sm:text-[48px] lg:text-[56px] font-normal leading-[1.06] tracking-tight text-[#5A3218]">
                PEANUTS FROM INDIA.
                <br />
                QUALITY FOR THE WORLD.
              </h2>
            </div>

            <p className="text-base sm:text-lg font-sans text-[#26180E]/80 leading-relaxed font-normal">
              Pradeep Trading Company is an established processor and exporter of benchmark groundnuts, rooted in Bhonti, District Shivpuri (Madhya Pradesh). By pairing 65+ years of generational farming relationships across Central India with advanced double-sortex processing lines, we deliver consistent commodity shipments to international snack manufacturers, confectionery brands, and importers across 35+ countries.
            </p>

            {/* Processing & Export Benchmarks Summary Box */}
            <div className="p-5 rounded-2xl bg-[#F6F1E8]/70 border border-[#5A3218]/10 space-y-3">
              <span className="text-[11px] font-sans font-bold tracking-wider text-[#A16B3C] uppercase block">
                PROCESSING &amp; EXPORT BENCHMARKS
              </span>

              <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                <div className="space-y-0.5">
                  <span className="text-[#26180E]/60 block">Farming Lineage:</span>
                  <span className="font-bold text-[#5A3218] text-sm">{COMPANY_INFO.heritage.yearsOfExpertise}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[#26180E]/60 block">Sortex Capacity:</span>
                  <span className="font-bold text-[#5A3218] text-sm">{COMPANY_INFO.heritage.processingCapacity}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[#26180E]/60 block">Annual Volume:</span>
                  <span className="font-bold text-[#5A3218] text-sm">{COMPANY_INFO.heritage.annualVolume}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[#26180E]/60 block">Maritime Gateways:</span>
                  <span className="font-bold text-[#5A3218] text-sm">Mundra &amp; Nhava Sheva</span>
                </div>
              </div>
            </div>

            <div>
              <Link
                href="#products"
                className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#5A3218] hover:text-[#A16B3C] transition-colors"
              >
                <span>EXPLORE PRODUCTS &amp; SPECIFICATIONS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Pillars Visual Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-7 rounded-3xl bg-[#F6F1E8]/40 border border-[#5A3218]/12 shadow-xs space-y-3 hover:bg-[#F6F1E8]/70 transition-all">
            <span className="text-xs font-sans font-bold text-[#A16B3C] uppercase block">01 // ORIGIN SOURCING</span>
            <h3 className="font-serif text-2xl text-[#5A3218]">Direct Farm Gate Belts</h3>
            <p className="text-xs sm:text-sm font-sans text-[#26180E]/75 leading-relaxed">
              Procured directly at peak physiological maturity from certified farming clusters across Madhya Pradesh and Gujarat, ensuring complete harvest traceability.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#F6F1E8]/40 border border-[#5A3218]/12 shadow-xs space-y-3 hover:bg-[#F6F1E8]/70 transition-all">
            <span className="text-xs font-sans font-bold text-[#A16B3C] uppercase block">02 // PROCESSING</span>
            <h3 className="font-serif text-2xl text-[#5A3218]">Double-Sortex Optical Purity</h3>
            <p className="text-xs sm:text-sm font-sans text-[#26180E]/75 leading-relaxed">
              Multi-spectral bichromatic CCD optical cameras scan every seed in free fall, guaranteeing &gt;99.5% purity and negligible broken seed percentages.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#F6F1E8]/40 border border-[#5A3218]/12 shadow-xs space-y-3 hover:bg-[#F6F1E8]/70 transition-all">
            <span className="text-xs font-sans font-bold text-[#A16B3C] uppercase block">03 // CERTIFICATION</span>
            <h3 className="font-serif text-2xl text-[#5A3218]">EU Aflatoxin Compliance</h3>
            <p className="text-xs sm:text-sm font-sans text-[#26180E]/75 leading-relaxed">
              Every shipment is backed by lot-specific laboratory analysis certificates, guaranteeing aflatoxins below 4 ppb and controlled moisture below 7.5%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
