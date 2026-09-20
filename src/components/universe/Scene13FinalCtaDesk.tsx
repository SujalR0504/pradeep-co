"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowUpRight, MessageCircle, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function Scene13FinalCtaDesk() {
  const kernelRef = useRef<HTMLDivElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "Bold Peanuts (38/42)",
    packaging: "50 kg Jute Sacks",
    containerVolume: "1x 20ft FCL (19 MT)",
    destinationPort: "",
    message: "",
  });

  // Slow continuous rotation of the background peanut kernel
  useEffect(() => {
    if (kernelRef.current) {
      gsap.to(kernelRef.current, {
        rotation: 360,
        duration: 32,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact-cta"
      className="relative w-full min-h-screen py-24 px-6 sm:px-10 lg:px-16 bg-[#3B2110] text-[#FCFAF5] flex flex-col justify-between overflow-hidden"
    >
      {/* Background Rotating Kernel with Golden Orbit Particles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15 overflow-hidden">
        <div
          ref={kernelRef}
          className="relative w-[500px] h-[700px] transform scale-120"
        >
          <Image
            src="/images/single-kernel-cutout.png"
            alt="Slowly Rotating Ambient Peanut"
            fill
            className="object-contain filter brightness-125"
          />
        </div>
      </div>

      {/* Orbit Guideline Rings in Gold */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-[#C7A77C]/15 animate-spin [animation-duration:50s]" />
        <div className="w-[850px] h-[850px] rounded-full border border-[#C7A77C]/10 border-dashed animate-spin [animation-duration:80s] [animation-direction:reverse]" />
      </div>

      {/* Top Header Statement */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#C7A77C]/20">
        <div>
          <span className="text-[11px] font-mono tracking-[0.3em] text-[#C7A77C] uppercase font-bold block mb-3">
            COMMERCIAL EXPORT TRADE DESK
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.04] text-[#FCFAF5]">
            FROM INDIAN SOIL
            <span className="block font-light italic text-[#E8D8C1]">
              TO GLOBAL MARKETS.
            </span>
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
              "Hello Balaji Exports, I am inquiring about container export pricing for peanuts."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FCFAF5] text-[#3B2110] hover:bg-[#E8D8C1] text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#70421F]" />
            <span>START A CONVERSATION</span>
          </a>

          <a
            href="#inquiry-form"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#C7A77C]/40 text-[#E8D8C1] hover:bg-[#FCFAF5]/10 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowUpRight className="w-4 h-4 text-[#C7A77C]" />
          </a>
        </div>
      </div>

      {/* Main Trade Desk Form & Mandi Coordinates */}
      <div className="relative z-20 w-full max-w-7xl mx-auto my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Commercial Export Inquiry Form (7 Columns) */}
        <div id="inquiry-form" className="lg:col-span-7 bg-[#2E1A0C]/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#C7A77C]/20 shadow-2xl">
          <div className="mb-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FCFAF5]">
              Request FCL Container Quote
            </h3>
            <p className="text-xs font-sans text-[#E8D8C1]/80 mt-1">
              Direct factory pricing CIF / FOB Mundra with comprehensive lot inspection certificates.
            </p>
          </div>

          {formSubmitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#C7A77C]/20 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#C7A77C]" />
              </div>
              <h4 className="font-serif text-2xl text-[#FCFAF5]">
                Inquiry Logged with Shivpuri Trade Desk
              </h4>
              <p className="text-xs font-sans text-[#E8D8C1]/80 max-w-sm">
                Our export logistics desk has received your container specification. We will issue pro-forma pricing within 4 hours.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 text-xs font-mono tracking-wider text-[#C7A77C] underline uppercase"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[#E8D8C1] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. David Tan"
                    className="w-full px-4 py-3 rounded-xl bg-[#3B2110]/90 border border-[#C7A77C]/30 text-[#FCFAF5] placeholder-[#E8D8C1]/40 focus:outline-none focus:border-[#C7A77C]"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[#E8D8C1] mb-1.5">
                    Company / Importer Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Pacific Agri Trade Ltd."
                    className="w-full px-4 py-3 rounded-xl bg-[#3B2110]/90 border border-[#C7A77C]/30 text-[#FCFAF5] placeholder-[#E8D8C1]/40 focus:outline-none focus:border-[#C7A77C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[#E8D8C1] mb-1.5">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="trade@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#3B2110]/90 border border-[#C7A77C]/30 text-[#FCFAF5] placeholder-[#E8D8C1]/40 focus:outline-none focus:border-[#C7A77C]"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[#E8D8C1] mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+65 9123 4567"
                    className="w-full px-4 py-3 rounded-xl bg-[#3B2110]/90 border border-[#C7A77C]/30 text-[#FCFAF5] placeholder-[#E8D8C1]/40 focus:outline-none focus:border-[#C7A77C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[#E8D8C1] mb-1.5">
                    Product Variety
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl bg-[#3B2110] border border-[#C7A77C]/30 text-[#FCFAF5] focus:outline-none focus:border-[#C7A77C]"
                  >
                    <option>Bold Peanuts (38/42)</option>
                    <option>Bold Peanuts (40/50)</option>
                    <option>Bold Peanuts (50/60)</option>
                    <option>Java Peanuts (50/60)</option>
                    <option>Whole Blanched Peanuts</option>
                    <option>Split Blanched Peanuts</option>
                    <option>In-Shell Groundnuts</option>
                    <option>King Brand Singdana</option>
                  </select>
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[#E8D8C1] mb-1.5">
                    Packaging Format
                  </label>
                  <select
                    value={formData.packaging}
                    onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl bg-[#3B2110] border border-[#C7A77C]/30 text-[#FCFAF5] focus:outline-none focus:border-[#C7A77C]"
                  >
                    <option>50 kg New Jute Bags</option>
                    <option>25 kg PP Woven Sacks</option>
                    <option>25 kg Vacuum Cartons</option>
                    <option>1000 kg Jumbo Bulk Bags</option>
                  </select>
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[#E8D8C1] mb-1.5">
                    Container Volume
                  </label>
                  <select
                    value={formData.containerVolume}
                    onChange={(e) => setFormData({ ...formData, containerVolume: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl bg-[#3B2110] border border-[#C7A77C]/30 text-[#FCFAF5] focus:outline-none focus:border-[#C7A77C]"
                  >
                    <option>1x 20ft FCL (19 MT)</option>
                    <option>2x 20ft FCL (38 MT)</option>
                    <option>5x 20ft FCL (95 MT)</option>
                    <option>Trial LCL / 5 Metric Tons</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-[#E8D8C1] mb-1.5">
                  Destination Discharge Port
                </label>
                <input
                  type="text"
                  value={formData.destinationPort}
                  onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                  placeholder="e.g. Haiphong, Vietnam / Jebel Ali, UAE / Rotterdam"
                  className="w-full px-4 py-3 rounded-xl bg-[#3B2110]/90 border border-[#C7A77C]/30 text-[#FCFAF5] placeholder-[#E8D8C1]/40 focus:outline-none focus:border-[#C7A77C]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-[#FCFAF5] text-[#3B2110] hover:bg-[#E8D8C1] font-semibold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#70421F]" />
                  <span>Request Export Pro-Forma Invoice</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right: Direct Mandi Headquarter Contacts (5 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#2E1A0C]/80 backdrop-blur-md p-8 rounded-3xl border border-[#C7A77C]/20">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#C7A77C] uppercase font-bold block mb-2">
              EXPORT HEADQUARTERS
            </span>
            <h4 className="font-serif text-2xl text-[#FCFAF5]">
              {COMPANY_INFO.name}
            </h4>
            <p className="text-xs font-sans text-[#E8D8C1]/80 mt-2 leading-relaxed">
              {COMPANY_INFO.location.fullAddress}
            </p>

            <div className="mt-6 space-y-3 pt-6 border-t border-[#C7A77C]/15 text-xs font-sans">
              <a
                href={`tel:${COMPANY_INFO.contact.primaryPhone}`}
                className="flex items-center gap-3 text-[#FCFAF5] hover:text-[#C7A77C] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#C7A77C]/20 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#C7A77C]" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#E8D8C1]/60 uppercase">Primary Export Line</div>
                  <div className="font-mono text-sm">{COMPANY_INFO.contact.formattedPhone}</div>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="flex items-center gap-3 text-[#FCFAF5] hover:text-[#C7A77C] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#C7A77C]/20 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#C7A77C]" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#E8D8C1]/60 uppercase">Documentation & Sales</div>
                  <div className="font-mono text-sm">{COMPANY_INFO.contact.exportEmail}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Export Quality Assurance Assurance Card */}
          <div className="bg-[#2E1A0C]/50 p-6 rounded-2xl border border-[#C7A77C]/15 text-xs font-sans space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#C7A77C] font-bold">
              CERTIFIED COMPLIANCE GUARANTEE
            </div>
            <p className="text-[#E8D8C1]/80 leading-relaxed">
              Every containerized export batch is dispatched with comprehensive pre-shipment laboratory analysis (SGS / Geo-Chem certified) covering moisture, aflatoxin, count uniformity, and FFA limits.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative z-20 w-full max-w-7xl mx-auto pt-8 border-t border-[#C7A77C]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#E8D8C1]/60 uppercase">
        <div>© {new Date().getFullYear()} BALAJI EXPORTS. ALL RIGHTS RESERVED.</div>
        <div>APEDA REGISTERED • IEC NO. 1106001712 • FSSAI CERTIFIED</div>
      </div>
    </section>
  );
}
