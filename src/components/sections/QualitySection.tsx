"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { QUALITY_STAGES } from "@/data/quality";

export default function QualitySection() {
  const [activeStage, setActiveStage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const stageButtonsRef = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Growing vertical line as the user scrolls through the quality section
      gsap.fromTo(
        progressLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 0.5,
          },
        }
      );

      // Staggered reveal of the stage buttons
      stageButtonsRef.current.forEach((btn, idx) => {
        if (!btn) return;
        ScrollTrigger.create({
          trigger: btn,
          start: "top 75%",
          onEnter: () => setActiveStage(idx),
          onEnterBack: () => setActiveStage(idx),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addStageButtonRef = (el: HTMLButtonElement | null) => {
    if (el && !stageButtonsRef.current.includes(el)) {
      stageButtonsRef.current.push(el);
    }
  };

  return (
    <section
      id="quality"
      ref={containerRef}
      className="py-24 lg:py-32 bg-[#FAF6EE] text-[#2B1A0F] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8A572F]">
            <span className="w-6 h-[1.5px] bg-[#8A572F]" />
            <span>Standards & Inspection Protocol</span>
          </div>
          <h2 className="font-serif font-light text-editorial-heading leading-[1.02] tracking-tight text-[#2B1A0F]">
            QUALITY IS OUR FOUNDATION
          </h2>
          <p className="text-base sm:text-lg text-[#7D6B5D] font-light leading-relaxed">
            From farm-level moisture calibration to multi-spectral optical sorting, our 5-stage quality protocol ensures that every consignment meets strict international sanitary and phytosanitary benchmarks.
          </p>
        </div>

        {/* Quality Stages Navigation with Growing Timeline Line */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 5 Stage Selection Tabs with Line */}
          <div className="lg:col-span-5 relative space-y-3 pl-6">
            {/* Animated growing vertical timeline line */}
            <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-[#E8DDCB] overflow-hidden">
              <div
                ref={progressLineRef}
                className="w-full h-full bg-[#8A572F] origin-top will-change-transform"
              />
            </div>

            {QUALITY_STAGES.map((stage, idx) => {
              const isActive = activeStage === idx;

              return (
                <button
                  key={stage.number}
                  ref={addStageButtonRef}
                  onClick={() => setActiveStage(idx)}
                  className={`w-full text-left p-5 sm:p-6 transition-all duration-300 rounded-xl border flex items-start gap-4 cursor-pointer relative ${
                    isActive
                      ? "bg-[#FFFDF8] border-[#8A572F] shadow-[0_8px_25px_rgba(43,26,15,0.06)] translate-x-1"
                      : "bg-transparent border-[#E8DDCB]/70 hover:border-[#8A572F]/50 hover:bg-[#FFFDF8]/50"
                  }`}
                >
                  {/* Indicator Dot connected to timeline */}
                  <span
                    className={`absolute -left-[27px] top-7 w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-[#5A3215] ring-4 ring-[#FAF6EE] scale-125"
                        : "bg-[#E8DDCB]"
                    }`}
                  />

                  <span
                    className={`font-serif text-2xl font-normal transition-colors ${
                      isActive ? "text-[#5A3215]" : "text-[#7D6B5D]"
                    }`}
                  >
                    {stage.number}
                  </span>
                  <div className="space-y-1 flex-grow">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`text-lg font-serif font-medium transition-colors ${
                          isActive ? "text-[#2B1A0F]" : "text-[#7D6B5D]"
                        }`}
                      >
                        {stage.title}
                      </h3>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A572F] bg-[#FAF6EE] px-2 py-0.5 rounded">
                        {stage.metric}
                      </span>
                    </div>
                    <p className="text-xs text-[#7D6B5D] line-clamp-1">
                      {stage.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Stage Rich Showcase Card */}
          <div className="lg:col-span-7">
            {(() => {
              const current = QUALITY_STAGES[activeStage];
              return (
                <div className="bg-[#FFFDF8] rounded-3xl border border-[#E8DDCB] p-6 sm:p-8 shadow-[0_16px_40px_rgba(43,26,15,0.06)] space-y-6 transition-all duration-500">
                  {/* Image Display */}
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#FAF6EE]">
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-[#2B1A0F]/90 backdrop-blur-md text-[#FFFDF8] text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10 uppercase tracking-wider">
                      Stage {current.number}
                    </div>
                  </div>

                  {/* Stage Details */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h4 className="font-serif text-2xl sm:text-3xl text-[#2B1A0F]">
                        {current.title} —{" "}
                        <span className="italic text-[#74431F] font-normal">
                          {current.subtitle}
                        </span>
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-[#5A3215] font-semibold bg-[#FAF6EE] px-3 py-1 rounded-full border border-[#E8DDCB]">
                        <ShieldCheck className="w-4 h-4 text-[#8A572F]" />
                        <span>Verified Standard</span>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-[#7D6B5D] leading-relaxed font-light">
                      {current.description}
                    </p>

                    {/* Parameters Checklist */}
                    <div className="pt-4 border-t border-[#E8DDCB]">
                      <div className="text-xs uppercase tracking-wider text-[#8A572F] font-semibold mb-3">
                        Key Quality Parameters:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {current.parameters.map((param, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs sm:text-sm text-[#2B1A0F]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#8A572F] flex-shrink-0" />
                            <span>{param}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
