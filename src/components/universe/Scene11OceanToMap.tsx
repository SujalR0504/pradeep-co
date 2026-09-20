"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, MapPin, Compass, Navigation } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Destination coordinates mapped onto a 1000x520 world map canvas
const DESTINATIONS = [
  { id: "india", name: "India (Origin: Shivpuri / Mundra)", x: 620, y: 265, transit: "Origin Port", active: true },
  { id: "vietnam", name: "Vietnam (Haiphong)", x: 745, y: 285, transit: "8 - 12 Days", active: true },
  { id: "indonesia", name: "Indonesia (Jakarta)", x: 755, y: 370, transit: "9 - 14 Days", active: true },
  { id: "malaysia", name: "Malaysia (Port Klang)", x: 720, y: 335, transit: "7 - 10 Days", active: true },
  { id: "philippines", name: "Philippines (Manila)", x: 790, y: 290, transit: "10 - 15 Days", active: true },
  { id: "uae", name: "UAE (Jebel Ali, Dubai)", x: 555, y: 250, transit: "4 - 6 Days", active: true },
  { id: "saudi", name: "Saudi Arabia (Jeddah)", x: 520, y: 265, transit: "6 - 8 Days", active: true },
  { id: "rotterdam", name: "Netherlands (Rotterdam)", x: 460, y: 155, transit: "22 - 28 Days", active: false },
  { id: "uk", name: "United Kingdom (Felixstowe)", x: 440, y: 150, transit: "24 - 30 Days", active: false },
  { id: "durban", name: "South Africa (Durban)", x: 525, y: 420, transit: "16 - 20 Days", active: false },
];

export default function Scene11OceanToMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const oceanSceneRef = useRef<HTMLDivElement>(null);
  const farmAerialRef = useRef<HTMLDivElement>(null);
  const shipRef = useRef<HTMLDivElement>(null);
  const mapCanvasRef = useRef<HTMLCanvasElement>(null);
  const mapWrapperRef = useRef<HTMLDivElement>(null);
  const travelingKernelRef = useRef<HTMLDivElement>(null);
  const [hoveredDest, setHoveredDest] = useState<typeof DESTINATIONS[0] | null>(null);

  // Canvas Peanut Particles Continents & Dynamic Maritime Shipment Streams
  useEffect(() => {
    const canvas = mapCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const width = (canvas.width = 1000);
    const height = (canvas.height = 520);

    // Continent bounds made of peanut granules
    const continentBounds = [
      { xMin: 590, xMax: 650, yMin: 220, yMax: 320, count: 280, color: "#70421F" },
      { xMin: 680, xMax: 840, yMin: 210, yMax: 380, count: 320, color: "#8A5A34" },
      { xMin: 510, xMax: 580, yMin: 210, yMax: 300, count: 180, color: "#A37854" },
      { xMin: 420, xMax: 540, yMin: 120, yMax: 210, count: 220, color: "#B88755" },
      { xMin: 440, xMax: 560, yMin: 220, yMax: 440, count: 300, color: "#C7A77C" },
      { xMin: 160, xMax: 340, yMin: 130, yMax: 420, count: 340, color: "#D4BCA1" },
    ];

    // Pre-generate static continent grains
    const continentGrains: { x: number; y: number; size: number; color: string }[] = [];
    continentBounds.forEach((zone) => {
      for (let i = 0; i < zone.count; i++) {
        continentGrains.push({
          x: zone.xMin + Math.random() * (zone.xMax - zone.xMin),
          y: zone.yMin + Math.random() * (zone.yMax - zone.yMin),
          size: 1.4 + Math.random() * 2.2,
          color: zone.color,
        });
      }
    });

    const indiaX = 620;
    const indiaY = 265;
    const activeRoutes = DESTINATIONS.filter((d) => d.id !== "india");

    // Dynamic Route Shipment Particles
    const routeParticles = activeRoutes.map((dest, i) => ({
      dest,
      progress: (i * 0.12) % 1,
      speed: 0.003 + (i % 3) * 0.001,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw continent grains
      continentGrains.forEach((g) => {
        ctx.fillStyle = g.color;
        ctx.beginPath();
        ctx.ellipse(g.x, g.y, g.size * 0.7, g.size * 1.2, Math.PI / 6, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw static curved route splines
      ctx.strokeStyle = "rgba(112, 66, 31, 0.35)";
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 6]);

      activeRoutes.forEach((dest) => {
        ctx.beginPath();
        ctx.moveTo(indiaX, indiaY);
        const midX = (indiaX + dest.x) / 2;
        const midY = (indiaY + dest.y) / 2 - 25;
        ctx.quadraticCurveTo(midX, midY, dest.x, dest.y);
        ctx.stroke();
      });

      // Draw moving peanut shipment particles along the splines
      ctx.setLineDash([]);
      routeParticles.forEach((rp) => {
        rp.progress += rp.speed;
        if (rp.progress > 1) rp.progress = 0;

        const t = rp.progress;
        const midX = (indiaX + rp.dest.x) / 2;
        const midY = (indiaY + rp.dest.y) / 2 - 25;

        // Quadratic Bezier interpolation: B(t) = (1-t)^2 P0 + 2(1-t)t P1 + t^2 P2
        const curX = Math.pow(1 - t, 2) * indiaX + 2 * (1 - t) * t * midX + Math.pow(t, 2) * rp.dest.x;
        const curY = Math.pow(1 - t, 2) * indiaY + 2 * (1 - t) * t * midY + Math.pow(t, 2) * rp.dest.y;

        ctx.fillStyle = "#70421F";
        ctx.beginPath();
        ctx.ellipse(curX, curY, 2.2, 3.2, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  // GSAP Cinematic 3-Stage Elevation: Ocean -> India Farm Aerial -> Global Cartography
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=360%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1. Cargo ship glides forward on open ocean
      tl.to(shipRef.current, {
        x: 60,
        y: -25,
        scale: 1.06,
        duration: 1,
        ease: "none",
      });

      // 2. Camera rises high: Ocean dissolves into Aerial View of Indian Farmlands
      tl.to(
        oceanSceneRef.current,
        {
          opacity: 0,
          scale: 1.15,
          duration: 0.8,
          ease: "power2.inOut",
        },
        0.7
      );

      tl.fromTo(
        farmAerialRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1.05, duration: 1.0, ease: "power2.out" },
        0.8
      );

      // 3. Farm aerial zooms outward and dissolves into the Parchment World Map
      tl.to(
        farmAerialRef.current,
        { opacity: 0, scale: 1.25, duration: 0.8, ease: "power2.in" },
        1.7
      );

      tl.fromTo(
        mapWrapperRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 1.0, ease: "power2.out" },
        1.9
      );

      // 4. Highlighted peanut kernel departs India and travels along export routes
      tl.fromTo(
        travelingKernelRef.current,
        { x: 0, y: 0, opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.3 },
        2.4
      );

      tl.to(
        travelingKernelRef.current,
        {
          x: 125, // Initial voyage to Vietnam
          y: 20,
          duration: 1.2,
          ease: "power1.inOut",
        },
        2.6
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleDestinationSelect = (dest: typeof DESTINATIONS[0]) => {
    setHoveredDest(dest);
    if (travelingKernelRef.current && dest.id !== "india") {
      gsap.to(travelingKernelRef.current, {
        x: dest.x - 620,
        y: dest.y - 265,
        duration: 1.2,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <section
      id="ocean-world"
      ref={containerRef}
      className="relative w-full h-screen min-h-[750px] overflow-hidden bg-[#FCFAF5] text-[#2E2117] flex items-center justify-center select-none"
    >
      {/* 1. CINEMATIC OCEAN & CARGO SHIP SCENE */}
      <div
        ref={oceanSceneRef}
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
      >
        <div ref={shipRef} className="relative w-full h-full">
          <Image
            src="/images/cargo-ship-ocean.jpg"
            alt="Cargo Vessel navigating open ocean"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2E2117]/70 via-[#2E2117]/20 to-transparent" />
        </div>

        <div className="absolute bottom-12 left-12 max-w-md text-[#FCFAF5]">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#E8D8C1] font-bold block mb-2">
            ACT 10 — MARITIME TRANSIT
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight">
            The Ocean Horizon.
          </h2>
          <p className="text-xs font-sans text-[#FCFAF5]/80 mt-2">
            Vessels depart Mundra and Nhava Sheva, connecting Indian agricultural heartlands to over 30 countries.
          </p>
        </div>
      </div>

      {/* 2. CINEMATIC ELEVATION: AERIAL VIEW OF INDIAN GROUNDNUT FARMLAND */}
      <div
        ref={farmAerialRef}
        className="absolute inset-0 w-full h-full z-15 pointer-events-none opacity-0"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/india-farm-aerial.jpg"
            alt="Aerial landscape of Central Indian groundnut fields"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2E2117]/80 via-transparent to-[#2E2117]/40" />
        </div>

        <div className="absolute bottom-12 left-12 max-w-lg text-[#FCFAF5]">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#E8D8C1] font-bold block mb-2">
            ORIGIN SOURCING // SHIVPURI & SAURASHTRA
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight">
            Fertile Indian Loam.
          </h2>
          <p className="text-xs font-sans text-[#FCFAF5]/85 mt-2">
            Sourced directly from certified farmer networks across Madhya Pradesh and Gujarat with direct field-to-packhouse traceability.
          </p>
        </div>
      </div>

      {/* 3. THE PEANUT-KERNEL WORLD MAP (Ivory Canvas with Peanut Continents) */}
      <div
        ref={mapWrapperRef}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center opacity-0"
      >
        {/* Map Header */}
        <div className="w-full flex items-center justify-between pb-4 border-b border-[#70421F]/15 mb-6 text-[11px] font-mono text-[#70421F] uppercase font-bold">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#70421F]" />
            <span>ACT 11 — THE PEANUT KERNEL WORLD CARTOGRAPHY</span>
          </div>
          <div className="flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-[#70421F]" />
            <span>CLICK ANY DESTINATION TO DISPATCH SHIPMENT</span>
          </div>
        </div>

        {/* Interactive Map Canvas Container */}
        <div className="relative w-full aspect-[1000/520] max-h-[520px] bg-[#F7F0E5] rounded-3xl border border-[#70421F]/20 shadow-[0_20px_50px_rgba(112,66,31,0.1)] overflow-hidden">
          {/* Lat/Long Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#70421F08_1px,transparent_1px),linear-gradient(to_bottom,#70421F08_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

          {/* HTML5 Canvas with Peanut Particles Continents & Moving Route Particles */}
          <canvas ref={mapCanvasRef} className="w-full h-full block" />

          {/* The Traveling Peanut Kernel (Shipment particle) */}
          <div
            ref={travelingKernelRef}
            className="absolute top-[51%] left-[62%] w-6 h-8 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none drop-shadow-[0_4px_10px_rgba(112,66,31,0.5)] z-25"
          >
            <Image
              src="/images/single-kernel-cutout.png"
              alt="Traveling Shipment Kernel"
              fill
              className="object-contain"
            />
          </div>

          {/* Interactive Constellation Destination Nodes */}
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              style={{
                left: `${(dest.x / 1000) * 100}%`,
                top: `${(dest.y / 520) * 100}%`,
              }}
              onClick={() => handleDestinationSelect(dest)}
              onMouseEnter={() => handleDestinationSelect(dest)}
              onMouseLeave={() => setHoveredDest(null)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-30"
            >
              {/* Miniature peanut kernel node */}
              <div
                className={`relative w-4 h-5.5 transition-transform duration-300 group-hover:scale-170 ${
                  dest.id === "india"
                    ? "scale-140 filter drop-shadow-[0_0_8px_rgba(112,66,31,0.8)]"
                    : "opacity-85 hover:opacity-100"
                }`}
              >
                <Image
                  src="/images/single-kernel-cutout.png"
                  alt={dest.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Node Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-12 opacity-0 group-hover:opacity-100 transition-all pointer-events-none bg-[#FCFAF5] text-[#2E2117] p-2 rounded-lg border border-[#70421F]/20 shadow-lg text-[10px] font-mono whitespace-nowrap z-40">
                <div className="font-bold text-[#70421F]">{dest.name}</div>
                <div className="text-[#8A5A34]">Transit: {dest.transit}</div>
              </div>
            </div>
          ))}

          {/* Active Hover Detail Overlay at Bottom */}
          {hoveredDest && (
            <div className="absolute bottom-4 left-4 bg-[#FCFAF5]/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#70421F]/20 shadow-md text-xs font-mono text-[#2E2117] flex items-center gap-4 z-40">
              <MapPin className="w-4 h-4 text-[#70421F]" />
              <div>
                <span className="font-bold text-[#70421F]">{hoveredDest.name}</span>
                <span className="ml-3 text-[#2E2117]/70">Maritime Transit: {hoveredDest.transit}</span>
              </div>
            </div>
          )}
        </div>

        {/* Corridors Ticker */}
        <div className="w-full mt-4 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#70421F]/80 uppercase">
          <span>PORT HUBS: MUNDRA • NHAVA SHEVA • JEBEL ALI • HAIPHONG</span>
          <span>COMPLIANCE: APEDA • EU AFLATOXIN CERTIFIED</span>
        </div>
      </div>
    </section>
  );
}
