"use client";

import React, { useState, useEffect, useRef } from 'react';

interface Particle {
  id: number;
  channel: number;
  x: number;
  y: number;
  speed: number;
  radius: number;
  isDefect: boolean;
  color: string;
  ejected: boolean;
  vx: number;
}

export default function InteractiveSortingLab() {
  const [activeTab, setActiveTab] = useState<'sortex' | 'magnet'>('sortex');
  const [scansPerSec, setScansPerSec] = useState(2840);
  const [acceptedCount, setAcceptedCount] = useState(14820);
  const [rejectedCount, setRejectedCount] = useState(12);
  const [throughputSpeed, setThroughputSpeed] = useState<number>(3.5); // MT / Hr

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameIdRef = useRef<number>(0);

  // Live fluctuating telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setScansPerSec(Math.floor(2820 + Math.random() * 45));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // HTML5 Canvas Multi-Channel Waterfall Physics
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth * 2);
    let height = (canvas.height = canvas.offsetHeight * 2);

    const resize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * 2;
      height = canvas.height = canvas.offsetHeight * 2;
    };
    window.addEventListener('resize', resize);

    const channelWidth = width / 4;
    const scanLineY = height * 0.58;

    let particleIdCounter = 0;

    const spawnParticle = (forceDefect = false) => {
      const channel = Math.floor(Math.random() * 3); // 0: Bold, 1: Java, 2: Blanched
      const isDefect = forceDefect || Math.random() < 0.08;
      const x = channel * channelWidth + channelWidth * (0.3 + Math.random() * 0.4);
      
      let color = '#C88A2E';
      if (channel === 0) color = isDefect ? '#3a2318' : '#94471A';
      if (channel === 1) color = isDefect ? '#2b1b12' : '#C8822A';
      if (channel === 2) color = isDefect ? '#4a382d' : '#E8D2AA';

      particlesRef.current.push({
        id: particleIdCounter++,
        channel,
        x,
        y: -20,
        speed: (2.5 + Math.random() * 1.5) * (throughputSpeed / 3),
        radius: channel === 0 ? 9 : channel === 1 ? 7.5 : 8,
        isDefect,
        color,
        ejected: false,
        vx: 0,
      });
    };

    let spawnTimer = 0;
    const loop = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw 4 Laminar Channel Guidelines
      ctx.strokeStyle = 'rgba(92, 52, 27, 0.08)';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 6]);
      for (let i = 1; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(i * channelWidth, 0);
        ctx.lineTo(i * channelWidth, height);
        ctx.stroke();
      }
      ctx.setLineDash([]);

      // Draw Laser Optical Scan Line
      const laserGlow = ctx.createLinearGradient(0, scanLineY - 6, 0, scanLineY + 6);
      laserGlow.addColorStop(0, 'rgba(200, 138, 46, 0)');
      laserGlow.addColorStop(0.5, 'rgba(229, 168, 59, 0.7)');
      laserGlow.addColorStop(1, 'rgba(200, 138, 46, 0)');
      ctx.fillStyle = laserGlow;
      ctx.fillRect(0, scanLineY - 6, width, 12);

      ctx.strokeStyle = '#E5A83B';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, scanLineY);
      ctx.lineTo(width, scanLineY);
      ctx.stroke();

      // Spawn new falling peanut particles
      spawnTimer++;
      if (spawnTimer % Math.max(4, Math.floor(10 / (throughputSpeed / 2))) === 0) {
        spawnParticle();
      }

      // Update and draw particles
      particlesRef.current.forEach((p) => {
        p.y += p.speed;
        p.x += p.vx;

        // When a defect reaches the laser optical scan line, blast it into Channel 4
        if (p.isDefect && !p.ejected && p.y >= scanLineY - 10 && p.y <= scanLineY + 20) {
          p.ejected = true;
          p.vx = 7.5;
          p.speed *= 1.3;
          setRejectedCount((r) => r + 1);

          // Draw pneumatic air blast puff
          ctx.beginPath();
          ctx.arc(p.x, p.y, 22, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(229, 168, 59, 0.4)';
          ctx.fill();
        }

        // Accepted particle drops into bottom bin
        if (!p.isDefect && p.y > height - 10 && p.y < height + 10) {
          setAcceptedCount((a) => a + 1);
        }

        // Draw Peanut Kernel (Oval Shape)
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.vx !== 0 ? 0.4 : 0.05);

        // Kernel shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.12)';
        ctx.beginPath();
        ctx.ellipse(2, 3, p.radius * 0.9, p.radius * 1.3, 0, 0, Math.PI * 2);
        ctx.fill();

        // Kernel body
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.radius * 0.9, p.radius * 1.3, 0, 0, Math.PI * 2);
        ctx.fill();

        // Highlight sheen
        ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
        ctx.beginPath();
        ctx.ellipse(-p.radius * 0.3, -p.radius * 0.4, p.radius * 0.35, p.radius * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();

        // If defect, draw micro inspection indicator
        if (p.isDefect) {
          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = 1.5;
          ctx.strokeRect(-p.radius * 1.2, -p.radius * 1.5, p.radius * 2.4, p.radius * 3.0);
        }

        ctx.restore();
      });

      // Filter out particles that fell off-screen
      particlesRef.current = particlesRef.current.filter((p) => p.y < height + 50 && p.x < width + 50);

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animFrameIdRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [throughputSpeed]);

  const handleTestDefect = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const width = canvas.width;
    const channelWidth = width / 4;
    particlesRef.current.push({
      id: Date.now(),
      channel: 1,
      x: channelWidth * 1.5,
      y: -10,
      speed: 4.2,
      radius: 9,
      isDefect: true,
      color: '#2a160d',
      ejected: false,
      vx: 0,
    });
  };

  return (
    <section
      id="sorting-lab"
      style={{
        padding: '85px 0 80px',
        backgroundColor: '#FCFAF5',
        borderTop: '1px solid #EFE8DB',
        borderBottom: '1px solid #EFE8DB',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="auto-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Top Spec Tickers */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#A4774C',
            marginBottom: '14px',
            borderBottom: '1px solid rgba(92, 52, 27, 0.1)',
            paddingBottom: '8px',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <div>ELECTRONIC SORTEX TOLERANCE: &lt; 0.05% ADMIXTURE</div>
          <div>AFLATOXIN COMPLIANT: &lt; 4 PPB (HPLC TESTED)</div>
        </div>

        {/* Section Header with Mode Pills */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '35px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span style={{ fontSize: '12.5px', fontWeight: 800, color: '#C88A2E', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block' }}>
              ACT 07 — PRECISION OPTICAL SORTING &amp; GRAVITY LAB
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 900, color: '#2C170A', marginTop: '6px', letterSpacing: '-0.02em' }}>
              SORTED BY PRECISION.
            </h2>
          </div>

          {/* Interactive Mode Pills */}
          <div style={{ display: 'flex', gap: '8px', backgroundColor: '#FAF5EC', padding: '6px', borderRadius: '30px', border: '1px solid #E5D9C8' }}>
            <button
              onClick={() => setActiveTab('sortex')}
              style={{
                backgroundColor: activeTab === 'sortex' ? '#5C341B' : 'transparent',
                color: activeTab === 'sortex' ? '#ffffff' : '#361C0D',
                border: 'none',
                padding: '9px 18px',
                borderRadius: '25px',
                fontSize: '13px',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s',
                boxShadow: activeTab === 'sortex' ? '0 4px 12px rgba(92, 52, 27, 0.25)' : 'none',
              }}
            >
              <i className="fa fa-cogs" style={{ color: activeTab === 'sortex' ? '#E5A83B' : '#706155' }}></i>
              <span>OPTICAL SORTEX LINE</span>
            </button>

            <button
              onClick={() => setActiveTab('magnet')}
              style={{
                backgroundColor: activeTab === 'magnet' ? '#5C341B' : 'transparent',
                color: activeTab === 'magnet' ? '#ffffff' : '#361C0D',
                border: 'none',
                padding: '9px 18px',
                borderRadius: '25px',
                fontSize: '13px',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s',
                boxShadow: activeTab === 'magnet' ? '0 4px 12px rgba(92, 52, 27, 0.25)' : 'none',
              }}
            >
              <i className="fa fa-magnet" style={{ color: activeTab === 'magnet' ? '#E5A83B' : '#706155' }}></i>
              <span>KERNEL MAGNET &amp; DENSITY LAB</span>
            </button>
          </div>
        </div>

        {/* 2-Column Precision Lab Showcase */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '30px', alignItems: 'stretch' }}>
          
          {/* Left Column: Electronic Sortex Chamber Photographic Feed */}
          <div
            style={{
              gridColumn: 'span 6',
              backgroundColor: '#FAF5EC',
              borderRadius: '24px',
              padding: '28px',
              border: '1px solid #E5D9C8',
              boxShadow: '0 12px 36px rgba(92, 52, 27, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Header inside Card */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fa fa-microchip" style={{ color: '#5C341B', fontSize: '15px' }}></i>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#361C0D', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    ELECTRONIC SORTEX CHAMBER
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#FAF2E6', border: '1px solid #E8D6BD', padding: '4px 10px', borderRadius: '12px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#235D43', display: 'inline-block' }}></span>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#8C4318' }}>LIVE {scansPerSec} SCANS/SEC</span>
                </div>
              </div>

              {/* High-Resolution Machine View with Laser Overlay */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '3px solid #ffffff',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
                  height: '270px',
                  backgroundColor: '#000',
                }}
              >
                <img
                  src="/images/buhler-sortex-machine.jpg"
                  alt="Buhler Optical CCD Sortex Sorting Machine"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                {/* Top Badge Overlay */}
                <div style={{ position: 'absolute', top: '14px', left: '14px', zIndex: 2 }}>
                  <span style={{ backgroundColor: 'rgba(54, 28, 13, 0.85)', backdropFilter: 'blur(6px)', color: '#E5A83B', border: '1px solid rgba(229, 168, 59, 0.5)', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: 800 }}>
                    CCD SCAN 540nm
                  </span>
                </div>

                {/* Bottom Acceptance Banner */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '14px',
                    left: '14px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(6px)',
                    padding: '8px 16px',
                    borderRadius: '12px',
                    border: '1px solid #E5D9C8',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                  }}
                >
                  <div style={{ fontSize: '10px', fontWeight: 800, color: '#706155', textTransform: 'uppercase' }}>CALIBER PURITY</div>
                  <div style={{ fontSize: '16px', fontWeight: 900, color: '#235D43' }}>99.95% ACCEPTANCE</div>
                </div>
              </div>
            </div>

            {/* Technical Specs 3-Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '22px' }}>
              <div style={{ backgroundColor: '#ffffff', padding: '12px 14px', borderRadius: '12px', border: '1px solid #EBE2D5', textAlign: 'center' }}>
                <div style={{ fontSize: '10.5px', color: '#706155', fontWeight: 700 }}>CAMERA SPEED</div>
                <div style={{ fontSize: '15px', fontWeight: 900, color: '#361C0D', marginTop: '2px' }}>20,000 FPS</div>
              </div>
              <div style={{ backgroundColor: '#ffffff', padding: '12px 14px', borderRadius: '12px', border: '1px solid #EBE2D5', textAlign: 'center' }}>
                <div style={{ fontSize: '10.5px', color: '#706155', fontWeight: 700 }}>PNEUMATIC BLAST</div>
                <div style={{ fontSize: '15px', fontWeight: 900, color: '#235D43', marginTop: '2px' }}>0.4 MS</div>
              </div>
              <div style={{ backgroundColor: '#ffffff', padding: '12px 14px', borderRadius: '12px', border: '1px solid #EBE2D5', textAlign: 'center' }}>
                <div style={{ fontSize: '10.5px', color: '#706155', fontWeight: 700 }}>DEFECT REJECTION</div>
                <div style={{ fontSize: '15px', fontWeight: 900, color: '#8C4318', marginTop: '2px' }}>99.9% ACC.</div>
              </div>
            </div>

          </div>

          {/* Right Column: Gravitational Multi-Channel Streams Canvas Simulation */}
          <div
            style={{
              gridColumn: 'span 6',
              backgroundColor: '#FAF5EC',
              borderRadius: '24px',
              padding: '28px',
              border: '1px solid #E5D9C8',
              boxShadow: '0 12px 36px rgba(92, 52, 27, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#C88A2E', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  SORTED WATERFALL STREAMS
                </span>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#235D43' }}>
                  ✓ {acceptedCount.toLocaleString()} Passed • ✕ {rejectedCount} Ejected
                </span>
              </div>

              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#2C170A', marginBottom: '4px' }}>
                Gravitational Multi-Channel Streams
              </h3>
              <p style={{ fontSize: '13px', color: '#55473E', margin: '0 0 16px', lineHeight: 1.5 }}>
                Particles fall through laminar channels, guided by calibrated optical sensors and microsecond air ejectors.
              </p>

              {/* Interactive Canvas Viewport */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '240px',
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '2px solid #E5D9C8',
                  overflow: 'hidden',
                  boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <canvas
                  ref={canvasRef}
                  style={{ width: '100%', height: '100%', display: 'block' }}
                />

                {/* Laser Trigger Visual Indicator */}
                <div
                  style={{
                    position: 'absolute',
                    top: '58%',
                    right: '12px',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(54, 28, 13, 0.9)',
                    color: '#E5A83B',
                    fontSize: '9.5px',
                    fontWeight: 800,
                    padding: '3px 8px',
                    borderRadius: '8px',
                    border: '1px solid rgba(229, 168, 59, 0.4)',
                    pointerEvents: 'none',
                  }}
                >
                  OPTICAL BEAM 540nm
                </div>
              </div>

              {/* Channel Headings */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px', textAlign: 'center', marginTop: '8px' }}>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#361C0D' }}>CH 1: BOLD (38/42)</div>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#361C0D' }}>CH 2: JAVA (50/60)</div>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#361C0D' }}>CH 3: BLANCHED</div>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#ef4444' }}>CH 4: REJECTS</div>
              </div>
            </div>

            {/* Interactive Buyer Controls Toolbar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#ffffff',
                padding: '12px 16px',
                borderRadius: '16px',
                border: '1px solid #EBE2D5',
                marginTop: '18px',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              {/* Speed Slider */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#706155' }}>FLOW SPEED:</span>
                <input
                  type="range"
                  min="1.5"
                  max="5.0"
                  step="0.5"
                  value={throughputSpeed}
                  onChange={(e) => setThroughputSpeed(parseFloat(e.target.value))}
                  style={{ width: '90px', accentColor: '#5C341B', cursor: 'pointer' }}
                />
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#5C341B' }}>{throughputSpeed.toFixed(1)} MT/Hr</span>
              </div>

              {/* Test Defect Ejection Button */}
              <button
                onClick={handleTestDefect}
                style={{
                  backgroundColor: '#5C341B',
                  color: '#ffffff',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 12px rgba(92, 52, 27, 0.25)',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#7A4322')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#5C341B')}
              >
                <i className="fa fa-crosshairs" style={{ color: '#E5A83B' }}></i>
                <span>Test Defect Ejection</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
