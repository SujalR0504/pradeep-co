"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone, Mail, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ContactCtaProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function ContactCtaSection({
  title = "READY TO SOURCE\nPREMIUM INDIAN PEANUTS?",
  subtitle = "Direct origin procurement, 4 MT/hour double-sortex electronic optical cleaning, count-calibrated grading, and certified FCL container shipments to over 35 destinations worldwide.",
  className = "",
}: ContactCtaProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const peanutImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !peanutImgRef.current) return;

    const ctx = gsap.context(() => {
      // One subtle parallax movement on the large peanut visual
      gsap.to(peanutImgRef.current, {
        y: -40,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact-cta"
      ref={sectionRef}
      className={`relative w-full py-14 lg:py-20 bg-[#FCFAF5] text-[#2D241D] border-t border-[#5C341B]/12 overflow-hidden ${className}`}
    >
      <div className="site-container max-w-[1280px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Final Call to Action Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <span className="text-[10.5px] font-sans font-bold tracking-[0.2em] text-[#A4774C] uppercase block">
              11 // B2B GLOBAL TRADE DESK
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-[1.12] tracking-tight text-[#5C341B] whitespace-pre-line">
              {title}
            </h2>

            <p className="text-xs sm:text-sm font-sans text-[#2D241D]/80 max-w-xl leading-relaxed font-normal">
              {subtitle}
            </p>

            {/* CTAs: REQUEST A QUOTE & CONTACT US */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer tracking-wider"
                style={{
                  backgroundColor: '#5C341B',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                <span style={{ color: '#FFFFFF', fontWeight: 800 }}>REQUEST A QUOTE</span>
                <ArrowRight className="w-3.5 h-3.5" style={{ color: '#FFFFFF' }} />
              </Link>

              <Link
                href={`tel:${COMPANY_INFO.contact.primaryPhone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#5C341B]/30 transition-colors cursor-pointer tracking-wider"
                style={{
                  backgroundColor: '#F5EFE5',
                  color: '#5C341B',
                  fontSize: '11px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                <span style={{ color: '#5C341B', fontWeight: 800 }}>CONTACT US</span>
                <ArrowUpRight className="w-3.5 h-3.5" style={{ color: '#5C341B' }} />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-[#5C341B]/10 grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-[11px] font-sans text-[#2D241D]/75">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5C341B] shrink-0" />
                <span>SGS / Geo-Chem COA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5C341B] shrink-0" />
                <span>FOB Mundra Port</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5C341B] shrink-0" />
                <span>APEDA Certified</span>
              </div>
            </div>
          </div>

          {/* Right: Large Premium Peanut Image with Subtle Parallax */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[340px] sm:max-w-[380px] rounded-2xl bg-[#F5EFE5]/80 border border-[#5C341B]/12 p-6 flex items-center justify-center overflow-hidden shadow-xs">
              <div className="absolute inset-0 bg-radial from-[#A4774C]/15 via-transparent to-transparent pointer-events-none" />

              {/* Large Premium Peanut Kernel Visual with Parallax */}
              <div
                ref={peanutImgRef}
                className="relative w-full h-full flex items-center justify-center will-change-transform"
              >
                <Image
                  src="/images/single-kernel-cutout.png"
                  alt="Premium Indian peanut kernel"
                  fill
                  sizes="440px"
                  className="object-contain filter drop-shadow-2xl"
                  priority
                />
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#FCFAF5]/95 backdrop-blur-xs border border-[#5C341B]/10 flex items-center justify-between text-xs font-sans">
                <span className="font-semibold text-[#5C341B]">Bhonti, Shivpuri (M.P.)</span>
                <span className="font-mono text-[10px] text-[#A4774C] font-bold uppercase">READY TO EXPORT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
