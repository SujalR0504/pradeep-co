"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Filter,
  CheckCircle2,
  X,
  Share2,
  User,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import { BLOG_POSTS, BlogPost } from "@/data/blogs";

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalPost, setActiveModalPost] = useState<BlogPost | null>(null);

  const categories = [
    "All",
    "Market Intelligence",
    "Quality & Processing",
    "Export Standards",
    "Agronomy & Health",
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="flex flex-col w-full bg-[#FFFDF8] text-[#2E2117] pt-24">
      {/* Hero Header */}
      <section className="relative w-full py-16 sm:py-24 border-b border-[#5A3218]/15 bg-[#F7F1E7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5A3218]/10 border border-[#5A3218]/20 text-xs font-mono tracking-widest text-[#5A3218] uppercase">
              <BookOpen className="w-3.5 h-3.5 text-[#5A3218]" />
              <span>INDUSTRY JOURNAL • BALAJI EXPORTS INSIGHTS</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.02] text-[#2E2117]">
              Groundnut Intelligence,
              <span className="block italic font-light text-[#5A3218]">
                Agronomy &amp; Global Export Standards.
              </span>
            </h1>

            <p className="text-base sm:text-lg font-sans text-[#2E2117]/80 font-light leading-relaxed">
              In-depth research, APMC mandi trends, optical sorting technology, and maritime cold-chain
              protocols authored by Balaji Exports&apos; on-ground procurement agronomists and food-safety specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Featured Article Banner */}
      <section className="py-12 border-b border-[#5A3218]/15 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-xs font-mono tracking-widest text-[#7A4824] uppercase mb-6 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#A56B3A]" />
            <span>FEATURED COMMODITY REPORT</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-8 rounded-3xl bg-[#F7F1E7] border border-[#5A3218]/20 shadow-sm items-center">
            <div className="relative w-full aspect-[16/10] lg:aspect-auto lg:h-[400px] rounded-2xl overflow-hidden border border-[#5A3218]/15 lg:col-span-6 group">
              <Image
                src={featuredPost.heroImage}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#5A3218] text-[#FFFDF8] text-xs font-mono uppercase tracking-wider">
                  {featuredPost.category}
                </span>
              </div>
            </div>

            <div className="space-y-4 lg:col-span-6">
              <div className="flex items-center gap-4 text-xs font-mono text-[#7A4824]">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {featuredPost.date}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2E2117] leading-tight">
                {featuredPost.title}
              </h2>

              <p className="text-sm sm:text-base font-sans text-[#2E2117]/80 font-light leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="space-y-2 pt-2 border-t border-[#5A3218]/10">
                {featuredPost.highlights.slice(0, 2).map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-sans text-[#2E2117]/90">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#66704A] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-sans text-[#7A4824]">
                  <User className="w-3.5 h-3.5" />
                  <span>{featuredPost.author.name}</span>
                </div>

                <button
                  onClick={() => setActiveModalPost(featuredPost)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5A3218] hover:bg-[#7A4824] text-[#FFFDF8] text-sm font-sans font-medium transition-all shadow-sm group"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Navigation */}
      <section className="py-8 border-b border-[#5A3218]/15 bg-[#F7F1E7]/50 sticky top-20 z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-mono text-[#7A4824] uppercase tracking-wider flex items-center gap-1.5 mr-2 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              Filter By:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all uppercase tracking-wider shrink-0 ${
                  selectedCategory === cat
                    ? "bg-[#5A3218] text-[#FFFDF8] shadow-sm font-semibold"
                    : "bg-[#FFFDF8] text-[#2E2117] hover:bg-[#5A3218]/10 border border-[#5A3218]/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-20 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col justify-between rounded-3xl bg-[#F7F1E7] border border-[#5A3218]/15 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#5A3218]/30"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#E9DFC8]">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#5A3218]/90 backdrop-blur-sm text-[#FFFDF8] text-[11px] font-mono uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs font-mono text-[#7A4824]">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-[#2E2117] leading-snug group-hover:text-[#5A3218] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm font-sans text-[#2E2117]/75 font-light leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-[#5A3218]/10 flex items-center justify-between mt-auto">
                  <div className="text-xs font-sans text-[#7A4824] truncate max-w-[150px]">
                    By {post.author.name}
                  </div>

                  <button
                    onClick={() => setActiveModalPost(post)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#5A3218] group-hover:text-[#7A4824] uppercase tracking-wider transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="font-serif text-2xl text-[#5A3218]">No articles found in this category.</p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-4 px-4 py-2 rounded-xl bg-[#5A3218] text-[#FFFDF8] text-xs font-mono uppercase tracking-wider"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Mandi Intelligence Newsletter Signup Box */}
      <section className="py-16 bg-[#F7F1E7] border-y border-[#5A3218]/15">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5A3218]/10 border border-[#5A3218]/20 text-xs font-mono text-[#5A3218] uppercase">
            <TrendingUp className="w-3.5 h-3.5 text-[#5A3218]" />
            <span>MANDI &amp; EXPORT INTELLIGENCE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2E2117]">
            Subscribe to Weekly Crop &amp; Price Bulletins
          </h2>
          <p className="text-sm sm:text-base font-sans text-[#2E2117]/80 font-light max-w-xl mx-auto">
            Receive direct APMC auction rates, harvest progress reports, and freight forecasts
            curated for international commodity importers and confectionery buyers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
            <input
              type="email"
              placeholder="Enter your corporate email"
              className="flex-1 px-4 py-3 rounded-xl bg-[#FFFDF8] border border-[#5A3218]/20 text-sm font-sans placeholder-[#2E2117]/40 focus:outline-none focus:border-[#5A3218]"
            />
            <button
              onClick={() => alert("Thank you for subscribing to Balaji Exports Market Intelligence.")}
              className="px-6 py-3 rounded-xl bg-[#5A3218] hover:bg-[#7A4824] text-[#FFFDF8] text-sm font-sans font-medium transition-colors shrink-0"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Article Detail Modal / Reader */}
      {activeModalPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto"
          onClick={() => setActiveModalPost(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#FFFDF8] text-[#2E2117] rounded-3xl border border-[#5A3218]/20 shadow-2xl overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative w-full h-64 sm:h-80 bg-[#E9DFC8]">
              <Image
                src={activeModalPost.heroImage}
                alt={activeModalPost.title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setActiveModalPost(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#5A3218] text-[#FFFDF8] text-xs font-mono uppercase tracking-wider">
                  {activeModalPost.category}
                </span>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-10 space-y-6 max-h-[65vh] overflow-y-auto">
              <div className="flex items-center gap-4 text-xs font-mono text-[#7A4824] border-b border-[#5A3218]/10 pb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {activeModalPost.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activeModalPost.readTime}
                </span>
                <span>•</span>
                <span className="text-[#5A3218] font-semibold">{activeModalPost.author.name}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl text-[#2E2117] leading-tight">
                {activeModalPost.title}
              </h2>

              <p className="text-base font-sans text-[#2E2117]/85 font-light leading-relaxed italic border-l-2 border-[#5A3218] pl-4 bg-[#F7F1E7] py-2 rounded-r-lg">
                {activeModalPost.content.intro}
              </p>

              {/* Key Highlights */}
              <div className="p-5 rounded-2xl bg-[#F7F1E7] border border-[#5A3218]/15 space-y-2.5">
                <div className="text-xs font-mono tracking-widest text-[#5A3218] uppercase font-semibold">
                  KEY TAKEAWAYS &amp; SPECIFICATIONS
                </div>
                {activeModalPost.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm font-sans text-[#2E2117]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#66704A] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Article Sections */}
              <div className="space-y-6 pt-2">
                {activeModalPost.content.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#5A3218]">
                      {sec.heading}
                    </h3>
                    <p className="text-sm sm:text-base font-sans text-[#2E2117]/80 font-light leading-relaxed">
                      {sec.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Conclusion */}
              <div className="pt-4 border-t border-[#5A3218]/15">
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#7A4824] mb-2 font-semibold">
                  BALAJI EXPORTS COMMENTARY
                </h4>
                <p className="text-sm sm:text-base font-sans text-[#2E2117]/80 font-light leading-relaxed">
                  {activeModalPost.content.conclusion}
                </p>
              </div>

              {/* Author Box */}
              <div className="p-4 rounded-2xl bg-[#F7F1E7] border border-[#5A3218]/10 flex items-center justify-between">
                <div>
                  <div className="font-serif text-base font-semibold text-[#2E2117]">{activeModalPost.author.name}</div>
                  <div className="text-xs font-sans text-[#7A4824]">{activeModalPost.author.role}</div>
                </div>
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-xl bg-[#5A3218] hover:bg-[#7A4824] text-[#FFFDF8] text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  Consult Agronomist
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Reusable Contact CTA */}
      <ContactCtaSection />
    </div>
  );
}
