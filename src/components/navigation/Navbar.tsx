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
  { name: "GLOBAL EXPORT", href: "/#global-export" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-[#FAF7F1] border-b border-[#623719]/10 shadow-[0_1px_6px_rgba(98,55,25,0.04)] ${
        isScrolled ? "py-3" : "py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Clean Brand Logo */}
        <Link href="/" className="inline-flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-lg bg-[#623719] p-1.5 flex items-center justify-center shadow-xs">
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
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#623719] leading-none">
              PRADEEP TRADING CO.
            </span>
            <span className="text-[10px] font-sans font-medium tracking-[0.18em] text-[#8A5834] uppercase mt-0.5">
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
              className="text-xs font-sans tracking-[0.14em] font-semibold text-[#26180E]/80 hover:text-[#623719] transition-colors py-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: GET A QUOTE Button */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#623719] text-[#FAF7F1] hover:bg-[#8A5834] text-xs font-sans font-bold tracking-wider uppercase transition-colors shadow-xs"
          >
            <span>GET A QUOTE</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#F3EBDD]" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#26180E] hover:text-[#623719] hover:bg-[#623719]/5 transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-[#FAF7F1] border-b border-[#623719]/15 flex flex-col justify-between p-8 lg:hidden animate-in fade-in duration-150">
          <div className="max-w-md w-full mx-auto space-y-6">
            <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#8A5834] font-semibold">
              NAVIGATION
            </div>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-2xl text-[#26180E] hover:text-[#623719] transition-colors block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-[#623719]/10">
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#623719] text-[#FAF7F1] text-xs font-sans font-bold uppercase tracking-wider"
              >
                <span>GET A QUOTE</span>
                <ArrowUpRight className="w-4 h-4 text-[#F3EBDD]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
