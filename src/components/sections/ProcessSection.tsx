"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";

interface ProcessStage {
  num: string;
  name: string;
  subtitle: string;
  description: string;
  spec: string;
  image?: string;
  video?: string;
}

const PROCESS_STAGES: ProcessStage[] = [
  {
    num: "01",
    name: "CULTIVATION",
    subtitle: "Origin Sourcing & Soil Stewardship",
    description:
      "Direct agrarian relationships across certified agricultural belts in Madhya Pradesh and Gujarat. Farmers receive agronomic guidance and high-germination seed stock to cultivate uniform bold and java varieties.",
    spec: "Direct Farmgate Belts • Zero Intermediate Adulteration",
    image: "/images/india-farm-aerial.jpg",
  },
  {
    num: "02",
    name: "HARVEST",
    subtitle: "Peak Physiological Maturity",
    description:
      "Harvested precisely when pods achieve optimal moisture and kernel fullness. Gentle field lifting followed by natural sun curing prevents internal kernel stress and preserves essential oleic fats.",
    spec: "Field Moisture Screening • Controlled Sun Curing",
    image: "/images/harvest-farmer.webp",
  },
  {
    num: "03",
    name: "CLEANING",
    subtitle: "Pre-Cleaning, Aspiration & Destoning",
    description:
      "Raw peanut pods pass through multi-deck vibratory screens, heavy-density gravity separators, and high-velocity cyclone air aspirators to eliminate field soil, plant stems, and foreign matter.",
    spec: "99.8% Foreign Matter Extraction • High-Volume Aspiration",
    image: "/images/sustainability-soil.webp",
  },
  {
    num: "04",
    name: "SORTING",
    subtitle: "Bichromatic Optical CCD Sorters",
    description:
      "Every single peanut kernel is scanned in free fall by high-speed optical CCD cameras. Bichromatic sensors detect minute color discrepancies, dark spots, or damaged testae, ejecting them with microsecond air pulses.",
    spec: "4 MT / Hour Optical Line • Microsecond Pneumatic Ejection",
    image: "/images/sortex-machine.webp",
  },
  {
    num: "05",
    name: "GRADING",
    subtitle: "Mechanical Count Calibration",
    description:
      "Sorted kernels pass through calibrated rotary sizing screens to divide lots into exact count-per-ounce specifications (38/42, 40/50, 50/60, 60/70, 70/80) demanded by international buyers.",
    spec: "Count-per-Ounce Precision • Strict Tolerance Control",
    image: "/images/quality-lab.webp",
  },
  {
    num: "06",
    name: "PACKAGING",
    subtitle: "Twill Jute & Vacuum Barrier",
    description:
      "Weigh-filled into traditional breathable jute burlap bags, polypropylene sacks, or nitrogen-flushed multi-wall vacuum cartons with triple lock-stitched seams to prevent ocean transit sweat.",
    spec: "25kg / 50kg Bags • Triple Lock-Stitched Seams",
    video: "/videos/factory-bag-stitch.mp4",
  },
  {
    num: "07",
    name: "EXPORT",
    subtitle: "Mundra Port Logistics & Dispatch",
    description:
      "Stuffing into dedicated 20ft and 40ft sea containers lined with silica gel blankets. Rapid transit via western rail corridors to Mundra Port (INMUN1) for scheduled sailing across 35+ international destinations.",
    spec: "FCL Container Logistics • Complete Phytosanitary COA",
    image: "/images/shipping-port.webp",
  },
];

export default function ProcessSection() {
  const [activeStage, setActiveStage] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const stage = PROCESS_STAGES[activeStage];

  // IntersectionObserver to pause/resume video when entering/leaving viewport
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [activeStage]);

  // GSAP clean fade transition when stage changes
  const handleSelectStage = (idx: number) => {
    if (idx === activeStage) return;

    if (visualRef.current && textRef.current) {
      gsap.fromTo(
        visualRef.current,
        { opacity: 0.6, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.55, ease: "power2.out" }
      );
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }

    setActiveStage(idx);
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#FFFDF9] text-[#26180E] border-t border-[#5A3218]/10"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#A16B3C] uppercase block">
              INDUSTRIAL PROCESS // 06
            </span>
            <h2 className="font-serif text-[38px] sm:text-[50px] lg:text-[60px] font-normal leading-[1.08] tracking-tight text-[#5A3218]">
              SEVEN STAGES.
              <br />
              ONE UNCOMPROMISING STANDARD.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base font-sans text-[#26180E]/75 leading-relaxed">
            From the fertile soils of Central India to sealed export shipping containers, each step is strictly controlled for purity and safety.
          </p>
        </div>

        {/* Thin Progress Indicator & Stage Selector */}
        <div className="w-full space-y-4">
          {/* Thin Progress Bar */}
          <div className="w-full h-1 bg-[#5A3218]/12 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#5A3218] transition-all duration-500 ease-out"
              style={{
                width: `${((activeStage + 1) / PROCESS_STAGES.length) * 100}%`,
              }}
            />
          </div>

          {/* Clean 7-Stage Navigation Pills */}
          <div className="flex items-center justify-start sm:justify-between overflow-x-auto no-scrollbar gap-2 sm:gap-3 py-2">
            {PROCESS_STAGES.map((s, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={s.num}
                  onClick={() => handleSelectStage(idx)}
                  className={`group flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-all text-xs font-sans uppercase tracking-wider whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#5A3218] text-[#FFFDF9] font-bold shadow-xs"
                      : "bg-[#F6F1E8]/70 text-[#26180E]/70 hover:text-[#5A3218] hover:bg-[#F6F1E8]"
                  }`}
                >
                  <span
                    className={`font-mono text-[11px] ${
                      isActive ? "text-[#D7B88F]" : "text-[#A16B3C]"
                    }`}
                  >
                    {s.num}
                  </span>
                  <span>{s.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Large Stage Display: Left: Visual, Right: Text & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[460px]">
          {/* Visual Container */}
          <div
            ref={visualRef}
            className="lg:col-span-7 relative h-[360px] sm:h-[440px] rounded-3xl overflow-hidden bg-[#26180E]/5 border border-[#5A3218]/15 shadow-xs"
          >
            {stage.video ? (
              <video
                ref={videoRef}
                src={stage.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={stage.image!}
                alt={stage.name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-[#26180E]/70 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#FFFDF9]/90 backdrop-blur-xs text-[10px] font-sans font-bold tracking-wider text-[#5A3218] uppercase shadow-xs">
              STAGE {stage.num} {"//"} {stage.name}
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-[#FFFDF9] space-y-1">
              <span className="text-xs font-mono text-[#D7B88F] uppercase tracking-wider block">
                {stage.spec}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#FFFDF9]">
                {stage.subtitle}
              </h3>
            </div>
          </div>

          {/* Text Container */}
          <div ref={textRef} className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#A16B3C] uppercase block">
                PHASE {stage.num} OF 07
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#5A3218] font-normal leading-tight">
                {stage.name}
              </h3>
              <p className="text-sm font-sans font-medium text-[#A16B3C]">
                {stage.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base font-sans text-[#26180E]/80 leading-relaxed font-normal">
              {stage.description}
            </p>

            <div className="p-4 rounded-xl bg-[#F6F1E8]/70 border border-[#5A3218]/10 space-y-1">
              <span className="text-[11px] font-sans font-bold text-[#A16B3C] uppercase tracking-wider block">
                QUALITY BENCHMARK
              </span>
              <p className="text-xs sm:text-sm font-sans font-semibold text-[#26180E]">
                {stage.spec}
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() =>
                  handleSelectStage((activeStage + 1) % PROCESS_STAGES.length)
                }
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5A3218] hover:bg-[#754522] text-[#FFFDF9] text-xs font-sans font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>NEXT STAGE</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono text-[#A16B3C]">
                {activeStage + 1} / {PROCESS_STAGES.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
