"use client";

import React, { useState } from 'react';
import worldMapPaths from '@/data/worldMapPaths.json';

interface TradeRoute {
  id: string;
  name: string;
  region: string;
  flag: string;
  hub: string;
  ports: string;
  transitTime: string;
  frequency: string;
  typicalGrades: string;
  packaging: string;
  targetCountries: string[];
  destCoords: { x: number; y: number };
  routePath: string;
  labelOffset: { x: number; y: number };
  color: string;
  description: string;
}

const TRADE_ROUTES: TradeRoute[] = [
  {
    id: 'gcc',
    name: 'Arabian Gulf & Middle East Hub',
    region: 'Middle East & GCC',
    flag: '🇦🇪',
    hub: 'Jebel Ali, Dubai & Dammam',
    ports: 'Jebel Ali (UAE), Jeddah, Dammam (KSA), Sohar (Oman)',
    transitTime: '3 – 5 Days',
    frequency: 'Bi-Weekly Express',
    typicalGrades: 'Bold 38/42, Bold 40/50 & In-Shell Pods',
    packaging: '25kg / 50kg Jute Bags & Palletized Totes',
    targetCountries: ['United Arab Emirates', 'Saudi Arabia', 'Oman', 'Qatar', 'Kuwait', 'Bahrain'],
    destCoords: { x: 652.9, y: 180.5 },
    // Realistic sea lane from Mundra through Gulf of Oman to Jebel Ali
    routePath: 'M 693.6 186.5 C 678 190, 665 186, 652.9 180.5',
    labelOffset: { x: -30, y: -24 },
    color: '#E5A83B',
    description: 'Our fastest direct sea corridor connecting Mundra Port directly to Dubai and Saudi Arabian packaging houses with guaranteed 48-hour container gating.',
  },
  {
    id: 'asean',
    name: 'Southeast Asian Trade Belt',
    region: 'Southeast Asia',
    flag: '🇸🇬',
    hub: 'Singapore, Haiphong & Jakarta',
    ports: 'Haiphong, Ho Chi Minh, Jakarta, Surabaya, Port Klang, Manila',
    transitTime: '7 – 10 Days',
    frequency: 'Weekly Direct Liners',
    typicalGrades: 'Java 50/60, Java 60/70 & Blanched Splits',
    packaging: '25kg Vacuum Bags & 50kg PP Woven Sacks',
    targetCountries: ['Vietnam', 'Indonesia', 'Malaysia', 'Philippines', 'Thailand', 'Singapore'],
    destCoords: { x: 788.3, y: 246.2 },
    // Curves around Sri Lanka into Malacca Strait to Singapore
    routePath: 'M 693.6 186.5 C 705 210, 725 240, 755 248 S 775 246, 788.3 246.2',
    labelOffset: { x: 18, y: 18 },
    color: '#E07A5F',
    description: 'High-volume regular supply corridor powering premier snack roasters, confectioners, and peanut butter manufacturers across ASEAN.',
  },
  {
    id: 'europe',
    name: 'European Gateway Corridor',
    region: 'European Union & UK',
    flag: '🇳🇱',
    hub: 'Rotterdam, Antwerp & Felixstowe',
    ports: 'Rotterdam, Antwerp, Hamburg, Felixstowe, London Gateway',
    transitTime: '20 – 24 Days',
    frequency: 'Weekly Conference Vessels',
    typicalGrades: 'Bold 40/50 & Whole Blanched 40/50',
    packaging: '25kg Vacuum Foil Cartons (Nitrogen-Flushed)',
    targetCountries: ['Netherlands', 'United Kingdom', 'Germany', 'Belgium', 'France', 'Spain', 'Italy'],
    destCoords: { x: 512.4, y: 105.7 },
    // Route via Gulf of Aden, Red Sea, Suez Canal, Mediterranean, Gibraltar to Rotterdam
    routePath: 'M 693.6 186.5 C 655 215, 625 220, 615 210 S 590 175, 590 166 S 550 150, 525 140 S 495 145, 500 120 S 510 110, 512.4 105.7',
    labelOffset: { x: -65, y: -24 },
    color: '#43AA8B',
    description: 'Strict EU food-safety compliance corridor with HPLC Aflatoxin < 4 ppb and zero chemical pesticide residues guaranteed.',
  },
  {
    id: 'cis',
    name: 'Black Sea & CIS Gateway',
    region: 'Russia & CIS',
    flag: '🇷🇺',
    hub: 'Novorossiysk & St. Petersburg',
    ports: 'Novorossiysk, Poti, St. Petersburg',
    transitTime: '22 – 26 Days',
    frequency: 'Fortnightly Liners',
    typicalGrades: 'Bold 38/42, Java 50/60 & Roasted In-Shell',
    packaging: '25kg Poly-lined Jute Bags with Moisture Desiccants',
    targetCountries: ['Russia', 'Georgia', 'Azerbaijan', 'Kazakhstan', 'Uzbekistan'],
    destCoords: { x: 604.8, y: 125.7 },
    // Route via Red Sea, Suez, Bosphorus to Novorossiysk (Black Sea)
    routePath: 'M 693.6 186.5 C 655 215, 625 220, 615 210 S 590 175, 590 166 S 585 145, 595 138 S 600 130, 604.8 125.7',
    labelOffset: { x: 12, y: -20 },
    color: '#D4A373',
    description: 'Winter-cured high oil peanuts packed with multi-layer moisture desiccants to withstand continental temperature shifts.',
  },
  {
    id: 'africa',
    name: 'East & South African Maritime Link',
    region: 'African Continent',
    flag: '🇿🇦',
    hub: 'Durban, Mombasa & Port Louis',
    ports: 'Durban, Cape Town, Mombasa, Dar es Salaam, Port Louis',
    transitTime: '12 – 16 Days',
    frequency: 'Regular Monthly Sailings',
    typicalGrades: 'Java 60/70, Bold 50/60 & Crushing Kernels',
    packaging: '50kg Jute Bags & 1 MT Jumbo Poly Bags',
    targetCountries: ['South Africa', 'Kenya', 'Tanzania', 'Mozambique', 'Mauritius'],
    destCoords: { x: 586.1, y: 332.9 },
    // Route southwest across Indian Ocean along East Africa to Durban
    routePath: 'M 693.6 186.5 C 670 230, 645 280, 620 310 S 595 330, 586.1 332.9',
    labelOffset: { x: 14, y: 16 },
    color: '#C88A2E',
    description: 'Direct Indian Ocean shipping corridor fulfilling industrial oil pressing and regional wholesale commodity distribution.',
  },
];

export default function GlobalTradeMapSection() {
  const [activeRouteId, setActiveRouteId] = useState<string>('gcc');
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const activeRoute = TRADE_ROUTES.find((r) => r.id === activeRouteId) || TRADE_ROUTES[0];

  const mundraOrigin = { x: 693.6, y: 186.5 }; // Accurate coordinates for Mundra Port, Gujarat, India

  return (
    <section
      id="global-corridors"
      style={{
        padding: '95px 0 90px',
        backgroundColor: '#FAF6EE',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #EAE0D0',
        borderBottom: '1px solid #EAE0D0',
      }}
    >
      <div className="site-container auto-container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header — Professionally Centered */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(200, 138, 46, 0.12)',
              border: '1px solid rgba(200, 138, 46, 0.3)',
              padding: '6px 18px',
              borderRadius: '30px',
              marginBottom: '18px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#C88A2E' }}></span>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#8C5318', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              International Maritime Logistics &amp; Trade Corridors
            </span>
          </div>

          <h2
            className="text-center"
            style={{
              fontFamily: 'var(--font-heading), "DM Serif Display", serif',
              fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
              fontWeight: 800,
              color: '#2C170A',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 0,
              marginBottom: '18px',
            }}
          >
            From Central India, Across Global Oceans
          </h2>

          <p
            className="text-center"
            style={{
              fontSize: '15.5px',
              color: '#5A483D',
              maxWidth: '760px',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: 0,
              lineHeight: 1.65,
              textAlign: 'center',
            }}
          >
            Connecting Shivpuri MP farmgates and Saurashtra processing plants to Mundra Port &amp; Nhava Sheva (JNPT) with guaranteed weekly container departures to 35+ countries.
          </p>
        </div>

        {/* Corridor Tab Pills — Centered Horizontal Group */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '36px',
            maxWidth: '1060px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {TRADE_ROUTES.map((route) => {
            const isSelected = route.id === activeRouteId;
            return (
              <button
                key={route.id}
                onClick={() => setActiveRouteId(route.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  height: '44px',
                  boxSizing: 'border-box',
                  backgroundColor: isSelected ? '#5C341B' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : '#361C0D',
                  border: isSelected ? '1px solid #5C341B' : '1px solid #E2D6C5',
                  padding: '0 18px',
                  borderRadius: '30px',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isSelected ? '0 8px 20px rgba(92, 52, 27, 0.22)' : '0 2px 6px rgba(0,0,0,0.03)',
                  transform: isSelected ? 'translateY(-2px)' : 'none',
                }}
              >
                <span style={{ fontSize: '16px', lineHeight: 1 }}>{route.flag}</span>
                <span style={{ whiteSpace: 'nowrap' }}>{route.region}</span>
                <span
                  style={{
                    fontSize: '11px',
                    backgroundColor: isSelected ? 'rgba(255,255,255,0.2)' : 'rgba(200, 138, 46, 0.15)',
                    color: isSelected ? '#FFFFFF' : '#8C5318',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontWeight: 800,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {route.transitTime}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Map & Manifest Container */}
        <div
          className="p-4 sm:p-7 rounded-3xl mb-10"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #EFE4D2',
            boxShadow: '0 16px 40px rgba(44, 23, 10, 0.07)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left 7 Columns: Geographically Accurate High-Tech Maritime Chart */}
            <div
              className="lg:col-span-7"
              style={{
                backgroundColor: '#1E120A', // Deep luxury dark walnut maritime sea
                borderRadius: '20px',
                border: '2px solid #361C0D',
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: '16/10',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'inset 0 0 50px rgba(0,0,0,0.6)',
              }}
            >
              {/* Zoom & Reset Controls */}
              <div
                style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  zIndex: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.min(1.4, z + 0.15))}
                  title="Zoom In"
                  style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: 'rgba(54, 28, 13, 0.85)',
                    border: '1px solid rgba(200, 138, 46, 0.35)',
                    borderRadius: '8px',
                    color: '#E5A83B',
                    fontSize: '18px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.max(0.9, z - 0.15))}
                  title="Zoom Out"
                  style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: 'rgba(54, 28, 13, 0.85)',
                    border: '1px solid rgba(200, 138, 46, 0.35)',
                    borderRadius: '8px',
                    color: '#E5A83B',
                    fontSize: '18px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  -
                </button>
                {zoomLevel !== 1 && (
                  <button
                    type="button"
                    onClick={() => setZoomLevel(1)}
                    title="Reset Zoom"
                    style={{
                      width: '32px',
                      height: '24px',
                      backgroundColor: 'rgba(54, 28, 13, 0.85)',
                      border: '1px solid rgba(200, 138, 46, 0.35)',
                      borderRadius: '6px',
                      color: '#E5A83B',
                      fontSize: '10px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(6px)',
                    }}
                  >
                    1:1
                  </button>
                )}
              </div>

              {/* Geographic SVG Canvas */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: '65% 40%',
                  transition: 'transform 0.4s ease-out',
                }}
              >
                <svg
                  viewBox="300 30 550 360" // Centered on Afro-Eurasia (Europe, Africa, Middle East, India, ASEAN)
                  style={{ width: '100%', height: '100%' }}
                >
                  <defs>
                    {/* Radial glow for Mundra Port */}
                    <radialGradient id="mundra-beacon-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#E5A83B" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#C88A2E" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#5C341B" stopOpacity="0" />
                    </radialGradient>

                    {/* Gradient for sea lane route */}
                    <linearGradient id="active-sea-lane" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E5A83B" />
                      <stop offset="50%" stopColor="#F3C68F" />
                      <stop offset="100%" stopColor="#E5A83B" />
                    </linearGradient>

                    {/* Filter for glowing line */}
                    <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2.5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Latitude / Longitude Nautical Grid */}
                  <g opacity="0.12" stroke="#C88A2E" strokeWidth="0.5" strokeDasharray="3 3">
                    <line x1="0" y1="90" x2="1000" y2="90" />
                    <line x1="0" y1="180" x2="1000" y2="180" />
                    <line x1="0" y1="270" x2="1000" y2="270" />
                    <line x1="0" y1="360" x2="1000" y2="360" />
                    <line x1="400" y1="0" x2="400" y2="500" />
                    <line x1="550" y1="0" x2="550" y2="500" />
                    <line x1="700" y1="0" x2="700" y2="500" />
                  </g>

                  {/* Accurate Real World Countries (177 Countries) */}
                  <g id="world-countries">
                    {worldMapPaths.map((c) => {
                      const isIndia = c.name === 'India';
                      const isTargetCountry = activeRoute.targetCountries.includes(c.name);

                      let fillColor = '#342217'; // default landmass
                      let strokeColor = 'rgba(200, 138, 46, 0.16)';
                      let strokeWidth = 0.5;

                      if (isIndia) {
                        fillColor = '#5C341B'; // Rich brand earth
                        strokeColor = '#E5A83B'; // Glowing amber border
                        strokeWidth = 1.2;
                      } else if (isTargetCountry) {
                        fillColor = 'rgba(200, 138, 46, 0.35)'; // Highlighted destination
                        strokeColor = '#E5A83B';
                        strokeWidth = 1.0;
                      }

                      return (
                        <path
                          key={c.name}
                          d={c.d}
                          fill={fillColor}
                          stroke={strokeColor}
                          strokeWidth={strokeWidth}
                          style={{
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                          }}
                          onMouseEnter={() => setHoveredCountry(c.name)}
                          onMouseLeave={() => setHoveredCountry(null)}
                        />
                      );
                    })}
                  </g>

                  {/* Inactive Sea Lane Curves (Subtle Dashed) */}
                  {TRADE_ROUTES.filter((r) => r.id !== activeRouteId).map((r) => (
                    <path
                      key={`inactive-${r.id}`}
                      d={r.routePath}
                      fill="none"
                      stroke="rgba(200, 138, 46, 0.18)"
                      strokeWidth="1.2"
                      strokeDasharray="3 3"
                    />
                  ))}

                  {/* ACTIVE SEA LANE (Glowing, High-Visibility Animated Vessel Route) */}
                  <g id="active-route-group">
                    {/* Route Shadow / Backlight */}
                    <path
                      d={activeRoute.routePath}
                      fill="none"
                      stroke="rgba(229, 168, 59, 0.3)"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    {/* Main Glowing Route Line */}
                    <path
                      id="current-vessel-track"
                      d={activeRoute.routePath}
                      fill="none"
                      stroke="url(#active-sea-lane)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray="6 3"
                      filter="url(#glow-filter)"
                    />

                    {/* Animated Moving Cargo Vessel on Sea Lane */}
                    <circle r="4" fill="#FFFFFF" stroke="#E5A83B" strokeWidth="2">
                      <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        path={activeRoute.routePath}
                      />
                    </circle>

                    {/* Animated Vessel Wave Aura */}
                    <circle r="9" fill="none" stroke="#E5A83B" strokeWidth="1" opacity="0.6">
                      <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        path={activeRoute.routePath}
                      />
                      <animate attributeName="r" values="4;12;4" dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0.1;0.8" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* Destination Port Marker */}
                  <g id="dest-port-pin" transform={`translate(${activeRoute.destCoords.x}, ${activeRoute.destCoords.y})`}>
                    <circle r="12" fill="url(#mundra-beacon-glow)">
                      <animate attributeName="r" values="8;16;8" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle r="4.5" fill="#E5A83B" stroke="#FFFFFF" strokeWidth="1.5" />
                    
                    {/* Callout Badge (Positioned so it NEVER overlaps Mundra) */}
                    <g transform={`translate(${activeRoute.labelOffset.x}, ${activeRoute.labelOffset.y})`}>
                      <rect
                        x="-10"
                        y="-12"
                        width="135"
                        height="24"
                        rx="12"
                        fill="rgba(24, 13, 6, 0.92)"
                        stroke="#E5A83B"
                        strokeWidth="1"
                      />
                      <text x="5" y="4" fill="#FFFFFF" fontSize="9.5" fontWeight="800" letterSpacing="0.04em">
                        {activeRoute.flag} {activeRoute.hub.split(',')[0]}
                      </text>
                      <text x="80" y="4" fill="#E5A83B" fontSize="9" fontWeight="700">
                        {activeRoute.transitTime.split('–')[0].trim()}D
                      </text>
                    </g>
                  </g>

                  {/* ORIGIN HUB: MUNDRA PORT (GUJARAT, INDIA) */}
                  <g id="origin-mundra-hub" transform={`translate(${mundraOrigin.x}, ${mundraOrigin.y})`}>
                    {/* Radiating Radar Wave 1 */}
                    <circle r="18" fill="none" stroke="#E5A83B" strokeWidth="1.2" opacity="0.4">
                      <animate attributeName="r" values="6;24" dur="2.4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0" dur="2.4s" repeatCount="indefinite" />
                    </circle>
                    {/* Radiating Radar Wave 2 */}
                    <circle r="12" fill="none" stroke="#E5A83B" strokeWidth="1.2" opacity="0.4">
                      <animate attributeName="r" values="6;24" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
                    </circle>

                    {/* Center Core Pin */}
                    <circle r="5.5" fill="#E5A83B" stroke="#FFFFFF" strokeWidth="2" />

                    {/* Origin Badge - Cleanly positioned on Gujarat landmass */}
                    <g transform="translate(10, 8)">
                      <rect x="0" y="0" width="128" height="22" rx="11" fill="#5C341B" stroke="#E5A83B" strokeWidth="1" />
                      <text x="64" y="14" fill="#FFFFFF" fontSize="9.5" fontWeight="800" textAnchor="middle" letterSpacing="0.05em">
                        ⚓ PORT MUNDRA (ORIGIN)
                      </text>
                    </g>
                  </g>
                </svg>
              </div>

              {/* Bottom Information Ticker Bar */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '14px',
                  right: '14px',
                  backgroundColor: 'rgba(30, 18, 10, 0.92)',
                  backdropFilter: 'blur(8px)',
                  padding: '9px 16px',
                  borderRadius: '12px',
                  border: '1px solid rgba(200, 138, 46, 0.35)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '8px',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  color: '#E8DCCB',
                }}
              >
                <span>
                  🚢 Gateway Ports: <strong style={{ color: '#E5A83B' }}>Mundra (INMUN1) &amp; Nhava Sheva (INNSA1)</strong>
                </span>
                <span style={{ color: '#43AA8B', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#43AA8B' }}></span>
                  Weekly Dedicated Vessels
                </span>
              </div>

              {/* Hover Country Tooltip */}
              {hoveredCountry && (
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    backgroundColor: 'rgba(30, 18, 10, 0.95)',
                    color: '#E5A83B',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: 800,
                    border: '1px solid rgba(200, 138, 46, 0.4)',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  📍 {hoveredCountry}
                </div>
              )}
            </div>

            {/* Right 5 Columns: Active Corridor Specs & Manifest Card */}
            <div className="lg:col-span-5">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span style={{ fontSize: '30px' }}>{activeRoute.flag}</span>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#C88A2E', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Active Sea Corridor
                  </span>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#2C170A', margin: 0 }}>
                    {activeRoute.name}
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: '13.5px', color: '#6A564A', lineHeight: 1.6, margin: '10px 0 20px' }}>
                {activeRoute.description}
              </p>

              {/* Specification Checklist Box */}
              <div
                style={{
                  backgroundColor: '#FAF5EC',
                  borderRadius: '14px',
                  border: '1px solid #E8DCCB',
                  padding: '18px',
                  marginBottom: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #EFE4D4', paddingBottom: '8px' }}>
                  <span style={{ fontSize: '12.5px', color: '#776254', fontWeight: 600 }}>Destination Hub:</span>
                  <span style={{ fontSize: '12.5px', color: '#2C170A', fontWeight: 800 }}>{activeRoute.hub}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #EFE4D4', paddingBottom: '8px' }}>
                  <span style={{ fontSize: '12.5px', color: '#776254', fontWeight: 600 }}>Average Ocean Transit:</span>
                  <span style={{ fontSize: '12.5px', color: '#235D43', fontWeight: 800 }}>⏱ {activeRoute.transitTime}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #EFE4D4', paddingBottom: '8px' }}>
                  <span style={{ fontSize: '12.5px', color: '#776254', fontWeight: 600 }}>Vessel Frequency:</span>
                  <span style={{ fontSize: '12.5px', color: '#2C170A', fontWeight: 800 }}>{activeRoute.frequency}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #EFE4D4', paddingBottom: '8px' }}>
                  <span style={{ fontSize: '12.5px', color: '#776254', fontWeight: 600 }}>Recommended Grades:</span>
                  <span style={{ fontSize: '12.5px', color: '#8C4318', fontWeight: 800 }}>{activeRoute.typicalGrades}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '12.5px', color: '#776254', fontWeight: 600 }}>Approved Packaging:</span>
                  <span style={{ fontSize: '12px', color: '#2C170A', fontWeight: 700, maxWidth: '210px', textAlign: 'right' }}>{activeRoute.packaging}</span>
                </div>
              </div>

              {/* Direct Booking Action */}
              <a
                href={`https://wa.me/919589790997?text=Hello%20Pradeep%20Trading,%20I%20want%20to%20inquire%20about%20CIF%20freight%20and%20container%20dispatch%20for%20${encodeURIComponent(activeRoute.name)}%20(${activeRoute.hub}).`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  backgroundColor: '#5C341B',
                  color: '#FFFFFF',
                  padding: '14px 22px',
                  borderRadius: '30px',
                  fontSize: '14px',
                  fontWeight: 800,
                  textDecoration: 'none',
                  boxShadow: '0 8px 20px rgba(92, 52, 27, 0.28)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#7A4322')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#5C341B')}
              >
                <i className="fab fa-whatsapp" style={{ fontSize: '18px', color: '#25D366' }}></i>
                <span>Inquire Vessel Rate for {activeRoute.region}</span>
              </a>
            </div>

          </div>
        </div>

        {/* 4 Core Maritime Capabilities Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          
          <div style={{ backgroundColor: '#FFFFFF', padding: '22px 20px', borderRadius: '16px', border: '1px solid #EFE4D2', display: 'flex', gap: '14px', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(200, 138, 46, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>
              📦
            </div>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#C88A2E', textTransform: 'uppercase' }}>FCL Capacity</span>
              <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#2C170A', margin: '2px 0 0' }}>19 MT / 20ft Container</h4>
            </div>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '22px 20px', borderRadius: '16px', border: '1px solid #EFE4D2', display: 'flex', gap: '14px', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(140, 67, 24, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>
              ⚡
            </div>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#8C4318', textTransform: 'uppercase' }}>Despatch Speed</span>
              <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#2C170A', margin: '2px 0 0' }}>48–72 Hrs Port Gating</h4>
            </div>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '22px 20px', borderRadius: '16px', border: '1px solid #EFE4D2', display: 'flex', gap: '14px', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(35, 93, 67, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>
              🛡️
            </div>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#235D43', textTransform: 'uppercase' }}>Export Verification</span>
              <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#2C170A', margin: '2px 0 0' }}>APEDA &amp; Phytosanitary</h4>
            </div>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '22px 20px', borderRadius: '16px', border: '1px solid #EFE4D2', display: 'flex', gap: '14px', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(92, 52, 27, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>
              🌍
            </div>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#5C341B', textTransform: 'uppercase' }}>Global Presence</span>
              <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#2C170A', margin: '2px 0 0' }}>35+ Buying Nations</h4>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
