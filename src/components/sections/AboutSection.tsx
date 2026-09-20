import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sprout, ShieldCheck, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#FAF6EE] text-[#2B1A0F] relative overflow-hidden">
      {/* Editorial Decorative Background Elements */}
      <div className="absolute top-12 left-8 text-[#E8DDCB]/50 font-serif font-bold text-[18vw] leading-none select-none pointer-events-none -z-0">
        01
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: Editorial Heading & Accent Number */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8A572F]">
              <span className="w-6 h-[1.5px] bg-[#8A572F]" />
              <span>About Pradeep Trading</span>
            </div>

            <h2 className="font-serif font-light text-editorial-heading leading-[1.05] tracking-tight text-[#2B1A0F]">
              BUILT ON QUALITY.
              <br />
              <span className="italic font-normal text-[#74431F]">DRIVEN BY TRADE.</span>
            </h2>

            <p className="text-sm uppercase tracking-widest text-[#7D6B5D] font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#8A572F]" />
              <span>Bhonti, Dist. Shivpuri, Madhya Pradesh, India</span>
            </p>

            <div className="pt-4 border-t border-[#E8DDCB]">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#8A572F] font-semibold mb-1">
                    Specialization
                  </div>
                  <div className="font-serif text-xl text-[#2B1A0F]">
                    Groundnut / Peanuts
                  </div>
                  <div className="text-xs text-[#7D6B5D] mt-0.5">
                    Bold, Java & In-Shell Varieties
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider text-[#8A572F] font-semibold mb-1">
                    Processing Standard
                  </div>
                  <div className="font-serif text-xl text-[#2B1A0F]">
                    Double Sortex
                  </div>
                  <div className="text-xs text-[#7D6B5D] mt-0.5">
                    Optical Electronic Cleaning
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Authentic Positioning & Editorial Imagery */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-base sm:text-lg text-[#2B1A0F]/85 font-light leading-relaxed">
              <p className="font-serif text-xl sm:text-2xl text-[#5A3215] italic leading-snug">
                &ldquo;Pradeep Trading Company is focused on connecting quality agricultural products from India with buyers across global markets.&rdquo;
              </p>
              <p>
                Our approach combines careful origin sourcing directly from growers in Madhya Pradesh, meticulous optical color sorting, and trustworthy trade relationships. We focus on producing uniform grain calibers, verified moisture levels, and export-grade protective packaging tailored to the diverse requirements of snack manufacturers, confectionery houses, and food commodity traders.
              </p>
            </div>

            {/* Split Visual Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md group">
                <Image
                  src="/images/harvest-farmer.webp"
                  alt="Harvesting groundnuts in Indian farmland"
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#D4AF7A]">
                    Source Origin
                  </div>
                  <div className="text-sm font-medium font-serif mt-0.5">
                    Direct Farm Harvest & Sourcing
                  </div>
                </div>
              </div>

              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md group">
                <Image
                  src="/images/sortex-machine.webp"
                  alt="Modern Sortex optical cleaning machine"
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#D4AF7A]">
                    Processing Hygiene
                  </div>
                  <div className="text-sm font-medium font-serif mt-0.5">
                    Multi-Spectral Optical Cleaning
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5A3215] text-[#FFFDF8] hover:bg-[#74431F] font-semibold text-xs tracking-wider uppercase transition-all shadow-sm"
              >
                <span>View Product Ecosystem</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="#quality"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#8A572F]/40 text-[#5A3215] hover:bg-[#E8DDCB]/50 font-semibold text-xs tracking-wider uppercase transition-all"
              >
                <span>Our Quality Protocol</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
