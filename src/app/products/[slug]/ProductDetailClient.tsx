"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Package,
  Sparkles,
  Send,
  MapPin,
  MessageCircle,
  Mail,
  ChevronRight,
  Info
} from "lucide-react";
import { Product, PRODUCTS } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";
import ContactCtaSection from "@/components/sections/ContactCtaSection";

interface Props {
  product: Product;
}

export default function ProductDetailClient({ product }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    quantity: "",
    notes: ""
  });

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);
  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF8] text-[#2B1A0F] pt-8 sm:pt-10 pb-20">
      <div className="site-container max-w-[1280px] mx-auto">
        {/* Breadcrumbs & Back Link Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E8DDCB]/60">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#7D6B5D]">
            <Link href="/" className="hover:text-[#5A3215] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#8A572F]" />
            <Link href="/products" className="hover:text-[#5A3215] transition-colors">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#8A572F]" />
            <span className="text-[#2B1A0F] font-semibold">{product.name}</span>
          </nav>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#8A572F] hover:text-[#5A3215] transition-colors bg-[#FAF6EE] px-3.5 py-1.5 rounded-full border border-[#E8DDCB]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Products</span>
          </Link>
        </div>

        {/* Main Product Layout: Gallery & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Left: Gallery */}
          <div className="lg:col-span-6 space-y-4">
            {/* Primary Large Image */}
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#FAF6EE] border border-[#E8DDCB] shadow-md">
              <Image
                src={images[selectedImage] || product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover transition-all duration-500"
              />
              <div className="absolute top-4 left-4 z-10 px-3.5 py-1 bg-[#2B1A0F]/85 backdrop-blur-md text-[#FFFDF8] text-xs font-semibold uppercase tracking-wider rounded-full border border-white/10">
                {product.category}
              </div>
            </div>

            {/* Thumbnail Selectors */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                      selectedImage === idx
                        ? "border-[#5A3215] shadow-md scale-105"
                        : "border-[#E8DDCB] opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Origin & Availability Badges */}
            <div className="p-5 rounded-2xl bg-[#FAF6EE] border border-[#E8DDCB] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#7D6B5D] flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#8A572F]" />
                  Agricultural Origin:
                </span>
                <span className="font-semibold text-[#2B1A0F]">{product.origin}</span>
              </div>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-[#E8DDCB]/60">
                <span className="text-[#7D6B5D] flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8A572F]" />
                  Processing Grade:
                </span>
                <span className="font-semibold text-[#5A3215]">{product.grade}</span>
              </div>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-[#E8DDCB]/60">
                <span className="text-[#7D6B5D] flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#8A572F]" />
                  Supply Availability:
                </span>
                <span className="font-semibold text-[#2B1A0F]">{product.availability}</span>
              </div>
            </div>
          </div>

          {/* Right: Specifications & CTAs */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2B1A0F] leading-[1.1] tracking-[-0.02em]">
                {product.name}
              </h1>
              <p className="text-base sm:text-lg text-[#7D6B5D] font-light leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => setInquiryModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-[#5A3215] text-[#FFFDF8] font-semibold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#74431F] transition-all shadow-md cursor-pointer hover:scale-[1.01]"
              >
                <span>Request Product Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=Hello%20Pradeep%20Trading%20Company,%20I%20am%20inquiring%20about%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Quote</span>
              </a>
            </div>

            {/* Export Specifications Table */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#8A572F] font-semibold flex items-center gap-2">
                <Info className="w-4 h-4" />
                Technical Export Specifications
              </h3>

              <div className="border border-[#E8DDCB] rounded-2xl overflow-hidden bg-[#FAF6EE]">
                <div className="divide-y divide-[#E8DDCB] text-xs sm:text-sm">
                  {product.specs.counts && (
                    <div className="grid grid-cols-2 p-3.5 bg-[#FFFDF8]">
                      <span className="text-[#7D6B5D]">Count / Ounce Caliber</span>
                      <span className="font-semibold text-[#2B1A0F]">{product.specs.counts}</span>
                    </div>
                  )}
                  {product.size && !product.specs.counts && (
                    <div className="grid grid-cols-2 p-3.5 bg-[#FFFDF8]">
                      <span className="text-[#7D6B5D]">Grade &amp; Sizing</span>
                      <span className="font-semibold text-[#2B1A0F]">{product.size}</span>
                    </div>
                  )}
                  {product.specs.moisture && (
                    <div className="grid grid-cols-2 p-3.5">
                      <span className="text-[#7D6B5D]">Moisture Ceiling</span>
                      <span className="font-semibold text-[#2B1A0F]">{product.specs.moisture}</span>
                    </div>
                  )}
                  {product.specs.purity && (
                    <div className="grid grid-cols-2 p-3.5 bg-[#FFFDF8]">
                      <span className="text-[#7D6B5D]">Purity Rating</span>
                      <span className="font-semibold text-[#2B1A0F]">{product.specs.purity}</span>
                    </div>
                  )}
                  {product.specs.protein && (
                    <div className="grid grid-cols-2 p-3.5 bg-[#FFFDF8]">
                      <span className="text-[#7D6B5D]">Crude Protein</span>
                      <span className="font-semibold text-[#2B1A0F]">{product.specs.protein}</span>
                    </div>
                  )}
                  {product.specs.oilContent && (
                    <div className="grid grid-cols-2 p-3.5">
                      <span className="text-[#7D6B5D]">Natural Oil Content</span>
                      <span className="font-semibold text-[#2B1A0F]">{product.specs.oilContent}</span>
                    </div>
                  )}
                  {(product.specs.admixture || product.specs.foreignMatter) && (
                    <div className="grid grid-cols-2 p-3.5 bg-[#FFFDF8]">
                      <span className="text-[#7D6B5D]">Foreign Matter / Admixture</span>
                      <span className="font-semibold text-[#2B1A0F]">{product.specs.admixture || product.specs.foreignMatter}</span>
                    </div>
                  )}
                  {product.specs.aflatoxin && (
                    <div className="grid grid-cols-2 p-3.5">
                      <span className="text-[#7D6B5D]">Aflatoxin Limits</span>
                      <span className="font-semibold text-[#2B1A0F]">{product.specs.aflatoxin}</span>
                    </div>
                  )}
                  {product.specs.sugarContent && (
                    <div className="grid grid-cols-2 p-3.5 bg-[#FFFDF8]">
                      <span className="text-[#7D6B5D]">Natural Sugars</span>
                      <span className="font-semibold text-[#2B1A0F]">{product.specs.sugarContent}</span>
                    </div>
                  )}
                  {product.specs.crudeFiber && (
                    <div className="grid grid-cols-2 p-3.5">
                      <span className="text-[#7D6B5D]">Crude Fiber</span>
                      <span className="font-semibold text-[#2B1A0F]">{product.specs.crudeFiber}</span>
                    </div>
                  )}
                  {product.specs.brokenKernels && (
                    <div className="grid grid-cols-2 p-3.5 bg-[#FFFDF8]">
                      <span className="text-[#7D6B5D]">Broken Kernels</span>
                      <span className="font-semibold text-[#2B1A0F]">{product.specs.brokenKernels}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Packaging Options */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#8A572F] font-semibold flex items-center gap-2">
                <Package className="w-4 h-4" />
                Available Export Packaging
              </h3>
              {product.packagingNote ? (
                <p className="text-xs text-[#55473E] leading-relaxed">
                  We offer customised packaging solutions as per our customers&apos; specific requirements. Our packaging options include:
                </p>
              ) : null}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.packaging.map((pack, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF6EE] border border-[#E8DDCB] text-xs text-[#2B1A0F]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#8A572F] flex-shrink-0" />
                    <span>{pack}</span>
                  </div>
                ))}
              </div>
              {product.packagingNote ? (
                <p className="text-xs italic text-[#7A4824] pt-1">
                  (Or customised packaging as per buyer requirements.)
                </p>
              ) : null}
            </div>

            {/* Applications */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#8A572F] font-semibold">
                Industrial Applications
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-full bg-[#FFFDF8] border border-[#E8DDCB] text-xs text-[#5A3215] font-medium"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="pt-16 border-t border-[#E8DDCB] space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#2B1A0F] tracking-tight">
              Explore Other Varieties
            </h3>
            <Link
              href="/products"
              className="text-xs font-semibold uppercase tracking-wider text-[#8A572F] hover:text-[#5A3215] inline-flex items-center gap-1"
            >
              <span>View Full Catalog</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                href={`/products/${rel.slug}`}
                className="group flex flex-col justify-between h-full p-5 rounded-2xl bg-[#FAF6EE] border border-[#E8DDCB] hover:border-[#8A572F] transition-all"
              >
                <div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-white">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-[#8A572F] font-semibold mb-1">
                    {rel.category}
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#2B1A0F] group-hover:text-[#5A3215] transition-colors line-clamp-1">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-[#7D6B5D] mt-1 line-clamp-2 min-h-[34px]">
                    {rel.shortDescription}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E8DDCB]/60 mt-3 flex items-center justify-between text-xs font-semibold text-[#8A572F] group-hover:text-[#5A3215]">
                  <span>View Grade Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM CONTACT CTA */}
      <ContactCtaSection
        title={`READY TO IMPORT ${product.name.toUpperCase()}?`}
        subtitle="Request calibrated sizing, packaging preferences, and direct FOB Mundra or CIF discharge port quotations."
        className="mt-20"
      />

      {/* QUICK INQUIRY MODAL */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FFFDF8] border border-[#E8DDCB] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setInquiryModalOpen(false);
                setInquirySent(false);
              }}
              className="absolute top-6 right-6 text-[#7D6B5D] hover:text-[#2B1A0F] text-lg font-bold p-1 cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            {inquirySent ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#FAF6EE] border border-[#8A572F] flex items-center justify-center mx-auto text-[#5A3215]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-[#2B1A0F]">
                  Inquiry Dispatched
                </h3>
                <p className="text-xs sm:text-sm text-[#7D6B5D] leading-relaxed">
                  Thank you! Our export desk will review your inquiry for <strong>{product.name}</strong> and contact you with current CIF / FOB rates.
                </p>
                <button
                  onClick={() => {
                    setInquiryModalOpen(false);
                    setInquirySent(false);
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#5A3215] text-[#FFFDF8] text-xs font-semibold uppercase tracking-wider"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#8A572F] font-semibold">
                    Product Export Inquiry
                  </span>
                  <h3 className="font-serif text-2xl text-[#2B1A0F] mt-0.5">
                    {product.name}
                  </h3>
                </div>

                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#8A572F] font-semibold block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Robert Vance"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EE] border border-[#E8DDCB] text-xs sm:text-sm text-[#2B1A0F] focus:outline-none focus:border-[#5A3215]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs uppercase tracking-wider text-[#8A572F] font-semibold block mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="buyer@domain.com"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EE] border border-[#E8DDCB] text-xs sm:text-sm text-[#2B1A0F] focus:outline-none focus:border-[#5A3215]"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wider text-[#8A572F] font-semibold block mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+Country Phone"
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EE] border border-[#E8DDCB] text-xs sm:text-sm text-[#2B1A0F] focus:outline-none focus:border-[#5A3215]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs uppercase tracking-wider text-[#8A572F] font-semibold block mb-1">
                        Target Country / Port
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rotterdam / Dubai"
                        value={inquiryForm.country}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, country: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EE] border border-[#E8DDCB] text-xs sm:text-sm text-[#2B1A0F] focus:outline-none focus:border-[#5A3215]"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wider text-[#8A572F] font-semibold block mb-1">
                        Quantity (MT)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 20 MT"
                        value={inquiryForm.quantity}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, quantity: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EE] border border-[#E8DDCB] text-xs sm:text-sm text-[#2B1A0F] focus:outline-none focus:border-[#5A3215]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#8A572F] font-semibold block mb-1">
                      Notes / Custom Packaging
                    </label>
                    <textarea
                      rows={3}
                      placeholder="State count sizes, delivery terms (FOB/CIF), or packaging preferences..."
                      value={inquiryForm.notes}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EE] border border-[#E8DDCB] text-xs sm:text-sm text-[#2B1A0F] focus:outline-none focus:border-[#5A3215]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 rounded-full bg-[#5A3215] text-[#FFFDF8] font-semibold text-xs tracking-wider uppercase hover:bg-[#74431F] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Send Product Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
