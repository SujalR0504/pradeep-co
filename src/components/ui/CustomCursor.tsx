"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const peanutRef = useRef<HTMLDivElement>(null);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Only enable on desktop with mouse pointer and without reduced motion
    const isDesktop = window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isDesktop || prefersReducedMotion) {
      setIsEnabled(false);
      return;
    }
    setIsEnabled(true);

    const dot = dotRef.current;
    const peanut = peanutRef.current;
    if (!dot || !peanut) return;

    // Quick setters for butter-smooth 60fps tracking
    const dotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3" });

    const peanutX = gsap.quickTo(peanut, "x", { duration: 0.35, ease: "power2.out" });
    const peanutY = gsap.quickTo(peanut, "y", { duration: 0.35, ease: "power2.out" });
    const peanutRotate = gsap.quickTo(peanut, "rotation", { duration: 0.3, ease: "power1.out" });

    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;
    let isHoveringInteractive = false;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      dotX(clientX);
      dotY(clientY);
      peanutX(clientX);
      peanutY(clientY);

      // Calculate velocity and swing angle
      const dx = clientX - lastX;
      const dy = clientY - lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed > 2) {
        // Swing behind cursor direction
        const angle = Math.atan2(dy, dx) * (180 / Math.PI) - 90;
        const swing = Math.min(Math.max(angle, -60), 60);
        peanutRotate(swing);
      } else {
        peanutRotate(15);
      }

      lastX = clientX;
      lastY = clientY;
    };

    const onMouseDown = () => {
      // Peanut snaps forward with spring reaction on click
      gsap.to(peanut, {
        scale: isHoveringInteractive ? 1.6 : 1.25,
        duration: 0.12,
        yoyo: true,
        repeat: 1,
        ease: "back.out(2)",
      });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        "a, button, [role='button'], input, textarea, select, .product-interactive, [data-cursor-peanut]"
      );
      if (target) {
        isHoveringInteractive = true;
        gsap.to(dot, { scale: 0.5, opacity: 0.5, duration: 0.2 });
        gsap.to(peanut, {
          opacity: 1,
          scale: 1.35,
          duration: 0.3,
          ease: "back.out(1.8)",
        });
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        "a, button, [role='button'], input, textarea, select, .product-interactive, [data-cursor-peanut]"
      );
      if (target) {
        isHoveringInteractive = false;
        gsap.to(dot, { scale: 1, opacity: 1, duration: 0.2 });
        gsap.to(peanut, {
          opacity: 0.85,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <>
      {/* 1. Precise Small Brown Dot (Exact cursor point) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#70421F] pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 shadow-sm"
      />

      {/* 2. Floating Peanut Companion (Trailing smoothly with physics) */}
      <div
        ref={peanutRef}
        className="fixed top-0 left-0 w-6 h-9 pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2 opacity-75 will-change-transform drop-shadow-[0_4px_10px_rgba(112,66,31,0.25)]"
      >
        <Image
          src="/images/single-kernel-cutout.png"
          alt="Cursor Peanut Companion"
          fill
          sizes="24px"
          className="object-contain"
          priority
        />
      </div>
    </>
  );
}
