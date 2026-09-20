"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  Layers,
  Award,
  Package,
  ShieldCheck,
} from "lucide-react";
import { gsap } from "gsap";
import { COMPANY_INFO } from "@/data/company";

const NAV_PAGES = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Nut Journey", href: "/nut-journey" },
  { name: "Products", href: "/products", hasMegaMenu: true },
  { name: "Services", href: "/services" },
  { name: "Health Benefits", href: "/health-benefits" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const MEGA_CATEGORIES = [
  {
    title: "RAW KERNELS",
    items: [
      { name: "Bold Peanuts (Singdana)", href: "/products/bold-peanuts", badge: "38/42, 40/50, 50/60" },
      { name: "Java Peanuts (Spanish)", href: "/products/java-peanuts", badge: "50/60, 60/70, 70/80" },
      { name: "Red Skin Peanuts (TJ)", href: "/products/bold-peanuts", badge: "Antioxidant Rich" },
    ],
  },
  {
    title: "PROCESSED & IN-SHELL",
    items: [
      { name: "Blanched Peanuts", href: "/products/blanched-peanuts", badge: "Whole & Split" },
      { name: "Roasted Peanuts", href: "/products/roasted-peanuts", badge: "Custom Roast" },
      { name: "In-Shell Groundnuts", href: "/products/inshell-groundnuts", badge: "Jumbo Pods" },
    ],
  },
  {
    title: "PEANUT DERIVATIVES",
    items: [
      { name: "Cold-Pressed Peanut Oil", href: "/products/peanut-oil", badge: "Virgin Extraction" },
      { name: "Pure Peanut Butter", href: "/products/peanut-butter", badge: "Creamy & Crunchy" },
    ],
  },
  {
    title: "SPECIALTY BRANDS",
    items: [
      { name: "King Brand Sortex Singdana", href: "/products/king-brand-singdana", badge: "50kg Jute Sacks" },
      { name: "Samman Organic Peanuts", href: "/products/samman-peanuts", badge: "Double-Sortex Vacuum" },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const header = headerRef.current;
      if (!header) return;

      if (currentScrollY > 40) {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY.current && currentScrollY > 180) {
          gsap.to(header, { yPercent: -100, duration: 0.35, ease: "power2.out" });
        } else {
          gsap.to(header, { yPercent: 0, duration: 0.35, ease: "power2.out" });
        }
      } else {
        setIsScrolled(false);
        gsap.to(header, { yPercent: 0, duration: 0.25, ease: "power2.out" });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FFFDF8]/95 backdrop-blur-md border-b border-[#5A3218]/15 py-3 shadow-[0_4px_25px_rgba(90,50,24,0.06)]"
            : "bg-[#FFFDF8]/85 backdrop-blur-sm border-b border-[#5A3218]/10 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo on Left: Balaji Exports */}
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#5A3218] flex items-center justify-center text-[#FFFDF8] font-serif font-bold text-lg shadow-sm group-hover:bg-[#7A4824] transition-colors">
                B
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#5A3218] leading-none group-hover:text-[#7A4824] transition-colors">
                  BALAJI EXPORTS
                </span>
                <span className="text-[9px] font-mono tracking-[0.2em] text-[#7A4824] uppercase mt-0.5">
                  GROUNDNUTS &amp; PEANUTS • INDIA
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {NAV_PAGES.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasMegaMenu) {
                return (
                  <div
                    key={link.name}
                    className="relative py-2"
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                  >
                    <button
                      onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                      className={`inline-flex items-center gap-1 text-xs uppercase font-sans tracking-[0.14em] font-semibold transition-colors cursor-pointer py-1 ${
                        pathname.startsWith("/products")
                          ? "text-[#5A3218] font-bold"
                          : "text-[#2E2117]/80 hover:text-[#5A3218]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          megaMenuOpen ? "rotate-180 text-[#5A3218]" : ""
                        }`}
                      />
                    </button>

                    {/* Products Mega-Menu Overlay */}
                    {megaMenuOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-[#FFFDF8] border border-[#5A3218]/15 rounded-2xl shadow-2xl p-6 grid grid-cols-4 gap-5 animate-in fade-in slide-in-from-top-2 duration-200">
                        {MEGA_CATEGORIES.map((cat, idx) => (
                          <div key={idx} className="space-y-2.5">
                            <span className="text-[10px] font-mono font-bold tracking-wider text-[#7A4824] uppercase block border-b border-[#5A3218]/10 pb-1.5">
                              {cat.title}
                            </span>
                            <ul className="space-y-2">
                              {cat.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link
                                    href={item.href}
                                    className="group/item block text-xs font-sans text-[#2E2117] hover:text-[#5A3218] transition-colors"
                                  >
                                    <div className="font-medium group-hover/item:translate-x-0.5 transition-transform">
                                      {item.name}
                                    </div>
                                    <div className="text-[9px] font-mono text-[#7A4824]/70">
                                      {item.badge}
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        <div className="col-span-4 pt-3 mt-1 border-t border-[#5A3218]/10 flex items-center justify-between text-[11px] font-mono text-[#7A4824]">
                          <span>CALIBRATED SIZING: 38/42 TO 70/80 COUNTS/OZ</span>
                          <Link
                            href="/products"
                            className="inline-flex items-center gap-1 font-bold text-[#5A3218] hover:underline"
                          >
                            <span>VIEW FULL CATALOG</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase font-sans tracking-[0.14em] font-semibold transition-colors relative py-1 ${
                    isActive
                      ? "text-[#5A3218] font-bold border-b-2 border-[#5A3218]"
                      : "text-[#2E2117]/80 hover:text-[#5A3218]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#5A3218] text-[#FFFDF8] hover:bg-[#7A4824] text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-sm hover:shadow cursor-pointer"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D5B58C]" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#2E2117] hover:text-[#5A3218] hover:bg-[#5A3218]/10 transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FFFDF8] text-[#2E2117] flex flex-col justify-between p-8 pt-24 xl:hidden overflow-y-auto">
          <div className="max-w-md w-full mx-auto space-y-6">
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#7A4824] font-bold">
              BALAJI EXPORTS NAVIGATION
            </div>

            <ul className="space-y-4">
              {NAV_PAGES.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-2xl sm:text-3xl text-[#2E2117] hover:text-[#5A3218] transition-colors block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-[#5A3218]/15 space-y-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#5A3218] text-[#FFFDF8] text-xs font-mono font-bold uppercase tracking-wider shadow-md"
              >
                <span>REQUEST EXPORT QUOTE</span>
                <ArrowUpRight className="w-4 h-4 text-[#D5B58C]" />
              </Link>
            </div>
          </div>

          <div className="max-w-md w-full mx-auto pt-6 border-t border-[#5A3218]/15 flex items-center justify-between text-xs text-[#2E2117]/70 font-mono">
            <span>Shivpuri (M.P.), India</span>
            <a href={`tel:${COMPANY_INFO.contact.primaryPhone}`} className="text-[#5A3218] font-bold">
              {COMPANY_INFO.contact.formattedPhone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
