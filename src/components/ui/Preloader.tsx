"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function Preloader() {
  const [complete, setComplete] = useState(false);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const leftCurtainRef = useRef<HTMLDivElement>(null);
  const rightCurtainRef = useRef<HTMLDivElement>(null);
  const contentWrapRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const particleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("ptc_preloader_seen_v2");
    if (hasSeen) {
      setComplete(true);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem("ptc_preloader_seen_v2", "true");
          setComplete(true);
        },
      });

      // 1. Logo slowly appears (0.0 -> 0.35s)
      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.92, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: "power2.out" }
      )
        // 2. Thin brown line grows underneath + tiny peanut/earth particle moves along it (0.2s -> 0.75s)
        .fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.55, ease: "power2.inOut" },
          0.2
        )
        .fromTo(
          particleRef.current,
          { x: -70, opacity: 0, scale: 0.5 },
          { x: 70, opacity: 1, scale: 1, duration: 0.55, ease: "power2.inOut" },
          0.2
        )
        // Particle brief glow/pulse as it reaches 100%
        .to(particleRef.current, { opacity: 0, scale: 1.5, duration: 0.1 }, 0.75)
        // 3. Content fades quickly before curtain split
        .to(contentWrapRef.current, { opacity: 0, y: -10, duration: 0.2, ease: "power2.in" }, 0.78)
        // 4. Screen splits using soft split curtains (0.85s -> 1.25s)
        .to(
          leftCurtainRef.current,
          { xPercent: -100, duration: 0.45, ease: "power3.inOut" },
          0.85
        )
        .to(
          rightCurtainRef.current,
          { xPercent: 100, duration: 0.45, ease: "power3.inOut" },
          0.85
        );
    }, preloaderRef);

    return () => ctx.revert();
  }, []);

  if (complete) return null;

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] pointer-events-auto flex items-center justify-center select-none overflow-hidden"
    >
      {/* Split Curtains for Soft Mask Reveal */}
      <div
        ref={leftCurtainRef}
        className="absolute top-0 left-0 w-1/2 h-full bg-[#FCFAF5] will-change-transform z-10 border-r border-[#70421F]/10"
      />
      <div
        ref={rightCurtainRef}
        className="absolute top-0 right-0 w-1/2 h-full bg-[#FCFAF5] will-change-transform z-10 border-l border-[#70421F]/10"
      />

      {/* Center Branding Content */}
      <div
        ref={contentWrapRef}
        className="relative z-20 flex flex-col items-center justify-center space-y-4 px-6 will-change-transform"
      >
        <div ref={logoRef} className="relative w-44 h-14 opacity-0 flex items-center justify-center">
          <Image
            src="/images/logo/logo.png"
            alt="Pradeep Trading Company Authentic Logo"
            width={176}
            height={56}
            priority
            className="object-contain"
          />
        </div>

        {/* Thin Brown Line with Peanut Particle */}
        <div className="relative w-36 h-[1.5px] bg-[#70421F]/15 flex items-center justify-center overflow-visible">
          {/* Expanding Line */}
          <div
            ref={lineRef}
            className="absolute inset-0 bg-[#70421F] origin-left will-change-transform"
          />
          {/* Tiny Peanut Particle traveling along line */}
          <div
            ref={particleRef}
            className="absolute w-2 h-1.5 rounded-full bg-[#8A5A34] shadow-[0_0_8px_rgba(112,66,31,0.6)] will-change-transform"
          />
        </div>

        <span className="text-[10px] uppercase font-sans tracking-[0.28em] text-[#70421F]/80 font-medium">
          India • Agricultural Exports
        </span>
      </div>
    </div>
  );
}
