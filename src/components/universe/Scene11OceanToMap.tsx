"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Globe, Anchor, Clock, ArrowUpRight } from "lucide-react";
import { MARKETS, TRADE_CORRIDORS } from "@/data/markets";

export default function Scene11OceanToMap() {
  const [selectedMarket, setSelectedMarket] = useState<string>("Vietnam");

  const activeMarketData = MARKETS.find((m) => m.country === selectedMarket) || MARKETS[0];

  return (
    <section
      id="global-reach"
      className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#FAF7F1] text-[#26180E] border-t border-[#623719]/10"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 text-left">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#8A5834] uppercase block">
            GLOBAL REACH
          </span>

          <h2 className="font-serif text-[38px] sm:text-[50px] lg:text-[60px] font-normal leading-[1.08] tracking-tight text-[#26180E]">
            FROM MUNDRA PORT
            <br />
            TO 35+ GLOBAL DESTINATIONS.
          </h2>

          <p className="text-base sm:text-lg font-sans text-[#26180E]/80 leading-relaxed font-normal pt-1 max-w-2xl">
            Direct intermodal rail and road corridors connect our processing facility in Bhonti, Shivpuri to Mundra Port (INMUN1) and Nhava Sheva (INNSA1) for rapid maritime container dispatch.
          </p>
        </div>

        {/* 19 — Global Reach Hero Visual & Trade Corridors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Visual: Ocean Vessel / Port Departure Photo */}
          <div className="lg:col-span-7 relative h-[360px] sm:h-[440px] rounded-3xl overflow-hidden bg-[#26180E]/5 border border-[#623719]/10 shadow-xs">
            <Image
              src="/images/cargo-ship-ocean.jpg"
              alt="Container vessel navigating ocean route"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#26180E]/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F1] space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F1]/20 backdrop-blur-xs text-[10px] font-sans font-semibold tracking-wider uppercase text-[#F3EBDD]">
                <Anchor className="w-3 h-3 text-[#F3EBDD]" />
                <span>PRIMARY EXPORT GATEWAYS: MUNDRA &amp; NHAVA SHEVA</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF7F1] font-normal">
                Scheduled Container Freight to Major Ports
              </h3>
            </div>
          </div>

          {/* Key Maritime Trade Corridors */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-sans font-semibold tracking-wider text-[#8A5834] uppercase block">
              PRIMARY MARITIME CORRIDORS
            </span>

            <div className="space-y-3">
              {TRADE_CORRIDORS.map((corridor) => (
                <div
                  key={corridor.name}
                  className="p-4 rounded-2xl bg-[#F3EBDD]/40 border border-[#623719]/10 hover:bg-[#F3EBDD]/70 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-sans">
                    <span className="font-bold text-[#623719]">{corridor.name}</span>
                    <span className="text-[#8A5834] font-medium">{corridor.hub}</span>
                  </div>
                  <p className="text-xs text-[#26180E]/75 font-sans mt-1.5 leading-relaxed">
                    {corridor.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {corridor.regions.map((reg) => (
                      <span
                        key={reg}
                        className="text-[10px] font-sans px-2 py-0.5 rounded-md bg-[#FAF7F1] text-[#623719] border border-[#623719]/5"
                      >
                        {reg}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Export Destinations Selector Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#F3EBDD]/30 border border-[#623719]/10 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-sans font-semibold text-[#8A5834] uppercase tracking-wider block">
                DESTINATION NETWORK
              </span>
              <h4 className="font-serif text-2xl text-[#623719] mt-0.5">
                Active Import Corridors
              </h4>
            </div>
            <div className="text-xs font-sans text-[#26180E]/70">
              Selected Port: <strong className="text-[#623719]">{activeMarketData.port}</strong> ({activeMarketData.region})
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {MARKETS.map((m) => {
              const isSelected = m.country === selectedMarket;
              return (
                <button
                  key={m.country}
                  onClick={() => setSelectedMarket(m.country)}
                  className={`px-4 py-2 rounded-full text-xs font-sans font-semibold tracking-wider transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#623719] text-[#FAF7F1] shadow-xs"
                      : "bg-[#FAF7F1] text-[#623719] border border-[#623719]/10 hover:bg-[#F3EBDD]"
                  }`}
                >
                  {m.country}
                </button>
              );
            })}
          </div>

          {activeMarketData.notes && (
            <p className="text-xs font-sans text-[#26180E]/75 italic pt-1">
              Note: {activeMarketData.notes}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
