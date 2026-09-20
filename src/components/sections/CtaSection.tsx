"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/ui/MagneticButton";
import ParticleBackground from "@/components/ui/ParticleBackground";

export default function CtaSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const podWatermarkRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax upward typography
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0.8 },
        {
          y: -20,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 30%",
            scrub: 1,
          },
        }
      );

      // Rotating background pod watermark
      gsap.fromTo(
        podWatermarkRef.current,
        { rotateZ: -15, scale: 0.9 },
        {
          rotateZ: 15,
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      // Staggered buttons reveal
      gsap.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-28 lg:py-40 bg-[#2B1A0F] text-[#FFFDF8] relative overflow-hidden"
    >
      {/* Subtle particle system */}
      <ParticleBackground density="medium" />

      {/* Background Graphic & Subtle Monogram Emblem with Parallax */}
      <div
        ref={podWatermarkRef}
        className="absolute -right-20 -top-20 w-[420px] h-[420px] sm:w-[580px] sm:h-[580px] opacity-10 pointer-events-none will-change-transform"
      >
        <Image
          src="/images/single-pod-cutout.png"
          alt="Pod watermark"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#2B1A0F] via-[#3F2613]/80 to-[#2B1A0F] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF7A]">
          <span className="w-6 h-[1.5px] bg-[#D4AF7A]" />
          <span>Global Trade Collaboration</span>
          <span className="w-6 h-[1.5px] bg-[#D4AF7A]" />
        </div>

        <h2
          ref={headingRef}
          className="font-serif font-light text-editorial-heading leading-[0.98] tracking-tight text-[#FFFDF8] will-change-transform"
        >
          LET&apos;S TAKE
          <br />
          <span className="italic font-normal text-[#D4AF7A]">INDIAN QUALITY</span>
          <br />
          TO THE WORLD.
        </h2>

        <p className="text-base sm:text-xl text-[#F7F1E7]/80 font-light max-w-2xl mx-auto leading-relaxed">
          Whether you require calibrated Bold Singdana, uniform Java kernels, or custom-blanched lots, our export desk is ready to assist with lot specifications and competitive shipping terms.
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4"
        >
          <MagneticButton strength={14}>
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FFFDF8] text-[#2B1A0F] font-semibold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#F7F1E7] transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-4 h-4 text-[#8A572F]" />
            </Link>
          </MagneticButton>

          <MagneticButton strength={12}>
            <Link
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full glass-dark text-[#FFFDF8] border border-[#E8DDCB]/30 font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-white/15 transition-all"
            >
              <span>Explore Products</span>
              <ArrowDown className="w-4 h-4 text-[#D4AF7A]" />
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
