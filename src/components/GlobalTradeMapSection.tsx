"use client";

import React, { useState } from 'react';
import worldMapPaths from '@/data/worldMapPaths.json';

interface Destination {
  id: string;
  name: string;
  region: 'gcc' | 'asean' | 'europe' | 'americas' | 'africa' | 'cis' | 'oceania';
  regionLabel: string;
  flag: string;
  port: string;
  transitTime: string;
  grades: string;
  coords: { x: number; y: number };
  // Arc control point for quadratic bezier curve from India (708, 194)
  control: { x: number; y: number };
  duration: string;
}

const ORIGIN = { x: 708, y: 194, name: 'India Hub (Mundra & JNPT)' };

const DESTINATIONS: Destination[] = [
  // North America
  {
    id: 'usa-east',
    name: 'United States (East)',
    region: 'americas',
    regionLabel: 'North America',
    flag: '🇺🇸',
    port: 'New York, Savannah & Norfolk',
    transitTime: '26 – 30 Days',
    grades: 'Bold 38/42 & Blanched 40/50',
    coords: { x: 260, y: 156 },
    control: { x: 480, y: 38 },
    duration: '4.2s',
  },
  {
    id: 'usa-west',
    name: 'United States (West)',
    region: 'americas',
    regionLabel: 'North America',
    flag: '🇺🇸',
    port: 'Los Angeles & Oakland',
    transitTime: '28 – 34 Days',
    grades: 'Bold 40/50 & Whole Blanched',
    coords: { x: 185, y: 150 },
    control: { x: 440, y: 22 },
    duration: '4.5s',
  },
  {
    id: 'canada',
    name: 'Canada',
    region: 'americas',
    regionLabel: 'North America',
    flag: '🇨🇦',
    port: 'Montreal, Vancouver & Toronto',
    transitTime: '28 – 32 Days',
    grades: 'Bold 38/42 & In-Shell Pods',
    coords: { x: 235, y: 115 },
    control: { x: 470, y: 16 },
    duration: '4.3s',
  },
  // South America
  {
    id: 'brazil',
    name: 'Brazil',
    region: 'americas',
    regionLabel: 'South America',
    flag: '🇧🇷',
    port: 'Santos & Paranaguá',
    transitTime: '30 – 35 Days',
    grades: 'Java 50/60 & Oil Crushing Kernels',
    coords: { x: 355, y: 310 },
    control: { x: 530, y: 245 },
    duration: '4.6s',
  },
  // Europe
  {
    id: 'uk',
    name: 'United Kingdom',
    region: 'europe',
    regionLabel: 'Europe & UK',
    flag: '🇬🇧',
    port: 'Felixstowe, London Gateway & Southampton',
    transitTime: '22 – 25 Days',
    grades: 'Bold 40/50, Blanched Splits & Pods',
    coords: { x: 495, y: 105 },
    control: { x: 600, y: 72 },
    duration: '3.6s',
  },
  {
    id: 'netherlands',
    name: 'Netherlands & Germany',
    region: 'europe',
    regionLabel: 'Europe & UK',
    flag: '🇳🇱',
    port: 'Rotterdam, Antwerp & Hamburg',
    transitTime: '20 – 24 Days',
    grades: 'HPLC Aflatoxin <4ppb, Bold 40/50',
    coords: { x: 525, y: 108 },
    control: { x: 615, y: 82 },
    duration: '3.5s',
  },
  {
    id: 'spain',
    name: 'Spain & Mediterranean',
    region: 'europe',
    regionLabel: 'Europe & UK',
    flag: '🇪🇸',
    port: 'Valencia, Barcelona & Genoa',
    transitTime: '18 – 22 Days',
    grades: 'Bold 38/42 & Roasted In-Shell',
    coords: { x: 485, y: 138 },
    control: { x: 595, y: 112 },
    duration: '3.3s',
  },
  // Russia & CIS
  {
    id: 'russia',
    name: 'Russia & CIS',
    region: 'cis',
    regionLabel: 'Russia & CIS',
    flag: '🇷🇺',
    port: 'Novorossiysk, St. Petersburg & Poti',
    transitTime: '22 – 26 Days',
    grades: 'Bold 38/42, Java 50/60 & Pods',
    coords: { x: 635, y: 88 },
    control: { x: 672, y: 68 },
    duration: '3.4s',
  },
  // Middle East & GCC
  {
    id: 'uae',
    name: 'United Arab Emirates',
    region: 'gcc',
    regionLabel: 'Middle East & GCC',
    flag: '🇦🇪',
    port: 'Jebel Ali (Dubai) & Sharjah',
    transitTime: '3 – 5 Days',
    grades: 'Bold 38/42, Bold 40/50 & In-Shell Pods',
    coords: { x: 652, y: 181 },
    control: { x: 680, y: 168 },
    duration: '2.4s',
  },
  {
    id: 'saudi',
    name: 'Saudi Arabia',
    region: 'gcc',
    regionLabel: 'Middle East & GCC',
    flag: '🇸🇦',
    port: 'Jeddah Islamic Port & Dammam',
    transitTime: '4 – 7 Days',
    grades: 'Bold 38/42 & 25kg Jute Bag Packs',
    coords: { x: 625, y: 192 },
    control: { x: 666, y: 172 },
    duration: '2.5s',
  },
  {
    id: 'egypt',
    name: 'Egypt & North Africa',
    region: 'africa',
    regionLabel: 'Africa',
    flag: '🇪🇬',
    port: 'Port Said & Alexandria',
    transitTime: '10 – 14 Days',
    grades: 'Java 60/70 & Bold Kernels',
    coords: { x: 588, y: 168 },
    control: { x: 648, y: 146 },
    duration: '2.9s',
  },
  // Africa
  {
    id: 'kenya',
    name: 'Kenya & East Africa',
    region: 'africa',
    regionLabel: 'Africa',
    flag: '🇰🇪',
    port: 'Mombasa & Dar es Salaam',
    transitTime: '8 – 12 Days',
    grades: 'Java 60/70, Crushing Kernels',
    coords: { x: 608, y: 252 },
    control: { x: 658, y: 242 },
    duration: '2.9s',
  },
  {
    id: 'south-africa',
    name: 'South Africa',
    region: 'africa',
    regionLabel: 'Africa',
    flag: '🇿🇦',
    port: 'Durban, Cape Town & Port Elizabeth',
    transitTime: '12 – 16 Days',
    grades: 'Java 60/70 & 50kg Export Sacks',
    coords: { x: 575, y: 345 },
    control: { x: 642, y: 300 },
    duration: '3.6s',
  },
  // Southeast Asia & ASEAN
  {
    id: 'thailand',
    name: 'Thailand',
    region: 'asean',
    regionLabel: 'Southeast Asia',
    flag: '🇹🇭',
    port: 'Bangkok & Laem Chabang',
    transitTime: '7 – 10 Days',
    grades: 'Java 50/60 & Blanched Splits',
    coords: { x: 778, y: 215 },
    control: { x: 742, y: 188 },
    duration: '2.6s',
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    region: 'asean',
    regionLabel: 'Southeast Asia',
    flag: '🇻🇳',
    port: 'Haiphong & Ho Chi Minh City',
    transitTime: '7 – 10 Days',
    grades: 'Java 50/60, Java 60/70 & Splits',
    coords: { x: 792, y: 202 },
    control: { x: 750, y: 176 },
    duration: '2.6s',
  },
  {
    id: 'malaysia',
    name: 'Malaysia & Singapore',
    region: 'asean',
    regionLabel: 'Southeast Asia',
    flag: '🇲🇾',
    port: 'Port Klang, Penang & Singapore',
    transitTime: '6 – 8 Days',
    grades: 'Bold 40/50 & Blanched Peanuts',
    coords: { x: 786, y: 248 },
    control: { x: 746, y: 230 },
    duration: '2.5s',
  },
  {
    id: 'indonesia',
    name: 'Indonesia',
    region: 'asean',
    regionLabel: 'Southeast Asia',
    flag: '🇮🇩',
    port: 'Tanjung Priok (Jakarta) & Surabaya',
    transitTime: '8 – 12 Days',
    grades: 'Java 60/70 & Confectionery Pods',
    coords: { x: 812, y: 272 },
    control: { x: 760, y: 250 },
    duration: '2.8s',
  },
  {
    id: 'philippines',
    name: 'Philippines',
    region: 'asean',
    regionLabel: 'Southeast Asia',
    flag: '🇵🇭',
    port: 'Manila South & Cebu',
    transitTime: '9 – 13 Days',
    grades: 'Java 50/60 & Roasted Kernels',
    coords: { x: 835, y: 220 },
    control: { x: 770, y: 188 },
    duration: '3.0s',
  },
  // East Asia
  {
    id: 'china',
    name: 'China',
    region: 'asean',
    regionLabel: 'East Asia',
    flag: '🇨🇳',
    port: 'Qingdao, Shanghai & Guangzhou',
    transitTime: '12 – 16 Days',
    grades: 'Bold 38/42 & High-Oil Kernels',
    coords: { x: 825, y: 165 },
    control: { x: 765, y: 148 },
    duration: '3.0s',
  },
  // Australia & Oceania
  {
    id: 'australia',
    name: 'Australia',
    region: 'oceania',
    regionLabel: 'Oceania',
    flag: '🇦🇺',
    port: 'Sydney, Melbourne & Brisbane',
    transitTime: '18 – 22 Days',
    grades: 'Bold 40/50 & Whole Blanched Kernels',
    coords: { x: 895, y: 342 },
    control: { x: 800, y: 295 },
    duration: '3.8s',
  },
];

const REGION_FILTERS = [
  { id: 'all', label: 'All Global Corridors' },
  { id: 'gcc', label: 'Middle East & GCC' },
  { id: 'asean', label: 'Southeast Asia & ASEAN' },
  { id: 'europe', label: 'Europe & UK' },
  { id: 'americas', label: 'Americas' },
  { id: 'africa', label: 'Africa' },
  { id: 'cis', label: 'Russia & CIS' },
  { id: 'oceania', label: 'Australia' },
];

export default function GlobalTradeMapSection() {
  const [activeRegion, setActiveRegion] = useState<string>('all');
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);
  const [hoveredDest, setHoveredDest] = useState<Destination | null>(null);

  const displayedDestinations = activeRegion === 'all'
    ? DESTINATIONS
    : DESTINATIONS.filter((d) => d.region === activeRegion);

  const activeOrHovered = hoveredDest || selectedDest;

  return (
    <section
      id="global-presence"
      style={{
        padding: '90px 0 85px',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="site-container auto-container" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Section Heading — Bold, Clean & Centered (matching reference screenshot) */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)',
              fontWeight: 800,
              color: '#0F2C3B',
              letterSpacing: '-0.025em',
              lineHeight: 1.12,
              margin: '0 0 14px',
              textAlign: 'center',
            }}
          >
            Our Global Presence
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#526E7F',
              maxWidth: '780px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontWeight: 500,
            }}
          >
            Direct container sailings from Mundra Port &amp; Nhava Sheva (JNPT) powering leading food processors, nut roasters, and commodity buyers in 40+ countries.
          </p>
        </div>

        {/* Region Filter Bar (Clean pill tabs) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '28px',
          }}
        >
          {REGION_FILTERS.map((filter) => {
            const isSelected = activeRegion === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveRegion(filter.id)}
                style={{
                  padding: '7px 18px',
                  borderRadius: '30px',
                  border: isSelected ? '1px solid #00A3E0' : '1px solid #E2E8F0',
                  backgroundColor: isSelected ? '#00A3E0' : '#F8FAFC',
                  color: isSelected ? '#FFFFFF' : '#334155',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 4px 14px rgba(0, 163, 224, 0.28)' : 'none',
                }}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* INTERACTIVE FULL-WORLD MAP CANVAS */}
        {/* ============================================================== */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid #EEF2F6',
            boxShadow: '0 20px 50px -10px rgba(15, 44, 59, 0.07)',
            padding: '16px 8px 10px',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Watermark behind map (matching reference screenshot) */}
          <div
            style={{
              position: 'absolute',
              top: '55%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: 'clamp(2.5rem, 6.5vw, 6.2rem)',
              fontWeight: 900,
              color: '#00A3E0',
              opacity: 0.035,
              whiteSpace: 'nowrap',
              letterSpacing: '0.12em',
              pointerEvents: 'none',
              userSelect: 'none',
              textTransform: 'uppercase',
              zIndex: 1,
            }}
          >
            PRADEEP TRADING CO.
          </div>

          {/* SVG Map Container */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 8.2', minHeight: '380px', zIndex: 2 }}>
            <svg
              viewBox="65 40 910 415"
              style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}
            >
              <defs>
                {/* Radial Beacon Glow for India */}
                <radialGradient id="india-beacon-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#E53935" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#E53935" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#E53935" stopOpacity="0" />
                </radialGradient>

                {/* Destination Pin Pulse Glow */}
                <radialGradient id="pin-pulse-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#E53935" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#E53935" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* 1. CONTINENTS — Vibrant Cyan Landmass (matching reference screenshot) */}
              <g id="world-continents">
                {worldMapPaths
                  .filter((c) => c.name !== 'Antarctica') // Hide Antarctica so inhabited globe fills viewport
                  .map((c) => {
                    const isIndia = c.name === 'India';
                    return (
                      <path
                        key={c.name}
                        d={c.d}
                        fill={isIndia ? '#0084B4' : '#00A3E0'}
                        stroke="#FFFFFF"
                        strokeWidth="0.55"
                        strokeLinejoin="round"
                        opacity={isIndia ? 1 : 0.95}
                        style={{
                          transition: 'fill 0.25s ease',
                        }}
                      />
                    );
                  })}
              </g>

              {/* 2. ARCS — Sweeping Curved Shipping/Flight Lines from India Outward */}
              <g id="shipping-arcs">
                {displayedDestinations.map((dest) => {
                  const pathData = `M ${ORIGIN.x} ${ORIGIN.y} Q ${dest.control.x} ${dest.control.y} ${dest.coords.x} ${dest.coords.y}`;
                  const isHovered = activeOrHovered?.id === dest.id;

                  return (
                    <g key={`route-${dest.id}`}>
                      {/* Wider Transparent Hit-Box for Smooth Hover */}
                      <path
                        d={pathData}
                        fill="none"
                        stroke="transparent"
                        strokeWidth="16"
                        style={{ cursor: 'pointer' }}
                        onMouseEnter={() => setHoveredDest(dest)}
                        onMouseLeave={() => setHoveredDest(null)}
                        onClick={() => setSelectedDest(dest)}
                      />

                      {/* Main Solid Arc Line (Black / Charcoal as in screenshot) */}
                      <path
                        d={pathData}
                        fill="none"
                        stroke={isHovered ? '#E53935' : '#0E1726'}
                        strokeWidth={isHovered ? '2.4' : '1.35'}
                        strokeLinecap="round"
                        opacity={isHovered ? 1 : 0.78}
                        style={{
                          transition: 'stroke 0.2s ease, stroke-width 0.2s ease, opacity 0.2s ease',
                          pointerEvents: 'none',
                        }}
                      />

                      {/* Moving Dash Particle Flowing Along the Arc */}
                      <path
                        d={pathData}
                        fill="none"
                        stroke={isHovered ? '#FFD54F' : '#00A3E0'}
                        strokeWidth={isHovered ? '2.8' : '1.8'}
                        strokeLinecap="round"
                        strokeDasharray="5 18"
                        style={{
                          animation: `tradeFlowAnim 4s linear infinite`,
                          pointerEvents: 'none',
                        }}
                      />

                      {/* Traveling Particle Circle */}
                      <circle r={isHovered ? '4' : '2.8'} fill={isHovered ? '#E53935' : '#0F2C3B'}>
                        <animateMotion
                          dur={dest.duration}
                          repeatCount="indefinite"
                          path={pathData}
                        />
                      </circle>
                    </g>
                  );
                })}
              </g>

              {/* 3. DESTINATION PINS (Red location markers with pulsing aura) */}
              <g id="destination-pins">
                {displayedDestinations.map((dest) => {
                  const isHovered = activeOrHovered?.id === dest.id;

                  return (
                    <g
                      key={`pin-${dest.id}`}
                      transform={`translate(${dest.coords.x}, ${dest.coords.y})`}
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={() => setHoveredDest(dest)}
                      onMouseLeave={() => setHoveredDest(null)}
                      onClick={() => setSelectedDest(dest)}
                    >
                      {/* Pulse Wave on Ground */}
                      <circle r="9" fill="url(#pin-pulse-glow)">
                        <animate attributeName="r" values="4;14;4" dur="2.4s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;0.1;0.8" dur="2.4s" repeatCount="indefinite" />
                      </circle>

                      {/* Red Pin Body (Teardrop Google Maps Style) */}
                      <g transform="translate(0, -9)">
                        <path
                          d="M 0 0 C -3 -3, -5 -6, -5 -9 A 5 5 0 1 1 5 -9 C 5 -6, 3 -3, 0 0 Z"
                          fill={isHovered ? '#B71C1C' : '#E53935'}
                          stroke="#FFFFFF"
                          strokeWidth="0.8"
                          style={{
                            transition: 'all 0.2s ease',
                            transform: isHovered ? 'scale(1.35)' : 'scale(1)',
                            transformOrigin: '0 0',
                          }}
                        />
                        {/* Pin Center White Dot */}
                        <circle cx="0" cy="-9" r="1.8" fill="#FFFFFF" />
                      </g>
                    </g>
                  );
                })}
              </g>

              {/* 4. ORIGIN HUB: INDIA (Central Beacon with Radar Waves) */}
              <g id="origin-hub" transform={`translate(${ORIGIN.x}, ${ORIGIN.y})`}>
                {/* Radiating Wave 1 */}
                <circle r="20" fill="none" stroke="#E53935" strokeWidth="1.4" opacity="0.5">
                  <animate attributeName="r" values="6;26" dur="2.2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0" dur="2.2s" repeatCount="indefinite" />
                </circle>

                {/* Radiating Wave 2 */}
                <circle r="14" fill="none" stroke="#E53935" strokeWidth="1.4" opacity="0.5">
                  <animate attributeName="r" values="6;26" dur="2.2s" begin="1.1s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0" dur="2.2s" begin="1.1s" repeatCount="indefinite" />
                </circle>

                {/* Center Core Beacon Pin */}
                <g transform="translate(0, -11)">
                  <path
                    d="M 0 0 C -4 -4, -7 -8, -7 -12 A 7 7 0 1 1 7 -12 C 7 -8, 4 -4, 0 0 Z"
                    fill="#C62828"
                    stroke="#FFFFFF"
                    strokeWidth="1.2"
                  />
                  <circle cx="0" cy="-12" r="3" fill="#FFFFFF" />
                  <text x="0" cy="-10.5" fill="#C62828" fontSize="4.2" fontWeight="900" textAnchor="middle">
                    P
                  </text>
                </g>

                {/* Origin Label Callout */}
                <g transform="translate(8, 4)">
                  <rect
                    x="0"
                    y="0"
                    width="122"
                    height="21"
                    rx="10.5"
                    fill="#0F2C3B"
                    stroke="#00A3E0"
                    strokeWidth="1"
                    opacity="0.95"
                  />
                  <text x="61" y="14" fill="#FFFFFF" fontSize="8.5" fontWeight="800" textAnchor="middle" letterSpacing="0.04em">
                    🇮🇳 INDIA EXPORT HUB
                  </text>
                </g>
              </g>
            </svg>

            {/* FLOATING INTERACTIVE DESTINATION TOOLTIP (Displays on hover or click) */}
            {activeOrHovered && (
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(15, 44, 59, 0.95)',
                  backdropFilter: 'blur(10px)',
                  color: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid rgba(0, 163, 224, 0.35)',
                  padding: '16px 20px',
                  maxWidth: '310px',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
                  zIndex: 20,
                  animation: 'fadeInPop 0.2s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '28px', lineHeight: 1 }}>{activeOrHovered.flag}</span>
                  <div>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: '#00A3E0', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {activeOrHovered.regionLabel} Corridor
                    </span>
                    <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 800, color: '#FFFFFF' }}>
                      {activeOrHovered.name}
                    </h4>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94A3B8' }}>Major Ports:</span>
                    <span style={{ color: '#F1F5F9', fontWeight: 700, textAlign: 'right', maxWidth: '170px' }}>
                      {activeOrHovered.port}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94A3B8' }}>Ocean Transit:</span>
                    <span style={{ color: '#34D399', fontWeight: 800 }}>
                      ⏱ {activeOrHovered.transitTime}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94A3B8' }}>Export Grades:</span>
                    <span style={{ color: '#FBBF24', fontWeight: 700, textAlign: 'right', maxWidth: '170px' }}>
                      {activeOrHovered.grades}
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/919589790997?text=Hello%20Pradeep%20Trading,%20I%20want%20to%20inquire%20about%20CIF%20freight%20to%20${encodeURIComponent(activeOrHovered.name)}%20(${encodeURIComponent(activeOrHovered.port)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    backgroundColor: '#00A3E0',
                    color: '#FFFFFF',
                    marginTop: '12px',
                    padding: '8px 14px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#0284C7')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#00A3E0')}
                >
                  <i className="fab fa-whatsapp"></i> Inquire Freight &amp; Lot Specs
                </a>
              </div>
            )}
          </div>

          {/* Quick Guidance Tag at Bottom */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '10px',
              padding: '10px 16px 4px',
              fontSize: '12px',
              color: '#64748B',
              borderTop: '1px solid #F1F5F9',
              marginTop: '4px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E53935', display: 'inline-block' }}></span>
              <span><strong>Mundra &amp; Nhava Sheva</strong>: Direct Weekly Liners Departing</span>
            </div>
            <span style={{ color: '#00A3E0', fontWeight: 600 }}>
              💡 Hover on any route or pin for transit times &amp; port details
            </span>
          </div>
        </div>

        {/* 4 Core Pillars Strip Below Map */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            marginTop: '24px',
          }}
        >
          <div
            style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              padding: '18px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: 'rgba(0, 163, 224, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                flexShrink: 0,
              }}
            >
              🚢
            </div>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#00A3E0', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Port Connectivity
              </span>
              <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0F2C3B', margin: '2px 0 0' }}>
                Mundra &amp; JNPT Direct
              </h4>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              padding: '18px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: 'rgba(16, 185, 129, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                flexShrink: 0,
              }}
            >
              ⏱️
            </div>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Despatch Speed
              </span>
              <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0F2C3B', margin: '2px 0 0' }}>
                48 – 72 Hrs Port Gating
              </h4>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              padding: '18px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: 'rgba(245, 158, 11, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                flexShrink: 0,
              }}
            >
              🛡️
            </div>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#D97706', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Quality Assured
              </span>
              <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0F2C3B', margin: '2px 0 0' }}>
                APEDA &amp; Phytosanitary
              </h4>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              padding: '18px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: 'rgba(239, 68, 68, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                flexShrink: 0,
              }}
            >
              🌍
            </div>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Global Footprint
              </span>
              <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0F2C3B', margin: '2px 0 0' }}>
                40+ Destination Nations
              </h4>
            </div>
          </div>
        </div>

      </div>

      {/* Embedded CSS for SVG flow animation */}
      <style jsx>{`
        @keyframes tradeFlowAnim {
          from {
            stroke-dashoffset: 69;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes fadeInPop {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(-4px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
