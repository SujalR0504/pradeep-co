"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function EditorialAboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-28 lg:py-36 bg-[#FBF8F2] text-[#2E2117] overflow-hidden border-t border-[rgba(112,66,31,0.18)]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: CALM EDITORIAL STATEMENT & WHITESPACE (Cols 1-7) */}
          <div ref={textRef} className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-[#70421F]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#70421F]" />
              <span>About Pradeep Trading Company</span>
            </div>

            <h2 className="font-serif font-normal text-editorial-section text-[#2E2117] leading-[1.04] tracking-tight">
              Connecting Indian agricultural quality with global opportunity.
            </h2>

            <p className="text-base sm:text-lg text-[#2E2117]/80 font-sans font-light leading-relaxed max-w-xl">
              Pradeep Trading Company is grounded in Central India&apos;s primary groundnut belt. We partner directly with growers across Shivpuri and regional mandis, combining field-level selection with multi-spectral optical sorting to supply reliable agricultural commodities to international markets.
            </p>

            <div className="pt-4 border-t border-[rgba(112,66,31,0.18)] grid grid-cols-2 gap-6 max-w-lg">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#70421F] font-semibold block">
                  Processing Hub
                </span>
                <span className="font-serif text-lg text-[#2E2117]">
                  Bhonti, Shivpuri (M.P.)
                </span>
                <p className="text-xs text-[#2E2117]/65 font-sans font-light">
                  Central India Mandi Center
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#70421F] font-semibold block">
                  Core Specialization
                </span>
                <span className="font-serif text-lg text-[#2E2117]">
                  Bold &amp; Java Peanuts
                </span>
                <p className="text-xs text-[#2E2117]/65 font-sans font-light">
                  Double-Sortex Cleaned
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="#products"
                className="group inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-[#70421F] hover:text-[#5A3215] transition-colors"
              >
                <span>Explore Sourced Varieties</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT: BEAUTIFUL FARM / PRODUCT PHOTOGRAPHY (Cols 8-12) */}
          <div ref={imageRef} className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#F4EBDD] border border-[rgba(112,66,31,0.18)] shadow-[0_15px_35px_rgba(112,66,31,0.06)] group">
              <Image
                src="/images/harvest-farmer.webp"
                alt="Direct farm harvest in Madhya Pradesh"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C7A77C] block mb-0.5">
                  Direct Field Origin
                </span>
                <div className="font-serif text-lg text-[#FBF8F2] font-medium">
                  Direct Harvest &amp; Hand Selection
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
