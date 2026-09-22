"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // MAKKS-inspired smooth entrance timeline:
      // 0 sec: video visible (already playing)
      // 0.3 sec: logo appears
      // 0.6 sec: headline reveals
      // 0.9 sec: supporting text appears
      // 1.1 sec: CTA appears
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        logoRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.3 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 25, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
          { opacity: 1, y: 0, clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)", duration: 0.65 },
          0.6
        )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.55 },
          0.9
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.55 },
          1.1
        );

      // Controlled subtle scroll parallax
      if (videoRef.current) {
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
      }

      if (contentRef.current) {
        gsap.to(contentRef.current, {
          y: -40,
          opacity: 0.65,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full h-[92vh] sm:h-[96vh] lg:h-screen min-h-[640px] flex items-end overflow-hidden bg-[#FFFDF9]"
    >
      {/* 04 — Full-Width Factory Background Video */}
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

        {/* Very subtle warm brown/cream overlay — the factory remains clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D241D]/85 via-[#2D241D]/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[#5C341B]/15 mix-blend-multiply pointer-events-none" />
      </div>

      {/* Hero Content: Positioned lower-left with clear contrast */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pb-16 sm:pb-20 lg:pb-24"
      >
        <div className="max-w-3xl space-y-6 text-left">
          {/* Logo badge / origin mark (0.3s) */}
          <div
            ref={logoRef}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FCFAF5]/15 backdrop-blur-xs border border-[#FCFAF5]/25 text-xs font-sans font-semibold tracking-[0.18em] text-[#F5EFE5] uppercase"
          >
            <div className="w-4 h-4 rounded bg-[#5C341B] flex items-center justify-center text-[10px] font-serif font-bold text-[#FCFAF5]">
              P
            </div>
            <span>PRADEEP TRADING COMPANY • BHONTI, SHIVPURI (M.P.)</span>
          </div>

          {/* Headline in DM Serif Display (0.6s) */}
          <h1
            ref={headlineRef}
            className="font-serif text-[42px] sm:text-[58px] lg:text-[76px] font-normal leading-[1.04] tracking-tight text-[#FCFAF5]"
          >
            FROM INDIAN SOIL
            <br />
            TO GLOBAL MARKETS.
          </h1>

          {/* Supporting Text in Manrope (0.9s) */}
          <p
            ref={subtextRef}
            className="text-base sm:text-lg font-sans text-[#F5EFE5]/90 max-w-xl leading-relaxed font-normal"
          >
            Premium Indian peanuts, carefully processed and prepared for buyers around the world.
          </p>

          {/* CTA Buttons in Manrope (1.1s) */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FCFAF5] text-[#5C341B] hover:bg-[#F5EFE5] text-xs font-sans font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>EXPLORE OUR PEANUTS</span>
              <ArrowRight className="w-4 h-4 text-[#5C341B]" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-transparent border border-[#FCFAF5]/50 text-[#FCFAF5] hover:bg-[#FCFAF5]/10 text-xs font-sans font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowUpRight className="w-4 h-4 text-[#FCFAF5]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
