"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Factory, Cog, ShieldCheck } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FactoryBlock {
  num: string;
  heading: string;
  subheading: string;
  description: string;
  metric: string;
  image?: string;
  video?: string;
  highlights: string[];
}

const FACTORY_BLOCKS: FactoryBlock[] = [
  {
    num: "01",
    heading: "PRECISION PROCESSING",
    subheading: "High-Capacity Destoning & Pre-Cleaning",
    description:
      "Raw harvested groundnuts enter continuous pre-cleaning lines equipped with dual rotary aspiration cyclones and heavy-density vibratory destoners. Earth clods, field debris, and dust are eliminated without damaging delicate pod pods.",
    metric: "4 Metric Tons / Hour Throughput",
    image: "/images/sortex-machine.webp",
    highlights: ["Multi-deck gravity destoning", "Cyclone air suction filtration", "Zero field debris tolerance"],
  },
  {
    num: "02",
    heading: "ACCURATE GRADING",
    subheading: "Bichromatic Optical CCD Sorters & Sizing Drums",
    description:
      "Cleaned peanut kernels are scanned in free-fall by multi-spectral optical cameras. Defective or discolored testae are ejected via micro-pneumatic jets, while rotary sizing cylinders separate exact count-per-ounce tolerances.",
    metric: "Count-per-Ounce Calibration (38/42 to 70/80)",
    image: "/images/peanut-macro-texture.jpg",
    highlights: ["Multi-spectral CCD optical scanning", "Microsecond pneumatic air pulses", "Screen calibrated kernel calibers"],
  },
  {
    num: "03",
    heading: "CONTROLLED PACKAGING",
    subheading: "Triple-Stitched Bags & Bonded Warehouse Staging",
    description:
      "Finished goods are filled into breathable twill jute burlap or vacuum-sealed cartons with nitrogen barriers. Bags are triple lock-stitched and stacked on raised pallets in climate-monitored facilities prior to container stuffing.",
    metric: "Triple Lock-Stitched Seam Security",
    video: "/videos/factory-bag-stitch.mp4",
    highlights: ["Breathable food-grade jute burlap", "Multi-layer vacuum barrier cartons", "Raised pallet moisture control"],
  },
];

export default function ProcessingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const blocks = sectionRef.current?.querySelectorAll(".factory-block");
      if (blocks) {
        blocks.forEach((block) => {
          gsap.fromTo(
            block,
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: block,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="processing"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#FCFAF5] text-[#2D241D] border-t border-[#5C341B]/12"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#5C341B]/12 pb-8">
          <div className="space-y-3">
            <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-[#A4774C] uppercase block">
              06 // FACTORY PROCESSING &amp; INFRASTRUCTURE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#5C341B] font-normal tracking-tight">
              INDUSTRIAL REFINEMENT
              <br />
              AT BENCHMARK SCALE.
            </h2>
          </div>

          <p className="max-w-md text-sm font-sans text-[#2D241D]/75 leading-relaxed">
            Our modern processing plant in Bhonti, Shivpuri combines heavy-duty mechanical pre-cleaners with electronic sorting lines to deliver consistent purity across every metric ton.
          </p>
        </div>

        {/* 3 Large Processing Moments: Large Image + Small Text + Large Number */}
        <div className="space-y-16 lg:space-y-24">
          {FACTORY_BLOCKS.map((item, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={item.num}
                className={`factory-block grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Side (Large Image or Video) */}
                <div
                  className={`relative h-[320px] sm:h-[400px] lg:h-[480px] rounded-3xl overflow-hidden bg-[#F5EFE5] border border-[#5C341B]/15 shadow-sm group ${
                    isEven ? "lg:col-span-7 lg:order-2" : "lg:col-span-7 lg:order-1"
                  }`}
                >
                  {item.video ? (
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <Image
                      src={item.image!}
                      alt={item.heading}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D241D]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Stage pill */}
                  <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#FCFAF5]/90 backdrop-blur-xs text-[10px] font-sans font-bold tracking-wider text-[#5C341B] uppercase shadow-xs">
                    STAGE {item.num} // {item.heading}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 text-[#FCFAF5]">
                    <span className="text-xs font-mono text-[#F5EFE5] uppercase tracking-wider block">
                      {item.metric}
                    </span>
                  </div>
                </div>

                {/* Content Side: Large Number + Small Text */}
                <div
                  className={`space-y-6 ${
                    isEven ? "lg:col-span-5 lg:order-1" : "lg:col-span-5 lg:order-2"
                  }`}
                >
                  <div className="space-y-2">
                    {/* Large Number */}
                    <span className="font-serif text-6xl sm:text-7xl lg:text-8xl font-bold text-[#5C341B]/20 block leading-none select-none">
                      {item.num}
                    </span>

                    <h3 className="font-serif text-3xl sm:text-4xl text-[#5C341B] font-normal tracking-tight leading-tight">
                      {item.heading}
                    </h3>

                    <p className="text-sm font-sans font-semibold text-[#754522]">
                      {item.subheading}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm font-sans text-[#2D241D]/80 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-[#F5EFE5]/70 border border-[#5C341B]/10 space-y-2">
                    <span className="text-[10px] font-sans font-bold text-[#A4774C] uppercase tracking-wider block">
                      ENGINEERED BENCHMARKS
                    </span>
                    <ul className="space-y-1 text-xs font-sans text-[#2D241D]/75">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5C341B]" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
