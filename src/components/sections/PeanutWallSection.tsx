"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ArrowUpRight, Compass, Eye } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 64 Artfully distributed peanuts in an editorial composition
interface WallPeanut {
  id: number;
  type: "pod" | "kernel" | "redskin" | "split" | "blanched" | "roasted";
  src: string;
  leftPercent: number; // 0 - 100%
  topPercent: number; // 0 - 100%
  size: number; // px size
  zIndex: number;
  rotation: number;
  parallaxSpeed: number; // scroll multiplier
  productSlug: string;
  productName: string;
}

const PEANUT_TYPES = [
  { type: "pod", src: "/images/new-uploaded-image.png", slug: "peanuts-in-shell", name: "In-Shell Groundnut" },
  { type: "kernel", src: "/images/single-kernel-cutout.png", slug: "bold-peanuts", name: "Bold Peanut Kernel" },
  { type: "redskin", src: "/images/red-kernel-cutout.png", slug: "java-peanuts", name: "Java Red Skin Kernel" },
  { type: "split", src: "/images/split-cotyledon-cutout.png", slug: "split-blanched-peanuts", name: "Split Blanched Cotyledon" },
  { type: "blanched", src: "/images/whole-blanched-peanuts.webp", slug: "whole-blanched-peanuts", name: "Whole Blanched Peanut" },
  { type: "roasted", src: "/images/peanut-roasted.webp", slug: "roasted-peanuts", name: "Roasted Kernel" },
] as const;

export default function PeanutWallSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wallItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const centerTextRef = useRef<HTMLDivElement>(null);
  const [hoveredPeanut, setHoveredPeanut] = useState<WallPeanut | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeHeroPeanut, setActiveHeroPeanut] = useState<WallPeanut | null>(null);

  // Deterministic seed generation for 64 peanut objects
  const peanuts: WallPeanut[] = useMemo(() => {
    return Array.from({ length: 64 }, (_, i) => {
      const typeData = PEANUT_TYPES[i % PEANUT_TYPES.length];

      // Divide screen into dynamic clusters with purposeful overlaps
      const col = i % 8;
      const row = Math.floor(i / 8);

      // Jitter for organic non-grid distribution
      const jitterX = ((i * 37) % 18) - 9;
      const jitterY = ((i * 43) % 16) - 8;

      const leftPercent = Math.max(2, Math.min(94, (col * 12.5) + 6 + jitterX));
      const topPercent = Math.max(3, Math.min(95, (row * 12.5) + 6 + jitterY));

      // 3 Scale Tiers: Macro (180-230px), Medium (85-130px), Tiny (32-55px)
      const scaleTier = i % 7 === 0 ? "macro" : i % 3 === 0 ? "medium" : "tiny";
      const size =
        scaleTier === "macro"
          ? 170 + ((i * 13) % 60)
          : scaleTier === "medium"
          ? 85 + ((i * 17) % 45)
          : 36 + ((i * 11) % 24);

      // Z-Index: some in front of text (z-20), some behind text (z-0)
      const zIndex = scaleTier === "macro" ? (i % 2 === 0 ? 25 : 5) : i % 4 === 0 ? 20 : 1;

      // Parallax speed: large move slow, small move fast
      const parallaxSpeed =
        scaleTier === "macro"
          ? 0.35 + (i % 3) * 0.1
          : scaleTier === "medium"
          ? 0.85 + (i % 4) * 0.15
          : 1.6 + (i % 5) * 0.25;

      const rotation = ((i * 67) % 360) - 180;

      return {
        id: i,
        type: typeData.type,
        src: typeData.src,
        leftPercent,
        topPercent,
        size,
        zIndex,
        rotation,
        parallaxSpeed,
        productSlug: typeData.slug,
        productName: typeData.name,
      };
    });
  }, []);

  // 16 — PRODUCT WALL SCROLL INTERACTION (GSAP Parallax)
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate center text reveal
      gsap.fromTo(
        centerTextRef.current,
        { opacity: 0, scale: 0.92, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );

      // Parallax motion for each peanut based on its calculated speed
      wallItemsRef.current.forEach((el, idx) => {
        if (!el) return;
        const peanut = peanuts[idx];
        const moveDist = (peanut.parallaxSpeed - 1) * 180;

        gsap.to(el, {
          y: -moveDist,
          rotation: peanut.rotation + (idx % 2 === 0 ? 25 : -30),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, [peanuts]);

  // 17 — CURSOR INTERACTION (Desktop Repulsion & Attraction)
  useEffect(() => {
    const isTouch = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const cursorX = e.clientX - rect.left;
      const cursorY = e.clientY - rect.top;
      setMousePos({ x: e.clientX, y: e.clientY });

      // Calculate subtle repulsion for nearby peanuts
      wallItemsRef.current.forEach((el, idx) => {
        if (!el) return;
        const peanut = peanuts[idx];

        // Approximate center of peanut in container pixels
        const peanutX = (peanut.leftPercent / 100) * rect.width;
        const peanutY = (peanut.topPercent / 100) * rect.height;

        const deltaX = cursorX - peanutX;
        const deltaY = cursorY - peanutY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // Within 180px radius: push peanut slightly away
        if (distance < 180) {
          const force = (180 - distance) / 180;
          const pushX = (deltaX / distance) * -22 * force;
          const pushY = (deltaY / distance) * -22 * force;

          gsap.to(el, {
            x: pushX,
            y: pushY,
            duration: 0.4,
            ease: "power2.out",
          });
        } else {
          // Return to normal
          gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          });
        }
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [peanuts]);

  return (
    <section
      id="peanut-wall"
      ref={containerRef}
      className="relative w-full min-h-[110vh] lg:min-h-[130vh] bg-[#FFFDF8] text-[#2E2117] py-24 overflow-hidden border-t border-[#5A3218]/10 select-none"
      style={{ isolation: "isolate" }}
    >
      {/* Background Architectural Canvas Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#5A3218_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.06] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(215,184,146,0.18)_0%,transparent_65%)] pointer-events-none" />

      {/* 15 — EDITORIAL STATEMENT EMBEDDED IN THE WALL (Z-Index 10) */}
      <div
        ref={centerTextRef}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-5 pointer-events-none my-auto pt-16 sm:pt-24"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDF8]/90 border border-[#5A3218]/20 text-xs font-mono tracking-widest text-[#5A3218] uppercase shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#7A4824]" />
          <span>CHAPTER 03 • THE EDITORIAL PRODUCT FIELD</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.96] tracking-tight text-[#2E2117]">
          MILLIONS OF KERNELS.
          <span className="block italic text-[#5A3218] font-light">CALIBRATED TO PERFECTION.</span>
        </h2>

        <p className="text-sm sm:text-base font-sans text-[#2E2117]/80 max-w-xl mx-auto leading-relaxed font-light">
          An infinite field of harvest integrity. Hover any seed to inspect its caliber; click to summon its complete export specification dossier.
        </p>

        <div className="pt-2">
          <span className="text-[11px] font-mono tracking-widest text-[#7A4824] uppercase border-b border-[#5A3218]/30 pb-0.5">
            50–100 PARALLAX ARTIFACTS • INTERACTIVE DESKTOP GRAVITATION
          </span>
        </div>
      </div>

      {/* 15, 16 & 17 — 64 EDITORIAL PEANUT NODES (Scattered across screen) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-auto">
        {peanuts.map((peanut, idx) => (
          <div
            key={peanut.id}
            ref={(el) => {
              wallItemsRef.current[idx] = el;
            }}
            onMouseEnter={() => setHoveredPeanut(peanut)}
            onMouseLeave={() => setHoveredPeanut(null)}
            onClick={() => setActiveHeroPeanut(peanut)}
            className="absolute cursor-pointer transition-transform duration-200 group"
            style={{
              left: `${peanut.leftPercent}%`,
              top: `${peanut.topPercent}%`,
              width: `${peanut.size}px`,
              height: `${peanut.size}px`,
              zIndex: peanut.zIndex,
              transform: `translate(-50%, -50%) rotate(${peanut.rotation}deg)`,
            }}
          >
            <div className="relative w-full h-full transform transition-all duration-300 group-hover:scale-115 group-hover:drop-shadow-[0_20px_35px_rgba(90,50,24,0.40)]">
              <Image
                src={peanut.src}
                alt={peanut.productName}
                fill
                sizes="(max-width: 768px) 60px, 180px"
                className="object-contain drop-shadow-[0_12px_20px_rgba(90,50,24,0.22)]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* 17 — FLOATING CURSOR TOOLTIP (Reveals PRODUCT NAME & VIEW PRODUCT) */}
      {hoveredPeanut && (
        <div
          className="fixed pointer-events-none z-50 px-4 py-2 rounded-full bg-[#5A3218] text-[#FFFDF8] text-xs font-mono tracking-wider shadow-2xl flex items-center gap-2 -translate-x-1/2 -translate-y-12 transition-transform duration-75 border border-[#D7B892]/40"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[#D7B892] animate-ping" />
          <span className="font-bold">{hoveredPeanut.productName}</span>
          <span className="text-[#D7B892]">|</span>
          <span className="text-[10px] text-[#D7B892] uppercase">CLICK TO INSPECT</span>
        </div>
      )}

      {/* MODAL WHEN A PEANUT IS CLICKED (Becomes the hero) */}
      {activeHeroPeanut && (
        <div className="fixed inset-0 z-50 bg-[#2E2117]/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#FFFDF8] border border-[#5A3218]/20 rounded-3xl p-8 max-w-lg w-full space-y-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveHeroPeanut(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#5A3218]/10 flex items-center justify-center text-[#5A3218] hover:bg-[#5A3218] hover:text-[#FFFDF8] transition-colors cursor-pointer"
            >
              ✕
            </button>

            <div className="text-center space-y-3">
              <div className="relative w-44 h-44 mx-auto my-2">
                <Image
                  src={activeHeroPeanut.src}
                  alt={activeHeroPeanut.productName}
                  fill
                  className="object-contain drop-shadow-[0_20px_40px_rgba(90,50,24,0.35)]"
                />
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-[#7A4824] block">
                SELECTED EXPORT SPECIMEN
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#5A3218]">
                {activeHeroPeanut.productName}
              </h3>
              <p className="text-xs text-[#2E2117]/75 font-sans leading-relaxed">
                Optical double-sortex sorted, calibrated to international specifications with zero foreign matter and laboratory aflatoxin certification.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <Link
                href={`/products/${activeHeroPeanut.productSlug}`}
                className="px-6 py-3 rounded-full bg-[#5A3218] text-[#FFFDF8] text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-md hover:bg-[#7A4824] transition-colors"
              >
                <span>VIEW PRODUCT DOSSIER</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D7B892]" />
              </Link>
              <button
                onClick={() => setActiveHeroPeanut(null)}
                className="px-5 py-3 rounded-full bg-[#FFFDF8] border border-[#5A3218]/30 text-[#5A3218] text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#5A3218]/5 transition-colors cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
