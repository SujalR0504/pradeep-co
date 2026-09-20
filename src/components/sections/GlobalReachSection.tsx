"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, Anchor, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MARKETS, TRADE_CORRIDORS } from "@/data/markets";

export default function GlobalReachSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const indiaBeaconRef = useRef<SVGGElement>(null);
  const tradeRoutesRef = useRef<SVGPathElement[]>([]);
  const destinationDotsRef = useRef<SVGCircleElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. India Origin Beacon Pulse
      if (indiaBeaconRef.current) {
        gsap.fromTo(
          indiaBeaconRef.current,
          { scale: 0.5, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.0,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
            },
          }
        );
      }

      // 2. Animated Trade Routes travelling outward from India
      tradeRoutesRef.current.forEach((path) => {
        if (!path) return;
        const length = path.getTotalLength ? path.getTotalLength() : 400;

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 0.9,
        });

        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2.0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 65%",
          },
        });
      });

      // 3. Destination Dots bloom as routes arrive
      destinationDotsRef.current.forEach((dot, idx) => {
        if (!dot) return;
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            delay: 0.8 + idx * 0.2,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 65%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addRouteRef = (el: SVGPathElement | null) => {
    if (el && !tradeRoutesRef.current.includes(el)) {
      tradeRoutesRef.current.push(el);
    }
  };

  const addDotRef = (el: SVGCircleElement | null) => {
    if (el && !destinationDotsRef.current.includes(el)) {
      destinationDotsRef.current.push(el);
    }
  };

  return (
    <section
      id="markets"
      ref={containerRef}
      className="py-24 lg:py-32 bg-[#2B1A0F] text-[#FFFDF8] relative overflow-hidden"
    >
      {/* Background Graphic Watermark */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="/images/shipping-port.webp"
          alt="Ocean shipping background"
          fill
          className="object-cover mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-[#2B1A0F]/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF7A]">
            <span className="w-6 h-[1.5px] bg-[#D4AF7A]" />
            <span>International Logistics & Trade</span>
          </div>
          <h2 className="font-serif font-light text-editorial-heading leading-[1.02] tracking-tight text-[#FFFDF8]">
            FROM INDIA.
            <br />
            <span className="italic font-normal text-[#D4AF7A]">TO THE WORLD.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F7F1E7]/80 font-light leading-relaxed">
            Strategically positioned in Central India with efficient multimodal transit corridors to major gateway ports (Mundra, Kandla, Nhava Sheva). We facilitate sea-freight export containers across established global commercial lanes.
          </p>
        </div>

        {/* Minimalist Interactive Map & Hub Display */}
        <div className="rounded-3xl bg-[#3F2613]/60 border border-[#8A572F]/30 p-6 sm:p-10 mb-16 backdrop-blur-md">
          {/* World Trade Visualization SVG */}
          <div className="relative w-full aspect-[21/9] min-h-[300px] sm:min-h-[420px] flex items-center justify-center overflow-hidden rounded-2xl bg-[#23140A]/80 border border-[#8A572F]/20 p-4">
            <svg
              viewBox="0 0 1000 480"
              className="w-full h-full text-[#8A572F]/30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Latitude / Longitude subtle grid lines */}
              <line x1="0" y1="120" x2="1000" y2="120" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
              <line x1="0" y1="240" x2="1000" y2="240" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
              <line x1="0" y1="360" x2="1000" y2="360" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />

              <line x1="250" y1="0" x2="250" y2="480" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
              <line x1="500" y1="0" x2="500" y2="480" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
              <line x1="750" y1="0" x2="750" y2="480" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />

              {/* Simplified Continent Silhouettes */}
              <path
                d="M480,120 Q520,100 580,110 T680,130 Q720,160 740,200 Q710,240 680,260 Q650,220 630,220 Q600,240 590,270 Q560,280 540,260 Z"
                fill="#5A3215"
                opacity="0.35"
              />
              <path
                d="M460,180 Q510,190 530,220 Q520,280 510,330 Q490,370 470,390 Q450,330 440,270 Q440,220 460,180 Z"
                fill="#5A3215"
                opacity="0.3"
              />
              <path
                d="M620,180 Q660,200 680,240 Q660,280 630,300 Q610,260 620,180 Z"
                fill="#D4AF7A"
                opacity="0.2"
              />
              <path
                d="M680,240 Q750,260 780,310 Q740,360 700,340 Q680,300 680,240 Z"
                fill="#5A3215"
                opacity="0.25"
              />

              {/* INDIA ORIGIN HUB BEACON */}
              <g ref={indiaBeaconRef} className="cursor-pointer">
                <circle cx="635" cy="240" r="22" fill="#D4AF7A" fillOpacity="0.18" className="animate-ping" />
                <circle cx="635" cy="240" r="12" fill="#D4AF7A" fillOpacity="0.4" />
                <circle cx="635" cy="240" r="6" fill="#D4AF7A" />
                <circle cx="635" cy="240" r="2.5" fill="#2B1A0F" />
                <text x="635" y="215" textAnchor="middle" fill="#FFFDF8" fontSize="12" fontWeight="bold" letterSpacing="0.12em">
                  INDIA (ORIGIN)
                </text>
                <text x="635" y="262" textAnchor="middle" fill="#D4AF7A" fontSize="9.5" letterSpacing="0.05em">
                  Bhonti, Shivpuri / Port Mundra
                </text>
              </g>

              {/* ANIMATED MARITIME TRADE ROUTES */}
              {/* Route 1: India -> Southeast Asia */}
              <path
                ref={addRouteRef}
                d="M635,240 Q700,270 760,290"
                stroke="#D4AF7A"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="will-change-transform"
              />
              <circle ref={addDotRef} cx="760" cy="290" r="5" fill="#D4AF7A" />
              <text x="770" y="295" fill="#FFFDF8" fontSize="11" opacity="0.95">Southeast Asia Hub</text>

              {/* Route 2: India -> Middle East & GCC */}
              <path
                ref={addRouteRef}
                d="M635,240 Q600,225 560,220"
                stroke="#D4AF7A"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="will-change-transform"
              />
              <circle ref={addDotRef} cx="560" cy="220" r="5" fill="#D4AF7A" />
              <text x="475" y="222" fill="#FFFDF8" fontSize="11" opacity="0.95">Middle East &amp; GCC</text>

              {/* Route 3: India -> Europe Gateway */}
              <path
                ref={addRouteRef}
                d="M635,240 Q540,190 480,150"
                stroke="#D4AF7A"
                strokeWidth="2"
                strokeLinecap="round"
                className="will-change-transform"
              />
              <circle ref={addDotRef} cx="480" cy="150" r="5" fill="#D4AF7A" />
              <text x="410" y="145" fill="#FFFDF8" fontSize="11" opacity="0.9">European Ports</text>

              {/* Route 4: India -> East Africa */}
              <path
                ref={addRouteRef}
                d="M635,240 Q570,300 530,340"
                stroke="#D4AF7A"
                strokeWidth="2"
                strokeLinecap="round"
                className="will-change-transform"
              />
              <circle ref={addDotRef} cx="530" cy="340" r="5" fill="#D4AF7A" />
              <text x="450" y="355" fill="#FFFDF8" fontSize="11" opacity="0.9">African Corridor</text>
            </svg>
          </div>

          {/* Trade Corridors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {TRADE_CORRIDORS.map((corridor) => (
              <div
                key={corridor.name}
                className="p-5 rounded-2xl bg-[#2B1A0F]/60 border border-[#8A572F]/30 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase tracking-wider text-[#D4AF7A] font-semibold">
                    {corridor.hub}
                  </div>
                  <Anchor className="w-4 h-4 text-[#8A572F]" />
                </div>
                <h4 className="font-serif text-lg text-[#FFFDF8]">
                  {corridor.name}
                </h4>
                <p className="text-xs text-[#F7F1E7]/70 font-light leading-relaxed">
                  {corridor.description}
                </p>
                <div className="pt-2 border-t border-[#8A572F]/20 flex flex-wrap gap-1.5">
                  {corridor.regions.map((reg) => (
                    <span
                      key={reg}
                      className="text-[11px] px-2 py-0.5 rounded bg-[#3F2613] text-[#D4AF7A] border border-[#8A572F]/30"
                    >
                      {reg}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Editable Markets List */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl text-[#FFFDF8]">
                Regional Export Inquiries &amp; Port Linkages
              </h3>
              <p className="text-xs text-[#F7F1E7]/60 mt-1">
                Editable destination database (markets.ts) — Configurable per client shipping authorizations.
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4AF7A] text-[#2B1A0F] font-semibold text-xs tracking-wider uppercase hover:bg-[#FFFDF8] transition-colors"
            >
              <span>Inquire for Your Country</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {MARKETS.map((market) => (
              <div
                key={market.country}
                className={`p-4 rounded-xl border transition-all ${
                  market.active
                    ? "bg-[#3F2613]/50 border-[#8A572F]/50 text-[#FFFDF8]"
                    : "bg-[#23140A]/40 border-white/5 text-[#F7F1E7]/50"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs uppercase tracking-wider text-[#D4AF7A] font-medium">
                    {market.region}
                  </span>
                  {market.active && (
                    <span className="w-2 h-2 rounded-full bg-[#25D366]" title="Active Route" />
                  )}
                </div>
                <div className="font-medium text-sm text-[#FFFDF8]">{market.country}</div>
                {market.port && (
                  <div className="text-[11px] text-[#F7F1E7]/60 mt-1 flex items-center gap-1">
                    <Anchor className="w-3 h-3 text-[#8A572F]" />
                    <span>{market.port}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
