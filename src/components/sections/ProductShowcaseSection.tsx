"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProductItem {
  num: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  grade: string;
  form: string;
  packaging: string;
  application: string;
  slug: string;
  bgSubtle: string;
}

const PRODUCTS: ProductItem[] = [
  {
    num: "01",
    name: "BOLD PEANUTS",
    category: "RAW KERNELS",
    tagline: "Signature large-sized Indian groundnut kernels with characteristic reddish skin and sweet nutty flavor.",
    description:
      "Bold Peanuts are the benchmark of Indian groundnut exports, prized globally for their large kernel size, elongated shape, and rich nutritional profile. Cultivated in fertile mineral-rich soils of Central India and processed through multi-stage optical CCD sorters, delivering uniform caliber, crunch, and optimal oil content.",
    image: "/images/peanut-bold.webp",
    grade: "Double Sortex Clean / Machine Cleaned (99.5% Purity)",
    form: "Whole Raw Kernels • 38/42, 40/50, 50/60, 60/70, 70/80 Counts / Oz",
    packaging: "15/50kg Jute, 15/25/50kg PP, 12.5/25kg Vacuum, 1/1.25 MT Jumbo (Customised)",
    application: "Direct Snacking, Industrial Roasting, Confectionery & Premium Peanut Butter",
    slug: "bold-peanuts",
    bgSubtle: "#FCFAF5",
  },
  {
    num: "02",
    name: "JAVA PEANUTS",
    category: "ROUND HIGH-OIL KERNELS",
    tagline: "Round-shaped, pink-skinned kernels renowned for high oil concentration and uniform roasting profile.",
    description:
      "Java peanuts are distinctively rounded with bright pink skins and high natural oil concentration (50–52%). Their consistent spherical shape ensures even heat distribution during commercial roasting and blanching, making them the preferred choice worldwide for premier confectionery, candy bars, and paste.",
    image: "/images/single-kernel-cutout.png",
    grade: "Export Grade / Electronic Sortex Cleaned (< 0.5% Broken)",
    form: "Spherical Kernels • 40/50, 45/55, 50/60, 60/70, 70/80, 80/90 Counts / Oz",
    packaging: "15/50kg Jute, 15/25/50kg PP, 12.5/25kg Vacuum, 1/1.25 MT Jumbo (Customised)",
    application: "Confectionery Bars, High-Yield Cold Oil Pressing, Nougat, Extruded Snacks",
    slug: "java-peanuts",
    bgSubtle: "#FAF6EE",
  },
  {
    num: "03",
    name: "BLANCHED PEANUTS",
    category: "SKIN-REMOVED KERNELS (WHOLE & SPLIT)",
    tagline: "Pristine ivory-white whole kernels and split cotyledons with gentle steam skin-removal and optical sorting.",
    description:
      "Whole & Split Blanched Peanuts are produced by gently warming graded raw kernels, loosening skins through precision rubber de-skinning rollers, and optical sorters. The result is a pristine, ivory-white nut kernel ready for instant industrial frying, coating, chocolate panning, and ultra-smooth nut butter.",
    image: "/images/whole-blanched-peanuts.webp",
    grade: "Grade A / 100% Skin Removed / Sortex Cleaned",
    form: "Whole & Split Halves • 38/42, 40/50, 50/60 Counts / Oz Equivalent",
    packaging: "15/50kg Jute, 15/25/50kg PP, 12.5/25kg Vacuum, 1/1.25 MT Jumbo (Customised)",
    application: "Gourmet Snack Packs, Chocolate Center Dragees, Peanut Butter Milling",
    slug: "whole-blanched-peanuts",
    bgSubtle: "#F8F4EA",
  },
  {
    num: "04",
    name: "RED SKIN PEANUTS",
    category: "SPECIALTY HIGH-ANTIOXIDANT KERNELS",
    tagline: "Characteristic reddish-brown testae with concentrated polyphenols and intense roasted aroma.",
    description:
      "Selected for rich coloration, robust skin adherence, and sweet aromatic crunch. Especially favored across Middle Eastern and Southeast Asian snack markets for traditional roasting with natural edible skins that seal in freshness and natural nut fats.",
    image: "/images/red-kernel-cutout.png",
    grade: "Export Standard / Double Sortex Cleaned",
    form: "Calibrated Whole Red Kernels • 50/60, 60/70, 70/80 Counts / Oz",
    packaging: "25 kg / 50 kg Aerated Jute Sacks & Vacuum Barrier Cartons",
    application: "Traditional Roasted Snacks, Salted In-Skin Nut Packs, Ethnic Trail Mixes",
    slug: "bold-peanuts",
    bgSubtle: "#FDF9F3",
  },
  {
    num: "05",
    name: "GROUNDNUTS IN-SHELL",
    category: "NATURAL PODS (HPS GRADE)",
    tagline: "Unbroken, naturally sun-cured peanut pods containing firm kernels inside clean fibrous shells.",
    description:
      "Harvested at peak physiological maturity, our In-Shell Groundnuts undergo gentle de-stoning, mechanical de-dusting, and thorough hand-sorting (HPS). The shells are bright, fibrous, and structurally robust, protecting the inner kernels from oxidation and preserving harvest sweetness for bulk trade.",
    image: "/images/peanut-inshell.webp",
    grade: "Hand Picked Selected (HPS) / Machine Cleaned & Destoned",
    form: "Intact Double/Triple Kernel Pods • 18/22, 22/26 Pods / Ounce",
    packaging: "15/50kg Jute, 15/25/50kg PP, 12.5/25kg Vacuum, 1/1.25 MT Jumbo (Customised)",
    application: "Traditional Sand Roasting, Shell Snacking Markets, Wholesale Pod Repackaging",
    slug: "peanuts-in-shell",
    bgSubtle: "#FBF7EF",
  },
  {
    num: "06",
    name: "ROASTED PEANUTS",
    category: "VALUE-ADDED SNACK GRADE",
    tagline: "Evenly roasted peanuts offering intense aromatic nuttiness, available salted, unsalted, and split.",
    description:
      "Processed in controlled temperature rotary drum roasters to achieve a uniform golden roast and signature snap. Available in whole kernels, split, salted, or traditional dry-roasted styles that maintain their crispness and shelf life across long ocean transits.",
    image: "/images/peanut-roasted.webp",
    grade: "Ready-to-Eat Export Certified / Moisture < 3.0%",
    form: "Calibrated 40/50, 50/60 Counts / Whole & Split Kernels",
    packaging: "Vacuum Foil Pouches (1kg, 5kg) & 25kg Food Grade Cartons with Nitrogen Flush",
    application: "Retail Snack Distribution, Trail Mix Formulation, Bakery & Dessert Toppings",
    slug: "roasted-peanuts",
    bgSubtle: "#FAF5EA",
  },
  {
    num: "07",
    name: "COLD-PRESSED GROUNDNUT OIL",
    category: "VIRGIN EXPELLER PRESSED",
    tagline: "Pure unrefined expeller-pressed peanut oil with a high smoke point and authentic sweet groundnut aroma.",
    description:
      "Extracted using traditional slow mechanical expellers without chemical refining, solvents, or excessive heat. Preserves natural antioxidants, phytosterols, and delicate mono-unsaturated fats, making it a high-grade culinary oil sought after for gourmet cooking and fine food manufacturing.",
    image: "/images/peanut-oil-butter.webp",
    grade: "100% Virgin Food Grade / Unrefined / Moisture < 0.15%",
    form: "Pure Cold-Pressed Arachis Oil",
    packaging: "15L Tins, 200L Steel Drums, 1000L IBC Tanks, 21 MT Flexibags",
    application: "High-Heat Gourmet Frying, Artisanal Food Seasoning, Clean-Label Dressings",
    slug: "cold-pressed-groundnut-oil",
    bgSubtle: "#FCF9F2",
  },
  {
    num: "08",
    name: "PURE NATURAL PEANUT BUTTER",
    category: "STONE-GROUND SPREAD",
    tagline: "100% roasted groundnut paste with zero hydrogenated oils, available in Creamy and Crunchy textures.",
    description:
      "Crafted exclusively from selected Indian roasted peanuts. Ground in stone mills to achieve micron-level smoothness or custom-formulated with roasted peanut granulate for crunchiness. Tailored for private label retail, bulk food-service pails, and confectionery ingredients.",
    image: "/images/peanut-oil-butter.webp",
    grade: "100% Pure Peanut Paste / Zero Hydrogenated Fats / Tested Lot-by-Lot",
    form: "Creamy, Crunchy & Super-Fine Styles",
    packaging: "340g / 500g / 1kg Jars, 20 kg Food Service Buckets, 200 kg Drums",
    application: "Private Label Brands, Breakfast Spreads, Sports Nutrition, Bakery Fillings",
    slug: "pure-peanut-butter",
    bgSubtle: "#FAF6ED",
  },
];

export default function ProductShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);

  const imgContainerRef = useRef<HTMLDivElement>(null);
  const infoContainerRef = useRef<HTMLDivElement>(null);

  // Transition to a specific product with the exact requested animation:
  // Current product: opacity 1, scale 1 -> scale 0.96, opacity 0
  // New product: scale 1.04, opacity 0 -> scale 1, opacity 1
  // Duration: 0.7 - 1.0s, Ease: power3.out
  const transitionToProduct = (nextIndex: number) => {
    if (nextIndex === currentIndexRef.current || isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const imgEl = imgContainerRef.current;
    const infoEl = infoContainerRef.current;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimatingRef.current = false;
      },
    });

    // Step 1: Animate current out
    if (imgEl && infoEl) {
      tl.to([imgEl, infoEl], {
        scale: 0.96,
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          currentIndexRef.current = nextIndex;
          setCurrentIndex(nextIndex);
        },
      });

      // Step 2: Animate new in
      tl.fromTo(
        [imgEl, infoEl],
        { scale: 1.04, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    } else {
      currentIndexRef.current = nextIndex;
      setCurrentIndex(nextIndex);
      isAnimatingRef.current = false;
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Pinned scroll-driven trigger
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: stickyRef.current,
        scrub: true,
        onUpdate: (self) => {
          const totalProducts = PRODUCTS.length;
          // Calculate active index from scroll progress
          const progress = self.progress;
          const targetIndex = Math.min(
            totalProducts - 1,
            Math.floor(progress * totalProducts)
          );

          if (targetIndex !== currentIndexRef.current) {
            transitionToProduct(targetIndex);
          }
        },
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  const activeProduct = PRODUCTS[currentIndex];

  return (
    <section
      id="products"
      ref={containerRef}
      className="relative w-full min-h-[420vh] bg-[#FCFAF5] text-[#2D241D]"
    >
      {/* Pinned Viewport Container */}
      <div
        ref={stickyRef}
        className="w-full h-screen min-h-[640px] flex flex-col justify-between py-12 sm:py-16 px-6 sm:px-8 lg:px-12 transition-colors duration-700 overflow-hidden"
        style={{ backgroundColor: activeProduct.bgSubtle }}
      >
        {/* Top Header Bar */}
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#5C341B]/12 pb-4">
          <div>
            <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-[#A4774C] uppercase block">
              03 // PEANUT PRODUCT SHOWCASE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#5C341B] font-normal tracking-tight">
              SCROLL TO EXPLORE EXPORT CALIBERS
            </h2>
          </div>

          {/* Product Pill Track for direct interaction */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {PRODUCTS.map((prod, idx) => (
              <button
                key={prod.num}
                onClick={() => transitionToProduct(idx)}
                className={`px-3 py-1 rounded-full text-[11px] font-sans font-bold transition-all cursor-pointer ${
                  currentIndex === idx
                    ? "bg-[#5C341B] text-[#FCFAF5] shadow-xs"
                    : "bg-[#F5EFE5] text-[#2D241D]/60 hover:text-[#5C341B] hover:bg-[#F5EFE5]/80"
                }`}
              >
                {prod.num}
              </button>
            ))}
          </div>
        </div>

        {/* Center Main Stage: LEFT Image, RIGHT Information */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center flex-grow py-4">
          {/* LEFT: Large Product Image with GSAP Transition */}
          <div className="lg:col-span-6 h-[260px] sm:h-[340px] lg:h-[440px] relative flex items-center justify-center">
            <div
              ref={imgContainerRef}
              className="relative w-full h-full max-w-[460px] max-h-[420px] rounded-3xl bg-[#F5EFE5]/70 border border-[#5C341B]/12 p-8 flex items-center justify-center shadow-xs overflow-hidden"
            >
              {/* Subtle ambient lighting */}
              <div className="absolute inset-0 bg-radial from-[#A4774C]/15 via-transparent to-transparent pointer-events-none" />

              {/* Product Photography */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain filter drop-shadow-xl"
                  priority
                />
              </div>

              {/* Origin / Category Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FCFAF5]/95 backdrop-blur-xs border border-[#5C341B]/12 text-[10px] font-sans font-bold tracking-wider text-[#A4774C] uppercase shadow-xs">
                {activeProduct.category}
              </div>

              {/* Number Watermark */}
              <div className="absolute bottom-3 right-4 font-serif text-5xl font-bold text-[#5C341B]/10 select-none">
                {activeProduct.num}
              </div>
            </div>
          </div>

          {/* RIGHT: Product Information */}
          <div
            ref={infoContainerRef}
            className="lg:col-span-6 flex flex-col justify-center space-y-5"
          >
            {/* Header / Name */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#A4774C]">
                  {activeProduct.num} / 08
                </span>
                <span className="h-px w-8 bg-[#A4774C]/40" />
                <span className="text-[11px] font-sans font-bold tracking-[0.16em] text-[#68704E] uppercase">
                  CONFIRMED COMMODITY
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#5C341B] tracking-tight leading-none">
                {activeProduct.name}
              </h3>

              <p className="text-sm font-sans text-[#754522] font-medium leading-relaxed">
                {activeProduct.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm font-sans text-[#2D241D]/80 leading-relaxed max-w-xl">
              {activeProduct.description}
            </p>

            {/* PRODUCT DETAILS GRID: GRADE, FORM, PACKAGING, APPLICATION */}
            <div className="border-t border-[#5C341B]/12 pt-4 space-y-3 text-xs font-sans">
              <span className="text-[10px] font-sans font-bold tracking-wider text-[#A4774C] uppercase block">
                PRODUCT DETAILS &amp; EXPORT BENCHMARKS
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-[#F5EFE5]/70 border border-[#5C341B]/10 space-y-1">
                  <span className="text-[10px] font-sans font-bold text-[#A4774C] uppercase block">
                    GRADE SPECIFICATION
                  </span>
                  <p className="text-xs font-semibold text-[#2D241D] leading-snug">
                    {activeProduct.grade}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#F5EFE5]/70 border border-[#5C341B]/10 space-y-1">
                  <span className="text-[10px] font-sans font-bold text-[#A4774C] uppercase block">
                    FORM &amp; SIZING
                  </span>
                  <p className="text-xs font-semibold text-[#2D241D] leading-snug">
                    {activeProduct.form}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#F5EFE5]/70 border border-[#5C341B]/10 space-y-1">
                  <span className="text-[10px] font-sans font-bold text-[#A4774C] uppercase block">
                    PACKAGING
                  </span>
                  <p className="text-xs font-semibold text-[#2D241D] leading-snug">
                    {activeProduct.packaging}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#F5EFE5]/70 border border-[#5C341B]/10 space-y-1">
                  <span className="text-[10px] font-sans font-bold text-[#A4774C] uppercase block">
                    APPLICATION
                  </span>
                  <p className="text-xs font-semibold text-[#2D241D] leading-snug">
                    {activeProduct.application}
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={`/products/${activeProduct.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5C341B] hover:bg-[#754522] text-[#FCFAF5] text-xs font-sans font-bold uppercase tracking-wider transition-colors shadow-xs"
              >
                <span>VIEW PRODUCT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={`/contact?product=${encodeURIComponent(activeProduct.name)}`}
                className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-[#754522] hover:text-[#5C341B] transition-colors"
              >
                <span>REQUEST QUOTE FOR THIS LOT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Progress Bar */}
        <div className="max-w-7xl mx-auto w-full pt-4 border-t border-[#5C341B]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-[#A4774C]">
              ACTIVE: {activeProduct.num} / 08
            </span>
            <div className="w-32 h-1 bg-[#5C341B]/15 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#5C341B] transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / PRODUCTS.length) * 100}%` }}
              />
            </div>
          </div>

          <span className="text-[10px] font-sans uppercase tracking-widest text-[#2D241D]/50 hidden sm:block">
            SCROLL DOWN TO ADVANCE PEANUT VARIETIES
          </span>
        </div>
      </div>
    </section>
  );
}
