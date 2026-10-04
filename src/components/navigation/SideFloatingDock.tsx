"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, Download, ChevronRight, ChevronLeft } from "lucide-react";

export default function SideFloatingDock() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleOpenBrochure = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-brochure-modal"));
    }
  };

  return (
    <>
      <aside
        aria-label="Quick Actions Desk"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[9990] flex items-center transition-transform duration-300"
        style={{
          transform: isCollapsed ? "translate(calc(100% - 22px), -50%)" : "translate(0, -50%)",
        }}
      >
        {/* Collapse / Expand Toggle Tab - Seamlessly Integrated */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Expand Quick Actions Dock" : "Collapse Quick Actions Dock"}
          className="cursor-pointer transition-all duration-200"
          style={{
            width: "22px",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.96)",
            backdropFilter: "blur(12px)",
            border: "1.5px solid rgba(200, 138, 46, 0.35)",
            borderRight: "none",
            borderRadius: "10px 0 0 10px",
            boxShadow: "-4px 4px 14px rgba(54, 28, 13, 0.1)",
            color: "#5C341B",
            padding: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#FEF6E8";
            e.currentTarget.style.color = "#C88A2E";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.96)";
            e.currentTarget.style.color = "#5C341B";
          }}
        >
          {isCollapsed ? <ChevronLeft size={16} strokeWidth={2.8} /> : <ChevronRight size={16} strokeWidth={2.8} />}
        </button>

        {/* Vertical Icon Stack - Frosted Glass Luxury Palette */}
        <div
          className="flex flex-col overflow-hidden"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.96)",
            backdropFilter: "blur(16px)",
            borderRadius: "16px 0 0 16px",
            border: "1.5px solid rgba(200, 138, 46, 0.35)",
            borderRight: "none",
            boxShadow: "-8px 12px 32px rgba(54, 28, 13, 0.14), 0 2px 8px rgba(0, 0, 0, 0.04)",
          }}
        >
          {/* 1. CONTACT US (First) */}
          <Link
            href="/contact"
            aria-label="Contact Us"
            className="group relative flex items-center justify-center w-11 h-11 text-[#5C341B] transition-all"
            style={{ borderBottom: "1px solid rgba(200, 138, 46, 0.14)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#FEF6E8";
              (e.currentTarget as HTMLElement).style.color = "#C88A2E";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#5C341B";
            }}
          >
            <Phone size={19} strokeWidth={2.4} style={{ color: "inherit" }} />
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#2C170A] text-white px-3 py-1.5 text-xs font-semibold shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all border border-[#C88A2E]/50">
              Contact Us (+91-9589790997)
            </span>
          </Link>

          {/* 2. WHATSAPP */}
          <a
            href="https://wa.me/919589790997?text=Hello%20Pradeep%20Trading%20Company,%20I%20would%20like%20to%20inquire%20about%20peanut%20export%20specifications%20and%20container%20pricing."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="group relative flex items-center justify-center w-11 h-11 text-[#25D366] transition-all"
            style={{ borderBottom: "1px solid rgba(200, 138, 46, 0.14)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#EBF8F0";
              (e.currentTarget as HTMLElement).style.color = "#1E8344";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#25D366";
            }}
          >
            <i className="fab fa-whatsapp" style={{ fontSize: "21px", color: "inherit" }}></i>
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#2C170A] text-white px-3 py-1.5 text-xs font-semibold shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all border border-[#C88A2E]/50">
              WhatsApp (+91-9589790997)
            </span>
          </a>

          {/* 3. EMAIL */}
          <a
            href="mailto:pradeeptradingcomp@gmail.com"
            aria-label="Email Pradeep Trading"
            className="group relative flex items-center justify-center w-11 h-11 text-[#5C341B] transition-all"
            style={{ borderBottom: "1px solid rgba(200, 138, 46, 0.14)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#FEF6E8";
              (e.currentTarget as HTMLElement).style.color = "#C88A2E";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#5C341B";
            }}
          >
            <Mail size={19} strokeWidth={2.4} style={{ color: "inherit" }} />
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#2C170A] text-white px-3 py-1.5 text-xs font-semibold shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all border border-[#C88A2E]/50">
              Email (pradeeptradingcomp@gmail.com)
            </span>
          </a>

          {/* 4. BROCHURE */}
          <button
            onClick={handleOpenBrochure}
            aria-label="Download Export Brochure"
            className="group relative flex items-center justify-center w-11 h-11 text-[#C88A2E] transition-all cursor-pointer border-none bg-transparent"
            style={{ borderBottom: "1px solid rgba(200, 138, 46, 0.14)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#FEF6E8";
              (e.currentTarget as HTMLElement).style.color = "#5C341B";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#C88A2E";
            }}
          >
            <Download size={19} strokeWidth={2.4} style={{ color: "inherit" }} />
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#2C170A] text-white px-3 py-1.5 text-xs font-semibold shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all border border-[#C88A2E]/50">
              Download Brochure
            </span>
          </button>

          {/* 5. INSTAGRAM (IG) */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group relative flex items-center justify-center w-11 h-11 text-[#E1306C] transition-all"
            style={{ borderBottom: "1px solid rgba(200, 138, 46, 0.14)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#FDF0F5";
              (e.currentTarget as HTMLElement).style.color = "#C13584";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#E1306C";
            }}
          >
            <i className="fab fa-instagram" style={{ fontSize: "19px", color: "inherit" }}></i>
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#2C170A] text-white px-3 py-1.5 text-xs font-semibold shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all border border-[#C88A2E]/50">
              Follow on Instagram
            </span>
          </a>

          {/* 6. FACEBOOK (FB) */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="group relative flex items-center justify-center w-11 h-11 text-[#1877F2] transition-all"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#EDF5FF";
              (e.currentTarget as HTMLElement).style.color = "#0D65D9";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#1877F2";
            }}
          >
            <i className="fab fa-facebook-f" style={{ fontSize: "18px", color: "inherit" }}></i>
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#2C170A] text-white px-3 py-1.5 text-xs font-semibold shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all border border-[#C88A2E]/50">
              Follow on Facebook
            </span>
          </a>
        </div>
      </aside>
    </>
  );
}
