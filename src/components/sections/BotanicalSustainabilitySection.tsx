"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sprout } from "lucide-react";

interface BotanicalStage {
  step: string;
  name: string;
  sub: string;
  description: string;
}

const BOTANICAL_STAGES: BotanicalStage[] = [
  {
    step: "01",
    name: "SEED",
    sub: "Dormant Embryo Intake",
    description: "Planted in Central India's warm, well-drained loam. Natural seed vigor initiates germination within 5 to 7 days.",
  },
  {
    step: "02",
    name: "ROOT",
    sub: "Taproot & Nitrogen Nodules",
    description: "A deep primary taproot anchors downward while beneficial Rhizobium bacteria fix atmospheric nitrogen directly into topsoil.",
  },
  {
    step: "03",
    name: "PLANT",
    sub: "Lush Vegetative Canopy",
    description: "Vibrant quadruplicate leaves absorb intense monsoon sunshine, requiring minimal synthetic chemical interventions.",
  },
  {
    step: "04",
    name: "FLOWER",
    sub: "Self-Pollinating Gold Blossoms",
    description: "Delicate golden-yellow blossoms emerge above ground at dawn, fertilizing themselves before withering by twilight.",
  },
  {
    step: "05",
    name: "GROUNDNUT",
    sub: "Geotropic Pegging Descent",
    description: "The fertilized flower stem (peg) turns downward, boring into the dark earth where it develops into a subterranean pod.",
  },
  {
    step: "06",
    name: "HARVEST",
    sub: "Full Pod Maturity & Sun-Curing",
    description: "Pods are lifted with intact clusters, gently field-cured under radiant sun before mechanical threshing and hulling.",
  },
];

export default function BotanicalSustainabilitySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTrackRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  // SVG botanical illustration lines
  const seedSvgRef = useRef<SVGGElement>(null);
  const rootSvgRef = useRef<SVGGElement>(null);
  const stemSvgRef = useRef<SVGGElement>(null);
  const flowerSvgRef = useRef<SVGGElement>(null);
  const pegPodSvgRef = useRef<SVGGElement>(null);
  const harvestSvgRef = useRef<SVGGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const totalStages = BOTANICAL_STAGES.length;

      const pin = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${totalStages * 1000 + 800}`,
        pin: pinTrackRef.current,
        scrub: 1,
        anticipatePin: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalStages * 1000 + 800}`,
          scrub: 1,
        },
      });

      // Growth Sequence Scrubbing
      // Stage 1: Seed
      tl.to(seedSvgRef.current, { opacity: 1, scale: 1, duration: 0.15 }, 0)
        .call(() => setActiveStage(0), [], 0);

      // Stage 2: Root anchors down
      tl.fromTo(rootSvgRef.current, { opacity: 0, scaleY: 0 }, { opacity: 1, scaleY: 1, duration: 0.2, ease: "power1.out" }, 0.2)
        .call(() => setActiveStage(1), [], 0.2);

      // Stage 3: Plant vegetative stem rises
      tl.fromTo(stemSvgRef.current, { opacity: 0, scaleY: 0 }, { opacity: 1, scaleY: 1, duration: 0.2, ease: "power1.out" }, 0.4)
        .call(() => setActiveStage(2), [], 0.4);

      // Stage 4: Flower blooms
      tl.fromTo(flowerSvgRef.current, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.15, ease: "back.out(2)" }, 0.6)
        .call(() => setActiveStage(3), [], 0.6);

      // Stage 5: Pegging into groundnut
      tl.fromTo(pegPodSvgRef.current, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.2, ease: "power2.out" }, 0.8)
        .call(() => setActiveStage(4), [], 0.8);

      // Stage 6: Harvest ready cluster
      tl.fromTo(harvestSvgRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1.1, duration: 0.2, ease: "back.out(1.5)" }, 1.0)
        .call(() => setActiveStage(5), [], 1.0);

      return () => {
        pin.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  const current = BOTANICAL_STAGES[activeStage] || BOTANICAL_STAGES[0];

  return (
    <section
      id="sustainability"
      ref={containerRef}
      className="relative w-full bg-[#F4EBDD] text-[#2E2117] overflow-hidden"
    >
      {/* DESKTOP PINNED BOTANICAL GROWTH CANVAS */}
      <div
        ref={pinTrackRef}
        className="hidden lg:flex relative w-full h-screen flex-col justify-between items-center overflow-hidden px-10 py-10"
      >
        {/* Luxury Packaging Line-Art Border & Corner Ornaments */}
        <div className="absolute inset-6 border border-[#70421F]/15 rounded-3xl pointer-events-none z-10" />
        <div className="absolute inset-8 border border-[#70421F]/10 rounded-2xl pointer-events-none z-10" />

        {/* TOP EDITORIAL HEADER */}
        <div className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-[#70421F]/15 pb-4">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.25em] text-[#70421F]">
            <Sprout className="w-4 h-4 text-[#70421F]" />
            <span>Ecological Botanical Growth Cycle</span>
          </div>

          <div className="text-xs font-mono text-[#70421F]">
            STAGE {current.step} OF 06 // {current.name}
          </div>
        </div>

        {/* CENTER STAGE: LUXURY BOTANICAL ENGRAVING ILLUSTRATION & STAGE EXPLANATION */}
        <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-12 gap-12 items-center my-auto">
          {/* LEFT: Growth Stages List */}
          <div className="col-span-5 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#70421F]">
              Subterranean Symbiosis
            </div>
            <h2 className="font-serif font-light text-4xl xl:text-5xl text-[#2E2117] tracking-tight leading-[1.05]">
              NATURE&apos;S CLOSED-LOOP CYCLE
            </h2>

            {/* Stages Step Track */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              {BOTANICAL_STAGES.map((stg, i) => {
                const isSelected = activeStage === i;
                return (
                  <div
                    key={stg.step}
                    className={`p-3 rounded-xl border transition-all duration-300 ${
                      isSelected
                        ? "bg-[#FBF8F2] border-[#70421F] shadow-sm scale-102"
                        : "bg-[#FBF8F2]/60 border-[#70421F]/15 opacity-70"
                    }`}
                  >
                    <span className="text-[10px] font-mono text-[#70421F] block">
                      STAGE {stg.step}
                    </span>
                    <span className="font-serif text-base text-[#2E2117] font-semibold">
                      {stg.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Stage Detailed Description */}
            <div className="p-5 rounded-2xl bg-[#FBF8F2] border border-[#70421F]/15 shadow-sm mt-4 space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-[#70421F] font-semibold">
                {current.sub}
              </div>
              <p className="text-xs sm:text-sm text-[#6E5D4F] font-light leading-relaxed">
                {current.description}
              </p>
            </div>
          </div>

          {/* RIGHT: BESPOKE BOTANICAL LINE-ART SVG GROWING BEFORE VIEWER */}
          <div className="col-span-7 flex items-center justify-center">
            <div className="relative w-[440px] h-[440px] xl:w-[500px] xl:h-[500px] rounded-3xl bg-[#FBF8F2] border border-[#70421F]/15 p-6 shadow-[0_15px_40px_rgba(112,66,31,0.06)] flex items-center justify-center">
              {/* Soil Line Divider */}
              <div className="absolute top-[62%] left-6 right-6 h-[1.5px] bg-[#70421F]/25 border-dashed" />
              <span className="absolute top-[63%] left-8 text-[9px] font-mono uppercase tracking-widest text-[#70421F]/60">
                SOIL SURFACE LEVEL (EARTH)
              </span>

              {/* BOTANICAL SVG ENGRAVING (Brand Brown Line Art) */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full text-[#70421F]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 1. SEED (Centered around soil line) */}
                <g ref={seedSvgRef} className="will-change-transform">
                  <ellipse cx="200" cy="270" rx="14" ry="9" stroke="currentColor" strokeWidth="2" fill="#C7A77C" fillOpacity="0.4" />
                </g>

                {/* 2. ROOT SYSTEM (Descending downwards) */}
                <g ref={rootSvgRef} className="origin-top will-change-transform opacity-0">
                  <path d="M200,279 Q202,310 195,340 T190,380" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M198,295 Q180,315 165,335" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M202,305 Q220,325 235,345" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Nitrogen nodules */}
                  <circle cx="175" cy="325" r="3.5" fill="#70421F" />
                  <circle cx="215" cy="335" r="4" fill="#70421F" />
                  <circle cx="192" cy="360" r="3" fill="#70421F" />
                </g>

                {/* 3. STEM & VEGETATIVE LEAVES (Rising upwards) */}
                <g ref={stemSvgRef} className="origin-bottom will-change-transform opacity-0">
                  <path d="M200,260 Q198,210 200,160 T198,90" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Left Leaflet Pair */}
                  <path d="M200,200 C160,190 140,165 145,150 C165,150 185,175 200,195" stroke="currentColor" strokeWidth="1.5" fill="#70421F" fillOpacity="0.08" />
                  {/* Right Leaflet Pair */}
                  <path d="M200,175 C240,165 260,140 255,125 C235,125 215,150 200,170" stroke="currentColor" strokeWidth="1.5" fill="#70421F" fillOpacity="0.08" />
                </g>

                {/* 4. FLOWER (Golden Yellow Papilionaceous Blossom) */}
                <g ref={flowerSvgRef} className="will-change-transform opacity-0">
                  <circle cx="198" cy="85" r="10" stroke="#70421F" strokeWidth="1.5" fill="#C7A77C" />
                  <path d="M198,75 Q210,65 215,75 Q210,85 198,80" stroke="#70421F" strokeWidth="1.5" fill="#E8D7C0" />
                  <path d="M198,75 Q186,65 181,75 Q186,85 198,80" stroke="#70421F" strokeWidth="1.5" fill="#E8D7C0" />
                </g>

                {/* 5. GEOTROPIC PEG & GROUNDNUT POD (Descending into earth) */}
                <g ref={pegPodSvgRef} className="will-change-transform opacity-0">
                  <path d="M198,95 Q170,140 160,200 T150,285" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                  <ellipse cx="150" cy="290" rx="18" ry="11" transform="rotate(-15 150 290)" stroke="currentColor" strokeWidth="2" fill="#C7A77C" fillOpacity="0.5" />
                </g>

                {/* 6. HARVEST MATURE POD CLUSTER */}
                <g ref={harvestSvgRef} className="will-change-transform opacity-0">
                  <ellipse cx="230" cy="295" rx="20" ry="12" transform="rotate(20 230 295)" stroke="currentColor" strokeWidth="2" fill="#C7A77C" fillOpacity="0.7" />
                  <ellipse cx="195" cy="315" rx="19" ry="11" stroke="currentColor" strokeWidth="2" fill="#C7A77C" fillOpacity="0.7" />
                  <ellipse cx="140" cy="305" rx="17" ry="10" transform="rotate(-25 140 305)" stroke="currentColor" strokeWidth="2" fill="#C7A77C" fillOpacity="0.7" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* BOTTOM ACCREDITATION BAR */}
        <div className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between border-t border-[#70421F]/15 pt-3 text-[11px] font-mono text-[#70421F]/80">
          <span>NATURAL NITROGEN FIXATION: ZERO SOIL DEPLETION</span>
          <span className="text-[#70421F] font-bold">LUXURY BOTANICAL ARCHIVE</span>
          <span>REGENERATIVE AGRICULTURE CERTIFIED</span>
        </div>
      </div>

      {/* MOBILE / TABLET DISPLAY (<1024px) */}
      <div className="lg:hidden py-24 px-6 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#70421F]">
            Botanical Life Cycle
          </span>
          <h2 className="font-serif text-3xl text-[#2E2117]">
            FROM SEED TO HARVEST
          </h2>
        </div>

        <div className="space-y-4">
          {BOTANICAL_STAGES.map((stg) => (
            <div
              key={stg.step}
              className="p-5 rounded-2xl bg-[#FBF8F2] border border-[#70421F]/15 space-y-1 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#70421F] font-bold">
                  STAGE {stg.step}
                </span>
                <span className="text-[10px] font-mono text-[#6E5D4F]">
                  {stg.sub}
                </span>
              </div>
              <h3 className="font-serif text-xl text-[#2E2117]">
                {stg.name}
              </h3>
              <p className="text-xs text-[#6E5D4F] font-light leading-relaxed">
                {stg.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
