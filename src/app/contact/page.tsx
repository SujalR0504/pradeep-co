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
    <div className="flex flex-col w-full bg-[#FFFDF8] text-[#2E2117] pt-24">
      {/* Editorial Header */}
      <section className="relative w-full py-16 sm:py-24 border-b border-[#5A3218]/15 bg-[#F7F1E7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5A3218]/10 border border-[#5A3218]/20 text-xs font-mono tracking-widest text-[#5A3218] uppercase">
              <Globe2 className="w-3.5 h-3.5 text-[#5A3218]" />
              <span>DIRECT EXPORT DESK • COMMODITY PROCUREMENT</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal leading-[0.98] text-[#2E2117] tracking-tight">
              LET&apos;S TALK
              <span className="block italic font-light text-[#5A3218]">
                PEANUTS.
              </span>
            </h1>

            <p className="text-base sm:text-lg font-sans text-[#2E2117]/80 font-light leading-relaxed">
              Partner directly with Central India&apos;s benchmark groundnut processor. Request custom FOB / CIF quotes,
              receive pre-shipment quality inspection reports, and secure guaranteed harvest container allocations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Split Content: Contact Details vs Interactive Form */}
      <section className="py-16 sm:py-20 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Direct Contacts & Operating Hubs */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Communication Channels */}
              <div className="p-8 rounded-3xl bg-[#F7F1E7] border border-[#5A3218]/15 space-y-6">
                <div className="text-xs font-mono tracking-widest text-[#7A4824] uppercase font-semibold">
                  DIRECT CONTACT CHANNELS
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-[#5A3218] text-[#FFFDF8] shrink-0 mt-1">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[#7A4824] uppercase">PHONE &amp; WHATSAPP</div>
                      <a
                        href={`tel:${COMPANY_INFO.contact.primaryPhone}`}
                        className="font-serif text-xl sm:text-2xl font-bold text-[#2E2117] hover:text-[#5A3218] transition-colors block"
                      >
                        {COMPANY_INFO.contact.formattedPhone}
                      </a>
                      <p className="text-xs font-sans text-[#2E2117]/70 mt-0.5">
                        Direct commercial desk &bull; Instant WhatsApp quotation available
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-[#5A3218] text-[#FFFDF8] shrink-0 mt-1">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[#7A4824] uppercase">EXPORT INQUIRIES EMAIL</div>
                      <a
                        href={`mailto:${COMPANY_INFO.contact.exportEmail}`}
                        className="font-serif text-xl sm:text-2xl font-bold text-[#2E2117] hover:text-[#5A3218] transition-colors block"
                      >
                        {COMPANY_INFO.contact.exportEmail}
                      </a>
                      <p className="text-xs font-sans text-[#2E2117]/70 mt-0.5">
                        General: {COMPANY_INFO.contact.email} &bull; Response within 4 business hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-[#5A3218] text-[#FFFDF8] shrink-0 mt-1">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[#7A4824] uppercase">COMMERCIAL DESK HOURS</div>
                      <div className="font-serif text-lg font-semibold text-[#2E2117]">
                        Mon – Sat: 08:30 – 19:30 IST
                      </div>
                      <p className="text-xs font-sans text-[#2E2117]/70 mt-0.5">
                        WhatsApp 24/7 monitoring for international time zones (Europe, Middle East, SE Asia, Americas)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#5A3218]/10">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hello%20Pradeep%20Trading%20Company,%20I%20would%20like%20to%20request%20a%20B2B%20quotation%20for%20peanuts.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1eb857] text-white font-sans font-medium text-sm transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>
              </div>

              {/* Plant & Logistics Locations */}
              <div className="p-8 rounded-3xl bg-[#F7F1E7] border border-[#5A3218]/15 space-y-6">
                <div className="text-xs font-mono tracking-widest text-[#7A4824] uppercase font-semibold">
                  PROCESSING FACILITY &amp; PORTS
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <Factory className="w-5 h-5 text-[#5A3218] shrink-0 mt-1" />
                    <div>
                      <div className="font-serif text-lg font-semibold text-[#2E2117]">
                        Pradeep Trading Company Processing Terminal
                      </div>
                      <p className="text-xs font-sans text-[#2E2117]/80 leading-relaxed mt-0.5">
                        {COMPANY_INFO.location.fullAddress}
                      </p>
                      <span className="inline-block mt-1 text-[11px] font-mono text-[#7A4824] bg-[#5A3218]/10 px-2 py-0.5 rounded">
                        4 MT/Hr Double-Sortex Plant &bull; Multi-Tier Warehousing
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-3 border-t border-[#5A3218]/10">
                    <Anchor className="w-5 h-5 text-[#5A3218] shrink-0 mt-1" />
                    <div>
                      <div className="font-serif text-lg font-semibold text-[#2E2117]">
                        Export Maritime Gateways
                      </div>
                      <p className="text-xs font-sans text-[#2E2117]/80 leading-relaxed mt-0.5">
                        {COMPANY_INFO.location.portHubs.join(" & ")}
                      </p>
                      <span className="inline-block mt-1 text-[11px] font-mono text-[#7A4824] bg-[#5A3218]/10 px-2 py-0.5 rounded">
                        Direct FCL Stuffing &bull; Temperature-Monitored Rail Freight
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality & Traceability Commitment */}
              <div className="p-6 rounded-2xl bg-[#5A3218] text-[#FFFDF8] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D5B58C]">
                  <ShieldCheck className="w-4 h-4 text-[#D5B58C]" />
                  <span>The Pradeep Trading Assurance</span>
                </div>
                <p className="text-xs font-sans font-light leading-relaxed text-[#FFFDF8]/90">
                  Every international shipment includes accredited laboratory HPLC certificates for aflatoxin,
                  certified weighbridge slips, and high-resolution pre-stuffing photo logs prior to container departure.
                </p>
              </div>
            </div>

            {/* Right Column: B2B Export Request Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#F7F1E7] border border-[#5A3218]/20 shadow-sm">
                <div className="mb-8">
                  <div className="text-xs font-mono tracking-widest text-[#7A4824] uppercase">
                    OFFICIAL CONTRACT INQUIRY
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#2E2117] mt-1">
                    Request an Export Quotation
                  </h2>
                  <p className="text-xs sm:text-sm font-sans text-[#2E2117]/75 mt-2">
                    Fill out your contract specifications below. Our export desk will review your requirements
                    and provide FOB / CIF rate indications along with current harvest moisture analysis.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-12 px-6 rounded-2xl bg-[#FFFDF8] border border-[#66704A]/30 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#66704A]/15 text-[#66704A] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#2E2117]">
                      Inquiry Received Successfully
                    </h3>
                    <p className="text-sm font-sans text-[#2E2117]/80 font-light max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="font-semibold text-[#5A3218]">{formData.fullName}</strong>. Our export desk has logged your requirement for{" "}
                      <strong className="font-semibold text-[#5A3218]">{formData.product} ({formData.quantity})</strong>. A commercial representative will contact you at{" "}
                      <span className="font-mono text-xs text-[#7A4824]">{formData.email}</span> within 4 business hours.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-2.5 rounded-xl bg-[#5A3218] text-[#FFFDF8] text-xs font-mono uppercase tracking-wider hover:bg-[#7A4824] transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Row 1: Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-[#7A4824] uppercase mb-1.5 font-medium">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Your Full Name"
                          className="w-full px-4 py-3 rounded-xl bg-[#FFFDF8] border border-[#5A3218]/20 text-sm font-sans placeholder-[#2E2117]/40 focus:outline-none focus:border-[#5A3218]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-[#7A4824] uppercase mb-1.5 font-medium">
                          Company *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="Company / Organization Name"
                          className="w-full px-4 py-3 rounded-xl bg-[#FFFDF8] border border-[#5A3218]/20 text-sm font-sans placeholder-[#2E2117]/40 focus:outline-none focus:border-[#5A3218]"
                        />
                      </div>
                    </div>

                    {/* Row 2: Country & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-[#7A4824] uppercase mb-1.5 font-medium">
                          Country *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          placeholder="Destination Country (e.g. Vietnam, UAE, Netherlands)"
                          className="w-full px-4 py-3 rounded-xl bg-[#FFFDF8] border border-[#5A3218]/20 text-sm font-sans placeholder-[#2E2117]/40 focus:outline-none focus:border-[#5A3218]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-[#7A4824] uppercase mb-1.5 font-medium">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="procurement@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#FFFDF8] border border-[#5A3218]/20 text-sm font-sans placeholder-[#2E2117]/40 focus:outline-none focus:border-[#5A3218]"
                        />
                      </div>
                    </div>

                    {/* Row 3: Phone & Product */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-[#7A4824] uppercase mb-1.5 font-medium">
                          Phone *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+ Country Code & Phone Number"
                          className="w-full px-4 py-3 rounded-xl bg-[#FFFDF8] border border-[#5A3218]/20 text-sm font-sans placeholder-[#2E2117]/40 focus:outline-none focus:border-[#5A3218]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-[#7A4824] uppercase mb-1.5 font-medium">
                          Product *
                        </label>
                        <select
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#FFFDF8] border border-[#5A3218]/20 text-sm font-sans focus:outline-none focus:border-[#5A3218]"
                        >
                          {productOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Quantity */}
                    <div>
                      <label className="block text-xs font-mono text-[#7A4824] uppercase mb-1.5 font-medium">
                        Quantity *
                      </label>
                      <select
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FFFDF8] border border-[#5A3218]/20 text-sm font-sans focus:outline-none focus:border-[#5A3218]"
                      >
                        {quantityOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Row 5: Message */}
                    <div>
                      <label className="block text-xs font-mono text-[#7A4824] uppercase mb-1.5 font-medium">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about target delivery terms (FOB / CIF), destination port, packaging preferences, or specific quality thresholds."
                        className="w-full px-4 py-3 rounded-xl bg-[#FFFDF8] border border-[#5A3218]/20 text-sm font-sans placeholder-[#2E2117]/40 focus:outline-none focus:border-[#5A3218]"
                      />
                    </div>

                    {/* Submit Button: SEND ENQUIRY */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-2xl bg-[#5A3218] hover:bg-[#7A4824] disabled:bg-[#5A3218]/60 text-[#FFFDF8] font-sans font-bold text-sm tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-3 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>SENDING...</span>
                        </div>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>SEND ENQUIRY</span>
                        </>
                      )}
                    </button>

                    <p className="text-[11px] font-mono text-center text-[#7A4824] uppercase tracking-wider">
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
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7A4824]">
              INFRASTRUCTURE CORRIDOR
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2E2117]">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#D5B58C]">
                    CENTRAL PROCESSING HUB
                  </span>
                  <h3 className="font-serif text-2xl font-bold">Bhonti Processing Terminal</h3>
                  <p className="text-xs font-sans text-white/80">
                    Shivpuri District, Madhya Pradesh, India
                  </p>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <div className="text-xs font-mono text-[#7A4824] uppercase">KEY SPECIFICATIONS</div>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#D5B58C]">
                    MARITIME DISPATCH CORRIDOR
                  </span>
                  <h3 className="font-serif text-2xl font-bold">Mundra &amp; Nhava Sheva Ports</h3>
                  <p className="text-xs font-sans text-white/80">
                    Direct Oceanic Access to 35+ Global Markets
                  </p>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <div className="text-xs font-mono text-[#7A4824] uppercase">SHIPPING ADVANTAGES</div>
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
