"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EditorialAboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-20 lg:py-28 bg-[#FAF7F1] text-[#26180E] overflow-hidden border-t border-[#623719]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: About Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#8A5834] uppercase block">
                ABOUT PRADEEP TRADING COMPANY
              </span>

              <h2 className="font-serif text-[38px] sm:text-[50px] lg:text-[60px] font-normal leading-[1.08] tracking-tight text-[#26180E]">
                CONNECTING INDIAN
                <br />
                AGRICULTURAL QUALITY
                <br />
                WITH GLOBAL OPPORTUNITY.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#26180E]/80 font-sans leading-relaxed max-w-xl">
              Pradeep Trading Company is grounded in Central India&apos;s primary groundnut belt. We partner directly with growers across Shivpuri and regional mandis, combining field-level selection with multi-spectral optical sorting to supply reliable agricultural commodities to international markets.
            </p>

            <div className="pt-4 border-t border-[#623719]/10 grid grid-cols-2 gap-6 max-w-lg">
              <div className="space-y-1">
                <span className="text-[10px] font-sans uppercase tracking-wider text-[#8A5834] font-semibold block">
                  PROCESSING HUB
                </span>
                <span className="font-serif text-xl text-[#623719]">
                  Bhonti, Shivpuri (M.P.)
                </span>
                <p className="text-xs text-[#26180E]/70 font-sans">
                  Central India Mandi Center
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-sans uppercase tracking-wider text-[#8A5834] font-semibold block">
                  CORE SPECIALIZATION
                </span>
                <span className="font-serif text-xl text-[#623719]">
                  Bold &amp; Java Peanuts
                </span>
                <p className="text-xs text-[#26180E]/70 font-sans">
                  Double-Sortex Cleaned
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="#products"
                className="group inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#623719] hover:text-[#8A5834] transition-colors"
              >
                <span>EXPLORE SOURCED VARIETIES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right: Farm / Harvest Photography */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#F3EBDD] border border-[#623719]/10 shadow-xs">
              <Image
                src="/images/harvest-farmer.webp"
                alt="Direct farm harvest in Madhya Pradesh"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75" />

              <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#F3EBDD] block mb-0.5 font-semibold">
                  DIRECT ORIGIN PROCUREMENT
                </span>
                <div className="font-serif text-xl text-[#FAF7F1] font-normal">
                  Field Selection &amp; Physiological Curing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
