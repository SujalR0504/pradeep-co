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
      className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#FCFAF5] text-[#2D241D] border-t border-[#5C341B]/10"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16">
        {/* Top Split Layout: Large Image (Left) + Company Story (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Large High-Quality Field / Peanut Visual */}
          <div className="lg:col-span-6 w-full flex items-center justify-center">
            <div
              ref={imageWrapperRef}
              className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] rounded-3xl bg-[#F5EFE5] border border-[#5C341B]/12 overflow-hidden shadow-xs group"
            >
              {/* High-quality peanut field photography */}
              <Image
                src="/images/hero-field.webp"
                alt="Peanut crop fields in Madhya Pradesh, India"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />

              {/* Inset badge card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#FCFAF5]/95 backdrop-blur-md border border-[#5C341B]/12 flex items-center justify-between shadow-md">
                <div>
                  <span className="text-[10px] font-sans font-bold tracking-[0.16em] text-[#A4774C] uppercase block">
                    CULTIVATION BELTS
                  </span>
                  <p className="text-xs font-serif font-semibold text-[#5C341B]">
                    Bhonti, Shivpuri (M.P.) &amp; Saurashtra Belts
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs font-bold text-[#5C341B]">
                    65+ YEARS
                  </span>
                  <span className="text-[9px] font-sans text-[#2D241D]/60 block uppercase">
                    HERITAGE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Company Introduction & Story */}
          <div ref={textContentRef} className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#A4774C] uppercase block">
                PRADEEP TRADING COMPANY
              </span>

              <h2 className="font-serif text-[38px] sm:text-[48px] lg:text-[56px] font-normal leading-[1.06] tracking-tight text-[#5C341B]">
                FROM THE HEART OF INDIA,
                <br />
                TO THE WORLD.
              </h2>
            </div>

            <p className="text-base sm:text-lg font-sans text-[#2D241D]/85 leading-relaxed font-normal">
              Pradeep Trading Company is an established processor and global exporter of premium benchmark groundnuts and peanuts, rooted in Bhonti, District Shivpuri (Madhya Pradesh). Combining 65+ years of generational farming relationships across Central India with advanced 4 MT/hour double-sortex electronic processing lines, we supply certified, calibrated peanuts to international snack manufacturers, confectionery brands, and food importers across 35+ countries.
            </p>

            {/* Processing & Export Benchmarks Summary Box */}
            <div className="p-5 rounded-2xl bg-[#F5EFE5]/80 border border-[#5C341B]/12 space-y-3">
              <span className="text-[11px] font-sans font-bold tracking-wider text-[#A4774C] uppercase block">
                PROCESSING &amp; EXPORT BENCHMARKS
              </span>

              <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                <div className="space-y-0.5">
                  <span className="text-[#2D241D]/60 block">Farming Lineage:</span>
                  <span className="font-bold text-[#5C341B] text-sm">{COMPANY_INFO.heritage.yearsOfExpertise}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[#2D241D]/60 block">Sortex Capacity:</span>
                  <span className="font-bold text-[#5C341B] text-sm">{COMPANY_INFO.heritage.processingCapacity}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[#2D241D]/60 block">Annual Volume:</span>
                  <span className="font-bold text-[#5C341B] text-sm">{COMPANY_INFO.heritage.annualVolume}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[#2D241D]/60 block">Maritime Gateways:</span>
                  <span className="font-bold text-[#5C341B] text-sm">Mundra Port &amp; Nhava Sheva</span>
                </div>
              </div>
            </div>

            <div>
              <Link
                href="#products"
                className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#5C341B] hover:text-[#A4774C] transition-colors"
              >
                <span>EXPLORE PRODUCTS &amp; SPECIFICATIONS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Pillars Visual Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-7 rounded-3xl bg-[#F5EFE5]/50 border border-[#5C341B]/12 shadow-xs space-y-3 hover:bg-[#F5EFE5]/90 transition-all">
            <span className="text-xs font-sans font-bold text-[#A4774C] uppercase block">01 // ORIGIN SOURCING</span>
            <h3 className="font-serif text-2xl text-[#5C341B]">Direct Farm Gate Belts</h3>
            <p className="text-xs sm:text-sm font-sans text-[#2D241D]/75 leading-relaxed">
              Procured directly at peak physiological maturity from certified farming networks across Madhya Pradesh and Gujarat, ensuring complete harvest traceability.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#F5EFE5]/50 border border-[#5C341B]/12 shadow-xs space-y-3 hover:bg-[#F5EFE5]/90 transition-all">
            <span className="text-xs font-sans font-bold text-[#A4774C] uppercase block">02 // PROCESSING</span>
            <h3 className="font-serif text-2xl text-[#5C341B]">Double-Sortex Optical Purity</h3>
            <p className="text-xs sm:text-sm font-sans text-[#2D241D]/75 leading-relaxed">
              Multi-spectral bichromatic optical CCD cameras scan every seed in free fall, guaranteeing &gt;99.5% purity and minimal broken kernel percentages.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#F5EFE5]/50 border border-[#5C341B]/12 shadow-xs space-y-3 hover:bg-[#F5EFE5]/90 transition-all">
            <span className="text-xs font-sans font-bold text-[#A4774C] uppercase block">03 // CERTIFICATION</span>
            <h3 className="font-serif text-2xl text-[#5C341B]">EU Aflatoxin Compliance</h3>
            <p className="text-xs sm:text-sm font-sans text-[#2D241D]/75 leading-relaxed">
              Every shipment is backed by lot-specific laboratory analysis certificates, guaranteeing aflatoxins below 4 ppb and controlled moisture below 7.5%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
