"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ProductItem {
  id: string;
  num: string;
  name: string;
  category: string;
  description: string;
  specs: { label: string; value: string }[];
  image: string;
  tint: string;
  slug: string;
}

const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "bold",
    num: "01",
    name: "BOLD PEANUTS",
    category: "Runner Type • Large Caliber",
    description:
      "Elongated, robust reddish kernels preferred internationally for whole snack roasting, confectionery enrobing, and premium peanut butter milling.",
    specs: [
      { label: "Caliber Counts / Oz", value: "38/42, 40/50, 50/60" },
      { label: "Moisture Content", value: "Max 7.0% (Oven Tested)" },
      { label: "Aflatoxin Threshold", value: "< 4.0 PPB Total" },
      { label: "Purity Grade", value: "99.5% Double Sortex" },
    ],
    image: "/images/peanut-bold.webp",
    tint: "#F4EBDD",
    slug: "bold-peanuts",
  },
  {
    id: "java",
    num: "02",
    name: "JAVA PEANUTS",
    category: "Spanish Type • Round Confectionery",
    description:
      "Naturally spheroidal, sweet-profile groundnuts with high natural oil concentration, engineered for candy coatings, dragées, and smooth confectionery spreads.",
    specs: [
      { label: "Caliber Counts / Oz", value: "50/60, 60/70, 70/80" },
      { label: "Moisture Content", value: "Max 7.0%" },
      { label: "Oil Content", value: "48% – 50% High Oleic" },
      { label: "Optical Sorting", value: "100% Bichromatic CCD" },
    ],
    image: "/images/peanut-bold.webp",
    tint: "#EFE6DA",
    slug: "java-peanuts",
  },
  {
    id: "blanched",
    num: "03",
    name: "BLANCHED PEANUTS",
    category: "Skinless • Whole & Split Halves",
    description:
      "Gently heat-shocked and decorticated to achieve 99.9% skin removal with zero cotyledon heat scorching, providing a pristine ivory culinary canvas.",
    specs: [
      { label: "Form Factor", value: "Whole Blanched & Split" },
      { label: "Skin Residue", value: "< 0.5% Allowed" },
      { label: "Broken Ratio", value: "< 2.0% Maximum" },
      { label: "Packaging", value: "Vacuum Nitrogen Barrier" },
    ],
    image: "/images/blanched-peanuts.webp",
    tint: "#F8F4EC",
    slug: "whole-blanched-peanuts",
  },
  {
    id: "redskin",
    num: "04",
    name: "RED SKIN PEANUTS",
    category: "Traditional Sun-Cured Varietal",
    description:
      "Deep mahogany-red seed coats loaded with beneficial plant polyphenols and resveratrol, delivering an earthy astringent crunch demanded by specialty bakers.",
    specs: [
      { label: "Origin Mandi", value: "Shivpuri, Madhya Pradesh" },
      { label: "Moisture Profile", value: "6.5% – 7.5%" },
      { label: "Admixture", value: "Zero Tolerance Foreign" },
      { label: "Shelf Life", value: "12 Months Controlled Temp" },
    ],
    image: "/images/peanut-bold.webp",
    tint: "#F4E5DC",
    slug: "bold-peanuts",
  },
  {
    id: "roasted",
    num: "05",
    name: "ROASTED & SALTED",
    category: "Hot-Air Convective Roasted",
    description:
      "Continuously roasted through uniform multi-zone convective ovens to evoke deep caramelized aromas, sealed with micro-fine iodized seasoning.",
    specs: [
      { label: "Roast Profile", value: "Medium Golden Nut" },
      { label: "Salt Level", value: "1.2% – 1.8% Optional" },
      { label: "Peroxide Value", value: "< 3.0 meq/kg" },
      { label: "Certification", value: "Phytosanitary & Lab Certified" },
    ],
    image: "/images/peanut-roasted.webp",
    tint: "#EFE1D2",
    slug: "roasted-peanuts",
  },
];

export default function ProductUniverseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTrackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const productSlidesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const total = PRODUCTS_DATA.length;

      const pin = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${total * 1600}`,
        pin: pinTrackRef.current,
        scrub: 1,
        anticipatePin: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${total * 1600}`,
          scrub: 1,
        },
      });

      PRODUCTS_DATA.forEach((_, idx) => {
        const time = idx * 1.0;
        const endTime = time + 1.0;

        if (idx === 0) {
          gsap.set(productSlidesRef.current[0], { opacity: 1, pointerEvents: "auto" });
        } else {
          tl.fromTo(
            productSlidesRef.current[idx],
            { opacity: 0, x: 60, pointerEvents: "none" },
            {
              opacity: 1,
              x: 0,
              pointerEvents: "auto",
              duration: 0.4,
              ease: "power2.out",
              onStart: () => setActiveIdx(idx),
            },
            time
          );
        }

        if (idx < total - 1) {
          tl.to(
            productSlidesRef.current[idx],
            { opacity: 0, x: -60, pointerEvents: "none", duration: 0.35, ease: "power2.in" },
            endTime - 0.25
          );
        }
      });

      return () => {
        pin.kill();
        tl.kill();
      };
    });

    mm.add("(max-width: 1023px)", () => {
      productSlidesRef.current.forEach((slide) => {
        if (!slide) return;
        gsap.fromTo(
          slide,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: slide,
              start: "top 80%",
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  const addSlideRef = (el: HTMLDivElement | null) => {
    if (el && !productSlidesRef.current.includes(el)) {
      productSlidesRef.current.push(el);
    }
  };

  const current = PRODUCTS_DATA[activeIdx] || PRODUCTS_DATA[0];

  return (
    <section
      id="products"
      ref={containerRef}
      className="relative w-full bg-[#FBF8F2] text-[#2E2117] overflow-hidden border-t border-[rgba(112,66,31,0.18)]"
    >
      {/* PINNED EDITORIAL PRODUCT PRESENTATION (Desktop) */}
      <div
        ref={pinTrackRef}
        className="hidden lg:flex relative w-full h-screen flex-col justify-between py-10 px-8 lg:px-12 overflow-hidden"
      >
        {/* Top Section Header */}
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between border-b border-[rgba(112,66,31,0.18)] pb-4 z-20">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#70421F]" />
            <span className="text-xs font-mono tracking-[0.24em] uppercase text-[#70421F] font-semibold">
              Export Portfolio // Agricultural Varieties
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            {PRODUCTS_DATA.map((p, i) => (
              <span
                key={p.id}
                className={`transition-all duration-200 cursor-pointer ${
                  activeIdx === i
                    ? "text-[#70421F] font-bold border-b border-[#70421F]"
                    : "text-[#2E2117]/40 hover:text-[#2E2117]"
                }`}
              >
                0{i + 1}
              </span>
            ))}
          </div>
        </div>

        {/* CENTER STAGE: EDITORIAL 60% IMAGE / 40% INFO LAYOUT */}
        <div className="relative w-full max-w-7xl mx-auto flex-grow flex items-center justify-center my-auto z-20">
          {PRODUCTS_DATA.map((p, idx) => (
            <div
              key={p.id}
              ref={addSlideRef}
              className={`absolute inset-0 w-full h-full grid grid-cols-12 gap-12 lg:gap-16 items-center ${
                idx === 0 ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {/* LEFT: 40% INFORMATION (Cols 1-5) */}
              <div className="col-span-5 space-y-6">
                <div className="space-y-2">
                  <span className="font-serif text-5xl text-[#70421F]/50 block font-light leading-none">
                    {p.num}
                  </span>
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#70421F] font-semibold">
                    {p.category}
                  </div>
                  <h3 className="font-serif text-4xl xl:text-5xl text-[#2E2117] font-normal leading-[1.05]">
                    {p.name}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#2E2117]/75 font-sans font-light leading-relaxed">
                  {p.description}
                </p>

                {/* Technical Specifications List */}
                <div className="space-y-2.5 pt-3 border-t border-[rgba(112,66,31,0.18)]">
                  {p.specs.map((s, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between text-xs font-mono py-1 border-b border-[rgba(112,66,31,0.08)]"
                    >
                      <span className="text-[#2E2117]/60">{s.label}</span>
                      <span className="text-[#2E2117] font-semibold">{s.value}</span>
                    </div>
                  ))}
                </div>

                {/* CTA BUTTON with line expand interaction */}
                <div className="pt-2">
                  <Link
                    href={`/products/${p.slug}`}
                    className="group inline-flex items-center gap-3 text-xs font-sans font-semibold uppercase tracking-wider text-[#70421F] hover:text-[#5A3215] transition-colors"
                  >
                    <span>View Product Specifications</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </Link>
                  <div className="w-16 h-[1.5px] bg-[#70421F] mt-1 group-hover:w-36 transition-all duration-300" />
                </div>
              </div>

              {/* RIGHT: 60% LARGE PRODUCT PHOTOGRAPHY (Cols 6-12) */}
              <div className="col-span-7 flex items-center justify-center">
                <div
                  style={{ backgroundColor: p.tint }}
                  className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-[rgba(112,66,31,0.18)] shadow-[0_12px_35px_rgba(112,66,31,0.06)] group transition-all duration-300"
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 1200px) 60vw, 750px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                  {/* Subtle Label on image */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white text-xs">
                    <span className="font-mono text-[10px] uppercase tracking-widest bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      Standard: Double Sortex Cleaned
                    </span>
                    <span className="font-sans font-medium text-[11px] flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C7A77C]" />
                      Shivpuri Origin
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pagination Info */}
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between border-t border-[rgba(112,66,31,0.18)] pt-3 text-[11px] font-mono text-[#70421F]/70 z-20">
          <span>PRADEEP TRADING COMPANY // BULK EXPORT LOTS</span>
          <span className="text-[#2E2117] font-serif italic text-xs">
            Product {current.num} of 05 — {current.name}
          </span>
          <Link href="#contact" className="hover:underline flex items-center gap-1">
            <span>Inquire Custom Count</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* MOBILE / TABLET VERTICAL STACK (<1024px) */}
      <div className="lg:hidden py-20 px-6 space-y-12">
        <div className="space-y-2 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#70421F]">
            Product Catalog
          </span>
          <h2 className="font-serif text-3xl text-[#2E2117]">
            OUR PRODUCTS
          </h2>
        </div>

        {PRODUCTS_DATA.map((p) => (
          <div
            key={p.id}
            ref={addSlideRef}
            className="p-6 rounded-3xl bg-[#FFFFFF] border border-[rgba(112,66,31,0.18)] space-y-5 shadow-sm"
          >
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#F4EBDD]">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#70421F] uppercase tracking-wider block">
                {p.num} // {p.category}
              </span>
              <h3 className="font-serif text-2xl text-[#2E2117]">
                {p.name}
              </h3>
              <p className="text-xs text-[#2E2117]/75 font-sans font-light leading-relaxed">
                {p.description}
              </p>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-[rgba(112,66,31,0.1)] text-xs font-mono">
              {p.specs.slice(0, 2).map((s, i) => (
                <div key={i} className="flex justify-between text-[#2E2117]">
                  <span className="text-[#70421F]">{s.label}:</span>
                  <span>{s.value}</span>
                </div>
              ))}
            </div>

            <Link
              href={`/products/${p.slug}`}
              className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase text-[#70421F] pt-2"
            >
              <span>View Specifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
