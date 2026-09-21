"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone, Mail, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface ContactCtaProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function ContactCtaSection({
  title = "READY TO TAKE\nYOUR PEANUT BUSINESS\nGLOBAL?",
  subtitle = "Direct farm procurement, double-sortex cleaning, calibrated sizing, and certified FCL container delivery to over 35 countries.",
  className = "",
}: ContactCtaProps) {
  const PILLARS = [
    { title: "Bulk Export Orders", desc: "19 to 27.5 MT container payloads" },
    { title: "Product Calibration", desc: "Bold, Java, Blanched & In-Shell" },
    { title: "Export Gateways", desc: "FOB Mundra / CIF global destinations" },
    { title: "Custom Packaging", desc: "Jute bags, vacuum cartons & jumbo totes" },
  ];

  return (
    <section
      id="contact-cta"
      className={`relative w-full py-20 lg:py-28 bg-[#623719] text-[#FAF7F1] overflow-hidden ${className}`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Call to Action Header */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#F3EBDD] uppercase block">
              B2B EXPORT TRADE DESK
            </span>

            <h2 className="font-serif text-[38px] sm:text-[50px] lg:text-[62px] font-normal leading-[1.06] tracking-tight text-[#FAF7F1] whitespace-pre-line">
              {title}
            </h2>

            <p className="text-base sm:text-lg font-sans text-[#F3EBDD]/90 max-w-xl leading-relaxed font-normal">
              {subtitle}
            </p>

            {/* CTAs: GET A QUOTE & CONTACT US */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FAF7F1] text-[#623719] hover:bg-[#F3EBDD] text-xs font-sans font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-4 h-4 text-[#623719]" />
              </Link>

              <Link
                href={`tel:${COMPANY_INFO.contact.primaryPhone}`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-transparent border border-[#FAF7F1]/40 text-[#FAF7F1] hover:bg-[#FAF7F1]/10 text-xs font-sans font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>CONTACT US</span>
                <ArrowUpRight className="w-4 h-4 text-[#FAF7F1]" />
              </Link>
            </div>
          </div>

          {/* Right: Quick Inquiry Box */}
          <div className="lg:col-span-5 bg-[#FAF7F1] text-[#26180E] p-8 rounded-3xl border border-[#623719]/15 shadow-sm space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-sans font-bold tracking-wider text-[#8A5834] uppercase block">
                DIRECT EXPORT INQUIRY
              </span>
              <h3 className="font-serif text-2xl text-[#623719]">
                Connect with Trade Desk
              </h3>
              <p className="text-xs text-[#26180E]/75 font-sans leading-relaxed">
                Receive lot specifications, current Mandi rates, and container freight schedules from Bhonti, Shivpuri.
              </p>
            </div>

            <div className="space-y-3 pt-1 text-sm font-sans">
              <a
                href={`tel:${COMPANY_INFO.contact.primaryPhone}`}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F3EBDD]/40 border border-[#623719]/10 hover:bg-[#F3EBDD] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#623719] text-[#FAF7F1] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#8A5834] uppercase font-semibold">
                    DIRECT PHONE / WHATSAPP
                  </div>
                  <div className="font-bold text-[#623719]">
                    {COMPANY_INFO.contact.formattedPhone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.contact.exportEmail}`}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F3EBDD]/40 border border-[#623719]/10 hover:bg-[#F3EBDD] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#623719] text-[#FAF7F1] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#8A5834] uppercase font-semibold">
                    EXPORT DESK EMAIL
                  </div>
                  <div className="font-bold text-[#623719]">
                    {COMPANY_INFO.contact.exportEmail}
                  </div>
                </div>
              </a>
            </div>

            {/* Quick Badges */}
            <div className="pt-2 border-t border-[#623719]/10 grid grid-cols-2 gap-2 text-[11px] font-sans text-[#26180E]/70">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#623719]" />
                <span>SGS Pre-Shipment</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#623719]" />
                <span>FOB Mundra Port</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
