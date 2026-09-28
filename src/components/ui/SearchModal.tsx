"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X, ArrowRight, CheckCircle, ShieldCheck, Anchor, Award } from "lucide-react";

interface SearchItem {
  id: string;
  title: string;
  category: "Products & Grades" | "Specifications" | "Certifications" | "Logistics & Ports";
  snippet: string;
  link: string;
  badge: string;
  actionText: string;
}

const SEARCH_DATABASE: SearchItem[] = [
  {
    id: "bold-peanuts",
    title: "Bold Peanuts (Singdana / Large Kernels)",
    category: "Products & Grades",
    snippet: "Counts 38/42, 40/50, 50/60, 60/70, 70/80 per oz. Double-sortex cleaned, moisture max 7.0%, purity 99.5% min.",
    link: "/#core-products",
    badge: "Raw Red Kernels",
    actionText: "View Specifications",
  },
  {
    id: "java-peanuts",
    title: "Java Peanuts (High-Oil Round Kernels)",
    category: "Products & Grades",
    snippet: "Counts 40/50, 50/60, 60/70, 70/80 per oz. High oil content (50-52%), smooth pink skin, ideal for confectionery and peanut butter.",
    link: "/#core-products",
    badge: "Confectionery Grade",
    actionText: "View Specifications",
  },
  {
    id: "blanched-peanuts",
    title: "Blanched Peanuts (Whole & Split Cotyledons)",
    category: "Products & Grades",
    snippet: "100% skinless ivory white kernels. Counts 38/42, 40/50, 50/60. Moisture 5.0%-6.0%, broken < 0.5%. Perfect for bakery & snacking.",
    link: "/#core-products",
    badge: "Industrial Bakery",
    actionText: "View Specifications",
  },
  {
    id: "inshell-peanuts",
    title: "In-Shell Groundnuts & Roasted Kernels",
    category: "Products & Grades",
    snippet: "Sun-cured natural peanut pods in aerated unbroken shells (18/22, 22/26 counts) alongside controlled hot-air roasted kernels.",
    link: "/#core-products",
    badge: "Ready to Roast",
    actionText: "View Specifications",
  },
  {
    id: "cold-pressed-oil",
    title: "Cold-Pressed Virgin Groundnut Oil",
    category: "Products & Grades",
    snippet: "100% chemical-free virgin wood-pressed peanut oil with high smoke point and authentic aroma.",
    link: "/products?category=Value-Added",
    badge: "Pure Edible Oil",
    actionText: "View Product",
  },
  {
    id: "mahua-flower",
    title: "Mahua Flowers (Organic Sun-Dried)",
    category: "Products & Grades",
    snippet: "Wild harvested natural Madhuca longifolia blossoms from Central Indian forests. Rich in natural sugars.",
    link: "/products?category=Other+Products",
    badge: "Wild Harvest",
    actionText: "View Product",
  },
  {
    id: "groundnut-doc",
    title: "Groundnut De-Oiled Cake (DOC / Meal)",
    category: "Products & Grades",
    snippet: "High-protein (48-50% protein) solvent extracted groundnut meal for cattle, poultry and livestock feed.",
    link: "/products?category=Other+Products",
    badge: "Agri Commodity",
    actionText: "View Product",
  },
  {
    id: "mustard-wheat",
    title: "Sharbati Wheat & Bold Mustard Seeds",
    category: "Products & Grades",
    snippet: "Golden Sharbati export-grade wheat (99% purity) and high-oil bold mustard seeds from Madhya Pradesh mandis.",
    link: "/products?category=Other+Products",
    badge: "Agri Commodity",
    actionText: "View Product",
  },
  {
    id: "buhler-sortex",
    title: "Buhler Optical CCD Sortex Purity (4 MT/Hr)",
    category: "Specifications",
    snippet: "Multi-camera electronic color sorting removing 100% defective kernels, stones, and glass for 99.95% purity.",
    link: "/nut-journey",
    badge: "99.95% Purity",
    actionText: "Explore Sorting Lab",
  },
  {
    id: "aflatoxin-control",
    title: "Aflatoxin Control & Lab Compliance (<4 ppb)",
    category: "Specifications",
    snippet: "Strict HPLC testing guaranteeing B1 < 2 ppb and Total Aflatoxin < 4 ppb compliant with EU, UK, and US FDA requirements.",
    link: "/about#quality",
    badge: "EU Compliant",
    actionText: "View Lab Standards",
  },
  {
    id: "moisture-spec",
    title: "Moisture Control Specification (< 7.0% Max)",
    category: "Specifications",
    snippet: "Automated climate-controlled drying preventing mold growth and preserving crisp kernel crunch during maritime transit.",
    link: "/#core-products",
    badge: "Moisture Control",
    actionText: "View Specs",
  },
  {
    id: "certifications-apeda",
    title: "APEDA, FSSAI & ISO 22000 Export Certifications",
    category: "Certifications",
    snippet: "Registered export unit with APEDA, FSSAI Central License, ISO 22000:2018 food safety, Halal & Kosher compliant.",
    link: "/about#certifications",
    badge: "Accredited Exporter",
    actionText: "View Certificates",
  },
  {
    id: "mundra-port",
    title: "Mundra & Nhava Sheva (JNPT) Direct Export Logistics",
    category: "Logistics & Ports",
    snippet: "Fast container dispatch via Mundra Port and JNPT to Middle East (5-7 days), SE Asia (10-14 days), and Europe (18-22 days).",
    link: "/#global-reach",
    badge: "Global Logistics",
    actionText: "View Shipping Corridors",
  },
  {
    id: "container-loadability",
    title: "FCL Container Loadability & Jute Packaging",
    category: "Logistics & Ports",
    snippet: "20ft FCL: 19 MT in 50kg jute/PP bags. 40ft FCL: 27 MT. Nitrogen-flushed vacuum packs and palletized loading available.",
    link: "/#cargo-estimator",
    badge: "FCL Calculator",
    actionText: "Open Cargo Estimator",
  },
];

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("open-search-modal", handleOpen);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-search-modal", handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
  }, [isOpen]);

  const filteredItems = query.trim()
    ? SEARCH_DATABASE.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.snippet.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          item.badge.toLowerCase().includes(query.toLowerCase())
      )
    : SEARCH_DATABASE.slice(0, 8);

  const categories = Array.from(new Set(filteredItems.map((item) => item.category)));

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100002,
        backgroundColor: "rgba(20, 10, 4, 0.72)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "60px 16px 20px",
        fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
      onClick={() => setIsOpen(false)}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "680px",
          backgroundColor: "#ffffff",
          borderRadius: "24px",
          boxShadow: "0 25px 60px -15px rgba(0,0,0,0.35)",
          overflow: "hidden",
          border: "1px solid rgba(200, 138, 46, 0.3)",
          animation: "fadeInDown 0.25s ease-out",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "18px 24px",
            borderBottom: "1px solid #eee5d8",
            backgroundColor: "#FAF6EE",
          }}
        >
          <Search size={22} style={{ color: "#C88A2E", flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, counts (38/42, 40/50), Sortex specs, ports, certifications..."
            style={{
              width: "100%",
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              fontSize: "15.5px",
              fontWeight: 600,
              color: "#361C0D",
            }}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              style={{
                background: "none",
                border: "none",
                color: "#8C7B70",
                cursor: "pointer",
                padding: "4px",
              }}
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
          <button
            onClick={() => setIsOpen(false)}
            style={{
              backgroundColor: "rgba(92, 52, 27, 0.1)",
              border: "none",
              borderRadius: "8px",
              padding: "4px 8px",
              fontSize: "11px",
              fontWeight: 700,
              color: "#5C341B",
              cursor: "pointer",
            }}
          >
            ESC
          </button>
        </div>

        {/* Quick Chips */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            padding: "12px 24px",
            borderBottom: "1px solid #f0eee8",
            overflowX: "auto",
            backgroundColor: "#ffffff",
          }}
        >
          <span style={{ fontSize: "11.5px", color: "#8C7B70", fontWeight: 700, alignSelf: "center", whiteSpace: "nowrap" }}>
            Quick Filter:
          </span>
          {["Bold 38/42", "Java 50/60", "Blanched", "In-Shell", "Sortex", "Aflatoxin", "Mundra Port"].map((chip) => (
            <button
              key={chip}
              onClick={() => setQuery(chip)}
              style={{
                fontSize: "11.5px",
                fontWeight: 600,
                color: query === chip ? "#ffffff" : "#5C341B",
                backgroundColor: query === chip ? "#5C341B" : "#FAF2E6",
                border: "1px solid #eedecb",
                borderRadius: "14px",
                padding: "3px 10px",
                whiteSpace: "nowrap",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div
          style={{
            maxHeight: "420px",
            overflowY: "auto",
            padding: "16px 24px 24px",
          }}
        >
          {filteredItems.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <div style={{ fontSize: "16px", fontWeight: 700, color: "#361C0D", marginBottom: "6px" }}>
                No export specifications found
              </div>
              <p style={{ fontSize: "13px", color: "#7a6e65", margin: 0 }}>
                Try searching for &quot;Bold&quot;, &quot;Java&quot;, &quot;Sortex&quot;, &quot;Moisture&quot;, or &quot;Mundra&quot;.
              </p>
            </div>
          ) : (
            categories.map((cat) => (
              <div key={cat} style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#C88A2E",
                    marginBottom: "10px",
                  }}
                >
                  {cat}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {filteredItems
                    .filter((item) => item.category === cat)
                    .map((item) => (
                      <Link
                        key={item.id}
                        href={item.link}
                        onClick={() => setIsOpen(false)}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          padding: "12px 14px",
                          borderRadius: "12px",
                          backgroundColor: "#FAF6EE",
                          border: "1px solid #eee5d8",
                          textDecoration: "none",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#FAF0DD";
                          e.currentTarget.style.borderColor = "#C88A2E";
                          e.currentTarget.style.transform = "translateX(4px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#FAF6EE";
                          e.currentTarget.style.borderColor = "#eee5d8";
                          e.currentTarget.style.transform = "translateX(0)";
                        }}
                      >
                        <div style={{ flex: 1, paddingRight: "12px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                            <span style={{ fontSize: "14px", fontWeight: 700, color: "#2C170A" }}>
                              {item.title}
                            </span>
                            <span
                              style={{
                                fontSize: "10px",
                                fontWeight: 700,
                                backgroundColor: "#5C341B",
                                color: "#ffffff",
                                padding: "2px 7px",
                                borderRadius: "8px",
                              }}
                            >
                              {item.badge}
                            </span>
                          </div>
                          <p style={{ fontSize: "12px", color: "#6a5c53", margin: 0, lineHeight: 1.45 }}>
                            {item.snippet}
                          </p>
                        </div>
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            fontSize: "11.5px",
                            fontWeight: 700,
                            color: "#8C4E26",
                            whiteSpace: "nowrap",
                            marginTop: "2px",
                          }}
                        >
                          <span>{item.actionText}</span>
                          <ArrowRight size={13} />
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div
          style={{
            padding: "12px 24px",
            backgroundColor: "#FAF2E6",
            borderTop: "1px solid #eedecb",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "11.5px",
            color: "#6b594b",
          }}
        >
          <span>Need custom grading or container load calculation?</span>
          <button
            onClick={() => {
              setIsOpen(false);
              window.dispatchEvent(new CustomEvent("open-quote-modal", { detail: "Custom Export Spec" }));
            }}
            style={{
              backgroundColor: "#5C341B",
              color: "#ffffff",
              border: "none",
              borderRadius: "14px",
              padding: "4px 12px",
              fontSize: "11px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Direct RFQ &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
