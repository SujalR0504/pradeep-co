"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Flame,
  VolumeX,
  Radio,
  Layers,
  Sparkles,
  ShieldCheck,
  Microscope,
  RotateCcw,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type LayerKey = "all" | "shell" | "skin" | "cotyledon" | "macro";

interface LayerData {
  id: LayerKey;
  num: string;
  name: string;
  scientific: string;
  badge: string;
  description: string;
  metrics: { label: string; value: string }[];
  image: string;
  alt: string;
}

const LAYERS: LayerData[] = [
  {
    id: "shell",
    num: "01",
    name: "Fibrous Pod Shell",
    scientific: "Outer Pericarp Husk",
    badge: "CALCIUM & CELLULOSE VAULT",
    description:
      "Natural honeycomb cellulose vault engineered to shield the kernel against external moisture, mechanical impact, and oxidation during maritime export.",
    metrics: [
      { label: "Moisture Ceiling", value: "7.0% – 8.0%" },
      { label: "Shell Wall Rigidity", value: "Grade A Calibrated" },
      { label: "Aflatoxin Target", value: "< 4 PPB" },
    ],
    image: "/images/new-uploaded-image.png",
    alt: "Peanut Fibrous Pod Shell Cutout",
  },
  {
    id: "skin",
    num: "02",
    name: "Papery Spermoderm",
    scientific: "Seed Coat (Testa)",
    badge: "POLYPHENOL & RESVERATROL SHIELD",
    description:
      "Paper-thin antioxidant membrane rich in natural polyphenols and resveratrol that naturally preserves unsaturated fatty acids from oxidative rancidity.",
    metrics: [
      { label: "Skin Adhesion", value: "Uniform 99.2%" },
      { label: "Natural Resveratrol", value: "Active Level" },
      { label: "Color Grading", value: "Glossy Red-Amber" },
    ],
    image: "/images/red-kernel-cutout.png",
    alt: "Red Peanut Seed Coat Kernel Cutout",
  },
  {
    id: "cotyledon",
    num: "03",
    name: "Split Cotyledon & Embryo",
    scientific: "Endosperm & Plumule Heart",
    badge: "48–52% OLEIC LIPIDS & EMBRYO",
    description:
      "Twin nutrient-dense cotyledon halves cradling the intact germ embryo. Packed with plant protein, natural sweet oils, and pristine cell integrity.",
    metrics: [
      { label: "Unrefined Oil", value: "48% – 52%" },
      { label: "Plant Protein", value: "25% – 28%" },
      { label: "Embryo Germ", value: "100% Intact" },
    ],
    image: "/images/split-cotyledon-cutout.png",
    alt: "Split Peanut Cotyledon with Embryo Cutout",
  },
  {
    id: "macro",
    num: "04",
    name: "Cellular Micro-Matrix",
    scientific: "400X Oleosome Lattices",
    badge: "CELLULAR INTEGRITY & OIL POCKETS",
    description:
      "Under 400X optical magnification, individual lipid oleosomes remain fully intact without rupture, guaranteeing maximum shelf life and aroma retention.",
    metrics: [
      { label: "Free Fatty Acids", value: "< 0.3%" },
      { label: "Cell Wall Retention", value: "Unbroken" },
      { label: "Optical Sortex", value: "Triple Pass" },
    ],
    image: "/images/peanut-macro-texture.jpg",
    alt: "Microscopic Peanut Cellular Landscape",
  },
];

export default function Scene09PeanutMacroZoom() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);

  // Individual Layer Card Refs
  const shellCardRef = useRef<HTMLDivElement>(null);
  const skinCardRef = useRef<HTMLDivElement>(null);
  const cotyledonCardRef = useRef<HTMLDivElement>(null);
  const macroCardRef = useRef<HTMLDivElement>(null);

  const particleCanvasRef = useRef<HTMLCanvasElement>(null);

  const [activeLayer, setActiveLayer] = useState<LayerKey>("all");
  const [roastLevel, setRoastLevel] = useState<"raw" | "warm" | "roasted">("raw");
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [ambienceType, setAmbienceType] = useState<"soil" | "farm" | "ocean">("soil");

  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);

  // GSAP ScrollTrigger Anatomical Explosion & Inspection Setup
  useEffect(() => {
    if (!containerRef.current || !pinWrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the inner wrapper to avoid React DOM reconciliation collisions
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=180%",
          scrub: 1.1,
          pin: pinWrapperRef.current,
          anticipatePin: 1,
        },
      });

      // 1. Entrance: Cards reveal with smooth stagger
      tl.fromTo(
        [shellCardRef.current, skinCardRef.current, cotyledonCardRef.current, macroCardRef.current],
        { opacity: 0.2, y: 35, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        }
      );

      // 2. Smooth 3D anatomical separation on scroll
      tl.to(
        shellCardRef.current,
        {
          xPercent: -6,
          rotationY: 4,
          scale: 1.02,
          duration: 1,
          ease: "power1.inOut",
        },
        0.5
      );

      tl.to(
        skinCardRef.current,
        {
          yPercent: -4,
          scale: 1.03,
          duration: 1,
          ease: "power1.inOut",
        },
        0.5
      );

      tl.to(
        cotyledonCardRef.current,
        {
          scale: 1.07,
          yPercent: 3,
          duration: 1,
          ease: "power1.inOut",
        },
        0.5
      );

      tl.to(
        macroCardRef.current,
        {
          xPercent: 6,
          rotationY: -4,
          scale: 1.02,
          duration: 1,
          ease: "power1.inOut",
        },
        0.5
      );
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  // Web Audio API Organic Ambient Sound Generator
  useEffect(() => {
    if (!soundEnabled) {
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
      return;
    }

    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.04, ctx.currentTime);

      const analyser = ctx.createAnalyser();
      analyser.fftSize = 64;
      analyserRef.current = analyser;

      masterGain.connect(analyser);
      analyser.connect(ctx.destination);

      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = data[i];
        data[i] *= 3.0;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = ambienceType === "soil" ? 120 : ambienceType === "farm" ? 260 : 80;
      filter.Q.value = 1.3;

      const subOsc = ctx.createOscillator();
      subOsc.type = "sine";
      subOsc.frequency.setValueAtTime(
        ambienceType === "soil" ? 55 : ambienceType === "farm" ? 70 : 48,
        ctx.currentTime
      );

      const subGain = ctx.createGain();
      subGain.gain.setValueAtTime(0.25, ctx.currentTime);

      subOsc.connect(subGain);
      subGain.connect(masterGain);

      noise.connect(filter);
      filter.connect(masterGain);

      noise.start();
      subOsc.start();
    } catch (e) {
      console.warn("AudioContext not supported or blocked", e);
    }

    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
    };
  }, [soundEnabled, ambienceType]);

  // Audio Reactive Particle Canvas Visualizer
  useEffect(() => {
    const canvas = particleCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const width = (canvas.width = canvas.parentElement?.clientWidth || 360);
    const height = (canvas.height = 32);

    const particles = Array.from({ length: 24 }, (_, i) => ({
      x: (width / 24) * i + width / 48,
      baseY: height * 0.5,
      y: height * 0.5,
      size: 2 + (i % 3),
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      let freqData = new Uint8Array(32);
      if (analyserRef.current && soundEnabled) {
        analyserRef.current.getByteFrequencyData(freqData);
      }

      particles.forEach((p, idx) => {
        const audioBoost = soundEnabled ? (freqData[idx % freqData.length] / 255) * 12 : 0;
        const wave = Math.sin(Date.now() * 0.003 + idx * 0.45) * (4 + audioBoost);
        p.y = p.baseY + wave;

        ctx.fillStyle = soundEnabled ? "#E8D8C1" : "rgba(232, 216, 193, 0.35)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (soundEnabled && idx > 0) {
          ctx.strokeStyle = "rgba(199, 167, 124, 0.25)";
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[idx - 1].x, particles[idx - 1].y);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [soundEnabled]);

  // Thermal filter styling helper
  const getFilterStyle = () => {
    if (roastLevel === "warm") {
      return "filter sepia(30%) contrast(110%) brightness(102%)";
    }
    if (roastLevel === "roasted") {
      return "filter sepia(60%) contrast(120%) brightness(92%) hue-rotate(-12deg)";
    }
    return "filter contrast(105%) brightness(100%)";
  };

  const selectedLayerData = LAYERS.find((l) => l.id === activeLayer);

  return (
    <section
      id="macro-world"
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#1A0E06] text-[#FCFAF5] overflow-hidden select-none"
    >
      {/* ATMOSPHERIC BACKGROUND TEXTURE WITH RADIAL DEPTH */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(112,66,31,0.4)_0%,_rgba(26,14,6,0.95)_70%,_#120703_100%)]" />
        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay bg-cover bg-center"
          style={{ backgroundImage: "url('/images/peanut-macro-texture.jpg')" }}
        />
        {/* Architectural specimen grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(199,167,124,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(199,167,124,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div
        ref={pinWrapperRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col justify-between min-h-screen"
      >
        {/* TOP STATUS BAR: SPECIMEN TELEMETRY & AMBIENT CONTROLS */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#C7A77C]/20 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCFAF5]/10 border border-[#C7A77C]/30 text-[11px] font-mono tracking-widest text-[#E8D8C1]">
              <Microscope className="w-3.5 h-3.5 text-[#C7A77C] animate-pulse" />
              <span>ACT 08 • 400X OPTICAL DISSECTION</span>
            </div>
            <span className="hidden md:inline-block text-[10px] font-mono text-[#E8D8C1]/60 tracking-wider">
              BALAJI BOTANICAL ARCHITECTURE • SPECIMEN BE-2026
            </span>
          </div>

          {/* Right Controls: Thermal Roasting Profile & Audio */}
          <div className="flex items-center gap-3">
            {/* Roast Profile Controls */}
            <div className="inline-flex items-center gap-1.5 bg-[#FCFAF5]/10 backdrop-blur-md px-3 py-1 rounded-full border border-[#C7A77C]/25 text-[10px] font-mono">
              <Flame className="w-3 h-3 text-[#C7A77C]" />
              <span className="text-[#E8D8C1]/80 hidden sm:inline">ROAST:</span>
              {(["raw", "warm", "roasted"] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setRoastLevel(lvl)}
                  className={`px-2.5 py-0.5 rounded-full uppercase transition-all cursor-pointer ${
                    roastLevel === lvl
                      ? "bg-[#C7A77C] text-[#1A0E06] font-bold shadow"
                      : "text-[#E8D8C1]/70 hover:text-white"
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            {/* Audio Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCFAF5]/10 backdrop-blur-md border border-[#C7A77C]/30 hover:bg-[#FCFAF5]/15 transition-all cursor-pointer text-[10px] font-mono text-[#E8D8C1]"
            >
              {soundEnabled ? (
                <>
                  <Radio className="w-3 h-3 text-[#C7A77C] animate-ping" />
                  <span>AMBIENCE ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3 h-3 text-[#E8D8C1]/60" />
                  <span className="hidden sm:inline">MUTED</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* SECTION HEADER */}
        <div className="text-center my-4 lg:my-6">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#C7A77C] uppercase font-bold block mb-1">
            ANATOMICAL CUTAWAY • QUALITY BEGINS AT THE KERNEL
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FCFAF5] font-normal tracking-tight">
            Microscopic Architecture
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-sans text-[#FCFAF5]/75 max-w-xl mx-auto leading-relaxed">
            Every peanut pod is an organic triad: protective cellulose husk, polyphenol seed coat, and
            oil-saturated cotyledons with living embryo.
          </p>

          {/* INTERACTIVE LAYER SELECTOR TABS */}
          <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 bg-[#26140A]/85 backdrop-blur-md p-1.5 rounded-2xl border border-[#C7A77C]/30 shadow-lg">
            <button
              onClick={() => setActiveLayer("all")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeLayer === "all"
                  ? "bg-[#C7A77C] text-[#1A0E06] font-bold shadow-md"
                  : "text-[#E8D8C1]/80 hover:text-white hover:bg-white/5"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>3D Exploded View</span>
            </button>

            {LAYERS.map((layer) => (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeLayer === layer.id
                    ? "bg-[#C7A77C] text-[#1A0E06] font-bold shadow-md"
                    : "text-[#E8D8C1]/80 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="opacity-60 text-[10px]">{layer.num}.</span>
                <span>{layer.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* MAIN STAGE: 4 ANATOMICAL SPECIMEN DISPLAY TILES */}
        <div className="relative w-full my-auto py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 items-stretch">
          {/* LAYER 01: POD SHELL */}
          <div
            ref={shellCardRef}
            onClick={() => setActiveLayer(activeLayer === "shell" ? "all" : "shell")}
            className={`relative rounded-2xl p-5 border transition-all duration-500 flex flex-col justify-between cursor-pointer group backdrop-blur-sm ${
              activeLayer === "shell" || activeLayer === "all"
                ? "bg-[#25140A]/95 border-[#C7A77C]/60 shadow-[0_15px_35px_rgba(0,0,0,0.5)] scale-100 opacity-100 ring-1 ring-[#C7A77C]/40"
                : "bg-[#25140A]/35 border-white/5 opacity-35 hover:opacity-75 scale-95"
            }`}
          >
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono text-[#C7A77C] border-b border-[#C7A77C]/20 pb-2 mb-2">
                <span className="font-bold">01 // HUSK</span>
                <span className="text-[9px] uppercase tracking-wider text-[#E8D8C1]/70">Outer Armor</span>
              </div>
              <h3 className="font-serif text-xl text-[#FCFAF5] font-medium">Fibrous Shell</h3>
              <p className="text-[10px] font-mono text-[#C7A77C]/90 mb-1">Outer Pericarp Wall</p>
            </div>

            {/* High-Resolution Cutout Image */}
            <div className="relative w-full h-44 sm:h-48 my-2 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-radial from-[#C7A77C]/15 to-transparent rounded-full filter blur-xl" />
              <Image
                src="/images/new-uploaded-image.png"
                alt="Peanut Fibrous Pod Shell Cutout"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className={`object-contain transition-transform duration-700 group-hover:scale-105 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.75)] ${getFilterStyle()}`}
                priority
              />
            </div>

            <div>
              <p className="text-xs text-[#FCFAF5]/75 font-sans leading-relaxed line-clamp-2">
                Cellulose outer honeycomb vault preventing moisture intrusion and oxidation during transit.
              </p>
              <div className="mt-3 pt-3 border-t border-[#C7A77C]/15 flex items-center justify-between text-[10px] font-mono text-[#E8D8C1]">
                <span>MOISTURE</span>
                <span className="font-bold text-[#C7A77C]">7.0% – 8.0%</span>
              </div>
            </div>
          </div>

          {/* LAYER 02: PAPERY SPERMODERM (SKIN) */}
          <div
            ref={skinCardRef}
            onClick={() => setActiveLayer(activeLayer === "skin" ? "all" : "skin")}
            className={`relative rounded-2xl p-5 border transition-all duration-500 flex flex-col justify-between cursor-pointer group backdrop-blur-sm ${
              activeLayer === "skin" || activeLayer === "all"
                ? "bg-[#25140A]/95 border-[#C7A77C]/60 shadow-[0_15px_35px_rgba(0,0,0,0.5)] scale-100 opacity-100 ring-1 ring-[#C7A77C]/40"
                : "bg-[#25140A]/35 border-white/5 opacity-35 hover:opacity-75 scale-95"
            }`}
          >
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono text-[#C7A77C] border-b border-[#C7A77C]/20 pb-2 mb-2">
                <span className="font-bold">02 // TESTA</span>
                <span className="text-[9px] uppercase tracking-wider text-[#E8D8C1]/70">Antioxidant Skin</span>
              </div>
              <h3 className="font-serif text-xl text-[#FCFAF5] font-medium">Papery Spermoderm</h3>
              <p className="text-[10px] font-mono text-[#C7A77C]/90 mb-1">Seed Coat Barrier</p>
            </div>

            {/* High-Resolution Cutout Image */}
            <div className="relative w-full h-44 sm:h-48 my-2 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-radial from-[#C7A77C]/15 to-transparent rounded-full filter blur-xl" />
              <Image
                src="/images/red-kernel-cutout.png"
                alt="Red Peanut Seed Coat Kernel Cutout"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className={`object-contain transition-transform duration-700 group-hover:scale-105 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.75)] ${getFilterStyle()}`}
                priority
              />
            </div>

            <div>
              <p className="text-xs text-[#FCFAF5]/75 font-sans leading-relaxed line-clamp-2">
                Antioxidant-dense envelope containing resveratrol and natural pigments, sealing oleic lipids.
              </p>
              <div className="mt-3 pt-3 border-t border-[#C7A77C]/15 flex items-center justify-between text-[10px] font-mono text-[#E8D8C1]">
                <span>RESVERATROL</span>
                <span className="font-bold text-[#C7A77C]">ACTIVE BIO-COAT</span>
              </div>
            </div>
          </div>

          {/* LAYER 03: SPLIT COTYLEDON & EMBRYO */}
          <div
            ref={cotyledonCardRef}
            onClick={() => setActiveLayer(activeLayer === "cotyledon" ? "all" : "cotyledon")}
            className={`relative rounded-2xl p-5 border transition-all duration-500 flex flex-col justify-between cursor-pointer group backdrop-blur-sm ${
              activeLayer === "cotyledon" || activeLayer === "all"
                ? "bg-[#25140A]/95 border-[#C7A77C]/60 shadow-[0_15px_35px_rgba(0,0,0,0.5)] scale-100 opacity-100 ring-2 ring-[#C7A77C]/50"
                : "bg-[#25140A]/35 border-white/5 opacity-35 hover:opacity-75 scale-95"
            }`}
          >
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono text-[#C7A77C] border-b border-[#C7A77C]/20 pb-2 mb-2">
                <span className="font-bold">03 // COTYLEDON</span>
                <span className="text-[9px] uppercase tracking-wider text-[#E8D8C1]/70">Embryo &amp; Meat</span>
              </div>
              <h3 className="font-serif text-xl text-[#FCFAF5] font-medium">Split Cotyledons</h3>
              <p className="text-[10px] font-mono text-[#C7A77C]/90 mb-1">Plumule Germ Heart</p>
            </div>

            {/* High-Resolution Cutout Image */}
            <div className="relative w-full h-44 sm:h-48 my-2 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-radial from-[#C7A77C]/20 to-transparent rounded-full filter blur-xl" />
              <Image
                src="/images/split-cotyledon-cutout.png"
                alt="Split Peanut Cotyledon with Embryo Cutout"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className={`object-contain transition-transform duration-700 group-hover:scale-105 filter drop-shadow-[0_14px_28px_rgba(0,0,0,0.85)] ${getFilterStyle()}`}
                priority
              />
            </div>

            <div>
              <p className="text-xs text-[#FCFAF5]/75 font-sans leading-relaxed line-clamp-2">
                Creamy golden twin lobes shielding the germ embryo heart. 48–52% unsaturated oleic lipids.
              </p>
              <div className="mt-3 pt-3 border-t border-[#C7A77C]/15 flex items-center justify-between text-[10px] font-mono text-[#E8D8C1]">
                <span>OLEIC OILS</span>
                <span className="font-bold text-[#C7A77C]">48% – 52%</span>
              </div>
            </div>
          </div>

          {/* LAYER 04: 400X CELLULAR MATRIX */}
          <div
            ref={macroCardRef}
            onClick={() => setActiveLayer(activeLayer === "macro" ? "all" : "macro")}
            className={`relative rounded-2xl p-5 border transition-all duration-500 flex flex-col justify-between cursor-pointer group backdrop-blur-sm ${
              activeLayer === "macro" || activeLayer === "all"
                ? "bg-[#25140A]/95 border-[#C7A77C]/60 shadow-[0_15px_35px_rgba(0,0,0,0.5)] scale-100 opacity-100 ring-1 ring-[#C7A77C]/40"
                : "bg-[#25140A]/35 border-white/5 opacity-35 hover:opacity-75 scale-95"
            }`}
          >
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono text-[#C7A77C] border-b border-[#C7A77C]/20 pb-2 mb-2">
                <span className="font-bold">04 // 400X MACRO</span>
                <span className="text-[9px] uppercase tracking-wider text-[#E8D8C1]/70">Microscope</span>
              </div>
              <h3 className="font-serif text-xl text-[#FCFAF5] font-medium">Cellular Matrix</h3>
              <p className="text-[10px] font-mono text-[#C7A77C]/90 mb-1">Oleosome Lipid Network</p>
            </div>

            {/* Circular Microscope Reticle Viewport */}
            <div className="relative w-full h-44 sm:h-48 my-2 flex items-center justify-center overflow-hidden">
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-[#C7A77C]/60 shadow-[0_8px_25px_rgba(0,0,0,0.7)]">
                <Image
                  src="/images/peanut-macro-texture.jpg"
                  alt="Microscopic Peanut Cellular Landscape"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className={`object-cover transition-transform duration-700 group-hover:scale-110 ${getFilterStyle()}`}
                />
                {/* Crosshairs */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="w-full h-[1px] bg-[#C7A77C]/35" />
                  <div className="absolute h-full w-[1px] bg-[#C7A77C]/35" />
                  <div className="absolute w-12 h-12 rounded-full border border-[#C7A77C]/45" />
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs text-[#FCFAF5]/75 font-sans leading-relaxed line-clamp-2">
                Undamaged cellular membranes prevent enzyme degradation and free fatty acid accumulation.
              </p>
              <div className="mt-3 pt-3 border-t border-[#C7A77C]/15 flex items-center justify-between text-[10px] font-mono text-[#E8D8C1]">
                <span>FREE FATTY ACID</span>
                <span className="font-bold text-[#C7A77C]">&lt; 0.3%</span>
              </div>
            </div>
          </div>
        </div>

        {/* DETAILED SPECIMEN INSPECTION BANNER */}
        {selectedLayerData && (
          <div className="bg-[#241309]/95 border border-[#C7A77C]/30 rounded-2xl p-4 sm:p-5 mt-2 backdrop-blur-md shadow-2xl transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#C7A77C] text-[#1A0E06] text-[10px] font-mono font-bold">
                    SPECIMEN {selectedLayerData.num}
                  </span>
                  <span className="text-xs font-mono text-[#C7A77C]">{selectedLayerData.badge}</span>
                </div>
                <h4 className="font-serif text-lg sm:text-xl text-[#FCFAF5]">
                  {selectedLayerData.name} —{" "}
                  <span className="italic font-light text-[#E8D8C1]">{selectedLayerData.scientific}</span>
                </h4>
                <p className="text-xs font-sans text-[#FCFAF5]/80 leading-relaxed">
                  {selectedLayerData.description}
                </p>
              </div>

              {/* Metrics Pills */}
              <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
                {selectedLayerData.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-4 px-3 py-1.5 rounded-lg bg-black/40 border border-[#C7A77C]/20 text-xs font-mono"
                  >
                    <span className="text-[#E8D8C1]/70">{m.label}</span>
                    <span className="font-bold text-[#C7A77C]">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* BOTTOM METRIC RIBBON & AUDIO REACTIVE PARTICLES */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#C7A77C]/20 pt-4 mt-2 text-[10px] font-mono text-[#E8D8C1]/70">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C7A77C]" />
            <span>EXPORT SPECIFICATION: AFLATOXIN &lt; 4 PPB • MOISTURE &le; 8%</span>
          </div>

          {/* Sound reactive frequency canvas */}
          <div className="w-44 h-6 relative overflow-hidden">
            <canvas ref={particleCanvasRef} className="w-full h-full block" />
          </div>

          <div className="flex items-center gap-2">
            <span>SCROLL TO PARALLAX DISSECT</span>
            <Sparkles className="w-3 h-3 text-[#C7A77C]" />
          </div>
        </div>
      </div>
    </section>
  );
}
