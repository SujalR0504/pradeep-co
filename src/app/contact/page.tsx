"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  ShieldCheck,
  Globe2,
  CheckCircle2,
  Anchor,
  Factory,
  ArrowUpRight,
  QrCode,
  X,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    country: "",
    product: "Bold Peanuts (Runner Type)",
    grade: "Bold 40/50 Count",
    quantity: "1 FCL (Approx. 19 Metric Tons)",
    port: "",
    packaging: "25kg Food-Grade Jute Sacks",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const productOptions = [
    "Bold Peanuts (Runner Type)",
    "Java Peanuts (Spanish Type)",
    "Blanched Whole Kernels",
    "Blanched Split Kernels",
    "Virginia In-Shell Pods",
    "TJ Peanuts",
    "Red Skin Peanuts",
    "Cold-Pressed Peanut Oil",
    "Pure Peanut Butter (Commercial Grade)",
  ];

  const gradeOptions = [
    "Bold 38/42 Count",
    "Bold 40/50 Count",
    "Bold 50/60 Count",
    "Java 50/60 Count",
    "Java 60/70 Count",
    "Java 70/80 Count",
    "Virginia Jumbo In-Shell",
    "Industrial Confectionery Grade",
  ];

  const quantityOptions = [
    "1 FCL (Approx. 19 Metric Tons)",
    "2 - 5 FCLs (38 - 95 Metric Tons)",
    "5 - 10 FCLs (95 - 190 Metric Tons)",
    "10+ FCLs (Multi-Container Dispatch)",
    "Annual Long-Term Contract Supply",
    "Trial Evaluation Lot (<10 MT)",
  ];

  const packagingOptions = [
    "25kg Food-Grade Jute Sacks (HCF)",
    "50kg Food-Grade Jute Sacks",
    "25kg Vacuum Bags with Master Cartons",
    "1000kg FIBC Bulk Totes with Discharge Spout",
    "Custom Buyer Branded Bags",
  ];

  return (
    <div className="flex flex-col w-full bg-[#FFFDF8] text-[#2E2117]">
      {/* Editorial Header */}
      <section className="relative w-full py-16 sm:py-20 border-b border-[#5A3218]/15 bg-[#F7F1E7]">
        <div className="site-container max-w-[1280px] mx-auto">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5A3218]/10 border border-[#5A3218]/20 text-[10.5px] sm:text-xs font-mono tracking-widest text-[#5A3218] uppercase max-w-full">
              <Globe2 className="w-3.5 h-3.5 text-[#5A3218] shrink-0" />
              <span className="break-words">DIRECT EXPORT DESK • COMMODITY PROCUREMENT</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-[#2E2117] tracking-tight break-words">
              LET&apos;S TALK{" "}
              <span className="text-[#5A3218]">
                PEANUTS.
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg font-sans text-[#2E2117]/80 font-normal leading-relaxed max-w-2xl">
              Partner directly with Central India&apos;s benchmark groundnut processor. Request custom FOB / CIF quotes,
              receive pre-shipment quality inspection reports, and secure guaranteed harvest container allocations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="pt-14 pb-28 sm:pt-20 sm:pb-36 bg-[#FFFDF8]">
        <div className="site-container max-w-[1280px] mx-auto">
          
          {/* SECTION 12: 3 DIRECT CONTACT CARDS (Equal Height on Desktop, Stacked on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20 items-stretch">
            
            {/* Card 1: CALL US DIRECTLY */}
            <div className="contact-card-equal flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#F7F1E7] border border-[#5A3218]/15 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono tracking-widest text-[#7A4824] uppercase font-bold">
                    CALL US DIRECTLY
                  </span>
                  <div className="p-2 rounded-xl bg-[#5A3218] text-[#FFFDF8]" style={{ color: '#FFFDF8' }}>
                    <Phone className="w-4 h-4" style={{ color: '#FFFDF8' }} />
                  </div>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2E2117] mb-1.5 tracking-tight truncate">
                  <a href={`tel:${COMPANY_INFO.contact.primaryPhone}`} className="hover:text-[#5A3218] transition-colors">
                    {COMPANY_INFO.contact.formattedPhone}
                  </a>
                </h3>
                <p className="text-xs font-sans text-[#2E2117]/75 leading-relaxed">
                  Direct commercial desk line for contract inquiries &amp; live harvest rate indications. Mon–Sat 08:30–19:30 IST.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-[#5A3218]/10">
                <a
                  href={`tel:${COMPANY_INFO.contact.primaryPhone}`}
                  className="card-btn-brown w-full h-11 inline-flex items-center justify-center gap-2 rounded-full bg-[#5A3218] text-[#FFFDF8] hover:bg-[#7A4824] font-sans font-semibold text-xs tracking-wider uppercase transition-colors"
                  style={{ color: '#FFFDF8' }}
                >
                  <Phone className="w-3.5 h-3.5" style={{ color: '#FFFDF8' }} />
                  <span style={{ color: '#FFFDF8' }}>Call Export Desk</span>
                </a>
              </div>
            </div>

            {/* Card 2: EMAIL US */}
            <div className="contact-card-equal flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#F7F1E7] border border-[#5A3218]/15 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono tracking-widest text-[#7A4824] uppercase font-bold">
                    EMAIL US
                  </span>
                  <div className="p-2 rounded-xl bg-[#5A3218] text-[#FFFDF8]" style={{ color: '#FFFDF8' }}>
                    <Mail className="w-4 h-4" style={{ color: '#FFFDF8' }} />
                  </div>
                </div>
                <h3
                  className="font-sans text-[13px] sm:text-[14px] md:text-[13px] lg:text-[14px] xl:text-[15.5px] font-bold text-[#2E2117] mb-1.5 tracking-tight truncate"
                  title={COMPANY_INFO.contact.exportEmail}
                >
                  <a
                    href={`mailto:${COMPANY_INFO.contact.exportEmail}`}
                    className="hover:text-[#5A3218] transition-colors"
                  >
                    {COMPANY_INFO.contact.exportEmail}
                  </a>
                </h3>
                <p className="text-xs font-sans text-[#2E2117]/75 leading-relaxed">
                  Send your official tender documents, COA requests, or annual procurement RFQs. Response within 4 business hours.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-[#5A3218]/10">
                <a
                  href={`mailto:${COMPANY_INFO.contact.exportEmail}`}
                  className="card-btn-brown w-full h-11 inline-flex items-center justify-center gap-2 rounded-full bg-[#5A3218] text-[#FFFDF8] hover:bg-[#7A4824] font-sans font-semibold text-xs tracking-wider uppercase transition-colors"
                  style={{ color: '#FFFDF8' }}
                >
                  <Mail className="w-3.5 h-3.5" style={{ color: '#FFFDF8' }} />
                  <span style={{ color: '#FFFDF8' }}>Email Tender / RFQ</span>
                </a>
              </div>
            </div>

            {/* Card 3: WHATSAPP CHAT */}
            <div className="contact-card-equal flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#F7F1E7] border border-[#25D366]/30 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono tracking-widest text-[#1e8b46] uppercase font-bold">
                    WHATSAPP CHAT
                  </span>
                  <div className="p-2 rounded-xl bg-[#25D366] text-white" style={{ color: '#ffffff' }}>
                    <MessageSquare className="w-4 h-4" style={{ color: '#ffffff' }} />
                  </div>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2E2117] mb-1.5 tracking-tight truncate">
                  Instant B2B Chat
                </h3>
                <p className="text-xs font-sans text-[#2E2117]/75 leading-relaxed">
                  Fast CIF rate checks, container photos, and immediate spec sheets directly to your mobile. 24/7 global time zone monitoring.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-[#25D366]/20 space-y-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hello%20Pradeep%20Trading%20Company,%20I%20would%20like%20to%20request%20a%20B2B%20quotation%20for%20peanuts.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-btn-green w-full h-11 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1eb857] text-white font-sans font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm"
                  style={{ color: '#ffffff' }}
                >
                  <MessageSquare className="w-3.5 h-3.5" style={{ color: '#ffffff' }} />
                  <span style={{ color: '#ffffff' }}>Chat on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setShowQrModal(true)}
                  className="w-full py-1 text-center text-[11px] font-mono font-bold text-[#1e8b46] hover:text-[#156031] uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>Scan Official QR Code</span>
                </button>
              </div>
            </div>

          </div>

          {/* TWO-COLUMN SECTION: LEFT CONTACT INFO / RIGHT INQUIRY FORM */}
          <div className="contact-master-grid">
            
            {/* LEFT COLUMN: Executive Contacts, Processing Facilities, Gateways */}
            <div className="flex flex-col gap-6 sm:gap-7">
              
              {/* Executive Management Direct Contacts */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F1E7] border border-[#5A3218]/15 space-y-3.5 shadow-xs">
                <div className="text-[10px] font-mono tracking-widest text-[#7A4824] uppercase font-bold">
                  DIRECT EXECUTIVE DESK
                </div>

                <div className="flex flex-col gap-3">
                  {COMPANY_INFO.leadership.map((leader, idx) => (
                    <div
                      key={idx}
                      className="w-full p-3 sm:p-3.5 rounded-xl bg-[#FFFDF8] border border-[#5A3218]/12 shadow-xs space-y-1.5 text-center flex flex-col items-center"
                    >
                      <div className="space-y-0.5">
                        <h4 className="font-sans text-[12.5px] sm:text-[13px] font-bold text-[#2E2117] tracking-tight m-0">
                          {leader.name}
                        </h4>
                        <p className="text-[10px] font-sans text-[#6B7280] font-medium m-0">
                          {leader.role}
                        </p>
                      </div>

                      <div className="flex items-center justify-center gap-2 pt-0.5">
                        <a
                          href={`tel:${leader.phone}`}
                          className="w-7 h-7 rounded-full bg-[#FAF5EC] border border-[#E8DCCB] text-[#5C341B] hover:bg-[#5C341B] hover:text-[#FFFDF8] flex items-center justify-center transition-all shadow-xs"
                          aria-label={`Call ${leader.name}`}
                          title={`Call ${leader.formattedPhone}`}
                        >
                          <Phone className="w-2.5 h-2.5" />
                        </a>

                        <a
                          href={`https://wa.me/${leader.whatsapp}?text=Hello%20${encodeURIComponent(leader.name)},%20I%20am%20contacting%20you%20regarding%20peanut%20export%20inquiry.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-full bg-[#FAF5EC] border border-[#E8DCCB] text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all shadow-xs"
                          aria-label={`WhatsApp ${leader.name}`}
                          title={`WhatsApp ${leader.formattedPhone}`}
                        >
                          <MessageSquare className="w-2.5 h-2.5" />
                        </a>

                        <a
                          href={`mailto:${leader.email || 'pradeeptradingcomp@gmail.com'}`}
                          className="w-7 h-7 rounded-full bg-[#FAF5EC] border border-[#E8DCCB] text-[#5C341B] hover:bg-[#5C341B] hover:text-[#FFFDF8] flex items-center justify-center transition-all shadow-xs"
                          aria-label={`Email ${leader.name}`}
                          title={`Email ${leader.email || 'pradeeptradingcomp@gmail.com'}`}
                        >
                          <Mail className="w-2.5 h-2.5" />
                        </a>
                      </div>

                      <a
                        href={`tel:${leader.phone}`}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F7F1E7] border border-[#5A3218]/15 text-[9.5px] font-mono font-bold text-[#5A3218] hover:bg-[#5A3218] hover:text-[#FFFDF8] transition-colors"
                      >
                        <span>{leader.formattedPhone}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official WhatsApp Business QR Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F1E7] border border-[#25D366]/35 space-y-3.5 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-mono tracking-widest text-[#1e8b46] uppercase font-bold flex items-center gap-1.5">
                    <QrCode className="w-3 h-3 text-[#25D366]" />
                    <span>WHATSAPP BUSINESS QR</span>
                  </div>
                  <span className="text-[9.5px] font-mono bg-[#25D366]/15 text-[#1e8b46] px-2 py-0.5 rounded-full font-bold">
                    Official APMC Desk
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center bg-white p-4 sm:p-5 rounded-xl border border-[#25D366]/20 shadow-2xs">
                  <div 
                    onClick={() => setShowQrModal(true)}
                    className="relative w-52 h-52 sm:w-60 sm:h-60 max-w-full rounded-xl overflow-hidden bg-white shadow-xs border border-[#5A3218]/10 cursor-pointer group hover:border-[#25D366] transition-all flex items-center justify-center"
                    title="Click to enlarge QR Code"
                  >
                    <Image
                      src="/images/whatsapp-qr-direct.webp"
                      alt="Pradeep Trading Company WhatsApp Business QR Code"
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 bg-[#25D366] text-white text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full shadow transition-opacity">
                        Enlarge
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plant & Logistics Locations */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F1E7] border border-[#5A3218]/15 space-y-3.5 shadow-xs">
                <div className="text-[10px] font-mono tracking-widest text-[#7A4824] uppercase font-bold">
                  PROCESSING FACILITY &amp; PORTS
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-start gap-3">
                    <Factory className="w-3.5 h-3.5 text-[#5A3218] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-serif text-[14.5px] sm:text-base font-bold text-[#2E2117]">
                        Bhonti Processing Terminal
                      </div>
                      <p className="text-[11.5px] font-sans text-[#2E2117]/75 leading-relaxed mt-0.5">
                        {COMPANY_INFO.location.fullAddress}
                      </p>
                      <span className="inline-block mt-1 text-[9.5px] font-mono text-[#7A4824] bg-[#5A3218]/10 px-2 py-0.5 rounded">
                        4 MT/Hr Double-Sortex Plant &bull; Multi-Tier Warehousing
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-[#5A3218]/10">
                    <Anchor className="w-3.5 h-3.5 text-[#5A3218] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-serif text-[14.5px] sm:text-base font-bold text-[#2E2117]">
                        Export Maritime Gateways
                      </div>
                      <p className="text-[11.5px] font-sans text-[#2E2117]/75 leading-relaxed mt-0.5">
                        {COMPANY_INFO.location.portHubs.join(" & ")}
                      </p>
                      <span className="inline-block mt-1 text-[9.5px] font-mono text-[#7A4824] bg-[#5A3218]/10 px-2 py-0.5 rounded">
                        Direct FCL Stuffing &bull; Temperature-Monitored Rail Freight
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours & Dispatch Notice */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F1E7] border border-[#5A3218]/15 space-y-2.5 shadow-xs">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#7A4824] uppercase font-bold">
                  <Clock className="w-3 h-3 text-[#5A3218]" />
                  <span>DISPATCH &amp; COMMERCIAL DESK HOURS</span>
                </div>
                <div className="font-serif text-[14.5px] sm:text-base font-bold text-[#2E2117]">
                  Mon – Sat: 08:30 – 19:30 IST
                </div>
                <p className="text-[11.5px] font-sans text-[#2E2117]/70 leading-relaxed m-0">
                  Container loading &amp; weighbridge operations run 6 days a week. Urgent weekend documentation support available via our direct WhatsApp desk.
                </p>
              </div>

              {/* Quality & Traceability Commitment */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#5A3218] text-[#FFFDF8] space-y-2.5 shadow-xs">
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#D5B58C] font-semibold">
                  <ShieldCheck className="w-3 h-3 text-[#D5B58C]" />
                  <span>The Pradeep Trading Assurance</span>
                </div>
                <p className="text-[11px] sm:text-[11.5px] font-sans font-light leading-relaxed text-[#FFFDF8]/85 m-0">
                  Every international shipment includes accredited laboratory HPLC certificates for aflatoxin,
                  certified weighbridge slips, and pre-stuffing photo logs prior to container departure.
                </p>
              </div>

            </div>

            {/* RIGHT COLUMN: Export Inquiry Form */}
            <div className="w-full">
              <div className="p-5 sm:p-7 md:p-8 rounded-2xl bg-[#F7F1E7] border border-[#5A3218]/20 shadow-xs w-full">
                <div className="mb-4 sm:mb-5">
                  <div className="text-[9.5px] font-mono tracking-widest text-[#7A4824] uppercase font-bold">
                    OFFICIAL CONTRACT INQUIRY
                  </div>
                  <h2 className="font-sans text-lg sm:text-xl font-extrabold text-[#2E2117] mt-0.5 mb-1 tracking-tight">
                    Request an Export Quotation
                  </h2>
                  <p className="text-[11.5px] font-sans text-[#2E2117]/70 mt-0.5 leading-relaxed">
                    Fill out your contract specifications below. Our export desk will review your requirements
                    and provide FOB / CIF rate indications along with current harvest moisture analysis.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-8 px-5 rounded-2xl bg-[#FFFDF8] border border-[#66704A]/30 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#66704A]/15 text-[#66704A] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="font-sans text-lg font-bold text-[#2E2117]">
                      Inquiry Received Successfully
                    </h3>
                    <p className="text-xs font-sans text-[#2E2117]/80 font-normal max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="font-semibold text-[#5A3218]">{formData.fullName}</strong>. Our export desk has logged your requirement for{" "}
                      <strong className="font-semibold text-[#5A3218]">{formData.product}</strong>. A commercial representative will contact you at{" "}
                      <span className="font-mono text-xs text-[#7A4824]">{formData.email}</span> within 4 business hours.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-4 py-2 rounded-xl bg-[#5A3218] text-[#FFFDF8] text-[11px] font-mono uppercase tracking-wider hover:bg-[#7A4824] transition-colors cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                    {/* Row 1: Name & Company (2 columns desktop, 1 column mobile) */}
                    <div className="contact-form-grid">
                      <div>
                        <label className="block text-[9.5px] font-mono text-[#7A4824] uppercase mb-1 font-bold tracking-wider">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Your Full Name"
                          className="w-full h-10 px-3 rounded-lg bg-[#FFFDF8] border border-[#5A3218]/20 text-xs font-sans placeholder-[#2E2117]/40 focus:outline-none focus:border-[#5A3218]"
                        />
                      </div>

                      <div>
                        <label className="block text-[9.5px] font-mono text-[#7A4824] uppercase mb-1 font-bold tracking-wider">
                          Company *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="Company / Organization Name"
                          className="w-full h-10 px-3 rounded-lg bg-[#FFFDF8] border border-[#5A3218]/20 text-xs font-sans placeholder-[#2E2117]/40 focus:outline-none focus:border-[#5A3218]"
                        />
                      </div>
                    </div>

                    {/* Row 2: Country & Email (2 columns desktop, 1 column mobile) */}
                    <div className="contact-form-grid">
                      <div>
                        <label className="block text-[9.5px] font-mono text-[#7A4824] uppercase mb-1 font-bold tracking-wider">
                          Country *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          placeholder="Destination Country (e.g. Vietnam, UAE, Netherlands)"
                          className="w-full h-10 px-3 rounded-lg bg-[#FFFDF8] border border-[#5A3218]/20 text-xs font-sans placeholder-[#2E2117]/40 focus:outline-none focus:border-[#5A3218]"
                        />
                      </div>

                      <div>
                        <label className="block text-[9.5px] font-mono text-[#7A4824] uppercase mb-1 font-bold tracking-wider">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="procurement@company.com"
                          className="w-full h-10 px-3 rounded-lg bg-[#FFFDF8] border border-[#5A3218]/20 text-xs font-sans placeholder-[#2E2117]/40 focus:outline-none focus:border-[#5A3218]"
                        />
                      </div>
                    </div>

                    {/* Row 3: Phone & Product (2 columns desktop, 1 column mobile) */}
                    <div className="contact-form-grid">
                      <div>
                        <label className="block text-[9.5px] font-mono text-[#7A4824] uppercase mb-1 font-bold tracking-wider">
                          Phone *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+ Country Code & Phone Number"
                          className="w-full h-10 px-3 rounded-lg bg-[#FFFDF8] border border-[#5A3218]/20 text-xs font-sans placeholder-[#2E2117]/40 focus:outline-none focus:border-[#5A3218]"
                        />
                      </div>

                      <div>
                        <label className="block text-[9.5px] font-mono text-[#7A4824] uppercase mb-1 font-bold tracking-wider">
                          Product *
                        </label>
                        <select
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                          className="w-full h-10 px-3 rounded-lg bg-[#FFFDF8] border border-[#5A3218]/20 text-xs font-sans focus:outline-none focus:border-[#5A3218]"
                        >
                          {productOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Message (Resize-Vertical Only) */}
                    <div>
                      <label className="block text-[9.5px] font-mono text-[#7A4824] uppercase mb-1 font-bold tracking-wider">
                        Message
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about target delivery terms (FOB / CIF), destination port, packaging preferences, or specific quality thresholds."
                        className="w-full px-3 py-2 rounded-lg bg-[#FFFDF8] border border-[#5A3218]/20 text-xs font-sans placeholder-[#2E2117]/40 focus:outline-none focus:border-[#5A3218] resize-y"
                      />
                    </div>

                    {/* Submit Button: Full Width */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-10.5 rounded-full bg-[#5A3218] hover:bg-[#7A4824] disabled:bg-[#5A3218]/60 text-[#FFFDF8] font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer mt-1"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>SENDING...</span>
                        </div>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>SEND ENQUIRY</span>
                        </>
                      )}
                    </button>

                    <p className="text-[9px] font-mono text-center text-[#7A4824] uppercase tracking-wider pt-0.5 m-0">
                      CONFIDENTIAL &bull; DIRECT APMC PROCESSOR RATES &bull; NO BROKER MARKUPS
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Origin & Port Terminal Visual Section */}
      <section className="py-16 bg-[#F7F1E7] border-t border-[#5A3218]/15">
        <div className="site-container max-w-[1280px] mx-auto">
          <div className="max-w-2xl mb-12 space-y-2 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7A4824] font-bold">
              INFRASTRUCTURE CORRIDOR
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2E2117] tracking-tight">
              From Bhonti Origin to Global Sea Lanes
            </h2>
            <p className="text-xs sm:text-sm font-sans text-[#2E2117]/75">
              Strategically located in Central India&apos;s prime groundnut belt with rapid rail and highway access
              to premier deep-water container terminals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-3xl overflow-hidden border border-[#5A3218]/20 bg-[#FFFDF8] shadow-sm">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/sortex-machine.webp"
                  alt="Pradeep Trading Company Bhonti Processing Facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E5A83B] font-bold drop-shadow">
                    CENTRAL PROCESSING HUB
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white drop-shadow-md" style={{ color: '#ffffff' }}>
                    Bhonti Processing Terminal
                  </h3>
                  <p className="text-xs font-sans text-white/90 drop-shadow">
                    Shivpuri District, Madhya Pradesh, India
                  </p>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <div className="text-xs font-mono text-[#7A4824] uppercase font-bold">KEY SPECIFICATIONS</div>
                <div className="grid grid-cols-2 gap-3 text-xs font-sans text-[#2E2117]/85 pt-1">
                  <div>&bull; 4 MT / Hour Double-Sortex</div>
                  <div>&bull; Multi-Tier Mechanical Grading</div>
                  <div>&bull; Humidity-Controlled Silos</div>
                  <div>&bull; In-House HPLC Aflatoxin Lab</div>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-[#5A3218]/20 bg-[#FFFDF8] shadow-sm">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/cargo-ship-ocean.jpg"
                  alt="Maritime Export Corridor"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E5A83B] font-bold drop-shadow">
                    MARITIME DISPATCH CORRIDOR
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white drop-shadow-md" style={{ color: '#ffffff' }}>
                    Mundra &amp; Nhava Sheva Ports
                  </h3>
                  <p className="text-xs font-sans text-white/90 drop-shadow">
                    Direct Oceanic Access to 35+ Global Markets
                  </p>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <div className="text-xs font-mono text-[#7A4824] uppercase font-bold">SHIPPING ADVANTAGES</div>
                <div className="grid grid-cols-2 gap-3 text-xs font-sans text-[#2E2117]/85 pt-1">
                  <div>&bull; Fast Sea Transit to Middle East</div>
                  <div>&bull; Direct Deep-Draft Vessel Calls</div>
                  <div>&bull; Desiccant Blanket Protection</div>
                  <div>&bull; Strict Custom Seal Verification</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp QR Lightbox Modal */}
      {showQrModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
          onClick={() => setShowQrModal(false)}
        >
          <div
            className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-white/20 text-center space-y-4 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F7F1E7] text-[#5A3218] hover:bg-[#5A3218] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close QR Modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto my-2 rounded-2xl overflow-hidden bg-white border border-[#5A3218]/10 shadow-xs">
              <Image
                src="/images/whatsapp-qr-direct.webp"
                alt="Pradeep Trading Company WhatsApp Business QR Code"
                fill
                className="object-contain p-2"
                priority
              />
            </div>

            <div className="space-y-1">
              <h4 className="font-serif text-lg font-bold text-[#2E2117]">
                Scan with WhatsApp
              </h4>
              <p className="text-xs font-sans text-[#2E2117]/70">
                Point your mobile camera to chat directly with Pradeep Trading Company export desk (+91-9589790997).
              </p>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hello%20Pradeep%20Trading%20Company,%20I%20am%20contacting%20you%20via%20your%20website%20QR%20code.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1eb857] text-white font-sans font-bold text-xs tracking-wider uppercase transition-colors shadow-sm"
                style={{ color: '#ffffff' }}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open in WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
