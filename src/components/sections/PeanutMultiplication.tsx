"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ArrowDown } from "lucide-react";

// 32 Kernels with calculated orbital target coordinates
const KERNEL_COUNT = 32;
const KERNELS = Array.from({ length: KERNEL_COUNT }).map((_, i) => {
  const angle = (i / KERNEL_COUNT) * Math.PI * 2;
  // Multiple concentric rings: inner, middle, outer
  const ring = i % 3 === 0 ? 160 : i % 2 === 0 ? 280 : 390;
  return {
    id: i,
    x: Math.cos(angle) * ring + (Math.sin(i * 3) * 20),
    y: Math.sin(angle) * (ring * 0.65) + (Math.cos(i * 2) * 20),
    rotate: (angle * 180) / Math.PI + 45,
    scale: 0.6 + (i % 4) * 0.12,
  };
});

const PRODUCT_CARDS = [
  {
    num: "01",
    name: "Bold Peanuts",
    count: "38/42 • 40/50 • 50/60 Count",
    image: "/images/peanut-bold.webp",
    desc: "Large calibrated Indian Singdana, high natural oleic oil ratio.",
    slug: "bold-peanuts",
  },
  {
    num: "02",
    name: "Java Peanuts",
    count: "50/60 • 60/70 • 70/80 Count",
    image: "/images/peanut-bold.webp",
    desc: "Spheroid, sweet-flavored kernel favored for premium confectioneries.",
    slug: "java-peanuts",
  },
  {
    num: "03",
    name: "Peanuts In-Shell",
    count: "Sun-Cured Pod Calibers",
    image: "/images/peanut-inshell.webp",
    desc: "Golden reticulated whole pods gently cured under Central Indian sun.",
    slug: "peanuts-in-shell",
  },
  {
    num: "04",
    name: "Blanched Peanuts",
    count: "Whole & Split Blanched",
    image: "/images/blanched-peanuts.webp",
    desc: "Skin-free, Sortex-inspected kernels for roasting and butter manufacturing.",
    slug: "blanched-peanuts",
  },
];

export default function PeanutMultiplication() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTrackRef = useRef<HTMLDivElement>(null);

  const centerKernelRef = useRef<HTMLDivElement>(null);
  const kernelsRef = useRef<HTMLDivElement[]>([]);
  const heading1Ref = useRef<HTMLDivElement>(null);
  const heading2Ref = useRef<HTMLDivElement>(null);
  const compositionRef = useRef<HTMLDivElement>(null);

  const addKernelRef = (el: HTMLDivElement | null) => {
    if (el && !kernelsRef.current.includes(el)) {
      kernelsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const pin = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=2800",
        pin: pinTrackRef.current,
        scrub: 1,
        anticipatePin: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2800",
          scrub: 1,
        },
      });

      // 1. Initial State: Center kernel enters smoothly (0.0 -> 0.2)
      tl.fromTo(
        centerKernelRef.current,
        { scale: 3, opacity: 0.8 },
        { scale: 1, opacity: 1, duration: 0.2, ease: "power2.out" },
        0
      )
        // 2. Center kernel divides into 2 -> 4 -> 8 -> 16 -> 32 kernels spreading outwards (0.2 -> 0.5)
        .to(centerKernelRef.current, { opacity: 0, scale: 0.5, duration: 0.1 }, 0.2)
        .fromTo(
          kernelsRef.current,
          { x: 0, y: 0, scale: 0, opacity: 0 },
          {
            x: (i) => KERNELS[i]?.x || 0,
            y: (i) => KERNELS[i]?.y || 0,
            scale: (i) => KERNELS[i]?.scale || 0.7,
            opacity: 1,
            stagger: {
              amount: 0.2,
              from: "center",
            },
            ease: "power2.out",
            duration: 0.3,
          },
          0.2
        )
        // 3. Text reveals: "ONE PEANUT. MANY POSSIBILITIES." (0.3 -> 0.6)
        .fromTo(
          heading1Ref.current,
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: "power2.out" },
          0.3
        )
        // 4. Heading 1 dissolves, Heading 2 "OUR PRODUCTS" appears (0.6 -> 0.75)
        .to(heading1Ref.current, { opacity: 0, y: -25, duration: 0.15 }, 0.6)
        .fromTo(
          heading2Ref.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.2 },
          0.65
        )
        // Kernels float towards edges & fade to make way for product cards
        .to(
          kernelsRef.current,
          {
            scale: 0.4,
            opacity: 0.3,
            duration: 0.25,
            ease: "power1.inOut",
          },
          0.65
        )
        // 5. 4-Card Editorial Product Composition enters (0.75 -> 1.0)
        .fromTo(
          compositionRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.25, ease: "power3.out" },
          0.75
        );

      return () => {
        pin.kill();
        tl.kill();
      };
    });

    mm.add("(max-width: 1023px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      tl.fromTo(
        compositionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      return () => tl.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="seed-possibilities"
      ref={containerRef}
      className="relative w-full bg-[#F7F0E5] text-[#2E2117] overflow-hidden border-t border-[#70421F]/15"
    >
      <div
        ref={pinTrackRef}
        className="relative w-full h-screen flex flex-col items-center justify-between py-10 px-6 overflow-hidden"
      >
        {/* Top Minimal Chapter Indicator */}
        <div className="relative z-30 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-[#70421F]/15 pb-3">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.24em] text-[#70421F]">
            <Sparkles className="w-3.5 h-3.5 text-[#70421F]" />
            <span>Chapter 02 // Botanical Multiplication</span>
          </div>

          <div className="text-xs font-mono text-[#70421F]/80">
            1 SEED → 32 CALIBERS → GLOBAL COMMODITY
          </div>
        </div>

        {/* Center Canvas: Multiplication from 1 to 32 Kernels */}
        <div className="relative w-full max-w-6xl mx-auto my-auto flex-grow flex items-center justify-center">
          {/* Ambient Warm Backlight */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#B88755]/15 blur-3xl pointer-events-none" />

          {/* Center Single Kernel (Initial State) */}
          <div
            ref={centerKernelRef}
            className="absolute w-28 h-40 will-change-transform z-20 drop-shadow-[0_15px_30px_rgba(112,66,31,0.25)]"
          >
            <Image
              src="/images/single-kernel-cutout.png"
              alt="Single origin peanut seed"
              fill
              sizes="150px"
              className="object-contain"
            />
          </div>

          {/* 32 Flying Multiplying Peanut Kernels */}
          {KERNELS.map((k) => (
            <div
              key={k.id}
              ref={addKernelRef}
              style={{
                transform: `rotate(${k.rotate}deg)`,
              }}
              className="absolute w-14 h-20 opacity-0 will-change-transform pointer-events-none drop-shadow-[0_8px_18px_rgba(112,66,31,0.2)]"
            >
              <Image
                src="/images/single-kernel-cutout.png"
                alt="Peanut seed caliber"
                fill
                sizes="60px"
                className="object-contain"
              />
            </div>
          ))}

          {/* Headline 1: "ONE PEANUT. MANY POSSIBILITIES." */}
          <div
            ref={heading1Ref}
            className="absolute z-25 text-center px-6 pointer-events-none space-y-3 opacity-0"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FCFAF5] border border-[#70421F]/20 text-[11px] font-mono uppercase tracking-[0.25em] text-[#70421F]">
              <span>Commodity Diversification</span>
            </div>
            <h2 className="font-serif font-light text-4xl sm:text-6xl text-[#2E2117] tracking-tight">
              ONE PEANUT.
              <br />
              <span className="italic font-normal text-[#70421F]">
                MANY POSSIBILITIES.
              </span>
            </h2>
            <p className="text-sm text-[#2E2117]/75 font-sans font-light max-w-md mx-auto leading-relaxed">
              From raw whole pods to precision blanched kernels, every caliber fulfills distinct culinary and industrial food standards.
            </p>
          </div>

          {/* Headline 2: "OUR PRODUCTS" (Transitioning into Cards) */}
          <div
            ref={heading2Ref}
            className="absolute top-2 z-25 text-center px-6 pointer-events-none space-y-1 opacity-0"
          >
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#70421F]">
              Export Portfolio
            </span>
            <h2 className="font-serif font-light text-3xl sm:text-4xl text-[#2E2117]">
              OUR PRODUCTS
            </h2>
          </div>

          {/* Aligned 4-Card Composition */}
          <div
            ref={compositionRef}
            className="relative z-30 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-8 opacity-0"
          >
            {PRODUCT_CARDS.map((prod) => (
              <Link
                key={prod.num}
                href={`/products/${prod.slug}`}
                className="group block p-5 rounded-2xl bg-[#FCFAF5] border border-[#70421F]/15 hover:border-[#70421F] hover:shadow-[0_12px_30px_rgba(112,66,31,0.08)] transition-all duration-300"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#F7F0E5] mb-4">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 280px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#2E2117]/80 text-[#FCFAF5] text-[10px] font-mono">
                    {prod.num}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-[#8A5A34] uppercase tracking-wider mb-1">
                  {prod.count}
                </div>
                <h3 className="font-serif text-lg text-[#2E2117] group-hover:text-[#70421F] transition-colors font-medium">
                  {prod.name}
                </h3>
                <p className="text-xs text-[#2E2117]/70 font-light mt-1 line-clamp-2">
                  {prod.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Coordinates Bar */}
        <div className="relative z-30 max-w-7xl mx-auto w-full flex items-center justify-between border-t border-[#70421F]/15 pt-3 text-[11px] font-mono text-[#70421F]/80">
          <span>SORTEX CALIBRATION: ±0.2 MM PRECISION</span>
          <span className="text-[#70421F] font-semibold">APEDA EXPORT GRADES</span>
          <span>HULLING &amp; SHELLING EFFICIENCY: 99.8%</span>
        </div>
      </div>
    </section>
  );
}
