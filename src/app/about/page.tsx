"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, ShieldCheck, Globe, Clock, Sprout, Factory, CheckCircle2, ArrowUpRight } from "lucide-react";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import { COMPANY_INFO } from "@/data/company";

export default function AboutPage() {
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
      year: "Present",
      title: "Global Maritime Export Gateway",
      subtitle: "Supplying 35+ Nations via Mundra & Nhava Sheva",
      desc: "Delivering certified FCL container loads with strict moisture (<7.5%) and aflatoxin (<4 ppb) compliance to premier food manufacturers across Asia, Europe, and the Middle East.",
      image: "/images/cargo-ship-ocean.jpg",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#FFFDF8] text-[#2E2117] pt-24">
      {/* Editorial Hero Header */}
      <section className="relative w-full py-16 sm:py-24 border-b border-[#5A3218]/15 bg-[#F7F1E7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5A3218]/10 border border-[#5A3218]/20 text-xs font-mono tracking-widest text-[#5A3218] uppercase">
              <Award className="w-3.5 h-3.5 text-[#5A3218]" />
              <span>ABOUT PRADEEP TRADING COMPANY • HERITAGE &amp; INFRASTRUCTURE</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.02] text-[#2E2117]">
              65+ Years Cultivating
              <span className="block italic font-light text-[#5A3218]">
                India&apos;s Finest Groundnuts.
              </span>
            </h1>

            <p className="text-base sm:text-lg font-sans text-[#2E2117]/80 font-light leading-relaxed">
              Pradeep Trading Company unites three generations of agricultural mastery with a high-capacity 4 MT/hour
              double-sortex processing facility in Shivpuri, Madhya Pradesh. We deliver uncompromised purity
              from Indian soil to the world&apos;s leading food manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Core Factual Credentials Strip */}
      <section className="py-12 border-b border-[#5A3218]/15 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-[#F7F1E7] border border-[#5A3218]/15">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#5A3218]">65+ Yrs</div>
              <div className="text-xs font-mono text-[#7A4824] uppercase mt-1">FARMING HERITAGE</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#F7F1E7] border border-[#5A3218]/15">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#5A3218]">4 MT / Hr</div>
              <div className="text-xs font-mono text-[#7A4824] uppercase mt-1">SORTEX PROCESSING</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#F7F1E7] border border-[#5A3218]/15">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#5A3218]">50,000+ MT</div>
              <div className="text-xs font-mono text-[#7A4824] uppercase mt-1">ANNUAL CAPACITY</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#F7F1E7] border border-[#5A3218]/15">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#5A3218]">35+ Countries</div>
              <div className="text-xs font-mono text-[#7A4824] uppercase mt-1">EXPORT DESTINATIONS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Timeline */}
      <section className="py-20 lg:py-28 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-[#7A4824] uppercase font-bold block mb-2">
              HISTORICAL CONTINUITY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#2E2117] font-normal">
              Our Journey Through Time
            </h2>
            <p className="text-sm font-sans text-[#2E2117]/75 mt-3 font-light">
              How a regional farming legacy in central India evolved into a global benchmark in groundnut commodities.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image (6 cols) */}
                <div className={`lg:col-span-6 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border border-[#5A3218]/15 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#5A3218] text-[#FFFDF8] px-3.5 py-1 rounded-full font-mono text-xs font-bold">
                    {item.year}
                  </div>
                </div>

                {/* Text (6 cols) */}
                <div className={`lg:col-span-6 space-y-4 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <span className="text-xs font-mono tracking-widest text-[#7A4824] uppercase font-bold">
                    MILESTONE {item.year}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#2E2117] font-medium">
                    {item.title}
                  </h3>
                  <div className="text-sm font-serif italic text-[#5A3218]">
                    {item.subtitle}
                  </div>
                  <p className="text-sm sm:text-base font-sans text-[#2E2117]/80 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Infrastructure Showcase */}
      <section className="py-20 bg-[#F7F1E7] border-t border-[#5A3218]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono tracking-widest text-[#7A4824] uppercase font-bold block">
                PROCESSING PLANT // BHONTI, SHIVPURI
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#2E2117] font-normal leading-tight">
                State-of-the-Art Optical Sortex Infrastructure
              </h2>
              <p className="text-sm sm:text-base font-sans text-[#2E2117]/80 leading-relaxed font-light">
                Our plant runs automated bichromatic CCD optical sorters operating at 20,000 frames per second.
                This ensures exact size uniformity, removal of discolored or damaged kernels, and zero foreign admixture
                prior to packaging into moisture-barrier export sacks.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 bg-[#FFFDF8] rounded-xl border border-[#5A3218]/15">
                  <div className="font-mono text-xs font-bold text-[#5A3218]">BICHROMATIC CCD</div>
                  <div className="text-xs text-[#2E2117]/70 mt-0.5">High-speed optical rejection</div>
                </div>
                <div className="p-3.5 bg-[#FFFDF8] rounded-xl border border-[#5A3218]/15">
                  <div className="font-mono text-xs font-bold text-[#5A3218]">DESTICKING &amp; DESTONING</div>
                  <div className="text-xs text-[#2E2117]/70 mt-0.5">99.9% physical purity</div>
                </div>
                <div className="p-3.5 bg-[#FFFDF8] rounded-xl border border-[#5A3218]/15">
                  <div className="font-mono text-xs font-bold text-[#5A3218]">HPLC LAB SCREENING</div>
                  <div className="text-xs text-[#2E2117]/70 mt-0.5">Aflatoxin below 4 ppb</div>
                </div>
                <div className="p-3.5 bg-[#FFFDF8] rounded-xl border border-[#5A3218]/15">
                  <div className="font-mono text-xs font-bold text-[#5A3218]">NITROGEN PACKAGING</div>
                  <div className="text-xs text-[#2E2117]/70 mt-0.5">Extended 24-month shelf life</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#5A3218]/15">
              <Image
                src="/images/quality-lab.webp"
                alt="Pradeep Trading Company Quality Testing Laboratory"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Universal Reusable Contact CTA */}
      <ContactCtaSection />
    </div>
  );
}
