"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Search,
  Download,
  FileText,
  Phone,
  Mail,
  X,
  Home,
  Building2,
  Package,
  Factory,
  ShieldCheck,
  Leaf,
  PhoneCall,
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 30);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Accessibility: Lock body scroll & handle Escape key when mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleOpenQuote = (productName = "Bold Peanuts") => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-quote-modal", { detail: productName }));
    }
  };

  const handleOpenBrochure = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-brochure-modal"));
    }
  };

  const handleOpenSearch = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-search-modal"));
    }
  };

  const leftNavItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "About Us", href: "/about", icon: Building2 },
    { label: "Products", href: "/products", icon: Package },
  ];

  const rightNavItems = [
    { label: "Process", href: "/nut-journey", icon: Factory },
    { label: "Our Quality", href: "/#pradeep-advantage", icon: ShieldCheck },
    { label: "Sustainability", href: "/about#sustainability", icon: Leaf },
    { label: "Contact Us", href: "/contact", icon: PhoneCall },
  ];

  return (
    <>
      <header
        className="main-header header-style-one"
        style={{
          position: "relative",
          zIndex: 9999,
          backgroundColor: "#ffffff",
          fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        <style>{`
          .main-header img.header-brand-logo-img {
            height: 42px !important;
            max-height: 42px !important;
            width: auto !important;
            object-fit: contain !important;
            display: block !important;
          }
          .main-header.is-sticky img.header-brand-logo-img,
          .fixed-header img.header-brand-logo-img {
            height: 36px !important;
            max-height: 36px !important;
          }
          @media (max-width: 1023px) {
            .main-header img.header-brand-logo-img {
              height: 32px !important;
              max-height: 32px !important;
            }
            .main-header.is-sticky img.header-brand-logo-img,
            .fixed-header img.header-brand-logo-img {
              height: 28px !important;
              max-height: 28px !important;
            }
          }
        `}</style>
        {/* ROW 1: Top Information Bar (Fully Responsive, No Overflow) */}
        <div
          className="header-top"
          style={{
            backgroundColor: "#2C170A",
            color: "#ffffff",
            minHeight: "36px",
            borderTop: "2px solid #C88A2E",
            borderBottom: "1px solid rgba(200, 138, 46, 0.4)",
            display: "flex",
            alignItems: "center",
            padding: "4px 0",
            overflow: "hidden",
          }}
        >
          <div
            className="site-container"
            style={{
              maxWidth: "1320px",
              width: "100%",
              margin: "0 auto",
              padding: "0 12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "8px",
            }}
          >
            {/* Top Left: Email (desktop) & Phone (mobile & desktop) */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+919589790997"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  color: "#ffffff",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontSize: "12px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  padding: "3px 8px",
                  borderRadius: "14px",
                  border: "1px solid rgba(229, 168, 59, 0.35)",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
                aria-label="Call Pradeep Trading Company export desk"
              >
                <i className="fa fa-phone-alt" style={{ color: "#E5A83B", fontSize: "10px" }}></i>
                <span>+91-9589790997</span>
              </a>

              <a
                href="mailto:pradeeptradingcomp@gmail.com"
                className="hidden md:inline-flex items-center gap-1.5 text-xs text-[#e3d7cc] hover:text-white transition-colors"
                style={{ textDecoration: "none", whiteSpace: "nowrap" }}
              >
                <i className="fa fa-envelope" style={{ color: "#E5A83B", fontSize: "11px" }}></i>
                <span>pradeeptradingcomp@gmail.com</span>
              </a>
            </div>

            {/* Top Right: WhatsApp, Brochure & Fast Quote */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919589790997?text=Hello%20Pradeep%20Trading,%20I%20would%20like%20to%20inquire%20about%20peanut%20export%20specifications."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  backgroundColor: "#25D366",
                  color: "#ffffff",
                  height: "26px",
                  padding: "0 8px",
                  borderRadius: "13px",
                  fontSize: "11.5px",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 2px 5px rgba(37, 211, 102, 0.25)",
                }}
                aria-label="Chat on WhatsApp"
              >
                <i className="fab fa-whatsapp" style={{ fontSize: "12px" }}></i>
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              {/* Download Brochure Button (Desktop/Tablet) */}
              <button
                type="button"
                onClick={handleOpenBrochure}
                className="hidden sm:inline-flex items-center gap-1 text-xs"
                style={{
                  backgroundColor: "#5C341B",
                  color: "#ffffff",
                  height: "26px",
                  padding: "0 9px",
                  borderRadius: "13px",
                  fontWeight: 700,
                  border: "1px solid rgba(229, 168, 59, 0.4)",
                  cursor: "pointer",
                  transition: "background 0.2s",
                  whiteSpace: "nowrap",
                }}
                aria-label="Download Export Brochure"
              >
                <Download size={11} style={{ color: "#E5A83B" }} />
                <span>Brochure</span>
              </button>

              {/* Request Quote Button */}
              <button
                type="button"
                onClick={() => handleOpenQuote("Bold Peanuts")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  backgroundColor: "#E5A83B",
                  color: "#2C170A",
                  height: "26px",
                  padding: "0 10px",
                  borderRadius: "13px",
                  fontSize: "11.5px",
                  fontWeight: 800,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 6px rgba(229, 168, 59, 0.3)",
                  transition: "background 0.2s",
                  whiteSpace: "nowrap",
                }}
                aria-label="Request Fast Quote"
              >
                <FileText size={11} style={{ color: "#2C170A" }} />
                <span className="hidden xs:inline">Request Quote</span>
                <span className="xs:hidden">Quote</span>
              </button>
            </div>
          </div>
        </div>

        {/* ROW 2: Main Centered Navigation Bar (Sleek, Compact Layout) */}
        {isSticky && (
          <div
            className="h-[58px] lg:h-[66px] w-full"
            aria-hidden="true"
          />
        )}
        <div
          className={`header-upper ${isSticky ? "fixed-header is-sticky" : ""}`}
          style={{
            position: isSticky ? "fixed" : "relative",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            zIndex: 9999,
            backgroundColor: "#ffffff",
            minHeight: isSticky ? "54px" : "60px",
            borderBottom: "1px solid #efe4d3",
            boxShadow: isSticky ? "0 4px 18px rgba(44, 23, 10, 0.08)" : "0 1px 6px rgba(44, 23, 10, 0.03)",
            transition: "all 0.25s ease-out",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="site-container"
            style={{
              maxWidth: "1340px",
              width: "100%",
              margin: "0 auto",
              padding: "0 12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* DESKTOP LEFT NAVIGATION LINKS */}
            <nav className="hidden lg:flex items-center justify-end" style={{ flex: "1 1 0" }}>
              <ul
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "clamp(8px, 1.1vw, 16px)",
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  whiteSpace: "nowrap",
                }}
              >
                {/* 1. Search First */}
                <li style={{ padding: 0, margin: 0 }}>
                  <button
                    type="button"
                    onClick={handleOpenSearch}
                    aria-label="Search"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      backgroundColor: "#FAF2E6",
                      color: "#5C341B",
                      border: "1px solid #e2d2bd",
                      borderRadius: "18px",
                      padding: "5px 14px",
                      fontSize: "14.5px",
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "#5C341B";
                      (e.currentTarget as HTMLElement).style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "#FAF2E6";
                      (e.currentTarget as HTMLElement).style.color = "#5C341B";
                    }}
                  >
                    <Search size={14.5} style={{ color: "currentColor" }} />
                    <span>Search</span>
                  </button>
                </li>

                {/* 2. Home, 3. About Us, 4. Products */}
                {leftNavItems.map((item) => {
                  const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
                  const Icon = item.icon;
                  return (
                    <li key={item.label} style={{ padding: 0, margin: 0 }}>
                      <Link
                        href={item.href}
                        style={{
                          color: isActive ? "#8C4318" : "#361C0D",
                          textDecoration: "none",
                          fontSize: "15.5px",
                          fontWeight: 700,
                          letterSpacing: "-0.01em",
                          borderBottom: isActive ? "2px solid #C88A2E" : "2px solid transparent",
                          paddingBottom: "3px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          transition: "color 0.2s, border-color 0.2s",
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#8C4318")}
                        onMouseLeave={(e) => {
                          if (!isActive) (e.currentTarget as HTMLElement).style.color = "#361C0D";
                        }}
                      >
                        <Icon size={15} style={{ color: isActive ? "#8C4318" : "#C88A2E" }} />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* BRAND LOGO: Clean horizontal on mobile, centered vertical stack on desktop */}
            <div
              className="shrink-0 flex items-center lg:flex-col lg:justify-center py-1 lg:py-0 lg:px-4"
              style={{
                textAlign: "left",
              }}
            >
              <Link
                href="/"
                className="flex items-center gap-2 lg:gap-2.5 lg:flex-col lg:items-center lg:gap-0.5 no-underline group"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="relative inline-flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shrink-0"
                  style={{
                    height: isSticky ? "36px" : (isMobile ? "32px" : "42px"),
                    maxHeight: isSticky ? "36px" : (isMobile ? "32px" : "42px"),
                  }}
                >
                  <img
                    src="/images/logo/logo.png"
                    alt="Pradeep Trading Company - Trusted Peanut Exporter"
                    className="header-brand-logo-img"
                    style={{
                      height: isSticky ? "36px" : (isMobile ? "32px" : "42px"),
                      maxHeight: isSticky ? "36px" : (isMobile ? "32px" : "42px"),
                      width: "auto",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </div>
                <div className="flex flex-col items-start lg:items-center justify-center leading-none">
                  <span
                    className={`block font-extrabold text-[#361C0D] tracking-wide transition-all duration-200 ${
                      isSticky ? "text-[13px] sm:text-[13.5px] lg:text-[14px]" : "text-[13.5px] sm:text-[14px] lg:text-[14.5px]"
                    }`}
                    style={{
                      fontFamily: 'var(--font-heading), "DM Serif Display", serif',
                      lineHeight: "1.1",
                      letterSpacing: "0.03em",
                    }}
                  >
                    PRADEEP TRADING
                  </span>
                  <span
                    className="inline-flex items-center justify-center gap-1 font-extrabold text-[#2C170A] tracking-wider uppercase whitespace-nowrap shadow-xs mt-0.5"
                    style={{
                      fontSize: "8px",
                      background: "linear-gradient(135deg, #F5D38A 0%, #D49B35 100%)",
                      padding: "1.5px 6.5px",
                      borderRadius: "10px",
                      border: "1px solid #C88A2E",
                      boxShadow: "0 1px 3px rgba(200, 138, 46, 0.25)",
                    }}
                  >
                    ★ TRUSTED PEANUT EXPORTER ★
                  </span>
                </div>
              </Link>
            </div>

            {/* DESKTOP RIGHT NAVIGATION LINKS */}
            <nav className="hidden lg:flex items-center justify-start" style={{ flex: "1 1 0" }}>
              <ul
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "clamp(8px, 1.1vw, 16px)",
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  whiteSpace: "nowrap",
                }}
              >
                {/* 5. Process, 6. Our Quality, 7. Sustainability, 8. Contact Us */}
                {rightNavItems.map((item) => {
                  const isActive = pathname?.startsWith(item.href);
                  const Icon = item.icon;
                  return (
                    <li key={item.label} style={{ padding: 0, margin: 0 }}>
                      <Link
                        href={item.href}
                        style={{
                          color: isActive ? "#8C4318" : "#361C0D",
                          textDecoration: "none",
                          fontSize: "15.5px",
                          fontWeight: 700,
                          letterSpacing: "-0.01em",
                          borderBottom: isActive ? "2px solid #C88A2E" : "2px solid transparent",
                          paddingBottom: "3px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          transition: "color 0.2s, border-color 0.2s",
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#8C4318")}
                        onMouseLeave={(e) => {
                          if (!isActive) (e.currentTarget as HTMLElement).style.color = "#361C0D";
                        }}
                      >
                        <Icon size={15} style={{ color: isActive ? "#8C4318" : "#C88A2E" }} />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* MOBILE / TABLET RIGHT ACTIONS */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                type="button"
                onClick={handleOpenSearch}
                aria-label="Search products and specifications"
                className="transition-all active:scale-95 hover:bg-[#ebdcc8]"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "#FAF2E6",
                  border: "1px solid #ebdcc8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#5C341B",
                  cursor: "pointer",
                }}
              >
                <Search size={16} />
              </button>

              <button
                type="button"
                className="mobile-nav-toggler transition-all active:scale-95"
                onClick={() => setMobileMenuOpen(true)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
                aria-label="Open Mobile Navigation Menu"
                style={{
                  cursor: "pointer",
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(92, 52, 27, 0.08)",
                  border: "1px solid rgba(92, 52, 27, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                  margin: 0,
                  outline: "none",
                }}
              >
                <Menu size={20} style={{ color: "#5C341B" }} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          style={{ position: "fixed", inset: 0, zIndex: 100000, display: "flex" }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(30, 15, 6, 0.75)",
              backdropFilter: "blur(4px)",
            }}
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            style={{
              position: "relative",
              width: "88%",
              maxWidth: "350px",
              backgroundColor: "#2C170A",
              color: "#fff",
              height: "100%",
              padding: "max(env(safe-area-inset-top, 0px), 24px) 20px max(env(safe-area-inset-bottom, 0px), 24px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              zIndex: 1,
              borderRight: "1px solid rgba(200, 138, 46, 0.3)",
              fontFamily: "'Manrope', sans-serif",
              overflowY: "auto",
            }}
          >
            <div>
              {/* Drawer Top */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  paddingBottom: "14px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img src="/images/logo/logo-light.png" alt="Pradeep Trading" style={{ maxHeight: "48px", width: "auto" }} />
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 800, color: "#ffffff" }}>PRADEEP TRADING</div>
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "9px",
                        background: "linear-gradient(135deg, #F5D38A 0%, #D49B35 100%)",
                        color: "#2C170A",
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        padding: "1px 8px",
                        borderRadius: "10px",
                        marginTop: "2px",
                      }}
                    >
                      ★ TRUSTED PEANUT EXPORTER ★
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#fff",
                    cursor: "pointer",
                    padding: "4px",
                  }}
                  aria-label="Close Mobile Menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Search Input */}
              <div style={{ marginBottom: "20px" }}>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleOpenSearch();
                  }}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(200, 138, 46, 0.3)",
                    padding: "10px 14px",
                    borderRadius: "14px",
                    color: "#d4c8bd",
                    fontSize: "14px",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <Search size={16} style={{ color: "#E5A83B" }} />
                  <span>Search products &amp; specs...</span>
                </button>
              </div>

              {/* Links List */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  fontSize: "15.5px",
                  fontWeight: 600,
                }}
              >
                {[
                  { label: "Home", href: "/", icon: Home },
                  { label: "About Us", href: "/about", icon: Building2 },
                  { label: "Products", href: "/products", icon: Package },
                  { label: "Process", href: "/nut-journey", icon: Factory },
                  { label: "Our Quality", href: "/#pradeep-advantage", icon: ShieldCheck },
                  { label: "Sustainability", href: "/about#sustainability", icon: Leaf },
                  { label: "Contact Us", href: "/contact", icon: PhoneCall },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        minHeight: "44px",
                        padding: "8px 12px",
                        borderRadius: "10px",
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#E5A83B";
                        (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(229, 168, 59, 0.12)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#ffffff";
                        (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255, 255, 255, 0.04)";
                      }}
                    >
                      <item.icon size={18} style={{ color: "#E5A83B", flexShrink: 0 }} />
                      <span style={{ fontSize: "15px", fontWeight: 700 }}>{item.label}</span>
                    </Link>
                  </li>
                ))}

                <li>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleOpenBrochure();
                    }}
                    style={{
                      background: "rgba(229, 168, 59, 0.1)",
                      border: "1px solid rgba(229, 168, 59, 0.3)",
                      color: "#E5A83B",
                      fontSize: "14.5px",
                      fontWeight: 700,
                      cursor: "pointer",
                      minHeight: "44px",
                      padding: "8px 12px",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      width: "100%",
                      textAlign: "left",
                      transition: "background 0.2s",
                    }}
                  >
                    <Download size={17} style={{ flexShrink: 0 }} />
                    <span>Download Brochure</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Drawer Bottom Actions */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "18px", marginTop: "24px" }}>
              <p style={{ fontSize: "11px", color: "#a8988b", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Export Desk Phone:
              </p>
              <a
                href="tel:+919589790997"
                style={{
                  color: "#E5A83B",
                  fontSize: "15px",
                  fontWeight: 800,
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                +91-9589790997
              </a>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleOpenQuote("Bold Peanuts");
                  }}
                  style={{
                    width: "100%",
                    backgroundColor: "#E5A83B",
                    color: "#2C170A",
                    border: "none",
                    padding: "11px",
                    borderRadius: "22px",
                    fontWeight: 800,
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                >
                  Request Fast RFQ
                </button>
                <a
                  href="https://wa.me/919589790997?text=Hello%20Pradeep%20Trading,%20I%20would%20like%20to%20inquire%20about%20peanut%20export%20specifications."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "100%",
                    backgroundColor: "#25D366",
                    color: "#ffffff",
                    textAlign: "center",
                    textDecoration: "none",
                    padding: "10px",
                    borderRadius: "22px",
                    fontWeight: 700,
                    fontSize: "13px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                >
                  <i className="fab fa-whatsapp"></i> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
