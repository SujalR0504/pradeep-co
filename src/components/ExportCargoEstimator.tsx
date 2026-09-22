"use client";

import React, { useState } from 'react';

interface DestinationPort {
  name: string;
  country: string;
  flag: string;
  days: string;
}

const DESTINATION_PORTS: DestinationPort[] = [
  { name: 'Jebel Ali, Dubai', country: 'United Arab Emirates', flag: '🇦🇪', days: '3–5 Days' },
  { name: 'Rotterdam Gateway', country: 'Netherlands / EU', flag: '🇳🇱', days: '20–22 Days' },
  { name: 'Singapore Port', country: 'Singapore', flag: '🇸🇬', days: '7–9 Days' },
  { name: 'Haiphong / HCMC', country: 'Vietnam', flag: '🇻🇳', days: '8–11 Days' },
  { name: 'Jakarta (Tanjung Priok)', country: 'Indonesia', flag: '🇮🇩', days: '9–12 Days' },
  { name: 'Durban Harbor', country: 'South Africa', flag: '🇿🇦', days: '14–17 Days' },
];

export default function ExportCargoEstimator() {
  const [grade, setGrade] = useState<'bold38' | 'bold40' | 'java50' | 'blanched' | 'inshell'>('bold40');
  const [packaging, setPackaging] = useState<'jute25' | 'jute50' | 'vacuum25' | 'jumbo1000'>('jute25');
  const [metricTons, setMetricTons] = useState<number>(38); // 38 MT = 2 x 20ft FCL
  const [selectedPort, setSelectedPort] = useState<DestinationPort>(DESTINATION_PORTS[0]);

  // Calculations
  const bagWeightKg = packaging === 'jute25' ? 25 : packaging === 'jute50' ? 50 : packaging === 'vacuum25' ? 25 : 1000;
  const totalBags = Math.round((metricTons * 1000) / bagWeightKg);
  const container20Count = Math.ceil(metricTons / 19); // 19 MT per 20ft FCL standard for peanuts
  const palletsCount = packaging === 'jumbo1000' ? metricTons : Math.round(metricTons * 1.05); // standard pallets

  const gradeNames: Record<string, string> = {
    bold38: 'Bold Peanuts 38/42 (Super Jumbo)',
    bold40: 'Bold Peanuts 40/50 (Standard Export)',
    java50: 'Java Peanuts 50/60 (Confectionery)',
    blanched: 'Whole Blanched Peanuts (Skinless)',
    inshell: 'Groundnuts In-Shell (Natural Pods)',
  };

  const packagingNames: Record<string, string> = {
    jute25: '25kg Export Jute Bags',
    jute50: '50kg Standard Jute Bags',
    vacuum25: '25kg Nitrogen-Flushed Vacuum Cartons',
    jumbo1000: '1,000kg Heavy Poly Jumbo Totes',
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Pradeep Trading Company,\n\nI used your interactive cargo estimator and would like an official CIF Proforma Quotation:\n` +
    `• Product: ${gradeNames[grade]}\n` +
    `• Quantity: ${metricTons} Metric Tons (~${container20Count} x 20ft FCL)\n` +
    `• Packaging: ${packagingNames[packaging]} (${totalBags.toLocaleString()} units)\n` +
    `• Destination Port: ${selectedPort.name}, ${selectedPort.country}\n\n` +
    `Please provide current FOB Mundra / CIF price and earliest sailing date.`
  );

  return (
    <section
      id="cargo-estimator"
      style={{
        padding: '90px 0 85px',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #EFE8DB',
        borderBottom: '1px solid #EFE8DB',
      }}
    >
      <div className="site-container auto-container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 32px' }}>
        
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
              Maritime Export Logistics
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading), "DM Serif Display", serif', fontSize: 'clamp(2rem, 3.4vw, 2.75rem)', fontWeight: 600, color: '#2C170A', letterSpacing: '-0.02em', margin: '6px 0 10px', lineHeight: 1.15 }}>
            Bulk Export Cargo &amp; Container Estimator
          </h2>
          <p style={{ fontSize: '15.5px', color: '#5A483D', maxWidth: '640px', margin: 0, lineHeight: 1.6 }}>
            Calculate 20ft FCL freight requirements, bag counts, and transit days from Mundra Port to your destination discharge terminal.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div
          style={{
            backgroundColor: '#FAF6EE',
            borderRadius: '24px',
            border: '1px solid #EAE0D0',
            padding: '36px',
            boxShadow: '0 16px 40px rgba(44, 23, 10, 0.06)',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '35px' }}>
            
            {/* Left 7 Columns: Buyer Inputs */}
            <div style={{ gridColumn: 'span 7' }}>
              
              {/* Step 1: Grade Selection */}
              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 800, color: '#2C170A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                  1. Select Peanut Grade &amp; Variety:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '8px' }}>
                  {[
                    { id: 'bold40', label: 'Bold 40/50', sub: 'Standard Export' },
                    { id: 'bold38', label: 'Bold 38/42', sub: 'Super Jumbo' },
                    { id: 'java50', label: 'Java 50/60', sub: 'Confectionery' },
                    { id: 'blanched', label: 'Whole Blanched', sub: 'Skinless White' },
                    { id: 'inshell', label: 'In-Shell Pods', sub: 'Double Kernel' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setGrade(item.id as any)}
                      style={{
                        padding: '12px 14px',
                        backgroundColor: grade === item.id ? '#5C341B' : '#FFFFFF',
                        color: grade === item.id ? '#FFFFFF' : '#361C0D',
                        border: grade === item.id ? '2px solid #5C341B' : '1px solid #E2D6C5',
                        borderRadius: '12px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        boxShadow: grade === item.id ? '0 4px 12px rgba(92, 52, 27, 0.2)' : 'none',
                      }}
                    >
                      <div style={{ fontSize: '13.5px', fontWeight: 800 }}>{item.label}</div>
                      <div style={{ fontSize: '11px', opacity: grade === item.id ? 0.85 : 0.65 }}>{item.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Packaging Selection */}
              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 800, color: '#2C170A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                  2. Export Packaging Specification:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '8px' }}>
                  {[
                    { id: 'jute25', label: '25kg Jute Bags', sub: 'Palletized / Breathable' },
                    { id: 'jute50', label: '50kg Jute Bags', sub: 'Bulk Global Standard' },
                    { id: 'vacuum25', label: '25kg Vacuum Carton', sub: 'Nitrogen Flushed' },
                    { id: 'jumbo1000', label: '1,000kg Jumbo Tote', sub: 'PP Industrial Bulk' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPackaging(p.id as any)}
                      style={{
                        padding: '12px 14px',
                        backgroundColor: packaging === p.id ? '#5C341B' : '#FFFFFF',
                        color: packaging === p.id ? '#FFFFFF' : '#361C0D',
                        border: packaging === p.id ? '2px solid #5C341B' : '1px solid #E2D6C5',
                        borderRadius: '12px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        boxShadow: packaging === p.id ? '0 4px 12px rgba(92, 52, 27, 0.2)' : 'none',
                      }}
                    >
                      <div style={{ fontSize: '13.5px', fontWeight: 800 }}>{p.label}</div>
                      <div style={{ fontSize: '11px', opacity: packaging === p.id ? 0.85 : 0.65 }}>{p.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Cargo Quantity Slider */}
              <div style={{ marginBottom: '25px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 800, color: '#2C170A', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    3. Cargo Volume (Metric Tons):
                  </label>
                  <span style={{ fontSize: '20px', fontWeight: 900, color: '#C88A2E' }}>
                    {metricTons} MT <span style={{ fontSize: '13px', color: '#776254', fontWeight: 600 }}>({(metricTons * 1000).toLocaleString()} kg)</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="19"
                  max="200"
                  step="19"
                  value={metricTons}
                  onChange={(e) => setMetricTons(Number(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '6px',
                    accentColor: '#C88A2E',
                    cursor: 'pointer',
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', color: '#887467', marginTop: '6px' }}>
                  <span>19 MT (1x20&apos; FCL)</span>
                  <span>38 MT (2x20&apos; FCL)</span>
                  <span>76 MT (4x20&apos; FCL)</span>
                  <span>190 MT (10x20&apos; FCL)</span>
                </div>
              </div>

              {/* Step 4: Destination Port Selection */}
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 800, color: '#2C170A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                  4. Select Destination Port:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px' }}>
                  {DESTINATION_PORTS.map((port) => (
                    <button
                      key={port.name}
                      type="button"
                      onClick={() => setSelectedPort(port)}
                      style={{
                        padding: '10px 12px',
                        backgroundColor: selectedPort.name === port.name ? '#C88A2E' : '#FFFFFF',
                        color: selectedPort.name === port.name ? '#FFFFFF' : '#2C170A',
                        border: selectedPort.name === port.name ? '1px solid #C88A2E' : '1px solid #E2D6C5',
                        borderRadius: '10px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '12.5px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.2s',
                      }}
                    >
                      <span style={{ fontSize: '16px' }}>{port.flag}</span>
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{port.name}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 5 Columns: Dynamic Calculation Summary & Direct WhatsApp RFQ Card */}
            <div
              style={{
                gridColumn: 'span 5',
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                border: '2px solid #C88A2E',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 12px 30px rgba(200, 138, 46, 0.12)',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F0E6D8', paddingBottom: '14px', marginBottom: '16px' }}>
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#C88A2E', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      Shipment Specification
                    </span>
                    <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#2C170A', margin: '2px 0 0' }}>
                      Export Cargo Manifest
                    </h3>
                  </div>
                  <div style={{ backgroundColor: '#235D43', color: '#FFFFFF', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 800 }}>
                    Mundra Ready
                  </div>
                </div>

                {/* Calculation Rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px' }}>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#776254' }}>Total Order Quantity:</span>
                    <strong style={{ color: '#2C170A' }}>{metricTons} Metric Tons</strong>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#776254' }}>Packaging Units:</span>
                    <strong style={{ color: '#8C4318' }}>{totalBags.toLocaleString()} Bags ({bagWeightKg} kg)</strong>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#776254' }}>20ft FCL Containers:</span>
                    <strong style={{ color: '#2C170A' }}>{container20Count} Container{container20Count > 1 ? 's' : ''} (19 MT ea)</strong>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#776254' }}>Destination Port:</span>
                    <strong style={{ color: '#2C170A' }}>{selectedPort.flag} {selectedPort.name}</strong>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#776254' }}>Estimated Ocean Transit:</span>
                    <strong style={{ color: '#235D43' }}>⏱ {selectedPort.days}</strong>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#776254' }}>Pallet / Container Prep:</span>
                    <strong style={{ color: '#2C170A' }}>Fumigated + Desiccants</strong>
                  </div>

                </div>

                {/* Certifications Included Pill Box */}
                <div
                  style={{
                    backgroundColor: '#FAF5EC',
                    borderRadius: '12px',
                    padding: '12px 14px',
                    margin: '20px 0',
                    fontSize: '11.5px',
                    color: '#655347',
                    lineHeight: 1.5,
                  }}
                >
                  <strong style={{ color: '#5C341B', display: 'block', marginBottom: '3px' }}>Included Export Documentation:</strong>
                  ✓ Certificate of Origin (APEDA) • ✓ Phytosanitary Certificate • ✓ HPLC Aflatoxin Lab Report (&lt; 4 ppb) • ✓ Commercial Invoice &amp; B/L
                </div>
              </div>

              {/* Action Button */}
              <a
                href={`https://wa.me/918450016454?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  backgroundColor: '#5C341B',
                  color: '#FFFFFF',
                  height: '48px',
                  padding: '0 24px',
                  borderRadius: '24px',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 6px 18px rgba(92, 52, 27, 0.25)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#7A4322')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#5C341B')}
              >
                <i className="fab fa-whatsapp" style={{ fontSize: '18px', color: '#25D366' }}></i>
                <span>Get Instant Proforma RFQ for {metricTons} MT</span>
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
