"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface WhyReason {
  num: string;
  heading: string;
  subheading: string;
  explanation: string;
  image: string;
  tag: string;
}

const REASONS: WhyReason[] = [
  {
    num: "01",
    heading: "PEANUT SPECIALIZATION",
    subheading: "65+ Years Agronomic Lineage",
    explanation:
      "Unlike generalized commodity traders, our multigenerational agrarian lineage in Bhonti, Shivpuri is dedicated exclusively to groundnut cultivation, procurement, and export conditioning.",
    image: "/images/harvest-farmer.webp",
    tag: "CENTRAL INDIA ORIGIN",
  },
  {
    num: "02",
    heading: "QUALITY CONTROL",
    subheading: "EU Aflatoxin & Laboratory Compliance",
    explanation:
      "Every processed lot is backed by rigorous pre-shipment laboratory analysis (HPLC) ensuring total aflatoxins below 4 ppb, minimal FFA, and certified phytosanitary release.",
    image: "/images/quality-lab.webp",
    tag: "AFLATOXIN < 4 PPB",
  },
  {
    num: "03",
    heading: "MODERN PROCESSING",
    subheading: "4 MT / Hour Double-Sortex Lines",
    explanation:
      "Our processing infrastructure combines heavy-duty vibratory destoning with multi-spectral bichromatic optical CCD sorters, delivering >99.5% kernel purity and <0.5% broken ratio.",
    image: "/images/sortex-machine.webp",
    tag: "OPTICAL CCD PURITY",
  },
  {
    num: "04",
    heading: "CONSISTENT GRADING",
    subheading: "Count-per-Ounce Sizing Calibration",
    explanation:
      "Rotary cylindrical grading drums ensure strict count-per-ounce calibers (38/42, 40/50, 50/60, 70/80) demanded by international confectionery, snacking, and nut butter mills.",
    image: "/images/peanut-bold.webp",
    tag: "CALIBRATED TOLERANCE",
  },
  {
    num: "05",
    heading: "EXPORT PACKAGING",
    subheading: "Breathable Jute & Vacuum Barriers",
    explanation:
      "Triple lock-stitched twill jute sacks, food-grade polypropylene bags, and nitrogen-flushed multi-wall vacuum cartons engineered to prevent cargo sweat on long tropical ocean transits.",
    image: "/images/packaging/authentic-jute-sacks.webp",
    tag: "MARITIME FOOD BARRIERS",
  },
  {
    num: "06",
    heading: "GLOBAL SUPPLY",
    subheading: "Dependable 35+ Country Fulfillment",
    explanation:
      "With 50,000+ MT annual volume and direct intermodal rail links to Mundra Port (INMUN1) and Nhava Sheva, we provide dependable year-round multi-container supply contracts.",
    image: "/images/shipping-port.webp",
    tag: "SCHEDULED FCL TRANSIT",
  },
];

export default function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".why-reason-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#F5EFE5]/40 text-[#2D241D] border-t border-[#5C341B]/12"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#5C341B]/12 pb-8">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-[#A4774C] uppercase block">
              10 // VALUE PROPOSITION &amp; ASSURANCE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#5C341B] font-normal tracking-tight leading-[1.06]">
              WHY PRADEEP TRADING.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <p className="text-sm font-sans text-[#2D241D]/75 leading-relaxed">
              Six foundational operational pillars backed by generational heritage, modern optical lines, and reliable maritime execution.
            </p>
          </div>
        </div>

        {/* 6 Strong Reason Cards with Large Number + Short Heading + Explanation + Supporting Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((r) => (
            <div
              key={r.num}
              className="why-reason-card rounded-3xl bg-[#FCFAF5] border border-[#5C341B]/12 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow group"
            >
              {/* Supporting Photography Box */}
              <div className="relative w-full h-48 sm:h-52 bg-[#F5EFE5] overflow-hidden">
                <Image
                  src={r.image}
                  alt={r.heading}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D241D]/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#FCFAF5]/90 backdrop-blur-xs text-[10px] font-mono font-bold text-[#5C341B] uppercase shadow-xs">
                  {r.tag}
                </div>

                {/* Large Number inside banner */}
                <div className="absolute bottom-3 right-4 font-serif text-5xl font-bold text-[#FCFAF5]/40 leading-none select-none">
                  {r.num}
                </div>
              </div>

              {/* Information Body */}
              <div className="p-6 sm:p-7 space-y-3 flex-grow flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="font-mono text-xs font-bold text-[#A4774C] block">
                    PILLAR {r.num}
                  </span>
                  <h3 className="font-serif text-2xl text-[#5C341B] font-normal tracking-tight">
                    {r.heading}
                  </h3>
                  <p className="text-xs font-sans font-semibold text-[#754522]">
                    {r.subheading}
                  </p>
                  <p className="text-xs sm:text-sm font-sans text-[#2D241D]/80 leading-relaxed pt-1">
                    {r.explanation}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#5C341B]/10 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-[#5C341B] group-hover:text-[#754522] transition-colors"
                  >
                    <span>CONTRACTUAL TERMS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="text-[10px] font-mono text-[#68704E] font-semibold">
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
