"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, ShieldCheck, Download, FileText, Anchor } from "lucide-react";

export interface ProductSpecData {
  id: string;
  name: string;
  category: string;
  tagline: string;
  image: string;
  counts: string;
  moisture: string;
  oil: string;
  purity: string;
  aflatoxin: string;
  broken: string;
  packaging: string;
  applications: string[];
  description: string;
}

export const PRODUCT_SPECS_CATALOG: Record<string, ProductSpecData> = {
  "bold-peanuts": {
    id: "bold-peanuts",
    name: "Indian Bold Peanuts (Singdana)",
    category: "Raw Red Kernels",
    tagline: "Large-sized premium reddish kernels for global roasting & snacking",
    image: "/images/premium-peanuts-bowl.jpg",
    counts: "38/42, 40/50, 50/60, 60/70, 70/80 counts/oz",
    moisture: "7.0% Max (Electronically hot-air dried)",
    oil: "48% - 50% Natural Oil Content",
    purity: "99.50% Min (Buhler Optical Double-Sortex)",
    aflatoxin: "< 4 ppb Total (B1 < 2 ppb, EU & UK Compliant)",
    broken: "< 0.5% Maximum",
    packaging: "25kg / 50kg New Jute Bags, PP Bags, or 25kg Vacuum Bricks",
    applications: [
      "Hot-air & oil roasting for retail snack packs",
      "Table snacking with chili, salt, or honey glaze",
      "Peanut brittle (Chikki) and bar manufacturing",
      "Nut-mix blending and confectionery inclusions",
    ],
    description:
      "Our Bold Peanuts represent India's gold standard in large-caliber groundnuts. Grown in the well-drained sandy loam soils of Shivpuri (M.P.) and Saurashtra (Gujarat), each batch undergoes mechanical pre-cleaning, destoning, and dual optical CCD sorting to ensure uniform reddish skin, high crunch factor, and pristine food safety compliance.",
  },
  "java-peanuts": {
    id: "java-peanuts",
    name: "Indian Java Peanuts (Confectionery)",
    category: "Pink Skin Round Kernels",
    tagline: "High-oil round kernels with sweet nutty taste for peanut butter",
    image: "/images/java-peanuts.webp",
    counts: "40/50, 50/60, 60/70, 70/80, 80/90 counts/oz",
    moisture: "7.0% Max (Strict automated drying)",
    oil: "50% - 52% (High Natural Oil Content)",
    purity: "99.50% Min (Optical CCD sorted)",
    aflatoxin: "< 4 ppb Total (HPLC Tested)",
    broken: "< 0.5% Maximum",
    packaging: "25kg / 50kg Jute Bags or Nitrogen-flushed Vacuum Cartons",
    applications: [
      "Ultra-smooth and crunchy peanut butter manufacturing",
      "Bakery cookie pastes and chocolate candy centers",
      "Even-roasting for salted and coated cocktail snacks",
      "High-yield cold press edible peanut oil extraction",
    ],
    description:
      "Java Peanuts feature characteristic spherical round shapes with smooth pinkish skin. Renowned across international buyers for exceptional oil content exceeding 50%, they provide a rich natural sweetness and emulsion stability that makes them the preferred choice for industrial peanut butter and confectionery brands.",
  },
  "blanched-peanuts": {
    id: "blanched-peanuts",
    name: "Blanched Peanuts (Whole & Splits)",
    category: "100% Skinless Ivory White",
    tagline: "Optical sortex skin-free cotyledons ready for industrial processing",
    image: "/images/blanched-butter-macro.jpg",
    counts: "38/42, 40/50, 50/60 counts/oz",
    moisture: "5.0% - 6.0% (Low moisture for prolonged shelf life)",
    oil: "49% - 51%",
    purity: "99.90% Min (100% skin removed)",
    aflatoxin: "< 2 ppb B1 / < 4 ppb Total",
    broken: "< 0.5% (Whole), Clean 50/50 Splits available",
    packaging: "25kg Nitrogen-flushed Multi-layer Vacuum Foil Cartons",
    applications: [
      "Direct chocolate panning and candy bars",
      "Gourmet bakery toppings, paste, and marzipan",
      "Ready-to-eat dry roasted luxury nut blends",
      "Commercial nut butter with consistent ivory color",
    ],
    description:
      "Gentle warm-air steam skinning removes 100% of the red seed coat without damaging natural kernel oils or protein structures. High-resolution optical sorting discards any discolored or split defects, delivering immaculate ivory-white whole and split cotyledons with superior maritime transit stability.",
  },
  "value-added": {
    id: "value-added",
    name: "Value-Added In-Shell & Cold-Pressed Oil",
    category: "Roasted Pods & Pure Oil",
    tagline: "Natural unbroken pod shells and chemical-free virgin wood-pressed oil",
    image: "/images/peanut-inshell.webp",
    counts: "Pods 18/22, 22/26 pods/oz (Groundnuts in Shell)",
    moisture: "8.0% Max (Aerated unbroken pods)",
    oil: "100% Virgin Wood-Pressed Oil available",
    purity: "99.0% Clean Shelled Pods",
    aflatoxin: "Standard compliant (APEDA & FSSAI)",
    broken: "< 1.0% Broken Pods",
    packaging: "30kg / 40kg Ventilated Mesh Jute Sacks; Oil in 15L Tins or IBCs",
    applications: [
      "Traditional open-fire and hot-sand snacking",
      "Retail roasted in-shell stadium packs",
      "Heart-healthy gourmet cooking with virgin unrefined oil",
      "High smoke point frying and sautéing",
    ],
    description:
      "Harvested with mature fibrous pods, cleaned with gentle destoners and aerated to protect kernel integrity. Alongside whole groundnuts in-shell, our traditional slow wood cold-press facility produces pure, unbleached groundnut oil containing zero chemical preservatives or trans fats.",
  },
  "other-products": {
    id: "other-products",
    name: "Diversified Agri Export Commodities",
    category: "Mahua, Grains, Seeds & Feed",
    tagline: "Wild forest Mahua, MP Sharbati wheat, bold mustard, and 48% protein DOC",
    image: "/images/mahua-flower.webp",
    counts: "Commercial export grading & sieving standards",
    moisture: "Grains < 10%, DOC < 8%, Mahua < 12%",
    oil: "Mustard 38%+ Natural Oil; DOC 1.0% Residual Oil",
    purity: "98.5% - 99.0% Machine Dressed Cleaned",
    aflatoxin: "Strictly monitored for animal feed safety",
    broken: "Graded by commercial screen size",
    packaging: "50kg HDPE / PP / Jute Bags or Bulk Container Liners",
    applications: [
      "Natural sweeteners, herbal infusions & fermentation (Mahua)",
      "High-protein compound animal & poultry feed (Peanut DOC)",
      "Premium bakery and artisanal flour milling (Sharbati Wheat)",
      "Industrial vegetable oil crushing (Bold Mustard)",
    ],
    description:
      "Capitalizing on our extensive Central Indian farm procurement network, we export authentic sun-dried Mahua flowers from tribal collection belts, high-protein peanut de-oiled cake (DOC 48-50% protein) for global livestock feed, and premium Sharbati wheat and mustard seeds.",
  },
  "tj-peanuts": {
    id: "tj-peanuts",
    name: "TJ Peanuts (Semi-Bold Export Caliber)",
    category: "Semi-Bold Red Kernels",
    tagline: "High-yield hybrid kernels for roasting, snacking, and industrial processing",
    image: "/images/tj-peanuts.webp",
    counts: "50/60, 60/70, 70/80, 80/90 counts/oz",
    moisture: "7.0% Max (Electronically dried)",
    oil: "49% - 51% Natural Oil Content",
    purity: "99.50% Min (Optical CCD sorted)",
    aflatoxin: "< 4 ppb Total (B1 < 2 ppb)",
    broken: "< 0.5% Maximum",
    packaging: "25kg / 50kg Jute Bags, PP Bags, or Vacuum Bricks",
    applications: [
      "Commercial oil roasting and salted pouch snacks",
      "Peanut brittle, energy bars, and peanut candies",
      "Cost-effective peanut butter base formulations",
      "Blended nut and savory trail mixes",
    ],
    description:
      "TJ peanuts combine the elongated form of Bold peanuts with the dense oil richness of Java varieties. Highly appreciated for exceptional uniformity, robust crunch, and competitive export economics across Southeast Asia, the Middle East, and Africa.",
  },
  "whole-blanched-peanuts": {
    id: "whole-blanched-peanuts",
    name: "Blanched Whole Peanuts",
    category: "100% Skinless Ivory White",
    tagline: "Ultra-pure skinless whole kernels for chocolate panning and high-end roasting",
    image: "/images/blanched-butter-macro.jpg",
    counts: "38/42, 40/50, 50/60 counts/oz",
    moisture: "5.0% - 6.0%",
    oil: "49% - 51%",
    purity: "99.90% Min (Skinless)",
    aflatoxin: "< 2 ppb B1 / < 4 ppb Total",
    broken: "< 0.5% Whole Caliber",
    packaging: "25kg Vacuum Foil Cartons / Nitrogen Flushed",
    applications: [
      "Luxury chocolate panning and dragee centers",
      "Dry-roasted snack retail tubs and tins",
      "Artisanal confectionery toppings and nut clusters",
      "Pure white cream peanut butter manufacturing",
    ],
    description:
      "Processed through our precision dry-steam de-skinning facility, each kernel has 100% of its outer tegument cleanly removed. Dual optical color sorting ensures immaculate ivory purity, minimal split percentage, and extended container voyage freshness.",
  },
  "split-blanched-peanuts": {
    id: "split-blanched-peanuts",
    name: "Blanched Split Peanuts",
    category: "Clean 50/50 Cotyledons",
    tagline: "Industrial-grade split kernels for peanut butter, bakeries, and cookies",
    image: "/images/split-blanched-peanuts.webp",
    counts: "Evenly split 50/50 cotyledons",
    moisture: "5.0% - 5.8%",
    oil: "49% - 51%",
    purity: "99.90% Min",
    aflatoxin: "< 2 ppb B1 / < 4 ppb Total",
    broken: "< 1.0% Meal or Fines",
    packaging: "25kg Vacuum Bags in Master Cartons",
    applications: [
      "Ultra-fine industrial peanut butter grinding",
      "Cookie inclusions, biscuit dough, and granola",
      "Commercial paste, marzipan, and praline fillings",
      "Extruded savory snacks and crunchy toppings",
    ],
    description:
      "Prepared specifically for industrial grinding lines and bakery processors, our blanched split peanuts offer pristine skinless cleanliness with zero aflatoxin risk, speeding up roasting and milling times with maximum energy efficiency.",
  },
  "peanuts-in-shell": {
    id: "peanuts-in-shell",
    name: "Groundnuts In-Shell (Whole Pods)",
    category: "Aerated Clean Pods",
    tagline: "Clean unbroken pod shells with golden kernels ready for roasting",
    image: "/images/peanut-inshell.webp",
    counts: "18/22, 22/26 pods/oz",
    moisture: "8.0% Max",
    oil: "Natural High Oil Content",
    purity: "99.0% Clean Shelled Pods",
    aflatoxin: "< 4 ppb APEDA Export Standard",
    broken: "< 1.0% Broken Pods",
    packaging: "30kg / 40kg Aerated Mesh Jute Sacks",
    applications: [
      "Traditional open-fire and hot-sand street roasting",
      "Stadium snack concessions and wholesale nut bags",
      "Shell-on salted and spiced roasted retail lines",
      "Natural wildlife and specialty bird feed exports",
    ],
    description:
      "Harvested at optimal maturity with fully developed fibrous pods, destoned, mechanically cleaned, and aerated to retain crunchy inner kernels with no pod mold or discoloration.",
  },
  "cold-pressed-groundnut-oil": {
    id: "cold-pressed-groundnut-oil",
    name: "Cold-Pressed Groundnut Oil",
    category: "100% Virgin Wood-Pressed",
    tagline: "Traditional cold-expelled peanut oil, chemical-free and unrefined",
    image: "/images/peanut-oil-butter.webp",
    counts: "Virgin Cold Expelled (Chekku / Ghani)",
    moisture: "< 0.15%",
    oil: "100% Pure Peanut Oil (Free Fatty Acid < 1%)",
    purity: "100% Pure Virgin Grade",
    aflatoxin: "Non-detectable (< 1 ppb)",
    broken: "Micro-filtered clarity",
    packaging: "1L / 5L Food-grade PET Bottles, 15L Tins, 1000L IBC Tanks",
    applications: [
      "Gourmet culinary cooking with natural aroma",
      "High smoke point shallow and deep frying",
      "Salad dressings, sautéing, and traditional cuisines",
      "Natural cosmetic and Ayurvedic formulations",
    ],
    description:
      "Crushed at ambient temperatures below 45°C from select bold peanuts, preserving natural antioxidants, vitamin E, and phytosterols without chemical refining, bleaching, or deodorizing.",
  },
  "pure-peanut-butter": {
    id: "pure-peanut-butter",
    name: "Pure Peanut Butter (Bulk Industrial)",
    category: "Creamy & Crunchy Paste",
    tagline: "100% roasted peanut butter with zero hydrogenated palm oil or trans fats",
    image: "/images/pure-peanut-butter.png",
    counts: "Smooth / Ultra-Fine Creamy or Crunchy Inclusions",
    moisture: "< 1.5%",
    oil: "Natural Peanut Oil (No Added Palm Oil)",
    purity: "100% Roasted Peanuts",
    aflatoxin: "< 2 ppb Total",
    broken: "Finely milled emulsion",
    packaging: "20kg Pails, 200kg Food-grade Drums, 1 MT IBC Totes",
    applications: [
      "Commercial retail jar packaging and private label",
      "Confectionery bar centers and wafer fills",
      "Protein bars, shakes, and nutritional supplements",
      "Bakery fillings, cookie centers, and ice cream ribbons",
    ],
    description:
      "Crafted exclusively from slow-roasted Indian peanuts, our bulk peanut butter delivers rich golden color, velvety texture, and clean nutty flavor meeting rigorous international food compliance.",
  },
  "mahua-flower": {
    id: "mahua-flower",
    name: "Dried Mahua Flower (Madhuca Longifolia)",
    category: "Forest Harvested Agri Commodity",
    tagline: "Central Indian tribal forest handpicked sun-dried edible flowers",
    image: "/images/mahua-flower.webp",
    counts: "Cleaned & Sifted Forest Grade",
    moisture: "10.0% - 12.0% Max",
    oil: "Natural Natural Sugars (Up to 70%)",
    purity: "98.5% Min Cleaned",
    aflatoxin: "Tested & Safe for Food/Beverage",
    broken: "Intact cured calyces",
    packaging: "25kg / 50kg Multiwall Paper or PP Bags",
    applications: [
      "Natural botanical spirits, syrups, and craft brews",
      "Nutraceutical syrups, tonics, and herbal health foods",
      "Traditional natural sweetening agent and bakery doughs",
      "Bio-fuel and organic specialty fermentation",
    ],
    description:
      "Harvested during spring season in the deciduous forests of Madhya Pradesh, Mahua flowers are naturally rich in fermentable sugars, minerals, and vitamins, cleaned and solar-cured to food export standards.",
  },
  "wheat-barley": {
    id: "wheat-barley",
    name: "Milling Wheat & Feed Barley",
    category: "Central MP Sharbati & Feed Grains",
    tagline: "High-gluten golden Sharbati milling wheat and cleaned malting barley",
    image: "/images/wheat-barley.png",
    counts: "Machine cleaned, test weight 78+ kg/hl",
    moisture: "< 10.0% Max",
    oil: "Protein: 12.5% - 14.0% (Wheat)",
    purity: "99.0% Min Machine Dressed",
    aflatoxin: "Export Phytosanitary Certified",
    broken: "< 1.5% Foreign Grains",
    packaging: "50kg PP Bags or Bulk 20ft Container Liners",
    applications: [
      "Premium rotis, flatbreads, and artisanal flour milling",
      "Commercial biscuit, pasta, and noodle factories",
      "Feed barley for poultry and livestock compound feed",
      "Brewing and malting grain supply chains",
    ],
    description:
      "Central India's fertile black cotton soil produces the legendary MP Sharbati wheat, recognized globally for heavy grain weight, golden sheen, and superior dough elasticity.",
  },
  "mustard-seeds": {
    id: "mustard-seeds",
    name: "Black & Yellow Mustard Seeds",
    category: "High-Oil Agricultural Seeds",
    tagline: "Machine-cleaned bold mustard seeds with pungent aroma and 38%+ oil",
    image: "/images/mustard-seeds.jpg",
    counts: "Bold Caliber Machine Dressed",
    moisture: "< 8.0% Max",
    oil: "38.0% - 42.0% Natural Oil Content",
    purity: "99.0% Min Sortex Cleaned",
    aflatoxin: "Export Compliant",
    broken: "< 0.5% Immature Seeds",
    packaging: "25kg / 50kg PP Bags with Liner",
    applications: [
      "High-pungency edible mustard oil crushing",
      "Global culinary spices and whole pickle seasoning",
      "Condiment mustard pastes and Dijon style sauces",
      "De-oiled mustard meal for organic fertilizers",
    ],
    description:
      "Procured from primary mandis of Chambal and Rajasthan border, our bold mustard seeds are electronically sortexed to ensure uniform dark luster, pungent allylisothiocyanate aroma, and high crushing oil recovery.",
  },
  "groundnut-oil-cake": {
    id: "groundnut-oil-cake",
    name: "Groundnut De-Oiled Cake (DOC)",
    category: "High-Protein Animal & Aqua Feed",
    tagline: "48-50% crude protein peanut meal for global cattle, poultry, and fish feed",
    image: "/images/groundnut-oil-cake.webp",
    counts: "Toasted Meal / Flakes / Pellets",
    moisture: "< 8.0% Max",
    oil: "Residual Oil < 1.0%",
    purity: "Crude Protein: 48.0% - 50.0% Min",
    aflatoxin: "Strictly Controlled (< 20 ppb Feed Standard)",
    broken: "Crude Fiber < 8.0%",
    packaging: "50kg PP Sacks or Bulk Breakbulk Vessel Liners",
    applications: [
      "High-protein dairy cattle compound feed rations",
      "Poultry broiler and layer protein supplementation",
      "Aqua feed for shrimp and freshwater fish farming",
      "Organic nitrogen-rich agricultural soil amendments",
    ],
    description:
      "Produced from solvent extraction of cold-pressed peanut meal, our Groundnut DOC features exceptionally high digestibility, balanced amino acid profile, and low fiber content, making it an indispensable high-protein feed ingredient worldwide.",
  },
};

export default function QuickSpecsModal() {
  const [activeProduct, setActiveProduct] = useState<ProductSpecData | null>(null);

  useEffect(() => {
    const handleOpen = (e: any) => {
      const key = e.detail?.productId || "bold-peanuts";
      if (PRODUCT_SPECS_CATALOG[key]) {
        setActiveProduct(PRODUCT_SPECS_CATALOG[key]);
      } else {
        setActiveProduct(PRODUCT_SPECS_CATALOG["bold-peanuts"]);
      }
    };

    window.addEventListener("open-quick-specs", handleOpen);
    return () => window.removeEventListener("open-quick-specs", handleOpen);
  }, []);

  if (!activeProduct) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100004,
        backgroundColor: "rgba(20, 10, 4, 0.78)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
      onClick={() => setActiveProduct(null)}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "720px",
          backgroundColor: "#ffffff",
          borderRadius: "24px",
          maxHeight: "92vh",
          overflowY: "auto",
          boxShadow: "0 25px 65px -10px rgba(0,0,0,0.45)",
          position: "relative",
          border: "2px solid rgba(200, 138, 46, 0.35)",
          animation: "fadeInDown 0.25s ease-out",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: "#2C170A",
            color: "#ffffff",
            padding: "22px 26px",
            position: "relative",
            borderTopLeftRadius: "22px",
            borderTopRightRadius: "22px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#E5A83B",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Export Caliber Technical Specification
            </span>
            <h3 style={{ fontSize: "20px", fontWeight: 800, margin: "4px 0 0", color: "#ffffff" }}>
              {activeProduct.name}
            </h3>
          </div>
          <button
            onClick={() => setActiveProduct(null)}
            aria-label="Close specification sheet"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "none",
              color: "#ffffff",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ padding: "26px" }}>
          {/* Top Info Banner */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              padding: "16px",
              backgroundColor: "#FAF6EE",
              borderRadius: "16px",
              border: "1px solid #ebdcc8",
              marginBottom: "22px",
            }}
          >
            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid #C88A2E",
                flexShrink: 0,
              }}
            >
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  backgroundColor: "#5C341B",
                  color: "#ffffff",
                  padding: "3px 10px",
                  borderRadius: "12px",
                }}
              >
                {activeProduct.category}
              </span>
              <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#361C0D", margin: "6px 0 4px" }}>
                {activeProduct.tagline}
              </h4>
              <p style={{ fontSize: "12.5px", color: "#6e5d52", margin: 0, lineHeight: 1.45 }}>
                {activeProduct.description}
              </p>
            </div>
          </div>

          {/* Technical Specs Grid */}
          <h4
            style={{
              fontSize: "13.5px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#C88A2E",
              marginBottom: "12px",
            }}
          >
            Laboratory Quality Parameters
          </h4>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "10px",
              marginBottom: "24px",
            }}
          >
            <div style={{ backgroundColor: "#FAF2E6", padding: "12px 14px", borderRadius: "12px", border: "1px solid #ebdcc8" }}>
              <span style={{ fontSize: "11px", color: "#776355", fontWeight: 600 }}>Standard Counts:</span>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#361C0D" }}>{activeProduct.counts}</div>
            </div>
            <div style={{ backgroundColor: "#FAF2E6", padding: "12px 14px", borderRadius: "12px", border: "1px solid #ebdcc8" }}>
              <span style={{ fontSize: "11px", color: "#776355", fontWeight: 600 }}>Moisture Spec:</span>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#235D43" }}>{activeProduct.moisture}</div>
            </div>
            <div style={{ backgroundColor: "#FAF2E6", padding: "12px 14px", borderRadius: "12px", border: "1px solid #ebdcc8" }}>
              <span style={{ fontSize: "11px", color: "#776355", fontWeight: 600 }}>Oil Content:</span>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#C88A2E" }}>{activeProduct.oil}</div>
            </div>
            <div style={{ backgroundColor: "#FAF2E6", padding: "12px 14px", borderRadius: "12px", border: "1px solid #ebdcc8" }}>
              <span style={{ fontSize: "11px", color: "#776355", fontWeight: 600 }}>Buhler Sortex Purity:</span>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#361C0D" }}>{activeProduct.purity}</div>
            </div>
            <div style={{ backgroundColor: "#FAF2E6", padding: "12px 14px", borderRadius: "12px", border: "1px solid #ebdcc8" }}>
              <span style={{ fontSize: "11px", color: "#776355", fontWeight: 600 }}>Aflatoxin Standard:</span>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#361C0D" }}>{activeProduct.aflatoxin}</div>
            </div>
            <div style={{ backgroundColor: "#FAF2E6", padding: "12px 14px", borderRadius: "12px", border: "1px solid #ebdcc8" }}>
              <span style={{ fontSize: "11px", color: "#776355", fontWeight: 600 }}>Packaging Types:</span>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#361C0D" }}>{activeProduct.packaging}</div>
            </div>
          </div>

          {/* Key Applications */}
          <div style={{ marginBottom: "24px" }}>
            <h4
              style={{
                fontSize: "13px",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#2C170A",
                marginBottom: "10px",
              }}
            >
              Recommended Food &amp; Industrial Uses
            </h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "8px" }}>
              {activeProduct.applications.map((app, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "12.5px",
                    color: "#54463c",
                    backgroundColor: "#FAF6EE",
                    padding: "8px 12px",
                    borderRadius: "10px",
                    border: "1px solid #ebdcc8",
                  }}
                >
                  <CheckCircle size={14} style={{ color: "#235D43", flexShrink: 0 }} />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              borderTop: "1px solid #ebdcc8",
              paddingTop: "20px",
            }}
          >
            <div style={{ fontSize: "12px", color: "#776355" }}>
              FCL Container Loadability: <strong>19 MT (20ft) / 27 MT (40ft)</strong>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href={`https://wa.me/919589790997?text=Hello%20Pradeep%20Trading,%20I%20need%20a%20container%20quote%20for%20${encodeURIComponent(
                  activeProduct.name
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "#25D366",
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "9px 16px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                <i className="fab fa-whatsapp"></i>
                <span>Inquire on WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  const prodName = activeProduct.name;
                  setActiveProduct(null);
                  window.dispatchEvent(new CustomEvent("open-quote-modal", { detail: prodName }));
                }}
                style={{
                  backgroundColor: "#5C341B",
                  color: "#ffffff",
                  border: "none",
                  padding: "9px 18px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Request Fast Container RFQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
