"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, FileText } from "lucide-react";

export default function MobileBottomBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide when any modal is open
    const handleModalOpen = () => setIsVisible(false);
    const handleModalClose = () => setIsVisible(true);

    window.addEventListener("open-quote-modal", handleModalOpen);
    window.addEventListener("open-search-modal", handleModalOpen);
    window.addEventListener("open-brochure-modal", handleModalOpen);
    window.addEventListener("open-quick-specs", handleModalOpen);

    // Also hide if keyboard opens on mobile (window height decreases significantly)
    const initialHeight = window.innerHeight;
    const handleResize = () => {
      if (window.innerHeight < initialHeight * 0.75) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("open-quote-modal", handleModalOpen);
      window.removeEventListener("open-search-modal", handleModalOpen);
      window.removeEventListener("open-brochure-modal", handleModalOpen);
      window.removeEventListener("open-quick-specs", handleModalOpen);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOpenQuote = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-quote-modal", { detail: "Bold Peanuts" })
      );
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Mobile Quick Conversion Actions"
      className="fixed bottom-0 left-0 right-0 z-[9980] md:hidden"
      style={{
        paddingBottom: "max(env(safe-area-inset-bottom, 0px), 8px)",
        backgroundColor: "rgba(30, 15, 6, 0.94)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderTop: "1.5px solid rgba(200, 138, 46, 0.4)",
        boxShadow: "0 -8px 24px rgba(20, 10, 4, 0.35)",
      }}
    >
      <div className="grid grid-cols-3 gap-2 px-3 py-2 items-center max-w-md mx-auto">
        {/* 1. Direct Phone Call */}
        <a
          href="tel:+919589790997"
          aria-label="Call Pradeep Trading Company export desk"
          className="flex flex-col items-center justify-center gap-1 py-1.5 px-1 rounded-xl text-white transition-all active:scale-95"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            minHeight: "48px",
          }}
        >
          <Phone size={17} className="text-[#E5A83B]" />
          <span className="text-[11px] font-bold tracking-tight text-white leading-none">
            Call Desk
          </span>
        </a>

        {/* 2. Official WhatsApp Chat */}
        <a
          href="https://wa.me/919589790997?text=Hello%20Pradeep%20Trading%20Company,%20I%20would%20like%20to%20inquire%20about%20peanut%20export%20specifications%20and%20container%20pricing."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Pradeep Trading Company on WhatsApp"
          className="flex flex-col items-center justify-center gap-1 py-1.5 px-1 rounded-xl text-white transition-all active:scale-95 shadow-sm"
          style={{
            backgroundColor: "#25D366",
            border: "1px solid #1eb857",
            minHeight: "48px",
          }}
        >
          <MessageCircle size={17} className="text-white fill-white" />
          <span className="text-[11px] font-extrabold tracking-tight text-white leading-none">
            WhatsApp
          </span>
        </a>

        {/* 3. Fast Request Quote */}
        <button
          type="button"
          onClick={handleOpenQuote}
          aria-label="Request fast quotation"
          className="flex flex-col items-center justify-center gap-1 py-1.5 px-1 rounded-xl transition-all active:scale-95 shadow-sm cursor-pointer"
          style={{
            backgroundColor: "#E5A83B",
            border: "1px solid #C88A2E",
            color: "#2C170A",
            minHeight: "48px",
          }}
        >
          <FileText size={17} className="text-[#2C170A]" />
          <span className="text-[11px] font-extrabold tracking-tight text-[#2C170A] leading-none">
            Get Quote
          </span>
        </button>
      </div>
    </aside>
  );
}
