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
          transform: isCollapsed ? "translate(calc(100% - 14px), -50%)" : "translate(0, -50%)",
        }}
      >
        {/* Collapse / Expand Toggle Tab */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Expand Quick Actions Dock" : "Collapse Quick Actions Dock"}
          className="bg-[#E5A83B] text-[#2C170A] hover:bg-[#ffffff] hover:text-[#2C170A] p-1 rounded-l-md border-l border-t border-b border-[#2C170A]/20 shadow-xl cursor-pointer transition-colors"
          style={{ width: "18px", height: "46px", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {isCollapsed ? <ChevronLeft size={16} strokeWidth={2.8} /> : <ChevronRight size={16} strokeWidth={2.8} />}
        </button>

        {/* Vertical Icon Stack - High Contrast Vibrant Gold Single Color Palette */}
        <div
          className="flex flex-col rounded-l-2xl overflow-hidden shadow-2xl border-l border-t border-b border-[#C88A2E]"
          style={{
            backgroundColor: "#E5A83B",
            boxShadow: "0 10px 35px rgba(0, 0, 0, 0.45)",
          }}
        >
          {/* 1. CONTACT US (First) */}
          <Link
            href="/contact"
            aria-label="Contact Us"
            className="group relative flex items-center justify-center w-12 h-12 bg-[#E5A83B] text-[#2C170A] hover:bg-[#2C170A] hover:text-[#E5A83B] transition-all"
            style={{ borderBottom: "1px solid rgba(44, 23, 10, 0.18)" }}
          >
            <Phone size={20} strokeWidth={2.5} style={{ color: "inherit" }} />
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#1a0e06] text-white px-3 py-1.5 text-xs font-semibold shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all border border-[#C88A2E]/50">
              Contact Us (+91-9589790997)
            </span>
          </Link>

          {/* 2. WHATSAPP */}
          <a
            href="https://wa.me/919589790997?text=Hello%20Pradeep%20Trading%20Company,%20I%20would%20like%20to%20inquire%20about%20peanut%20export%20specifications%20and%20container%20pricing."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="group relative flex items-center justify-center w-12 h-12 bg-[#E5A83B] text-[#2C170A] hover:bg-[#2C170A] hover:text-[#E5A83B] transition-all"
            style={{ borderBottom: "1px solid rgba(44, 23, 10, 0.18)" }}
          >
            <i className="fab fa-whatsapp" style={{ fontSize: "22px", color: "inherit" }}></i>
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#1a0e06] text-white px-3 py-1.5 text-xs font-semibold shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all border border-[#C88A2E]/50">
              WhatsApp (+91-9589790997)
            </span>
          </a>

          {/* 3. EMAIL */}
          <a
            href="mailto:pradeeptradingcomp@gmail.com"
            aria-label="Email Pradeep Trading"
            className="group relative flex items-center justify-center w-12 h-12 bg-[#E5A83B] text-[#2C170A] hover:bg-[#2C170A] hover:text-[#E5A83B] transition-all"
            style={{ borderBottom: "1px solid rgba(44, 23, 10, 0.18)" }}
          >
            <Mail size={20} strokeWidth={2.5} style={{ color: "inherit" }} />
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#1a0e06] text-white px-3 py-1.5 text-xs font-semibold shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all border border-[#C88A2E]/50">
              Email (pradeeptradingcomp@gmail.com)
            </span>
          </a>

          {/* 4. BROCHURE */}
          <button
            onClick={handleOpenBrochure}
            aria-label="Download Export Brochure"
            className="group relative flex items-center justify-center w-12 h-12 bg-[#E5A83B] text-[#2C170A] hover:bg-[#2C170A] hover:text-[#E5A83B] transition-all cursor-pointer border-none"
            style={{ borderBottom: "1px solid rgba(44, 23, 10, 0.18)" }}
          >
            <Download size={20} strokeWidth={2.5} style={{ color: "inherit" }} />
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#1a0e06] text-white px-3 py-1.5 text-xs font-semibold shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all border border-[#C88A2E]/50">
              Download Brochure
            </span>
          </button>

          {/* 5. INSTAGRAM (IG) */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group relative flex items-center justify-center w-12 h-12 bg-[#E5A83B] text-[#2C170A] hover:bg-[#2C170A] hover:text-[#E5A83B] transition-all"
            style={{ borderBottom: "1px solid rgba(44, 23, 10, 0.18)" }}
          >
            <i className="fab fa-instagram" style={{ fontSize: "20px", color: "inherit" }}></i>
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#1a0e06] text-white px-3 py-1.5 text-xs font-semibold shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all border border-[#C88A2E]/50">
              Follow on Instagram
            </span>
          </a>

          {/* 6. FACEBOOK (FB) */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="group relative flex items-center justify-center w-12 h-12 bg-[#E5A83B] text-[#2C170A] hover:bg-[#2C170A] hover:text-[#E5A83B] transition-all"
          >
            <i className="fab fa-facebook-f" style={{ fontSize: "19px", color: "inherit" }}></i>
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#1a0e06] text-white px-3 py-1.5 text-xs font-semibold shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all border border-[#C88A2E]/50">
              Follow on Facebook
            </span>
          </a>
        </div>
      </aside>
    </>
  );
}
