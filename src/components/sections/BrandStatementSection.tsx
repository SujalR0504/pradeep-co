"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BrandStatementSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Subtle image reveal: clip-path & gentle scale
      if (imageWrapperRef.current) {
        gsap.fromTo(
          imageWrapperRef.current,
          {
            opacity: 0,
            scale: 0.95,
            clipPath: "inset(10% 10% 10% 10% round 24px)",
          },
          {
            opacity: 1,
            scale: 1,
            clipPath: "inset(0% 0% 0% 0% round 24px)",
            duration: 1.1,
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
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 68%",
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
      className="relative w-full py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-[#FFFDF9] text-[#26180E] border-b border-[#5A3218]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* 07 — Large Macro Peanut Image (Occupies approximately 45–55% of the viewport width) */}
          <div className="lg:col-span-6 w-full flex items-center justify-center">
            <div
              ref={imageWrapperRef}
              className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] rounded-3xl bg-[#F6F1E8] border border-[#5A3218]/12 p-8 sm:p-12 flex items-center justify-center shadow-xs overflow-hidden group"
            >
              {/* Subtle ambient gradient */}
              <div className="absolute inset-0 bg-radial from-[#A16B3C]/10 via-transparent to-transparent pointer-events-none" />

              {/* High-Resolution Macro Peanut Kernel */}
              <div className="relative w-full h-full max-w-[440px] max-h-[400px] flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105">
                <Image
                  src="/images/single-kernel-cutout.png"
                  alt="Premium calibrated Indian peanut kernel macro photograph"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain filter drop-shadow-xl"
                  priority
                />
              </div>

              {/* Subtle Technical Label */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FFFDF9]/90 backdrop-blur-xs border border-[#5A3218]/10 text-[10px] font-sans font-bold tracking-wider text-[#A16B3C] uppercase">
                ARACHIS HYPOGAEA • CALIBRATED BOLD
              </div>

              <div className="absolute bottom-4 right-4 text-[10px] font-mono text-[#5A3218]/60 uppercase tracking-widest hidden sm:block">
                OPTICAL CCD INSPECTED
              </div>
            </div>
          </div>

          {/* Text Content (Occupies remaining 45–55%) */}
          <div ref={textContentRef} className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#A16B3C] uppercase block">
                OUR HERITAGE &amp; MISSION
              </span>

              {/* 07 — Heading: PEANUTS FROM INDIA. QUALITY FOR THE WORLD. */}
              <h2 className="font-serif text-[38px] sm:text-[50px] lg:text-[58px] font-normal leading-[1.06] tracking-tight text-[#5A3218]">
                PEANUTS FROM INDIA.
                <br />
                QUALITY FOR THE WORLD.
              </h2>
            </div>

            <p className="text-base sm:text-lg font-sans text-[#26180E]/80 leading-relaxed font-normal">
              At Pradeep Trading Company, we have dedicated over six decades to mastering a single commodity: <strong>the Indian peanut</strong>. From the mineral-rich soils of Central India to precision double-sortex processing lines in Bhonti, Shivpuri (M.P.), our kernels are cultivated, graded, and packed to satisfy the exacting specifications of premier confectionery, food processing, and snack brands across 35+ countries.
            </p>

            {/* Core Trust Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 border-t border-[#5A3218]/10">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5A3218] mt-0.5 shrink-0" />
                <span className="text-xs font-sans text-[#26180E]/80">
                  <strong className="text-[#5A3218] block font-semibold">Direct Farmgate Sourcing</strong>
                  Traceable harvest lots across M.P. and Gujarat.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5A3218] mt-0.5 shrink-0" />
                <span className="text-xs font-sans text-[#26180E]/80">
                  <strong className="text-[#5A3218] block font-semibold">4 MT / Hour Sortex Capacity</strong>
                  Bichromatic CCD cameras ensure &gt;99.5% purity.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5A3218] mt-0.5 shrink-0" />
                <span className="text-xs font-sans text-[#26180E]/80">
                  <strong className="text-[#5A3218] block font-semibold">Strict Caliber Calibration</strong>
                  Counts from 38/42 to 80/90 calibrated per ounce.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5A3218] mt-0.5 shrink-0" />
                <span className="text-xs font-sans text-[#26180E]/80">
                  <strong className="text-[#5A3218] block font-semibold">Aflatoxin Tested &lt; 4 ppb</strong>
                  Certified HPLC laboratory verification for EU &amp; GCC.
                </span>
              </div>
            </div>

            {/* CTA Link */}
            <div className="pt-2">
              <Link
                href="#products"
                className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#5A3218] hover:text-[#A16B3C] transition-colors"
              >
                <span>EXPLORE VARIETIES &amp; SPECIFICATIONS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
