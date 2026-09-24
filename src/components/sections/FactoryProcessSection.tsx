"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ProcessStage {
  num: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  details: string;
}

const PROCESS_STAGES: ProcessStage[] = [
  {
    num: "01",
    name: "HARVEST",
    subtitle: "Origin Intake & Sun-Curing",
    description: "Harvested at optimal botanical maturity from Central Indian fields. Cured naturally under radiant sun to lock in kernel lipids and taste.",
    image: "/images/harvest-farmer.webp",
    details: "Moisture tested: max 7.0% – 8.0%",
  },
  {
    num: "02",
    name: "CLEAN",
    subtitle: "Aspiration & De-Stoning",
    description: "Rotary pre-cleaners and multi-deck aspirators remove sand, pods, plant debris, and light foreign matter with 99.8% mechanical purity.",
    image: "/images/sustainability-soil.webp",
    details: "Air aspiration & destoning",
  },
  {
    num: "03",
    name: "SORT",
    subtitle: "Optical Color Sortex",
    description: "High-speed multi-spectral cameras inspect every individual kernel, pneumatically ejecting off-color, immature, or damaged seeds.",
    image: "/images/sortex-machine.webp",
    details: "Bichromatic CCD optical sorting",
  },
  {
    num: "04",
    name: "GRADE",
    subtitle: "Precision Sieve Sizing",
    description: "Calibrated rotary screens separate kernels into uniform count-per-ounce classifications for Bold 38/42, 40/50, and Java 50/60, 60/70.",
    image: "/images/peanut-bold.webp",
    details: "Strict count tolerance ±1 grain",
  },
  {
    num: "05",
    name: "PROCESS",
    subtitle: "Gentle De-Skinning & Blanching",
    description: "Controlled convective air treatment loosens the seed coat, producing whole blanched kernels and pristine split halves without heat degradation.",
    image: "/images/whole-blanched-peanuts.webp",
    details: "99.9% skin removal efficiency",
  },
  {
    num: "06",
    name: "PACK",
    subtitle: "Export Consignment Dispatch",
    description: "Weigh-filled automatically into brand jute sacks (25kg / 50kg) or nitrogen-purged multi-barrier liners for containerized sea shipment.",
    image: "/images/packaging/authentic-jute-sacks.webp",
    details: "Hermetic seal & moisture control",
  },
];

export default function FactoryProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const track = horizontalTrackRef.current;
      if (!track) return;

      const pin = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${track.scrollWidth - window.innerWidth + 800}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      });

      const scrollAnim = gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth + 80),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth + 800}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        pin.kill();
        scrollAnim.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="factory-process"
      ref={sectionRef}
      className="relative w-full bg-[#E8D7C0] text-[#2E2117] overflow-hidden border-t border-[rgba(112,66,31,0.18)]"
    >
      {/* DESKTOP PINNED HORIZONTAL JOURNEY */}
      <div className="hidden lg:flex flex-col justify-between h-screen w-full py-10">
        {/* Top Header */}
        <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full flex items-end justify-between border-b border-[rgba(112,66,31,0.18)] pb-4 flex-shrink-0">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#70421F] font-semibold block">
              Processing Protocol
            </span>
            <h2 className="font-serif text-3xl xl:text-4xl text-[#2E2117]">
              FROM HARVEST TO EXPORT
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-[#70421F]">
            <span>SCROLL TO FOLLOW THE 6 CHAPTERS</span>
            <ArrowRight className="w-4 h-4 text-[#70421F]" />
          </div>
        </div>

        {/* Horizontal Sliding Track */}
        <div
          ref={horizontalTrackRef}
          className="flex items-center gap-8 px-12 will-change-transform flex-grow my-auto"
        >
          {PROCESS_STAGES.map((step) => (
            <div
              key={step.num}
              className="w-[65vw] max-w-[840px] flex-shrink-0 grid grid-cols-12 gap-8 items-center bg-[#FBF8F2] rounded-3xl p-8 border border-[rgba(112,66,31,0.18)] shadow-[0_12px_35px_rgba(112,66,31,0.06)]"
            >
              {/* Large Photograph */}
              <div className="col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4EBDD]">
                <Image
                  src={step.image}
                  alt={step.name}
                  fill
                  sizes="420px"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#FBF8F2]/90 backdrop-blur-md text-[#70421F] text-[10px] font-mono font-semibold px-3 py-1 rounded-full uppercase border border-[rgba(112,66,31,0.15)]">
                  Stage {step.num} of 06
                </div>
              </div>

              {/* Text Information */}
              <div className="col-span-6 space-y-3">
                <span className="font-serif text-5xl font-light text-[#70421F]/40 block leading-none">
                  {step.num}
                </span>

                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#70421F] font-semibold block">
                    {step.subtitle}
                  </span>
                  <h3 className="font-serif text-3xl text-[#2E2117]">
                    {step.name}
                  </h3>
                </div>

                <p className="text-sm text-[#2E2117]/75 font-sans font-light leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#70421F] bg-[#F4EBDD] px-3 py-1 rounded-md border border-[rgba(112,66,31,0.15)]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{step.details}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Ribbon */}
        <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full flex items-center justify-between text-xs font-mono text-[#70421F]/70 pt-3 border-t border-[rgba(112,66,31,0.18)] flex-shrink-0">
          <span>FACILITY: BHONTI, SHIVPURI (MADHYA PRADESH), INDIA</span>
          <span className="font-serif italic text-xs text-[#2E2117]">
            Harvest → Clean → Sort → Grade → Process → Pack
          </span>
          <span>ESTABLISHED HYGIENE &amp; SANITARY STANDARDS</span>
        </div>
      </div>

      {/* MOBILE / TABLET VERTICAL STACK (<1024px) */}
      <div className="lg:hidden py-20 px-6 space-y-10">
        <div className="space-y-2 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#70421F]">
            6-Stage Process
          </span>
          <h2 className="font-serif text-3xl text-[#2E2117]">
            HARVEST TO PACKAGING
          </h2>
        </div>

        <div className="space-y-6">
          {PROCESS_STAGES.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-3xl bg-[#FBF8F2] border border-[rgba(112,66,31,0.18)] space-y-4 shadow-sm"
            >
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#F4EBDD]">
                <Image
                  src={step.image}
                  alt={step.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#FBF8F2]/90 text-[#70421F] text-[10px] font-mono px-3 py-1 rounded-full uppercase">
                  Stage {step.num}
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#70421F]">
                  {step.subtitle}
                </span>
                <h3 className="font-serif text-2xl text-[#2E2117]">
                  {step.name}
                </h3>
              </div>

              <p className="text-xs text-[#2E2117]/75 font-sans font-light leading-relaxed">
                {step.description}
              </p>

              <div className="pt-2 text-xs font-mono text-[#70421F]">
                {step.details}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
