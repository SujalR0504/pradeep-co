"use client";

import React, { useState, useEffect, useRef } from "react";
import { Globe, Check, Search, X, ChevronDown } from "lucide-react";

export interface LanguageItem {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  country: string;
  popular?: boolean;
}

export const LANGUAGES: LanguageItem[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧", country: "United Kingdom & Global", popular: true },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦", country: "Saudi Arabia, UAE & GCC", popular: true },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸", country: "Spain & Latin America", popular: true },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺", country: "Russia & CIS", popular: true },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷", country: "France, Belgium & Africa", popular: true },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪", country: "Germany & Austria", popular: true },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", flag: "🇻🇳", country: "Vietnam", popular: true },
  { code: "zh-CN", name: "Chinese (Simplified)", nativeName: "中文 (简体)", flag: "🇨🇳", country: "China & Singapore", popular: true },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", country: "India", popular: true },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", flag: "🇮🇩", country: "Indonesia" },
  { code: "ms", name: "Malay", nativeName: "Bahasa Melayu", flag: "🇲🇾", country: "Malaysia" },
  { code: "th", name: "Thai", nativeName: "ภาษาไทย", flag: "🇹🇭", country: "Thailand" },
  { code: "tl", name: "Filipino", nativeName: "Tagalog", flag: "🇵🇭", country: "Philippines" },
  { code: "zh-TW", name: "Chinese (Traditional)", nativeName: "中文 (繁體)", flag: "🇹🇼", country: "Taiwan & Hong Kong" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵", country: "Japan" },
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷", country: "South Korea" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe", flag: "🇹🇷", country: "Turkey" },
  { code: "nl", name: "Dutch", nativeName: "Nederlands", flag: "🇳🇱", country: "Netherlands & Belgium" },
  { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹", country: "Italy" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹", country: "Portugal & Brazil" },
  { code: "pl", name: "Polish", nativeName: "Polski", flag: "🇵🇱", country: "Poland" },
  { code: "el", name: "Greek", nativeName: "Ελληνικά", flag: "🇬🇷", country: "Greece" },
  { code: "fa", name: "Persian", nativeName: "فارسی", flag: "🇮🇷", country: "Iran" },
  { code: "uk", name: "Ukrainian", nativeName: "Українська", flag: "🇺🇦", country: "Ukraine" },
  { code: "sw", name: "Swahili", nativeName: "Kiswahili", flag: "🇰🇪", country: "Kenya & East Africa" },
  { code: "af", name: "Afrikaans", nativeName: "Afrikaans", flag: "🇿🇦", country: "South Africa" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", flag: "🇮🇳", country: "Gujarat, India" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", flag: "🇮🇳", country: "Tamil Nadu, India" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", flag: "🇧🇩", country: "Bangladesh" },
];

interface LanguageSelectorProps {
  variant?: "topbar" | "nav" | "mobile" | "floating";
}

export default function LanguageSelector({ variant = "topbar" }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState("en");
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect currently saved language from localStorage or googtrans cookie
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("selected_language");
      if (saved) {
        setSelectedCode(saved);
      } else {
        const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
        if (match && match[1]) {
          setSelectedCode(match[1]);
        }
      }
    }
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectLanguage = (code: string) => {
    setSelectedCode(code);
    setIsOpen(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("app-change-language", { detail: code }));
    }
  };

  const currentLang = LANGUAGES.find((l) => l.code === selectedCode) || LANGUAGES[0];

  const filteredLanguages = LANGUAGES.filter((l) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      l.name.toLowerCase().includes(q) ||
      l.nativeName.toLowerCase().includes(q) ||
      l.country.toLowerCase().includes(q) ||
      l.code.toLowerCase().includes(q)
    );
  });

  // Mobile list view
  if (variant === "mobile") {
    return (
      <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#E5A83B", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Select Language ({LANGUAGES.length} Countries)
          </span>
          <span style={{ fontSize: "12px", color: "#e3d7cc" }}>
            {currentLang.flag} {currentLang.nativeName}
          </span>
        </div>

        {/* Quick popular flag buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "10px" }}>
          {LANGUAGES.filter((l) => l.popular).map((l) => {
            const isSelected = l.code === selectedCode;
            return (
              <button
                key={l.code}
                type="button"
                onClick={() => handleSelectLanguage(l.code)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "5px 10px",
                  borderRadius: "14px",
                  fontSize: "11.5px",
                  fontWeight: 700,
                  backgroundColor: isSelected ? "#E5A83B" : "rgba(255,255,255,0.08)",
                  color: isSelected ? "#2C170A" : "#FFFFFF",
                  border: isSelected ? "1px solid #E5A83B" : "1px solid rgba(255,255,255,0.15)",
                  cursor: "pointer",
                }}
              >
                <span>{l.flag}</span>
                <span>{l.code.toUpperCase()}</span>
              </button>
            );
          })}
        </div>

        {/* Expandable all languages dropdown */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(229, 168, 59, 0.3)",
            color: "#FFFFFF",
            padding: "8px 14px",
            borderRadius: "10px",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Globe size={15} style={{ color: "#E5A83B" }} />
            <span>More Languages ({LANGUAGES.length} Total)</span>
          </div>
          <ChevronDown size={16} style={{ transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
        </button>

        {isOpen && (
          <div
            style={{
              maxHeight: "220px",
              overflowY: "auto",
              marginTop: "8px",
              backgroundColor: "rgba(20, 10, 4, 0.95)",
              borderRadius: "10px",
              border: "1px solid rgba(200, 138, 46, 0.25)",
              padding: "6px",
            }}
          >
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => handleSelectLanguage(l.code)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px 10px",
                  borderRadius: "6px",
                  backgroundColor: l.code === selectedCode ? "rgba(229, 168, 59, 0.2)" : "transparent",
                  color: "#FFFFFF",
                  border: "none",
                  fontSize: "12px",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "15px" }}>{l.flag}</span>
                  <div>
                    <div style={{ fontWeight: 700 }}>{l.nativeName}</div>
                    <div style={{ fontSize: "10px", color: "#a8988b" }}>{l.country}</div>
                  </div>
                </div>
                {l.code === selectedCode && <Check size={14} style={{ color: "#E5A83B" }} />}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={dropdownRef} style={{ position: "relative", display: "inline-block" }}>
      {/* TRIGGER BUTTON (Styled luxury badge) */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select Country Language"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          height: variant === "topbar" ? "30px" : "38px",
          padding: variant === "topbar" ? "0 12px" : "0 14px",
          borderRadius: variant === "topbar" ? "15px" : "20px",
          backgroundColor: variant === "topbar" ? "rgba(255, 255, 255, 0.12)" : "#FAF2E6",
          color: variant === "topbar" ? "#FFFFFF" : "#5C341B",
          border: variant === "topbar" ? "1px solid rgba(229, 168, 59, 0.45)" : "1px solid #E2D2BD",
          fontSize: "12.5px",
          fontWeight: 700,
          cursor: "pointer",
          whiteSpace: "nowrap",
          transition: "all 0.2s ease",
          boxShadow: isOpen ? "0 0 0 2px rgba(229, 168, 59, 0.3)" : "none",
        }}
        onMouseEnter={(e) => {
          if (variant === "topbar") {
            (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(229, 168, 59, 0.25)";
          } else {
            (e.currentTarget as HTMLElement).style.backgroundColor = "#F5E6D0";
          }
        }}
        onMouseLeave={(e) => {
          if (variant === "topbar") {
            (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255, 255, 255, 0.12)";
          } else {
            (e.currentTarget as HTMLElement).style.backgroundColor = "#FAF2E6";
          }
        }}
      >
        <Globe size={14} style={{ color: variant === "topbar" ? "#E5A83B" : "#C88A2E" }} />
        <span style={{ fontSize: "14px", lineHeight: 1 }}>{currentLang.flag}</span>
        <span style={{ fontWeight: 800 }}>{currentLang.nativeName}</span>
        <ChevronDown
          size={13}
          style={{
            transform: isOpen ? "rotate(180deg)" : "none",
            transition: "transform 0.2s ease",
            opacity: 0.8,
          }}
        />
      </button>

      {/* DROPDOWN POPOVER PANEL */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: 0,
            width: "360px",
            maxWidth: "92vw",
            backgroundColor: "#FFFFFF",
            borderRadius: "18px",
            border: "1px solid #EFE4D2",
            boxShadow: "0 20px 45px rgba(44, 23, 10, 0.2)",
            padding: "16px",
            zIndex: 100000,
            color: "#2C170A",
            animation: "fadeInDown 0.18s ease-out",
          }}
        >
          {/* Header & Close */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <Globe size={16} style={{ color: "#C88A2E" }} />
              <span style={{ fontSize: "13.5px", fontWeight: 800, color: "#2C170A" }}>
                Select Language / देश की भाषा
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "#8C5318",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
              }}
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          {/* Quick Filter Search Bar */}
          <div
            style={{
              position: "relative",
              marginBottom: "12px",
            }}
          >
            <Search size={14} style={{ position: "absolute", left: "10px", top: "10px", color: "#8C5318" }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search language or country..."
              autoFocus
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "8px 12px 8px 32px",
                borderRadius: "10px",
                border: "1px solid #E2D2BD",
                backgroundColor: "#FAF6EE",
                fontSize: "12.5px",
                color: "#2C170A",
                outline: "none",
              }}
            />
          </div>

          {/* Top Export Countries Quick-Pick Pills */}
          {!searchQuery && (
            <div style={{ marginBottom: "12px" }}>
              <div style={{ fontSize: "10.5px", fontWeight: 700, color: "#8C5318", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>
                Top Trading Markets
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {LANGUAGES.filter((l) => l.popular).map((l) => {
                  const isSelected = l.code === selectedCode;
                  return (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => handleSelectLanguage(l.code)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                        padding: "4px 9px",
                        borderRadius: "14px",
                        fontSize: "11px",
                        fontWeight: 700,
                        backgroundColor: isSelected ? "#5C341B" : "#FAF5EC",
                        color: isSelected ? "#FFFFFF" : "#361C0D",
                        border: isSelected ? "1px solid #5C341B" : "1px solid #EAE0D0",
                        cursor: "pointer",
                        transition: "all 0.15s ease",
                      }}
                    >
                      <span>{l.flag}</span>
                      <span>{l.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Scrollable List of All Country Languages */}
          <div
            style={{
              maxHeight: "260px",
              overflowY: "auto",
              paddingRight: "4px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {filteredLanguages.length === 0 ? (
              <div style={{ padding: "16px", textAlign: "center", fontSize: "12px", color: "#8C5318" }}>
                No languages found matching &ldquo;{searchQuery}&rdquo;
              </div>
            ) : (
              filteredLanguages.map((l) => {
                const isSelected = l.code === selectedCode;
                return (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => handleSelectLanguage(l.code)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 12px",
                      borderRadius: "10px",
                      backgroundColor: isSelected ? "#FAF2E6" : "transparent",
                      border: isSelected ? "1px solid #C88A2E" : "1px solid transparent",
                      color: "#2C170A",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        (e.currentTarget as HTMLElement).style.backgroundColor = "#FAF8F5";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontSize: "20px", lineHeight: 1 }}>{l.flag}</span>
                      <div>
                        <div style={{ fontSize: "13px", fontWeight: isSelected ? 800 : 700, color: "#2C170A" }}>
                          {l.nativeName} <span style={{ fontSize: "11px", fontWeight: 500, color: "#776254" }}>({l.name})</span>
                        </div>
                        <div style={{ fontSize: "10.5px", color: "#8C5318" }}>{l.country}</div>
                      </div>
                    </div>
                    {isSelected && <Check size={16} style={{ color: "#C88A2E" }} />}
                  </button>
                );
              })
            )}
          </div>

          {/* Bottom Note */}
          <div
            style={{
              marginTop: "10px",
              paddingTop: "8px",
              borderTop: "1px solid #EFE4D2",
              fontSize: "11px",
              color: "#776254",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>Instant Translation Powered</span>
            <button
              type="button"
              onClick={() => handleSelectLanguage("en")}
              style={{
                background: "none",
                border: "none",
                color: "#C88A2E",
                fontWeight: 700,
                fontSize: "11px",
                cursor: "pointer",
                padding: 0,
                textDecoration: "underline",
              }}
            >
              Reset English
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
