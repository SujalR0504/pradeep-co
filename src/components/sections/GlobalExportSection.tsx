"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Anchor, Globe, Navigation, ArrowUpRight } from "lucide-react";
import { MARKETS, TRADE_CORRIDORS } from "@/data/markets";

interface DestinationRoute {
  country: string;
  port: string;
  region: string;
  x: number; // SVG coordinate percent (0 - 1000)
  y: number; // SVG coordinate percent (0 - 500)
  transitDays: string;
}

// Actual export destinations only
const DESTINATIONS: DestinationRoute[] = [
  {
    country: "Vietnam",
    port: "Haiphong / Ho Chi Minh",
    region: "Southeast Asia",
    x: 770,
    y: 260,
    transitDays: "12-14 Days",
  },
  {
    country: "Indonesia",
    port: "Jakarta / Surabaya",
    region: "Southeast Asia",
    x: 800,
    y: 340,
    transitDays: "10-12 Days",
  },
  {
    country: "United Arab Emirates",
    port: "Jebel Ali, Dubai",
    region: "Middle East",
    x: 550,
    y: 220,
    transitDays: "4-5 Days",
  },
  {
    country: "Saudi Arabia",
    port: "Jeddah / Dammam",
    region: "Middle East",
    x: 500,
    y: 240,
    transitDays: "6-8 Days",
  },
  {
    country: "Malaysia",
    port: "Port Klang",
    region: "Southeast Asia",
    x: 750,
    y: 310,
    transitDays: "8-10 Days",
  },
  {
    country: "Philippines",
    port: "Manila",
    region: "Southeast Asia",
    x: 840,
    y: 250,
    transitDays: "14-16 Days",
  },
  {
    country: "Netherlands",
    port: "Rotterdam",
    region: "Europe",
    x: 430,
    y: 120,
    transitDays: "22-26 Days",
  },
  {
    country: "United Kingdom",
    port: "Felixstowe",
    region: "Europe",
    x: 400,
    y: 110,
    transitDays: "24-28 Days",
  },
  {
    country: "South Africa",
    port: "Durban",
    region: "Africa",
    x: 530,
    y: 400,
    transitDays: "18-20 Days",
  },
];

// India Origin Point (Mundra Port, Gujarat)
const INDIA_ORIGIN = { x: 630, y: 225 };

export default function GlobalExportSection() {
  const [selectedDest, setSelectedDest] = useState<DestinationRoute>(DESTINATIONS[0]);

  return (
    <section
      id="global-export"
      className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#FAF7F1] text-[#26180E] border-t border-[#623719]/10"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#8A5834] uppercase block">
              GLOBAL MARITIME CORRIDORS // 06
            </span>
            <h2 className="font-serif text-[38px] sm:text-[50px] lg:text-[60px] font-normal leading-[1.08] tracking-tight text-[#26180E]">
              FROM INDIAN SOIL
              <br />
              TO 35+ NATIONS.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base font-sans text-[#26180E]/75 leading-relaxed">
            Intermodal rail links directly connect our processing plant in Bhonti to Mundra Port (INMUN1) for scheduled FCL sailings to global markets.
          </p>
        </div>

        {/* 11 & 12. CLEAN GLOBAL MAP: Warm Brown on Cream, India Highlighted, Thin Animated Routes */}
        <div className="relative w-full rounded-3xl bg-[#F3EBDD]/50 border border-[#623719]/15 p-6 sm:p-10 shadow-xs overflow-hidden">
          {/* Top Map Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#623719]/10">
            <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#623719] uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-[#623719] animate-pulse" />
              <span>ORIGIN: MUNDRA PORT &amp; NHAVA SHEVA (INDIA)</span>
            </div>

            <div className="text-xs font-sans text-[#8A5834]">
              Active Corridor: <strong className="text-[#623719]">{selectedDest.country}</strong> ({selectedDest.port}) • Est. Transit: {selectedDest.transitDays}
            </div>
          </div>

          {/* SVG Clean Map Container */}
          <div className="relative w-full aspect-[16/9] min-h-[340px] max-h-[520px] my-4 flex items-center justify-center">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Subtle linear gradients for maritime shipping routes */}
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8A5834" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#623719" stopOpacity="0.3" />
                </linearGradient>

                <linearGradient id="activeRouteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#623719" stopOpacity="1" />
                  <stop offset="100%" stopColor="#8A5834" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Simplified Warm Brown Continents Silhouette */}
              <g fill="#D8C8B4" opacity="0.6">
                {/* Europe */}
                <path d="M 380 90 Q 440 80 480 120 Q 450 160 410 160 Q 380 130 380 90 Z" />
                {/* Africa */}
                <path d="M 440 180 Q 520 170 540 230 Q 550 320 530 410 Q 470 380 440 280 Z" />
                {/* Asia / Eurasia */}
                <path d="M 500 110 Q 640 80 820 100 Q 860 170 820 250 Q 720 220 620 190 Q 540 170 500 110 Z" />
                {/* Southeast Asia Islands */}
                <path d="M 750 280 Q 820 270 830 330 Q 770 360 740 310 Z" />
                <path d="M 780 340 Q 840 330 830 380 Q 780 380 780 340 Z" />
              </g>

              {/* Highlighted India Subcontinent in Warm Deep Peanut Brown */}
              <path
                d="M 620 180 Q 645 175 660 195 Q 670 240 645 285 Q 625 240 615 210 Z"
                fill="#8A5834"
                opacity="0.85"
                stroke="#623719"
                strokeWidth="1.5"
              />

              {/* Maritime Shipping Route Lines (Thin Animated SVG Curves) */}
              {DESTINATIONS.map((dest) => {
                const isSelected = selectedDest.country === dest.country;
                // Calculate curved bezier midpoint
                const midX = (INDIA_ORIGIN.x + dest.x) / 2 + (dest.y > INDIA_ORIGIN.y ? -20 : 20);
                const midY = (INDIA_ORIGIN.y + dest.y) / 2 + (dest.x > INDIA_ORIGIN.x ? 25 : -25);
                const pathD = `M ${INDIA_ORIGIN.x} ${INDIA_ORIGIN.y} Q ${midX} ${midY} ${dest.x} ${dest.y}`;

                return (
                  <g key={dest.country}>
                    {/* Background track */}
                    <path
                      d={pathD}
                      stroke={isSelected ? "#623719" : "#8A5834"}
                      strokeWidth={isSelected ? 2.5 : 1.2}
                      strokeDasharray={isSelected ? "none" : "3 4"}
                      opacity={isSelected ? 1 : 0.4}
                      fill="none"
                      className="transition-all duration-300"
                    />

                    {/* Small Peanut Marker moving along active route */}
                    {isSelected && (
                      <circle r="4" fill="#623719">
                        <animateMotion
                          path={pathD}
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}

                    {/* Destination Port Node */}
                    <circle
                      cx={dest.x}
                      cy={dest.y}
                      r={isSelected ? 6 : 4}
                      fill={isSelected ? "#623719" : "#8A5834"}
                      stroke="#FAF7F1"
                      strokeWidth="2"
                      className="cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => setSelectedDest(dest)}
                    />

                    {/* Country Label on Map */}
                    <text
                      x={dest.x}
                      y={dest.y - 10}
                      fontSize="9"
                      fontFamily="sans-serif"
                      fontWeight={isSelected ? "bold" : "normal"}
                      fill={isSelected ? "#623719" : "#26180E"}
                      opacity={isSelected ? 1 : 0.75}
                      textAnchor="middle"
                      className="select-none pointer-events-none"
                    >
                      {dest.country}
                    </text>
                  </g>
                );
              })}

              {/* India Origin Anchor Marker */}
              <circle
                cx={INDIA_ORIGIN.x}
                cy={INDIA_ORIGIN.y}
                r="7"
                fill="#623719"
                stroke="#FAF7F1"
                strokeWidth="2.5"
              />
              <text
                x={INDIA_ORIGIN.x}
                y={INDIA_ORIGIN.y - 14}
                fontSize="10"
                fontFamily="sans-serif"
                fontWeight="bold"
                fill="#623719"
                textAnchor="middle"
              >
                INDIA (Mundra)
              </text>
            </svg>
          </div>

          {/* Quick Destination Corridor Switcher */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 pt-4 border-t border-[#623719]/10">
            {DESTINATIONS.slice(0, 5).map((dest) => {
              const active = selectedDest.country === dest.country;
              return (
                <button
                  key={dest.country}
                  onClick={() => setSelectedDest(dest)}
                  className={`p-3 rounded-xl text-left transition-all cursor-pointer ${
                    active
                      ? "bg-[#623719] text-[#FAF7F1] shadow-xs"
                      : "bg-[#FAF7F1]/80 text-[#26180E] hover:bg-[#FAF7F1] border border-[#623719]/10"
                  }`}
                >
                  <span
                    className={`text-[10px] font-sans font-bold uppercase tracking-wider block ${
                      active ? "text-[#F3EBDD]" : "text-[#8A5834]"
                    }`}
                  >
                    {dest.region}
                  </span>
                  <div className="font-serif text-sm font-normal truncate mt-0.5">
                    {dest.country}
                  </div>
                  <span
                    className={`text-[10px] font-mono block truncate ${
                      active ? "text-[#FAF7F1]/80" : "text-[#26180E]/60"
                    }`}
                  >
                    {dest.port}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
