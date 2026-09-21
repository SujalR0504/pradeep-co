import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import BrandStatementSection from "@/components/sections/BrandStatementSection";
import ProductIntroSection from "@/components/sections/ProductIntroSection";
import ProductShowcaseSection from "@/components/sections/ProductShowcaseSection";
import QualitySection from "@/components/sections/QualitySection";
import ProcessSection from "@/components/sections/ProcessSection";
import PackagingSection from "@/components/sections/PackagingSection";
import GlobalExportSection from "@/components/sections/GlobalExportSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ContactCtaSection from "@/components/sections/ContactCtaSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-[#FFFDF9] text-[#26180E]">
      {/* 04 & 05. FACTORY VIDEO HERO — Cinematic 90-100vh hero, subtle warm overlay, 0.3s logo -> 0.6s headline -> 0.9s subtext -> 1.1s CTA */}
      <HeroSection />

      {/* 07. FIRST BRAND STATEMENT — 'PEANUTS FROM INDIA. QUALITY FOR THE WORLD.', 45-55% macro peanut visual, subtle reveal */}
      <BrandStatementSection />

      {/* 11. PRODUCT INTRO — 'OUR PEANUTS: FROM ONE CROP, A WORLD OF POSSIBILITIES.', large editorial product blocks */}
      <ProductIntroSection />

      {/* 08 & 09. PRODUCT SHOWCASE — Large horizontal experience with 01-05 clean selector and GSAP transition */}
      <ProductShowcaseSection />

      {/* 10. QUALITY — 'QUALITY YOU CAN SEE.', macro peanut kernel with thin animated leader lines to SIZE, COLOR, CONSISTENCY, CLEANLINESS */}
      <QualitySection />

      {/* 11. PROCESS — 7 Industrial Stages: 01 CULTIVATION to 07 EXPORT with progress bar and factory video logic */}
      <ProcessSection />

      {/* 12. PACKAGING — Horizontal visual sequence: bulk bags -> export bags -> warehouse -> pallets -> container */}
      <PackagingSection />

      {/* 13. GLOBAL REACH & MAP — Warm brown on cream map, India highlighted, animated routes with peanut marker */}
      <GlobalExportSection />

      {/* 14. WHY CHOOSE US — 5 Authoritative corporate trust pillars & 35,000+ MT capacity */}
      <WhyChooseUsSection />

      {/* 15. CONTACT CTA — Reusable CTA: 'READY TO TAKE YOUR PEANUT BUSINESS GLOBAL?' with GET A QUOTE & CONTACT US */}
      <ContactCtaSection />
    </div>
  );
}
