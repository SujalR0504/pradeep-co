"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, Download, FileText, Phone, Mail, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Quality", href: "/#pradeep-advantage" },
    { label: "Process", href: "/nut-journey" },
  ];

  const rightNavItems = [
    { label: "Sustainability", href: "/about#sustainability" },
    { label: "Download Brochure", href: "#", isBrochure: true },
    { label: "Contact", href: "/contact" },
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
        {/* ROW 1: Top Information Bar (40px) */}
        <div
          className="header-top"
          style={{
            backgroundColor: "#2C170A",
            color: "#ffffff",
            minHeight: "38px",
            borderBottom: "1px solid rgba(200, 138, 46, 0.25)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="site-container"
            style={{
              maxWidth: "1320px",
              width: "100%",
              margin: "0 auto",
              padding: "0 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            {/* Top Left: Email & Address */}
            <div className="top-left flex items-center">
              <ul
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  fontSize: "11.5px",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                <li className="hidden sm:flex" style={{ alignItems: "center", gap: "6px" }}>
                  <i className="fa fa-envelope" style={{ color: "#E5A83B", fontSize: "11px" }}></i>
                  <a
                    href="mailto:pradeeptradingcomp@gmail.com"
                    style={{ color: "#e3d7cc", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#e3d7cc")}
                  >
                    pradeeptradingcomp@gmail.com
                  </a>
                </li>
                <li className="hidden xl:flex" style={{ alignItems: "center", gap: "6px" }}>
                  <i className="fa fa-map-marker-alt" style={{ color: "#E5A83B", fontSize: "11px" }}></i>
                  <span style={{ color: "#e3d7cc" }}>
                    Bhonti, Shivpuri, Madhya Pradesh - 473551, India
                  </span>
                </li>
              </ul>
            </div>

            {/* Top Mid: Phone Number */}
            <div className="top-mid flex items-center justify-center">
              <a
                href="tel:+919589790997"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#ffffff",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontSize: "11.5px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  padding: "3px 12px",
                  borderRadius: "14px",
                  border: "1px solid rgba(229, 168, 59, 0.35)",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(229, 168, 59, 0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                }}
              >
                <i className="fa fa-phone-alt" style={{ color: "#E5A83B", fontSize: "10.5px" }}></i>
                <span>+91-9589790997</span>
              </a>
            </div>

            {/* Top Right: Priorities: WhatsApp, Brochure & Quote */}
            <div className="top-right" style={{ display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" }}>
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919589790997?text=Hello%20Pradeep%20Trading,%20I%20would%20like%20to%20inquire%20about%20peanut%20export%20specifications."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  backgroundColor: "#25D366",
                  color: "#ffffff",
                  height: "26px",
                  padding: "0 10px",
                  borderRadius: "13px",
                  fontSize: "11px",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 2px 6px rgba(37, 211, 102, 0.25)",
                }}
              >
                <i className="fab fa-whatsapp" style={{ fontSize: "12px" }}></i>
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              {/* Download Brochure Button */}
              <button
                type="button"
                onClick={handleOpenBrochure}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  backgroundColor: "#5C341B",
                  color: "#ffffff",
                  height: "26px",
                  padding: "0 11px",
                  borderRadius: "13px",
                  fontSize: "11px",
                  fontWeight: 700,
                  border: "1px solid rgba(229, 168, 59, 0.4)",
                  cursor: "pointer",
                  transition: "background 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#7A4322")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#5C341B")}
                aria-label="Download Export Brochure"
              >
                <Download size={11} style={{ color: "#E5A83B" }} />
                <span className="hidden sm:inline">Brochure</span>
              </button>

              {/* Request Quote Button */}
              <button
                type="button"
                onClick={() => handleOpenQuote("Bold Peanuts")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  backgroundColor: "#E5A83B",
                  color: "#2C170A",
                  height: "26px",
                  padding: "0 12px",
                  borderRadius: "13px",
                  fontSize: "11px",
                  fontWeight: 800,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 6px rgba(229, 168, 59, 0.3)",
                  transition: "background 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#f2be60")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#E5A83B")}
                aria-label="Request Fast Quote"
              >
                <FileText size={11} style={{ color: "#2C170A" }} />
                <span>Request Quote</span>
              </button>
            </div>
          </div>
        </div>

        {/* ROW 2: Main Centered Navigation Bar (Premium Peanut Reference Layout) */}
        <div
          className={`header-upper ${isSticky ? "fixed-header is-sticky" : ""}`}
          style={{
            position: "sticky",
            top: 0,
            zIndex: 9999,
            backgroundColor: "#ffffff",
            minHeight: isSticky ? "76px" : "96px",
            borderBottom: "1px solid #efe4d3",
            boxShadow: isSticky ? "0 4px 22px rgba(44, 23, 10, 0.09)" : "0 2px 8px rgba(44, 23, 10, 0.03)",
            transition: "all 0.3s ease-out",
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
              padding: "0 16px",
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
                  gap: "28px",
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  whiteSpace: "nowrap",
                }}
              >
                {leftNavItems.map((item) => {
                  const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
                  return (
                    <li key={item.label} style={{ padding: 0, margin: 0 }}>
                      <Link
                        href={item.href}
                        style={{
                          color: isActive ? "#8C4318" : "#361C0D",
                          textDecoration: "none",
                          fontSize: "14.5px",
                          fontWeight: 700,
                          letterSpacing: "-0.01em",
                          borderBottom: isActive ? "2px solid #C88A2E" : "2px solid transparent",
                          paddingBottom: "4px",
                          transition: "color 0.2s, border-color 0.2s",
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#8C4318")}
                        onMouseLeave={(e) => {
                          if (!isActive) (e.currentTarget as HTMLElement).style.color = "#361C0D";
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* CENTER BRAND LOGO (Enlarged & Centered, Premium Reflection) */}
            <div
              style={{
                padding: "0 24px",
                flexShrink: 0,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Link
                href="/"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textDecoration: "none",
                  gap: "2px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <img
                    src="/images/logo/logo.png"
                    alt="Pradeep Trading Company - Trusted Peanut Exporter"
                    style={{
                      height: isSticky ? "60px" : "74px",
                      width: "auto",
                      objectFit: "contain",
                      transition: "height 0.3s ease-out",
                    }}
                  />
                </div>
                <div style={{ textAlign: "center", marginTop: "1px" }}>
                  <span
                    style={{
                      display: "block",
                      fontSize: isSticky ? "15px" : "17px",
                      fontWeight: 800,
                      color: "#361C0D",
                      letterSpacing: "0.06em",
                      fontFamily: 'var(--font-heading), "DM Serif Display", serif',
                      lineHeight: 1.1,
                    }}
                  >
                    PRADEEP TRADING
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "9.5px",
                      fontWeight: 800,
                      color: "#C88A2E",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    Trusted Peanut Exporter
                  </span>
                </div>
              </Link>
            </div>

            {/* DESKTOP RIGHT NAVIGATION LINKS + SEARCH */}
            <nav className="hidden lg:flex items-center justify-start" style={{ flex: "1 1 0" }}>
              <ul
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  whiteSpace: "nowrap",
                }}
              >
                {rightNavItems.map((item) => {
                  if (item.isBrochure) {
                    return (
                      <li key={item.label}>
                        <button
                          type="button"
                          onClick={handleOpenBrochure}
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: "0 0 4px",
                            margin: 0,
                            color: "#361C0D",
                            fontSize: "14.5px",
                            fontWeight: 700,
                            letterSpacing: "-0.01em",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "5px",
                            transition: "color 0.2s",
                          }}
                          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#8C4318")}
                          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#361C0D")}
                        >
                          <Download size={14} style={{ color: "#C88A2E" }} />
                          <span>{item.label}</span>
                        </button>
                      </li>
                    );
                  }
                  const isActive = pathname?.startsWith(item.href);
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        style={{
                          color: isActive ? "#8C4318" : "#361C0D",
                          textDecoration: "none",
                          fontSize: "14.5px",
                          fontWeight: 700,
                          letterSpacing: "-0.01em",
                          borderBottom: isActive ? "2px solid #C88A2E" : "2px solid transparent",
                          paddingBottom: "4px",
                          transition: "color 0.2s, border-color 0.2s",
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#8C4318")}
                        onMouseLeave={(e) => {
                          if (!isActive) (e.currentTarget as HTMLElement).style.color = "#361C0D";
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}

                {/* Search Option Button */}
                <li>
                  <button
                    type="button"
                    onClick={handleOpenSearch}
                    aria-label="Open Search Option"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      backgroundColor: "#FAF2E6",
                      color: "#5C341B",
                      border: "1px solid #e2d2bd",
                      borderRadius: "20px",
                      padding: "6px 14px",
                      fontSize: "13px",
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
                    <Search size={14} />
                    <span>Search</span>
                  </button>
                </li>
              </ul>
            </nav>

            {/* MOBILE / TABLET RIGHT ACTIONS */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={handleOpenSearch}
                aria-label="Search"
                style={{
                  width: "40px",
                  height: "40px",
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
                <Search size={18} />
              </button>

              <button
                type="button"
                className="mobile-nav-toggler"
                onClick={() => setMobileMenuOpen(true)}
                style={{
                  cursor: "pointer",
                  width: "40px",
                  height: "40px",
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
                aria-label="Open Mobile Menu"
              >
                <Menu size={22} style={{ color: "#5C341B" }} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100000, display: "flex" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(30, 15, 6, 0.75)",
              backdropFilter: "blur(4px)",
            }}
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            style={{
              position: "relative",
              width: "88%",
              maxWidth: "350px",
              backgroundColor: "#2C170A",
              color: "#fff",
              height: "100%",
              padding: "26px 22px",
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
                  marginBottom: "24px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  paddingBottom: "16px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img src="/images/logo/logo-light.png" alt="Pradeep Trading" style={{ maxHeight: "48px" }} />
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 800, color: "#ffffff" }}>PRADEEP TRADING</div>
                    <div style={{ fontSize: "9px", color: "#C88A2E", fontWeight: 700, letterSpacing: "0.1em" }}>
                      TRUSTED PEANUT EXPORTER
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
                    fontSize: "13px",
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
                  gap: "16px",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Our Quality", href: "/#pradeep-advantage" },
                  { label: "Process", href: "/nut-journey" },
                  { label: "Sustainability", href: "/about#sustainability" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        display: "block",
                        padding: "4px 0",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#E5A83B")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
                    >
                      {item.label}
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
                      background: "none",
                      border: "none",
                      color: "#E5A83B",
                      fontSize: "15px",
                      fontWeight: 700,
                      cursor: "pointer",
                      padding: "4px 0",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Download size={16} />
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
