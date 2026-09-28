"use client";

import React, { useState, useEffect } from "react";
import { Download, X, FileText, CheckCircle2, Phone, Mail, Globe, Shield, Printer, ExternalLink } from "lucide-react";

export default function BrochureModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener("open-brochure-modal", handleOpen);
    return () => window.removeEventListener("open-brochure-modal", handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handlePrintDownload = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100003,
        backgroundColor: "rgba(20, 10, 4, 0.75)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
      onClick={() => setIsOpen(false)}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "760px",
          backgroundColor: "#ffffff",
          borderRadius: "24px",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 25px 65px -10px rgba(0,0,0,0.4)",
          position: "relative",
          border: "2px solid rgba(200, 138, 46, 0.3)",
          animation: "fadeInDown 0.3s ease-out",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div
          style={{
            backgroundColor: "#361C0D",
            color: "#ffffff",
            padding: "24px 28px",
            position: "relative",
            borderTopLeftRadius: "22px",
            borderTopRightRadius: "22px",
          }}
        >
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close brochure modal"
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(255, 255, 255, 0.12)",
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

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <img
              src="/images/logo/logo-light.png"
              alt="Pradeep Trading Company"
              style={{ maxHeight: "56px", objectFit: "contain" }}
            />
            <div>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#E5A83B",
                  marginBottom: "4px",
                }}
              >
                Official Export Catalog &amp; Technical Specifications
              </span>
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  margin: 0,
                  letterSpacing: "-0.01em",
                  color: "#ffffff",
                }}
              >
                Pradeep Trading Company • 2026 Portfolio
              </h2>
              <p style={{ margin: "4px 0 0", fontSize: "12px", color: "#d2c3b8" }}>
                65+ Years of Indian Peanut Heritage • Bhonti, Shivpuri, Madhya Pradesh, India
              </p>
            </div>
          </div>
        </div>

        {/* Brochure Body Content */}
        <div style={{ padding: "28px" }}>
          {/* Quick Download / Action Bar */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              padding: "16px 20px",
              backgroundColor: "#FAF5EC",
              borderRadius: "16px",
              border: "1px solid #ebdcc8",
              marginBottom: "24px",
            }}
          >
            <div>
              <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#361C0D" }}>
                Ready to Print / Save Product Specifications Sheet
              </div>
              <div style={{ fontSize: "11.5px", color: "#776355" }}>
                Includes Bold, Java, Blanched &amp; In-Shell Groundnut export standards.
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={handlePrintDownload}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "#5C341B",
                  color: "#ffffff",
                  border: "none",
                  padding: "9px 16px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(92, 52, 27, 0.2)",
                }}
              >
                <Printer size={14} />
                <span>Print / Save PDF</span>
              </button>
              <a
                href="https://wa.me/919589790997?text=Hello%20Pradeep%20Trading,%20please%20send%20me%20your%20complete%20PDF%20export%20brochure%20and%20container%20price%20list."
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
                  boxShadow: "0 4px 12px rgba(37, 211, 102, 0.2)",
                }}
              >
                <i className="fab fa-whatsapp"></i>
                <span>Get via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Product Specifications Table */}
          <div style={{ marginBottom: "26px" }}>
            <h3
              style={{
                fontSize: "15px",
                fontWeight: 800,
                color: "#2C170A",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#C88A2E" }}></span>
              Peanut Export Calibers &amp; Chemical Specifications
            </h3>

            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "12px",
                  textAlign: "left",
                  border: "1px solid #ebdcc8",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#FAF2E6", color: "#361C0D", borderBottom: "2px solid #ebdcc8" }}>
                    <th style={{ padding: "10px 14px", fontWeight: 700 }}>Variety / Grade</th>
                    <th style={{ padding: "10px 14px", fontWeight: 700 }}>Standard Counts / Oz</th>
                    <th style={{ padding: "10px 14px", fontWeight: 700 }}>Moisture Max</th>
                    <th style={{ padding: "10px 14px", fontWeight: 700 }}>Oil Content</th>
                    <th style={{ padding: "10px 14px", fontWeight: 700 }}>Aflatoxin Standard</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #ebdcc8" }}>
                    <td style={{ padding: "10px 14px", fontWeight: 700, color: "#8C4318" }}>
                      Bold Peanuts (Singdana)
                    </td>
                    <td style={{ padding: "10px 14px" }}>38/42, 40/50, 50/60, 60/70, 70/80</td>
                    <td style={{ padding: "10px 14px", color: "#235D43", fontWeight: 600 }}>7.0% Max</td>
                    <td style={{ padding: "10px 14px" }}>48% - 50%</td>
                    <td style={{ padding: "10px 14px", fontWeight: 600 }}>&lt; 4 ppb (EU/US)</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #ebdcc8", backgroundColor: "#fdfbf7" }}>
                    <td style={{ padding: "10px 14px", fontWeight: 700, color: "#C8822A" }}>
                      Java Peanuts (Confectionery)
                    </td>
                    <td style={{ padding: "10px 14px" }}>40/50, 50/60, 60/70, 70/80, 80/90</td>
                    <td style={{ padding: "10px 14px", color: "#235D43", fontWeight: 600 }}>7.0% Max</td>
                    <td style={{ padding: "10px 14px" }}>50% - 52% (High-Oil)</td>
                    <td style={{ padding: "10px 14px", fontWeight: 600 }}>&lt; 4 ppb (HPLC)</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #ebdcc8" }}>
                    <td style={{ padding: "10px 14px", fontWeight: 700, color: "#5C341B" }}>
                      Blanched Whole &amp; Split
                    </td>
                    <td style={{ padding: "10px 14px" }}>38/42, 40/50, 50/60</td>
                    <td style={{ padding: "10px 14px", color: "#235D43", fontWeight: 600 }}>5.0% - 6.0%</td>
                    <td style={{ padding: "10px 14px" }}>49% - 51%</td>
                    <td style={{ padding: "10px 14px", fontWeight: 600 }}>&lt; 2 ppb B1 / &lt; 4 ppb Total</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #ebdcc8", backgroundColor: "#fdfbf7" }}>
                    <td style={{ padding: "10px 14px", fontWeight: 700, color: "#235D43" }}>
                      In-Shell Pods
                    </td>
                    <td style={{ padding: "10px 14px" }}>18/22, 22/26 pods/oz</td>
                    <td style={{ padding: "10px 14px", color: "#235D43", fontWeight: 600 }}>8.0% Max</td>
                    <td style={{ padding: "10px 14px" }}>Natural</td>
                    <td style={{ padding: "10px 14px", fontWeight: 600 }}>Compliant</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px", fontWeight: 700, color: "#3D2B1F" }}>
                      Cold-Pressed Groundnut Oil
                    </td>
                    <td style={{ padding: "10px 14px" }}>Wood-Pressed Extra Virgin</td>
                    <td style={{ padding: "10px 14px", color: "#235D43", fontWeight: 600 }}>0.25% Max</td>
                    <td style={{ padding: "10px 14px" }}>100% Pure</td>
                    <td style={{ padding: "10px 14px", fontWeight: 600 }}>FFA &lt; 1.0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Infrastructure & Loadability Specs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div style={{ backgroundColor: "#FAF6EE", padding: "18px", borderRadius: "14px", border: "1px solid #ebdcc8" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Shield size={18} style={{ color: "#C88A2E" }} />
                <h4 style={{ fontSize: "13.5px", fontWeight: 700, margin: 0, color: "#361C0D" }}>
                  Buhler Sortex &amp; Quality Control
                </h4>
              </div>
              <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "12px", color: "#615247", lineHeight: 1.6 }}>
                <li>German Buhler Optical CCD Electronic Sorting Line</li>
                <li>Processing Throughput: 4 Metric Tons / Hour</li>
                <li>Mechanical Destoners &amp; Screen Separators</li>
                <li>In-House HPLC Aflatoxin &amp; Moisture Testing Lab</li>
                <li>APEDA, FSSAI, ISO 22000:2018 Certified Facility</li>
              </ul>
            </div>

            <div style={{ backgroundColor: "#FAF6EE", padding: "18px", borderRadius: "14px", border: "1px solid #ebdcc8" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Globe size={18} style={{ color: "#5C341B" }} />
                <h4 style={{ fontSize: "13.5px", fontWeight: 700, margin: 0, color: "#361C0D" }}>
                  FCL Shipping &amp; Container Loadability
                </h4>
              </div>
              <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "12px", color: "#615247", lineHeight: 1.6 }}>
                <li><strong>20ft FCL Container:</strong> 19 MT (380 x 50kg Jute Bags)</li>
                <li><strong>40ft FCL Container:</strong> 27 MT (540 x 50kg Jute Bags)</li>
                <li><strong>Packaging Types:</strong> 25kg/50kg Jute, PP, or Vacuum Packs</li>
                <li><strong>Loading Gateways:</strong> Mundra Port &amp; JNPT (Nhava Sheva)</li>
                <li><strong>Maritime Despatch:</strong> 5-7 days transit to Middle East</li>
              </ul>
            </div>
          </div>

          {/* Direct Contact Desk for Inquiries */}
          <div
            style={{
              padding: "16px 20px",
              borderRadius: "14px",
              backgroundColor: "#361C0D",
              color: "#ffffff",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <div>
              <div style={{ fontSize: "11px", color: "#E5A83B", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Official Export Desk
              </div>
              <div style={{ fontSize: "14px", fontWeight: 700 }}>
                M/s Pradeep Trading Company
              </div>
              <div style={{ fontSize: "12px", color: "#d2c3b8" }}>
                Bhonti, Shivpuri, Madhya Pradesh - 473551, India
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <a
                href="tel:+919589790997"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#ffffff",
                  textDecoration: "none",
                  backgroundColor: "rgba(255,255,255,0.12)",
                  padding: "8px 14px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                <Phone size={13} style={{ color: "#E5A83B" }} />
                <span>+91-9589790997</span>
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  window.dispatchEvent(new CustomEvent("open-quote-modal", { detail: "All Peanut Varieties" }));
                }}
                style={{
                  backgroundColor: "#E5A83B",
                  color: "#2C170A",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                Request Fast Container Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
