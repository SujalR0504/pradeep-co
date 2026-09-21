"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 10 — Minimal Hero Load Animation (0.6 - 1.0s total)
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.15 }
      )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        );

      // 11 — Hero Scroll: Subtle Video Scale 1.00 -> 1.04, gentle headline upward shift
      gsap.to(videoRef.current, {
        scale: 1.04,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(contentRef.current, {
        y: -50,
        opacity: 0.6,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full h-[92vh] sm:h-[95vh] lg:h-screen min-h-[640px] flex items-end overflow-hidden bg-[#FAF7F1]"
    >
      {/* 6 & 7 — Real Optimized Factory Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          ref={videoRef}
          src="/videos/pradeep_peanut_hero_background.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center transform origin-center"
        />

        {/* 7 — Subtle 15-25% Warm Overlay so the factory machinery and workers remain clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#26180E]/75 via-[#26180E]/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[#623719]/15 mix-blend-multiply pointer-events-none" />
      </div>

      {/* 8 & 9 — Hero Content: Positioned lower-left with clear contrast */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pb-16 sm:pb-20 lg:pb-24"
      >
        <div className="max-w-3xl space-y-6 text-left">
          {/* Small Professional Label */}
          <div className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-[0.18em] text-[#F3EBDD] uppercase">
            <span>BHONTI, SHIVPURI (M.P.) • AGRICULTURAL EXPORT</span>
          </div>

          {/* 8 — Primary Headline in DM Serif Display */}
          <h1
            ref={headlineRef}
            className="font-serif text-[42px] sm:text-[58px] lg:text-[76px] font-normal leading-[1.04] tracking-tight text-[#FAF7F1]"
          >
            FROM INDIAN SOIL
            <br />
            TO GLOBAL MARKETS.
          </h1>

          {/* Supporting Text in Manrope */}
          <p
            ref={subtextRef}
            className="text-base sm:text-lg font-sans text-[#F3EBDD]/90 max-w-xl leading-relaxed font-normal"
          >
            Premium groundnuts and peanuts sourced, processed and prepared for markets around the world.
          </p>

          {/* CTAs in Manrope */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FAF7F1] text-[#623719] hover:bg-[#F3EBDD] text-xs font-sans font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              <span>EXPLORE OUR PRODUCTS</span>
              <ArrowRight className="w-4 h-4 text-[#623719]" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-transparent border border-[#FAF7F1]/50 text-[#FAF7F1] hover:bg-[#FAF7F1]/10 text-xs font-sans font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>GET A QUOTE</span>
              <ArrowUpRight className="w-4 h-4 text-[#FAF7F1]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
