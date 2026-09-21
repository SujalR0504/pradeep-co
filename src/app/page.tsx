import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import CompanyIntroSection from "@/components/sections/CompanyIntroSection";
import ProductShowcaseSection from "@/components/sections/ProductShowcaseSection";
import ProductVarietiesSection from "@/components/sections/ProductVarietiesSection";
import QualitySection from "@/components/sections/QualitySection";
import ProcessSection from "@/components/sections/ProcessSection";
import PackagingSection from "@/components/sections/PackagingSection";
import GlobalExportSection from "@/components/sections/GlobalExportSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ContactCtaSection from "@/components/sections/ContactCtaSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-[#FAF7F1] text-[#26180E]">
      {/* 01. FACTORY VIDEO HERO — Real factory video, professional typography, lower-left text */}
      <HeroSection />

      {/* 02. COMPANY INTRODUCTION — 65+ years lineage, processing benchmarks, 3 origin pillars */}
      <CompanyIntroSection />

      {/* 03. PRODUCT SHOWCASE — Large horizontal experience (Left: photo with subtle hover, Right: info + quote CTA, 01-05 clean selector) */}
      <ProductShowcaseSection />

      {/* 04. PRODUCT VARIETIES — Verified export specifications & varieties grid */}
      <ProductVarietiesSection />

      {/* 05. QUALITY — 'QUALITY YOU CAN SEE', macro peanut with thin animated leader lines: SIZE, COLOR, CONSISTENCY, CLEANLINESS */}
      <QualitySection />

      {/* 06. PROCESS — 7 Stages: 01 CULTIVATION to 07 EXPORT with progress bar & factory video pause/resume */}
      <ProcessSection />

      {/* 07. PACKAGING — Horizontal visual sequence: bulk bags -> export bags -> warehouse -> pallets -> container */}
      <PackagingSection />

      {/* 08. GLOBAL EXPORT — Clean warm brown on cream map, India highlighted, thin animated routes with peanut marker */}
      <GlobalExportSection />

      {/* 09. WHY CHOOSE US — 5 Authoritative corporate trust pillars & 35,000+ MT capacity */}
      <WhyChooseUsSection />

      {/* 10. CONTACT CTA — Reusable CTA: 'READY TO TAKE YOUR PEANUT BUSINESS GLOBAL?' with GET A QUOTE & CONTACT US */}
      <ContactCtaSection />
    </div>
  );
}
