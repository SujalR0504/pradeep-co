"use client";

import React, { useState } from "react";
import { Send, Phone, Mail, MapPin, MessageCircle, CheckCircle2, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { PRODUCTS } from "@/data/products";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    product: "Bold Peanuts",
    quantity: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#FBF8F2] text-[#2E2117] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#70421F]">
            <span className="w-6 h-[1.5px] bg-[#70421F]" />
            <span>Commercial Inquiries &amp; Quotations</span>
          </div>
          <h2 className="font-serif font-light text-editorial-heading leading-[1.02] tracking-tight text-[#2E2117]">
            START A CONVERSATION
          </h2>
          <p className="text-base sm:text-lg text-[#6E5D4F] font-light leading-relaxed">
            Connect directly with our international export desk for live crop updates, custom caliber availability, container dispatch schedules, and CIF / FOB port pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border border-[#70421F]/15 shadow-[0_16px_40px_rgba(112,66,31,0.04)] transition-all">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 rounded-full bg-[#F4EBDD] border border-[#70421F]/30 flex items-center justify-center mx-auto text-[#70421F]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#2E2117]">
                    Thank You for Your Inquiry
                  </h3>
                  <p className="text-sm text-[#6E5D4F] max-w-md mx-auto leading-relaxed">
                    Our export desk has received your request regarding <strong>{formData.product}</strong>. We will review your specification requirements and respond with a formal quotation within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        country: "",
                        email: "",
                        phone: "",
                        product: "Bold Peanuts",
                        quantity: "",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#70421F] text-[#FFFDF8] text-xs uppercase tracking-wider font-semibold hover:bg-[#8A5A34] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5 group">
                      <label className="text-xs uppercase tracking-wider text-[#70421F] font-semibold block transition-colors">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF8F2] border border-[#70421F]/15 text-sm text-[#2E2117] placeholder-[#6E5D4F]/50 focus:outline-none focus:border-[#70421F] focus:bg-[#FFFFFF] focus:ring-1 focus:ring-[#70421F]/20 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5 group">
                      <label className="text-xs uppercase tracking-wider text-[#70421F] font-semibold block transition-colors">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Global Foods Trading Ltd."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF8F2] border border-[#70421F]/15 text-sm text-[#2E2117] placeholder-[#6E5D4F]/50 focus:outline-none focus:border-[#70421F] focus:bg-[#FFFFFF] focus:ring-1 focus:ring-[#70421F]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5 group">
                      <label className="text-xs uppercase tracking-wider text-[#70421F] font-semibold block transition-colors">
                        Destination Country / Port *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vietnam, Haiphong Port"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF8F2] border border-[#70421F]/15 text-sm text-[#2E2117] placeholder-[#6E5D4F]/50 focus:outline-none focus:border-[#70421F] focus:bg-[#FFFFFF] focus:ring-1 focus:ring-[#70421F]/20 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5 group">
                      <label className="text-xs uppercase tracking-wider text-[#70421F] font-semibold block transition-colors">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="trade@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF8F2] border border-[#70421F]/15 text-sm text-[#2E2117] placeholder-[#6E5D4F]/50 focus:outline-none focus:border-[#70421F] focus:bg-[#FFFFFF] focus:ring-1 focus:ring-[#70421F]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5 group">
                      <label className="text-xs uppercase tracking-wider text-[#70421F] font-semibold block transition-colors">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+Country Code Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF8F2] border border-[#70421F]/15 text-sm text-[#2E2117] placeholder-[#6E5D4F]/50 focus:outline-none focus:border-[#70421F] focus:bg-[#FFFFFF] focus:ring-1 focus:ring-[#70421F]/20 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5 group">
                      <label className="text-xs uppercase tracking-wider text-[#70421F] font-semibold block transition-colors">
                        Target Quantity (Metric Tons)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 1 x 20ft FCL (19 MT)"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF8F2] border border-[#70421F]/15 text-sm text-[#2E2117] placeholder-[#6E5D4F]/50 focus:outline-none focus:border-[#70421F] focus:bg-[#FFFFFF] focus:ring-1 focus:ring-[#70421F]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 group">
                    <label className="text-xs uppercase tracking-wider text-[#70421F] font-semibold block transition-colors">
                      Product Interested In
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FBF8F2] border border-[#70421F]/15 text-sm text-[#2E2117] focus:outline-none focus:border-[#70421F] focus:bg-[#FFFFFF] transition-all"
                    >
                      {PRODUCTS.map((prod) => (
                        <option key={prod.id} value={prod.name}>
                          {prod.name} ({prod.category})
                        </option>
                      ))}
                      <option value="Custom Mixed Container">
                        Custom Mixed Container / Multiple Grades
                      </option>
                    </select>
                  </div>

                  <div className="space-y-1.5 group">
                    <label className="text-xs uppercase tracking-wider text-[#70421F] font-semibold block transition-colors">
                      Specific Requirements / Delivery Terms (FOB/CIF)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Specify count size (e.g. 50/60), packaging type (Jute / Vacuum / PP), discharge port, and shipment timeframe..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FBF8F2] border border-[#70421F]/15 text-sm text-[#2E2117] placeholder-[#6E5D4F]/50 focus:outline-none focus:border-[#70421F] focus:bg-[#FFFFFF] focus:ring-1 focus:ring-[#70421F]/20 transition-all"
                    />
                  </div>

                  <MagneticButton strength={8} className="w-full">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-[#70421F] text-[#FFFDF8] font-semibold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#8A5A34] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting Inquiry...</span>
                      ) : (
                        <>
                          <span>SEND INQUIRY TO EXPORT DESK</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </MagneticButton>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Verified Contact Information Blocks */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Line Card */}
            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#70421F]/15 space-y-3 hover:border-[#70421F]/40 transition-colors shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#F4EBDD] border border-[#70421F]/20 flex items-center justify-center text-[#70421F]">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-xs uppercase tracking-wider text-[#70421F] font-semibold">
                Direct Phone / Mandi Desk
              </div>
              <a
                href={`tel:${COMPANY_INFO.contact.primaryPhone}`}
                className="block font-serif text-2xl text-[#2E2117] hover:text-[#70421F] transition-colors"
              >
                {COMPANY_INFO.contact.formattedPhone}
              </a>
              <p className="text-xs text-[#6E5D4F] font-light">
                Available during Indian mandi trading hours for live commodity quotes and crop availability.
              </p>
            </div>

            {/* WhatsApp Direct Chat Card */}
            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#70421F]/15 space-y-3 hover:border-[#25D366] transition-colors shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#F4EBDD] border border-[#70421F]/20 flex items-center justify-center text-[#25D366]">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="text-xs uppercase tracking-wider text-[#70421F] font-semibold">
                Instant WhatsApp Messenger
              </div>
              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hello%20Pradeep%20Trading%20Company,%20I%20would%20like%20to%20request%20an%20export%20quote`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:underline"
              >
                <span>Chat Directly on WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </a>
              <p className="text-xs text-[#6E5D4F] font-light">
                Fastest channel for lot photos, sample dispatch coordination, and container stuffing updates.
              </p>
            </div>

            {/* Email Inquiries */}
            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#70421F]/15 space-y-3 hover:border-[#70421F]/40 transition-colors shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#F4EBDD] border border-[#70421F]/20 flex items-center justify-center text-[#70421F]">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-xs uppercase tracking-wider text-[#70421F] font-semibold">
                Formal Export Inquiries
              </div>
              <a
                href={`mailto:${COMPANY_INFO.contact.exportEmail}`}
                className="block font-medium text-base text-[#2E2117] hover:text-[#70421F] transition-colors"
              >
                {COMPANY_INFO.contact.exportEmail}
              </a>
              <p className="text-xs text-[#6E5D4F] font-light">
                Send tender requests, purchase contracts, and letter of credit (LC) terms directly.
              </p>
            </div>

            {/* Headquarters & Processing Facility */}
            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#70421F]/15 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#F4EBDD] border border-[#70421F]/20 flex items-center justify-center text-[#70421F]">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs uppercase tracking-wider text-[#70421F] font-semibold">
                Registered Office &amp; Processing
              </div>
              <div className="text-sm font-medium text-[#2E2117]">
                {COMPANY_INFO.location.fullAddress}
              </div>
              <div className="flex items-center gap-2 pt-1 text-xs text-[#6E5D4F]">
                <Clock className="w-3.5 h-3.5 text-[#70421F]" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
