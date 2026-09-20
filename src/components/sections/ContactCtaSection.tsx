"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail, ShieldCheck, Package, Globe, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface ContactCtaProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function ContactCtaSection({
  title = "READY TO DISCUSS YOUR PEANUT REQUIREMENTS?",
  subtitle = "Direct farm procurement, double-sortex cleaning, calibrated sizing, and certified FCL container delivery to over 35 countries.",
  className = "",
}: ContactCtaProps) {
  const PILLARS = [
    { title: "Bulk Export Orders", desc: "19 to 27.5 MT container payloads" },
    { title: "Product Enquiry", desc: "Bold, Java, Blanched & In-Shell" },
    { title: "Export Logistics", desc: "FOB Mundra / CIF global destination" },
    { title: "Custom Packaging", desc: "Jute bags, vacuum packs & jumbo totes" },
  ];

  return (
    <section className={`relative w-full py-20 lg:py-28 bg-[#5A3218] text-[#FFFDF8] overflow-hidden ${className}`}>
      {/* Subtle organic background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(165,107,58,0.25)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,253,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,253,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Call to Action Header */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFDF8]/10 border border-[#D5B58C]/30 text-[11px] font-mono tracking-widest text-[#D5B58C] uppercase">
              <Globe className="w-3.5 h-3.5 text-[#D5B58C]" />
              <span>BALAJI EXPORTS • B2B GLOBAL TRADE DESK</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight text-[#FFFDF8]">
              {title}
            </h2>

            <p className="text-sm sm:text-base font-sans text-[#FFFDF8]/80 max-w-xl leading-relaxed font-light">
              {subtitle}
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {PILLARS.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-black/20 border border-[#D5B58C]/20 backdrop-blur-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D5B58C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono font-bold text-[#FFFDF8]">{p.title}</div>
                    <div className="text-[11px] text-[#FFFDF8]/70 font-sans">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#D5B58C] text-[#5A3218] hover:bg-[#F7F1E7] text-xs font-mono font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact?intent=quote"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FFFDF8]/10 border border-[#FFFDF8]/25 text-[#FFFDF8] hover:bg-[#FFFDF8]/20 text-xs font-mono font-semibold uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>REQUEST A QUOTE</span>
              </Link>
            </div>
          </div>

          {/* Right: Quick Direct Contact Card */}
          <div className="lg:col-span-5 bg-[#7A4824]/80 border border-[#D5B58C]/30 rounded-3xl p-7 sm:p-8 backdrop-blur-md shadow-2xl space-y-6">
            <div className="border-b border-[#D5B58C]/20 pb-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D5B58C] font-bold block mb-1">
                DIRECT EXPORT DESK
              </span>
              <h3 className="font-serif text-2xl text-[#FFFDF8] font-medium">
                Shivpuri Processing &amp; Port Office
              </h3>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-center gap-3 text-[#FFFDF8]/90">
                <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-[#D5B58C]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#D5B58C]/80">PHONE / WHATSAPP</div>
                  <a href={`tel:${COMPANY_INFO.contact.primaryPhone}`} className="hover:text-[#D5B58C] transition-colors font-bold">
                    {COMPANY_INFO.contact.formattedPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[#FFFDF8]/90">
                <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-[#D5B58C]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#D5B58C]/80">EXPORT ENQUIRIES</div>
                  <a href={`mailto:${COMPANY_INFO.contact.exportEmail}`} className="hover:text-[#D5B58C] transition-colors font-bold">
                    {COMPANY_INFO.contact.exportEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[#FFFDF8]/90">
                <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-[#D5B58C]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#D5B58C]/80">DISPATCH CERTIFICATION</div>
                  <span className="font-bold">Mundra Port (INMUN1) • FSSAI • APEDA</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#D5B58C]/20 flex items-center justify-between text-[10px] font-mono text-[#D5B58C]/80">
              <span>RESPONSE TIME: &lt; 4 HOURS</span>
              <span>CIF / FOB / CFR READY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
