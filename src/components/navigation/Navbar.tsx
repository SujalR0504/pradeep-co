"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "ABOUT", href: "/#about" },
  { name: "PRODUCTS", href: "/#products" },
  { name: "QUALITY", href: "/#quality" },
  { name: "PROCESS", href: "/#process" },
  { name: "GLOBAL REACH", href: "/#global-export" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FFFDF9]/95 backdrop-blur-sm border-b border-[#5A3218]/12 shadow-[0_2px_12px_rgba(90,50,24,0.04)] ${
        isScrolled ? "py-2.5 sm:py-3" : "py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link href="/" className="inline-flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-xl bg-[#5A3218] p-1.5 flex items-center justify-center shadow-xs transition-transform group-hover:scale-105 duration-200">
            <Image
              src="/images/logo/logo-light.png"
              alt="Pradeep Trading Company"
              width={26}
              height={26}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#5A3218] leading-none">
              PRADEEP TRADING CO.
            </span>
            <span className="text-[10px] font-sans font-medium tracking-[0.18em] text-[#A16B3C] uppercase mt-0.5">
              GROUNDNUTS &amp; PEANUTS • INDIA
            </span>
          </div>
        </Link>

        {/* Center: Clean Minimal Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-sans tracking-[0.14em] font-semibold text-[#26180E]/80 hover:text-[#5A3218] transition-colors py-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: GET A QUOTE Button */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#5A3218] text-[#FFFDF9] hover:bg-[#754522] text-xs font-sans font-bold tracking-wider uppercase transition-all shadow-xs hover:shadow-md cursor-pointer"
          >
            <span>GET A QUOTE</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D7B88F]" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#26180E] hover:text-[#5A3218] hover:bg-[#5A3218]/5 transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[62px] z-40 bg-[#FFFDF9] border-b border-[#5A3218]/15 flex flex-col justify-between p-8 lg:hidden animate-in fade-in duration-150">
          <div className="max-w-md w-full mx-auto space-y-6">
            <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#A16B3C] font-semibold">
              NAVIGATION
            </div>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-2xl text-[#26180E] hover:text-[#5A3218] transition-colors block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-[#5A3218]/10">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#5A3218] text-[#FFFDF9] text-xs font-sans font-bold uppercase tracking-wider shadow-xs"
              >
                <span>GET A QUOTE</span>
                <ArrowUpRight className="w-4 h-4 text-[#D7B88F]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
