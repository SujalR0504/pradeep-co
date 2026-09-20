"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS_STEPS } from "@/data/process";

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // DESKTOP: PINNED HORIZONTAL CHAPTER JOURNEY
    mm.add("(min-width: 1024px)", () => {
      const track = horizontalTrackRef.current;
      if (!track) return;

      const totalSlides = PROCESS_STEPS.length;
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

      const pinTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${track.scrollWidth - window.innerWidth + 800}`,
        pin: true,
        anticipatePin: 1,
        scrub: 1,
      });

      const horizontalAnim = gsap.to(track, {
        x: getScrollAmount,
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
        pinTrigger.kill();
        horizontalAnim.kill();
      };
    });

    // MOBILE / TABLET: CLEAN VERTICAL TIMELINE STACK
    mm.add("(max-width: 1023px)", () => {
      slidesRef.current.forEach((slide) => {
        if (!slide) return;
        gsap.fromTo(
          slide,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: slide,
              start: "top 85%",
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  const addSlideRef = (el: HTMLDivElement | null) => {
    if (el && !slidesRef.current.includes(el)) {
      slidesRef.current.push(el);
    }
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative bg-[#FFFDF8] text-[#2B1A0F] overflow-hidden"
    >
      {/* DESKTOP PINNED VIEWPORT CONTAINER */}
      <div className="hidden lg:flex flex-col justify-between h-screen w-full py-12">
        {/* Top Sticky Header */}
        <div className="max-w-7xl mx-auto px-8 w-full flex items-end justify-between border-b border-[#E8DDCB] pb-6 flex-shrink-0">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8A572F]">
              <span className="w-6 h-[1.5px] bg-[#8A572F]" />
              <span>Interactive Horizontal Journey</span>
            </div>
            <h2 className="font-serif text-3xl xl:text-4xl text-[#2B1A0F]">
              FROM HARVEST TO EXPORT
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#7D6B5D]">
            <span>SCROLL VERTICALLY TO NAVIGATE 8 CHAPTERS</span>
            <ArrowRight className="w-4 h-4 text-[#8A572F] animate-pulse" />
          </div>
        </div>

        {/* Horizontal Sliding Track */}
        <div
          ref={horizontalTrackRef}
          className="flex items-center gap-12 px-12 will-change-transform flex-grow my-auto"
        >
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              ref={addSlideRef}
              className="w-[72vw] max-w-[900px] flex-shrink-0 grid grid-cols-12 gap-8 items-center bg-[#FAF6EE] rounded-3xl p-8 border border-[#E8DDCB] shadow-[0_16px_40px_rgba(43,26,15,0.06)]"
            >
              {/* Image Side */}
              <div className="col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FFFDF8]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="450px"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#2B1A0F]/85 backdrop-blur-md text-[#FFFDF8] text-xs font-semibold uppercase tracking-wider">
                  Chapter {step.step} of 08
                </div>
              </div>

              {/* Text Content */}
              <div className="col-span-6 space-y-4">
                <span className="font-serif text-5xl font-light text-[#8A572F]/50 block">
                  {step.step}
                </span>

                <div className="space-y-1">
                  <h3 className="font-serif text-3xl text-[#2B1A0F]">
                    {step.title}
                  </h3>
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#8A572F]">
                    {step.subtitle}
                  </div>
                </div>

                <p className="text-sm text-[#7D6B5D] font-light leading-relaxed">
                  {step.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {step.highlights.map((hl, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-[#FFFDF8] border border-[#E8DDCB] text-[#5A3215] font-medium"
                    >
                      {hl}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Horizontal Progress Ribbon */}
        <div className="max-w-7xl mx-auto px-8 w-full flex items-center justify-between text-xs text-[#7D6B5D] pt-4 border-t border-[#E8DDCB] flex-shrink-0">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#8A572F]">
            Timeline: Sourcing → Harvest → Cleaning → Sorting → Grading → Processing → Packaging → Export
          </span>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 text-[#5A3215] font-semibold hover:underline"
          >
            <span>Book Next Shipment Slot</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* MOBILE / TABLET VERTICAL STACK FALLBACK (<1024px) */}
      <div className="lg:hidden py-20 px-4 sm:px-6">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8A572F]">
            <span className="w-6 h-[1.5px] bg-[#8A572F]" />
            <span>Process Timeline</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B1A0F]">
            FROM HARVEST TO EXPORT
          </h2>
          <p className="text-sm text-[#7D6B5D] font-light leading-relaxed">
            The complete 8-step journey of our groundnuts from Central Indian farms to global ports.
          </p>
        </div>

        <div className="space-y-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              ref={addSlideRef}
              className="bg-[#FAF6EE] rounded-2xl p-6 border border-[#E8DDCB] space-y-4"
            >
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-white">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#2B1A0F]/85 text-[#FFFDF8] text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase">
                  Phase {step.step}
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-2xl text-[#2B1A0F]">
                  {step.title}
                </h3>
                <div className="text-xs uppercase tracking-wider text-[#8A572F] font-semibold">
                  {step.subtitle}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#7D6B5D] font-light leading-relaxed">
                {step.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {step.highlights.map((hl, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2.5 py-0.5 rounded-full bg-white text-[#5A3215] border border-[#E8DDCB]"
                  >
                    {hl}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
