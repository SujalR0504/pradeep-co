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
      <section className="py-16 sm:py-20 bg-[#FFFDF8]">
        <div className="site-container max-w-[1280px] mx-auto">
          
          {/* SECTION 12: 3 DIRECT CONTACT CARDS (Equal Height on Desktop, Stacked on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16 items-stretch">
            
            {/* Card 1: CALL US DIRECTLY */}
            <div className="contact-card-equal flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#F7F1E7] border border-[#5A3218]/15 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono tracking-widest text-[#7A4824] uppercase font-bold">
                    CALL US DIRECTLY
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#5A3218] text-[#FFFDF8]">
                    <Phone className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2E2117] mb-1">
                  {COMPANY_INFO.contact.formattedPhone}
                </h3>
                <p className="text-xs font-sans text-[#2E2117]/75 leading-relaxed">
                  Direct commercial desk line for contract inquiries &amp; live harvest rate indications. Mon–Sat 08:30–19:30 IST.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-[#5A3218]/10">
                <a
                  href={`tel:${COMPANY_INFO.contact.primaryPhone}`}
                  className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-full bg-[#5A3218] text-[#FFFDF8] hover:bg-[#7A4824] font-sans font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Export Desk</span>
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
                  <div className="p-2.5 rounded-xl bg-[#5A3218] text-[#FFFDF8]">
                    <Mail className="w-4 h-4" />
                  </div>
                </div>
                <h3
                  className="font-sans text-[16px] sm:text-[17px] lg:text-[18px] font-bold text-[#2E2117] mb-1 break-word-safe"
                  title={COMPANY_INFO.contact.exportEmail}
                >
                  {COMPANY_INFO.contact.exportEmail}
                </h3>
                <p className="text-xs font-sans text-[#2E2117]/75 leading-relaxed">
                  Send your official tender documents, COA requests, or annual procurement RFQs. Response within 4 business hours.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-[#5A3218]/10">
                <a
                  href={`mailto:${COMPANY_INFO.contact.exportEmail}`}
                  className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-full bg-[#5A3218] text-[#FFFDF8] hover:bg-[#7A4824] font-sans font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Tender / RFQ</span>
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
                  <div className="p-2.5 rounded-xl bg-[#25D366] text-white">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2E2117] mb-1">
                  Instant B2B Chat
                </h3>
                <p className="text-xs font-sans text-[#2E2117]/75 leading-relaxed">
                  Fast CIF rate checks, container photos, and immediate spec sheets directly to your mobile. 24/7 global time zone monitoring.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-[#25D366]/20">
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hello%20Pradeep%20Trading%20Company,%20I%20would%20like%20to%20request%20a%20B2B%20quotation%20for%20peanuts.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1eb857] text-white font-sans font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* TWO-COLUMN SECTION: 40% LEFT CONTACT INFO / 60% RIGHT INQUIRY FORM */}
          <div className="contact-master-grid">
            
            {/* LEFT COLUMN: Executive Contacts, Processing Facilities, Gateways */}
            <div className="space-y-5">
              
              {/* Executive Management Direct Contacts (Matching Design) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F1E7] border border-[#5A3218]/15 space-y-3.5">
                <div className="text-[11px] font-mono tracking-widest text-[#7A4824] uppercase font-bold">
                  DIRECT EXECUTIVE DESK
                </div>

                <div className="space-y-3">
                  {COMPANY_INFO.leadership.map((leader, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#FFFDF8] border border-[#5A3218]/15 shadow-xs space-y-2.5 text-center flex flex-col items-center"
                    >
                      <div className="space-y-0.5">
                        <h4 className="font-sans text-base sm:text-[17px] font-extrabold text-[#2E2117] tracking-tight m-0">
                          {leader.name}
                        </h4>
                        <p className="text-xs font-sans text-[#6B7280] font-medium m-0">
                          {leader.role}
                        </p>
                      </div>

                      <div className="flex items-center justify-center gap-2.5 pt-0.5">
                        <a
                          href={`tel:${leader.phone}`}
                          className="w-8.5 h-8.5 rounded-full bg-[#FAF5EC] border border-[#E8DCCB] text-[#5C341B] hover:bg-[#5C341B] hover:text-[#FFFDF8] flex items-center justify-center transition-all shadow-xs"
                          aria-label={`Call ${leader.name}`}
                          title={`Call ${leader.formattedPhone}`}
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </a>

                        <a
                          href={`https://wa.me/${leader.whatsapp}?text=Hello%20${encodeURIComponent(leader.name)},%20I%20am%20contacting%20you%20regarding%20peanut%20export%20inquiry.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8.5 h-8.5 rounded-full bg-[#FAF5EC] border border-[#E8DCCB] text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all shadow-xs"
                          aria-label={`WhatsApp ${leader.name}`}
                          title={`WhatsApp ${leader.formattedPhone}`}
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                        </a>

                        <a
                          href={`mailto:${leader.email || 'pradeeptradingcomp@gmail.com'}`}
                          className="w-8.5 h-8.5 rounded-full bg-[#FAF5EC] border border-[#E8DCCB] text-[#5C341B] hover:bg-[#5C341B] hover:text-[#FFFDF8] flex items-center justify-center transition-all shadow-xs"
                          aria-label={`Email ${leader.name}`}
                          title={`Email ${leader.email || 'pradeeptradingcomp@gmail.com'}`}
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      <a
                        href={`tel:${leader.phone}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F1E7] border border-[#5A3218]/15 text-[11px] font-mono font-bold text-[#5A3218] hover:bg-[#5A3218] hover:text-[#FFFDF8] transition-colors"
                      >
                        <span>{leader.formattedPhone}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Plant & Logistics Locations */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F1E7] border border-[#5A3218]/15 space-y-4">
                <div className="text-[11px] font-mono tracking-widest text-[#7A4824] uppercase font-bold">
                  PROCESSING FACILITY &amp; PORTS
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-start gap-3">
                    <Factory className="w-4 h-4 text-[#5A3218] shrink-0 mt-1" />
                    <div>
                      <div className="font-serif text-base font-bold text-[#2E2117]">
                        Bhonti Processing Terminal
                      </div>
                      <p className="text-xs font-sans text-[#2E2117]/80 leading-relaxed mt-0.5">
                        {COMPANY_INFO.location.fullAddress}
                      </p>
                      <span className="inline-block mt-1 text-[10.5px] font-mono text-[#7A4824] bg-[#5A3218]/10 px-2 py-0.5 rounded">
                        4 MT/Hr Double-Sortex Plant &bull; Multi-Tier Warehousing
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-[#5A3218]/10">
                    <Anchor className="w-4 h-4 text-[#5A3218] shrink-0 mt-1" />
                    <div>
                      <div className="font-serif text-base font-bold text-[#2E2117]">
                        Export Maritime Gateways
                      </div>
                      <p className="text-xs font-sans text-[#2E2117]/80 leading-relaxed mt-0.5">
                        {COMPANY_INFO.location.portHubs.join(" & ")}
                      </p>
                      <span className="inline-block mt-1 text-[10.5px] font-mono text-[#7A4824] bg-[#5A3218]/10 px-2 py-0.5 rounded">
                        Direct FCL Stuffing &bull; Temperature-Monitored Rail Freight
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours & Dispatch Notice */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F1E7] border border-[#5A3218]/15 space-y-2.5">
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#7A4824] uppercase font-bold">
                  <Clock className="w-3.5 h-3.5 text-[#5A3218]" />
                  <span>DISPATCH &amp; COMMERCIAL DESK HOURS</span>
                </div>
                <div className="font-serif text-base font-bold text-[#2E2117]">
                  Mon – Sat: 08:30 – 19:30 IST
                </div>
                <p className="text-xs font-sans text-[#2E2117]/70 leading-relaxed m-0">
                  Container loading &amp; weighbridge operations run 6 days a week. Urgent weekend documentation support available via our direct WhatsApp desk.
                </p>
              </div>

              {/* Quality & Traceability Commitment */}
              <div className="p-5 rounded-2xl bg-[#5A3218] text-[#FFFDF8] space-y-2">
                <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#D5B58C] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D5B58C]" />
                  <span>The Pradeep Trading Assurance</span>
                </div>
                <p className="text-xs font-sans font-light leading-relaxed text-[#FFFDF8]/90 m-0">
                  Every international shipment includes accredited laboratory HPLC certificates for aflatoxin,
                  certified weighbridge slips, and pre-stuffing photo logs prior to container departure.
                </p>
              </div>

            </div>

            {/* RIGHT COLUMN: Export Inquiry Form (Never exceeds container, 2-column inputs) */}
            <div className="w-full">
              <div className="p-5 sm:p-7 rounded-2xl bg-[#F7F1E7] border border-[#5A3218]/20 shadow-xs w-full">
                <div className="mb-4 sm:mb-5">
                  <div className="text-[10px] font-mono tracking-widest text-[#7A4824] uppercase font-bold">
                    OFFICIAL CONTRACT INQUIRY
                  </div>
                  <h2 className="font-sans text-lg sm:text-xl md:text-[22px] font-extrabold text-[#2E2117] mt-0.5 mb-1 tracking-tight">
                    Request an Export Quotation
                  </h2>
                  <p className="text-[11.5px] sm:text-xs font-sans text-[#2E2117]/75 mt-0.5 leading-relaxed">
                    Fill out your contract specifications below. Our export desk will review your requirements
                    and provide FOB / CIF rate indications along with current harvest moisture analysis.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-8 px-5 rounded-2xl bg-[#FFFDF8] border border-[#66704A]/30 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#66704A]/15 text-[#66704A] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="font-sans text-lg sm:text-xl font-bold text-[#2E2117]">
                      Inquiry Received Successfully
                    </h3>
                    <p className="text-xs font-sans text-[#2E2117]/80 font-normal max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="font-semibold text-[#5A3218]">{formData.fullName}</strong>. Our export desk has logged your requirement for{" "}
                      <strong className="font-semibold text-[#5A3218]">{formData.product} ({formData.quantity})</strong>. A commercial representative will contact you at{" "}
                      <span className="font-mono text-[11px] text-[#7A4824]">{formData.email}</span> within 4 business hours.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-4 py-1.5 rounded-xl bg-[#5A3218] text-[#FFFDF8] text-[11px] font-mono uppercase tracking-wider hover:bg-[#7A4824] transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    {/* Row 1: Name & Company (2 columns desktop, 1 column mobile) */}
                    <div className="contact-form-grid">
                      <div>
                        <label className="block text-[10px] font-mono text-[#7A4824] uppercase mb-1 font-bold">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Your Full Name"
                          className="w-full h-9.5 px-3 rounded-lg bg-[#FFFDF8] border border-[#5A3218]/20 text-xs font-sans placeholder-[#2E2117]/40 focus:outline-none focus:border-[#5A3218]"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-[#7A4824] uppercase mb-1 font-bold">
                          Company *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="Company / Organization Name"
                          className="w-full h-9.5 px-3 rounded-lg bg-[#FFFDF8] border border-[#5A3218]/20 text-xs font-sans placeholder-[#2E2117]/40 focus:outline-none focus:border-[#5A3218]"
                        />
                      </div>
                    </div>

                    {/* Row 2: Country & Email (2 columns desktop, 1 column mobile) */}
                    <div className="contact-form-grid">
                      <div>
                        <label className="block text-[10px] font-mono text-[#7A4824] uppercase mb-1 font-bold">
                          Country *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          placeholder="Destination Country (e.g. Vietnam, UAE, Netherlands)"
                          className="w-full h-9.5 px-3 rounded-lg bg-[#FFFDF8] border border-[#5A3218]/20 text-xs font-sans placeholder-[#2E2117]/40 focus:outline-none focus:border-[#5A3218]"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-[#7A4824] uppercase mb-1 font-bold">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="procurement@company.com"
                          className="w-full h-9.5 px-3 rounded-lg bg-[#FFFDF8] border border-[#5A3218]/20 text-xs font-sans placeholder-[#2E2117]/40 focus:outline-none focus:border-[#5A3218]"
                        />
                      </div>
                    </div>

                    {/* Row 3: Phone & Product (2 columns desktop, 1 column mobile) */}
                    <div className="contact-form-grid">
                      <div>
                        <label className="block text-[10px] font-mono text-[#7A4824] uppercase mb-1 font-bold">
                          Phone *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+ Country Code & Phone Number"
                          className="w-full h-9.5 px-3 rounded-lg bg-[#FFFDF8] border border-[#5A3218]/20 text-xs font-sans placeholder-[#2E2117]/40 focus:outline-none focus:border-[#5A3218]"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-[#7A4824] uppercase mb-1 font-bold">
                          Product *
                        </label>
                        <select
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                          className="w-full h-9.5 px-3 rounded-lg bg-[#FFFDF8] border border-[#5A3218]/20 text-xs font-sans focus:outline-none focus:border-[#5A3218]"
                        >
                          {productOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Quantity (Full Width) */}
                    <div>
                      <label className="block text-[10px] font-mono text-[#7A4824] uppercase mb-1 font-bold">
                        Quantity *
                      </label>
                      <select
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full h-9.5 px-3 rounded-lg bg-[#FFFDF8] border border-[#5A3218]/20 text-xs font-sans focus:outline-none focus:border-[#5A3218]"
                      >
                        {quantityOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Row 5: Message (Resize-Vertical Only) */}
                    <div>
                      <label className="block text-[10px] font-mono text-[#7A4824] uppercase mb-1 font-bold">
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
                      className="w-full h-10 rounded-full bg-[#5A3218] hover:bg-[#7A4824] disabled:bg-[#5A3218]/60 text-[#FFFDF8] font-sans font-semibold text-xs tracking-widest uppercase transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
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

                    <p className="text-[10px] font-mono text-center text-[#7A4824] uppercase tracking-wider m-0">
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
    </div>
  );
}
