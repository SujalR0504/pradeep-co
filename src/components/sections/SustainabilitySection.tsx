import React from "react";
import Image from "next/image";
import { Sprout, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function SustainabilitySection() {
  return (
    <section id="sustainability" className="py-24 lg:py-32 bg-[#FFFDF8] text-[#2B1A0F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8A572F]">
            <span className="w-6 h-[1.5px] bg-[#8A572F]" />
            <span>Ecological Lifecycle</span>
          </div>
          <h2 className="font-serif font-light text-editorial-heading leading-[1.02] tracking-tight text-[#2B1A0F]">
            BETTER AGRICULTURE.
            <br />
            <span className="italic font-normal text-[#74431F]">BETTER FUTURE.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#7D6B5D] font-light leading-relaxed">
            Groundnuts are naturally regenerative legumes. Through their unique botanical symbiosis, they enrich agricultural soils with organic nitrogen, thrive in semi-arid conditions, and produce zero-waste harvests.
          </p>
        </div>

        {/* Feature Hero Image: Soil, Roots, Blossoms & Underground Pods */}
        <div className="relative aspect-[21/9] min-h-[300px] w-full rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(43,26,15,0.08)] border border-[#E8DDCB] mb-16 group">
          <Image
            src="/images/sustainability-soil.webp"
            alt="Natural botanical lifecycle of groundnut plant from soil to harvest"
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B1A0F]/80 via-transparent to-black/20" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between text-white gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF7A]">
                Botanical Symbiosis
              </span>
              <h3 className="font-serif text-xl sm:text-3xl font-light mt-1 text-[#FFFDF8]">
                Natural Atmospheric Nitrogen Fixation
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#F7F1E7]/80 max-w-md font-light">
              Naturally enriches the topsoil biology, diminishing the need for synthetic chemical inputs and protecting groundwater integrity.
            </p>
          </div>
        </div>

        {/* Botanical 5-Step Flow: Soil -> Roots -> Plant -> Groundnut -> Harvest */}
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-[0.2em] text-[#8A572F] font-semibold">
            The Botanical Groundnut Cycle
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {COMPANY_INFO.sustainabilityPillars.map((item, idx) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-[#FAF6EE] border border-[#E8DDCB] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-serif font-bold text-[#8A572F] tracking-widest">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#FFFDF8] text-[#5A3215] border border-[#E8DDCB]">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg text-[#2B1A0F]">
                    {item.title}
                  </h4>
                </div>

                <p className="text-xs text-[#7D6B5D] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
