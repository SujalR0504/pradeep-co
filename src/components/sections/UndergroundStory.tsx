"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sprout } from "lucide-react";

export default function UndergroundStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTrackRef = useRef<HTMLDivElement>(null);

  // Depth Layers (6 layers)
  const layer1FarmRef = useRef<HTMLDivElement>(null);
  const layer2SoilSurfaceRef = useRef<HTMLDivElement>(null);
  const layer3SoilParticlesRef = useRef<HTMLDivElement>(null);
  const layer4RootsRef = useRef<SVGSVGElement>(null);
  const layer5PodClusterRef = useRef<HTMLDivElement>(null);
  const layer6ForegroundParticlesRef = useRef<HTMLDivElement>(null);

  // Pod and Kernel Objects
  const heroPodRef = useRef<HTMLDivElement>(null);
  const podLeftShellRef = useRef<HTMLDivElement>(null);
  const podRightShellRef = useRef<HTMLDivElement>(null);
  const kernelHeroRef = useRef<HTMLDivElement>(null);
  const kernelTwinRef = useRef<HTMLDivElement>(null);
  const creamWipeRef = useRef<HTMLDivElement>(null);

  // Chapter Subtitles
  const step1DescRef = useRef<HTMLDivElement>(null);
  const step2DescRef = useRef<HTMLDivElement>(null);
  const step3DescRef = useRef<HTMLDivElement>(null);
  const step4DescRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const pin = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=3200",
        pin: pinTrackRef.current,
        scrub: 1,
        anticipatePin: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3200",
          scrub: 1,
        },
      });

      // ==========================================
      // PHASE 1: DESCENDING FROM FARM INTO SOIL (0.0 -> 0.25)
      // Layer 1 (Farm) shifts upward quickly; Layer 2 (Soil Surface) moves into view
      // ==========================================
      tl.fromTo(
        step1DescRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.08 },
        0
      )
        .to(layer1FarmRef.current, { yPercent: -120, duration: 0.25, ease: "power1.inOut" }, 0)
        .fromTo(
          layer2SoilSurfaceRef.current,
          { yPercent: 40, opacity: 0.6 },
          { yPercent: -50, opacity: 1, duration: 0.25, ease: "power1.inOut" },
          0
        )
        .fromTo(
          layer3SoilParticlesRef.current,
          { yPercent: 60, opacity: 0 },
          { yPercent: -30, opacity: 0.9, duration: 0.25, ease: "power1.out" },
          0.05
        )
        .to(step1DescRef.current, { opacity: 0, y: -20, duration: 0.06 }, 0.22);

      // ==========================================
      // PHASE 2: ROOTS REVEAL & POD RISES FROM EARTH (0.25 -> 0.50)
      // Layer 4 (Roots) expand; Layer 5 (Pod Cluster) emerges
      // Pod rotates slowly, soil falls away
      // ==========================================
      tl.fromTo(
        step2DescRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.08 },
        0.26
      )
        .fromTo(
          layer4RootsRef.current,
          { opacity: 0, scaleY: 0.5 },
          { opacity: 1, scaleY: 1, duration: 0.22, ease: "power2.out" },
          0.24
        )
        .fromTo(
          heroPodRef.current,
          { opacity: 0, scale: 0.5, y: 150, rotateZ: -25 },
          { opacity: 1, scale: 1, y: 0, rotateZ: 0, duration: 0.24, ease: "power2.out" },
          0.26
        )
        .to(layer6ForegroundParticlesRef.current, { y: -80, opacity: 0.8, duration: 0.24 }, 0.26)
        .to(step2DescRef.current, { opacity: 0, y: -20, duration: 0.06 }, 0.46);

      // ==========================================
      // PHASE 3: SHELL OPENS & TWIN KERNELS REVEALED (0.50 -> 0.75)
      // Left and right shells part; twin golden kernels appear
      // ==========================================
      tl.fromTo(
        step3DescRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.08 },
        0.5
      )
        .to(
          podLeftShellRef.current,
          { x: -110, rotateZ: -24, opacity: 0.4, duration: 0.2, ease: "power2.out" },
          0.5
        )
        .to(
          podRightShellRef.current,
          { x: 110, rotateZ: 24, opacity: 0.4, duration: 0.2, ease: "power2.out" },
          0.5
        )
        .fromTo(
          kernelHeroRef.current,
          { opacity: 0, scale: 0.6, x: 0 },
          { opacity: 1, scale: 1.05, x: -45, duration: 0.2, ease: "power2.out" },
          0.52
        )
        .fromTo(
          kernelTwinRef.current,
          { opacity: 0, scale: 0.6, x: 0 },
          { opacity: 1, scale: 1.05, x: 45, duration: 0.2, ease: "power2.out" },
          0.52
        )
        .to(step3DescRef.current, { opacity: 0, y: -20, duration: 0.06 }, 0.72);

      // ==========================================
      // PHASE 4: HERO KERNEL FLOATS FORWARD & SCALES 1 -> 2 -> 5 -> 10 (0.75 -> 1.0)
      // Fills screen into creamy wipe transition to "ONE PEANUT. MANY POSSIBILITIES."
      // ==========================================
      tl.fromTo(
        step4DescRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.08 },
        0.75
      )
        .to(kernelTwinRef.current, { opacity: 0, scale: 0.7, x: 140, duration: 0.15 }, 0.76)
        .to(
          [podLeftShellRef.current, podRightShellRef.current],
          { opacity: 0, duration: 0.15 },
          0.76
        )
        // Kernel moves to center and scales 1 -> 2 -> 5 -> 10
        .to(
          kernelHeroRef.current,
          {
            x: 0,
            y: 0,
            scale: 10,
            rotateZ: 45,
            duration: 0.22,
            ease: "power2.inOut",
          },
          0.78
        )
        // Cream wipe transition takes over the screen as kernel expands
        .fromTo(
          creamWipeRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.15, ease: "power1.in" },
          0.85
        );

      return () => {
        pin.kill();
        tl.kill();
      };
    });

    mm.add("(max-width: 1023px)", () => {
      // Mobile responsive flow
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      tl.fromTo(
        heroPodRef.current,
        { opacity: 0, y: 40, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" }
      );

      return () => tl.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="underground-story"
      ref={containerRef}
      className="relative w-full bg-[#F7F0E5] text-[#2E2117] overflow-hidden"
    >
      <div
        ref={pinTrackRef}
        className="relative w-full h-screen flex flex-col justify-between items-center overflow-hidden px-6 py-8"
      >
        {/* ============================================================ */}
        {/* LAYER 1: AGRICULTURAL FARM BACKGROUND (Fades up/out on scroll) */}
        {/* ============================================================ */}
        <div
          ref={layer1FarmRef}
          className="absolute inset-0 w-full h-full will-change-transform z-0"
        >
          <Image
            src="/images/hero-field.webp"
            alt="Agricultural groundnut farm surface"
            fill
            sizes="100vw"
            className="object-cover filter blur-[1px] brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FCFAF5]/30 via-[#E8D8C1]/70 to-[#8A5A34]/90" />
        </div>

        {/* ============================================================ */}
        {/* LAYER 2: WARM NATURAL SOIL STRATA BACKGROUND */}
        {/* ============================================================ */}
        <div
          ref={layer2SoilSurfaceRef}
          className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#E8D8C1] via-[#B88755]/20 to-[#F7F0E5] will-change-transform pointer-events-none z-1"
        />

        {/* ============================================================ */}
        {/* LAYER 3: SOIL TEXTURE & ORGANIC PARTICLES */}
        {/* ============================================================ */}
        <div
          ref={layer3SoilParticlesRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-2 opacity-50 will-change-transform"
        >
          <svg viewBox="0 0 1000 1000" className="w-full h-full text-[#70421F]/15">
            <circle cx="150" cy="200" r="3" fill="currentColor" />
            <circle cx="280" cy="350" r="4.5" fill="currentColor" />
            <circle cx="420" cy="180" r="2.5" fill="currentColor" />
            <circle cx="750" cy="320" r="4" fill="currentColor" />
            <circle cx="890" cy="220" r="3" fill="currentColor" />
            <circle cx="200" cy="700" r="4" fill="currentColor" />
            <circle cx="600" cy="750" r="5" fill="currentColor" />
            <circle cx="820" cy="650" r="3" fill="currentColor" />
          </svg>
        </div>

        {/* ============================================================ */}
        {/* LAYER 4: BOTANICAL SUBTERRANEAN ROOTS (SVG Line Art) */}
        {/* ============================================================ */}
        <svg
          ref={layer4RootsRef}
          viewBox="0 0 800 600"
          className="absolute inset-0 w-full h-full text-[#70421F]/25 pointer-events-none z-3 will-change-transform"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M400,0 Q395,150 410,320 T400,600" stroke="currentColor" strokeWidth="2.5" />
          <path d="M405,180 Q320,240 240,320 T150,450" stroke="currentColor" strokeWidth="1.8" />
          <path d="M405,220 Q480,280 560,350 T650,480" stroke="currentColor" strokeWidth="1.8" />
          <path d="M320,240 Q280,310 250,400" stroke="currentColor" strokeWidth="1.2" />
          <path d="M480,280 Q520,360 550,460" stroke="currentColor" strokeWidth="1.2" />
          {/* Nitrogen fixing root nodules */}
          <circle cx="320" cy="245" r="4.5" fill="#70421F" fillOpacity="0.4" />
          <circle cx="480" cy="285" r="5" fill="#70421F" fillOpacity="0.4" />
          <circle cx="250" cy="395" r="4" fill="#70421F" fillOpacity="0.4" />
        </svg>

        {/* ============================================================ */}
        {/* LAYER 5 & POD: HERO GROUNDNUT POD & EMERGING KERNELS */}
        {/* ============================================================ */}
        <div
          ref={layer5PodClusterRef}
          className="relative z-10 w-full max-w-4xl mx-auto my-auto flex flex-col items-center justify-center pointer-events-none"
        >
          <div
            ref={heroPodRef}
            className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center will-change-transform"
          >
            {/* Ambient Warm Golden Backlight */}
            <div className="absolute inset-0 rounded-full bg-[#B88755]/20 blur-3xl pointer-events-none" />

            {/* Left Pod Shell Half */}
            <div
              ref={podLeftShellRef}
              className="absolute w-44 sm:w-56 h-72 sm:h-80 -translate-x-14 will-change-transform drop-shadow-[0_15px_30px_rgba(112,66,31,0.25)]"
            >
              <Image
                src="/images/single-pod-cutout.png"
                alt="Left shell half"
                fill
                sizes="250px"
                className="object-contain filter contrast-105"
              />
            </div>

            {/* Right Pod Shell Half */}
            <div
              ref={podRightShellRef}
              className="absolute w-44 sm:w-56 h-72 sm:h-80 translate-x-14 will-change-transform drop-shadow-[0_15px_30px_rgba(112,66,31,0.25)]"
            >
              <Image
                src="/images/single-pod-cutout.png"
                alt="Right shell half"
                fill
                sizes="250px"
                className="object-contain filter contrast-105"
              />
            </div>

            {/* Twin Peanut Kernel (Secondary) */}
            <div
              ref={kernelTwinRef}
              className="absolute w-24 sm:w-32 h-36 sm:h-44 opacity-0 will-change-transform z-10 drop-shadow-[0_10px_25px_rgba(112,66,31,0.3)]"
            >
              <Image
                src="/images/single-kernel-cutout.png"
                alt="Twin calibrated peanut kernel"
                fill
                sizes="150px"
                className="object-contain"
              />
            </div>

            {/* Hero Peanut Kernel (Scales 1 -> 2 -> 5 -> 10 to fill screen) */}
            <div
              ref={kernelHeroRef}
              className="absolute w-24 sm:w-32 h-36 sm:h-44 opacity-0 will-change-transform z-20 drop-shadow-[0_15px_35px_rgba(112,66,31,0.35)]"
            >
              <Image
                src="/images/single-kernel-cutout.png"
                alt="Hero calibrated peanut kernel"
                fill
                sizes="150px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* LAYER 6: FOREGROUND SOIL PARTICLES */}
        {/* ============================================================ */}
        <div
          ref={layer6ForegroundParticlesRef}
          className="absolute inset-0 pointer-events-none z-15 opacity-70 will-change-transform"
        >
          <svg viewBox="0 0 1000 1000" className="w-full h-full text-[#3B2110]/20">
            <circle cx="100" cy="800" r="7" fill="currentColor" />
            <circle cx="900" cy="780" r="9" fill="currentColor" />
            <circle cx="850" cy="900" r="6" fill="currentColor" />
            <circle cx="180" cy="920" r="8" fill="currentColor" />
          </svg>
        </div>

        {/* ============================================================ */}
        {/* TOP EDITORIAL CHAPTER BAR */}
        {/* ============================================================ */}
        <div className="relative z-25 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-[#70421F]/15 pb-4">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.24em] text-[#70421F]">
            <Sprout className="w-4 h-4 text-[#70421F]" />
            <span>Chapter 01 // Subterranean Genesis</span>
          </div>

          <div className="text-xs font-mono text-[#70421F]/80">
            SOIL DESCENT TO SEED REVEAL
          </div>
        </div>

        {/* ============================================================ */}
        {/* STORY DESCRIPTIVE CAPTIONS (Synced to Scroll Timeline) */}
        {/* ============================================================ */}
        <div className="relative z-25 max-w-xl mx-auto w-full text-center pb-6 min-h-[90px] flex items-center justify-center">
          {/* Step 1: Entering the soil */}
          <div ref={step1DescRef} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#70421F]">
              01 • The Descent
            </span>
            <p className="font-serif text-2xl sm:text-3xl text-[#2E2117]">
              Travelling beneath the warm Indian earth.
            </p>
          </div>

          {/* Step 2: Pod emerges from roots */}
          <div ref={step2DescRef} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#70421F]">
              02 • Pod Maturation
            </span>
            <p className="font-serif text-2xl sm:text-3xl text-[#2E2117]">
              Nurtured by nitrogen-fixing taproots.
            </p>
          </div>

          {/* Step 3: Shell opens & twin kernels emerge */}
          <div ref={step3DescRef} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#70421F]">
              03 • Pod Unveiling
            </span>
            <p className="font-serif text-2xl sm:text-3xl text-[#2E2117]">
              The shell parts to reveal twin golden kernels.
            </p>
          </div>

          {/* Step 4: Hero kernel approaches viewer */}
          <div ref={step4DescRef} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#70421F]">
              04 • The Single Seed
            </span>
            <p className="font-serif text-2xl sm:text-3xl text-[#2E2117]">
              One peanut. Infinite export possibilities.
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* CREAM WIPE OVERLAY (Triggered as Hero Kernel scales to 10x) */}
        {/* ============================================================ */}
        <div
          ref={creamWipeRef}
          className="absolute inset-0 bg-[#F7F0E5] opacity-0 pointer-events-none z-30 will-change-transform"
        />
      </div>
    </section>
  );
}
