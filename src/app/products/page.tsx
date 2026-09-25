"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, Package, CheckCircle2, MessageCircle, FileText, ArrowRight } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES, Product } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";
import ContactCtaSection from "@/components/sections/ContactCtaSection";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All Products";
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && (PRODUCT_CATEGORIES as readonly string[]).includes(cat)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const filteredProducts =
    selectedCategory === "All Products"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleOpenQuote = (productName: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-quote-modal", { detail: productName }));
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#FFFDF8] text-[#2E2117] overflow-x-hidden">
      
      {/* =========================================================================
          HERO SECTION — Premium Indian Groundnut & Agricultural Export Portfolio
          ========================================================================= */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 border-b border-[#5A3218]/15 bg-[#F7F1E7]">
        <div className="site-container max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="w-full space-y-4 text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#5A3218]/25 bg-[#FFFDF8]/90 max-w-full">
              <Package className="w-3.5 h-3.5 text-[#5A3218] shrink-0" />
              <span className="text-[10.5px] sm:text-xs font-mono font-bold tracking-[1px] text-[#5A3218] uppercase break-words">
                PREMIUM INDIAN AGRICULTURAL &amp; PEANUT EXPORT PORTFOLIO
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-extrabold text-[#2E2117] tracking-tight leading-tight m-0 break-words">
              Premium Groundnut, Peanuts &amp; Agricultural Commodities.
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg font-sans text-[#55473E] font-normal leading-relaxed max-w-3xl m-0 pt-1">
              Precision-sorted, calibrated and export-ready groundnuts alongside high-grade Central Indian agricultural commodities (Mahua Flower, Wheat, Barley, Mustard Seeds, and High-Protein Oil Cake). All consignments comply with strict moisture standards and international phytosanitary tolerances.
            </p>

          </div>
        </div>
      </section>

      {/* =========================================================================
          CATEGORY NAVIGATION — Single Horizontal Row on Desktop, Scrolling on Mobile
          ========================================================================= */}
      <section className="py-3 sm:py-4 border-b border-[#5A3218]/15 bg-[#FFFDF8] sticky top-[70px] z-30 backdrop-blur-md bg-[#FFFDF8]/95 shadow-sm">
        <div className="site-container max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-2.5 overflow-x-auto scrollbar-none whitespace-nowrap py-1 px-1">
            {PRODUCT_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    borderRadius: "9999px",
                    backgroundColor: isSelected ? "#5A3218" : "#F7F1E7",
                    color: isSelected ? "#FFFDF8" : "#2E2117",
                    borderColor: isSelected ? "#5A3218" : "rgba(90, 50, 24, 0.2)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    fontWeight: isSelected ? 700 : 600,
                  }}
                  className={`h-9 px-4 sm:px-5 inline-flex items-center justify-center text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer shrink-0 ${
                    isSelected
                      ? "shadow-sm"
                      : "hover:bg-[#5A3218]/10 hover:text-[#5A3218]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRODUCT CATALOG SECTION — B2B Export Cards & Aligned Specifications
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FFFDF8]">
        <div className="site-container max-w-[1280px] mx-auto">
          
          {/* Sub-Header Narrative Concept */}
          <div className="flex flex-wrap items-end justify-between gap-3 mb-8 pb-3 border-b border-[#5A3218]/15">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#7A4824] uppercase block mb-0.5">
                {selectedCategory === "Other Products" ? "OTHER PRODUCTS & COMMODITIES" : "OUR EXPORT PORTFOLIO"}
              </span>
              <h2 className="font-sans text-lg sm:text-xl font-extrabold text-[#2E2117] tracking-tight m-0">
                {selectedCategory === "Other Products" 
                  ? "Other Products & Forest Commodities" 
                  : selectedCategory === "All Products" 
                    ? "Calibrated Peanut Grades & Agri Commodities" 
                    : `${selectedCategory} Specifications`}
              </h2>
            </div>
            <div className="text-[11px] font-mono font-semibold text-[#5A3218] bg-[#F7F1E7] px-3 py-1 rounded-full border border-[#5A3218]/15">
              Showing {filteredProducts.length} Export Specifications
            </div>
          </div>

          {/* 3-Column Desktop / 2-Column Tablet / 1-Column Mobile Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {filteredProducts.map((product) => {
              const whatsappLink = `https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hello%20Pradeep%20Trading%20Company,%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}.%20Please%20share%20the%20available%20grades,%20specifications,%20MOQ%20and%20export%20quotation.`;

              return (
                <div
                  key={product.id}
                  className="group flex flex-col justify-between h-full bg-[#FFFDF8] border border-[#5A3218]/15 rounded-xl overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 hover:border-[#5A3218]/35"
                >
                  {/* Product Image Frame: Sleek 16:10 Ratio */}
                  <div className="relative aspect-[16/10] w-full bg-[#FAF6EE] overflow-hidden p-3 sm:p-3.5 flex items-center justify-center border-b border-[#5A3218]/10">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-1.5 transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Product Content Body: Aligned Hierarchy (Compact & Refined Typography) */}
                  <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between gap-2">
                    
                    {/* Category, Title, Description */}
                    <div>
                      {/* Category Tag */}
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="inline-block px-1.5 py-0.5 rounded-full bg-[#5A3218]/10 text-[#5A3218] text-[8px] font-mono font-bold uppercase tracking-wider whitespace-nowrap">
                          {product.category}
                        </span>
                      </div>

                      {/* Product Name */}
                      <h3 className="font-sans text-[13px] sm:text-[14px] font-bold text-[#2E2117] group-hover:text-[#5A3218] transition-colors m-0 mb-1 leading-snug">
                        {product.name}
                      </h3>

                      {/* Product Description */}
                      <p className="text-[10px] sm:text-[10.5px] font-sans text-[#55473E] font-normal leading-relaxed m-0 line-clamp-2">
                        {product.shortDescription}
                      </p>
                    </div>

                    {/* Clean Two-Column Specification Table (Label Column / Value Column) */}
                    <div className="pt-2 pb-0.5 border-t border-[#5A3218]/12 flex flex-col gap-1.5">
                      
                      {/* Row 1: Counts / Caliber / Size */}
                      <div className="flex items-start justify-between gap-2">
                        <span className="shrink-0 font-mono text-[7.5px] sm:text-[8px] font-semibold text-[#7A4824] uppercase tracking-wider pt-0.5">
                          {product.specs.counts ? "COUNTS / OUNCE" : "GRADE / CALIBER"}
                        </span>
                        <span className="text-right font-sans font-medium text-[#2E2117] text-[9px] sm:text-[9.5px] leading-snug">
                          {product.specs.counts || product.grade || product.size || "Export Standard"}
                        </span>
                      </div>

                      {/* Row 2: Moisture Ceiling */}
                      <div className="flex items-start justify-between gap-2">
                        <span className="shrink-0 font-mono text-[7.5px] sm:text-[8px] font-semibold text-[#7A4824] uppercase tracking-wider pt-0.5">
                          MOISTURE CEILING
                        </span>
                        <span className="text-right font-sans font-medium text-[#2E2117] text-[9px] sm:text-[9.5px] leading-snug">
                          {product.specs.moisture || "Standard Export Ceiling"}
                        </span>
                      </div>

                      {/* Row 3: Aflatoxin / Purity / Protein / Oil */}
                      <div className="flex items-start justify-between gap-2">
                        <span className="shrink-0 font-mono text-[7.5px] sm:text-[8px] font-semibold text-[#7A4824] uppercase tracking-wider pt-0.5">
                          {product.specs.protein 
                            ? "PROTEIN CONTENT" 
                            : product.specs.oilContent 
                              ? "OIL CONTENT" 
                              : product.specs.aflatoxin 
                                ? "AFLATOXIN SPEC" 
                                : "PURITY RATING"}
                        </span>
                        <span className="text-right font-sans font-medium text-[#2E2117] text-[9px] sm:text-[9.5px] leading-snug">
                          {product.specs.protein || product.specs.oilContent || product.specs.aflatoxin || product.specs.purity || "99.5% Min Double Sortex"}
                        </span>
                      </div>

                    </div>

                    {/* Standardized B2B Action Buttons with Compact Height and Pill Styling */}
                    <div 
                      className="pt-2.5 mt-auto border-t border-[#5A3218]/12"
                      style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}
                    >
                      
                      {/* Top Action Row: View Details & Request Quote */}
                      <div 
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '7px' }}
                      >
                        <Link
                          href={`/products/${product.slug}`}
                          className="w-full h-8 px-2 bg-[#F7F1E7] text-[#5A3218] hover:bg-[#5A3218] hover:text-[#FFFDF8] font-sans text-[9px] sm:text-[9.5px] font-bold text-center uppercase tracking-wide transition-colors border border-[#5A3218]/15 shadow-2xs"
                          style={{
                            borderRadius: '9999px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '4px',
                            textDecoration: 'none'
                          }}
                        >
                          <span className="whitespace-nowrap">View Details</span>
                          <ArrowRight className="w-2.5 h-2.5 shrink-0" />
                        </Link>
                        
                        <button
                          type="button"
                          onClick={() => handleOpenQuote(product.name)}
                          className="w-full h-8 px-2 bg-[#5A3218] text-[#FFFDF8] hover:bg-[#7A4824] font-sans text-[9px] sm:text-[9.5px] font-bold text-center uppercase tracking-wide transition-colors shadow-2xs cursor-pointer border border-[#5A3218]"
                          style={{
                            borderRadius: '9999px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '4px'
                          }}
                        >
                          <FileText className="w-2.5 h-2.5 text-[#D5B58C] shrink-0" />
                          <span className="whitespace-nowrap">Get Quote</span>
                        </button>
                      </div>

                      {/* WhatsApp Inquiry Button: Full Width */}
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-8 px-3 bg-[#25D366]/12 hover:bg-[#25D366] text-[#1E7E34] hover:text-white font-sans text-[9.5px] sm:text-[10px] font-bold text-center uppercase tracking-wide transition-all border border-[#25D366]/30 shadow-2xs"
                        style={{
                          borderRadius: '9999px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '5px',
                          textDecoration: 'none'
                        }}
                      >
                        <MessageCircle className="w-3 h-3 shrink-0" />
                        <span className="whitespace-nowrap">Chat on WhatsApp</span>
                      </a>

                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          UNIVERSAL CONTACT CTA
          ========================================================================= */}
      <ContactCtaSection
        title="LOOKING FOR CUSTOM AGRO COMMODITY SOURCING OR PRIVATE LABEL PACKAGING?"
        subtitle="We provide bespoke grading, container stuffing at Mundra Port, and destination-certified quality parameters for global importers."
      />

    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FFFDF8] flex items-center justify-center text-[#5A3218]">Loading Product Catalog...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
