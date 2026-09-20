"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, MapPin } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CinematicImageBreak() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const maskContainerRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const textOverlayRef = useRef<HTMLDivElement>(null);
  const droppingKernelRef = useRef<HTMLDivElement>(null);
  const metadataRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=260%",
          scrub: 1.1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Stage 1: The peanut-shaped silhouette expands from small central silhouette to full 100vw x 100vh bleed
      tl.fromTo(
        maskContainerRef.current,
        {
          width: "320px",
          height: "460px",
          borderRadius: "50% 50% 45% 45% / 60% 60% 40% 40%",
          boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
        },
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "0px",
          boxShadow: "none",
          duration: 1.2,
          ease: "power2.inOut",
        }
      );

      // Inner image counter-zooms slightly to create depth parallax
      tl.fromTo(
        imageInnerRef.current,
        { scale: 1.35 },
        { scale: 1.05, duration: 1.2, ease: "power2.out" },
        0
      );

      // Stage 2: Falling Peanut Kernel drops continuously from top to bottom through the center
      tl.fromTo(
        droppingKernelRef.current,
        { y: -160, rotation: -25, opacity: 0 },
        {
          y: 420,
          rotation: 180,
          opacity: 1,
          duration: 1.8,
          ease: "none",
        },
        0.2
      );

      // Stage 3: Text overlay illuminates dramatically
      tl.fromTo(
        textOverlayRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" },
        0.6
      );

      // Stage 4: Metadata bar fades in
      tl.fromTo(
        metadataRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        0.9
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen min-h-[750px] overflow-hidden bg-[#1A120B] text-[#FCFAF5] flex items-center justify-center select-none"
    >
      {/* Background Subtle Noise & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3B2110_0%,#140C07_100%)] pointer-events-none" />

      {/* Expanding Peanut Mask Container */}
      <div
        ref={maskContainerRef}
        className="relative overflow-hidden flex items-center justify-center will-change-[width,height,border-radius]"
      >
        {/* Inner High-Resolution Photographic Image */}
        <div ref={imageInnerRef} className="absolute inset-0 w-full h-full will-change-transform">
          <Image
            src="/images/india-farm-aerial.jpg"
            alt="Indian Groundnut Heartland Farmlands"
            fill
            priority
            className="object-cover filter contrast-110 brightness-95"
          />
          {/* Deep Cinematic Editorial Gradient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#140C07]/90 via-[#140C07]/35 to-[#140C07]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#140C07]/80 via-transparent to-[#140C07]/80" />
        </div>

        {/* Central Descending Anchor Peanut Kernel */}
        <div
          ref={droppingKernelRef}
          className="absolute z-20 pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
          style={{ width: "72px", height: "105px" }}
        >
          <Image
            src="/images/single-kernel-cutout.png"
            alt="Descending Golden Kernel"
            fill
            className="object-contain"
          />
        </div>

        {/* Text Overlay: Master Brand Manifesto */}
        <div
          ref={textOverlayRef}
          className="relative z-25 max-w-4xl px-8 text-center flex flex-col items-center justify-center opacity-0"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCFAF5]/15 backdrop-blur-md border border-[#FCFAF5]/25 text-[10px] font-mono tracking-[0.3em] uppercase text-[#E8D8C1] mb-6 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#F4A261]" />
            <span>CINEMATIC MOMENT // THE RED LOAM ORIGIN</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FCFAF5] font-normal leading-[1.08] tracking-tight uppercase">
            BORN IN THE RED LOAM OF INDIA.
            <span className="block font-serif italic text-[#E8D8C1] mt-2 lowercase text-2xl sm:text-4xl md:text-5xl font-light">
              crafted for the commodity traders of the world.
            </span>
          </h2>

          <p className="mt-6 text-xs sm:text-sm md:text-base font-sans text-[#FCFAF5]/80 max-w-2xl leading-relaxed">
            Every container shipped by Pradeep Trading Company carries the mineral density of Central India&apos;s most fertile agricultural belts, calibrated through precision Sortex technology.
          </p>
        </div>

        {/* Bottom Editorial Metadata Bar */}
        <div
          ref={metadataRef}
          className="absolute bottom-8 left-8 right-8 z-25 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-widest text-[#E8D8C1]/75 uppercase border-t border-[#FCFAF5]/15 pt-4 opacity-0"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#F4A261]" />
            <span>ORIGIN: 25.4358° N, 77.6593° E // MADHYA PRADESH & GUJARAT</span>
          </div>
          <div className="mt-2 sm:mt-0">
            <span>ANNUAL CAPACITY: 25,000+ METRIC TONS EXPORT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
