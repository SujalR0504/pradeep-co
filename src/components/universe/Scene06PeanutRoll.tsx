"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Sparkles, CheckCircle2, Award } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Scene06PeanutRoll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const secondaryImageRef = useRef<HTMLDivElement>(null);
  const isolatedPeanutRef = useRef<HTMLDivElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const decorativeLineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax & Scroll-based Reveals on Chapter 6
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 25%",
          scrub: 1.2,
        },
      });

      // 1. Main image slowly scales
      tl.fromTo(
        mainImageRef.current,
        { scale: 0.92, y: 30 },
        { scale: 1.05, y: -20, ease: "power1.inOut" },
        0
      );

      // 2. Secondary macro image moves at a different parallax speed
      tl.fromTo(
        secondaryImageRef.current,
        { y: 60, scale: 0.95 },
        { y: -50, scale: 1.02, ease: "power1.inOut" },
        0
      );

      // 3. Isolated peanut rotates slightly and floats
      tl.fromTo(
        isolatedPeanutRef.current,
        { rotate: -15, y: 40 },
        { rotate: 20, y: -30, ease: "power1.inOut" },
        0
      );

      // 4. Decorative SVG line draws itself
      if (decorativeLineRef.current) {
        const lineLength = decorativeLineRef.current.getTotalLength();
        gsap.set(decorativeLineRef.current, {
          strokeDasharray: lineLength,
          strokeDashoffset: lineLength,
        });

        tl.to(
          decorativeLineRef.current,
          { strokeDashoffset: 0, duration: 1, ease: "power2.out" },
          0.2
        );
      }

      // 5. Text reveals with smooth stagger
      tl.fromTo(
        textGroupRef.current?.children || [],
        { opacity: 0.2, y: 25 },
        { opacity: 1, y: 0, stagger: 0.08, ease: "power2.out" },
        0.1
      );
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="product-quality-chapter"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#F7F1E7] text-[#2E2117] overflow-hidden border-b border-[#5A3218]/15"
    >
      {/* Background Soft Cream / Agricultural Micro-Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#5A3218_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      {/* Decorative Self-Drawing SVG Line */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <line
          ref={decorativeLineRef}
          x1="0"
          y1="25%"
          x2="100%"
          y2="75%"
          stroke="#5A3218"
          strokeWidth="1"
          strokeOpacity="0.12"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center justify-between border-b border-[#5A3218]/15 pb-4 mb-12">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#7A4824] uppercase font-bold flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#5A3218]" />
            <span>CHAPTER 06 — PRODUCT QUALITY &amp; SEED CALIBRATION</span>
          </span>
          <span className="text-[10px] font-mono text-[#5A3218] font-bold uppercase">
            38/42 TO 70/80 COUNTS/OZ
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT / COMPOSITION (7 COLS): MAIN BOWL + SECONDARY MACRO + ISOLATED PEANUT */}
          <div className="lg:col-span-7 relative min-h-[460px] sm:min-h-[520px] flex items-center justify-center">
            {/* 1. MAIN VISUAL: Large Pile / Heap of Premium Peanut Kernels */}
            <div
              ref={mainImageRef}
              className="relative w-72 sm:w-96 h-72 sm:h-96 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(90,50,24,0.18)] border border-[#5A3218]/20 bg-[#FFFDF8]"
            >
              <Image
                src="/images/peanut-heap-warehouse.jpg"
                alt="Large Heap of Double-Sortex Cleaned Peanut Kernels"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5A3218]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-[#FFFDF8]">
                <span className="text-[9px] font-mono tracking-widest uppercase text-[#D5B58C] block">
                  CALIBRATED HEAP SPECIFICATION
                </span>
                <span className="font-serif text-lg font-medium">Bold &amp; Java Sortex Caliber</span>
              </div>
            </div>

            {/* 2. SECONDARY VISUAL: Macro Close-up of Peanut Skin & Cotyledons */}
            <div
              ref={secondaryImageRef}
              className="absolute -bottom-6 -left-2 sm:left-4 w-44 sm:w-56 h-44 sm:h-56 rounded-2xl overflow-hidden shadow-[0_20px_45px_rgba(90,50,24,0.22)] border-2 border-[#FFFDF8] z-20"
            >
              <Image
                src="/images/split-kernel-macro.jpg"
                alt="Macro Close-Up of Split Peanut Cotyledons and Germ Heart"
                fill
                sizes="250px"
                className="object-cover"
              />
              <div className="absolute top-2.5 left-2.5 bg-[#5A3218]/90 text-[#FFFDF8] px-2 py-0.5 rounded text-[8px] font-mono uppercase tracking-wider">
                MACRO: KERNEL INTEGRITY
              </div>
            </div>

            {/* 3. THIRD VISUAL: Floating Isolated Peanut Pod */}
            <div
              ref={isolatedPeanutRef}
              className="absolute -top-6 -right-2 sm:right-6 w-40 sm:w-48 h-32 sm:h-36 drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] z-20 pointer-events-none"
            >
              <Image
                src="/images/new-uploaded-image.png"
                alt="Isolated Indian Groundnut Pod"
                fill
                sizes="220px"
                className="object-contain"
              />
            </div>
          </div>

          {/* RIGHT / EDITORIAL (5 COLS): HEADING, DETAILS & PRODUCT VARIETY SPECS */}
          <div ref={textGroupRef} className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#7A4824] uppercase tracking-widest font-bold block">
                EXCELLENCE IN EVERY GRAIN
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#2E2117] font-normal leading-tight tracking-tight">
                Calibrated To Global Export Standard.
              </h2>
            </div>

            <p className="text-sm font-sans text-[#2E2117]/80 leading-relaxed font-light">
              Indian groundnuts are celebrated worldwide for rich oil saturation and elongated bold caliber.
              Through automated double-sortex optical sorters and gravitational separation, every grain is vetted
              for moisture under 8.0%, zero broken kernels, and destination-certified aflatoxin standards.
            </p>

            {/* Quality Specs List */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FFFDF8] border border-[#5A3218]/15 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#5A3218] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono font-bold text-[#5A3218]">
                    BOLD PEANUTS (SINGDANA) — 38/42 TO 70/80 / OZ
                  </div>
                  <div className="text-xs text-[#2E2117]/70 font-sans mt-0.5">
                    Elongated kernel with rich red-amber testa, ideal for direct roasting and peanut butter.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FFFDF8] border border-[#5A3218]/15 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#5A3218] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono font-bold text-[#5A3218]">
                    JAVA PEANUTS (SPANISH) — 50/60 TO 80/90 / OZ
                  </div>
                  <div className="text-xs text-[#2E2117]/70 font-sans mt-0.5">
                    Spherical, high-oil (50–52%) confectionery kernels with delicate pink skin and sweet flavor.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FFFDF8] border border-[#5A3218]/15 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#5A3218] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono font-bold text-[#5A3218]">
                    BLANCHED WHOLE &amp; SPLITS — 99.9% SKINNED
                  </div>
                  <div className="text-xs text-[#2E2117]/70 font-sans mt-0.5">
                    Mechanically blanched, split-sorted, and vacuum packed for European confectionery manufacturers.
                  </div>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5A3218] text-[#FFFDF8] hover:bg-[#7A4824] text-xs font-mono font-bold uppercase tracking-wider transition-all shadow cursor-pointer"
              >
                <span>VIEW ALL PEANUT VARIETIES</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D5B58C]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
