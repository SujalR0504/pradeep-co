"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Globe } from "lucide-react";

const WORDS = [
  { text: "INDIA", sub: "The fertile origin of world-class groundnut cultivation", mask: "url('/images/hero-field.webp')" },
  { text: "WORLD", sub: "Connecting Central Indian harvests with global commodity markets", mask: "url('/images/shipping-port.webp')" },
  { text: "TRADE", sub: "Integrity in grading, contract timing, and logistics execution", mask: "url('/images/peanut-bold.webp')" },
  { text: "TRUST", sub: "The enduring foundation of Pradeep Trading Company", mask: "url('/images/sustainability-soil.webp')" },
];

export default function GlobalTypographySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTrackRef = useRef<HTMLDivElement>(null);
  const [activeWordIdx, setActiveWordIdx] = useState(0);

  const wordRefs = useRef<HTMLDivElement[]>([]);
  const subRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const pin = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=2600",
        pin: pinTrackRef.current,
        scrub: 1,
        anticipatePin: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2600",
          scrub: 1,
        },
      });

      // Sequential kinetic type transformations: INDIA -> WORLD -> TRADE -> TRUST
      WORDS.forEach((_, idx) => {
        const startTime = idx * 1.0;
        const endTime = startTime + 1.0;

        if (idx === 0) {
          gsap.set(wordRefs.current[0], { opacity: 1, scale: 1, letterSpacing: "0.02em" });
          gsap.set(subRefs.current[0], { opacity: 1, y: 0 });
        } else {
          tl.fromTo(
            wordRefs.current[idx],
            { opacity: 0, scale: 0.8, letterSpacing: "-0.05em", filter: "blur(8px)" },
            {
              opacity: 1,
              scale: 1,
              letterSpacing: "0.06em",
              filter: "blur(0px)",
              duration: 0.45,
              ease: "power3.out",
              onStart: () => setActiveWordIdx(idx),
            },
            startTime
          ).fromTo(
            subRefs.current[idx],
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
            startTime + 0.1
          );
        }

        if (idx < WORDS.length - 1) {
          // Stretch horizontally and fade into next word
          tl.to(
            wordRefs.current[idx],
            {
              scaleX: 1.4,
              letterSpacing: "0.25em",
              opacity: 0,
              filter: "blur(10px)",
              duration: 0.35,
              ease: "power2.in",
            },
            endTime - 0.25
          ).to(
            subRefs.current[idx],
            { opacity: 0, y: -20, duration: 0.25 },
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
      wordRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  const addWordRef = (el: HTMLDivElement | null) => {
    if (el && !wordRefs.current.includes(el)) {
      wordRefs.current.push(el);
    }
  };

  const addSubRef = (el: HTMLDivElement | null) => {
    if (el && !subRefs.current.includes(el)) {
      subRefs.current.push(el);
    }
  };

  return (
    <section
      id="global-typography"
      ref={containerRef}
      className="relative w-full bg-[#170C06] text-[#FFFDF8] overflow-hidden"
    >
      {/* Pinned Desktop Kinetic Typography Stage */}
      <div
        ref={pinTrackRef}
        className="hidden lg:flex relative w-full h-screen flex-col justify-between items-center overflow-hidden px-8 py-12"
      >
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute inset-0 bg-radial from-[#4A270F]/50 via-transparent to-[#170C06] pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-[#805026]/40 pb-4">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] uppercase text-[#D4B58A]">
            <Globe className="w-3.5 h-3.5 text-[#D4B58A]" />
            <span>Kinetic Brand Manifesto</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            {WORDS.map((w, i) => (
              <span
                key={w.text}
                className={`transition-colors duration-300 ${
                  activeWordIdx === i ? "text-[#D4B58A] font-bold" : "text-[#F4EDE1]/30"
                }`}
              >
                0{i + 1} / {w.text}
              </span>
            ))}
          </div>
        </div>

        {/* CENTER STAGE: Monumental Stretched Word */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex-grow flex items-center justify-center my-auto">
          {WORDS.map((w, idx) => (
            <div
              key={w.text}
              className={`absolute inset-0 flex flex-col items-center justify-center text-center px-4 ${
                idx === 0 ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                ref={addWordRef}
                style={{
                  backgroundImage: w.mask,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="font-serif font-black text-[13vw] xl:text-[15vw] leading-none tracking-tight select-none uppercase will-change-transform filter drop-shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
              >
                {w.text}
              </div>

              <div
                ref={addSubRef}
                className="max-w-xl text-center space-y-2 mt-6 will-change-transform"
              >
                <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4B58A]">
                  Pradeep Trading Company Ethos
                </div>
                <p className="font-serif text-2xl xl:text-3xl text-[#F4EDE1] font-light italic">
                  &ldquo;{w.sub}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between border-t border-[#805026]/40 pt-4 text-[11px] font-mono text-[#F4EDE1]/50">
          <span>ETHOS: HONEST SEED • HONEST TRADE</span>
          <span className="text-[#D4B58A]">SCROLL TO TRANSITION ESSENCE</span>
          <span>SINCE INCEPTION • CENTRAL INDIA</span>
        </div>
      </div>

      {/* MOBILE / TABLET VERTICAL DISPLAY (<1024px) */}
      <div className="lg:hidden py-24 px-6 space-y-16 text-center">
        {WORDS.map((w) => (
          <div key={w.text} ref={addWordRef} className="space-y-4">
            <h2
              style={{
                backgroundImage: w.mask,
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="font-serif text-7xl sm:text-8xl font-black leading-none"
            >
              {w.text}
            </h2>
            <p className="text-xs font-light text-[#F4EDE1]/80 max-w-xs mx-auto">
              {w.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
