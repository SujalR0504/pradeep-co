"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface RootNavIndicatorProps {
  active: boolean;
  color?: string;
}

export default function RootNavIndicator({
  active,
  color = "#70421F",
}: RootNavIndicatorProps) {
  const rootPathRef = useRef<SVGPathElement>(null);
  const branchLeftRef = useRef<SVGPathElement>(null);
  const branchRightRef = useRef<SVGPathElement>(null);
  const podRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!rootPathRef.current) return;

    if (active) {
      // Animate root growing downwards with organic branch tendrils
      const tl = gsap.timeline();
      tl.fromTo(
        rootPathRef.current,
        { strokeDashoffset: 40, strokeDasharray: 40, opacity: 0 },
        { strokeDashoffset: 0, opacity: 1, duration: 0.45, ease: "power2.out" }
      );
      if (branchLeftRef.current && branchRightRef.current) {
        tl.fromTo(
          [branchLeftRef.current, branchRightRef.current],
          { strokeDashoffset: 20, strokeDasharray: 20, opacity: 0 },
          { strokeDashoffset: 0, opacity: 0.8, duration: 0.35, ease: "power1.out" },
          "-=0.2"
        );
      }
      if (podRef.current) {
        tl.fromTo(
          podRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(2)" },
          "-=0.1"
        );
      }
    } else {
      gsap.to(
        [rootPathRef.current, branchLeftRef.current, branchRightRef.current, podRef.current],
        { opacity: 0, duration: 0.2, ease: "power2.in" }
      );
    }
  }, [active]);

  return (
    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-6 pointer-events-none overflow-visible">
      <svg
        viewBox="0 0 48 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        {/* Main taproot growing downward */}
        <path
          ref={rootPathRef}
          d="M24 0 C24 6, 23 10, 25 14 C26 17, 24 20, 24 23"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Secondary left lateral root hair */}
        <path
          ref={branchLeftRef}
          d="M24 8 C20 10, 16 12, 14 15"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          strokeOpacity="0.75"
        />
        {/* Secondary right lateral root hair */}
        <path
          ref={branchRightRef}
          d="M25 12 C28 14, 32 15, 34 18"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          strokeOpacity="0.75"
        />
        {/* Micro pegging pod nodule at the tip */}
        <circle
          ref={podRef}
          cx="24"
          cy="23"
          r="1.8"
          fill={color}
        />
      </svg>
    </div>
  );
}
