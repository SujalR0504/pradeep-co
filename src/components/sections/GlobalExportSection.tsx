"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Anchor, Globe, Navigation, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface DestinationRoute {
  country: string;
  port: string;
  region: string;
  x: number;
  y: number;
  transitDays: string;
  applicationNote: string;
}

// Confirmed destinations from client data
const DESTINATIONS: DestinationRoute[] = [
  {
    country: "Vietnam",
    port: "Haiphong / Ho Chi Minh",
    region: "Southeast Asia",
    x: 770,
    y: 260,
    transitDays: "12-14 Days",
    applicationNote: "Snack processing and confectionery kernels",
  },
  {
    country: "Indonesia",
    port: "Jakarta / Surabaya",
    region: "Southeast Asia",
    x: 800,
    y: 340,
    transitDays: "10-12 Days",
    applicationNote: "High demand for culinary and roasting grades",
  },
  {
    country: "United Arab Emirates",
    port: "Jebel Ali, Dubai",
    region: "Middle East",
    x: 550,
    y: 220,
    transitDays: "4-5 Days",
    applicationNote: "Regional re-export hub and retail nut packs",
  },
  {
    country: "Saudi Arabia",
    port: "Jeddah / Dammam",
    region: "Middle East",
    x: 500,
    y: 240,
    transitDays: "6-8 Days",
    applicationNote: "Regular bold and in-shell groundnut shipments",
  },
  {
    country: "Malaysia",
    port: "Port Klang",
    region: "Southeast Asia",
    x: 750,
    y: 310,
    transitDays: "8-10 Days",
    applicationNote: "Snack manufacturing and confectionery grade kernels",
  },
  {
    country: "Philippines",
    port: "Manila",
    region: "Southeast Asia",
    x: 840,
    y: 250,
    transitDays: "14-16 Days",
    applicationNote: "Fried nut and snack processor distribution",
  },
  {
    country: "Netherlands",
    port: "Rotterdam",
    region: "Europe",
    x: 430,
    y: 120,
    transitDays: "22-26 Days",
    applicationNote: "Aflatoxin < 4 ppb certified lots",
  },
  {
    country: "United Kingdom",
    port: "Felixstowe",
    region: "Europe",
    x: 400,
    y: 110,
    transitDays: "24-28 Days",
    applicationNote: "Bakery and specialty nut butter destinations",
  },
];

const INDIA_ORIGIN = { x: 630, y: 225 };

// Signature 3 Storyboard Stages
const ZOOM_STAGES = [
  { label: "01 PEANUT", image: "/images/single-kernel-cutout.png", desc: "Selected single kernel" },
  { label: "02 PROCESSING", image: "/images/sortex-machine.webp", desc: "Shivpuri optical sorting" },
  { label: "03 WAREHOUSE", image: "/images/peanut-heap-warehouse.jpg", desc: "Climate-staged lots" },
  { label: "04 CONTAINER", image: "/images/container-loading-dock.jpg", desc: "Mundra Port stuffing" },
];

export default function GlobalExportSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mapSvgRef = useRef<SVGSVGElement>(null);
  const [selectedDest, setSelectedDest] = useState<DestinationRoute>(DESTINATIONS[0]);
  const [storyStage, setStoryStage] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Camera zoom out animation on map entrance
      if (mapSvgRef.current) {
        gsap.fromTo(
          mapSvgRef.current,
          { scale: 1.15, opacity: 0.7 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
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
      id="global-export"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#FCFAF5] text-[#2D241D] border-t border-[#5C341B]/12"
    >
      <div className="max-w-7xl mx-auto w-full space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#5C341B]/12 pb-6">
          <div className="space-y-3">
            <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-[#A4774C] uppercase block">
              09 // GLOBAL MARITIME EXPORT
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#5C341B] font-normal tracking-tight leading-[1.06]">
              INDIAN PEANUTS.
              <br />
              GLOBAL REACH.
            </h2>
          </div>

          <p className="max-w-md text-sm font-sans text-[#2D241D]/75 leading-relaxed">
            From our processing hub in Bhonti, Shivpuri through Mundra Port and Nhava Sheva, our peanuts sail directly to buyers across 35+ countries.
          </p>
        </div>

        {/* SIGNATURE ANIMATION 3: PEANUT TO WORLD SEQUENCE */}
        <div className="rounded-3xl bg-[#F5EFE5]/50 border border-[#5C341B]/12 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#5C341B]/10 pb-4">
            <div>
              <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#A4774C] uppercase block">
                SIGNATURE STORY 03 // PEANUT TO WORLD
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#5C341B]">
                THE JOURNEY FROM SOIL TO SEA CONTAINER
              </h3>
            </div>

            {/* Quick 4-step selector */}
            <div className="flex items-center gap-2">
              {ZOOM_STAGES.map((st, i) => (
                <button
                  key={st.label}
                  onClick={() => setStoryStage(i)}
                  className={`px-3 py-1 rounded-full text-xs font-sans font-bold transition-all cursor-pointer ${
                    storyStage === i
                      ? "bg-[#5C341B] text-[#FCFAF5]"
                      : "bg-[#FCFAF5] text-[#2D241D]/60 hover:text-[#5C341B]"
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ZOOM_STAGES.map((st, i) => {
              const isActive = storyStage === i;
              return (
                <div
                  key={st.label}
                  onClick={() => setStoryStage(i)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#FCFAF5] border-[#5C341B] shadow-sm"
                      : "bg-[#FCFAF5]/60 border-[#5C341B]/10 hover:bg-[#FCFAF5]"
                  }`}
                >
                  <div className="relative w-full h-28 rounded-xl bg-[#F5EFE5] overflow-hidden mb-2.5">
                    <Image
                      src={st.image}
                      alt={st.label}
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#A4774C] block uppercase">
                    {st.label}
                  </span>
                  <p className="text-xs font-sans text-[#2D241D]/80">
                    {st.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global Map: Warm Brown on Cream, India Highlighted, Thin Animated Routes */}
        <div className="relative w-full rounded-3xl bg-[#F5EFE5]/70 border border-[#5C341B]/15 p-6 sm:p-10 shadow-xs overflow-hidden">
          {/* Top Route Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#5C341B]/12">
            <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#5C341B] uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5C341B] animate-pulse" />
              <span>ORIGIN: MUNDRA PORT (INMUN1) &amp; NHAVA SHEVA</span>
            </div>

            <div className="text-xs font-sans text-[#754522]">
              Destination: <strong className="text-[#5C341B]">{selectedDest.country}</strong> ({selectedDest.port}) &bull; Transit: {selectedDest.transitDays}
            </div>
          </div>

          {/* SVG Clean Map Container */}
          <div className="relative w-full aspect-[16/9] min-h-[340px] max-h-[500px] my-6 flex items-center justify-center overflow-hidden">
            <svg
              ref={mapSvgRef}
              viewBox="0 0 1000 500"
              className="w-full h-full will-change-transform"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Continents Silhouettes in Natural Warm Earth */}
              <g fill="#A4774C" opacity="0.3">
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

              {/* Highlighted India Subcontinent in Deep Peanut Brown */}
              <path
                d="M 620 180 Q 645 175 660 195 Q 670 240 645 285 Q 625 240 615 210 Z"
                fill="#5C341B"
                opacity="0.9"
                stroke="#2D241D"
                strokeWidth="1.5"
              />

              {/* Shipping Routes (Thin brown lines, cream background, small markers) */}
              {DESTINATIONS.map((dest) => {
                const isSelected = selectedDest.country === dest.country;
                const midX = (INDIA_ORIGIN.x + dest.x) / 2 + (dest.y > INDIA_ORIGIN.y ? -20 : 20);
                const midY = (INDIA_ORIGIN.y + dest.y) / 2 + (dest.x > INDIA_ORIGIN.x ? 25 : -25);
                const pathD = `M ${INDIA_ORIGIN.x} ${INDIA_ORIGIN.y} Q ${midX} ${midY} ${dest.x} ${dest.y}`;

                return (
                  <g key={dest.country}>
                    <path
                      d={pathD}
                      stroke={isSelected ? "#5C341B" : "#754522"}
                      strokeWidth={isSelected ? 2.5 : 1.2}
                      strokeDasharray={isSelected ? "none" : "3 4"}
                      opacity={isSelected ? 1 : 0.45}
                      fill="none"
                      className="transition-all duration-300"
                    />

                    {/* Peanut marker on active route */}
                    {isSelected && (
                      <circle r="4" fill="#5C341B" stroke="#FCFAF5" strokeWidth="1.5">
                        <animateMotion path={pathD} dur="3.5s" repeatCount="indefinite" />
                      </circle>
                    )}

                    {/* Destination Marker */}
                    <circle
                      cx={dest.x}
                      cy={dest.y}
                      r={isSelected ? 6 : 4}
                      fill={isSelected ? "#5C341B" : "#754522"}
                      stroke="#FCFAF5"
                      strokeWidth="2"
                      className="cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => setSelectedDest(dest)}
                    />

                    <text
                      x={dest.x}
                      y={dest.y - 10}
                      fontSize="9"
                      fontFamily="sans-serif"
                      fontWeight={isSelected ? "bold" : "normal"}
                      fill={isSelected ? "#5C341B" : "#2D241D"}
                      opacity={isSelected ? 1 : 0.75}
                      textAnchor="middle"
                      className="select-none pointer-events-none"
                    >
                      {dest.country}
                    </text>
                  </g>
                );
              })}

              {/* India Origin Marker */}
              <circle
                cx={INDIA_ORIGIN.x}
                cy={INDIA_ORIGIN.y}
                r="7"
                fill="#5C341B"
                stroke="#FCFAF5"
                strokeWidth="2.5"
              />
              <text
                x={INDIA_ORIGIN.x}
                y={INDIA_ORIGIN.y - 14}
                fontSize="10"
                fontFamily="sans-serif"
                fontWeight="bold"
                fill="#5C341B"
                textAnchor="middle"
              >
                INDIA (Mundra)
              </text>
            </svg>
          </div>

          {/* Quick Destination Pill Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 pt-4 border-t border-[#5C341B]/12">
            {DESTINATIONS.map((dest) => {
              const active = selectedDest.country === dest.country;
              return (
                <button
                  key={dest.country}
                  onClick={() => setSelectedDest(dest)}
                  className={`p-2.5 rounded-xl text-left transition-all cursor-pointer ${
                    active
                      ? "bg-[#5C341B] text-[#FCFAF5] shadow-xs"
                      : "bg-[#FCFAF5] text-[#2D241D] hover:bg-[#F5EFE5] border border-[#5C341B]/10"
                  }`}
                >
                  <span
                    className={`text-[9px] font-sans font-bold uppercase tracking-wider block truncate ${
                      active ? "text-[#F5EFE5]" : "text-[#A4774C]"
                    }`}
                  >
                    {dest.region}
                  </span>
                  <div className="font-serif text-xs font-semibold truncate mt-0.5">
                    {dest.country}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
