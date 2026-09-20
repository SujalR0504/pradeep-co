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
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF6EE]">
        <Image
          ref={imageRef}
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block px-3 py-1 bg-[#2B1A0F]/85 backdrop-blur-md text-[#F7F1E7] text-[11px] font-medium tracking-widest uppercase border border-white/10">
            {product.category}
          </span>
        </div>

        {/* Origin Pill */}
        <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="inline-block px-2.5 py-1 bg-[#FFFDF8]/90 text-[#5A3215] text-[10px] font-semibold tracking-wider uppercase border border-[#E8DDCB]">
            Origin: India
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-4 bg-gradient-to-b from-transparent to-[#FAF6EE]/30 group-hover:to-[#FAF6EE]/80 transition-colors">
        <div className="space-y-2">
          {product.hindiName && (
            <span className="text-xs text-[#8A572F] font-medium tracking-wider block">
              {product.hindiName}
            </span>
          )}
          <h3
            ref={titleRef}
            className="font-serif text-2xl font-normal text-[#2B1A0F] group-hover:text-[#5A3215] transition-all duration-300 transform group-hover:translate-x-1 line-clamp-1"
          >
            {product.name}
          </h3>
          <p className="text-sm text-[#7D6B5D] font-light line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Key Specs Preview Tag */}
        {product.specs.counts && (
          <div className="pt-2 border-t border-[#E8DDCB]/60 text-xs text-[#5A3215] flex items-center justify-between">
            <span className="text-[#7D6B5D]">Export Caliber:</span>
            <span className="font-semibold">{product.specs.counts}</span>
          </div>
        )}

        {/* Action Link */}
        <div className="pt-2">
          <Link
            href={`/products/${product.slug}`}
            className="w-full inline-flex items-center justify-between py-3 px-4 bg-[#FAF6EE] text-[#2B1A0F] border border-[#E8DDCB] text-xs font-semibold uppercase tracking-wider transition-all duration-300 group-hover:bg-[#5A3215] group-hover:text-[#FFFDF8] group-hover:border-[#5A3215]"
          >
            <span>View Specifications</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12" />
          </Link>
        </div>
      </div>
    </div>
  );
}
