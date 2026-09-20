import React from "react";
import Link from "next/link";
import { ShieldCheck, Sprout, Scale, PackageCheck, MessageSquareCheck, Handshake, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

const ICONS = [
  ShieldCheck,
  Sprout,
  Scale,
  PackageCheck,
  MessageSquareCheck,
  Handshake
];

export default function WhyPartnerSection() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-[#FAF6EE] text-[#2B1A0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8A572F]">
            <span className="w-6 h-[1.5px] bg-[#8A572F]" />
            <span>Strategic Value Proposition</span>
          </div>
          <h2 className="font-serif font-light text-editorial-heading leading-[1.02] tracking-tight text-[#2B1A0F]">
            WHY PARTNER WITH US
          </h2>
          <p className="text-base sm:text-lg text-[#7D6B5D] font-light leading-relaxed">
            International agricultural trade demands dependable sourcing, rigorous quality controls, and transparent execution. Here is what anchors our buyer relationships.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPANY_INFO.positioningPillars.map((pillar, idx) => {
            const IconComponent = ICONS[idx % ICONS.length];

            return (
              <div
                key={pillar.number}
                className="group p-8 rounded-2xl bg-[#FFFDF8] border border-[#E8DDCB] transition-all duration-300 hover:border-[#8A572F] hover:shadow-[0_12px_30px_rgba(43,26,15,0.06)] flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF6EE] border border-[#E8DDCB] flex items-center justify-center text-[#5A3215] group-hover:bg-[#5A3215] group-hover:text-[#FFFDF8] transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-2xl text-[#8A572F]/50">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#2B1A0F] group-hover:text-[#5A3215] transition-colors">
                    {pillar.title}
                  </h3>

                  <div className="text-xs uppercase tracking-wider text-[#8A572F] font-semibold">
                    {pillar.summary}
                  </div>

                  <p className="text-sm text-[#7D6B5D] font-light leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8DDCB]/60 text-xs text-[#8A572F] font-medium flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>Commitment to Standards</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-[#5A3215] text-[#FFFDF8] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-2xl text-[#FFFDF8]">
              Ready to Discuss Contract Volume & Sizing?
            </h4>
            <p className="text-xs sm:text-sm text-[#F7F1E7]/80 font-light">
              Speak directly with our export desk for current mandi rates and shipping schedules.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFFDF8] text-[#2B1A0F] font-semibold text-xs tracking-wider uppercase hover:bg-[#F7F1E7] transition-all shadow-md flex-shrink-0"
          >
            <span>Start Inquiry</span>
            <ArrowUpRight className="w-4 h-4 text-[#8A572F]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
