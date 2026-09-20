"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/ui/MagneticButton";

export default function FinalCtaSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const peanutVisualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = contentRef.current;
    const peanut = peanutVisualRef.current;
    if (!el || !peanut) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        end: "bottom 85%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      peanut,
      { opacity: 0, scale: 0.85, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 1.0, ease: "power2.out" }
    ).fromTo(
      el.querySelectorAll(".animate-item"),
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      "-=0.6"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="final-cta"
      ref={containerRef}
      className="relative w-full bg-[#3B2110] text-[#FFFDF8] py-28 lg:py-36 overflow-hidden"
    >
      {/* Subtle radial warmth in background */}
      <div className="absolute inset-0 bg-radial from-[#5A3215]/30 via-[#3B2110]/90 to-[#3B2110] pointer-events-none" />

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C7A77C]/30 bg-[#2A170B]/50 mb-8 animate-item">
          <Sparkles className="w-3.5 h-3.5 text-[#C7A77C]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C7A77C]">
            COMMODITY EXPORT PARTNERSHIP
          </span>
        </div>

        {/* Authentic Pradeep Logo Mark / Subtle Peanut Visual */}
        <div
          ref={peanutVisualRef}
          className="relative w-28 h-28 sm:w-36 sm:h-36 mb-8 will-change-transform"
        >
          <div className="absolute inset-0 rounded-full bg-[#C7A77C]/10 blur-2xl pointer-events-none" />
          <Image
            src="/images/logo/logo-light.png"
            alt="Pradeep Trading Company Logo Mark"
            fill
            sizes="(max-width: 768px) 112px, 144px"
            className="object-contain"
          />
        </div>

        {/* Central Headline */}
        <div ref={contentRef} className="space-y-6 max-w-3xl">
          <h2 className="animate-item font-serif font-light text-4xl sm:text-6xl lg:text-7xl text-[#FFFDF8] leading-[1.04] tracking-tight uppercase">
            LET&apos;S TAKE INDIAN QUALITY
            <br />
            <span className="italic font-normal text-[#C7A77C]">
              TO THE WORLD.
            </span>
          </h2>

          <p className="animate-item text-base sm:text-lg text-[#F4EDE1]/80 font-light max-w-xl mx-auto leading-relaxed">
            Direct sourcing from Central India&apos;s fertile groundnut belt. Calibrated, double-sortex graded, and containerized for international sea freight.
          </p>

          {/* Action Button */}
          <div className="animate-item pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton strength={15}>
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#FFFDF8] text-[#3B2110] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#F4EBDD] hover:shadow-[0_12px_35px_rgba(255,255,255,0.2)]"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="w-4 h-4 text-[#70421F]" />
              </Link>
            </MagneticButton>

            <MagneticButton strength={10}>
              <Link
                href="#products"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#C7A77C]/40 text-[#FFFDF8] text-xs sm:text-sm tracking-wider uppercase hover:bg-white/10 transition-colors"
              >
                <span>VIEW SPECIFICATIONS</span>
              </Link>
            </MagneticButton>
          </div>
        </div>

        {/* Sub-footer details */}
        <div className="mt-16 pt-8 border-t border-[#70421F]/40 w-full flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#F4EDE1]/50 gap-3">
          <span>CENTRAL INDIA ORIGIN: SHIVPURI (M.P.)</span>
          <span className="text-[#C7A77C]">ESTABLISHED COMMODITY EXPORTER</span>
          <span>APEDA &amp; SPICES BOARD VERIFIED</span>
        </div>
      </div>
    </section>
  );
}
