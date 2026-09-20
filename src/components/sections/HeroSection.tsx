"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import MagneticButton from "@/components/ui/MagneticButton";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const thinLineRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineWordsRef = useRef<HTMLSpanElement[]>([]);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const visualContainerRef = useRef<HTMLDivElement>(null);
  const groundnutImageRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const addWordRef = (el: HTMLSpanElement | null) => {
    if (el && !headlineWordsRef.current.includes(el)) {
      headlineWordsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Page load cinematic reveal sequence
      tl.fromTo(
        thinLineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: "power2.inOut" },
        0.2
      )
        .fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          0.4
        )
        // Word-by-word headline reveal
        .fromTo(
          headlineWordsRef.current,
          { opacity: 0, y: 35, rotateX: 20 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          },
          0.5
        )
        // Supporting text fades upward
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.9
        )
        // CTA buttons appear
        .fromTo(
          buttonsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          1.05
        )
        // Groundnut visual enters from below with subtle atmospheric floating
        .fromTo(
          visualContainerRef.current,
          { opacity: 0, y: 60, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "power2.out" },
          0.6
        )
        // Scroll indicator starts moving
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.6 },
          1.2
        );

      // Subtle slow breathing hover on visual
      gsap.to(groundnutImageRef.current, {
        y: -10,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-screen bg-[#FCFAF5] text-[#2E2117] flex flex-col justify-between pt-28 pb-8 overflow-hidden"
    >
      {/* Subtle Warm Sunlight Ambient Lighting in top right */}
      <div className="absolute top-0 right-0 w-[55vw] h-[55vh] bg-radial from-[#F7F0E5] via-[#E8D8C1]/30 to-transparent pointer-events-none opacity-70" />

      {/* Thin Brown Editorial Divider at top */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 mb-4">
        <div
          ref={thinLineRef}
          className="w-full h-[1px] bg-[#70421F]/20 origin-left will-change-transform"
        />
      </div>

      {/* MAIN HERO CONTENT: 12-COLUMN ASYMMETRIC GRID */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Small Eyebrow */}
            <div ref={eyebrowRef} className="opacity-0">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F7F0E5] border border-[#70421F]/20 text-[11px] uppercase font-sans tracking-[0.26em] text-[#70421F] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#70421F]" />
                <span>INDIA • AGRICULTURAL EXPORTS</span>
              </div>
            </div>

            {/* Main Headline (Word-by-Word Reveal) */}
            <h1 className="font-serif font-normal text-editorial-hero text-[#2E2117] tracking-tight leading-[0.94] perspective-1000">
              <span className="block overflow-hidden pb-1">
                <span ref={addWordRef} className="inline-block opacity-0 mr-3">FROM</span>
                <span ref={addWordRef} className="inline-block opacity-0">SOIL</span>
              </span>
              <span className="block overflow-hidden pt-1">
                <span ref={addWordRef} className="inline-block opacity-0 italic text-[#70421F] mr-3">TO</span>
                <span ref={addWordRef} className="inline-block opacity-0 italic text-[#70421F] mr-3">THE</span>
                <span ref={addWordRef} className="inline-block opacity-0 italic text-[#70421F]">WORLD.</span>
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              ref={subtextRef}
              className="text-base sm:text-lg lg:text-xl text-[#2E2117]/80 font-sans font-light max-w-xl leading-relaxed opacity-0"
            >
              Quality agricultural products from India, prepared for global markets. Cultivated in fertile Central Indian soil and calibrated for international food processing standards.
            </p>

            {/* CTA Buttons: EXPLORE PRODUCTS & REQUEST A QUOTE */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 opacity-0"
            >
              <MagneticButton strength={12}>
                <Link
                  href="#products"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#70421F] text-[#FCFAF5] hover:bg-[#8A5A34] text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow"
                >
                  <span>Explore Products</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#E8D8C1]" />
                </Link>
              </MagneticButton>

              <MagneticButton strength={10}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FCFAF5] text-[#2E2117] border border-[#70421F]/25 hover:bg-[#F7F0E5] hover:border-[#70421F] text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-200"
                >
                  <span>Request a Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#70421F]" />
                </Link>
              </MagneticButton>
            </div>
          </div>

          {/* RIGHT COLUMN: CINEMATIC GROUNDNUT FIELD PHOTOGRAPHY (Cols 8-12) */}
          <div
            ref={visualContainerRef}
            className="lg:col-span-5 relative flex items-center justify-center opacity-0"
          >
            {/* Sunlit Farm & Pod Composition Card */}
            <div
              ref={groundnutImageRef}
              className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#F7F0E5] border border-[#70421F]/20 shadow-[0_16px_45px_rgba(112,66,31,0.08)] group will-change-transform"
            >
              {/* Golden-hour agricultural field */}
              <Image
                src="/images/hero-field.webp"
                alt="Golden hour Indian agricultural groundnut farmland"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center filter contrast-[1.03] brightness-95 group-hover:scale-103 transition-transform duration-700"
              />

              {/* Natural Warm Sunlight Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E2117]/60 via-transparent to-transparent pointer-events-none" />

              {/* Macro Groundnut Pod Card Overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#FCFAF5]/90 backdrop-blur-md border border-[#70421F]/20 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#70421F] block">
                    Source Soil Terroir
                  </span>
                  <p className="font-serif text-base text-[#2E2117] font-medium">
                    Central India Groundnut Basin
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-[#8A5A34] block">
                    LAT 25.04° N
                  </span>
                  <span className="text-xs font-serif font-bold text-[#70421F]">
                    Kharif &amp; Summer Harvest
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SCROLL INDICATOR */}
      <div
        ref={scrollIndicatorRef}
        className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 flex flex-col items-center justify-center pt-6 opacity-0"
      >
        <Link
          href="#underground-story"
          className="flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#70421F]/75 hover:text-[#70421F] transition-colors"
        >
          <span>SCROLL TO EXPLORE</span>
          {/* Animated thin vertical line */}
          <div className="w-[1.5px] h-9 bg-[#70421F]/20 relative overflow-hidden">
            <div className="w-full h-1/2 bg-[#70421F] absolute top-0 left-0 animate-bounce" />
          </div>
        </Link>
      </div>
    </section>
  );
}
