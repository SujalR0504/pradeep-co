"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Scene04PodShellSplit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftWingRef = useRef<HTMLDivElement>(null);
  const rightWingRef = useRef<HTMLDivElement>(null);
  const centerPodRef = useRef<HTMLDivElement>(null);
  const crackLineRef = useRef<HTMLDivElement>(null);
  const crackFlashRef = useRef<HTMLDivElement>(null);
  const revealedKernelRef = useRef<HTMLDivElement>(null);
  const revealedContentRef = useRef<HTMLDivElement>(null);
  const initialHeaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // WOW #2 Master Timeline: Shell Fracture & Screen Split
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=260%",
          scrub: 1.1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1. Initial State: Pod rotates gently under inspection
      tl.fromTo(
        centerPodRef.current,
        { scale: 0.92, rotate: -6 },
        { scale: 1.08, rotate: 4, duration: 0.8, ease: "power1.out" }
      );

      // 2. Fissure develops: Glowing hairline crack appears and expands vertically
      tl.fromTo(
        crackLineRef.current,
        { scaleY: 0, opacity: 0 },
        { scaleY: 1, opacity: 1, duration: 0.6, ease: "power2.inOut" },
        "-=0.4"
      );

      // 3. Fissure flashes with warm caramel luminescence as tension peaks
      tl.fromTo(
        crackFlashRef.current,
        { opacity: 0, scale: 0.6 },
        { opacity: 0.8, scale: 1.4, duration: 0.3, ease: "power3.in" }
      );
      tl.to(crackFlashRef.current, { opacity: 0, duration: 0.3, ease: "power2.out" });

      // Initial header dissolves
      tl.to(
        initialHeaderRef.current,
        { opacity: 0, y: -30, duration: 0.4, ease: "power2.in" },
        "-=0.4"
      );

      // 4. SIGNATURE MOMENT (WOW #2): The screen fractures in two along the fissure!
      // Left screen half sweeps left
      tl.to(
        leftWingRef.current,
        {
          xPercent: -95,
          rotate: -6,
          duration: 1.8,
          ease: "power2.inOut",
        },
        "+=0.1"
      );

      // Right screen half sweeps right
      tl.to(
        rightWingRef.current,
        {
          xPercent: 95,
          rotate: 6,
          duration: 1.8,
          ease: "power2.inOut",
        },
        "<"
      );

      // Central intact pod fades as its shell halves split with the screen
      tl.to(
        centerPodRef.current,
        {
          opacity: 0,
          scale: 1.2,
          duration: 0.6,
        },
        "<"
      );

      // 5. THE ISOLATED PEANUT KERNEL EMERGES INTO RADIANT SUNLIGHT (No rectangular card!)
      tl.fromTo(
        revealedKernelRef.current,
        { scale: 0.4, opacity: 0, rotate: -25 },
        { scale: 1, opacity: 1, rotate: 12, duration: 1.4, ease: "back.out(1.6)" },
        "-=1.2"
      );

      // Text narrative smoothly emerges
      tl.fromTo(
        revealedContentRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1.0, ease: "power2.out" },
        "-=0.8"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="shell-split"
      ref={containerRef}
      className="relative w-full h-screen min-h-[750px] overflow-hidden bg-[#24150B] select-none text-[#2E2117]"
    >
      {/* ============================================================ */}
      {/* BACKGROUND LAYER (Revealed inside the split screen) */}
      {/* ============================================================ */}
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[#FCFAF5] px-6 text-center z-10 overflow-hidden">
        {/* Warm Sunlight Sheen & Grain */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,216,193,0.75)_0%,rgba(252,250,245,1)_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-agricultural-grid opacity-40 pointer-events-none" />

        {/* REVEALED ISOLATED PEANUT KERNEL (Floating completely independent) */}
        <div
          ref={revealedKernelRef}
          className="relative w-44 sm:w-60 md:w-72 h-64 sm:h-80 md:h-96 mb-6 will-change-transform peanut-deep-shadow z-20 cursor-grab active:cursor-grabbing"
        >
          <Image
            src="/images/user-red-kernel.png"
            alt="The Awakened Peanut Kernel"
            fill
            priority
            sizes="(max-width: 768px) 240px, 360px"
            className="object-contain"
          />

          {/* Ambient Sheen Halo */}
          <div className="absolute inset-0 rounded-full bg-[#B88755]/15 blur-2xl pointer-events-none" />
        </div>

        {/* Editorial Narrative revealed inside */}
        <div
          ref={revealedContentRef}
          className="relative z-20 max-w-2xl space-y-3 px-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EBDD] border border-[#70421F]/20 text-[10px] font-mono tracking-[0.25em] text-[#70421F] uppercase font-bold">
            <Sparkles className="w-3 h-3 text-[#70421F]" />
            <span>WOW MOMENT 02 // THE FRACTURE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#2E2117] leading-tight font-normal">
            Beneath the Calcium Husk,
            <span className="block font-light italic text-[#70421F]">
              The Golden Kernel Awakes.
            </span>
          </h2>

          <p className="text-xs sm:text-sm font-sans tracking-wide text-[#2E2117]/80 max-w-lg mx-auto leading-relaxed">
            Protected from external temperature and pests by a cellular calcium-rich shell, the calibrated kernel completes its transformation into an international trade commodity.
          </p>
        </div>
      </div>

      {/* ============================================================ */}
      {/* FOREGROUND SCREEN LAYER: Splits along the Organic Fissure */}
      {/* ============================================================ */}

      {/* LEFT SCREEN WING */}
      <div
        ref={leftWingRef}
        className="absolute inset-0 w-full h-full z-30 pointer-events-none origin-left bg-[#F7F0E5] shadow-[14px_0_40px_rgba(46,33,23,0.38)] overflow-hidden"
        style={{
          clipPath:
            "polygon(0% 0%, 51% 0%, 47% 24%, 53% 48%, 46% 72%, 52% 100%, 0% 100%)",
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-r from-[#E8D8C1] via-[#F4EBDD] to-[#F7F0E5]">
          <div className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] -translate-x-14 opacity-90">
            <Image
              src="/images/single-pod-cutout.png"
              alt="Left Pod Shell Half"
              fill
              className="object-contain filter drop-shadow-[0_20px_35px_rgba(112,66,31,0.4)]"
            />
          </div>
        </div>
      </div>

      {/* RIGHT SCREEN WING */}
      <div
        ref={rightWingRef}
        className="absolute inset-0 w-full h-full z-30 pointer-events-none origin-right bg-[#F7F0E5] shadow-[-14px_0_40px_rgba(46,33,23,0.38)] overflow-hidden"
        style={{
          clipPath:
            "polygon(51% 0%, 100% 0%, 100% 100%, 52% 100%, 46% 72%, 53% 48%, 47% 24%)",
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-l from-[#E8D8C1] via-[#F4EBDD] to-[#F7F0E5]">
          <div className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] translate-x-14 opacity-90">
            <Image
              src="/images/single-pod-cutout.png"
              alt="Right Pod Shell Half"
              fill
              className="object-contain filter drop-shadow-[0_20px_35px_rgba(112,66,31,0.4)]"
            />
          </div>
        </div>
      </div>

      {/* CENTER INTACT POD (Before Crack separates it) */}
      <div
        ref={centerPodRef}
        className="absolute inset-0 z-35 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-[340px] sm:w-[480px] md:w-[540px] h-[340px] sm:h-[480px] md:h-[540px] peanut-deep-shadow">
          <Image
            src="/images/single-pod-cutout.png"
            alt="Intact Groundnut Pod"
            fill
            sizes="(max-width: 768px) 340px, 540px"
            className="object-contain"
          />
        </div>
      </div>

      {/* HAIRLINE FISSURE GLOW */}
      <div
        ref={crackLineRef}
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-b from-transparent via-[#C7A77C] to-transparent shadow-[0_0_24px_#C7A77C] z-40 pointer-events-none origin-center"
      />

      {/* Burst of golden energy upon crack */}
      <div
        ref={crackFlashRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#B88755]/80 blur-2xl z-40 pointer-events-none opacity-0"
      />

      {/* INITIAL PROLOGUE OVERLAY (Before crack opens) */}
      <div
        ref={initialHeaderRef}
        className="absolute inset-0 flex flex-col items-center justify-between p-8 sm:p-12 z-45 pointer-events-none text-center"
      >
        <div className="text-[11px] font-mono tracking-[0.28em] text-[#70421F] uppercase font-bold">
          ACT 03 // THE CALCIUM HUSK
        </div>

        <div className="max-w-xl space-y-2">
          <span className="text-xs font-mono tracking-[0.25em] text-[#70421F]/80 uppercase block">
            SCROLL TO FRACTURE THE HUSK
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#2E2117] font-normal leading-tight">
            The Sealed Sanctuary.
          </h2>
        </div>

        <div className="text-[10px] font-mono tracking-widest text-[#70421F]/70 uppercase">
          ORGANIC SHELL SPLIT • 100% UNTREATED PROTECTION
        </div>
      </div>
    </section>
  );
}
