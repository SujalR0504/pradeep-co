"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Globe, ShieldCheck, ArrowRight, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-[#F3EBDD] text-[#26180E] border-t border-[#623719]/15 relative overflow-hidden pt-16 lg:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-12">
        {/* Top Header: Logo + Short description + Get a Quote CTA */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-10 border-b border-[#623719]/15 gap-8">
          <div className="space-y-3 max-w-xl">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#623719] flex items-center justify-center text-[#FAF7F1] font-serif font-bold text-xl shadow-xs">
                P
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-[#623719] block leading-none">
                  PRADEEP TRADING COMPANY
                </span>
                <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#8A5834] uppercase mt-1 block">
                  BENCHMARK PEANUT &amp; GROUNDNUT EXPORTER • INDIA
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm font-sans text-[#26180E]/80 leading-relaxed font-normal">
              Processor and global exporter of calibrated bold, java, and blanched groundnuts from Bhonti, Shivpuri (M.P.), operating modern 4 MT/hr double-sortex cleaning plants serving 35+ countries.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#623719] text-[#FAF7F1] hover:bg-[#8A5834] text-xs font-sans font-bold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4 text-[#FAF7F1]" />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF7F1] text-[#623719] hover:bg-[#FAF7F1]/80 border border-[#623719]/20 text-xs font-sans font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>PRODUCTS</span>
              <ArrowUpRight className="w-4 h-4 text-[#623719]" />
            </Link>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-4 border-b border-[#623719]/15 text-xs">
          {/* Quick Links */}
          <div className="space-y-3">
            <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#8A5834] block">
              QUICK LINKS
            </span>
            <ul className="space-y-2 text-xs font-sans text-[#26180E]/80">
              <li>
                <Link href="/" className="hover:text-[#623719] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#623719] transition-colors">
                  About Us (65+ Years)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#623719] transition-colors">
                  Export Services
                </Link>
              </li>
              <li>
                <Link href="/nut-journey" className="hover:text-[#623719] transition-colors">
                  Process Journey
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#623719] transition-colors">
                  Contact &amp; RFQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-3">
            <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#8A5834] block">
              PRODUCTS
            </span>
            <ul className="space-y-2 text-xs font-sans text-[#26180E]/80">
              <li>
                <Link href="/products/bold-peanuts" className="hover:text-[#623719] transition-colors">
                  Bold Peanuts (Singdana)
                </Link>
              </li>
              <li>
                <Link href="/products/java-peanuts" className="hover:text-[#623719] transition-colors">
                  Java Peanuts
                </Link>
              </li>
              <li>
                <Link href="/products/blanched-peanuts" className="hover:text-[#623719] transition-colors">
                  Whole Blanched Peanuts
                </Link>
              </li>
              <li>
                <Link href="/products/inshell-groundnuts" className="hover:text-[#623719] transition-colors">
                  In-Shell Groundnuts
                </Link>
              </li>
              <li>
                <Link href="/products/king-brand-singdana" className="hover:text-[#623719] transition-colors font-medium text-[#623719]">
                  King Brand Singdana
                </Link>
              </li>
              <li>
                <Link href="/products/samman-peanuts" className="hover:text-[#623719] transition-colors font-medium text-[#623719]">
                  Samman Peanut Brand
                </Link>
              </li>
            </ul>
          </div>

          {/* Export Gateways */}
          <div className="space-y-3">
            <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#8A5834] block">
              LOGISTICS
            </span>
            <ul className="space-y-2 text-xs font-sans text-[#26180E]/80">
              <li>Mundra Port (INMUN1)</li>
              <li>Nhava Sheva (INNSA1)</li>
              <li>20ft / 40ft FCL Logistics</li>
              <li>Jute Sacks &amp; Vacuum Cartons</li>
              <li>ISPM-15 Heat-Treated Pallets</li>
              <li>SGS &amp; Geo-Chem Inspection</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#8A5834] block">
              CONTACT
            </span>
            <div className="space-y-2.5 text-xs font-sans text-[#26180E]/80">
              <div>
                <span className="text-[10px] text-[#8A5834] font-bold block uppercase">FACILITY:</span>
                <p>Bhonti, Dist. Shivpuri, Madhya Pradesh - 473551, India</p>
              </div>
              <div>
                <span className="text-[10px] text-[#8A5834] font-bold block uppercase">PHONE / WHATSAPP:</span>
                <a href={`tel:${COMPANY_INFO.contact.primaryPhone}`} className="hover:text-[#623719] font-bold text-[#623719]">
                  {COMPANY_INFO.contact.formattedPhone}
                </a>
              </div>
              <div>
                <span className="text-[10px] text-[#8A5834] font-bold block uppercase">EMAIL:</span>
                <a href={`mailto:${COMPANY_INFO.contact.exportEmail}`} className="hover:text-[#623719] font-bold text-[#623719]">
                  {COMPANY_INFO.contact.exportEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-[#8A5834] gap-4">
          <div>
            &copy; {new Date().getFullYear()} Pradeep Trading Company. All rights reserved.
          </div>

          <div className="flex items-center gap-3 text-[11px] font-mono">
            <span>APEDA CERTIFIED</span>
            <span>•</span>
            <span>FSSAI LICENSED</span>
            <span>•</span>
            <span>ISO 22000</span>
          </div>
        </div>
      </div>

      {/* 24. Subtle peanut line animation across footer baseline */}
      <div className="w-full h-6 relative overflow-hidden mt-8 pointer-events-none border-t border-[#623719]/10 bg-[#623719]/5">
        <div className="absolute top-1/2 -translate-y-1/2 flex items-center gap-2 animate-[footerPeanutCrawl_36s_linear_infinite]">
          <span className="text-[9px] font-sans tracking-[0.2em] text-[#8A5834]/80 uppercase font-semibold">
            PRADEEP TRADING COMPANY • BHONTI, SHIVPURI TO GLOBAL DESTINATIONS
          </span>
          <div className="w-4 h-6 relative">
            <Image
              src="/images/single-kernel-cutout.png"
              alt="Peanut Kernel"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes footerPeanutCrawl {
          0% {
            transform: translateX(-180px) translateY(-50%);
          }
          100% {
            transform: translateX(100vw) translateY(-50%);
          }
        }
      `}</style>
    </footer>
  );
}
