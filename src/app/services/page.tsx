"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Factory, Truck, Sparkles, Award } from "lucide-react";
import ContactCtaSection from "@/components/sections/ContactCtaSection";

interface ServiceStage {
  num: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  capabilities: string[];
  mainImage: string;
  subImage: string;
}

const SERVICES_DATA: ServiceStage[] = [
  {
    num: "01",
    name: "CULTIVATION",
    category: "ORIGIN AGRONOMY",
    headline: "Contract Farming & Direct APMC Sourcing",
    description:
      "Deep agronomic partnerships across Madhya Pradesh & Gujarat. We supply certified high-germination seeds to regional farmer networks, supervising physiological crop rotation and sustainable soil enrichment.",
    capabilities: [
      "10,000+ Grower Network Across Central India",
      "Field-Level Moisture Tracking at Harvest",
      "Zero Synthetic Adulteration Guarantee",
      "Sustainable Crop Rotation with Legume Nitrogen Fixation",
    ],
    mainImage: "/images/india-farm-aerial.jpg",
    subImage: "/images/harvest-farmer.webp",
  },
  {
    num: "02",
    name: "PROCESSING",
    category: "4 MT/HR INFRASTRUCTURE",
    headline: "Automated Pre-Cleaning, Destoning & Shelling",
    description:
      "Raw pods enter our continuous 4 metric tons/hour industrial cleaning terminal in Bhonti, Shivpuri. Dual-cyclone aspiration extracts dust and chaff, while rubber-roller hullers gently decorticate without bruising.",
    capabilities: [
      "Continuous 4 MT/Hr Processing Capacity",
      "Aspiration Density De-stoners (99.8% Efficiency)",
      "Low-Rupture Cold Decortication (<0.8% Splits)",
      "Complete Shell By-Product Recycling into Bio-Briquettes",
    ],
    mainImage: "/images/sortex-machine.webp",
    subImage: "/images/peanut-heap-warehouse.jpg",
  },
  {
    num: "03",
    name: "GRADING",
    category: "COUNT CALIBRATION",
    headline: "Multi-Deck Mechanical Sizing & CCD Optical Sortex",
    description:
      "Intact kernels undergo multi-stage vibratory classification into calibrated count sizes (38/42 to 70/80 counts/oz). High-speed optical CCD cameras scan every grain at 20,000 frames per second to eliminate discolored seeds.",
    capabilities: [
      "Calibrated Sizing: 38/42, 40/50, 50/60, 60/70, 70/80 / oz",
      "High-Speed Micro-Pneumatic Air Jet Ejection",
      "Minimum Purity Rating of 99.5% Across Shipments",
      "Uniform Roasting Index for International Snack Brands",
    ],
    mainImage: "/images/split-cotyledon-cutout.png",
    subImage: "/images/peanut-bold.webp",
  },
  {
    num: "04",
    name: "PACKAGING",
    category: "HERMETIC MARITIME BARRIER",
    headline: "Hydrocarbon-Free Jute & Vacuum Nitrogen Sacks",
    description:
      "From traditional breathable twill jute sacks (50kg/25kg) with custom client branding stencils to multi-layer EVOH nitrogen-flushed vacuum packs (<0.5% O2) guaranteeing 24-month export freshness.",
    capabilities: [
      "25kg / 50kg Food-Grade Twill Jute Sacks",
      "Multi-Layer EVOH Nitrogen Vacuum Packs (24-Month Shelf Life)",
      "High-Density Laminated PP Woven Sacks with Inner Poly Liners",
      "1000kg Jumbo Bulk Tote Bags for Industrial Refiners",
    ],
    mainImage: "/images/packaging/authentic-jute-sacks.webp",
    subImage: "/images/packaging/samman-peanuts-packaging.webp",
  },
  {
    num: "05",
    name: "EXPORT LOGISTICS",
    category: "INTERMODAL PORT GATEWAY",
    headline: "Mundra & Nhava Sheva 19.0 MT Container Staging",
    description:
      "Direct highway corridor connectivity from Shivpuri to Mundra Port (INMUN1). We handle end-to-end customs clearance, ISPM-15 heat-treated palletization, hanging container ceiling desiccants, and vessel stuffing.",
    capabilities: [
      "19.00 MT in 20ft FCL / 27.50 MT in 40ft High Cube",
      "Direct Freight Partnerships with Maersk, MSC & CMA CGM",
      "ISPM-15 Phytosanitary Heat-Treated Wooden Pallets",
      "Customs Clearance & ISO 17712 High-Security Bolt Seals",
    ],
    mainImage: "/images/container-loading-dock.jpg",
    subImage: "/images/cargo-ship-ocean.jpg",
  },
  {
    num: "06",
    name: "QUALITY ASSURANCE",
    category: "CERTIFIED LABORATORY",
    headline: "In-House HPLC Aflatoxin & Moisture Titration",
    description:
      "Every export lot is tested and certified prior to container gate-in. We verify moisture (<7.5%), free fatty acids (<0.3%), oil content (48–52%), and destination-certified aflatoxin levels (below 4 ppb).",
    capabilities: [
      "In-House HPLC Chromatography Aflatoxin Testing",
      "Digital Moisture Titration Guaranteed Below 7.5%",
      "SGS, Geo-Chem & Bureau Veritas Third-Party Inspection",
      "Phytosanitary & Non-GMO Origin Certificates Provided",
    ],
    mainImage: "/images/quality-lab.webp",
    subImage: "/images/split-kernel-macro.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-[#FFFDF8] text-[#2E2117] pt-24">
      {/* Editorial Header */}
      <section className="relative w-full py-16 sm:py-24 border-b border-[#5A3218]/15 bg-[#F7F1E7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5A3218]/10 border border-[#5A3218]/20 text-xs font-mono tracking-widest text-[#5A3218] uppercase">
              <Factory className="w-3.5 h-3.5 text-[#5A3218]" />
              <span>PRADEEP TRADING COMPANY • END-TO-END COMMODITY SERVICES</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.02] text-[#2E2117]">
              Engineered Groundnut
              <span className="block italic font-light text-[#5A3218]">
                Export Services.
              </span>
            </h1>

            <p className="text-base sm:text-lg font-sans text-[#2E2117]/80 font-light leading-relaxed">
              From contract farming and 4 MT/hour double-sortex processing to certified maritime container stuffing,
              our vertically integrated infrastructure ensures absolute quality control across every metric ton.
            </p>
          </div>
        </div>
      </section>

      {/* The 6 Visual Service Stages */}
      <section className="py-20 lg:py-28 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-24 lg:space-y-32">
          {SERVICES_DATA.map((srv, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Cluster (6 cols): Large main image + small overlapping supporting image */}
              <div
                className={`lg:col-span-6 relative min-h-[360px] sm:min-h-[440px] flex items-center justify-center ${
                  idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {/* Large Main Image */}
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#5A3218]/20 bg-[#F7F1E7]">
                  <Image
                    src={srv.mainImage}
                    alt={srv.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5A3218]/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#5A3218] text-[#FFFDF8] px-3.5 py-1 rounded-full font-mono text-xs font-bold shadow">
                    SERVICE {srv.num}
                  </div>
                </div>

                {/* Small Supporting Overlapping Image */}
                <div className="absolute -bottom-6 -right-4 sm:right-2 w-40 sm:w-52 h-40 sm:h-52 rounded-2xl overflow-hidden shadow-[0_20px_45px_rgba(90,50,24,0.25)] border-4 border-[#FFFDF8] z-20">
                  <Image
                    src={srv.subImage}
                    alt={`${srv.name} Supporting Visual`}
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Narrative Content (6 cols) */}
              <div className={`lg:col-span-6 space-y-5 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                <div className="flex items-center gap-3">
                  <span className="font-serif text-4xl sm:text-5xl font-bold text-[#5A3218]/25">
                    {srv.num}
                  </span>
                  <div className="h-6 w-[1px] bg-[#5A3218]/20" />
                  <span className="text-xs font-mono tracking-widest text-[#7A4824] uppercase font-bold">
                    {srv.category}
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-[#2E2117] font-medium leading-tight">
                  {srv.headline}
                </h2>

                <p className="text-sm sm:text-base font-sans text-[#2E2117]/80 leading-relaxed font-light">
                  {srv.description}
                </p>

                {/* Capabilities List */}
                <div className="space-y-2.5 pt-2">
                  {srv.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-[#2E2117]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#5A3218] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Universal Reusable Contact CTA */}
      <ContactCtaSection
        title="LOOKING TO ENGAGE OUR PROCESSING OR EXPORT SERVICES?"
        subtitle="Contact our trade desk for toll processing, private packaging, or multi-container export contracts."
      />
    </div>
  );
}
