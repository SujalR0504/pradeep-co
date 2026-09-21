"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ArrowRight, Layers, Sliders, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface MorphStage {
  step: string;
  name: string;
  badge: string;
  description: string;
  image: string;
  techNote: string;
}

const MORPH_STAGES: MorphStage[] = [
  {
    step: "01",
    name: "WHOLE IN-SHELL POD",
    badge: "BOTANICAL CRADLE",
    description: "Botanical protective cellulose pod guarding the inner seeds from oxidation and field humidity.",
    image: "/images/new-uploaded-image.png",
    techNote: "Moisture: 7.5% • Pod Count: 18/22 per oz",
  },
  {
    step: "02",
    name: "RAW RED-SKIN KERNEL",
    badge: "ANTIOXIDANT SPERMODERM",
    description: "Shell cracked cleanly to reveal the natural ruby-amber seed coat rich in natural resveratrol and polyphenols.",
    image: "/images/red-kernel-cutout.png",
    techNote: "Caliber: 38/42 & 40/50 • Sortex Cleaned",
  },
  {
    step: "03",
    name: "WHOLE BLANCHED KERNEL",
    badge: "SKINLESS IVORY COTYLEDON",
    description: "Gentle convective thermal treatment lifts the papery skin without heat stress, producing pristine ivory white seeds.",
    image: "/images/blanched-peanuts.webp",
    techNote: "Skin Removal: 99.9% • Moisture: 5.5% Max",
  },
  {
    step: "04",
    name: "SPLIT COTYLEDON HALVES",
    badge: "FRACTURED LIPID MATRIX",
    description: "Evenly fractured along natural suture line, exposing twin nutrient-dense cotyledon halves for industrial milling.",
    image: "/images/split-cotyledon-cutout.png",
    techNote: "Natural Oleic Lipids: 49% - 51% • Zero Aflatoxin",
  },
  {
    step: "05",
    name: "GOLDEN ROASTED CRUNCH",
    badge: "AROMATIC CONFECTIONERY",
    description: "Evenly hot-air roasted to release rich groundnut volatile aromas, delivering crisp fracture snap and savory depth.",
    image: "/images/peanut-roasted.webp",
    techNote: "Roast Calibrated • Ready-to-Eat Food Grade",
  },
];

export default function ProductMorphingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const morphStageRef = useRef<HTMLDivElement>(null);
  const imageElementRef = useRef<HTMLDivElement>(null);
  const [currentStageIdx, setCurrentStageIdx] = useState(0);

  const stage = MORPH_STAGES[currentStageIdx];

  const setStage = (idx: number) => {
    if (idx === currentStageIdx) return;
    const target = imageElementRef.current;
    if (target) {
      const tl = gsap.timeline({
        onComplete: () => setCurrentStageIdx(idx),
      });

      // Morphing Transition: Scale down, blur, clip-path change
      tl.to(target, {
        scale: 0.8,
        filter: "blur(12px)",
        opacity: 0.2,
        rotation: (idx - currentStageIdx) * 18,
        duration: 0.35,
        ease: "power2.in",
      }).to(target, {
        scale: 1,
        filter: "blur(0px)",
        opacity: 1,
        rotation: 0,
        duration: 0.65,
        ease: "back.out(1.6)",
      });
    } else {
      setCurrentStageIdx(idx);
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Pinned ScrollTrigger scrubbing through the morphing stages
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=220%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const stageIndex = Math.min(
            MORPH_STAGES.length - 1,
            Math.floor(progress * MORPH_STAGES.length)
          );
          setCurrentStageIdx(stageIndex);
        },
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="product-morph"
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#FFFDF8] text-[#2E2117] flex items-center justify-center py-20 px-6 sm:px-8 lg:px-12 border-t border-[#5A3218]/10 overflow-hidden"
      style={{ isolation: "isolate" }}
    >
      {/* Background Soft Glow & Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#5A3218_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.06] pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(215,184,146,0.22)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10 space-y-12">
        {/* Header Statement */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5A3218]/10 border border-[#5A3218]/20 text-xs font-mono tracking-widest text-[#5A3218] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#7A4824]" />
            <span>18 • THE SIGNATURE METAMORPHOSIS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[0.98] tracking-tight text-[#2E2117]">
            ONE PEANUT.
            <span className="block italic text-[#5A3218]">FIVE EXPORT STATES.</span>
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#2E2117]/75 font-light">
            Scroll or select below to witness the physical transformation from raw agricultural pod to ready-to-eat export perfection.
          </p>
        </div>

        {/* Central Morphing Stage */}
        <div
          ref={morphStageRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FFFDF8]/90 border border-[#5A3218]/15 rounded-3xl p-8 sm:p-12 shadow-[0_25px_60px_rgba(90,50,24,0.08)]"
        >
          {/* Transforming Macro Image */}
          <div className="lg:col-span-6 flex items-center justify-center min-h-[320px] sm:min-h-[400px] relative">
            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-[#D7B892]/30 to-transparent blur-xl pointer-events-none" />
            <div
              ref={imageElementRef}
              className="relative w-64 sm:w-80 md:w-96 aspect-square flex items-center justify-center transition-all"
            >
              <Image
                src={stage.image}
                alt={stage.name}
                fill
                sizes="(max-width: 768px) 260px, 384px"
                className="object-contain drop-shadow-[0_25px_40px_rgba(90,50,24,0.30)]"
                priority
              />
            </div>
          </div>

          {/* Morphing Stage Info */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5A3218]/10 text-[10px] font-mono tracking-widest text-[#5A3218] uppercase">
              <span>STAGE {stage.step} OF 05</span>
              <span>•</span>
              <span>{stage.badge}</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#5A3218]">
              {stage.name}
            </h3>

            <p className="text-sm sm:text-base font-sans text-[#2E2117]/80 leading-relaxed font-light">
              {stage.description}
            </p>

            <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-[#5A3218]/15 text-xs font-mono text-[#5A3218] flex items-center gap-3 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#68704D] shrink-0" />
              <span>{stage.techNote}</span>
            </div>

            {/* Stepper Navigation */}
            <div className="flex items-center gap-2 pt-4">
              {MORPH_STAGES.map((s, idx) => (
                <button
                  key={s.step}
                  onClick={() => setStage(idx)}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase transition-all cursor-pointer border ${
                    idx === currentStageIdx
                      ? "bg-[#5A3218] text-[#FFFDF8] border-[#5A3218] font-bold shadow-md"
                      : "bg-[#FFFDF8] text-[#7A4824] border-[#5A3218]/20 hover:bg-[#5A3218]/5"
                  }`}
                >
                  {s.step}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
