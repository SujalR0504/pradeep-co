"use client";

import React from "react";
import Image from "next/image";
import { Anchor, Compass, Globe } from "lucide-react";

export default function GlobalMaritimeBanner() {
  const marqueeText =
    "CONNECTS GLOBAL MARKETS ✦ WHERE NATURE MEETS QUALITY ✦ EXPORTING PURE INDIAN HARVEST ✦ MUNDRA & NHAVA SHEVA CORRIDORS ✦ ";

  return (
    <div
      className="relative w-full overflow-hidden select-none"
      style={{
        height: "clamp(260px, 32vw, 400px)",
        minHeight: "240px",
        backgroundColor: "#160E08",
        borderTop: "1px solid rgba(229, 168, 59, 0.25)",
        borderBottom: "1px solid rgba(229, 168, 59, 0.25)",
      }}
    >
      {/* Background Image: Aerial Container Cargo Ship Sailing Open Waters */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cargo-ship-ocean.jpg"
          alt="Container Cargo Ship Exporting Agricultural Harvest Globally"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-105"
        />
        {/* Cinematic Ocean & Vignette Overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(22, 14, 8, 0.55) 0%, rgba(10, 22, 38, 0.35) 50%, rgba(22, 14, 8, 0.75) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, rgba(22, 14, 8, 0.6) 100%)",
          }}
        />
      </div>

      {/* Top Floating Badge */}
      <div
        className="absolute top-4 sm:top-6 left-0 right-0 z-10 flex justify-center items-center pointer-events-none px-4"
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "rgba(22, 14, 8, 0.75)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(229, 168, 59, 0.4)",
            color: "#E5A83B",
            padding: "6px 16px",
            borderRadius: "30px",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
          }}
        >
          <Anchor size={13} style={{ color: "#E5A83B" }} />
          <span>Global Maritime Corridors • 40+ Destination Countries</span>
        </div>
      </div>

      {/* Giant Stroke / Outlined Moving Typography (Marquee) */}
      <div
        className="absolute inset-0 z-10 flex items-center overflow-hidden pointer-events-none"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="animate-maritime-marquee flex items-center"
          style={{
            display: "flex",
            width: "max-content",
            whiteSpace: "nowrap",
          }}
        >
          {/* Copy 1 */}
          <span
            style={{
              fontFamily: 'var(--font-heading), "DM Serif Display", "Manrope", sans-serif',
              fontSize: "clamp(2.8rem, 6.8vw, 5.8rem)",
              fontWeight: 900,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.88)",
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
              paddingRight: "40px",
              display: "inline-block",
            }}
          >
            {marqueeText}
          </span>

          {/* Copy 2 (Loop duplicate) */}
          <span
            style={{
              fontFamily: 'var(--font-heading), "DM Serif Display", "Manrope", sans-serif',
              fontSize: "clamp(2.8rem, 6.8vw, 5.8rem)",
              fontWeight: 900,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.88)",
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
              paddingRight: "40px",
              display: "inline-block",
            }}
          >
            {marqueeText}
          </span>
        </div>
      </div>

      {/* Bottom Subtitle / Ports Info */}
      <div
        className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-10 flex justify-center items-center pointer-events-none px-4 text-center"
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "rgba(22, 14, 8, 0.65)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "rgba(255, 255, 255, 0.88)",
            padding: "5px 14px",
            borderRadius: "20px",
            fontSize: "11.5px",
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          <span style={{ color: "#E5A83B", fontWeight: 700 }}>Gateway Ports:</span>
          <span>Mundra Port (INMUN1) • Nhava Sheva (INNSA1) • Direct 20ft &amp; 40ft FCL Shipments</span>
        </div>
      </div>

      {/* Embedded Marquee Animation CSS */}
      <style jsx>{`
        @keyframes maritimeMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-maritime-marquee {
          animation: maritimeMarquee 32s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-maritime-marquee {
            animation-duration: 22s;
          }
        }
      `}</style>
    </div>
  );
}
