"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ShieldCheck, Globe, Award, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Scene01SeedBirth() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const floatingPodRef = useRef<HTMLDivElement>(null);
  const floatingKernelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Hero Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        leftColRef.current?.children || [],
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 1.0, delay: 0.2 }
      );

      tl.fromTo(
        rightColRef.current,
        { opacity: 0, scale: 0.94 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" },
        "-=0.8"
      );

      // Gentle floating animation on the foreground peanut pod
      if (floatingPodRef.current) {
        gsap.to(floatingPodRef.current, {
          y: -14,
          rotation: 3,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (floatingKernelRef.current) {
        gsap.to(floatingKernelRef.current, {
          y: 12,
          rotation: -4,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.5,
        });
      }
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero-genesis"
      ref={containerRef}
      className="relative w-full min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#FFFDF8] text-[#2E2117] flex items-center overflow-hidden border-b border-[#5A3218]/10"
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#5A3218_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(213,181,140,0.18)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN (7 COLS): STRONG EDITORIAL HEADLINE, PROSE & CTAS */}
          <div ref={leftColRef} className="lg:col-span-7 space-y-6">
            {/* National Origin & Core Export Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5A3218]/10 border border-[#5A3218]/20 text-xs font-mono tracking-widest text-[#5A3218] uppercase">
              <Globe className="w-3.5 h-3.5 text-[#5A3218]" />
              <span>ORIGIN: INDIA • GLOBAL EXPORT BENCHMARK</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[0.98] tracking-tight text-[#2E2117]">
              INDIA.
              <span className="block text-[#5A3218]">GROUNDNUTS.</span>
              <span className="block font-light italic text-[#7A4824]">
                QUALITY EXPORT.
              </span>
            </h1>

            {/* Supporting Prose */}
            <p className="text-sm sm:text-base font-sans text-[#2E2117]/80 max-w-xl leading-relaxed font-light">
              Direct from the rich soils of Madhya Pradesh and Gujarat. Calibrated 38/42 to 70/80 counts/oz,
              double-sortex cleaned, and delivered in certified FCL containers to over 35 destinations worldwide.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#5A3218] text-[#FFFDF8] hover:bg-[#7A4824] text-xs font-mono font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowUpRight className="w-4 h-4 text-[#D5B58C]" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#FFFDF8] border border-[#5A3218]/30 text-[#5A3218] hover:bg-[#5A3218]/5 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>REQUEST EXPORT QUOTE</span>
              </Link>
            </div>

            {/* Quick Export Fact Strip */}
            <div className="pt-6 border-t border-[#5A3218]/15 grid grid-cols-3 gap-4 text-xs font-mono">
              <div>
                <div className="text-[10px] text-[#7A4824] uppercase">FARMING HERITAGE</div>
                <div className="font-bold text-[#5A3218] text-sm mt-0.5">{COMPANY_INFO.heritage.yearsOfExpertise}</div>
              </div>
              <div>
                <div className="text-[10px] text-[#7A4824] uppercase">SORTEX PROCESSING</div>
                <div className="font-bold text-[#5A3218] text-sm mt-0.5">{COMPANY_INFO.heritage.processingCapacity}</div>
              </div>
              <div>
                <div className="text-[10px] text-[#7A4824] uppercase">AFLATOXIN COMPLIANCE</div>
                <div className="font-bold text-[#5A3218] text-sm mt-0.5">&lt; 4 PPB EU SPEC</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (5 COLS): LARGE CINEMATIC GROUNDNUT VISUAL */}
          <div ref={rightColRef} className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(90,50,24,0.18)] border border-[#5A3218]/20 bg-[#F7F1E7]">
              {/* Background Farm Landscape */}
              <Image
                src="/images/hero-field.webp"
                alt="Indian Groundnut Farm Heartland"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5A3218]/85 via-transparent to-transparent" />

              {/* Foreground Floating Peanut Pod Cutout */}
              <div
                ref={floatingPodRef}
                className="absolute -bottom-6 -left-6 w-56 h-40 sm:w-64 sm:h-48 drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)] z-20"
              >
                <Image
                  src="/images/new-uploaded-image.png"
                  alt="Premium Peanut Pod Cutout"
                  fill
                  sizes="280px"
                  className="object-contain"
                />
              </div>

              {/* Foreground Split Kernel Cutout */}
              <div
                ref={floatingKernelRef}
                className="absolute top-8 right-6 w-36 h-36 sm:w-44 sm:h-44 drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)] z-20"
              >
                <Image
                  src="/images/split-cotyledon-cutout.png"
                  alt="Split Peanut Cotyledon with Embryo"
                  fill
                  sizes="200px"
                  className="object-contain"
                />
              </div>

              {/* Stamp Badge */}
              <div className="absolute bottom-6 right-6 z-20 bg-[#FFFDF8]/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#5A3218]/20 shadow-lg text-[#5A3218] max-w-[200px]">
                <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase text-[#7A4824] mb-1">
                  <Award className="w-3.5 h-3.5 text-[#5A3218]" />
                  <span>EXPORT VERIFIED</span>
                </div>
                <div className="text-xs font-serif font-bold leading-tight">
                  Double-Sortex Cleaned Bold &amp; Java Peanuts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
