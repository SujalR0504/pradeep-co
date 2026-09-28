"use client";

import React, { useState } from "react";
import { Phone, Mail, FileText, Download, Send, ExternalLink, ChevronRight, ChevronLeft } from "lucide-react";

export default function SideFloatingDock() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleOpenQuote = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-quote-modal", { detail: "Export Inquiry" }));
    }
  };

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
          className="bg-[#361C0D] text-[#E5A83B] hover:text-white p-1 rounded-l-md border-l border-t border-b border-[#C88A2E]/40 shadow-lg cursor-pointer transition-colors"
          style={{ width: "18px", height: "42px", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {isCollapsed ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
        </button>

        {/* Vertical Icon Stack */}
        <div
          className="flex flex-col rounded-l-2xl overflow-hidden shadow-2xl border-l border-t border-b border-[#C88A2E]/30"
          style={{
            backgroundColor: "#2C170A",
            backdropFilter: "blur(8px)",
          }}
        >
          {/* 1. WHATSAPP (Priority #1) */}
          <a
            href="https://wa.me/919589790997?text=Hello%20Pradeep%20Trading%20Company,%20I%20would%20like%20to%20inquire%20about%20peanut%20export%20specifications%20and%20container%20pricing."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Export Desk on WhatsApp"
            className="group relative flex items-center justify-center w-12 h-12 bg-[#25D366] text-white hover:bg-[#20ba59] transition-all"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}
          >
            <i className="fab fa-whatsapp text-xl"></i>
            {/* Tooltip */}
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#1a0e06] text-white px-3 py-1.5 text-xs font-semibold shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all border border-[#C88A2E]/40">
              WhatsApp Export Desk (+91-9589790997)
            </span>
          </a>

          {/* 2. REQUEST QUOTE (Priority #2) */}
          <button
            onClick={handleOpenQuote}
            aria-label="Request Fast Export Container Quote"
            className="group relative flex items-center justify-center w-12 h-12 bg-[#E5A83B] text-[#2C170A] hover:bg-[#f0be62] transition-all cursor-pointer"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}
          >
            <FileText size={20} strokeWidth={2.2} />
            {/* Tooltip */}
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#1a0e06] text-white px-3 py-1.5 text-xs font-semibold shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all border border-[#C88A2E]/40">
              Request Fast Quote
            </span>
          </button>

          {/* 3. DOWNLOAD BROCHURE (Priority #3) */}
          <button
            onClick={handleOpenBrochure}
            aria-label="Download 2026 Export Product Brochure"
            className="group relative flex items-center justify-center w-12 h-12 bg-[#5C341B] text-white hover:bg-[#784323] transition-all cursor-pointer"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}
          >
            <Download size={19} strokeWidth={2.2} />
            {/* Tooltip */}
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#1a0e06] text-white px-3 py-1.5 text-xs font-semibold shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all border border-[#C88A2E]/40">
              Download Export Brochure
            </span>
          </button>

          {/* 4. CALL DIRECT */}
          <a
            href="tel:+919589790997"
            aria-label="Call Pradeep Trading Company"
            className="group relative flex items-center justify-center w-12 h-12 text-[#E5A83B] hover:bg-white/10 transition-all"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}
          >
            <Phone size={18} strokeWidth={2} />
            {/* Tooltip */}
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#1a0e06] text-white px-3 py-1.5 text-xs font-semibold shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all border border-[#C88A2E]/40">
              Direct Call (+91-9589790997)
            </span>
          </a>

          {/* 5. EMAIL DIRECT */}
          <a
            href="mailto:pradeeptradingcomp@gmail.com"
            aria-label="Email Pradeep Trading Company"
            className="group relative flex items-center justify-center w-12 h-12 text-white/90 hover:bg-white/10 transition-all"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}
          >
            <Mail size={18} strokeWidth={2} />
            {/* Tooltip */}
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#1a0e06] text-white px-3 py-1.5 text-xs font-semibold shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all border border-[#C88A2E]/40">
              pradeeptradingcomp@gmail.com
            </span>
          </a>

          {/* 6. LINKEDIN SOCIAL */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pradeep Trading on LinkedIn"
            className="group relative flex items-center justify-center w-12 h-12 text-[#0A66C2] hover:bg-white/10 transition-all"
          >
            <i className="fab fa-linkedin-in text-lg"></i>
            {/* Tooltip */}
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#1a0e06] text-white px-3 py-1.5 text-xs font-semibold shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all border border-[#C88A2E]/40">
              Pradeep Trading on LinkedIn
            </span>
          </a>
        </div>
      </aside>
    </>
  );
}
