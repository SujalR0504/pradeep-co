"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Compass } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 32 calibrated peanut kernel nodes representing binary division 1 -> 2 -> 4 -> 8 -> 16 -> 32
const KERNEL_COUNT = 32;
const KERNELS_DATA = Array.from({ length: KERNEL_COUNT }, (_, i) => {
  const angle = (i / KERNEL_COUNT) * Math.PI * 2;
  // 3 Concentric Orbital Bands
  const band = i < 8 ? 0 : i < 20 ? 1 : 2;
  const radius = band === 0 ? 150 : band === 1 ? 230 + (i % 3) * 25 : 310 + (i % 4) * 30;
  return {
    id: i,
    baseX: Math.cos(angle) * radius,
    baseY: Math.sin(angle) * radius,
    size: 26 + (i % 4) * 7,
    rotation: (i * 47) % 360,
    speed: 0.8 + (i % 5) * 0.15,
  };
});

export default function Scene05KernelUniverse() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerPeanutRef = useRef<HTMLDivElement>(null);
  const orbitGroupRef = useRef<HTMLDivElement>(null);
  const centerTextRef = useRef<HTMLDivElement>(null);
  const kernelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinned Multiplication & Orbit Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=260%",
          scrub: 1.1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1. Initial State: 1 Single Central Peanut
      tl.fromTo(
        centerPeanutRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
      );

      // 2. Binary Duplication & Explosion (1 -> 2 -> 4 -> 8 -> 16 -> 32)
      // Kernels burst outward from the central coordinate (0, 0)
      tl.fromTo(
        kernelRefs.current,
        {
          x: 0,
          y: 0,
          scale: 0,
          opacity: 0,
        },
        {
          x: (i) => KERNELS_DATA[i].baseX,
          y: (i) => KERNELS_DATA[i].baseY,
          scale: 1,
          opacity: 1,
          stagger: {
            each: 0.02,
            from: "center",
          },
          ease: "back.out(1.8)",
          duration: 1.6,
        },
        "-=0.2"
      );

      // 3. Central Core Statement Appears
      tl.fromTo(
        centerTextRef.current,
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.9, ease: "power2.out" },
        "-=0.7"
      );

      // 4. Orbit expansion and outward acceleration
      tl.to(
        kernelRefs.current,
        {
          x: (i) => KERNELS_DATA[i].baseX * 1.35,
          y: (i) => KERNELS_DATA[i].baseY * 1.35,
          duration: 1.2,
          ease: "power2.inOut",
        },
        "+=0.2"
      );

      // 5. Grand Transition: Orbiting Peanuts fly outward radially into product catalog
      tl.to(
        kernelRefs.current,
        {
          x: (i) => KERNELS_DATA[i].baseX * 4.5,
          y: (i) => KERNELS_DATA[i].baseY * 4.5,
          opacity: 0,
          scale: 1.8,
          stagger: 0.015,
          duration: 1.2,
          ease: "power3.in",
        },
        "+=0.2"
      );

      tl.to(
        [centerPeanutRef.current, centerTextRef.current],
        {
          scale: 1.4,
          opacity: 0,
          duration: 0.8,
          ease: "power2.in",
        },
        "<"
      );

      // Continuous Slow Orbit Rotation
      const orbitTween = gsap.to(orbitGroupRef.current, {
        rotation: 360,
        duration: 55,
        repeat: -1,
        ease: "none",
      });

      // Mouse Proximity Tilt Control
      const onMouseMove = (e: MouseEvent) => {
        if (!orbitGroupRef.current) return;
        const normX = (e.clientX / window.innerWidth - 0.5) * 2;
        const normY = (e.clientY / window.innerHeight - 0.5) * 2;
        gsap.to(orbitGroupRef.current, {
          rotateX: -normY * 18,
          rotateY: normX * 18,
          duration: 0.8,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", onMouseMove, { passive: true });

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        orbitTween.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="kernel-universe"
      ref={containerRef}
      className="relative w-full h-screen min-h-[750px] overflow-hidden bg-[#FCFAF5] text-[#2E2117] flex flex-col items-center justify-between select-none p-6 sm:p-10"
      style={{ perspective: "1000px" }}
    >
      {/* Background Subtle Grid & Grain */}
      <div className="absolute inset-0 bg-agricultural-grid opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-grain-texture opacity-30 pointer-events-none" />

      {/* Top Editorial Bar */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between text-[11px] font-mono tracking-[0.25em] text-[#70421F]/70 uppercase z-20 pointer-events-none">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#70421F]" />
          <span>CHAPTER 04 // BIOLOGICAL MULTIPLICATION</span>
        </div>
        <div className="hidden sm:block">
          <span>1 SEED → 32 CALIBERS → GLOBAL COMMODITY</span>
        </div>
      </div>

      {/* CENTER STAGE: ORBITAL FIELD */}
      <div className="relative w-full max-w-5xl my-auto flex-grow flex items-center justify-center pointer-events-none">
        {/* Ambient Backlight Halo */}
        <div className="absolute w-[550px] h-[550px] rounded-full bg-[#B88755]/15 blur-3xl pointer-events-none" />

        {/* Central Large Anchor Peanut */}
        <div
          ref={centerPeanutRef}
          className="absolute w-28 sm:w-36 h-40 sm:h-52 z-20 pointer-events-auto cursor-pointer transition-transform duration-500 hover:scale-110 peanut-deep-shadow will-change-transform"
        >
          <Image
            src="/images/user-red-kernel.png"
            alt="Central Origin Peanut Kernel"
            fill
            priority
            sizes="200px"
            className="object-contain"
          />
        </div>

        {/* Orbit Group with 32 Multiplying Peanut Kernels */}
        <div
          ref={orbitGroupRef}
          className="absolute inset-0 flex items-center justify-center will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Orbital Guideline Rings */}
          <div className="absolute w-[300px] h-[300px] rounded-full border border-[#70421F]/15 pointer-events-none" />
          <div className="absolute w-[460px] h-[460px] rounded-full border border-[#70421F]/10 border-dashed pointer-events-none" />
          <div className="absolute w-[620px] h-[620px] rounded-full border border-[#70421F]/10 pointer-events-none" />

          {/* 32 Orbiting Calibrated Peanut Kernels */}
          {KERNELS_DATA.map((k, index) => (
            <div
              key={k.id}
              ref={(el) => {
                kernelRefs.current[index] = el;
              }}
              style={{
                width: `${k.size}px`,
                height: `${k.size * 1.35}px`,
                transform: `translate(${k.baseX}px, ${k.baseY}px) rotate(${k.rotation}deg)`,
              }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 peanut-drop-shadow pointer-events-auto cursor-pointer transition-transform duration-300 hover:scale-130"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/user-red-kernel.png"
                  alt={`Calibrated Kernel Node ${k.id + 1}`}
                  fill
                  sizes="60px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Central Statement Card (Revealed as peanuts orbit) */}
        <div
          ref={centerTextRef}
          className="relative z-30 max-w-lg text-center px-8 py-7 bg-[#FCFAF5]/90 backdrop-blur-md rounded-3xl border border-[#70421F]/20 shadow-[0_20px_45px_rgba(112,66,31,0.12)] pointer-events-auto space-y-2"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#70421F] uppercase font-bold block">
            THE COMMODITY MULTIVERSE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#2E2117] leading-tight font-normal">
            ONE CROP.
            <span className="block font-light italic text-[#70421F]">
              MANY POSSIBILITIES.
            </span>
          </h2>
          <p className="text-xs font-sans text-[#2E2117]/75 max-w-sm mx-auto pt-1 leading-relaxed">
            From raw in-shell to precision double-sortex confectionery grades, every seed contains an entire agricultural universe.
          </p>
        </div>
      </div>

      {/* Bottom Editorial Coordinates */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between text-[10px] font-mono tracking-widest text-[#70421F]/70 uppercase z-20 pointer-events-none">
        <span>32 CALIBER SPECS</span>
        <span>•</span>
        <span>INTERACTIVE ORBIT (MOVE CURSOR TO TILT)</span>
        <span>•</span>
        <span>SCROLL TO ENTER PRODUCT CATALOGUE ↓</span>
      </div>
    </section>
  );
}
