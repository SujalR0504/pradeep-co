import React from "react";
import { STATS } from "@/data/stats";

export default function StatsSection() {
  return (
    <section className="py-20 bg-[#FAF6EE] border-y border-[#E8DDCB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              className="space-y-2 text-center sm:text-left border-l-2 border-[#8A572F]/30 pl-4 sm:pl-6"
            >
              <div className="flex items-baseline gap-1 justify-center sm:justify-start">
                <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#5A3215] tracking-tight">
                  {stat.value}
                </span>
                {stat.isPlaceholder && (
                  <span
                    className="text-[10px] uppercase font-bold text-[#8A572F] tracking-widest px-1.5 py-0.5 rounded bg-[#FFFDF8] border border-[#E8DDCB]"
                    title="Editable client metric placeholder"
                  >
                    Data
                  </span>
                )}
              </div>

              <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2B1A0F]">
                {stat.label}
              </h4>

              <p className="text-xs text-[#7D6B5D] font-light leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
