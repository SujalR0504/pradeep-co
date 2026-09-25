"use client";

import React, { useState } from 'react';

interface CaliberItem {
  id: string;
  name: string;
  shortName: string;
  caliberBadge: string;
  countRange: string;
  category: string;
  kernelLengthMm: number;
  oilPercent: number;
  moistureMax: number;
  purityPercent: number;
  skinColor: string;
  crunchScore: number;
  sweetnessScore: number;
  aromaScore: number;
  image: string;
  applications: string[];
  description: string;
}

const CALIBERS: CaliberItem[] = [
  {
    id: 'bold38',
    name: 'Bold Peanuts 38/42',
    shortName: 'Bold Peanuts',
    caliberBadge: '38/42',
    countRange: '38–42 Seeds/Ounce',
    category: 'Super Jumbo Confectionery',
    kernelLengthMm: 21.5,
    oilPercent: 49.5,
    moistureMax: 7.0,
    purityPercent: 99.95,
    skinColor: 'Deep Ruby Crimson',
    crunchScore: 9.9,
    sweetnessScore: 9.4,
    aromaScore: 9.8,
    image: '/images/premium-peanuts-bowl.jpg',
    applications: ['Gourmet Salted Snacking', 'Chocolate Nut Enrobing', 'Direct Retail Pack', 'Premium Gift Tins'],
    description: 'The crowning jewel of Shivpuri harvest. Largest elongated teardrop kernels with deep red papery skin and commanding crunch.',
  },
  {
    id: 'tj-peanuts',
    name: 'TJ Peanuts',
    shortName: 'TJ Peanuts',
    caliberBadge: '80/90',
    countRange: '50/60 • 80/90 Seeds/Ounce',
    category: 'Confectionery & Snack Roasting',
    kernelLengthMm: 14.0,
    oilPercent: 49.5,
    moistureMax: 7.0,
    purityPercent: 99.95,
    skinColor: 'Smooth Pinkish Red',
    crunchScore: 9.6,
    sweetnessScore: 9.7,
    aromaScore: 9.6,
    image: '/images/tj-peanuts.webp',
    applications: ['Confectionery & Chikki / Brittle', 'Coated Peanuts & Snacks', 'High-Yield Peanut Butter', 'Birdfeed Blends'],
    description: 'Small-to-medium compact Indian peanut kernels with reddish-pink skin and high natural sweetness. Excellent uniform roasting characteristics for confectionery snacks and brittle.',
  },
  {
    id: 'java50',
    name: 'Java Peanuts 50/60',
    shortName: 'Java Peanuts',
    caliberBadge: '50/60',
    countRange: '50–60 Seeds/Ounce',
    category: 'High-Oil Confectionery',
    kernelLengthMm: 15.2,
    oilPercent: 51.8,
    moistureMax: 6.8,
    purityPercent: 99.95,
    skinColor: 'Delicate Rose Pink',
    crunchScore: 9.5,
    sweetnessScore: 9.6,
    aromaScore: 9.7,
    image: '/images/java-peanuts.webp',
    applications: ['Peanut Butter Emulsions', 'Nougat Bars', 'Bakery Inclusions', 'Snack Frying'],
    description: 'Compact spherical kernel with natural rose-pink husk. Higher natural oil concentration gives exceptional velvety mouthfeel in butter production.',
  },
  {
    id: 'blanched',
    name: 'Whole Blanched 40/50',
    shortName: 'Whole Blanched',
    caliberBadge: '40/50',
    countRange: '40–50 Cotyledons/Oz',
    category: '100% Skinless Cleanroom',
    kernelLengthMm: 18.0,
    oilPercent: 50.2,
    moistureMax: 5.5,
    purityPercent: 99.98,
    skinColor: 'Pure Spotless Ivory',
    crunchScore: 9.8,
    sweetnessScore: 9.5,
    aromaScore: 9.4,
    image: '/images/whole-blanched-peanuts.webp',
    applications: ['White Chocolate Dragees', 'Ultra-Smooth Peanut Butter', 'Gourmet Honey Roasting', 'Baking Flours'],
    description: 'Thermally blanched to remove 100% of skin without damaging inner cotyledon natural fats. Zero skins, spotless ivory surface.',
  },
  {
    id: 'splits',
    name: 'Split Blanched Cotyledons',
    shortName: 'Split Blanched',
    caliberBadge: 'Cotyledons',
    countRange: 'Even Hemispheres',
    category: 'Industrial Paste & Butter',
    kernelLengthMm: 14.5,
    oilPercent: 51.0,
    moistureMax: 5.0,
    purityPercent: 99.95,
    skinColor: 'Natural Cream Ivory',
    crunchScore: 9.4,
    sweetnessScore: 9.5,
    aromaScore: 9.6,
    image: '/images/split-blanched-peanuts.webp',
    applications: ['High-Shear Peanut Butter', 'Nut Pastes & Praline', 'Cookie Inclusions', 'Energy Bars'],
    description: 'Split halves with internal germ inspection. Maximizes milling efficiency for industrial peanut butter and confectionery paste lines.',
  },
];

export default function InteractiveCaliberStudio() {
  const [selectedCaliberId, setSelectedCaliberId] = useState<string>('bold38');
  const caliber = CALIBERS.find((c) => c.id === selectedCaliberId) || CALIBERS[0];

  return (
    <section
      id="caliber-studio"
      style={{
        padding: '95px 0 90px',
        backgroundColor: '#FAF5EC',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #EFE4D2',
        borderBottom: '1px solid #EFE4D2',
      }}
    >
      <div className="site-container auto-container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'left', marginBottom: '40px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(200, 138, 46, 0.12)',
              border: '1px solid rgba(200, 138, 46, 0.3)',
              padding: '5px 16px',
              borderRadius: '30px',
              marginBottom: '12px',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#C88A2E' }}></span>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#8C5318', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Interactive Kernel Caliber &amp; Sensory Studio
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading), "DM Serif Display", serif', fontSize: 'clamp(2rem, 3.4vw, 2.75rem)', fontWeight: 800, color: '#2C170A', letterSpacing: '-0.02em', margin: '6px 0 10px', lineHeight: 1.15 }}>
            Precision Calibrated Groundnut Grades
          </h2>
          <p style={{ fontSize: '15.5px', color: '#5A483D', maxWidth: '640px', margin: 0, lineHeight: 1.6 }}>
            Explore seed lengths, oil concentrations, and roasting profiles across our double-sortex graded Bold, Java, and Blanched peanut varieties.
          </p>
        </div>

        {/* Caliber Selection Ribbon — Single Horizontal Line Layout */}
        <div className="caliber-filters-wrapper">
          <div
            className="caliber-filters"
            role="tablist"
            aria-label="Peanut Caliber Grades"
          >
            {CALIBERS.map((item) => {
              const isSelected = item.id === selectedCaliberId;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCaliberId(item.id)}
                  className={`caliber-filter ${isSelected ? 'active' : ''}`}
                >
                  <span>{item.shortName}</span>
                  <span className="caliber-badge">
                    {item.caliberBadge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Studio Stage */}
        <div
          className="p-4 sm:p-9 rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #EFE4D2',
            boxShadow: '0 16px 40px rgba(44, 23, 10, 0.06)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left 5 Columns: Visual Kernel Macro & Physical Caliper Gauge */}
            <div className="lg:col-span-5 text-center">
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1/1',
                  maxHeight: '340px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  margin: '0 auto 20px',
                  border: '1px solid #E8DCCB',
                  backgroundColor: '#FAF5EC',
                  boxShadow: '0 12px 28px rgba(92, 52, 27, 0.12)',
                }}
              >
                <img
                  src={caliber.image}
                  alt={caliber.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.08)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: 'rgba(44, 23, 10, 0.85)',
                    color: '#C88A2E',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: 800,
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(200, 138, 46, 0.3)',
                  }}
                >
                  🔍 Interactive Macro View
                </div>
              </div>

              {/* Physical Caliper Length Gauge */}
              <div
                style={{
                  backgroundColor: '#FAF5EC',
                  borderRadius: '14px',
                  padding: '14px 18px',
                  border: '1px solid #EAE0D0',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#776254', textTransform: 'uppercase' }}>
                    Approximate Kernel Length:
                  </span>
                  <span style={{ fontSize: '15px', fontWeight: 900, color: '#2C170A' }}>
                    📏 ~{caliber.kernelLengthMm} mm
                  </span>
                </div>
                
                {/* Visual Ruler Scale Bar */}
                <div style={{ height: '10px', backgroundColor: '#E2D4C0', borderRadius: '5px', overflow: 'hidden', position: 'relative' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${(caliber.kernelLengthMm / 25) * 100}%`,
                      backgroundColor: '#C88A2E',
                      borderRadius: '5px',
                      transition: 'width 0.4s ease',
                    }}
                  ></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#9E8C7E', marginTop: '4px' }}>
                  <span>10 mm</span>
                  <span>15 mm</span>
                  <span>20 mm</span>
                  <span>25 mm Max</span>
                </div>
              </div>

            </div>

            {/* Right 7 Columns: Technical Specifications & Sensory Dials */}
            <div className="lg:col-span-7">
              
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#C88A2E', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {caliber.category}
                </span>
                <span style={{ fontSize: '10.5px', backgroundColor: 'rgba(35, 93, 67, 0.12)', color: '#235D43', fontWeight: 800, padding: '2px 8px', borderRadius: '12px', whiteSpace: 'nowrap' }}>
                  99.95% Purity Graded
                </span>
              </div>

              <h3 style={{ fontSize: 'clamp(20px, 4vw, 26px)', fontWeight: 900, color: '#2C170A', margin: '2px 0 10px', lineHeight: 1.25 }}>
                {caliber.name}
              </h3>

              <p style={{ fontSize: '14px', color: '#5A483D', lineHeight: 1.6, margin: '0 0 20px' }}>
                {caliber.description}
              </p>

              {/* 4 Laboratory Metric Boxes: 2-column on mobile, 4-column on sm+ */}
              <div 
                className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 mb-6"
              >
                
                <div style={{ backgroundColor: '#FAF5EC', padding: '12px 8px', borderRadius: '12px', textAlign: 'center', border: '1px solid #EFE4D2' }}>
                  <span style={{ fontSize: '10px', fontWeight: 800, color: '#776254', textTransform: 'uppercase', display: 'block' }}>Oil Content</span>
                  <span className="text-[17px] sm:text-[19px] font-black block my-0.5" style={{ color: '#C88A2E' }}>{caliber.oilPercent}%</span>
                  <span style={{ fontSize: '9.5px', color: '#887467' }}>Natural Lipids</span>
                </div>

                <div style={{ backgroundColor: '#FAF5EC', padding: '12px 8px', borderRadius: '12px', textAlign: 'center', border: '1px solid #EFE4D2' }}>
                  <span style={{ fontSize: '10px', fontWeight: 800, color: '#776254', textTransform: 'uppercase', display: 'block' }}>Moisture</span>
                  <span className="text-[17px] sm:text-[19px] font-black block my-0.5" style={{ color: '#235D43' }}>&le; {caliber.moistureMax}%</span>
                  <span style={{ fontSize: '9.5px', color: '#887467' }}>Anti-Mould Safe</span>
                </div>

                <div style={{ backgroundColor: '#FAF5EC', padding: '12px 8px', borderRadius: '12px', textAlign: 'center', border: '1px solid #EFE4D2' }}>
                  <span style={{ fontSize: '10px', fontWeight: 800, color: '#776254', textTransform: 'uppercase', display: 'block' }}>Aflatoxin</span>
                  <span className="text-[17px] sm:text-[19px] font-black block my-0.5" style={{ color: '#8C4318' }}>&lt; 4 PPB</span>
                  <span style={{ fontSize: '9.5px', color: '#887467' }}>HPLC EU Standard</span>
                </div>

                <div style={{ backgroundColor: '#FAF5EC', padding: '12px 8px', borderRadius: '12px', textAlign: 'center', border: '1px solid #EFE4D2' }}>
                  <span style={{ fontSize: '10px', fontWeight: 800, color: '#776254', textTransform: 'uppercase', display: 'block' }}>Sortex Purity</span>
                  <span className="text-[17px] sm:text-[19px] font-black block my-0.5" style={{ color: '#5C341B' }}>{caliber.purityPercent}%</span>
                  <span style={{ fontSize: '9.5px', color: '#887467' }}>Multi-CCD Graded</span>
                </div>

              </div>

              {/* Recommended Industry Applications */}
              <div style={{ marginBottom: '25px' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#2C170A', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>
                  Primary Industrial Applications:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {caliber.applications.map((app, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: '#FAF5EC',
                        color: '#5C341B',
                        border: '1px solid #E8DCCB',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 700,
                      }}
                    >
                      ✓ {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Row */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  href={`https://wa.me/919589790997?text=Hello%20Pradeep%20Trading,%20I%20would%20like%20to%20request%20a%20physical%20lab%20sample%20and%20specification%20COA%20for%20${encodeURIComponent(caliber.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    backgroundColor: '#5C341B',
                    color: '#FFFFFF',
                    height: '48px',
                    padding: '0 26px',
                    borderRadius: '24px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    boxShadow: '0 6px 18px rgba(92, 52, 27, 0.25)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#7A4322')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#5C341B')}
                >
                  <i className="fab fa-whatsapp" style={{ fontSize: '16px', color: '#25D366' }}></i>
                  <span>Request Physical Sample Lot</span>
                </a>

                <a
                  href="mailto:pradeeptradingcomp@gmail.com?subject=Certificate%20of%20Analysis%20Request%20-%20Pradeep%20Trading"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    backgroundColor: '#FFFFFF',
                    color: '#2C170A',
                    border: '1px solid #E0D4C2',
                    height: '48px',
                    padding: '0 24px',
                    borderRadius: '24px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#FAF5EC')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#FFFFFF')}
                >
                  <i className="fa fa-file-pdf" style={{ color: '#C88A2E' }}></i>
                  <span>Download Lab COA</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
