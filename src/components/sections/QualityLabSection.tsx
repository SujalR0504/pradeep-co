"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Award } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function QualityLabSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);
  const specItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Subtle brown scanning line moves across the peanut
      gsap.fromTo(
        scanLineRef.current,
        { x: -160, opacity: 0 },
        {
          x: 160,
          opacity: 1,
          repeat: -1,
          yoyo: true,
          duration: 2.2,
          ease: "power1.inOut",
        }
      );

      // Specs reveal on scroll
      gsap.fromTo(
        specItemsRef.current?.children || [],
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="quality-lab"
      ref={containerRef}
      className="relative w-full py-24 lg:py-32 bg-[#FBF8F2] text-[#2E2117] overflow-hidden border-t border-[rgba(112,66,31,0.18)]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-[#70421F]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#70421F]" />
            <span>Inspection Protocol</span>
          </div>
          <h2 className="font-serif font-normal text-3xl sm:text-5xl text-[#2E2117]">
            EVERY KERNEL HAS A STANDARD
          </h2>
          <p className="text-sm sm:text-base text-[#2E2117]/75 font-sans font-light max-w-xl mx-auto leading-relaxed">
            Physical caliber, moisture equilibrium, and aflatoxin thresholds verified before container dispatch.
          </p>
        </div>

        {/* Center Editorial Composition: Macro Peanut with Thin Brown Measurement Annotations */}
        <div className="relative max-w-4xl mx-auto rounded-3xl bg-[#F4EBDD] border border-[rgba(112,66,31,0.18)] p-8 sm:p-12 shadow-[0_15px_40px_rgba(112,66,31,0.06)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* LEFT: Peanut with Subtle Brown Scanner Line */}
            <div className="md:col-span-6 relative flex items-center justify-center min-h-[300px]">
              {/* Thin brown circular annotation ring */}
              <div className="absolute w-64 h-64 rounded-full border border-[rgba(112,66,31,0.2)] pointer-events-none" />
              <div className="absolute w-72 h-72 rounded-full border border-[rgba(112,66,31,0.1)] pointer-events-none" />

              {/* Peanut Macro Image */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60">
                <Image
                  src="/images/single-kernel-cutout.png"
                  alt="Quality inspected peanut kernel"
                  fill
                  className="object-contain filter contrast-[1.05]"
                />
              </div>

              {/* Subtle Thin Brown Scanning Line */}
              <div
                ref={scanLineRef}
                className="absolute top-6 bottom-6 w-[1.5px] bg-[#70421F] shadow-[0_0_8px_rgba(112,66,31,0.3)] pointer-events-none"
              />
            </div>

            {/* RIGHT: Technical Product Annotations (SIZE, GRADE, QUALITY, PACKAGING) */}
            <div ref={specItemsRef} className="md:col-span-6 space-y-4">
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[rgba(112,66,31,0.15)] space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#70421F]">
                  <span>PARAMETER 01 // SIZE</span>
                  <CheckCircle2 className="w-3 h-3 text-[#70421F]" />
                </div>
                <div className="font-serif text-lg text-[#2E2117] font-medium">
                  Sieve Calibrated Grains
                </div>
                <p className="text-xs text-[#2E2117]/70 font-sans font-light">
                  Screen-graded for Bold 38/42, 40/50, 50/60 and Java 50/60, 60/70 count-per-ounce accuracy.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[rgba(112,66,31,0.15)] space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#70421F]">
                  <span>PARAMETER 02 // GRADE</span>
                  <CheckCircle2 className="w-3 h-3 text-[#70421F]" />
                </div>
                <div className="font-serif text-lg text-[#2E2117] font-medium">
                  Double Sortex Purity
                </div>
                <p className="text-xs text-[#2E2117]/70 font-sans font-light">
                  100% optical chromatic inspection eliminating discoloration, foreign seeds, and defective pods.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[rgba(112,66,31,0.15)] space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#70421F]">
                  <span>PARAMETER 03 // QUALITY</span>
                  <CheckCircle2 className="w-3 h-3 text-[#70421F]" />
                </div>
                <div className="font-serif text-lg text-[#2E2117] font-medium">
                  Aflatoxin &lt; 4.0 PPB
                </div>
                <p className="text-xs text-[#2E2117]/70 font-sans font-light">
                  Compliant with EU and international sanitary benchmarks (B1 + B2 + G1 + G2).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[rgba(112,66,31,0.15)] space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#70421F]">
                  <span>PARAMETER 04 // PACKAGING</span>
                  <CheckCircle2 className="w-3 h-3 text-[#70421F]" />
                </div>
                <div className="font-serif text-lg text-[#2E2117] font-medium">
                  Hermetic Jute &amp; Vacuum Liners
                </div>
                <p className="text-xs text-[#2E2117]/70 font-sans font-light">
                  Internal moisture held strictly below 7.0–8.0% to prevent transit condensation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
