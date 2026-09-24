"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowUpRight, CheckCircle2, ChevronRight, ChevronLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";

interface ProductItem {
  id: string;
  name: string;
  sub: string;
  category: string;
  image: string;
  description: string;
  counts: string;
  moisture: string;
  oil: string;
  skinColor: string;
  packaging: string;
  bgTint: string;
  transformStyle: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: "bold",
    name: "Bold Peanuts",
    sub: "Large Elongated Kernel Type",
    category: "RAW EXPORT GRADE",
    image: "/images/peanut-bold.webp",
    description: "Characteristic reddish-brown thin papery skin with prominent teardrop elongation. High natural sweetness and crunch, perfect for confectionery roasting and direct snacking.",
    counts: "38/42, 40/50, 50/60 / oz",
    moisture: "7.0% - 8.0% Max",
    oil: "48% - 50% Min",
    skinColor: "Deep Reddish Brown",
    packaging: "25kg / 50kg Jute or PP Bags",
    bgTint: "from-[#F7F0E5] via-[#FCFAF5] to-[#E8D8C1]",
    transformStyle: "scale-105 rotate-6",
  },
  {
    id: "java",
    name: "Java Peanuts",
    sub: "Spherical Compact Confectionery",
    category: "HIGH-OIL CONFECTIONERY",
    image: "/images/peanut-bold.webp",
    description: "Delicate pink skin with compact round kernel shape. Exceptionally even oil saturation and uniform roasting characteristics make it ideal for nougat, brittle, and bars.",
    counts: "40/50, 50/60, 60/70, 70/80 / oz",
    moisture: "7.0% Max",
    oil: "50% - 52% Min",
    skinColor: "Natural Rose Pink",
    packaging: "Vacuum Bags / 50kg Jute Sacks",
    bgTint: "from-[#FBF8F2] via-[#F7F0E5] to-[#E5D2B8]",
    transformStyle: "scale-95 -rotate-6",
  },
  {
    id: "redskin",
    name: "Red Skin (TJ / Spanish)",
    sub: "Crimson Antioxidant Husk",
    category: "SPECIALTY HIGH-FLAVOR",
    image: "/images/single-kernel-cutout.png",
    description: "Distinctive ruby-crimson papery husk with rounded caliber. High natural polyphenol concentration and signature intense nutty aroma, prized for traditional snacks.",
    counts: "50/60, 60/70, 70/80 / oz",
    moisture: "6.5% - 7.5% Max",
    oil: "49% - 51% Min",
    skinColor: "Deep Ruby Crimson",
    packaging: "25kg / 50kg Jute Sacks",
    bgTint: "from-[#FBEAE6] via-[#F7F0E5] to-[#D9B4A8]",
    transformStyle: "scale-100 rotate-15",
  },
  {
    id: "blanched",
    name: "Whole Blanched Peanuts",
    sub: "Skinless Ivory Cotyledons",
    category: "PROCESSED WHOLE",
    image: "/images/whole-blanched-peanuts.webp",
    description: "100% skin removed through gentle thermal blanching. Spotless ivory-white surface with preserved natural fats, ready for chocolate dragees, peanut butter, and gourmet salting.",
    counts: "38/42, 40/50, 50/60 / oz",
    moisture: "5.0% - 6.0% Max",
    oil: "49% - 51%",
    skinColor: "Pure Ivory White",
    packaging: "25kg Vacuum Cartons / Poly-lined Bags",
    bgTint: "from-[#FCFAF5] via-[#F5EFE6] to-[#E0D0BB]",
    transformStyle: "scale-100 -rotate-3",
  },
  {
    id: "roasted",
    name: "Roasted Kernels",
    sub: "Aromatic Golden Crisp",
    category: "VALUE-ADDED SNACK",
    image: "/images/peanut-roasted.webp",
    description: "Evenly hot-air roasted to caramel golden perfection. Preserves crisp fracture texture and intensely concentrated aroma for ready-to-eat export packing.",
    counts: "Calibrated 40/50, 50/60",
    moisture: "2.5% - 3.5% Max",
    oil: "Preserved Natural Fats",
    skinColor: "Warm Caramel Gold",
    packaging: "Nitrogen Flushed Foil Pouches / Bulk",
    bgTint: "from-[#F5ECE0] via-[#E8D8C1] to-[#D9BE9B]",
    transformStyle: "scale-105 rotate-10",
  },
  {
    id: "inshell",
    name: "Groundnut In-Shell",
    sub: "Double Pod Natural Pods",
    category: "WHOLE RAW HARVEST",
    image: "/images/single-pod-cutout.png",
    description: "Field-dried double-kernel groundnuts in intact fibrous husks. Machine-cleaned and destoned to remove soil residue while protecting raw kernels inside.",
    counts: "Field Calibrated Pods",
    moisture: "8.0% - 9.0% Max",
    oil: "48% - 50%",
    skinColor: "Natural Sand Beige Husk",
    packaging: "30kg / 40kg Ventilated Jute Bags",
    bgTint: "from-[#F7F0E5] via-[#E8D8C1] to-[#DAC4A9]",
    transformStyle: "scale-110 -rotate-12",
  },
];

export default function Scene07ProductLandscape() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroImageWrapperRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const currentProduct = PRODUCTS[activeIndex];

  // Subtle interactive parallax for surrounding photography collage
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const qx1 = gsap.quickTo(card1Ref.current, "x", { duration: 0.8, ease: "power2.out" });
    const qy1 = gsap.quickTo(card1Ref.current, "y", { duration: 0.8, ease: "power2.out" });
    const qx2 = gsap.quickTo(card2Ref.current, "x", { duration: 1.1, ease: "power2.out" });
    const qy2 = gsap.quickTo(card2Ref.current, "y", { duration: 1.1, ease: "power2.out" });
    const qx3 = gsap.quickTo(card3Ref.current, "x", { duration: 1.4, ease: "power2.out" });
    const qy3 = gsap.quickTo(card3Ref.current, "y", { duration: 1.4, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;

      qx1(relX * -25);
      qy1(relY * -20);
      qx2(relX * 30);
      qy2(relY * 25);
      qx3(relX * -18);
      qy3(relY * 18);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSelectProduct = (index: number) => {
    if (index === activeIndex) return;

    // Elegant GSAP transformation transition between products
    const imgWrapper = heroImageWrapperRef.current;
    const details = detailsRef.current;

    const tl = gsap.timeline();
    tl.to(imgWrapper, {
      scale: 0.82,
      opacity: 0.3,
      rotate: index > activeIndex ? 15 : -15,
      duration: 0.25,
      ease: "power2.in",
    })
      .to(details, { opacity: 0, x: -20, duration: 0.2 }, 0)
      .call(() => {
        setActiveIndex(index);
      })
      .to(imgWrapper, {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 0.45,
        ease: "back.out(1.6)",
      })
      .to(details, { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" }, "-=0.25");
  };

  const handleNext = () => {
    handleSelectProduct((activeIndex + 1) % PRODUCTS.length);
  };

  const handlePrev = () => {
    handleSelectProduct((activeIndex - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  return (
    <section
      id="products-universe"
      ref={containerRef}
      className={`relative w-full min-h-screen py-20 px-6 sm:px-12 lg:px-20 bg-gradient-to-b ${currentProduct.bgTint} text-[#2E2117] transition-colors duration-700 flex flex-col justify-between overflow-hidden select-none`}
    >
      {/* Background Subtle Organic Textures */}
      <div className="absolute inset-0 bg-agricultural-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-grain-texture opacity-30 pointer-events-none" />

      {/* Floating Ambient Peanut Particles */}
      {[
        { x: "12%", y: "24%", size: 36, r: 20 },
        { x: "85%", y: "18%", size: 28, r: -35 },
        { x: "78%", y: "78%", size: 44, r: 45 },
        { x: "8%", y: "82%", size: 32, r: -15 },
      ].map((p, i) => (
        <div
          key={i}
          style={{
            top: p.y,
            left: p.x,
            width: `${p.size}px`,
            height: `${p.size * 1.35}px`,
            transform: `rotate(${p.r}deg)`,
          }}
          className="absolute pointer-events-none opacity-40 animate-peanut-float peanut-drop-shadow hidden md:block"
        >
          <Image
            src="/images/single-kernel-cutout.png"
            alt="Floating peanut particle"
            fill
            className="object-contain"
          />
        </div>
      ))}

      {/* TOP HEADER: Editorial Category Indicator */}
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-20">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FCFAF5]/80 border border-[#70421F]/20 text-[10px] font-mono tracking-[0.25em] text-[#70421F] uppercase font-bold">
            <Sparkles className="w-3 h-3 text-[#70421F]" />
            <span>CHAPTER 06 // CARDLESS PRODUCT UNIVERSE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#2E2117] font-normal mt-2 tracking-tight">
            Agricultural Portfolio.
          </h2>
        </div>

        {/* Product Variant Quick Switcher Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 sm:pb-0">
          {PRODUCTS.map((prod, idx) => (
            <button
              key={prod.id}
              onClick={() => handleSelectProduct(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-sans tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
                idx === activeIndex
                  ? "bg-[#70421F] text-[#FCFAF5] font-bold shadow-md"
                  : "bg-[#FCFAF5]/60 hover:bg-[#FCFAF5] text-[#70421F] border border-[#70421F]/15"
              }`}
            >
              {prod.name}
            </button>
          ))}
        </div>
      </div>

      {/* CENTER HERO PRODUCT STAGE (CARDLESS DOMINANCE) */}
      <div className="w-full max-w-7xl mx-auto my-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center z-20">
        {/* LEFT: Technical Specifications & Editorial Narrative */}
        <div ref={detailsRef} className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-[0.3em] text-[#70421F] uppercase font-bold block">
              {currentProduct.category} • {currentProduct.sub}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#2E2117] leading-[1.02] font-normal tracking-tight">
              {currentProduct.name}
            </h1>
          </div>

          <p className="text-sm sm:text-base font-sans text-[#2E2117]/80 leading-relaxed max-w-xl">
            {currentProduct.description}
          </p>

          {/* Technical Specs Editorial Grid */}
          <div className="grid grid-cols-2 gap-3 max-w-lg pt-2">
            <div className="p-3.5 rounded-2xl bg-[#FCFAF5]/85 border border-[#70421F]/15 backdrop-blur-sm">
              <span className="text-[10px] font-mono tracking-widest text-[#70421F]/80 uppercase block">
                EXPORT CALIBER COUNTS
              </span>
              <span className="text-sm font-sans font-bold text-[#2E2117] mt-0.5 block">
                {currentProduct.counts}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FCFAF5]/85 border border-[#70421F]/15 backdrop-blur-sm">
              <span className="text-[10px] font-mono tracking-widest text-[#70421F]/80 uppercase block">
                MOISTURE LIMIT
              </span>
              <span className="text-sm font-sans font-bold text-[#2E2117] mt-0.5 block">
                {currentProduct.moisture}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FCFAF5]/85 border border-[#70421F]/15 backdrop-blur-sm">
              <span className="text-[10px] font-mono tracking-widest text-[#70421F]/80 uppercase block">
                NATURAL OIL DENSITY
              </span>
              <span className="text-sm font-sans font-bold text-[#2E2117] mt-0.5 block">
                {currentProduct.oil}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FCFAF5]/85 border border-[#70421F]/15 backdrop-blur-sm">
              <span className="text-[10px] font-mono tracking-widest text-[#70421F]/80 uppercase block">
                STANDARDIZED PACKAGING
              </span>
              <span className="text-sm font-sans font-bold text-[#2E2117] mt-0.5 block">
                {currentProduct.packaging}
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-4 pt-4">
            <MagneticButton strength={12}>
              <a
                href="#contact-cta"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#70421F] text-[#FCFAF5] hover:bg-[#8A5A34] text-xs font-sans font-bold tracking-wider uppercase transition-all shadow-[0_8px_20px_rgba(112,66,31,0.2)] cursor-pointer"
              >
                <span>Request Quotation</span>
                <ArrowUpRight className="w-4 h-4 text-[#E8D8C1]" />
              </a>
            </MagneticButton>

            <a
              href="#sorting-lab"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#70421F] hover:underline"
            >
              <span>View Sortex Calibration</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* RIGHT: MONUMENTAL PRODUCT VISUAL (DOMINATES VIEWPORT WITH ASYMMETRIC PHOTOGRAPHY COLLAGE) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
          {/* Ambient Warm Backlight Glow */}
          <div className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#B88755]/20 blur-3xl pointer-events-none" />

          {/* Asymmetric Photography Floating Card 1: Warehouse Convergence (Top-Right) */}
          <div
            ref={card1Ref}
            className="hidden sm:block absolute -top-8 -right-4 z-10 w-52 md:w-60 rounded-2xl overflow-hidden shadow-2xl border border-[#70421F]/25 bg-[#FCFAF5]/90 backdrop-blur-md transform rotate-3 hover:rotate-0 transition-transform duration-500 group"
          >
            <div className="relative w-full h-28 md:h-32">
              <Image
                src="/images/peanut-heap-warehouse.jpg"
                alt="Warehouse convergence mound"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="p-2.5">
              <div className="flex items-center justify-between text-[9px] font-mono tracking-widest text-[#70421F] font-bold">
                <span>WAREHOUSE CONVERGENCE</span>
                <span className="text-[#8A5A34]">5,000 MT BULK</span>
              </div>
            </div>
          </div>

          {/* Asymmetric Photography Floating Card 2: Split Kernel Macro (Bottom-Left) */}
          <div
            ref={card2Ref}
            className="hidden sm:block absolute -bottom-6 -left-6 z-10 w-48 md:w-56 rounded-2xl overflow-hidden shadow-2xl border border-[#70421F]/25 bg-[#FCFAF5]/90 backdrop-blur-md transform -rotate-4 hover:rotate-0 transition-transform duration-500 group"
          >
            <div className="relative w-full h-24 md:h-28">
              <Image
                src="/images/split-kernel-macro.jpg"
                alt="Split cotyledon cellular structure"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="p-2.5">
              <div className="flex items-center justify-between text-[9px] font-mono tracking-widest text-[#70421F] font-bold">
                <span>CELLULAR EMBRYO</span>
                <span className="text-[#8A5A34]">7.0% MOISTURE</span>
              </div>
            </div>
          </div>

          {/* Asymmetric Photography Floating Card 3: Food Grade Jute Packaging (Bottom-Right Background) */}
          <div
            ref={card3Ref}
            className="hidden md:block absolute bottom-2 -right-8 z-0 w-44 rounded-xl overflow-hidden shadow-xl border border-[#70421F]/20 bg-[#FCFAF5]/85 backdrop-blur-sm transform rotate-6 opacity-85 hover:opacity-100 transition-all duration-500 group"
          >
            <div className="relative w-full h-20">
              <Image
                src="/images/packaging/authentic-jute-sacks.webp"
                alt="Food grade jute sacks"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-2">
              <div className="text-[8px] font-mono tracking-widest text-[#70421F] font-bold truncate">
                FOOD-GRADE JUTE // 50 KG FCL
              </div>
            </div>
          </div>

          {/* Hero Visual Container with Transformation Styling */}
          <div
            ref={heroImageWrapperRef}
            className={`relative z-5 w-64 sm:w-80 md:w-96 lg:w-[440px] h-80 sm:h-96 md:h-[440px] lg:h-[480px] will-change-transform peanut-deep-shadow product-interactive ${currentProduct.transformStyle}`}
          >
            <Image
              src={currentProduct.image}
              alt={currentProduct.name}
              fill
              priority
              sizes="(max-width: 1024px) 380px, 480px"
              className="object-contain filter contrast-105"
            />
          </div>

          {/* Interactive Navigation Controls */}
          <div className="flex items-center gap-4 mt-6 z-20">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-[#FCFAF5]/80 hover:bg-[#FCFAF5] border border-[#70421F]/20 flex items-center justify-center text-[#70421F] transition-transform hover:scale-105 shadow-sm cursor-pointer"
              aria-label="Previous product"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="text-xs font-mono tracking-widest text-[#70421F] font-bold">
              0{activeIndex + 1} / 0{PRODUCTS.length}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#FCFAF5]/80 hover:bg-[#FCFAF5] border border-[#70421F]/20 flex items-center justify-center text-[#70421F] transition-transform hover:scale-105 shadow-sm cursor-pointer"
              aria-label="Next product"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM METADATA BAR */}
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono tracking-widest text-[#70421F]/70 uppercase z-20 pt-4 border-t border-[#70421F]/15">
        <span>RAW AGRICULTURAL COMMODITY</span>
        <span>•</span>
        <span>DOUBLE SORTEX ELECTRONIC OPTICAL CLEANING</span>
        <span>•</span>
        <span>DIRECT CONTAINER SHIPMENTS</span>
      </div>
    </section>
  );
}
