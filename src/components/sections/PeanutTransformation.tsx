"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TRANSFORM_CATEGORIES = [
  {
    title: "Bold Peanuts",
    count: "38/42 • 40/50 • 50/60",
    image: "/images/peanut-bold.webp",
    slug: "bold-peanuts",
    x: -240,
    y: -80,
  },
  {
    title: "Java Peanuts",
    count: "50/60 • 60/70 • 70/80",
    image: "/images/peanut-bold.webp",
    slug: "java-peanuts",
    x: 0,
    y: -140,
  },
  {
    title: "In-Shell Pods",
    count: "18/22 • 22/26 Pods/oz",
    image: "/images/peanut-inshell.webp",
    slug: "peanuts-in-shell",
    x: 240,
    y: -80,
  },
  {
    title: "Blanched Split & Whole",
    count: "Zero Skin • 99.9% Purity",
    image: "/images/blanched-peanuts.webp",
    slug: "whole-blanched-peanuts",
    x: -200,
    y: 110,
  },
  {
    title: "Roasted & Salted",
    count: "Aromatic Nut Crunch",
    image: "/images/peanut-roasted.webp",
    slug: "roasted-peanuts",
    x: 0,
    y: 150,
  },
  {
    title: "Pure Oil & Butter",
    count: "Cold-Pressed Virgin",
    image: "/images/peanut-oil-butter.webp",
    slug: "cold-pressed-groundnut-oil",
    x: 200,
    y: 110,
  },
];

export default function PeanutTransformation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerKernelRef = useRef<HTMLDivElement>(null);
  const portalsContainerRef = useRef<HTMLDivElement>(null);
  const portalsRef = useRef<HTMLDivElement[]>([]);
  const floatingKernelsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom 30%",
          scrub: 1,
        },
      });

      // 1. Center kernel scales up then divides/bursts outward
      tl.fromTo(
        centerKernelRef.current,
        { scale: 0.8, opacity: 0.5 },
        { scale: 1.4, opacity: 1, duration: 0.3, ease: "power2.out" }
      )
        // 2. Floating kernels radiate outward
        .to(
          floatingKernelsRef.current,
          {
            opacity: 0.8,
            scale: 1,
            stagger: 0.05,
            duration: 0.4,
            ease: "power3.out",
          },
          "-=0.1"
        )
        // 3. Center kernel dissipates into the portals
        .to(
          centerKernelRef.current,
          {
            scale: 0.2,
            opacity: 0,
            duration: 0.25,
            ease: "power2.in",
          },
          "-=0.2"
        )
        // 4. Product category portals bloom into view
        .fromTo(
          portalsRef.current,
          { scale: 0.5, opacity: 0, y: 30 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            stagger: 0.06,
            duration: 0.5,
            ease: "back.out(1.4)",
          },
          "-=0.2"
        );

      return () => tl.kill();
    });

    mm.add("(max-width: 1023px)", () => {
      // Mobile: Simple staggered reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        portalsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: "power2.out" }
      );

      return () => tl.kill();
    });

    return () => mm.revert();
  }, []);

  const addPortalRef = (el: HTMLDivElement | null) => {
    if (el && !portalsRef.current.includes(el)) {
      portalsRef.current.push(el);
    }
  };

  const addFloatingKernelRef = (el: HTMLDivElement | null) => {
    if (el && !floatingKernelsRef.current.includes(el)) {
      floatingKernelsRef.current.push(el);
    }
  };

  return (
    <section
      ref={containerRef}
      className="py-24 lg:py-32 bg-[#FAF6EE] text-[#2B1A0F] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8A572F]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF7A]" />
            <span>Botanical Versatility</span>
          </div>
          <h2 className="font-serif font-light text-editorial-heading leading-[1.02] tracking-tight text-[#2B1A0F]">
            ONE PEANUT.
            <br />
            <span className="italic font-normal text-[#74431F]">A DIVERSE ECOSYSTEM.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#7D6B5D] font-light max-w-xl mx-auto leading-relaxed">
            From raw, calibrated kernels and sun-cured pods to blanched halves, cold-pressed oil, and roasted specialties — engineered for international food processors.
          </p>
        </div>

        {/* INTERACTIVE MULTIPLICATION STAGE (Desktop visual stage) */}
        <div className="relative min-h-[480px] lg:min-h-[560px] flex items-center justify-center">
          {/* Center Origin Kernel */}
          <div
            ref={centerKernelRef}
            className="absolute w-32 h-32 lg:w-44 lg:h-44 pointer-events-none z-20 will-change-transform drop-shadow-[0_20px_40px_rgba(43,26,15,0.25)]"
          >
            <Image
              src="/images/single-kernel-cutout.png"
              alt="Origin peanut kernel"
              fill
              className="object-contain"
            />
          </div>

          {/* Radiating Floating Peanut Particles */}
          {[
            { x: -140, y: -90, r: -25 },
            { x: 140, y: -90, r: 30 },
            { x: -180, y: 80, r: 15 },
            { x: 180, y: 80, r: -20 },
            { x: 0, y: -190, r: 10 },
            { x: 0, y: 190, r: -15 },
          ].map((pos, idx) => (
            <div
              key={idx}
              ref={addFloatingKernelRef}
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.r}deg)`,
              }}
              className="hidden lg:block absolute w-14 h-14 pointer-events-none z-15 opacity-0 will-change-transform drop-shadow-md"
            >
              <Image
                src="/images/single-kernel-cutout.png"
                alt="Floating kernel"
                fill
                className="object-contain"
              />
            </div>
          ))}

          {/* Product Formats Grid (Radial on Desktop, 2x3 Grid on Tablet/Mobile) */}
          <div
            ref={portalsContainerRef}
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-30"
          >
            {TRANSFORM_CATEGORIES.map((cat) => (
              <div
                key={cat.slug}
                ref={addPortalRef}
                className="group relative p-5 sm:p-6 rounded-2xl bg-[#FFFDF8] border border-[#E8DDCB] hover:border-[#8A572F] transition-all duration-300 hover:shadow-[0_16px_35px_rgba(43,26,15,0.08)] flex flex-col justify-between space-y-4"
              >
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#FAF6EE]">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8A572F]">
                    {cat.count}
                  </span>
                  <h3 className="font-serif text-2xl text-[#2B1A0F] group-hover:text-[#5A3215] transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <Link
                  href={`/products/${cat.slug}`}
                  className="inline-flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#5A3215] pt-2 border-t border-[#E8DDCB]/60 group-hover:text-[#2B1A0F]"
                >
                  <span>Explore Variety</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
