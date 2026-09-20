"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Layers } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Scene02SoilTunnel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const crossSectionImgRef = useRef<HTMLDivElement>(null);
  const midRootsRef = useRef<HTMLDivElement>(null);
  const fgParticlesRef = useRef<HTMLDivElement>(null);
  const rootSvgRef = useRef<SVGSVGElement>(null);
  const flowerCardRef = useRef<HTMLDivElement>(null);
  const podsGroupRef = useRef<HTMLDivElement>(null);
  const copyGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinned Subterranean Camera Tunnel
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=240%",
          scrub: 1.1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1. Cross-section image parallax: Camera moves from top plant DOWNWARD into the soil roots
      tl.fromTo(
        crossSectionImgRef.current,
        { y: "0%", scale: 1.05 },
        { y: "-22%", scale: 1.15, ease: "none" },
        0
      );

      // 2. Middle SVG roots layer follows camera
      tl.to(
        midRootsRef.current,
        {
          y: -180,
          ease: "none",
        },
        0
      );

      // 3. Foreground dust granules move fast (tunnel rush)
      tl.to(
        fgParticlesRef.current,
        {
          y: -440,
          scale: 1.3,
          opacity: 0.9,
          ease: "none",
        },
        0
      );

      // 4. Botanical SVG Roots Growth Animation: Draw paths organically
      const rootPaths = rootSvgRef.current?.querySelectorAll(".grow-root");
      if (rootPaths && rootPaths.length > 0) {
        rootPaths.forEach((path) => {
          const pathEl = path as SVGPathElement;
          const length = pathEl.getTotalLength ? pathEl.getTotalLength() : 320;
          gsap.set(pathEl, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
          tl.to(
            pathEl,
            {
              strokeDashoffset: 0,
              ease: "power2.out",
              duration: 1.5,
            },
            0.15
          );
        });
      }

      // 5. Developing pods appear at root terminals (geocarpic pegs)
      const podNodes = podsGroupRef.current?.querySelectorAll(".pegging-pod");
      if (podNodes && podNodes.length > 0) {
        tl.fromTo(
          podNodes,
          { scale: 0, opacity: 0, rotation: -20 },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            stagger: 0.16,
            ease: "back.out(1.8)",
            duration: 1,
          },
          0.5
        );
      }

      // 6. Flower to Peg transformation card floating into view
      tl.fromTo(
        flowerCardRef.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
        0.25
      );

      // 7. Editorial scientific narrative reveal
      tl.fromTo(
        copyGroupRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        0.45
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="soil-story"
      ref={containerRef}
      className="relative w-full h-screen min-h-[750px] overflow-hidden bg-[#24150B] text-[#FCFAF5] select-none"
    >
      {/* ============================================================ */}
      {/* 1. FULL-VIEWPORT PHOTOREALISTIC UNDERGROUND CROSS-SECTION */}
      {/* ============================================================ */}
      <div
        ref={crossSectionImgRef}
        className="absolute inset-0 w-full h-[140%] -top-[10%] pointer-events-none will-change-transform"
      >
        <Image
          src="/images/underground-root-crosssection.jpg"
          alt="Artistic Botanical Underground Cross-Section of Groundnut Plant and Roots"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-90 contrast-[1.08]"
        />
        {/* Subtle lighting gradations */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#24150B]/30 to-[#24150B]/85 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#24150B]/80 via-transparent to-[#24150B]/80 pointer-events-none" />
      </div>

      {/* ============================================================ */}
      {/* 2. BOTANICAL SVG ROOT OVERLAY LAYER */}
      {/* ============================================================ */}
      <div ref={midRootsRef} className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <svg
          ref={rootSvgRef}
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover opacity-80"
        >
          {/* Main descending central taproots */}
          <path
            className="grow-root"
            d="M720 280 C715 360, 710 460, 725 580 C735 660, 715 760, 720 890"
            stroke="#E8D8C1"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            className="grow-root"
            d="M718 380 C680 430, 640 480, 590 540 C550 590, 480 640, 410 710"
            stroke="#E8D8C1"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            className="grow-root"
            d="M722 390 C760 440, 810 500, 860 560 C910 620, 970 680, 1040 730"
            stroke="#E8D8C1"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Geocarpic Peg trajectories (Flowers pushing downward into soil) */}
          <path
            className="grow-root"
            d="M680 290 C650 330, 610 370, 560 420 C520 460, 460 490, 390 530"
            stroke="#C7A77C"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
          <path
            className="grow-root"
            d="M760 290 C790 330, 830 380, 890 430 C940 470, 1000 510, 1070 540"
            stroke="#C7A77C"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* ============================================================ */}
      {/* 3. SUBTERRANEAN MOVING PARTICLES & DUST */}
      {/* ============================================================ */}
      <div
        ref={fgParticlesRef}
        className="absolute inset-0 w-full h-[140%] pointer-events-none z-15 overflow-hidden"
      >
        <div className="absolute top-[22%] left-[18%] w-3.5 h-3.5 rounded-full bg-[#E8D8C1]/40 blur-[1px]" />
        <div className="absolute top-[38%] left-[78%] w-5 h-5 rounded-full bg-[#C7A77C]/35 blur-[2px]" />
        <div className="absolute top-[58%] left-[28%] w-3 h-3 rounded-full bg-[#B88755]/30 blur-[0.5px]" />
        <div className="absolute top-[75%] left-[64%] w-6 h-6 rounded-full bg-[#E8D8C1]/25 blur-[2.5px]" />
        <div className="absolute top-[42%] left-[48%] w-2 h-2 rounded-full bg-[#FCFAF5]/70 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
      </div>

      {/* ============================================================ */}
      {/* 4. DEVELOPING PODS AT ROOT TERMINALS */}
      {/* ============================================================ */}
      <div ref={podsGroupRef} className="absolute inset-0 w-full h-full pointer-events-none z-20">
        {/* Pod Left */}
        <div className="pegging-pod absolute bottom-[22%] left-[16%] sm:left-[22%] w-28 h-28 sm:w-36 sm:h-36 transform -rotate-12 peanut-deep-shadow">
          <Image
            src="/images/single-pod-cutout.png"
            alt="Developing Groundnut Pod in Soil"
            fill
            className="object-contain filter brightness-110"
          />
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-widest text-[#24150B] bg-[#FCFAF5] px-2.5 py-0.5 rounded-full whitespace-nowrap shadow-md font-bold">
            PEG CALIBER A-1
          </span>
        </div>

        {/* Pod Right */}
        <div className="pegging-pod absolute bottom-[26%] right-[14%] sm:right-[20%] w-32 h-32 sm:w-40 sm:h-40 transform rotate-15 peanut-deep-shadow">
          <Image
            src="/images/single-pod-cutout.png"
            alt="Subterranean Maturing Pod"
            fill
            className="object-contain filter brightness-110"
          />
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-widest text-[#24150B] bg-[#FCFAF5] px-2.5 py-0.5 rounded-full whitespace-nowrap shadow-md font-bold">
            GEOCARPIC POD B-2
          </span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 5. EDITORIAL FLOATING STORY CARD: THE BOTANICAL PEG MIRACLE */}
      {/* ============================================================ */}
      <div
        ref={flowerCardRef}
        className="absolute top-24 left-6 sm:left-12 max-w-sm bg-[#FCFAF5]/95 backdrop-blur-md p-6 rounded-3xl border border-[#C7A77C]/30 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-25 text-[#2E2117]"
      >
        <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-4 border border-[#70421F]/15">
          <Image
            src="/images/groundnut-flower.jpg"
            alt="Groundnut Flower blooming above soil"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2E2117]/80 via-transparent to-transparent" />
          <span className="absolute bottom-2 left-3 text-[10px] font-mono text-[#FCFAF5] uppercase tracking-widest font-bold">
            ABOVE SOIL: THE FLOWER BLOOMS
          </span>
        </div>

        <div className="space-y-2">
          <div className="text-[10px] font-mono tracking-[0.25em] text-[#70421F] uppercase font-bold flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-[#70421F]" />
            <span>BIOLOGICAL WONDER: GEOCARPY</span>
          </div>
          <p className="font-serif text-xl text-[#2E2117] leading-snug">
            The flower opens to the sky, then pollinates downwards into darkness.
          </p>
          <p className="text-xs font-sans text-[#2E2117]/80 leading-relaxed">
            A specialized needle-like shoot called the <strong className="text-[#70421F]">peg</strong> bends into the warm sandy loam, burying the ovary 3 to 7 cm underground where the pod quietly matures.
          </p>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 6. EDITORIAL CENTER-RIGHT HEADLINE */}
      {/* ============================================================ */}
      <div
        ref={copyGroupRef}
        className="absolute bottom-16 right-6 sm:right-14 max-w-md text-right z-25 pointer-events-none"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24150B]/80 backdrop-blur-md border border-[#C7A77C]/30 text-[10px] font-mono tracking-[0.25em] text-[#E8D8C1] uppercase font-bold mb-3">
          <Layers className="w-3 h-3 text-[#C7A77C]" />
          <span>ACT 02 // SUBTERRANEAN ANATOMY</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#FCFAF5] font-normal leading-tight">
          Born Under
          <span className="block font-light italic text-[#E8D8C1]">
            The Soil.
          </span>
        </h2>
        <p className="text-xs font-sans text-[#E8D8C1]/85 mt-2 leading-relaxed">
          Central India&apos;s iron-rich soil gives the Shivpuri groundnut its exceptional natural oil density and sweetness.
        </p>
      </div>

      {/* Top Editorial Bar */}
      <div className="absolute top-8 left-6 sm:left-12 right-6 sm:right-12 flex items-center justify-between text-[11px] font-mono tracking-[0.25em] text-[#E8D8C1] uppercase font-bold z-25 pointer-events-none">
        <div>DEPTH: -5.4 CM BELOW SURFACE</div>
        <div className="hidden sm:block">SUBTERRANEAN 3D PROFILE</div>
      </div>
    </section>
  );
}
