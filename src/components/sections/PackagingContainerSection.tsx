"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Package, CheckCircle2, Sparkles } from "lucide-react";

export default function PackagingContainerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTrackRef = useRef<HTMLDivElement>(null);

  // Animated elements
  const singlePackageRef = useRef<HTMLDivElement>(null);
  const fallingKernelsRef = useRef<HTMLDivElement>(null);
  const sealBadgeRef = useRef<HTMLDivElement>(null);
  const palletGroupRef = useRef<HTMLDivElement>(null);
  const containerBoxRef = useRef<HTMLDivElement>(null);
  const leftDoorRef = useRef<HTMLDivElement>(null);
  const rightDoorRef = useRef<HTMLDivElement>(null);
  const darknessOverlayRef = useRef<HTMLDivElement>(null);
  const readyTextRef = useRef<HTMLDivElement>(null);
  const daylightRaysRef = useRef<HTMLDivElement>(null);

  // Captions
  const captionStepRef = useRef<HTMLDivElement>(null);

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

      // 1. Single Jute Export Package appears (0.0 -> 0.2)
      tl.fromTo(
        singlePackageRef.current,
        { scale: 0.7, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.2, ease: "power2.out" },
        0
      )
        // 2. Peanut kernels fall into the package & package seals (0.15 -> 0.35)
        .fromTo(
          fallingKernelsRef.current,
          { y: -60, opacity: 0 },
          { y: 40, opacity: 1, duration: 0.15, ease: "power1.in" },
          0.12
        )
        .to(fallingKernelsRef.current, { opacity: 0, duration: 0.05 }, 0.26)
        .fromTo(
          sealBadgeRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.1, ease: "back.out(2)" },
          0.28
        )
        // Package rotates slightly
        .to(singlePackageRef.current, { rotateY: 15, duration: 0.1 }, 0.3)

        // 3. Multiple packages appear & arrange into a pallet (0.35 -> 0.55)
        .to(singlePackageRef.current, { scale: 0.8, opacity: 0, duration: 0.1 }, 0.38)
        .fromTo(
          palletGroupRef.current,
          { opacity: 0, scale: 0.75, y: 60 },
          { opacity: 1, scale: 1, y: 0, duration: 0.2, ease: "power3.out" },
          0.4
        )

        // 4. Pallet enters the 20ft shipping container (0.55 -> 0.75)
        .fromTo(
          containerBoxRef.current,
          { opacity: 0, scale: 1.2 },
          { opacity: 1, scale: 1, duration: 0.2, ease: "power2.out" },
          0.52
        )
        .to(palletGroupRef.current, { z: -100, scale: 0.85, y: -20, duration: 0.18 }, 0.55)

        // 5. Container doors close shut! Screen becomes briefly dark brown #3B2110 (0.75 -> 0.90)
        .to(leftDoorRef.current, { rotateY: 0, duration: 0.15, ease: "power2.in" }, 0.7)
        .to(rightDoorRef.current, { rotateY: 0, duration: 0.15, ease: "power2.in" }, 0.7)
        .fromTo(
          darknessOverlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.1 },
          0.78
        )
        // Colossal text: "READY FOR THE WORLD."
        .fromTo(
          readyTextRef.current,
          { opacity: 0, scale: 0.9, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.12, ease: "power2.out" },
          0.8
        )

        // 6. Doors burst open with bright daylight! (0.90 -> 1.0)
        .to(readyTextRef.current, { opacity: 0, scale: 1.05, duration: 0.08 }, 0.92)
        .fromTo(
          daylightRaysRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1.2, duration: 0.1 },
          0.93
        )
        .to(darknessOverlayRef.current, { opacity: 0, duration: 0.1 }, 0.94);

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
        singlePackageRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      return () => tl.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="packaging-container"
      ref={containerRef}
      className="relative w-full bg-[#F7F0E5] text-[#2E2117] overflow-hidden border-t border-[#70421F]/15"
    >
      <div
        ref={pinTrackRef}
        className="relative w-full h-screen flex flex-col justify-between items-center py-10 px-6 overflow-hidden"
      >
        {/* Top Header */}
        <div className="relative z-30 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-[#70421F]/15 pb-3">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.24em] text-[#70421F]">
            <Package className="w-4 h-4 text-[#70421F]" />
            <span>Chapter 05 // Packaging &amp; Ocean Staging</span>
          </div>

          <div className="text-xs font-mono text-[#70421F]/80">
            HERMETIC SACK → PALLET → 20FT FCL SEAL
          </div>
        </div>

        {/* Center Stage: Packaging & Container Loading Sequence */}
        <div className="relative z-20 w-full max-w-5xl mx-auto my-auto flex-grow flex items-center justify-center perspective-1000">
          {/* Ambient Warm Golden Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#B88755]/15 blur-3xl pointer-events-none" />

          {/* 1. Single Jute Export Package */}
          <div
            ref={singlePackageRef}
            className="absolute w-64 sm:w-80 aspect-[3/4] rounded-2xl overflow-hidden bg-[#FCFAF5] border border-[#70421F]/20 shadow-[0_20px_45px_rgba(112,66,31,0.12)] p-4 flex flex-col items-center justify-between will-change-transform z-20"
          >
            <div className="relative w-full h-44 rounded-xl overflow-hidden bg-[#F7F0E5]">
              <Image
                src="/images/packaging/authentic-jute-sacks.webp"
                alt="Authentic Pradeep export sack"
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>

            <div className="text-center space-y-1 w-full pt-2">
              <span className="text-[10px] font-mono text-[#8A5A34] uppercase tracking-widest block">
                Grade: Bold Singdana 50/60
              </span>
              <h4 className="font-serif text-xl text-[#2E2117] font-semibold">
                PRADEEP 50 KG JUTE SACK
              </h4>
              <p className="text-[11px] text-[#2E2117]/70 font-mono">
                Desiccant Treated • Zero Moisture Migration
              </p>
            </div>

            {/* Seal Badge */}
            <div
              ref={sealBadgeRef}
              className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#70421F] text-[#FCFAF5] text-[10px] font-mono opacity-0 scale-0"
            >
              <CheckCircle2 className="w-3 h-3 text-[#E8D8C1]" />
              <span>HERMETICALLY SEALED</span>
            </div>

            {/* Falling Kernels visual simulation */}
            <div
              ref={fallingKernelsRef}
              className="absolute top-12 flex gap-2 opacity-0 pointer-events-none"
            >
              <div className="w-3 h-4 rounded-full bg-[#8A5A34] shadow-sm" />
              <div className="w-3 h-4 rounded-full bg-[#B88755] shadow-sm -mt-2" />
              <div className="w-3 h-4 rounded-full bg-[#8A5A34] shadow-sm" />
            </div>
          </div>

          {/* 2. Palletized Stacks */}
          <div
            ref={palletGroupRef}
            className="absolute w-80 sm:w-96 aspect-square rounded-3xl overflow-hidden bg-[#FCFAF5] border border-[#70421F]/20 shadow-[0_25px_50px_rgba(112,66,31,0.15)] p-5 opacity-0 will-change-transform z-15 flex flex-col justify-between"
          >
            <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-[#F7F0E5]">
              <Image
                src="/images/packaging/samman-peanuts-packaging.webp"
                alt="Palletized export peanut unit"
                fill
                sizes="380px"
                className="object-cover"
              />
            </div>
            <div className="text-center pt-2">
              <span className="text-[10px] font-mono uppercase text-[#70421F] font-bold block">
                Standard Shipping Pallet Unit
              </span>
              <p className="font-serif text-lg text-[#2E2117]">
                20 MT Container Stuffing Configuration
              </p>
            </div>
          </div>

          {/* 3. 20ft Shipping Container Model */}
          <div
            ref={containerBoxRef}
            className="absolute w-[340px] sm:w-[500px] h-[320px] rounded-2xl border-4 border-[#70421F] bg-[#3B2110]/10 opacity-0 will-change-transform z-10 flex items-center justify-between p-2 overflow-hidden shadow-2xl"
          >
            {/* Left Heavy Container Door */}
            <div
              ref={leftDoorRef}
              style={{ transformOrigin: "left center" }}
              className="w-1/2 h-full bg-[#3B2110] border-r-2 border-[#70421F] text-[#FCFAF5] p-4 flex flex-col justify-between will-change-transform"
            >
              <div className="text-[10px] font-mono text-[#E8D8C1]">
                CONTAINER ID: PTCU-948201
              </div>
              <div className="font-serif text-2xl font-bold tracking-widest text-[#FCFAF5]/30">
                PRADEEP
              </div>
              <div className="text-[9px] font-mono text-[#E8D8C1]/60">
                MAX GROSS: 24,000 KG
              </div>
            </div>

            {/* Right Heavy Container Door */}
            <div
              ref={rightDoorRef}
              style={{ transformOrigin: "right center" }}
              className="w-1/2 h-full bg-[#3B2110] border-l-2 border-[#70421F] text-[#FCFAF5] p-4 flex flex-col justify-between items-end text-right will-change-transform"
            >
              <div className="text-[10px] font-mono text-[#E8D8C1]">
                PORT: MUNDRA / NHAVA SHEVA
              </div>
              <div className="font-serif text-2xl font-bold tracking-widest text-[#FCFAF5]/30">
                EXPORT
              </div>
              <div className="text-[9px] font-mono text-[#E8D8C1]/60">
                INSPECTION: APEDA PASSED
              </div>
            </div>
          </div>
        </div>

        {/* 4. Strategic Dark Brown Overlay with Colossal "READY FOR THE WORLD." */}
        <div
          ref={darknessOverlayRef}
          className="absolute inset-0 bg-[#3B2110] opacity-0 pointer-events-none z-40 flex flex-col items-center justify-center text-center p-6 will-change-transform"
        >
          <div ref={readyTextRef} className="space-y-4 max-w-2xl opacity-0">
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#C7A77C]">
              Seal Secured • Intermodal Transit
            </span>
            <h2 className="font-serif font-light text-5xl sm:text-7xl lg:text-8xl text-[#FCFAF5] tracking-tight uppercase leading-none">
              READY FOR
              <br />
              <span className="italic font-normal text-[#C7A77C]">
                THE WORLD.
              </span>
            </h2>
            <p className="text-sm text-[#F7F0E5]/70 font-mono pt-2">
              Dispatching from Central India to Deepwater Marine Terminals
            </p>
          </div>
        </div>

        {/* 5. Daylight Rays (Burst of light on doors open) */}
        <div
          ref={daylightRaysRef}
          className="absolute inset-0 bg-gradient-to-t from-[#FCFAF5] via-[#F7F0E5] to-[#FCFAF5] opacity-0 pointer-events-none z-45"
        />

        {/* Bottom Bar */}
        <div className="relative z-30 max-w-7xl mx-auto w-full flex items-center justify-between border-t border-[#70421F]/15 pt-3 text-[11px] font-mono text-[#70421F]/80">
          <span>PORT CONTAINER TRANSIT: 36 HOURS MANDI TO DOCK</span>
          <span className="text-[#70421F] font-semibold">CUSTOMS SEAL CERTIFIED</span>
          <span>FCL (FULL CONTAINER LOAD) LOTS</span>
        </div>
      </div>
    </section>
  );
}
