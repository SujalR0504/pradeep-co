"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, PackageCheck, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PackagingSequenceNode {
  step: string;
  stageName: string;
  title: string;
  specs: string;
  description: string;
  image: string;
  badge: string;
}

const PACKAGING_NODES: PackagingSequenceNode[] = [
  {
    step: "01",
    stageName: "PEANUT",
    title: "Double-Sortex Cleaned Kernels",
    specs: "38/42, 40/50, 50/60 Calibrated Calibers",
    description: "Screened and optically sorted kernels ready for packaging at moisture levels maintained below 7.5%.",
    image: "/images/peanut-bold.webp",
    badge: "SORTED ORIGIN",
  },
  {
    step: "02",
    stageName: "PACKAGING",
    title: "Breathable Jute, PP & Vacuum",
    specs: "25kg / 50kg Jute, PP Bags & Multi-Wall Vacuum Cartons",
    description: "Breathable traditional jute burlap for tropical voyages and nitrogen-flushed vacuum barriers for premier confectionery.",
    image: "/images/packaging/authentic-jute-sacks.webp",
    badge: "EXPORT STANDARD",
  },
  {
    step: "03",
    stageName: "PALLET",
    title: "ISPM-15 Heat-Treated Pallets",
    specs: "Fumigated Wooden Bases & Stretch Wrapping",
    description: "Bags are unitized on phytosanitary certified heat-treated wooden pallets, secured with heavy-gauge stretch wrap and corner protectors.",
    image: "/images/packaging/stacked-pallet-export.jpg",
    badge: "UNITIZED CARGO",
  },
  {
    step: "04",
    stageName: "WAREHOUSE",
    title: "Climate-Monitored Lot Staging",
    specs: "Raised Slatted Stacks & Ambient Control",
    description: "Pre-dispatch staging in clean, pest-managed, well-ventilated warehouses with continuous hygrometer moisture tracking.",
    image: "/images/peanut-heap-warehouse.jpg",
    badge: "BONDED STORAGE",
  },
  {
    step: "05",
    stageName: "CONTAINER",
    title: "FCL Maritime Container Stuffing",
    specs: "20ft (19 MT) & 40ft (27 MT) Desiccant Lined",
    description: "Containers lined with kraft moisture-absorbing barrier paper and hanging high-capacity calcium chloride desiccant blankets.",
    image: "/images/container-loading-dock.jpg",
    badge: "PORT DISPATCH",
  },
];

export default function PackagingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const getScrollDistance = () => track.scrollWidth - window.innerWidth + 120;

      // Smooth horizontal camera/sequence movement as user scrolls
      gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="packaging"
      ref={sectionRef}
      className="relative w-full h-screen bg-[#F5EFE5]/50 text-[#2D241D] border-t border-[#5C341B]/12 overflow-hidden flex flex-col justify-between py-12 sm:py-16"
    >
      {/* Top Header */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-[#A4774C] uppercase block">
            08 // PACKAGING &amp; LOGISTICS SEQUENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#5C341B] font-normal tracking-tight">
            PEANUT &rarr; PACKAGING &rarr; PALLET &rarr; WAREHOUSE &rarr; CONTAINER
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#754522]">
          <span>HORIZONTAL LOGISTICS PASS</span>
        </div>
      </div>

      {/* Horizontal Camera Track */}
      <div className="w-full flex-grow flex items-center overflow-visible pl-6 sm:pl-12 lg:pl-20">
        <div
          ref={trackRef}
          className="flex items-stretch gap-6 sm:gap-8 flex-nowrap will-change-transform pr-16 sm:pr-24"
        >
          {PACKAGING_NODES.map((node, i) => (
            <div
              key={node.step}
              className="w-[300px] sm:w-[350px] lg:w-[380px] shrink-0 rounded-3xl bg-[#FCFAF5] border border-[#5C341B]/12 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* Card Header: Step and Stage */}
              <div className="flex items-center justify-between border-b border-[#5C341B]/10 pb-3">
                <span className="font-mono text-xs font-bold text-[#A4774C]">
                  {node.step} // {node.stageName}
                </span>
                <span className="text-[10px] font-sans font-bold tracking-wider text-[#68704E] uppercase">
                  {node.badge}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative w-full h-44 sm:h-48 my-4 rounded-2xl bg-[#F5EFE5] border border-[#5C341B]/10 overflow-hidden">
                <Image
                  src={node.image}
                  alt={node.title}
                  fill
                  sizes="380px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Info Body */}
              <div className="space-y-2">
                <h3 className="font-serif text-xl sm:text-2xl text-[#5C341B] font-normal tracking-tight">
                  {node.title}
                </h3>
                <p className="text-xs font-mono text-[#A4774C] font-semibold">
                  {node.specs}
                </p>
                <p className="text-xs sm:text-sm font-sans text-[#2D241D]/75 leading-relaxed">
                  {node.description}
                </p>
              </div>

              {/* Flow connector at bottom */}
              <div className="pt-4 border-t border-[#5C341B]/10 flex items-center justify-between text-xs font-mono text-[#754522]">
                <span>SEQUENCE {i + 1} / 5</span>
                {i < PACKAGING_NODES.length - 1 ? (
                  <ArrowRight className="w-4 h-4 text-[#A4774C]" />
                ) : (
                  <span className="text-[#68704E] font-bold">READY TO SAIL</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Track Bar */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 flex items-center justify-between text-xs font-sans text-[#A4774C]">
        <span>MARITIME FOOD-GRADE BARRIER CONTROLS // FCL SHIPMENTS</span>
        <span>MUNDRA PORT (INMUN1) DIRECT DESPATCH</span>
      </div>
    </section>
  );
}
