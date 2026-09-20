"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Anchor, Compass, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MARKETS, TRADE_CORRIDORS } from "@/data/markets";

export default function OceanToWorldSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const routesRef = useRef<SVGPathElement[]>([]);
  const dotsRef = useRef<SVGCircleElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Elegant route drawing
      routesRef.current.forEach((path) => {
        if (!path) return;
        const length = path.getTotalLength ? path.getTotalLength() : 400;
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.8,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        });
      });

      // Destination dots appear cleanly
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return;
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            delay: 0.6 + i * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addRouteRef = (el: SVGPathElement | null) => {
    if (el && !routesRef.current.includes(el)) {
      routesRef.current.push(el);
    }
  };

  const addDotRef = (el: SVGCircleElement | null) => {
    if (el && !dotsRef.current.includes(el)) {
      dotsRef.current.push(el);
    }
  };

  return (
    <section
      id="ocean-to-world"
      ref={containerRef}
      className="relative w-full py-24 lg:py-32 bg-[#FBF8F2] text-[#2E2117] overflow-hidden border-t border-[rgba(112,66,31,0.18)]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[rgba(112,66,31,0.18)] pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-[#70421F]">
              <Compass className="w-3.5 h-3.5 text-[#70421F]" />
              <span>International Trade Corridors</span>
            </div>
            <h2 className="font-serif font-normal text-3xl sm:text-5xl text-[#2E2117]">
              FROM INDIA, TO GLOBAL SEAS
            </h2>
          </div>
          <p className="text-sm text-[#2E2117]/75 font-sans font-light max-w-md">
            Established trade links connecting Mundra and Nhava Sheva gateway ports to commercial hubs across Southeast Asia, the Middle East, and Europe.
          </p>
        </div>

        {/* ELEGANT TRADE PUBLICATION MAP (Light Ivory Background, Brown Map, Thin Lines) */}
        <div className="rounded-3xl bg-[#F4EBDD] border border-[rgba(112,66,31,0.18)] p-6 sm:p-10 shadow-[0_12px_35px_rgba(112,66,31,0.06)] mb-12">
          <div className="relative w-full aspect-[21/9] min-h-[320px] sm:min-h-[420px] bg-[#FFFDF8] rounded-2xl border border-[rgba(112,66,31,0.15)] flex items-center justify-center p-4 overflow-hidden">
            <svg
              viewBox="0 0 1000 480"
              className="w-full h-full text-[rgba(112,66,31,0.15)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Latitude / Longitude Subtle Lines */}
              <line x1="0" y1="120" x2="1000" y2="120" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
              <line x1="0" y1="240" x2="1000" y2="240" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
              <line x1="0" y1="360" x2="1000" y2="360" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />

              {/* Muted Beige Secondary Continents */}
              <path
                d="M480,120 Q520,100 580,110 T680,130 Q720,160 740,200 Q710,240 680,260 Q650,220 630,220 Q600,240 590,270 Q560,280 540,260 Z"
                fill="#E8D7C0"
              />
              <path
                d="M460,180 Q510,190 530,220 Q520,280 510,330 Q490,370 470,390 Q450,330 440,270 Q440,220 460,180 Z"
                fill="#E8D7C0"
              />
              <path
                d="M620,180 Q660,200 680,240 Q660,280 630,300 Q610,260 620,180 Z"
                fill="#D4B58A"
              />
              <path
                d="M680,240 Q750,260 780,310 Q740,360 700,340 Q680,300 680,240 Z"
                fill="#E8D7C0"
              />

              {/* INDIA ORIGIN HUB (Highlighted with darker brown) */}
              <g>
                <circle cx="635" cy="240" r="16" fill="#70421F" fillOpacity="0.15" />
                <circle cx="635" cy="240" r="8" fill="#70421F" fillOpacity="0.3" />
                <circle cx="635" cy="240" r="4.5" fill="#70421F" />
                <text x="635" y="215" textAnchor="middle" fill="#2E2117" fontSize="12" fontFamily="serif" fontWeight="600" letterSpacing="0.1em">
                  INDIA (ORIGIN)
                </text>
                <text x="635" y="260" textAnchor="middle" fill="#70421F" fontSize="9.5" fontFamily="monospace">
                  Bhonti / Port Mundra
                </text>
              </g>

              {/* THIN BROWN ROUTE LINES */}
              {/* Route 1: India -> Southeast Asia */}
              <path
                ref={addRouteRef}
                d="M635,240 Q700,270 760,290"
                stroke="#70421F"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <circle ref={addDotRef} cx="760" cy="290" r="4.5" fill="#70421F" />
              <text x="775" y="295" fill="#2E2117" fontSize="11" fontFamily="sans-serif">Southeast Asia</text>

              {/* Route 2: India -> Middle East & GCC */}
              <path
                ref={addRouteRef}
                d="M635,240 Q600,225 560,220"
                stroke="#70421F"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <circle ref={addDotRef} cx="560" cy="220" r="4.5" fill="#70421F" />
              <text x="460" y="222" fill="#2E2117" fontSize="11" fontFamily="sans-serif">Middle East &amp; GCC</text>

              {/* Route 3: India -> European Ports */}
              <path
                ref={addRouteRef}
                d="M635,240 Q540,190 480,150"
                stroke="#70421F"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <circle ref={addDotRef} cx="480" cy="150" r="4.5" fill="#70421F" />
              <text x="390" y="145" fill="#2E2117" fontSize="11" fontFamily="sans-serif">European Gateways</text>

              {/* Route 4: India -> East Africa */}
              <path
                ref={addRouteRef}
                d="M635,240 Q570,300 530,340"
                stroke="#70421F"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <circle ref={addDotRef} cx="530" cy="340" r="4.5" fill="#70421F" />
              <text x="435" y="355" fill="#2E2117" fontSize="11" fontFamily="sans-serif">African Corridors</text>
            </svg>
          </div>

          {/* Regional Corridors Summary Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {TRADE_CORRIDORS.map((c) => (
              <div
                key={c.name}
                className="p-4 rounded-xl bg-[#FFFFFF] border border-[rgba(112,66,31,0.15)] space-y-1.5"
              >
                <span className="text-[10px] font-mono uppercase text-[#70421F] font-semibold block">
                  {c.hub}
                </span>
                <h4 className="font-serif text-lg text-[#2E2117] font-medium">
                  {c.name}
                </h4>
                <p className="text-xs text-[#2E2117]/70 font-sans font-light leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Editable Destinations List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl text-[#2E2117]">
              Regional Destination Database
            </h3>
            <span className="text-xs font-mono text-[#70421F]/70">
              * Editable per client shipping manifests
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {MARKETS.map((m) => (
              <div
                key={m.country}
                className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[rgba(112,66,31,0.15)] text-xs"
              >
                <span className="text-[9px] font-mono uppercase text-[#70421F] block">
                  {m.region}
                </span>
                <span className="font-medium text-sm text-[#2E2117] block mt-0.5">
                  {m.country}
                </span>
                {m.port && (
                  <span className="text-[11px] text-[#2E2117]/60 block mt-1">
                    {m.port}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
