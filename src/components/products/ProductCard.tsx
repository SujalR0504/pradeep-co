"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      rotateY: x * 0.04,
      rotateX: -y * 0.04,
      transformPerspective: 900,
      duration: 0.3,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor="VIEW"
      className="product-card-target group relative bg-[#FFFDF8] border border-[#E8DDCB] transition-colors duration-400 hover:border-[#8A572F] hover:shadow-[0_20px_45px_rgba(43,26,15,0.09)] flex flex-col justify-between overflow-hidden will-change-transform"
    >
      {/* Top Image Container: COMPLETELY CLEAN (NO TEXT OVERLAYS) */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF6EE] border-b border-[#E8DDCB]/60 flex items-center justify-center p-4">
        <Image
          ref={imageRef}
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4 bg-gradient-to-b from-transparent to-[#FAF6EE]/30 group-hover:to-[#FAF6EE]/80 transition-colors">
        <div>
          {/* Category Tag */}
          <div className="mb-2">
            <span className="inline-block px-2 py-0.5 rounded-full bg-[#5A3215]/10 text-[#5A3215] text-[9px] font-mono font-bold uppercase tracking-wider whitespace-nowrap">
              {product.category}
            </span>
          </div>

          <h3
            ref={titleRef}
            className="font-sans text-xl font-bold text-[#2B1A0F] group-hover:text-[#5A3215] transition-colors line-clamp-1 mb-1.5"
          >
            {product.name}
          </h3>

          <p className="text-xs text-[#7D6B5D] font-normal line-clamp-2 h-[38px] leading-relaxed m-0 mb-3">
            {product.shortDescription}
          </p>
        </div>

        {/* 2-Column Specifications List */}
        <div className="pt-3 pb-2 border-t border-[#E8DDCB]/80 flex flex-col gap-2.5">
          <div className="flex items-start justify-between gap-3">
            <span className="w-[120px] shrink-0 font-mono text-[9px] sm:text-[9.5px] font-bold text-[#8A572F] uppercase tracking-wider pt-0.5">
              COUNTS / OUNCE
            </span>
            <span className="text-right font-sans font-medium text-[#2B1A0F] text-[10.5px] sm:text-[11px] leading-relaxed">
              {product.specs.counts || product.size || "Custom Caliber"}
            </span>
          </div>

          <div className="flex items-start justify-between gap-3">
            <span className="w-[120px] shrink-0 font-mono text-[9px] sm:text-[9.5px] font-bold text-[#8A572F] uppercase tracking-wider pt-0.5">
              MOISTURE CEILING
            </span>
            <span className="text-right font-sans font-medium text-[#2B1A0F] text-[10.5px] sm:text-[11px] leading-relaxed">
              {product.specs.moisture || "7.0% Max"}
            </span>
          </div>

          <div className="flex items-start justify-between gap-3">
            <span className="w-[120px] shrink-0 font-mono text-[9px] sm:text-[9.5px] font-bold text-[#8A572F] uppercase tracking-wider pt-0.5">
              AFLATOXIN SPEC
            </span>
            <span className="text-right font-sans font-medium text-[#2B1A0F] text-[10.5px] sm:text-[11px] leading-relaxed">
              {product.specs.aflatoxin || "Below 4 ppb"}
            </span>
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-2 mt-auto">
          <Link
            href={`/products/${product.slug}`}
            className="w-full inline-flex items-center justify-between py-3 px-5 rounded-full bg-[#FAF6EE] text-[#2B1A0F] border border-[#E8DDCB] text-xs font-bold uppercase tracking-wider transition-all duration-300 group-hover:bg-[#5A3215] group-hover:text-[#FFFDF8] group-hover:border-[#5A3215]"
          >
            <span>View Specifications</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
