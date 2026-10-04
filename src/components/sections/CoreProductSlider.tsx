"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Info, ArrowRight } from "lucide-react";

export interface CoreProductItem {
  productId: string;
  title: string;
  subtitle: string;
  bgColor: string;
  textColor: string;
  image: string;
  link: string;
  countText: string;
  pillBadge: string;
  moisture: string;
  oil: string;
}

export const CORE_PRODUCTS: CoreProductItem[] = [
  {
    productId: "bold-peanuts",
    title: "Bold Peanuts",
    subtitle: "38/42 to 70/80",
    bgColor: "#8C4318",
    textColor: "#ffffff",
    image: "/images/premium-peanuts-bowl.jpg",
    link: "/products#bold-peanuts",
    countText: "Counts: 38/42 • 40/50 • 50/60 • 60/70",
    pillBadge: "Raw Red Kernels",
    moisture: "Max 7.0%",
    oil: "48% - 50%",
  },
  {
    productId: "tj-peanuts",
    title: "TJ Peanuts",
    subtitle: "Java-Bold Hybrid Kernels",
    bgColor: "#9E5824",
    textColor: "#ffffff",
    image: "/images/tj-peanuts.webp",
    link: "/products#tj-peanuts",
    countText: "Counts: 50/60 • 60/70 • 70/80 • 80/90",
    pillBadge: "Semi-Bold Export",
    moisture: "Max 7.0%",
    oil: "49% - 51%",
  },
  {
    productId: "whole-blanched-peanuts",
    title: "Blanched Peanuts",
    subtitle: "Whole Cotyledons",
    bgColor: "#5C341B",
    textColor: "#ffffff",
    image: "/images/blanched-butter-macro.jpg",
    link: "/products#blanched-peanuts",
    countText: "100% Skinless • Ivory White",
    pillBadge: "Industrial Bakery",
    moisture: "5.0% - 6.0%",
    oil: "49% - 51%",
  },
  {
    productId: "split-blanched-peanuts",
    title: "Blanched Splits",
    subtitle: "50/50 Clean Cotyledons",
    bgColor: "#7B4825",
    textColor: "#ffffff",
    image: "/images/split-blanched-peanuts.webp",
    link: "/products#split-blanched-peanuts",
    countText: "Purity 99.90% • Zero Skin",
    pillBadge: "Confectionery Splits",
    moisture: "5.0% - 5.8%",
    oil: "49% - 51%",
  },
  {
    productId: "peanuts-in-shell",
    title: "In-Shell Groundnuts",
    subtitle: "Roasted, Shells & Oil",
    bgColor: "#235D43",
    textColor: "#ffffff",
    image: "/images/peanut-inshell.webp",
    link: "/products?category=In-Shell",
    countText: "Aerated Pods • Cold-Pressed Oil",
    pillBadge: "Ready to Roast",
    moisture: "8.0% Max",
    oil: "Pure Wood-Pressed",
  },
  {
    productId: "cold-pressed-groundnut-oil",
    title: "Groundnut Oil",
    subtitle: "Cold-Pressed Virgin Oil",
    bgColor: "#B26E12",
    textColor: "#ffffff",
    image: "/images/peanut-oil-butter.webp",
    link: "/products#cold-pressed-groundnut-oil",
    countText: "100% Pure • Wood-Pressed Chekku",
    pillBadge: "Virgin Cold-Pressed",
    moisture: "< 0.15%",
    oil: "100% Peanut Oil",
  },
  {
    productId: "pure-peanut-butter",
    title: "Peanut Butter",
    subtitle: "Creamy & Crunchy Paste",
    bgColor: "#8F4519",
    textColor: "#ffffff",
    image: "/images/pure-peanut-butter.png",
    link: "/products#pure-peanut-butter",
    countText: "100% Roasted • Zero Palm Oil",
    pillBadge: "Industrial Paste",
    moisture: "< 1.5%",
    oil: "Pure Kernel Oil",
  },
  {
    productId: "mahua-flower",
    title: "Mahua Flower",
    subtitle: "Sun-Dried Forest Harvest",
    bgColor: "#4E3321",
    textColor: "#ffffff",
    image: "/images/mahua-flower.webp",
    link: "/products#mahua-flower",
    countText: "Forest Handpicked • Solar Dried",
    pillBadge: "Agri Commodity",
    moisture: "< 12% Max",
    oil: "Rich Sugars",
  },
  {
    productId: "wheat-barley",
    title: "Wheat & Barley",
    subtitle: "Central MP Sharbati & Grains",
    bgColor: "#996D28",
    textColor: "#ffffff",
    image: "/images/wheat-barley.png",
    link: "/products#wheat-barley",
    countText: "High Protein • Machine Clean",
    pillBadge: "Milling Grains",
    moisture: "< 10.0%",
    oil: "Luster Clean",
  },
  {
    productId: "mustard-seeds",
    title: "Mustard Seeds",
    subtitle: "Black & Yellow Bold Seeds",
    bgColor: "#594017",
    textColor: "#ffffff",
    image: "/images/mustard-seeds.jpg",
    link: "/products#mustard-seeds",
    countText: "Sortex Cleaned • High Pungency",
    pillBadge: "High-Oil Seeds",
    moisture: "< 8.0%",
    oil: "38% - 42% Oil",
  },
  {
    productId: "groundnut-oil-cake",
    title: "Groundnut DOC",
    subtitle: "48-50% Protein Cattle Feed",
    bgColor: "#362217",
    textColor: "#ffffff",
    image: "/images/groundnut-oil-cake.webp",
    link: "/products#groundnut-oil-cake",
    countText: "Crude Protein: 48-50% Min",
    pillBadge: "Animal Feed Meal",
    moisture: "< 8.0%",
    oil: "Residual 1.0%",
  },
];

interface CoreProductSliderProps {
  onOpenSpecs?: (productId: string) => void;
  onOpenQuote?: (productName: string) => void;
}

export default function CoreProductSlider({
  onOpenSpecs,
  onOpenQuote,
}: CoreProductSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const isHoveredRef = useRef<boolean>(false);
  const isDraggingRef = useRef<boolean>(false);
  const dragStartXRef = useRef<number>(0);
  const dragStartScrollRef = useRef<number>(0);
  const manualPauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // We repeat the products 3 times to allow infinite seamless looping
  const repeatedProducts = [...CORE_PRODUCTS, ...CORE_PRODUCTS, ...CORE_PRODUCTS];

  // Open Handlers
  const handleSpecsClick = (productId: string) => {
    if (onOpenSpecs) {
      onOpenSpecs(productId);
    } else if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-quick-specs", { detail: { productId } }));
    }
  };

  const handleQuoteClick = (productName: string) => {
    if (onOpenQuote) {
      onOpenQuote(productName);
    } else if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-quote-modal", { detail: productName }));
    }
  };

  // Continuous auto-scroll loop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastTime = performance.now();
    const speed = 0.85; // pixels per frame (~50px/sec at 60fps)

    const step = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      if (isPlaying && !isHoveredRef.current && !isDraggingRef.current && container) {
        // Adjust for frame rate variations
        const moveAmount = speed * (delta / 16.666);
        container.scrollLeft += moveAmount;

        // Loop seamlessly when one full original set is scrolled
        const singleSetWidth = container.scrollWidth / 3;
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += singleSetWidth;
        }
      }

      animFrameRef.current = requestAnimationFrame(step);
    };

    animFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying]);

  // Pause briefly after manual button navigation
  const pauseTemporarily = useCallback((ms: number = 3500) => {
    if (manualPauseTimerRef.current) clearTimeout(manualPauseTimerRef.current);
    isHoveredRef.current = true;
    manualPauseTimerRef.current = setTimeout(() => {
      isHoveredRef.current = false;
    }, ms);
  }, []);

  // Slide left / right
  const slide = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;
    pauseTemporarily(4000);

    const cardWidth = 280; // card + gap
    const scrollAmount = direction === "left" ? -cardWidth * 2 : cardWidth * 2;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Drag-to-scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    dragStartXRef.current = e.pageX - container.offsetLeft;
    dragStartScrollRef.current = container.scrollLeft;
    container.style.cursor = "grabbing";
    container.style.userSelect = "none";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const container = containerRef.current;
    if (!container) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - dragStartXRef.current) * 1.5;
    container.scrollLeft = dragStartScrollRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const container = containerRef.current;
    if (container) {
      container.style.cursor = "grab";
      container.style.removeProperty("user-select");
    }
  };

  return (
    <section
      id="core-products"
      className="top-banners"
      style={{
        padding: "48px 0 46px",
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="site-container auto-container" style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 16px" }}>
        {/* Centered Section Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "860px",
            margin: "0 auto 28px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading), "DM Serif Display", serif',
              fontSize: "clamp(1.9rem, 3.4vw, 2.75rem)",
              fontWeight: 800,
              color: "#2C170A",
              margin: "0 0 10px",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              textAlign: "center",
            }}
          >
            Our Core Peanut &amp; Agricultural Product Lines
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#55473E",
              margin: "0 0 20px",
              lineHeight: 1.6,
              textAlign: "center",
              maxWidth: "760px",
            }}
          >
            Calibrated Bold kernels, high-oil Java kernels, skinless blanched varieties, in-shell groundnuts, and diversified agricultural commodities processed under Buhler Sortex standards.
          </p>

          {/* Controls: Auto-Scroll Indicator + Arrow Navigation Buttons Centered */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            {/* Auto-scroll toggle badge */}
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? "Pause auto-scroll" : "Resume auto-scroll"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                backgroundColor: isPlaying ? "#FBF6EE" : "#F3ECE3",
                color: isPlaying ? "#8C4318" : "#6E5B4F",
                border: `1px solid ${isPlaying ? "rgba(140, 67, 24, 0.25)" : "rgba(110, 91, 79, 0.2)"}`,
                padding: "8px 16px",
                borderRadius: "30px",
                fontSize: "12px",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {isPlaying ? (
                <>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#22c55e",
                      boxShadow: "0 0 8px #22c55e",
                      display: "inline-block",
                    }}
                  />
                  <span>Auto-Scrolling</span>
                  <Pause size={13} style={{ marginLeft: "2px" }} />
                </>
              ) : (
                <>
                  <Play size={13} fill="#6E5B4F" />
                  <span>Paused</span>
                </>
              )}
            </button>

            {/* Navigation Arrows */}
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                type="button"
                onClick={() => slide("left")}
                aria-label="Previous products"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  border: "1.5px solid #E5D7C9",
                  color: "#361C0D",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#361C0D";
                  (e.currentTarget as HTMLElement).style.color = "#ffffff";
                  (e.currentTarget as HTMLElement).style.borderColor = "#361C0D";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#ffffff";
                  (e.currentTarget as HTMLElement).style.color = "#361C0D";
                  (e.currentTarget as HTMLElement).style.borderColor = "#E5D7C9";
                }}
              >
                <ChevronLeft size={19} />
              </button>

              <button
                type="button"
                onClick={() => slide("right")}
                aria-label="Next products"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  border: "1.5px solid #E5D7C9",
                  color: "#361C0D",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#361C0D";
                  (e.currentTarget as HTMLElement).style.color = "#ffffff";
                  (e.currentTarget as HTMLElement).style.borderColor = "#361C0D";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#ffffff";
                  (e.currentTarget as HTMLElement).style.color = "#361C0D";
                  (e.currentTarget as HTMLElement).style.borderColor = "#E5D7C9";
                }}
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Container with subtle edge gradients */}
      <div
        style={{
          position: "relative",
          width: "100%",
          padding: "8px 0 16px",
        }}
        onMouseEnter={() => {
          isHoveredRef.current = true;
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
          setIsHovered(false);
          handleMouseUpOrLeave();
        }}
      >
        {/* Left subtle fade */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: "clamp(20px, 4vw, 60px)",
            background: "linear-gradient(to right, #ffffff, rgba(255,255,255,0))",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        {/* Right subtle fade */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: "clamp(20px, 4vw, 60px)",
            background: "linear-gradient(to left, #ffffff, rgba(255,255,255,0))",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        {/* Scrollable Track */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          style={{
            display: "flex",
            gap: "16px",
            overflowX: "scroll",
            scrollBehavior: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            padding: "8px 24px 16px",
            cursor: "grab",
          }}
        >
          {repeatedProducts.map((banner, index) => (
            <div
              key={`${banner.productId}-${index}`}
              className="banner-box flex flex-col justify-between"
              style={{
                flex: "0 0 255px",
                width: "255px",
                minWidth: "255px",
                maxWidth: "255px",
                backgroundColor: banner.bgColor,
                borderRadius: "20px",
                padding: "16px 14px 14px",
                position: "relative",
                overflow: "hidden",
                minHeight: "370px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                transition: "transform 0.28s ease, box-shadow 0.28s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                userSelect: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 36px rgba(0,0,0,0.22)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
              }}
            >
              {/* Top Section: Badge, Image, Titles */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  width: "100%",
                  flexGrow: 1,
                }}
              >
                {/* Category Pill Badge */}
                <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                  <span
                    style={{
                      fontSize: "9.5px",
                      fontWeight: 700,
                      backgroundColor: "rgba(255,255,255,0.22)",
                      color: "#ffffff",
                      padding: "3px 10px",
                      borderRadius: "12px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      border: "1px solid rgba(255,255,255,0.25)",
                    }}
                  >
                    {banner.pillBadge}
                  </span>
                </div>

                {/* Product Image (Compact 80px Circular Frame) */}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "3px solid rgba(255,255,255,0.9)",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.22)",
                    marginBottom: "10px",
                    flexShrink: 0,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <img
                    src={banner.image}
                    alt={banner.title}
                    draggable={false}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* Title & Subtitle */}
                <h3
                  style={{
                    fontFamily: '"Manrope", sans-serif',
                    fontSize: "16.5px",
                    fontWeight: 800,
                    color: banner.textColor,
                    margin: "0 0 2px",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {banner.title}
                </h3>

                <p
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.92)",
                    margin: "0 0 8px",
                    fontWeight: 600,
                    lineHeight: 1.25,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {banner.subtitle}
                </p>

                {/* Compact Specifications Box */}
                <div
                  style={{
                    backgroundColor: "rgba(0,0,0,0.22)",
                    borderRadius: "8px",
                    padding: "6px 8px",
                    width: "100%",
                    fontSize: "10.5px",
                    color: "#ffffff",
                    lineHeight: 1.35,
                    marginBottom: "10px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontWeight: 800, color: "#ffffff", marginBottom: "2px" }}>
                    {banner.countText}
                  </div>
                  <div style={{ fontSize: "9.5px", opacity: 0.9, color: "#f5eee6" }}>
                    Moisture: {banner.moisture} • Oil: {banner.oil}
                  </div>
                </div>
              </div>

              {/* Bottom Action Buttons: Compact Side-by-Side (Specs + RFQ) */}
              <div style={{ marginTop: "auto", display: "flex", gap: "6px", width: "100%" }}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSpecsClick(banner.productId);
                  }}
                  style={{
                    flex: 1,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px",
                    backgroundColor: "#ffffff",
                    color: "#361C0D",
                    height: "32px",
                    padding: "0 6px",
                    borderRadius: "16px",
                    fontSize: "11px",
                    fontWeight: 800,
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#FAF5EC";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#ffffff";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <span>Specs</span>
                  <Info size={11} style={{ color: "#C88A2E" }} />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleQuoteClick(banner.title);
                  }}
                  style={{
                    flex: 1,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px",
                    backgroundColor: "rgba(255, 255, 255, 0.18)",
                    color: "#ffffff",
                    height: "32px",
                    padding: "0 6px",
                    borderRadius: "16px",
                    fontSize: "11px",
                    fontWeight: 700,
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255, 255, 255, 0.18)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <span>Quote</span>
                  <ArrowRight size={10} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Hover hint */}
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <span style={{ fontSize: "11px", color: "#8E7D72", fontWeight: 600 }}>
            {isHovered ? "Paused • Click Specs or Quote, or drag to explore" : "Hover or drag to pause • 12 core export products in catalog"}
          </span>
        </div>
      </div>
    </section>
  );
}
