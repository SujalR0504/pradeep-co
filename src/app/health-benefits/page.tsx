"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Activity, ShieldCheck, Sparkles, CheckCircle2, Award, ArrowUpRight } from "lucide-react";
import ContactCtaSection from "@/components/sections/ContactCtaSection";

const NUTRITION_FACTS = [
  { label: "Plant Protein", val: "25.8 g", unit: "Per 100g", note: "Contains all 20 essential amino acids including arginine" },
  { label: "Healthy Unsaturated Oils", val: "49.2 g", unit: "Per 100g", note: "Predominantly monounsaturated oleic & linoleic fatty acids" },
  { label: "Dietary Fiber", val: "8.5 g", unit: "Per 100g", note: "Supports digestive wellness and sustained satiety" },
  { label: "Resveratrol & Polyphenols", val: "High Bio-Activity", unit: "Per 100g", note: "Concentrated natural antioxidant shield in red testa coat" },
  { label: "Magnesium & Potassium", val: "168 mg", unit: "Per 100g", note: "Essential electrolytes for cardiovascular balance" },
  { label: "Vitamin E (Alpha-Tocopherol)", val: "8.3 mg", unit: "Per 100g", note: "Potent lipid antioxidant protecting cellular membranes" },
];

const BENEFIT_PILLARS = [
  {
    title: "Cardiovascular Lipid Balance",
    category: "OLEIC ACID PROFILE",
    desc: "Peanuts are naturally packed with monounsaturated fatty acids (MUFAs), comparable in lipid structure to premium olive oil. Informational studies indicate that substituting saturated dietary fats with oleic acids promotes healthy cholesterol equilibrium.",
    badge: "48–52% Heart-Healthy Lipids",
    image: "/images/peanut-macro-texture.jpg",
  },
  {
    title: "Plant Protein Powerhouse",
    category: "MUSCLE & TISSUE REPAIR",
    desc: "With 25–28% bioavailable plant protein by weight, groundnuts represent one of the densest plant-based protein sources available globally. They are widely utilized by international food processors in therapeutic nutrition and energy snacks.",
    badge: "25.8% Pure Protein",
    image: "/images/split-cotyledon-cutout.png",
  },
  {
    title: "Resveratrol Antioxidant Shield",
    category: "POLYPHENOL TESTA COAT",
    desc: "The papery red skin (spermoderm) of the peanut kernel contains high concentrations of polyphenolic antioxidants, notably resveratrol and flavonoids, which naturally shield the seed and provide protective botanical compounds.",
    badge: "Active Resveratrol Levels",
    image: "/images/red-kernel-cutout.png",
  },
  {
    title: "Low Glycemic Energy Satiety",
    category: "METABOLIC NOURISHMENT",
    desc: "Groundnuts possess a remarkably low glycemic index (GI ≈ 14), providing slow-burning energy release and sustained satiety without triggering rapid postprandial glucose fluctuations.",
    badge: "Glycemic Index ≈ 14",
    image: "/images/peanut-bold.webp",
  },
];

export default function HealthBenefitsPage() {
  return (
    <div className="flex flex-col w-full bg-[#FFFDF8] text-[#2E2117]">
      {/* Editorial Header */}
      <section className="relative w-full py-16 sm:py-20 border-b border-[#5A3218]/15 bg-[#F7F1E7]">
        <div className="site-container max-w-[1280px] mx-auto">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5A3218]/10 border border-[#5A3218]/20 text-[10.5px] sm:text-xs font-mono tracking-widest text-[#5A3218] uppercase max-w-full">
              <Heart className="w-3.5 h-3.5 text-[#5A3218] shrink-0" />
              <span className="break-words">NUTRITIONAL ARCHITECTURE • WHOLE SEED BIO-CHEMISTRY</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.12] tracking-tight text-[#2E2117] break-words">
              Botanical Nutrition
              <span className="block font-bold text-[#5A3218]">
                In Every Calibrated Kernel.
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg font-sans text-[#2E2117]/85 font-normal leading-relaxed">
              Groundnuts are an extraordinary nutritional matrix: packed with heart-healthy monounsaturated oleic lipids,
              complete plant protein, dietary fiber, and natural resveratrol antioxidants in the intact seed coat.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Metric Nutrition Cards */}
      <section className="py-12 sm:py-16 border-b border-[#5A3218]/15 bg-[#FFFDF8]">
        <div className="site-container max-w-[1280px] mx-auto">
          <div className="max-w-2xl mb-8 sm:mb-12 text-left">
            <span className="text-[11px] sm:text-xs font-mono tracking-widest text-[#7A4824] uppercase font-bold block mb-2">
              BIO-CHEMICAL COMPOSITION
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2E2117] font-bold tracking-tight break-words">
              Laboratory Nutritional Profile
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NUTRITION_FACTS.map((fact, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#F7F1E7] border border-[#5A3218]/15 shadow-sm flex flex-col justify-between min-h-[160px]"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#7A4824] font-semibold">
                    <span>{fact.label.toUpperCase()}</span>
                    <span>{fact.unit}</span>
                  </div>
                  <div className="font-serif text-3xl font-bold text-[#5A3218] mt-2">
                    {fact.val}
                  </div>
                </div>
                <p className="text-xs font-sans text-[#2E2117]/80 pt-3 border-t border-[#5A3218]/10 font-normal leading-relaxed">
                  {fact.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Benefit Pillars with Macro Photography */}
      <section className="py-20 lg:py-28 bg-[#FFFDF8]">
        <div className="site-container max-w-[1280px] mx-auto">
          <div className="space-y-20 lg:space-y-28">
            {BENEFIT_PILLARS.map((b, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Visual Frame (6 cols) */}
                <div
                  className={`lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#5A3218]/20 bg-[#F7F1E7] ${
                    idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5A3218]/85 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#5A3218] text-[#FFFDF8] px-3.5 py-1 rounded-full font-mono text-xs font-bold shadow">
                    {b.category}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-[#FFFDF8] flex items-center justify-between">
                    <span className="font-serif text-xl font-bold">{b.title}</span>
                    <span className="bg-[#FFFDF8]/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono border border-white/30">
                      {b.badge}
                    </span>
                  </div>
                </div>

                {/* Prose Content (6 cols) */}
                <div className={`lg:col-span-6 space-y-4 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <span className="text-xs font-mono tracking-widest text-[#7A4824] uppercase font-bold">
                    HEALTH BENEFIT 0{idx + 1}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2E2117] font-bold leading-tight tracking-tight">
                    {b.title}
                  </h2>
                  <p className="text-sm sm:text-base font-sans text-[#2E2117]/85 leading-relaxed font-normal">
                    {b.desc}
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#5A3218] hover:underline"
                    >
                      <span>VIEW HIGH-OLEIC PEANUT VARIETIES</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#5A3218]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universal Reusable Contact CTA */}
      <ContactCtaSection
        title="SOURCE HIGH-OLEIC PEANUTS FOR YOUR NUTRITIONAL BRAND"
        subtitle="Contact Pradeep Trading Company for laboratory analysis certificates, technical specs, and bulk export consignments."
      />
    </div>
  );
}
