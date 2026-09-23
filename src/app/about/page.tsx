"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sprout,
  Factory,
  Globe,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { COMPANY_INFO } from "@/data/company";
import ContactCtaSection from "@/components/sections/ContactCtaSection";

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroMainImgRef = useRef<HTMLDivElement>(null);
  const heroSecImgRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP scroll trigger animations simplified to prevent elements getting stuck off-screen
    return () => {};
  }, []);

  const TIMELINE = [
    {
      year: "1960",
      title: "The Agronomic Foundation",
      subtitle: "65+ Years of Soil Stewardship",
      desc: "Our journey began over six decades ago in the fertile semi-arid plains of Madhya Pradesh, cultivating pure-line bold groundnuts with local farmer communities.",
      image: "/images/harvest-farmer.webp",
    },
    {
      year: "1994",
      title: "Consolidation & APMC Integration",
      subtitle: "Building the Central India Mandi Network",
      desc: "Direct integration across Shivpuri and Gujarat agricultural market hubs, pioneering transparent farmgate pricing and eliminating intermediaries.",
      image: "/images/india-farm-aerial.jpg",
    },
    {
      year: "2012",
      title: "Automated Sortex & Processing Hub",
      subtitle: "4 Metric Tons / Hour Cleaning Plant",
      desc: "Commissioning of modern multi-stage optical CCD color sorting, mechanical destoners, and automated screening infrastructure in Bhonti, Shivpuri.",
      image: "/images/sortex-machine.webp",
    },
    {
      year: "Today",
      title: "Global Maritime Export Gateway",
      subtitle: "Supplying 35+ Nations via Mundra & Nhava Sheva",
      desc: "Delivering certified FCL container loads with strict moisture (<7.5%) and aflatoxin (<4 ppb) compliance to premier food manufacturers across Asia, Europe, and the Middle East.",
      image: "/images/cargo-ship-ocean.jpg",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#FFFDF8] text-[#2E2117] overflow-x-hidden">
      
      {/* =========================================================================
          1. HERO SECTION — Strict Two-Column Master Grid (1fr 1fr, gap 60px)
          ========================================================================= */}
      <section
        ref={heroRef}
        className="relative w-full border-b border-[#5A3218]/15 bg-[#FFFDF8] py-16 lg:py-20"
        style={{
          backgroundImage: "radial-gradient(#5A3218 0.75px, transparent 0.75px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="about-master-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center">
            
            {/* LEFT COLUMN: Max-width 620px */}
            <div className="w-full max-w-[620px] text-left z-10 flex flex-col justify-center">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#5A3218]/25 bg-[#F7F1E7]/95 self-start mb-5 max-w-full">
                <span className="text-[11px] sm:text-[12.5px] font-semibold text-[#5A3218] tracking-[1px] uppercase break-words">
                  ABOUT PRADEEP TRADING COMPANY • HERITAGE &amp; INFRASTRUCTURE
                </span>
              </div>

              {/* Headline with fluid responsive typography */}
              <h1 className="font-serif text-[28px] sm:text-[38px] md:text-[44px] lg:text-[50px] font-extrabold leading-[1.12] tracking-tight text-[#2E2117] m-0 mb-5 break-words">
                <span className="text-[#2A4B32]">65+ Years</span> Cultivating India&apos;s Finest Groundnuts.
              </h1>

              {/* Supporting Paragraph: Max-width 600px */}
              <p className="text-[15px] sm:text-[16px] font-sans text-[#4A3B32] font-normal leading-[1.7] max-w-[600px] text-left m-0 mb-7">
                Pradeep Trading Company unites three generations of agricultural mastery with a high-capacity 4 MT/hour double-sortex processing facility in Shivpuri, Madhya Pradesh. We deliver uncompromised purity from Indian soil to the world&apos;s leading food manufacturers.
              </p>

              {/* CTA Buttons: Compact, crisp, bold and responsive */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Link
                  href="#journey"
                  className="group inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 hover:bg-[#5A3218] hover:-translate-y-0.5 shadow-sm hover:shadow-md cursor-pointer"
                  style={{
                    backgroundColor: '#361C0D',
                    color: '#FFFDF8',
                    height: '38px',
                    padding: '0 18px',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span style={{ color: '#FFFDF8', fontWeight: 800 }}>EXPLORE OUR JOURNEY</span>
                  <ArrowRight className="w-3.5 h-3.5" style={{ color: '#FFFDF8' }} />
                </Link>
                
                <Link
                  href="/nut-journey"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#5A3218]/40 transition-all duration-300 hover:bg-[#5A3218]/10 hover:-translate-y-0.5 cursor-pointer"
                  style={{
                    backgroundColor: '#F5EFE5',
                    color: '#361C0D',
                    height: '38px',
                    padding: '0 18px',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span style={{ color: '#361C0D', fontWeight: 800 }}>OUR PROCESS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" style={{ color: '#361C0D' }} />
                </Link>
              </div>

              {/* Credential / Trust Badge Container */}
              <div className="inline-flex flex-wrap items-center gap-3 sm:gap-5 px-4 py-2.5 rounded-xl bg-[#F7F1E7]/90 border border-[#5A3218]/15 text-[10.5px] sm:text-[11px] font-mono text-[#7A4824] uppercase font-bold self-start shadow-xs">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2A4B32] shrink-0" />
                  <span>APEDA Certified Origin</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2A4B32] shrink-0" />
                  <span>Bhonti Sortex Facility</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Image Composition */}
            <div className="w-full relative flex items-center justify-center pt-6 lg:pt-0">
              
              <div className="relative w-full max-w-[540px]">
                
                {/* Main Image: 440px Height, 24px Radius */}
                <div
                  ref={heroMainImgRef}
                  className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px] rounded-[24px] overflow-hidden shadow-xl border border-[#5A3218]/20 bg-[#F7F1E7]"
                >
                  <Image
                    src="/images/indian-farmer-groundnut.jpg"
                    alt="Pradeep Trading Company Indian Farmer Groundnut Harvest"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E2117]/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Overlapping Secondary Image: Positioned inside container bounds */}
                <div
                  ref={heroSecImgRef}
                  className="absolute bottom-4 right-4 w-36 sm:w-44 h-28 sm:h-32 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFFDF8] hidden sm:block z-10"
                >
                  <Image
                    src="/images/peanut-macro-texture.jpg"
                    alt="Premium Sorted Bold Peanut Kernels"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>

                {/* Floating Heritage Card: Cleanly docked bottom-left */}
                <div className="absolute bottom-4 left-4 z-20 p-4 sm:p-4.5 rounded-2xl bg-[#361C0D] text-[#FFFDF8] border border-[#C88A2E]/35 shadow-2xl max-w-[190px]">
                  <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#C88A2E] leading-none mb-1">
                    65+
                  </div>
                  <div className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-wider uppercase text-[#E0D6CB] leading-tight">
                    Years of Farming Heritage
                  </div>
                </div>

                {/* Second Floating Industrial Card: Top-Right */}
                <div className="absolute top-4 right-4 z-20 p-3 sm:p-3.5 rounded-xl bg-[#FFFDF8] text-[#2E2117] border border-[#5A3218]/25 shadow-xl max-w-[200px]">
                  <div className="text-[9.5px] font-mono tracking-widest text-[#7A4824] uppercase font-bold">
                    Industrial Capability
                  </div>
                  <div className="font-serif text-base sm:text-lg font-extrabold text-[#2E2117] leading-tight mt-0.5">
                    4 MT / HOUR
                  </div>
                  <div className="text-[10.5px] font-sans text-[#5A483D] font-medium">
                    Double-Sortex Processing
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. STATISTICS SECTION — Dedicated Container & 4 Equal Cards
          ========================================================================= */}
      <section ref={statsRef} className="py-12 sm:py-14 bg-[#F7F1E7] border-b border-[#5A3218]/15">
        <div className="about-master-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Stat Card 1 */}
            <div className="stat-card min-h-[160px] p-5 sm:p-6 rounded-[20px] bg-[#FFFDF8] border border-[#5A3218]/15 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start">
              <div className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#5A3218] leading-none">
                65+ YEARS
              </div>
              <div className="text-xs font-mono font-bold tracking-widest text-[#7A4824] uppercase mt-3 mb-2">
                FARMING HERITAGE
              </div>
              <p className="text-xs font-sans text-[#55473E] leading-[1.5] m-0">
                Three generations of agronomic stewardship across Central Indian soils.
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="stat-card min-h-[160px] p-5 sm:p-6 rounded-[20px] bg-[#FFFDF8] border border-[#5A3218]/15 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start">
              <div className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#5A3218] leading-none">
                4 MT / HOUR
              </div>
              <div className="text-xs font-mono font-bold tracking-widest text-[#7A4824] uppercase mt-3 mb-2">
                SORTEX PROCESSING
              </div>
              <p className="text-xs font-sans text-[#55473E] leading-[1.5] m-0">
                Double-pass optical cleaning with 99.5%+ minimum physical purity.
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="stat-card min-h-[160px] p-5 sm:p-6 rounded-[20px] bg-[#FFFDF8] border border-[#5A3218]/15 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start">
              <div className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#5A3218] leading-none">
                50,000+ MT
              </div>
              <div className="text-xs font-mono font-bold tracking-widest text-[#7A4824] uppercase mt-3 mb-2">
                ANNUAL CAPACITY
              </div>
              <p className="text-xs font-sans text-[#55473E] leading-[1.5] m-0">
                Direct mandi network connecting Shivpuri, Bhonti, and Saurashtra hubs.
              </p>
            </div>

            {/* Stat Card 4 */}
            <div className="stat-card min-h-[160px] p-5 sm:p-6 rounded-[20px] bg-[#FFFDF8] border border-[#5A3218]/15 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start">
              <div className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#5A3218] leading-none">
                35+ COUNTRIES
              </div>
              <div className="text-xs font-mono font-bold tracking-widest text-[#7A4824] uppercase mt-3 mb-2">
                EXPORT DESTINATIONS
              </div>
              <p className="text-xs font-sans text-[#55473E] leading-[1.5] m-0">
                Guaranteed weekly FCL container dispatch via Western dedicated port corridors.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. HISTORICAL CONTINUITY SECTION — Clean, Balanced Editorial Timeline
          ========================================================================= */}
      <section id="journey" className="pt-16 sm:pt-20 pb-20 lg:pb-28 bg-[#FFFDF8] border-b border-[#5A3218]/15">
        <div className="about-master-container">
          
          {/* Centered Editorial Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-3">
            <span className="text-xs font-mono tracking-widest text-[#7A4824] uppercase font-bold block">
              HISTORICAL CONTINUITY // 1960 — TODAY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E2117] leading-[1.08] tracking-tight m-0">
              Our Journey Through Time
            </h2>
            <p className="text-sm sm:text-base font-sans text-[#55473E] leading-relaxed font-normal m-0">
              How three generations of regional farming legacy in Central India evolved into an internationally benchmarked groundnut export enterprise.
            </p>
          </div>

          {/* 4 Clean Milestone Cards in a 2x2 Grid with Balanced Proportions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-[#F7F1E7] border border-[#5A3218]/15 hover:border-[#5A3218]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Milestone Image Banner */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-[#FAF5EC]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E2117]/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Badge */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#361C0D]/90 backdrop-blur-xs text-[#FFFDF8] font-mono text-[11px] font-bold shadow-sm">
                    {item.year === "Today" ? "TODAY" : `YEAR ${item.year}`}
                  </div>
                </div>

                {/* Milestone Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-2.5">
                  <div>
                    <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#7A4824] block">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2E2117] mt-1 mb-2 group-hover:text-[#5A3218] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] font-sans text-[#55473E] leading-relaxed font-normal m-0">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3 Core Authenticity Pillars Below Timeline */}
          <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#5A3218]/15 shadow-xs flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-[#5A3218]/10 text-[#5A3218] flex items-center justify-center shrink-0 mt-0.5">
                <Sprout className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#2E2117]">Farmgate Sourcing Integrity</h4>
                <p className="text-xs text-[#55473E] mt-1 leading-relaxed">
                  Direct APMC procurement directly from verified Shivpuri farmers without brokers.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#5A3218]/15 shadow-xs flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-[#5A3218]/10 text-[#5A3218] flex items-center justify-center shrink-0 mt-0.5">
                <Factory className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#2E2117]">In-House Sortex Cleaning</h4>
                <p className="text-xs text-[#55473E] mt-1 leading-relaxed">
                  Rotary destoning, sieve grading, and CCD optical rejection under one roof in Bhonti.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#5A3218]/15 shadow-xs flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-[#5A3218]/10 text-[#5A3218] flex items-center justify-center shrink-0 mt-0.5">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#2E2117]">Direct Port Corridors</h4>
                <p className="text-xs text-[#55473E] mt-1 leading-relaxed">
                  Dedicated container logistics connecting Shivpuri directly to Mundra Port &amp; Nhava Sheva (JNPT).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. LARGE HERITAGE PANORAMIC PARALLAX SECTION
          ========================================================================= */}
      <section className="relative w-full py-24 sm:py-32 overflow-hidden bg-[#2C170A]">
        {/* Panoramic Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/harvest-field-tractor.jpg"
            alt="Central India Groundnut Harvest Plains"
            fill
            sizes="100vw"
            className="object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F07] via-[#2C170A]/85 to-[#1C0F07]" />
        </div>

        <div className="about-master-container relative z-10 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-5">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C88A2E]/40 bg-[#C88A2E]/15 text-xs font-mono font-bold tracking-widest text-[#E5A83B] uppercase">
              <span>PRADEEP TRADING COMPANY // EXPORT QUALITY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] m-0">
              FROM INDIAN SOIL<br />TO GLOBAL MARKETS
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#F7F1E7]/90 max-w-2xl mx-auto leading-relaxed font-normal m-0">
              Three generations of agricultural knowledge, modern sorting technology and disciplined export operations.
            </p>

            <div className="pt-3">
              <Link
                href="/process"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#C88A2E] text-[#2C170A] font-extrabold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#E5A83B] hover:-translate-y-0.5 shadow-xl"
              >
                <span>EXPLORE OUR PROCESS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          5. PROCESS / INFRASTRUCTURE PREVIEW — 3 Refined Visual Cards
          ========================================================================= */}
      <section className="py-12 sm:py-14 bg-[#FAF6EE] border-t border-[#5A3218]/15">
        <div className="about-master-container">
          
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-1.5">
            <span className="text-[10px] font-mono tracking-widest text-[#7A4824] uppercase font-bold block">
              INFRASTRUCTURE CAPABILITY
            </span>
            <h2 className="font-sans text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#2E2117] tracking-tight m-0">
              State-of-the-Art Processing &amp; Infrastructure
            </h2>
            <p className="text-[11.5px] sm:text-xs font-sans text-[#55473E] font-normal leading-relaxed m-0">
              From direct farmgate intake to high-speed optical sorting and export container dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            
            {/* Card 01: Farm Sourcing */}
            <div className="group rounded-2xl overflow-hidden bg-[#FFFDF8] border border-[#5A3218]/15 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/harvest-farmer.webp"
                  alt="Farm Sourcing in Shivpuri Madhya Pradesh"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-[#361C0D]/90 text-[#FFFDF8] font-mono text-[10px] font-bold">
                  STAGE 01
                </div>
              </div>

              <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between space-y-2.5">
                <div>
                  <div className="text-[9.5px] font-mono text-[#7A4824] font-bold uppercase tracking-wider">
                    01 // ORIGIN INTAKE
                  </div>
                  <h3 className="font-sans text-base sm:text-[17px] font-bold text-[#2E2117] mt-0.5 mb-1 group-hover:text-[#5A3218] transition-colors">
                    FARM SOURCING
                  </h3>
                  <p className="text-[11.5px] font-sans text-[#55473E] leading-relaxed font-normal m-0">
                    Direct relationships with agricultural sourcing regions across Shivpuri and Gujarat mandis, guaranteeing pure botanical purity and origin traceability.
                  </p>
                </div>

                <div className="pt-2 border-t border-[#5A3218]/10 flex flex-wrap items-center justify-between gap-1 text-[10.5px] font-mono text-[#5A3218] font-bold">
                  <span>Farmgate Direct</span>
                  <span className="text-[#C88A2E]">Shivpuri &amp; Saurashtra</span>
                </div>
              </div>
            </div>

            {/* Card 02: Sortex Processing */}
            <div className="group rounded-2xl overflow-hidden bg-[#FFFDF8] border border-[#5A3218]/15 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/sortex-machine.webp"
                  alt="Optical CCD Sortex Processing Plant Bhonti"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-[#361C0D]/90 text-[#FFFDF8] font-mono text-[10px] font-bold">
                  STAGE 02
                </div>
              </div>

              <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between space-y-2.5">
                <div>
                  <div className="text-[9.5px] font-mono text-[#7A4824] font-bold uppercase tracking-wider">
                    02 // CLEANING &amp; SORTING
                  </div>
                  <h3 className="font-sans text-base sm:text-[17px] font-bold text-[#2E2117] mt-0.5 mb-1 group-hover:text-[#5A3218] transition-colors">
                    SORTEX PROCESSING
                  </h3>
                  <p className="text-[11.5px] font-sans text-[#55473E] leading-relaxed font-normal m-0">
                    High-capacity optical sorting and calibrated grading running bichromatic CCD sensors for broken fractions under 0.5% and 99.5%+ minimum purity.
                  </p>
                </div>

                <div className="pt-2 border-t border-[#5A3218]/10 flex flex-wrap items-center justify-between gap-1 text-[10.5px] font-mono text-[#5A3218] font-bold">
                  <span>4 MT / Hour Capacity</span>
                  <span className="text-[#C88A2E]">Buhler Optical CCD</span>
                </div>
              </div>
            </div>

            {/* Card 03: Global Export */}
            <div className="group rounded-2xl overflow-hidden bg-[#FFFDF8] border border-[#5A3218]/15 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/cargo-ship-ocean.jpg"
                  alt="Global Maritime Export Logistics Mundra and JNPT"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-[#361C0D]/90 text-[#FFFDF8] font-mono text-[10px] font-bold">
                  STAGE 03
                </div>
              </div>

              <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between space-y-2.5">
                <div>
                  <div className="text-[9.5px] font-mono text-[#7A4824] font-bold uppercase tracking-wider">
                    03 // CONTAINER LOGISTICS
                  </div>
                  <h3 className="font-sans text-base sm:text-[17px] font-bold text-[#2E2117] mt-0.5 mb-1 group-hover:text-[#5A3218] transition-colors">
                    GLOBAL EXPORT
                  </h3>
                  <p className="text-[11.5px] font-sans text-[#55473E] leading-relaxed font-normal m-0">
                    Export-ready packaging (vacuum foil cartons, multi-wall PP sacks, twill jute) with guaranteed 48-hour container gating to Mundra Port &amp; Nhava Sheva.
                  </p>
                </div>

                <div className="pt-2 border-t border-[#5A3218]/10 flex flex-wrap items-center justify-between gap-1 text-[10.5px] font-mono text-[#5A3218] font-bold">
                  <span>35+ Global Markets</span>
                  <span className="text-[#C88A2E]">Mundra &amp; JNPT Sea Lanes</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          6. EXECUTIVE LEADERSHIP & MANAGEMENT
          ========================================================================= */}
      <section className="py-12 sm:py-14 bg-[#F7F1E7] border-b border-[#5A3218]/15">
        <div className="about-master-container">
          
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-1.5">
            <span className="text-[10px] font-mono tracking-widest text-[#7A4824] uppercase font-bold block">
              LEADERSHIP &amp; GOVERNANCE
            </span>
            <h2 className="font-sans text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#2E2117] tracking-tight m-0">
              Executive Leadership
            </h2>
            <p className="text-[11.5px] sm:text-xs font-sans text-[#55473E] font-normal leading-relaxed m-0">
              Guiding Pradeep Trading Company with generational agricultural mastery, ethical procurement, and global export excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {COMPANY_INFO.leadership.map((leader, idx) => (
              <div
                key={idx}
                className="bg-[#FFFDF8] border border-[#5A3218]/15 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-3 group hover:border-[#5A3218]/35"
              >
                <div className="space-y-0.5">
                  <h3 className="font-sans text-base sm:text-lg font-extrabold text-[#2E2117] tracking-tight m-0 group-hover:text-[#5A3218] transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-sans text-[#6B7280] font-medium m-0">
                    {leader.role}
                  </p>
                </div>

                {/* Direct Action Icons */}
                <div className="flex items-center justify-center gap-2.5 pt-0.5">
                  <a
                    href={`tel:${leader.phone}`}
                    className="w-8 h-8 rounded-full bg-[#FAF5EC] border border-[#E8DCCB] text-[#5C341B] hover:bg-[#5C341B] hover:text-[#FFFDF8] flex items-center justify-center transition-all shadow-xs"
                    aria-label={`Call ${leader.name}`}
                    title={`Call ${leader.formattedPhone}`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={`https://wa.me/${leader.whatsapp}?text=Hello%20${encodeURIComponent(leader.name)},%20I%20am%20contacting%20you%20regarding%20peanut%20export%20inquiry.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#FAF5EC] border border-[#E8DCCB] text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all shadow-xs"
                    aria-label={`WhatsApp ${leader.name}`}
                    title={`WhatsApp ${leader.formattedPhone}`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={`mailto:${leader.email || 'pradeeptradingcomp@gmail.com'}`}
                    className="w-8 h-8 rounded-full bg-[#FAF5EC] border border-[#E8DCCB] text-[#5C341B] hover:bg-[#5C341B] hover:text-[#FFFDF8] flex items-center justify-center transition-all shadow-xs"
                    aria-label={`Email ${leader.name}`}
                    title={`Email ${leader.email || 'pradeeptradingcomp@gmail.com'}`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Clickable Direct Phone Number Tag */}
                <a
                  href={`tel:${leader.phone}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F1E7] border border-[#5A3218]/15 text-[10.5px] font-mono font-bold text-[#5A3218] hover:bg-[#5A3218] hover:text-[#FFFDF8] transition-colors"
                >
                  <span>{leader.formattedPhone}</span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. UNIVERSAL REUSABLE CONTACT CTA
          ========================================================================= */}
      <ContactCtaSection />

    </div>
  );
}
