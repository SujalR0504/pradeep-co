"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import GlobalTradeMapSection from '@/components/GlobalTradeMapSection';
import ExportCargoEstimator from '@/components/ExportCargoEstimator';
import InteractiveCaliberStudio from '@/components/InteractiveCaliberStudio';

export const MakksHomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'All' | 'Raw' | 'Blanched' | 'Value'>('All');
  const [activeSpecTab, setActiveSpecTab] = useState<'bold' | 'java' | 'blanched' | 'inshell'>('bold');
  const [aboutImageTab, setAboutImageTab] = useState<'bold' | 'sortex' | 'harvest' | 'warehouse'>('bold');
  const [galleryOffset, setGalleryOffset] = useState(0);

  // 4 Core Stages / Visual Perspectives for the About Showcase
  const aboutImages = {
    bold: {
      src: "/images/premium-peanuts-bowl.jpg",
      title: "Premium Indian Bold Peanuts",
      subtitle: "Calibrated 38/42 to 70/80 counts/oz with uniform red skin & deep nutty crunch",
      badge: "Double-Sortex Cleaned",
    },
    sortex: {
      src: "/images/buhler-sortex-machine.jpg",
      title: "Buhler Optical CCD Sortex Sorting Line",
      subtitle: "4 MT/Hour electronic multi-camera color sorting removing 100% defective kernels",
      badge: "4 MT/Hour Electronic Capacity",
    },
    harvest: {
      src: "/images/indian-farmer-groundnut.jpg",
      title: "Direct Agronomic Farmgate Harvest",
      subtitle: "Procurement across fertile sandy-loam soils of Shivpuri (M.P.) & Saurashtra belts",
      badge: "5,000+ Grower Network",
    },
    warehouse: {
      src: "/images/peanut-export-logistics.jpg",
      title: "50,000 MT Modern Export Logistics",
      subtitle: "Palletized breathable jute sacks & nitrogen-flushed foil packs ready for Mundra Port",
      badge: "Mundra & JNPT Direct Ports",
    },
  };

  // Hero Peanut Slides with High-Resolution Photography
  const slides = [
    {
      badge: "Double-Sortex Cleaned • Calibrated Counts",
      title: "Bold Peanuts",
      subtitle: "Export Caliber",
      description:
        "Signature large-sized Indian groundnut kernels with characteristic reddish skin and sweet nutty flavor. Rigorously electronic double-sortex cleaned with minimal broken kernels (<0.5%).",
      image: "/images/premium-peanuts-bowl.jpg",
      link: "/products#bold-peanuts",
      specs: ["Counts: 38/42, 40/50, 50/60 / oz", "Moisture: Max 7.0%", "Purity: 99.5% Min"],
    },
    {
      badge: "High-Oil Confectionery Grade • EU Compliant",
      title: "Java Peanuts",
      subtitle: "Uniform Round Kernels",
      description:
        "Distinctively round kernels with smooth pink skin and exceptionally high oil content (50-52%). Highly sought-after globally for premium confectionery, peanut butter, and snack roasting.",
      image: "/images/java-peanuts.webp",
      link: "/products#java-peanuts",
      specs: ["Counts: 40/50, 50/60, 60/70 / oz", "Oil Content: 50% - 52%", "Aflatoxin: < 4 ppb"],
    },
    {
      badge: "100% Skinless • Premium Ivory White",
      title: "Blanched Peanuts",
      subtitle: "Whole & Split Kernels",
      description:
        "Skin-free, ivory-white peanut kernels processed with gentle steam skin-removal and optical CCD sorting. Ready for immediate chocolate panning, snacking, and high-speed processing.",
      image: "/images/blanched-butter-macro.jpg",
      link: "/products#blanched-peanuts",
      specs: ["Counts: 38/42, 40/50, 50/60 / oz", "Skin Removed: 100%", "Moisture: 5.0% - 6.0%"],
    },
    {
      badge: "Natural Harvest Pods • Crisp Golden Snap",
      title: "In-Shell & Roasted",
      subtitle: "Groundnuts & Kernels",
      description:
        "Unbroken sun-cured peanut pods in clean aerated shells, alongside evenly roasted salted kernels offering intense nutty flavor and prolonged maritime shipping shelf life.",
      image: "/images/peanut-inshell.webp",
      link: "/products#peanuts-in-shell",
      specs: ["Pod Counts: 18/22, 22/26 / oz", "Roast: Controlled Hot-Air", "Shelf Life: 12 Months"],
    },
  ];

  // 5 Top Banner Categories (Signature Peanut & Commodity Portfolio)
  const topBanners = [
    {
      title: "Bold Peanuts",
      subtitle: "Singdana 38/42 to 70/80",
      bgColor: "#8C4318",
      textColor: "#ffffff",
      image: "/images/premium-peanuts-bowl.jpg",
      link: "/products#bold-peanuts",
      countText: "Counts: 38/42 • 40/50 • 50/60",
      pillBadge: "Raw Red Kernels",
    },
    {
      title: "Java Peanuts",
      subtitle: "High-Oil Confectionery",
      bgColor: "#C8822A",
      textColor: "#ffffff",
      image: "/images/java-peanuts.webp",
      link: "/products#java-peanuts",
      countText: "Counts: 50/60 • 60/70 • 70/80",
      pillBadge: "Pink Skin Rounds",
    },
    {
      title: "Blanched Peanuts",
      subtitle: "Whole & Split Cotyledons",
      bgColor: "#5C341B",
      textColor: "#ffffff",
      image: "/images/blanched-butter-macro.jpg",
      link: "/products#blanched-peanuts",
      countText: "100% Skinless • Ivory White",
      pillBadge: "Industrial Bakery",
    },
    {
      title: "Value-Added & In-Shell",
      subtitle: "Roasted, Shells & Oil",
      bgColor: "#235D43",
      textColor: "#ffffff",
      image: "/images/peanut-inshell.webp",
      link: "/products?category=Value-Added",
      countText: "Aerated Pods • Cold-Pressed Oil",
      pillBadge: "Ready to Roast",
    },
    {
      title: "Other Products",
      subtitle: "Mahua, Grains, Seeds & Feed",
      bgColor: "#3D2B1F",
      textColor: "#ffffff",
      image: "/images/mahua-flower.webp",
      link: "/products?category=Other+Products",
      countText: "Wheat • Mustard • Oil Cake • DOC",
      pillBadge: "Agri Commodities",
    },
  ];

  // Specifications Data Matrix
  const specDetails = {
    bold: {
      name: "Bold Peanuts (Singdana / Large Kernels)",
      hindi: "बोल्ड सींगदाना",
      image: "/images/premium-peanuts-bowl.jpg",
      counts: "38/42, 40/50, 50/60, 60/70, 70/80 counts/oz",
      moisture: "7.0% Max (Strict automated drying)",
      oil: "48% - 50% Natural Oil Content",
      aflatoxin: "Below 4 ppb (EU, UK, USA Compliance)",
      purity: "99.5% Minimum (Double-Sortex Cleaned)",
      broken: "Below 0.5% Maximum",
      packaging: "25 kg / 50 kg New Jute Sacks, Vacuum Corrugated Cartons, 1 MT Jumbo Totes",
      origin: "Madhya Pradesh (Shivpuri Mandi) & Saurashtra Gujarat",
      season: "Kharif (Oct-Jan) & Summer Harvest (Apr-Jun)",
      uses: "Direct snacking, oil extraction, peanut butter, confectionery coating",
    },
    java: {
      name: "Java Peanuts (Round Pink-Skinned Kernels)",
      hindi: "जावा मूंगफली",
      image: "/images/java-peanuts.webp",
      counts: "45/55, 50/60, 60/70, 70/80, 80/90 counts/oz",
      moisture: "7.0% Max",
      oil: "50% - 52% High Oleic Oil Concentration",
      aflatoxin: "Below 4 ppb Certified",
      purity: "99.5% Minimum",
      broken: "Below 1.0%",
      packaging: "25 kg / 50 kg Jute Bags, PP Bags with Liner, Nitrogen Vacuum Bags",
      origin: "Western & Central Agricultural Peanut Belts, India",
      season: "Year-Round Stocked in Controlled Warehouses",
      uses: "Candy bars, nougats, industrial peanut paste, roasted nut packs",
    },
    blanched: {
      name: "Whole & Split Blanched Peanuts",
      hindi: "होल एवं स्प्लिट ब्लैंक्ड मूंगफली",
      image: "/images/blanched-butter-macro.jpg",
      counts: "38/42, 40/50, 50/60 counts/oz (Whole) & Calibrated Splits",
      moisture: "5.0% - 5.5% Max",
      oil: "49% - 51%",
      aflatoxin: "Negative to < 2 ppb (Ultra-Pure)",
      purity: "99.9% (100% Skin Removed)",
      broken: "Max 3% Splits in Whole Grade",
      packaging: "10 kg / 25 kg Vacuum Nitrogen-Flushed Foil Bags in 5-Ply Master Cartons",
      origin: "State-of-the-Art Steam Blanching Unit, India",
      season: "Year-Round Available",
      uses: "Chocolate bar centers, gourmet salted nuts, smooth peanut butter milling",
    },
    inshell: {
      name: "Groundnuts In-Shell & Roasted Kernels",
      hindi: "साबुत छिलके वाली मूंगफली एवं भुनी हुई",
      image: "/images/peanut-inshell.webp",
      counts: "18/22, 22/26 pods/oz (In-Shell) & 40/50, 50/60 (Roasted)",
      moisture: "8.0% Max (In-Shell) | 2.5% Max (Roasted)",
      oil: "48% - 50%",
      aflatoxin: "Below 4 ppb",
      purity: "100% Unbroken Clean Mesh Pods",
      broken: "Negligible",
      packaging: "20 kg / 30 kg Aerated Jute Sacks, Vacuum Bags for Roasted",
      origin: "Shivpuri Sandy Loam Soil, Madhya Pradesh",
      season: "Peak Harvest October – February",
      uses: "Traditional sand roasting, supermarket pod packs, bird & animal feeds",
    },
  };

  // Product Showcase Gallery
  const peanutProducts = [
    {
      id: "bold-peanuts",
      name: "Bold Peanuts",
      hindi: "बोल्ड सींगदाना",
      category: "Raw",
      counts: "38/42, 40/50, 50/60, 60/70 / oz",
      moisture: "7.0% Max",
      oil: "48% - 50%",
      image: "/images/peanut-bold.webp",
      badge: "Signature Export Caliber",
    },
    {
      id: "java-peanuts",
      name: "Java Peanuts",
      hindi: "जावा मूंगफली",
      category: "Raw",
      counts: "45/55, 50/60, 60/70, 70/80 / oz",
      moisture: "7.0% Max",
      oil: "50% - 52%",
      image: "/images/java-peanuts.webp",
      badge: "High-Oil Confectionery",
    },
    {
      id: "whole-blanched",
      name: "Whole Blanched Peanuts",
      hindi: "होल ब्लैंक्ड मूंगफली",
      category: "Blanched",
      counts: "38/42, 40/50, 50/60 / oz",
      moisture: "5.5% Max",
      oil: "49% - 51%",
      image: "/images/whole-blanched-peanuts.webp",
      badge: "100% Skinless White",
    },
    {
      id: "split-blanched",
      name: "Split Blanched Peanuts",
      hindi: "स्प्लिट ब्लैंक्ड मूंगफली",
      category: "Blanched",
      counts: "Industrial Splits",
      moisture: "5.5% Max",
      oil: "49% - 50%",
      image: "/images/split-blanched-peanuts.webp",
      badge: "Butter & Bar Centers",
    },
    {
      id: "inshell-peanuts",
      name: "Groundnuts In-Shell",
      hindi: "साबुत छिलके वाली मूंगफली",
      category: "Value",
      counts: "18/22, 22/26 pods / oz",
      moisture: "8.0% Max",
      oil: "48% - 50%",
      image: "/images/peanut-inshell.webp",
      badge: "Natural Pods",
    },
    {
      id: "roasted-peanuts",
      name: "Roasted Salted Peanuts",
      hindi: "भुनी हुई नमकीन मूंगफली",
      category: "Value",
      counts: "40/50, 50/60 / oz",
      moisture: "2.5% Max",
      oil: "48% - 50%",
      image: "/images/peanut-roasted.webp",
      badge: "Crisp Aromatic Crunch",
    },
    {
      id: "peanut-oil-butter",
      name: "Cold-Pressed Oil & Peanut Butter",
      hindi: "कोल्ड प्रेस्ड मूंगफली तेल",
      category: "Value",
      counts: "100% Pure Natural",
      moisture: "Zero Additives",
      oil: "Pure Groundnut Extract",
      image: "/images/blanched-butter-macro.jpg",
      badge: "Value-Added Line",
    },
  ];

  const filteredProducts =
    activeCategory === 'All'
      ? peanutProducts
      : peanutProducts.filter((p) => p.category === activeCategory);

  // Certifications
  const certificates = [
    { name: "APEDA Approved Exporter", src: "/images/certificate/1.png" },
    { name: "FSSAI Food Safety", src: "/images/certificate/2.png" },
    { name: "ISO 22000 Certified", src: "/images/certificate/3.png" },
    { name: "HACCP Certified", src: "/images/certificate/4.png" },
    { name: "Halal Certified", src: "/images/certificate/5.png" },
    { name: "Kosher Certified", src: "/images/certificate/6.png" },
    { name: "Spices Board India", src: "/images/certificate/7.png" },
  ];

  // Hero Product Image Ref & First Mount Tracking
  const heroImgRef = useRef<HTMLImageElement>(null);
  const isFirstMount = useRef(true);

  // Auto-advance hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Section 7 & 14: GSAP animations for Hero Product Image
  useEffect(() => {
    if (!heroImgRef.current) return;

    if (isFirstMount.current) {
      isFirstMount.current = false;
      // Section 7: Initial hero load entrance: opacity: 0, scale: 0.94, x: 30 -> 1, 1, 0 (0.9-1.1s, power3.out)
      gsap.fromTo(
        heroImgRef.current,
        { opacity: 0, scale: 0.94, x: 30 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1.0,
          ease: 'power3.out',
          onComplete: () => {
            // After entering: very subtle floating movement (Y: 5-8px, duration 4-6s, infinite)
            if (heroImgRef.current) {
              gsap.to(heroImgRef.current, {
                y: 6,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
              });
            }
          },
        }
      );
    } else {
      // Section 14: Product image slider animation: scale: 1.04, opacity: 0 -> scale: 1, opacity: 1 (0.6-0.8s)
      gsap.fromTo(
        heroImgRef.current,
        { opacity: 0, scale: 1.04 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: 'power2.out',
        }
      );
    }
  }, [currentSlide]);

  // Scroll listener for sticky header (shrinks main navbar when scrolled past top bar)
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const nextGallery = () => {
    setGalleryOffset((prev) => (prev + 1) % Math.max(1, filteredProducts.length - 2));
  };
  const prevGallery = () => {
    setGalleryOffset((prev) =>
      prev === 0 ? Math.max(0, filteredProducts.length - 3) : prev - 1
    );
  };

  const handleOpenQuote = (productName: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-quote-modal', { detail: productName }));
    }
  };

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: '"Manrope", sans-serif' }}>


      {/* ============================================================ */}
      {/* 2. REVOLUTION-STYLE HERO SLIDER WITH FLOATING PEANUT ANIMATIONS */}
      {/* ============================================================ */}
      <section
        className="main-slider"
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: 'clamp(580px, calc(100vh - 124px), 670px)',
          backgroundColor: '#faf6ee',
          backgroundImage: 'radial-gradient(#e5d8c3 0.8px, transparent 0.8px)',
          backgroundSize: '24px 24px',
          display: 'flex',
          alignItems: 'center',
          padding: '36px 0',
        }}
      >
        {/* Background Image Layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/makks-assets/bg-1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            opacity: 0.35,
            zIndex: 0,
          }}
        />

        {/* Floating Parallax Peanut Cutouts (ANIMATIONS - Kept subtle at 0.8-0.85 opacity, no extra added) */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
          
          {/* 1. Large Peanut Pod Floating Top-Left */}
          <div
            className="animate-pod-sway"
            style={{
              position: 'absolute',
              left: '4%',
              top: '12%',
              maxWidth: '120px',
              opacity: 0.82,
              filter: 'drop-shadow(0 20px 25px rgba(80, 45, 18, 0.18))',
            }}
          >
            <img src="/images/single-pod-cutout.png" alt="Floating Peanut Pod" style={{ width: '100%', transform: 'rotate(-10deg)' }} />
          </div>

          {/* 2. Red Kernel Floating Right-Middle */}
          <div
            className="animate-peanut-float"
            style={{
              position: 'absolute',
              right: '5%',
              top: '26%',
              maxWidth: '80px',
              opacity: 0.82,
              filter: 'drop-shadow(0 18px 24px rgba(100, 35, 15, 0.22))',
            }}
          >
            <img src="/images/red-kernel-cutout.png" alt="Floating Singdana Kernel" style={{ width: '100%', transform: 'rotate(20deg)' }} />
          </div>

          {/* 3. Split Blanched Kernel Floating Bottom-Center */}
          <div
            className="animate-peanut-float-alt"
            style={{
              position: 'absolute',
              left: '42%',
              bottom: '6%',
              maxWidth: '70px',
              opacity: 0.8,
              filter: 'drop-shadow(0 15px 20px rgba(90, 50, 20, 0.16))',
            }}
          >
            <img src="/images/split-cotyledon-cutout.png" alt="Floating Peanut Split" style={{ width: '100%', transform: 'rotate(8deg)' }} />
          </div>

          {/* 4. Natural Single Seed Floating Top-Right */}
          <div
            className="animate-peanut-float"
            style={{
              position: 'absolute',
              right: '24%',
              top: '8%',
              maxWidth: '60px',
              opacity: 0.78,
              filter: 'drop-shadow(0 12px 18px rgba(80, 40, 10, 0.18))',
            }}
          >
            <img src="/images/single-kernel-cutout.png" alt="Natural Single Peanut" style={{ width: '100%', transform: 'rotate(-12deg)' }} />
          </div>
        </div>

        {/* Slide Content */}
        <div className="hero-slider-container site-container" style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center' }}>
          <div className="home-hero-grid">
            
            {/* Left Column: Text & CTA */}
            <div className="hero-content-col">
              <div key={`slide-text-${currentSlide}`} style={{ animation: 'fadeInDown 0.7s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                
                {/* Badge */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(200, 138, 46, 0.12)', color: '#8C4E26', padding: '6px 16px', borderRadius: '20px', fontSize: '12.5px', fontWeight: 600, marginBottom: '16px', border: '1px solid rgba(200, 138, 46, 0.35)', letterSpacing: '0.04em' }}>
                  <i className="fa fa-award" style={{ color: '#C88A2E' }}></i> {slides[currentSlide].badge}
                </div>

                {/* Main Heading */}
                <h1
                  style={{
                    fontFamily: 'var(--font-heading), "DM Serif Display", serif',
                    fontSize: 'clamp(2.2rem, 3.6vw, 3.5rem)',
                    fontWeight: 800,
                    color: '#2C170A',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    marginBottom: '14px',
                  }}
                >
                  {slides[currentSlide].title} <br />
                  <span style={{ color: '#C88A2E' }}>{slides[currentSlide].subtitle}</span>
                </h1>

                {/* Description */}
                <p style={{ fontSize: '15.5px', lineHeight: 1.65, color: '#55473E', maxWidth: '520px', marginBottom: '22px' }}>
                  {slides[currentSlide].description}
                </p>

                {/* Specs Pill List */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
                  {slides[currentSlide].specs.map((spec, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e8dec8',
                        padding: '5px 14px',
                        borderRadius: '16px',
                        fontSize: '12.5px',
                        fontWeight: 600,
                        color: '#361C0D',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <i className="fa fa-check-circle" style={{ color: '#235D43' }}></i> {spec}
                    </span>
                  ))}
                </div>

                {/* Action Buttons (Standardized Height: 48px, Radius: 24px) */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                  <Link
                    href={slides[currentSlide].link}
                    className="theme-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      backgroundColor: '#5C341B',
                      color: '#ffffff',
                      height: '48px',
                      padding: '0 26px',
                      borderRadius: '24px',
                      fontWeight: 600,
                      fontSize: '13.5px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      boxShadow: '0 6px 20px rgba(92, 52, 27, 0.25)',
                      textDecoration: 'none',
                      transition: 'all 0.25s ease',
                      boxSizing: 'border-box',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#7A4322')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#5C341B')}
                  >
                    <span>View Specifications</span>
                    <i className="fa fa-arrow-right" style={{ color: '#E5A83B', fontSize: '12px' }}></i>
                  </Link>

                  <button
                    onClick={() => handleOpenQuote(slides[currentSlide].title)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      backgroundColor: '#ffffff',
                      color: '#5C341B',
                      border: '2px solid #5C341B',
                      height: '48px',
                      padding: '0 24px',
                      borderRadius: '24px',
                      fontWeight: 600,
                      fontSize: '13.5px',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      boxSizing: 'border-box',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = '#5C341B';
                      (e.currentTarget as HTMLElement).style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = '#ffffff';
                      (e.currentTarget as HTMLElement).style.color = '#5C341B';
                    }}
                  >
                    <span>Get Container Quote</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Product Image with Drop Shadow (Enlarged & Prominent: 520–620px) */}
            <div
              style={{
                textAlign: 'center',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="hero-img-col"
            >
              <div
                style={{
                  display: 'inline-block',
                  position: 'relative',
                  width: '100%',
                  maxWidth: '620px',
                }}
              >
                {/* Glowing Aura Ring */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '-24px',
                    borderRadius: '36px',
                    background: 'radial-gradient(circle, rgba(200, 138, 46, 0.28) 0%, rgba(255,255,255,0) 70%)',
                    zIndex: 0,
                    pointerEvents: 'none',
                  }}
                />

                <div
                  className="hero-featured-product-card"
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    borderRadius: '26px',
                    overflow: 'hidden',
                    boxShadow: '0 24px 55px -10px rgba(92, 52, 27, 0.32)',
                    border: '6px solid #ffffff',
                    width: 'min(52vw, 620px)',
                    maxWidth: '620px',
                    height: 'clamp(390px, 31vw, 490px)',
                    backgroundColor: '#ffffff',
                  }}
                >
                  <img
                    ref={heroImgRef}
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="hero-featured-product-img"
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Floating Guarantee Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '18px',
                    left: '-14px',
                    backgroundColor: '#ffffff',
                    padding: '12px 20px',
                    borderRadius: '18px',
                    boxShadow: '0 14px 32px rgba(92, 52, 27, 0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    zIndex: 2,
                    border: '1px solid #efe8dc',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: '#FAF2E6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#C88A2E',
                      fontSize: '20px',
                      flexShrink: 0,
                    }}
                  >
                    <i className="fa fa-shield-alt"></i>
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#361C0D' }}>4 MT/Hour Double Sortex</div>
                    <div style={{ fontSize: '11px', color: '#8A7A6E', fontWeight: 600 }}>Optical CCD Color Sorter</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Slide Navigation: Centered Controller [ < ] [ • • • • ] [ > ] */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.94)',
            backdropFilter: 'blur(8px)',
            padding: '6px 16px',
            borderRadius: '30px',
            boxShadow: '0 4px 18px rgba(92, 52, 27, 0.12)',
            border: '1px solid rgba(92, 52, 27, 0.15)',
          }}
        >
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#FAF5EC',
              border: '1px solid rgba(92, 52, 27, 0.12)',
              color: '#361C0D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '12px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#5C341B';
              (e.currentTarget as HTMLElement).style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#FAF5EC';
              (e.currentTarget as HTMLElement).style.color = '#361C0D';
            }}
          >
            <i className="fa fa-chevron-left"></i>
          </button>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                style={{
                  width: currentSlide === idx ? '28px' : '10px',
                  height: '9px',
                  borderRadius: '5px',
                  backgroundColor: currentSlide === idx ? '#C88A2E' : 'rgba(92, 52, 27, 0.25)',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#FAF5EC',
              border: '1px solid rgba(92, 52, 27, 0.12)',
              color: '#361C0D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '12px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#5C341B';
              (e.currentTarget as HTMLElement).style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#FAF5EC';
              (e.currentTarget as HTMLElement).style.color = '#361C0D';
            }}
          >
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. TOP BANNERS (4 Colored Category Boxes - Makks Signature) */}
      {/* ============================================================ */}
      <section className="top-banners" style={{ padding: '80px 0 40px', backgroundColor: '#ffffff' }}>
        <div className="site-container auto-container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'left', marginBottom: '36px' }}>
            <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#C88A2E', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '6px' }}>
              Export Caliber Lineup
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading), "DM Serif Display", serif', fontSize: 'clamp(2rem, 3.2vw, 2.65rem)', fontWeight: 800, color: '#2C170A', margin: '0 0 10px', letterSpacing: '-0.02em', lineHeight: 1.12 }}>
              Our Core Peanut &amp; Agricultural Product Lines
            </h2>
            <p style={{ fontSize: '15.5px', color: '#55473E', maxWidth: '720px', margin: 0, lineHeight: 1.6 }}>
              Calibrated Bold kernels, high-oil Java kernels, skinless blanched varieties, in-shell groundnuts, and diversified agricultural export commodities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 items-stretch">
            {topBanners.map((banner, index) => (
              <div
                key={index}
                className="banner-box flex flex-col justify-between"
                style={{
                  backgroundColor: banner.bgColor,
                  borderRadius: '24px',
                  padding: '24px 20px',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '400px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 18px 40px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
              >
                {/* Top Section: Badge & Image */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
                  
                  {/* Category Pill Badge */}
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        backgroundColor: 'rgba(255,255,255,0.22)',
                        color: '#ffffff',
                        padding: '4px 12px',
                        borderRadius: '16px',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        border: '1px solid rgba(255,255,255,0.25)',
                      }}
                    >
                      {banner.pillBadge}
                    </span>
                  </div>

                  {/* Clean Product Image (Centered Circular Frame with Border) */}
                  <div
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '4px solid rgba(255,255,255,0.85)',
                      boxShadow: '0 8px 22px rgba(0,0,0,0.25)',
                      marginBottom: '18px',
                      flexShrink: 0,
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    }}
                  >
                    <img
                      src={banner.image}
                      alt={banner.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    style={{
                      fontFamily: '"Manrope", sans-serif',
                      fontSize: '19px',
                      fontWeight: 800,
                      color: banner.textColor,
                      margin: '0 0 6px',
                      lineHeight: 1.25,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {banner.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '12.5px',
                      color: 'rgba(255,255,255,0.92)',
                      margin: '0 0 8px',
                      fontWeight: 600,
                      lineHeight: 1.4,
                    }}
                  >
                    {banner.subtitle}
                  </p>

                  <div
                    style={{
                      fontSize: '11.5px',
                      color: 'rgba(255,255,255,0.82)',
                      lineHeight: 1.4,
                      backgroundColor: 'rgba(0,0,0,0.12)',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      width: '100%',
                    }}
                  >
                    {banner.countText}
                  </div>
                </div>

                {/* Bottom CTA Button: Always at bottom */}
                <div style={{ marginTop: '22px', display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <Link
                    href={banner.link}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      backgroundColor: '#ffffff',
                      color: '#5C341B',
                      height: '38px',
                      padding: '0 20px',
                      borderRadius: '20px',
                      fontSize: '12.5px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      transition: 'all 0.2s',
                      width: '100%',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = '#FAF5EC';
                      (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = '#ffffff';
                      (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                    }}
                  >
                    <span>Explore Variety</span>
                    <i className="fa fa-arrow-right" style={{ fontSize: '11px', color: '#C88A2E' }}></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. REDESIGNED EDITORIAL ABOUT SECTION WITH REAL PEANUT IMAGES */}
      {/* ============================================================ */}
      <section className="about-section" style={{ padding: '96px 0 80px', backgroundColor: '#FAF5EC' }}>
        <div className="site-container auto-container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Image Column with Real Peanut Processing Warehouse & Lab */}
            <div className="lg:col-span-6 about-img-col">
              
              {/* Interactive Showcase Selector Badges */}
              <div
                className="about-badges-row"
                style={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '18px',
                }}
              >
                {(
                  [
                    { id: 'bold', label: 'Bold Singdana' },
                    { id: 'sortex', label: 'Buhler Sortex' },
                    { id: 'harvest', label: 'Farm Harvest' },
                    { id: 'warehouse', label: 'Export Warehouse' },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setAboutImageTab(tab.id)}
                    style={{
                      backgroundColor: aboutImageTab === tab.id ? '#5C341B' : '#ffffff',
                      color: aboutImageTab === tab.id ? '#ffffff' : '#361C0D',
                      border: aboutImageTab === tab.id ? '2px solid #5C341B' : '1px solid #ddd6c8',
                      height: '38px',
                      padding: '0 16px',
                      borderRadius: '19px',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      transition: 'all 0.2s',
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div style={{ position: 'relative' }}>
                
                {/* Primary Image Display */}
                <div
                  style={{
                    borderRadius: '22px',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px rgba(92, 52, 27, 0.25)',
                    border: '5px solid #ffffff',
                    position: 'relative',
                  }}
                >
                  <img
                    src={aboutImages[aboutImageTab].src}
                    alt={aboutImages[aboutImageTab].title}
                    style={{ width: '100%', height: '520px', objectFit: 'cover', display: 'block', transition: 'all 0.4s ease' }}
                  />

                  {/* Gradient Overlay for Text Legibility */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(40, 20, 9, 0.88) 0%, rgba(40, 20, 9, 0.25) 40%, transparent 70%)',
                    }}
                  />

                  {/* Top Pill Tag */}
                  <div style={{ position: 'absolute', top: '18px', right: '18px', zIndex: 2 }}>
                    <span style={{ backgroundColor: '#C88A2E', color: '#ffffff', padding: '5px 14px', borderRadius: '15px', fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
                      {aboutImages[aboutImageTab].badge}
                    </span>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div style={{ position: 'absolute', bottom: '20px', left: '25px', right: '25px', color: '#fff' }}>
                    <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#E5A83B', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {aboutImages[aboutImageTab].title}
                    </div>
                    <div style={{ fontSize: '15.5px', fontWeight: 700, marginTop: '2px' }}>
                      {aboutImages[aboutImageTab].subtitle}
                    </div>
                  </div>
                </div>

                {/* Inset Secondary Image Card: Quality Control Laboratory (Enlarged to 230px) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    width: '210px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.22)',
                    border: '4px solid #ffffff',
                    backgroundColor: '#ffffff',
                    zIndex: 3,
                  }}
                >
                  <img
                    src="/images/quality-lab.webp"
                    alt="HPLC Aflatoxin Testing & Sieving Lab"
                    style={{ width: '100%', height: '120px', objectFit: 'cover' }}
                  />
                  <div style={{ padding: '8px 10px', textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#361C0D' }}>In-House Quality Lab</div>
                    <div style={{ fontSize: '9.5px', color: '#235D43', fontWeight: 700 }}>Aflatoxin &lt; 4 ppb HPLC Tested</div>
                  </div>
                </div>

                {/* Floating Heritage Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    backgroundColor: 'rgba(54, 28, 13, 0.95)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    padding: '12px 18px',
                    borderRadius: '16px',
                    border: '2px solid rgba(200, 138, 46, 0.6)',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.25)',
                    zIndex: 3,
                    textAlign: 'center',
                  }}
                >
                  <span style={{ fontSize: '24px', fontWeight: 700, color: '#E5A83B', display: 'block', lineHeight: 1 }}>
                    65+ Years
                  </span>
                  <span style={{ fontSize: '10.5px', fontWeight: 600, color: '#e0d6cb', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Peanut Export Heritage
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content Column: Comprehensive Peanut Sourcing Details */}
            <div className="lg:col-span-6 about-text-col">
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#C88A2E', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '8px', textAlign: 'left' }}>
                  DIRECT FARM SOURCING &amp; BUHLER SORTEX PROCESSING
                </span>
                
                <h2
                  style={{
                    fontFamily: 'var(--font-heading), "DM Serif Display", serif',
                    fontSize: 'clamp(2rem, 3.2vw, 2.7rem)',
                    fontWeight: 800,
                    color: '#2C170A',
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                    marginBottom: '18px',
                    textAlign: 'left',
                  }}
                >
                  The Purity of Indian Groundnuts: Premium Peanut Processing &amp; Global Export.
                </h2>

                <p
                  className="about-justified-text"
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: '#55473E',
                    marginBottom: '20px',
                    maxWidth: '680px',
                  }}
                >
                  Rooted in the agricultural heartland of <strong>Shivpuri, Madhya Pradesh</strong>, <strong>Pradeep Trading Company</strong> has set the benchmark for Indian groundnut processing for over six decades. From mineral-dense red sandy-loam soils to our state-of-the-art multi-stage electronic sorting lines, our operations are engineered for international standard excellence.
                </p>

                <p
                  className="about-justified-text"
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: '#55473E',
                    marginBottom: '26px',
                    maxWidth: '680px',
                  }}
                >
                  Every lot undergoes rigorous destoning, size-grading, and high-precision Buhler optical CCD sortex inspection. Our strict protocols guarantee broken kernel fractions below 0.5%, aflatoxin levels compliant with stringent European Union and international food-safety norms, and year-round delivery assurance.
                </p>

                {/* 6 Technical Quality Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa fa-check-circle" style={{ color: '#C88A2E', fontSize: '18px' }}></i>
                    <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#361C0D' }}>Optical CCD Electronic Sorting</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa fa-check-circle" style={{ color: '#C88A2E', fontSize: '18px' }}></i>
                    <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#361C0D' }}>Aflatoxin Tested &amp; EU Compliant</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa fa-check-circle" style={{ color: '#C88A2E', fontSize: '18px' }}></i>
                    <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#361C0D' }}>Purity Above 99.5% Minimum</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa fa-check-circle" style={{ color: '#C88A2E', fontSize: '18px' }}></i>
                    <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#361C0D' }}>Moisture Regulated (&lt;7.0% Max)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa fa-check-circle" style={{ color: '#C88A2E', fontSize: '18px' }}></i>
                    <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#361C0D' }}>Rich Natural Oil (48% - 52%)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa fa-check-circle" style={{ color: '#C88A2E', fontSize: '18px' }}></i>
                    <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#361C0D' }}>Direct Port Links: Mundra &amp; JNPT</span>
                  </div>
                </div>

                {/* Action Buttons (Standard 48px Height, Radius 24px) */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => handleOpenQuote('Bold Peanuts')}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#5C341B',
                      color: '#ffffff',
                      border: 'none',
                      height: '48px',
                      padding: '0 26px',
                      borderRadius: '24px',
                      fontWeight: 600,
                      fontSize: '13.5px',
                      cursor: 'pointer',
                      boxShadow: '0 6px 20px rgba(92, 52, 27, 0.25)',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#7A4322')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#5C341B')}
                  >
                    Request Lot Specifications
                  </button>
                  <a
                    href="https://wa.me/919589790997?text=Hello%20Pradeep%20Trading,%20I%20want%20to%20inquire%20about%20your%20export-grade%20peanuts."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      backgroundColor: '#25D366',
                      color: '#ffffff',
                      height: '48px',
                      padding: '0 24px',
                      borderRadius: '24px',
                      fontWeight: 600,
                      fontSize: '13.5px',
                      textDecoration: 'none',
                      boxShadow: '0 6px 18px rgba(37, 211, 102, 0.25)',
                    }}
                  >
                    <i className="fab fa-whatsapp" style={{ fontSize: '18px' }}></i>
                    <span>Chat on WhatsApp</span>
                  </a>
                  <Link
                    href="/nut-journey"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      height: '48px',
                      gap: '6px',
                      color: '#5C341B',
                      fontWeight: 600,
                      fontSize: '13.5px',
                      textDecoration: 'none',
                    }}
                  >
                    <span>View Processing Flow</span>
                    <i className="fa fa-arrow-right" style={{ color: '#C88A2E' }}></i>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. INTERACTIVE PEANUT CALIBER & SENSORY STUDIO */}
      {/* ============================================================ */}
      <InteractiveCaliberStudio />

      {/* ============================================================ */}
      {/* 6. METRICS & STATS BAR */}
      {/* ============================================================ */}
      <section style={{ backgroundColor: '#361C0D', color: '#ffffff', padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="site-container auto-container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div style={{ fontSize: '44px', fontWeight: 600, color: '#E5A83B', fontFamily: 'var(--font-heading), "DM Serif Display", serif', lineHeight: 1 }}>65+</div>
              <div style={{ fontSize: '13.5px', color: '#e0d6cb', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>Years Heritage</div>
              <div style={{ fontSize: '12px', color: '#a8988b', marginTop: '4px' }}>Generations of Peanut Expertise</div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div style={{ fontSize: '44px', fontWeight: 600, color: '#D99B35', fontFamily: 'var(--font-heading), "DM Serif Display", serif', lineHeight: 1 }}>50,000+</div>
              <div style={{ fontSize: '13.5px', color: '#e0d6cb', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>Metric Tons</div>
              <div style={{ fontSize: '12px', color: '#a8988b', marginTop: '4px' }}>Annual Peanut Volume Sourced</div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div style={{ fontSize: '44px', fontWeight: 600, color: '#E5A83B', fontFamily: 'var(--font-heading), "DM Serif Display", serif', lineHeight: 1 }}>35+</div>
              <div style={{ fontSize: '13.5px', color: '#e0d6cb', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>Export Countries</div>
              <div style={{ fontSize: '12px', color: '#a8988b', marginTop: '4px' }}>Middle East, Europe, SE Asia, Africa</div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div style={{ fontSize: '44px', fontWeight: 600, color: '#D99B35', fontFamily: 'var(--font-heading), "DM Serif Display", serif', lineHeight: 1 }}>4 MT/Hr</div>
              <div style={{ fontSize: '13.5px', color: '#e0d6cb', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>Processing Line</div>
              <div style={{ fontSize: '12px', color: '#a8988b', marginTop: '4px' }}>Double-Sortex Electronic Capacity</div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. PRADEEP ADVANTAGE SECTION (Clean Peanut Brand Theme) */}
      {/* ============================================================ */}
      <section
        id="pradeep-advantage"
        className="pradeep-advantage-clean"
        style={{
          padding: '96px 0 85px',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF6EE 55%, #F5EDE0 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="site-container auto-container" style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          
          <div style={{ textAlign: 'left', marginBottom: '48px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(200, 138, 46, 0.12)', border: '1px solid rgba(200, 138, 46, 0.3)', padding: '5px 16px', borderRadius: '30px', marginBottom: '12px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#C88A2E' }}></span>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#8C5318', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Why Global Buyers Partner With Us
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading), "DM Serif Display", serif', fontSize: 'clamp(2rem, 3.2vw, 2.65rem)', fontWeight: 800, color: '#2C170A', margin: '4px 0 10px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              The Pradeep Advantage
            </h2>
            <p style={{ fontSize: '15.5px', color: '#6A564A', maxWidth: '640px', margin: 0, lineHeight: 1.6 }}>
              Direct procurement across Madhya Pradesh &amp; Gujarat growing belts, Buhler optical color-sorting technology, and 50,000 MT in-house aerated storage.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
            
            {/* Advantage 1: Location Advantage (Real Farm Harvest Landscape) */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                padding: '36px 24px 28px',
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(44, 23, 10, 0.06)',
                border: '1px solid #EFE4D2',
                transition: 'all 0.35s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-8px)';
                el.style.boxShadow = '0 18px 36px rgba(92, 52, 27, 0.14)';
                el.style.borderColor = '#C88A2E';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 8px 24px rgba(44, 23, 10, 0.06)';
                el.style.borderColor = '#EFE4D2';
              }}
            >
              <div style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 20px', border: '5px solid #C88A2E', boxShadow: '0 10px 25px rgba(200, 138, 46, 0.3)' }}>
                <img src="/images/harvest-field-tractor.jpg" alt="Shivpuri MP Peanut Fields" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#C88A2E', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
                Direct Farmgate Sourcing
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading), "DM Serif Display", serif', fontSize: '22px', fontWeight: 700, color: '#2C170A', marginBottom: '10px' }}>
                Location Advantage
              </h3>
              <p style={{ fontSize: '13.5px', color: '#5A483D', lineHeight: 1.65, margin: 0 }}>
                Direct procurement in the heart of Shivpuri MP &amp; Saurashtra Gujarat agricultural hubs for the freshest groundnut harvests with lowest turnaround time.
              </p>
            </div>

            {/* Advantage 2: Contract Farming (Authentic Indian Farmer Image) */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                padding: '36px 24px 28px',
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(44, 23, 10, 0.06)',
                border: '1px solid #EFE4D2',
                transition: 'all 0.35s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-8px)';
                el.style.boxShadow = '0 18px 36px rgba(92, 52, 27, 0.14)';
                el.style.borderColor = '#8C4318';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 8px 24px rgba(44, 23, 10, 0.06)';
                el.style.borderColor = '#EFE4D2';
              }}
            >
              <div style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 20px', border: '5px solid #8C4318', boxShadow: '0 10px 25px rgba(140, 67, 24, 0.3)' }}>
                <img src="/images/indian-farmer-groundnut.jpg" alt="Indian Groundnut Farmer Harvest" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#8C4318', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
                5,000+ Grower Network
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading), "DM Serif Display", serif', fontSize: '22px', fontWeight: 700, color: '#2C170A', marginBottom: '10px' }}>
                Contract Farming
              </h3>
              <p style={{ fontSize: '13.5px', color: '#5A483D', lineHeight: 1.65, margin: 0 }}>
                Direct partnerships with certified growers ensuring non-GMO seed purity, agronomic harvest monitoring, and sustainable soil crop rotations.
              </p>
            </div>

            {/* Advantage 3: Superior Hygiene & Sortex (Actual Buhler Sortex Machine) */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                padding: '36px 24px 28px',
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(44, 23, 10, 0.06)',
                border: '1px solid #EFE4D2',
                transition: 'all 0.35s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-8px)';
                el.style.boxShadow = '0 18px 36px rgba(92, 52, 27, 0.14)';
                el.style.borderColor = '#5C341B';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 8px 24px rgba(44, 23, 10, 0.06)';
                el.style.borderColor = '#EFE4D2';
              }}
            >
              <div style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 20px', border: '5px solid #5C341B', boxShadow: '0 10px 25px rgba(92, 52, 27, 0.3)' }}>
                <img src="/images/buhler-sortex-machine.jpg" alt="Buhler Optical CCD Sortex Sorter" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#5C341B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
                99.95% Purity Standard
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading), "DM Serif Display", serif', fontSize: '22px', fontWeight: 700, color: '#2C170A', marginBottom: '10px' }}>
                Double-Sortex Sorting
              </h3>
              <p style={{ fontSize: '13.5px', color: '#5A483D', lineHeight: 1.65, margin: '0 0 14px 0' }}>
                High-precision multi-spectral optical sorters remove discolored, broken, or defective nuts for consistent export-grade compliance.
              </p>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  color: '#5C341B',
                  backgroundColor: 'rgba(92, 52, 27, 0.08)',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: '1px solid rgba(92, 52, 27, 0.2)',
                }}
              >
                <span>Buhler Multi-CCD Color Sorter</span>
              </div>
            </div>

            {/* Advantage 4: Storage Facility (Peanut Export Logistics Warehouse) */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                padding: '36px 24px 28px',
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(44, 23, 10, 0.06)',
                border: '1px solid #EFE4D2',
                transition: 'all 0.35s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-8px)';
                el.style.boxShadow = '0 18px 36px rgba(92, 52, 27, 0.14)';
                el.style.borderColor = '#235D43';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 8px 24px rgba(44, 23, 10, 0.06)';
                el.style.borderColor = '#EFE4D2';
              }}
            >
              <div style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 20px', border: '5px solid #235D43', boxShadow: '0 10px 25px rgba(35, 93, 67, 0.3)' }}>
                <img src="/images/peanut-export-logistics.jpg" alt="50,000 MT Export Logistics Warehouse" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#235D43', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
                50,000 MT Infrastructure
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading), "DM Serif Display", serif', fontSize: '22px', fontWeight: 700, color: '#2C170A', marginBottom: '10px' }}>
                Modern In-House Storage
              </h3>
              <p style={{ fontSize: '13.5px', color: '#5A483D', lineHeight: 1.65, margin: 0 }}>
                Multi-thousand MT aerated and moisture-controlled warehouses protect oil stability, preserve crunch, and enable rapid Mundra Port dispatch.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7B. GLOBAL MARITIME CORRIDORS & PORT LOGISTICS (Interactive Chart) */}
      {/* ============================================================ */}
      <GlobalTradeMapSection />

      {/* ============================================================ */}
      {/* 8. CERTIFICATIONS & COMPLIANCE INFINITE MARQUEE */}
      {/* ============================================================ */}
      <section style={{ padding: '45px 0', backgroundColor: '#ffffff', borderTop: '1px solid #f0eee8', borderBottom: '1px solid #f0eee8', overflow: 'hidden' }}>
        <div className="site-container auto-container" style={{ maxWidth: '1280px', margin: '0 auto', marginBottom: '20px', textAlign: 'center' }}>
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#7a827e', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            International Compliance &amp; Export Certifications
          </span>
        </div>

        <div style={{ width: '100%', overflow: 'hidden' }}>
          <div className="animate-marquee" style={{ display: 'flex', gap: '60px', alignItems: 'center' }}>
            {certificates.concat(certificates).map((cert, idx) => (
              <div key={idx} style={{ flexShrink: 0, padding: '0 15px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img
                  src={cert.src}
                  alt={cert.name}
                  style={{
                    maxHeight: '62px',
                    maxWidth: '120px',
                    objectFit: 'contain',
                    filter: 'grayscale(20%)',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.filter = 'grayscale(0%)';
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.filter = 'grayscale(20%)';
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                  }}
                />
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#361C0D' }}>{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. PRODUCT SHOWCASE CAROUSEL (Peanut Varieties & Specs) */}
      {/* ============================================================ */}
      <section className="gallery-section" style={{ padding: '96px 0', backgroundColor: '#FAF5EC', position: 'relative' }}>
        <div className="site-container auto-container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          {/* Section Header & Navigation */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '36px', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#C88A2E', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '6px' }}>
                Direct Sourced Varieties
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading), "DM Serif Display", serif', fontSize: 'clamp(2rem, 3.2vw, 2.65rem)', fontWeight: 800, color: '#2C170A', margin: 0, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                Featured Peanut Showcase
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {(['All', 'Raw', 'Blanched', 'Value'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setGalleryOffset(0);
                  }}
                  style={{
                    backgroundColor: activeCategory === cat ? '#5C341B' : '#ffffff',
                    color: activeCategory === cat ? '#ffffff' : '#361C0D',
                    border: activeCategory === cat ? '2px solid #5C341B' : '1px solid #ddd6c8',
                    height: '38px',
                    padding: '0 18px',
                    borderRadius: '19px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {cat === 'All' ? 'All Peanuts' : cat === 'Raw' ? 'Raw Kernels' : cat === 'Blanched' ? 'Blanched' : 'Roasted & In-Shell'}
                </button>
              ))}

              {/* Prev / Next Buttons */}
              <div style={{ display: 'flex', gap: '8px', marginLeft: '12px' }}>
                <button
                  onClick={prevGallery}
                  aria-label="Previous products"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    border: '1px solid #ddd6c8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#361C0D',
                  }}
                >
                  <i className="fa fa-chevron-left"></i>
                </button>
                <button
                  onClick={nextGallery}
                  aria-label="Next products"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: '#5C341B',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#ffffff',
                  }}
                >
                  <i className="fa fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid / Carousel Viewport */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {filteredProducts.slice(galleryOffset, galleryOffset + 4).map((product) => (
              <div
                key={product.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '18px',
                  padding: '24px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                  border: '1px solid #efe8da',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 32px rgba(92, 52, 27, 0.15)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)';
                }}
              >
                <div>
                  {/* Top Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span style={{ backgroundColor: '#FAF2E6', color: '#8C4318', fontSize: '11.5px', fontWeight: 600, padding: '4px 10px', borderRadius: '12px', border: '1px solid #f0e2cf' }}>
                      {product.badge}
                    </span>
                    <span style={{ fontSize: '12px', color: '#706155', fontWeight: 600 }}>
                      {product.hindi}
                    </span>
                  </div>

                  {/* Image Container (Enlarged to 225px) */}
                  <div style={{ height: '225px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px', overflow: 'hidden', borderRadius: '14px', backgroundColor: '#FAF6EE' }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '14px', transition: 'transform 0.35s ease' }}
                    />
                  </div>

                  {/* Title */}
                  <h3 style={{ fontFamily: 'var(--font-heading), "DM Serif Display", serif', fontSize: '20px', fontWeight: 700, color: '#2C170A', marginBottom: '8px', lineHeight: 1.25 }}>
                    {product.name}
                  </h3>

                  {/* Specifications */}
                  <div style={{ backgroundColor: '#FAF6EE', padding: '12px 14px', borderRadius: '10px', marginBottom: '16px', fontSize: '12.5px', border: '1px solid #eee5d8' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ color: '#706155' }}>Counts / Caliber:</span>
                      <strong style={{ color: '#361C0D' }}>{product.counts}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ color: '#706155' }}>Moisture Spec:</span>
                      <strong style={{ color: '#235D43' }}>{product.moisture}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#706155' }}>Oil Content:</span>
                      <strong style={{ color: '#C88A2E' }}>{product.oil}</strong>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                  <button
                    onClick={() => handleOpenQuote(product.name)}
                    style={{
                      flex: 1,
                      backgroundColor: '#5C341B',
                      color: '#ffffff',
                      border: 'none',
                      height: '42px',
                      padding: '0 16px',
                      borderRadius: '21px',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#7A4322')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#5C341B')}
                  >
                    Request RFQ
                  </button>
                  <Link
                    href={`/products#${product.id}`}
                    style={{
                      height: '42px',
                      padding: '0 18px',
                      borderRadius: '21px',
                      border: '1px solid #5C341B',
                      color: '#5C341B',
                      fontSize: '13px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = '#5C341B';
                      (e.currentTarget as HTMLElement).style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                      (e.currentTarget as HTMLElement).style.color = '#5C341B';
                    }}
                  >
                    Specs
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View All Products CTA */}
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link
              href="/products"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                backgroundColor: '#ffffff',
                border: '2px solid #5C341B',
                color: '#5C341B',
                height: '48px',
                padding: '0 28px',
                borderRadius: '24px',
                fontSize: '13.5px',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(92, 52, 27, 0.1)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#5C341B';
                (e.currentTarget as HTMLElement).style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#ffffff';
                (e.currentTarget as HTMLElement).style.color = '#5C341B';
              }}
            >
              <span>Explore Complete 2026 Peanut Export Catalog</span>
              <i className="fa fa-arrow-right" style={{ fontSize: '12px' }}></i>
            </Link>
          </div>

        </div>
      </section>





      {/* ============================================================ */}
      {/* 12. SCROLL-TO-TOP BUTTON (Global WhatsApp is rendered in layout.tsx) */}
      {/* ============================================================ */}
      {isSticky && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          style={{
            position: 'fixed',
            bottom: '25px',
            left: '25px',
            zIndex: 9999,
            backgroundColor: '#5C341B',
            color: '#ffffff',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            cursor: 'pointer',
            boxShadow: '0 6px 18px rgba(92, 52, 27, 0.3)',
          }}
        >
          <i className="fa fa-angle-up"></i>
        </button>
      )}

      {/* Embedded CSS for responsive behaviors */}
      <style>{`
        /* Ensure no rogue template pseudo-element overlaps sections */
        .categories-section:before,
        .categories-section:after,
        .pradeep-advantage-clean:before,
        .pradeep-advantage-clean:after {
          display: none !important;
          content: none !important;
          height: 0 !important;
          width: 0 !important;
          background: none !important;
        }

        /* Sleek & Compact Header Overrides (Forces Slim Height) */
        .main-header {
          position: relative;
          z-index: 999;
        }
        .main-header .logo {
          padding: 0 !important;
          width: auto !important;
          min-width: 0 !important;
        }
        .main-header .header-upper {
          padding: 5px 0 !important;
        }
        .main-header .main-box .nav-outer {
          width: auto !important;
          align-items: center !important;
        }
        .main-header .navigation > li,
        .main-menu .navigation > li {
          padding: 0 !important;
          margin-right: 0 !important;
        }

        @media (min-width: 992px) {
          .hero-featured-product-card {
            width: min(52vw, 620px) !important;
            max-width: 620px !important;
            height: clamp(390px, 31vw, 490px) !important;
          }
          .hero-featured-product-img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
          }
        }

        @media (min-width: 768px) and (max-width: 991px) {
          .hero-slider-container > div {
            grid-template-columns: 1fr 1fr !important;
            gap: 28px !important;
          }
          .hero-featured-product-card {
            width: 100% !important;
            max-width: 480px !important;
            height: 380px !important;
            margin: 0 auto !important;
          }
        }

        @media (max-width: 767px) {
          .hero-slider-container > div {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .hero-content-col {
            text-align: center !important;
          }
          .hero-featured-product-card {
            width: 92% !important;
            max-width: 380px !important;
            height: 340px !important;
            margin: 0 auto !important;
          }
          .header-upper nav {
            display: none !important;
          }
          .mobile-nav-toggler {
            display: block !important;
          }
        }

        .about-badges-row {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }
        @media (max-width: 640px) {
          .about-badges-row {
            flex-wrap: wrap;
            gap: 8px;
          }
        }
      `}</style>

    </div>
  );
};

export default MakksHomePage;
