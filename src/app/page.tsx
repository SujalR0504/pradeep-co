import React from "react";
import Scene01SeedBirth from "@/components/universe/Scene01SeedBirth";
import Scene02SoilTunnel from "@/components/universe/Scene02SoilTunnel";
import Scene03HarvestZoom from "@/components/universe/Scene03HarvestZoom";
import Scene04PodShellSplit from "@/components/universe/Scene04PodShellSplit";
import Scene05KernelUniverse from "@/components/universe/Scene05KernelUniverse";
import Scene06PeanutRoll from "@/components/universe/Scene06PeanutRoll";
import Scene07ProductLandscape from "@/components/universe/Scene07ProductLandscape";
import Scene08SortingGravityLab from "@/components/universe/Scene08SortingGravityLab";
import Scene09PeanutMacroZoom from "@/components/universe/Scene09PeanutMacroZoom";
import Scene11OceanToMap from "@/components/universe/Scene11OceanToMap";
import CinematicImageBreak from "@/components/ui/CinematicImageBreak";
import EditorialAboutSection from "@/components/sections/EditorialAboutSection";
import WhyPradeepWords from "@/components/sections/WhyPradeepWords";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import Scene13FinalCtaDesk from "@/components/universe/Scene13FinalCtaDesk";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-[#FFFDF8] text-[#2E2117]">
      {/* SCENE 01: HERO PEANUT & SPLIT CINEMATIC EDITORIAL EXPORT INTRO */}
      <Scene01SeedBirth />

      {/* SCENE 02: SOIL CAMERA & LIVING ROOT NETWORK (Subterranean 3D parallax tunnel) */}
      <Scene02SoilTunnel />

      {/* SCENE 03: HARVEST TO MACRO ZOOM (Golden hour field, farmer curation, horizontal macro) */}
      <Scene03HarvestZoom />

      {/* SCENE 04: GIANT POD HUSK & SIGNATURE SHELL-CRACK SCREEN SPLIT */}
      <Scene04PodShellSplit />

      {/* SCENE 05: KERNEL UNIVERSE & CURSOR GRAVITATIONAL ORBIT */}
      <Scene05KernelUniverse />

      {/* SCENE 06: CHAPTER 06 — PRODUCT QUALITY & VARIETY (Large pile of kernels, macro skin, floating pod) */}
      <Scene06PeanutRoll />

      {/* SCENE 07: PRODUCTS WITHOUT CARDS & PEANUT DNA (Editorial landscape & transformer selector) */}
      <Scene07ProductLandscape />

      {/* SCENE 08: CHAPTER 09 REPLACEMENT — QUALITY & GRADING EXPERIENCE (Pre-cleaning, Sortex, Lab test) */}
      <Scene08SortingGravityLab />

      {/* SCENE 09: 3D ANATOMICAL DISSECTION & 400X OPTICAL MACRO QUALITY INSPECTION */}
      <Scene09PeanutMacroZoom />

      {/* SCENE 11: OCEAN HORIZON & GLOBAL TRADE DESTINATIONS MAP (Direct transition from Scene 09) */}
      <Scene11OceanToMap />

      {/* CINEMATIC FULL-SCREEN MOMENT: EXPANDING PEANUT MASK INTO AERIAL HEARTLAND */}
      <CinematicImageBreak />

      {/* ABOUT & 65+ YEARS ORIGIN HERITAGE SECTION */}
      <EditorialAboutSection />

      {/* WHY PRADEEP TRADING COMPANY: CORE QUALITY & DIRECT SOURCING PILLARS */}
      <WhyPradeepWords />

      {/* UNIVERSAL REUSABLE CONTACT CTA */}
      <ContactCtaSection
        title="EXPEDITE YOUR COMMODITY SHIPMENT WITH PRADEEP TRADING COMPANY"
        subtitle="Prompt container stuffing at Mundra Port, double-sortex certification, and tailored B2B export pricing."
      />

      {/* SCENE 13: STRATEGIC TRADE DESK & RFQ PORTAL */}
      <Scene13FinalCtaDesk />
    </div>
  );
}
