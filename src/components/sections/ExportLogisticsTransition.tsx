"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Anchor, ShieldCheck, Box, Package } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ExportLogisticsTransition() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinTrackRef = useRef<HTMLDivElement>(null);

  // Animation layer elements
  const sackHeroRef = useRef<HTMLDivElement>(null);
  const sackGridRef = useRef<HTMLDivElement>(null);
  const containerFrameRef = useRef<HTMLDivElement>(null);
  const containerDoorsRef = useRef<HTMLDivElement>(null);
  const portShipRef = useRef<HTMLDivElement>(null);
  const logisticsCaptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const pin = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2400",
        pin: pinTrackRef.current,
        scrub: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2400",
          scrub: 1,
        },
      });

      // SCENE 1: Jute Sack centers and scales into view (0.0 -> 0.25)
      tl.fromTo(
        sackHeroRef.current,
        { scale: 0.6, opacity: 0, y: 60 },
        { scale: 1, opacity: 1, y: 0, duration: 0.25, ease: "power2.out" },
        0
      );

      // SCENE 2: Single sack multiplies into a palletized row inside the container (0.25 -> 0.55)
      tl.to(
        sackHeroRef.current,
        { scale: 0.45, opacity: 0, duration: 0.15 },
        0.25
      )
        .fromTo(
          containerFrameRef.current,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" },
          0.25
        )
        .fromTo(
          sackGridRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
          0.3
        );

      // SCENE 3: Container doors slide closed to seal the consignment (0.55 -> 0.78)
      tl.fromTo(
        containerDoorsRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.25, ease: "power3.inOut" },
        0.55
      );

      // SCENE 4: Camera pulls back to reveal the ocean vessel at port (0.78 -> 1.0)
      tl.to(
        containerFrameRef.current,
        { scale: 0.3, opacity: 0, y: -40, duration: 0.2 },
        0.75
      ).fromTo(
        portShipRef.current,
        { opacity: 0, scale: 1.15 },
        { opacity: 1, scale: 1.0, duration: 0.25, ease: "power2.out" },
        0.78
      );

      return () => {
        pin.kill();
        tl.kill();
      };
    });

    mm.add("(max-width: 1023px)", () => {
      // Mobile: standard lightweight scroll reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.fromTo(
        sackHeroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      return () => tl.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#2B1A0F] text-[#FFFDF8] overflow-hidden"
    >
      <div
        ref={pinTrackRef}
        className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background Port Ocean Cargo Image (Scene 4 Destination) */}
        <div
          ref={portShipRef}
          className="absolute inset-0 z-0 opacity-0 will-change-transform"
        >
          <Image
            src="/images/shipping-port.webp"
            alt="Ocean container shipping vessel at port"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B1A0F] via-black/40 to-[#2B1A0F]/90" />
        </div>

        {/* Ambient Dark Brown Background for Scenes 1-3 */}
        <div className="absolute inset-0 bg-[#2B1A0F]/90 z-1 pointer-events-none" />

        {/* TOP STORY HEADER */}
        <div className="absolute top-16 left-0 right-0 z-20 text-center px-6 pointer-events-none">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF7A]">
            <Anchor className="w-3.5 h-3.5 text-[#D4AF7A]" />
            <span>Signature Logistics Arc</span>
          </div>
          <h2 className="font-serif font-light text-2xl sm:text-4xl text-[#FFFDF8] mt-1">
            PACKAGING → CONTAINER → WORLD SHIPPING
          </h2>
          <p className="text-xs sm:text-sm text-[#F7F1E7]/70 font-light max-w-lg mx-auto mt-1">
            From calibrated packing at our Bhonti facility to containerized sea-freight at India&apos;s primary deepwater ports.
          </p>
        </div>

        {/* STAGE CONTAINER (Center visual objects) */}
        <div className="relative z-10 w-full max-w-3xl px-6 flex items-center justify-center min-h-[380px]">
          {/* SCENE 1: Hero Jute Sack */}
          <div
            ref={sackHeroRef}
            className="relative w-72 h-88 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-[#8A572F]/50 will-change-transform"
          >
            <Image
              src="/images/packaging/authentic-jute-sacks.webp"
              alt="Authentic Pradeep Trading Company Jute Bags"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-semibold text-[#D4AF7A] tracking-wider">
                Export Standard
              </span>
              <div className="font-serif text-lg text-[#FFFDF8]">
                Double Sortex Singdana in Traditional Jute Sacks
              </div>
            </div>
          </div>

          {/* SCENE 2 & 3: Container Frame & Door Closure */}
          <div
            ref={containerFrameRef}
            className="absolute inset-4 sm:inset-6 rounded-2xl border-2 border-[#8A572F] bg-[#1F120A] shadow-2xl p-6 flex flex-col justify-between opacity-0 will-change-transform"
          >
            {/* Top Container Header */}
            <div className="flex items-center justify-between border-b border-[#8A572F]/40 pb-3">
              <div className="flex items-center gap-2">
                <Box className="w-4 h-4 text-[#D4AF7A]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF7A]">
                  PTCU-948201 / 20FT HEAVY EXPORT CONTAINER
                </span>
              </div>
              <span className="text-[10px] text-[#25D366] font-semibold uppercase tracking-wider">
                ● Moisture Controlled
              </span>
            </div>

            {/* Sacks Grid Inside Container */}
            <div
              ref={sackGridRef}
              className="grid grid-cols-3 gap-3 my-auto py-4"
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="relative aspect-[3/4] rounded-lg overflow-hidden border border-[#8A572F]/30 bg-[#2B1A0F]"
                >
                  <Image
                    src="/images/packaging/authentic-jute-sacks.webp"
                    alt={`Pallet row ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Container Doors (Animates Closed in Scene 3) */}
            <div
              ref={containerDoorsRef}
              className="absolute inset-0 bg-[#3F2613] border-4 border-[#8A572F] rounded-2xl flex flex-col items-center justify-center p-6 text-center shadow-2xl origin-center will-change-transform opacity-0"
            >
              <div className="w-16 h-16 rounded-full bg-[#2B1A0F] border-2 border-[#D4AF7A] flex items-center justify-center mb-3 text-[#D4AF7A]">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="font-mono text-sm uppercase tracking-widest text-[#FFFDF8] font-bold">
                SEALED &amp; CUSTOMS CLEARED
              </div>
              <div className="text-xs text-[#D4AF7A] font-mono mt-1">
                BOLT SEAL NO: PTC-EXPORT-845001
              </div>
              <p className="text-xs text-[#F7F1E7]/70 max-w-sm mt-2">
                Ready for high-seas transit via Port Mundra &amp; Nhava Sheva to worldwide destinations.
              </p>
            </div>

            {/* Bottom Specs */}
            <div className="flex items-center justify-between text-[11px] text-[#F7F1E7]/60 pt-2 border-t border-[#8A572F]/30 font-mono">
              <span>Payload: 19,000 KG (380 Sacks)</span>
              <span>Tare: 2,240 KG</span>
            </div>
          </div>
        </div>

        {/* BOTTOM LOGISTICS SUMMARY RIBBON */}
        <div className="absolute bottom-8 left-8 right-8 z-20 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-[#F7F1E7]/60">
          <span className="font-mono text-[10px] text-[#D4AF7A] uppercase tracking-widest">
            Origin: Central India Mandi Hubs → Destination: Global Ports
          </span>
          <Link
            href="#markets"
            className="text-xs text-[#D4AF7A] hover:underline flex items-center gap-1 font-medium"
          >
            <span>View Global Routes</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
