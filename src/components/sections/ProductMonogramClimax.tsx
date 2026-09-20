"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

// Coordinates to form the letter "P"
const P_SHAPE_POINTS = [
  // Vertical stem
  { x: -60, y: -120 },
  { x: -60, y: -80 },
  { x: -60, y: -40 },
  { x: -60, y: 0 },
  { x: -60, y: 40 },
  { x: -60, y: 80 },
  { x: -60, y: 120 },
  // Top horizontal bar
  { x: -20, y: -120 },
  { x: 20, y: -120 },
  { x: 60, y: -110 },
  // Curve of P
  { x: 90, y: -80 },
  { x: 95, y: -40 },
  { x: 90, y: 0 },
  // Bottom loop of P
  { x: 60, y: 20 },
  { x: 20, y: 25 },
  { x: -20, y: 25 },
];

export default function ProductMonogramClimax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTrackRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const monogramPRef = useRef<HTMLDivElement>(null);
  const brandNameRef = useRef<HTMLDivElement>(null);
  const transitionLeadRef = useRef<HTMLDivElement>(null);

  const addParticleRef = (el: HTMLDivElement | null) => {
    if (el && !particlesRef.current.includes(el)) {
      particlesRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const pin = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=2200",
        pin: pinTrackRef.current,
        scrub: 1,
        anticipatePin: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2200",
          scrub: 1,
        },
      });

      // 1. Scattered kernels converge from all directions (0.0 -> 0.35)
      tl.fromTo(
        particlesRef.current,
        {
          x: () => (Math.random() - 0.5) * 800,
          y: () => (Math.random() - 0.5) * 600,
          opacity: 0,
          scale: 0.4,
        },
        {
          x: (i) => P_SHAPE_POINTS[i % P_SHAPE_POINTS.length].x,
          y: (i) => P_SHAPE_POINTS[i % P_SHAPE_POINTS.length].y,
          opacity: 1,
          scale: 0.8,
          duration: 0.35,
          stagger: 0.015,
          ease: "power2.out",
        },
        0
      )
        // 2. Kernels lock into "P" monogram (0.35 -> 0.55)
        .fromTo(
          monogramPRef.current,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.2, ease: "back.out(1.5)" },
          0.35
        )
        // 3. Monogram dissolves into authentic brand name: PRADEEP (0.55 -> 0.75)
        .to(particlesRef.current, { opacity: 0, scale: 0.3, duration: 0.15 }, 0.55)
        .to(monogramPRef.current, { opacity: 0, scale: 1.1, duration: 0.15 }, 0.55)
        .fromTo(
          brandNameRef.current,
          { opacity: 0, scale: 0.9, y: 25 },
          { opacity: 1, scale: 1, y: 0, duration: 0.2, ease: "power3.out" },
          0.6
        )
        // 4. "PRADEEP" dissolves smoothly into transition lead (0.75 -> 1.0)
        .to(brandNameRef.current, { opacity: 0, y: -25, duration: 0.15 }, 0.8)
        .fromTo(
          transitionLeadRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.15 },
          0.85
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
        brandNameRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      return () => tl.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#FCFAF5] text-[#2E2117] overflow-hidden border-t border-[#70421F]/15"
    >
      <div
        ref={pinTrackRef}
        className="relative w-full h-screen flex flex-col justify-between items-center py-10 px-6 overflow-hidden"
      >
        {/* Top Header */}
        <div className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-[#70421F]/15 pb-3">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.25em] text-[#70421F]">
            <Sparkles className="w-3.5 h-3.5 text-[#70421F]" />
            <span>Chapter Climax // Identity Convergence</span>
          </div>

          <div className="text-xs font-mono text-[#70421F]/80">
            SEEDS ALIGN INTO SIGNATURE MONOGRAM
          </div>
        </div>

        {/* Center Stage: Particles -> P Monogram -> PRADEEP */}
        <div className="relative z-20 w-full max-w-4xl mx-auto my-auto flex-grow flex items-center justify-center">
          {/* Ambient Warm Golden Glow */}
          <div className="absolute w-96 h-96 rounded-full bg-[#B88755]/15 blur-3xl pointer-events-none" />

          {/* Converging Peanut Kernels */}
          {P_SHAPE_POINTS.map((_, i) => (
            <div
              key={i}
              ref={addParticleRef}
              className="absolute w-9 h-14 will-change-transform pointer-events-none drop-shadow-[0_4px_10px_rgba(112,66,31,0.2)]"
            >
              <Image
                src="/images/single-kernel-cutout.png"
                alt="Peanut particle"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
          ))}

          {/* Large P Monogram Visual */}
          <div
            ref={monogramPRef}
            className="absolute font-serif text-[18vw] xl:text-[14vw] font-bold text-[#70421F]/20 opacity-0 pointer-events-none select-none will-change-transform leading-none"
          >
            B
          </div>

          {/* Authentic Brand Name: BALAJI */}
          <div
            ref={brandNameRef}
            className="absolute text-center space-y-3 opacity-0 will-change-transform px-6 max-w-2xl"
          >
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#8A5A34] block">
              Built on Trust • Defined by Quality
            </span>
            <h2 className="font-serif font-light text-5xl sm:text-7xl lg:text-8xl text-[#2E2117] tracking-tight uppercase leading-[0.96]">
              BALAJI
            </h2>
            <p className="font-serif italic text-xl sm:text-2xl text-[#70421F]">
              Exports
            </p>
          </div>

          {/* Smooth Dissolve Lead into Processing */}
          <div
            ref={transitionLeadRef}
            className="absolute text-center space-y-2 opacity-0 px-6 max-w-md"
          >
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#70421F] block">
              The Journey Continues
            </span>
            <p className="font-serif text-2xl sm:text-3xl text-[#2E2117]">
              From Raw Harvest to Factory Processing
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between border-t border-[#70421F]/15 pt-3 text-[11px] font-mono text-[#70421F]/80">
          <span>CENTRAL INDIA COMMODITY TERMINAL</span>
          <span className="text-[#70421F] font-semibold">SCROLL TO ADVANCE TO FACTORY</span>
          <span>ESTABLISHED TRADING TRADITION</span>
        </div>
      </div>
    </section>
  );
}
