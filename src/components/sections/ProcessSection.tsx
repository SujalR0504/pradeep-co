"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface JourneyStep {
  num: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  metric: string;
  details: string[];
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    num: "01",
    name: "FARM",
    subtitle: "Direct Agrarian Belts & Seed Purity",
    description:
      "Direct origin procurement across premier groundnut farming clusters in Madhya Pradesh (Shivpuri) and Gujarat. Certified non-GMO seed stock, deep sandy-loam soil aeration, and transparent farmgate grower partnerships.",
    image: "/images/hero-field.webp",
    metric: "100% Regional Farm Traceability",
    details: ["Direct grower clusters in MP & Gujarat", "Certified Non-GMO seed stock", "Agronomic soil testing protocols"],
  },
  {
    num: "02",
    name: "HARVEST",
    subtitle: "Physiological Pod Maturity & Sun Curing",
    description:
      "Groundnut plants are lifted at peak physiological ripeness when pods achieve optimal kernel moisture. Inverted field curing under natural dry conditions preserves natural sweetness and prevents internal moisture entrapment.",
    image: "/images/harvest-farmer.webp",
    metric: "Moisture-Controlled Field Curing",
    details: ["Calibrated pod maturity inspection", "Clean inverted field drying", "Zero pod bruising during extraction"],
  },
  {
    num: "03",
    name: "RECEPTION",
    subtitle: "Mandi Inward Sampling & Laboratory Weighment",
    description:
      "Pods arriving at our Bhonti facility undergo mandatory lot sampling. Digital moisture analyzers and initial physical cutting tests evaluate shell integrity, filling ratio, and kernel color before unloader acceptance.",
    image: "/images/peanut-inshell.webp",
    metric: "Initial Quality Lot Sampling",
    details: ["Certified computerized weighbridge", "Halogen digital moisture screening", "Initial physical cutting analysis"],
  },
  {
    num: "04",
    name: "CLEANING",
    subtitle: "Aspiration, Rotary Sieves & Destoning",
    description:
      "Raw pods pass through multi-deck vibratory screens, heavy-density gravity separators, and high-velocity cyclone air aspirators to eliminate all field dust, mud clumps, plant stems, and foreign pebbles.",
    image: "/images/sustainability-soil.webp",
    metric: "99.8% Foreign Matter Elimination",
    details: ["Dual-deck rotary pre-cleaners", "High-efficiency cyclone aspirators", "Vibratory density destoners"],
  },
  {
    num: "05",
    name: "SHELLING",
    subtitle: "Gentle Hull Decortication & Aspiration",
    description:
      "Cleaned groundnuts enter gentle rubberized decorticators designed to crack outer fibrous shells without fracturing inner seed coats. Light shells are aspirated away for biomass, releasing whole undamaged kernels.",
    image: "/images/shell-cracked-open.jpg",
    metric: "Negligible Split Kernel Ratio",
    details: ["Precision gap decorticator rollers", "Shell aspiration separation", "Protection of natural red testae"],
  },
  {
    num: "06",
    name: "SORTING",
    subtitle: "Bichromatic Optical CCD Sorters (4 MT/Hr)",
    description:
      "Every single peanut kernel is scanned in free fall by high-speed multi-camera electronic Sortex technology. Discolored, immature, darkened, or shriveled seeds are ejected via micro-pneumatic air jets at millisecond speeds.",
    image: "/images/sortex-machine.webp",
    metric: "> 99.5% Optical Purity Standard",
    details: ["Bichromatic infrared optics", "Double-sortex electronic sorting", "Microsecond pneumatic air ejection"],
  },
  {
    num: "07",
    name: "GRADING",
    subtitle: "Calibrated Count-per-Ounce Sizing",
    description:
      "Sorted kernels pass through calibrated rotary cylinder grading drums with precision perforated screens, separating export count calibers (38/42, 40/50, 50/60, 60/70, 70/80 counts per ounce) with strict caliber uniformity.",
    image: "/images/peanut-bold.webp",
    metric: "Exact Count Calibration per Ounce",
    details: ["Standardized count screen drums", "Uniform length & caliber tolerance", "Buyer-specific custom grading screens"],
  },
  {
    num: "08",
    name: "QUALITY CHECK",
    subtitle: "HPLC Aflatoxin & Laboratory Certification",
    description:
      "Samples from each processed lot are tested in certified analytical laboratories for moisture levels (max 7-8%), free fatty acid (FFA), peroxide value, and total aflatoxins (< 4 ppb) complying with EU, GCC, and Asian food safety thresholds.",
    image: "/images/quality-lab.webp",
    metric: "Aflatoxin < 4 ppb Capable / SGS Verified",
    details: ["HPLC / ELISA aflatoxin testing", "Free Fatty Acid (FFA) testing", "Certificate of Analysis (COA) issued"],
  },
  {
    num: "09",
    name: "PACKAGING",
    subtitle: "Breathable Jute Sacks & Vacuum Cartons",
    description:
      "Finished graded peanuts are weigh-filled into client-specified barrier packaging: traditional breathable twill jute sacks, food-grade polypropylene bags, or multi-layer vacuum barrier cartons with nitrogen flushing for maritime freshness.",
    image: "/images/packaging/authentic-jute-sacks.webp",
    metric: "Triple Lock-Stitched Maritime Bags",
    details: ["Food-grade aerated jute burlap", "Multi-layer vacuum barrier cartons", "Tamper-evident lot identification tags"],
  },
  {
    num: "10",
    name: "EXPORT",
    subtitle: "Mundra Port Logistics & Container Sealing",
    description:
      "Packed consignments are palletized on ISPM-15 certified heat-treated wooden pallets, loaded with desiccant blankets into 20ft and 40ft sea containers, and dispatched via dedicated western rail corridors to Mundra Port (INMUN1) for global freight delivery.",
    image: "/images/shipping-port.webp",
    metric: "FCL Maritime Transit to 35+ Nations",
    details: ["Pre-stuffing container inspections", "Silica gel humidity blankets", "Direct freight via Mundra & Nhava Sheva"],
  },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const isTransitioningRef = useRef(false);

  const imageBoxRef = useRef<HTMLDivElement>(null);
  const textBoxRef = useRef<HTMLDivElement>(null);

  // Transition to specific step with smooth GSAP fade/scale
  const transitionToStep = (index: number) => {
    if (index === activeIndexRef.current || isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    const imgEl = imageBoxRef.current;
    const txtEl = textBoxRef.current;

    const tl = gsap.timeline({
      onComplete: () => {
        isTransitioningRef.current = false;
      },
    });

    if (imgEl && txtEl) {
      tl.to([imgEl, txtEl], {
        opacity: 0.3,
        scale: 0.98,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          activeIndexRef.current = index;
          setActiveStepIndex(index);
        },
      });

      tl.fromTo(
        [imgEl, txtEl],
        { opacity: 0.3, scale: 1.02 },
        { opacity: 1, scale: 1, duration: 0.45, ease: "power2.out" }
      );
    } else {
      activeIndexRef.current = index;
      setActiveStepIndex(index);
      isTransitioningRef.current = false;
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: stickyRef.current,
        scrub: true,
        onUpdate: (self) => {
          const totalSteps = JOURNEY_STEPS.length;
          const targetIndex = Math.min(
            totalSteps - 1,
            Math.floor(self.progress * totalSteps)
          );

          if (targetIndex !== activeIndexRef.current) {
            transitionToStep(targetIndex);
          }
        },
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  const activeStep = JOURNEY_STEPS[activeStepIndex];
  const progressPercent = ((activeStepIndex + 1) / JOURNEY_STEPS.length) * 100;

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative w-full min-h-[460vh] bg-[#FCFAF5] text-[#2D241D] border-t border-[#5C341B]/12"
    >
      {/* Pinned Viewport Container */}
      <div
        ref={stickyRef}
        className="w-full h-screen min-h-[640px] flex flex-col justify-between py-10 sm:py-14 px-6 sm:px-8 lg:px-12 bg-[#FCFAF5] overflow-hidden"
      >
        {/* Section Top Header & Dynamic Progress Line */}
        <div className="max-w-7xl mx-auto w-full space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-[#A4774C] uppercase block">
                05 // FARM TO PEANUT JOURNEY (SIGNATURE STORY)
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#5C341B] font-normal tracking-tight">
                FROM SOIL TO SELECTION.
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#5C341B]">
              <span>STAGE {activeStep.num} OF 10</span>
              <span className="text-[#A4774C]">&bull;</span>
              <span className="text-[#754522]">{activeStep.name}</span>
            </div>
          </div>

          {/* Dynamic Progress Line that grows as user scrolls */}
          <div className="w-full h-1.5 bg-[#5C341B]/12 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#5C341B] transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* 10 Step Pills Selector */}
          <div className="flex items-center justify-start sm:justify-between overflow-x-auto no-scrollbar gap-1.5 py-1">
            {JOURNEY_STEPS.map((s, idx) => (
              <button
                key={s.num}
                onClick={() => transitionToStep(idx)}
                className={`px-2.5 py-1 rounded-full text-[10px] font-sans uppercase font-bold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  activeStepIndex === idx
                    ? "bg-[#5C341B] text-[#FCFAF5] shadow-xs"
                    : "bg-[#F5EFE5] text-[#2D241D]/65 hover:text-[#5C341B]"
                }`}
              >
                <span>{s.num}</span> <span className="hidden md:inline">{s.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Center Main Content: Sticky Image (Left) + Detailed Step Story (Right) */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center flex-grow py-4">
          {/* Left: Sticky Changing Image (Signature Animation 2: Farm to Factory) */}
          <div className="lg:col-span-7 h-[260px] sm:h-[350px] lg:h-[440px] relative">
            <div
              ref={imageBoxRef}
              className="relative w-full h-full rounded-3xl overflow-hidden bg-[#F5EFE5] border border-[#5C341B]/15 shadow-sm group"
            >
              <Image
                src={activeStep.image}
                alt={`${activeStep.name} - ${activeStep.subtitle}`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#2D241D]/80 via-[#2D241D]/20 to-transparent pointer-events-none" />

              {/* Inset Step Header */}
              <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#FCFAF5]/90 backdrop-blur-xs text-[10px] font-sans font-bold tracking-wider text-[#5C341B] uppercase shadow-xs">
                PHASE {activeStep.num} {"//"} {activeStep.name}
              </div>

              {/* Inset Bottom Metric Banner */}
              <div className="absolute bottom-5 left-5 right-5 text-[#FCFAF5] space-y-1">
                <span className="text-xs font-mono text-[#F5EFE5] uppercase tracking-wider block">
                  {activeStep.metric}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#FCFAF5] font-normal leading-tight">
                  {activeStep.subtitle}
                </h3>
              </div>
            </div>
          </div>

          {/* Right: Step Description & Storytelling */}
          <div
            ref={textBoxRef}
            className="lg:col-span-5 flex flex-col justify-center space-y-5"
          >
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-[#A4774C]">
                STEP {activeStep.num} OF 10
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#5C341B] font-normal tracking-tight">
                {activeStep.name}
              </h3>
              <p className="text-sm font-sans font-semibold text-[#754522]">
                {activeStep.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm font-sans text-[#2D241D]/85 leading-relaxed">
              {activeStep.description}
            </p>

            {/* Highlights List */}
            <div className="p-4 rounded-2xl bg-[#F5EFE5]/80 border border-[#5C341B]/12 space-y-2">
              <span className="text-[10px] font-sans font-bold text-[#A4774C] uppercase tracking-wider block">
                STAGE SPECIFICATIONS &amp; CONTROLS
              </span>
              <ul className="space-y-1.5 text-xs font-sans text-[#2D241D]/80">
                {activeStep.details.map((d, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5C341B] shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Next Step Button */}
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() =>
                  transitionToStep((activeStepIndex + 1) % JOURNEY_STEPS.length)
                }
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5C341B] hover:bg-[#754522] text-[#FCFAF5] text-xs font-sans font-bold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
              >
                <span>NEXT STAGE</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono text-[#A4774C]">
                {activeStepIndex + 1} / 10 COMPLETED
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Hint */}
        <div className="max-w-7xl mx-auto w-full pt-3 border-t border-[#5C341B]/10 flex items-center justify-between text-[11px] font-sans text-[#754522]">
          <span>FARM &bull; HARVEST &bull; RECEPTION &bull; CLEANING &bull; SHELLING &bull; SORTING &bull; GRADING &bull; QUALITY &bull; PACKAGING &bull; EXPORT</span>
          <span className="font-mono text-[#5C341B] font-bold">PRADEEP INDUSTRIAL LINE</span>
        </div>
      </div>
    </section>
  );
}
