"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Microscope, ShieldCheck } from "lucide-react";

export default function PeanutCrossSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTrackRef = useRef<HTMLDivElement>(null);

  const podCrossSectionRef = useRef<HTMLDivElement>(null);
  const shellCalloutRef = useRef<HTMLDivElement>(null);
  const skinCalloutRef = useRef<HTMLDivElement>(null);
  const kernelCalloutRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const pin = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000",
        pin: pinTrackRef.current,
        scrub: 1,
        anticipatePin: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 1,
        },
      });

      // 1. Entrance: Header and Cross section appear
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.15, ease: "power2.out" }
      )
        .fromTo(
          podCrossSectionRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.25, ease: "power2.out" },
          0.05
        )
        // 2. SHELL label reveals with thin brown guide line
        .fromTo(
          shellCalloutRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.2, ease: "power2.out" },
          0.2
        )
        // 3. SKIN label reveals with thin brown guide line
        .fromTo(
          skinCalloutRef.current,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.2, ease: "power2.out" },
          0.4
        )
        // 4. KERNEL label reveals
        .fromTo(
          kernelCalloutRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" },
          0.6
        );

      return () => {
        pin.kill();
        tl.kill();
      };
    });

    mm.add("(max-width: 1023px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      tl.fromTo(
        podCrossSectionRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
      );

      return () => tl.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="cross-section"
      ref={containerRef}
      className="relative w-full bg-[#FBF8F2] text-[#2E2117] overflow-hidden border-t border-[rgba(112,66,31,0.18)]"
    >
      <div
        ref={pinTrackRef}
        className="relative w-full h-screen flex flex-col items-center justify-between py-12 px-6 overflow-hidden"
      >
        {/* Section Headline */}
        <div
          ref={headlineRef}
          className="relative z-30 text-center px-6 pointer-events-none space-y-2 opacity-0"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-[#70421F]">
            <Microscope className="w-3.5 h-3.5 text-[#70421F]" />
            <span>Botanical Architecture</span>
          </div>
          <h2 className="font-serif font-normal text-3xl sm:text-5xl text-[#2E2117]">
            ANATOMY OF THE SEED
          </h2>
          <p className="text-xs sm:text-sm text-[#2E2117]/70 font-sans font-light max-w-md mx-auto">
            Each pod is an organic vault engineered by nature and calibrated by Pradeep Trading Company.
          </p>
        </div>

        {/* CENTER STAGE: Giant Peanut Pod Composition with Thin Brown Measurement Annotations */}
        <div className="relative z-20 w-full max-w-4xl flex items-center justify-center min-h-[420px] my-auto">
          {/* Main Pod Cutaway Frame */}
          <div
            ref={podCrossSectionRef}
            className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center will-change-transform opacity-0"
          >
            {/* Exterior Pod Base */}
            <div className="absolute inset-0 drop-shadow-[0_15px_35px_rgba(112,66,31,0.15)]">
              <Image
                src="/images/single-pod-cutout.png"
                alt="Peanut pod cross-section"
                fill
                className="object-contain"
              />
            </div>

            {/* Inner Calibrated Kernel */}
            <div className="absolute w-40 h-40 sm:w-52 sm:h-52 drop-shadow-[0_10px_25px_rgba(112,66,31,0.2)]">
              <Image
                src="/images/single-kernel-cutout.png"
                alt="Peanut kernel cross section"
                fill
                className="object-contain"
              />
            </div>

            {/* Thin Brown Editorial Annotation Lines (Luxury packaging style) */}
            <svg
              viewBox="0 0 400 400"
              fill="none"
              className="absolute inset-0 w-full h-full pointer-events-none opacity-40 text-[#70421F]"
            >
              <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
              <line x1="60" y1="200" x2="340" y2="200" stroke="currentColor" strokeWidth="0.8" />
              <line x1="200" y1="60" x2="200" y2="340" stroke="currentColor" strokeWidth="0.8" />
            </svg>
          </div>

          {/* CALLOUT 1: SHELL (Left) */}
          <div
            ref={shellCalloutRef}
            className="absolute -left-2 sm:left-4 top-[25%] z-30 max-w-xs space-y-1 bg-[#FFFFFF] border border-[rgba(112,66,31,0.18)] p-4 rounded-xl shadow-[0_4px_20px_rgba(112,66,31,0.06)] pointer-events-none opacity-0"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#70421F] font-semibold block">
              01 // Outer Pericarp
            </span>
            <h4 className="font-serif text-lg text-[#2E2117] font-medium">Cellulose Shell</h4>
            <p className="text-xs text-[#2E2117]/75 font-sans font-light leading-relaxed">
              Fibrous outer armor maintaining internal moisture equilibrium below 7.0–8.0% during transit.
            </p>
          </div>

          {/* CALLOUT 2: SKIN (Right) */}
          <div
            ref={skinCalloutRef}
            className="absolute -right-2 sm:right-4 top-[35%] z-30 max-w-xs space-y-1 bg-[#FFFFFF] border border-[rgba(112,66,31,0.18)] p-4 rounded-xl shadow-[0_4px_20px_rgba(112,66,31,0.06)] pointer-events-none opacity-0"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#70421F] font-semibold block">
              02 // Seed Coat (Testa)
            </span>
            <h4 className="font-serif text-lg text-[#2E2117] font-medium">Polyphenol Skin</h4>
            <p className="text-xs text-[#2E2117]/75 font-sans font-light leading-relaxed">
              Paper-thin natural antioxidant barrier with resveratrol preserving unsaturated oleic fatty acids.
            </p>
          </div>

          {/* CALLOUT 3: KERNEL (Bottom Center) */}
          <div
            ref={kernelCalloutRef}
            className="absolute bottom-4 sm:bottom-8 z-30 max-w-sm space-y-1 bg-[#FFFFFF] border border-[rgba(112,66,31,0.18)] p-4 rounded-xl shadow-[0_4px_20px_rgba(112,66,31,0.06)] pointer-events-none text-center opacity-0"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#70421F] font-semibold block">
              03 // Embryo &amp; Cotyledons
            </span>
            <h4 className="font-serif text-xl text-[#2E2117] font-medium">Double-Sortex Kernel</h4>
            <p className="text-xs text-[#2E2117]/75 font-sans font-light leading-relaxed">
              48–52% healthy oils, 25–28% plant protein. Precision-screened by Pradeep Trading Company for uniform count-per-ounce perfection.
            </p>
          </div>
        </div>

        {/* Bottom Technical Indicator */}
        <div className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between border-t border-[rgba(112,66,31,0.15)] pt-3 text-[11px] font-mono text-[#70421F]/70">
          <span>SPEC: AFLATOXIN &lt; 4 PPB</span>
          <span className="text-[#2E2117] font-serif italic text-xs">Botanical Packaging Annotation</span>
          <span>MOISTURE: 7.0% – 8.0%</span>
        </div>
      </div>
    </section>
  );
}
