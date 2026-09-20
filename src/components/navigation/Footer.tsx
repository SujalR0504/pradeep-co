"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Globe, ShieldCheck, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-[#F7F1E7] text-[#2E2117] border-t border-[#5A3218]/15 relative overflow-hidden pt-16 lg:pt-20 pb-12">
      {/* Subtle agricultural grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#5A3218_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Top Header: Brand Name & Global Export Telemetry */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-10 border-b border-[#5A3218]/15 gap-6">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#5A3218] flex items-center justify-center text-[#FFFDF8] font-serif font-bold text-xl shadow-sm">
              P
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#5A3218] block leading-none">
                PRADEEP TRADING COMPANY
              </span>
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#7A4824] uppercase mt-1 block">
                PREMIER GROUNDNUT &amp; PEANUT EXPORTER • INDIA
              </span>
            </div>
          </Link>

          {/* Worldwide Export Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FFFDF8] border border-[#5A3218]/20 text-xs font-mono text-[#5A3218] shadow-sm">
            <Globe className="w-3.5 h-3.5 text-[#5A3218] animate-spin [animation-duration:20s]" />
            <span>EXPORTING TO 35+ COMMODITY DESTINATIONS ACROSS ASIA, EUROPE &amp; MIDDLE EAST</span>
          </div>
        </div>

        {/* 5 Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12 border-b border-[#5A3218]/15 text-xs font-light">
          {/* Col 1: About Company */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A4824] font-bold block">
              ABOUT PRADEEP TRADING COMPANY
            </span>
            <p className="text-xs text-[#2E2117]/80 leading-relaxed">
              65+ years of agricultural farming expertise and a 4 MT/hour double-sortex processing facility in
              Shivpuri, delivering international export-grade peanuts with strict count calibration and guaranteed
              aflatoxin compliance.
            </p>
            <div className="pt-2">
              <span className="inline-block text-[10px] font-mono text-[#5A3218] font-bold bg-[#5A3218]/10 px-2.5 py-1 rounded-full">
                4 MT/HR PROCESSING CAPACITY
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A4824] font-bold block">
              EXPLORE
            </span>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <Link href="/" className="hover:text-[#5A3218] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#5A3218] transition-colors">
                  About Us (65+ Yrs)
                </Link>
              </li>
              <li>
                <Link href="/nut-journey" className="hover:text-[#5A3218] transition-colors">
                  Nut Journey (Farm to Port)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#5A3218] transition-colors">
                  Export Services
                </Link>
              </li>
              <li>
                <Link href="/health-benefits" className="hover:text-[#5A3218] transition-colors">
                  Health &amp; Nutrition
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-[#5A3218] transition-colors">
                  Market Insights &amp; Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#5A3218] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Peanut Products */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A4824] font-bold block">
              PRODUCTS
            </span>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <Link href="/products/bold-peanuts" className="hover:text-[#5A3218] transition-colors">
                  Bold Peanuts (Singdana)
                </Link>
              </li>
              <li>
                <Link href="/products/java-peanuts" className="hover:text-[#5A3218] transition-colors">
                  Java Peanuts (Spanish)
                </Link>
              </li>
              <li>
                <Link href="/products/blanched-peanuts" className="hover:text-[#5A3218] transition-colors">
                  Blanched Whole &amp; Split
                </Link>
              </li>
              <li>
                <Link href="/products/inshell-groundnuts" className="hover:text-[#5A3218] transition-colors">
                  In-Shell Groundnuts
                </Link>
              </li>
              <li>
                <Link href="/products/peanut-oil" className="hover:text-[#5A3218] transition-colors">
                  Cold-Pressed Peanut Oil
                </Link>
              </li>
              <li>
                <Link href="/products/peanut-butter" className="hover:text-[#5A3218] transition-colors">
                  Pure Peanut Butter
                </Link>
              </li>
              <li>
                <Link href="/products/king-brand-singdana" className="hover:text-[#5A3218] transition-colors font-medium text-[#5A3218]">
                  King Brand Export Sacks
                </Link>
              </li>
              <li>
                <Link href="/products/samman-peanuts" className="hover:text-[#5A3218] transition-colors font-medium text-[#5A3218]">
                  Samman Organic Vacuum
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Export Services & Ports */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A4824] font-bold block">
              EXPORT &amp; LOGISTICS
            </span>
            <ul className="space-y-2 text-xs font-sans text-[#2E2117]/85">
              <li>Mundra Port (INMUN1) Gateway</li>
              <li>Nhava Sheva (INNSA1) Gateway</li>
              <li>ISPM-15 Heat-Treated Palletization</li>
              <li>Phosphine &amp; MBr Fumigation</li>
              <li>Container Desiccant Protection</li>
              <li>SGS &amp; Geo-Chem Inspection</li>
              <li>FOB / CIF / CFR Trade Terms</li>
            </ul>
          </div>

          {/* Col 5: Contact Desk */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A4824] font-bold block">
              CONTACT DESK
            </span>
            <div className="space-y-2 text-xs font-mono text-[#2E2117]/85">
              <div>
                <span className="text-[10px] text-[#7A4824] block">FACTORY &amp; MANDI OFFICE:</span>
                <p className="font-sans text-xs">Bhonti, Dist. Shivpuri, Madhya Pradesh - 473551, India</p>
              </div>
              <div>
                <span className="text-[10px] text-[#7A4824] block">PHONE:</span>
                <a href={`tel:${COMPANY_INFO.contact.primaryPhone}`} className="hover:text-[#5A3218] font-bold">
                  {COMPANY_INFO.contact.formattedPhone}
                </a>
              </div>
              <div>
                <span className="text-[10px] text-[#7A4824] block">EMAIL:</span>
                <a href={`mailto:${COMPANY_INFO.contact.exportEmail}`} className="hover:text-[#5A3218] font-bold">
                  {COMPANY_INFO.contact.exportEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#7A4824] gap-4">
          <div>
            &copy; {new Date().getFullYear()} Pradeep Trading Company. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>APEDA CERTIFIED</span>
            <span>•</span>
            <span>FSSAI LICENSED</span>
            <span>•</span>
            <span>ISO 22000 COMPLIANT</span>
          </div>
        </div>
      </div>

      {/* FINAL REQUIREMENT 22: ANIMATED PEANUT SLOWLY MOVING ACROSS FOOTER BASELINE */}
      <div className="w-full h-8 relative overflow-hidden mt-6 pointer-events-none border-t border-[#5A3218]/10 bg-[#5A3218]/5">
        <div className="absolute top-1/2 -translate-y-1/2 flex items-center gap-2 animate-[footerPeanutCrawl_32s_linear_infinite]">
          <span className="text-[9px] font-mono tracking-widest text-[#7A4824]/70 uppercase">
            FROM SHIVPURI SOIL TO GLOBAL DESTINATIONS
          </span>
          <div className="w-5 h-8 relative">
            <Image
              src="/images/single-kernel-cutout.png"
              alt="Pradeep Trading Company Groundnut Kernel"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes footerPeanutCrawl {
          0% {
            transform: translateX(-150px) translateY(-50%);
          }
          100% {
            transform: translateX(100vw) translateY(-50%);
          }
        }
      `}</style>
    </footer>
  );
}
