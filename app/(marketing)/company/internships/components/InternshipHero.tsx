"use client";

/**
 * InternshipHero Component
 * 
 * Hero section for the internships page with background image,
 * CTA buttons, and program highlights.
 */

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function InternshipHero() {
  return (
    <section className="relative pt-6 pb-16 md:pt-8 md:pb-24">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-8">
        <div className="relative rounded-3xl overflow-hidden px-8 sm:px-10 lg:px-12 pt-10 md:pt-12 pb-16 md:pb-20 text-center min-h-[500px] md:min-h-[600px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://res.cloudinary.com/dqmryiyhz/image/upload/v1768658310/intern_buar0r.jpg"
              alt="Internship program background"
              fill
              className="object-cover"
              priority
            />
            {/* Dark Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono text-green-400 font-medium">2026 Registration Now Open</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1] max-w-4xl mx-auto">
              Bridging the Gap Between College Learning and Industry Engineering
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              We provide structured internships where students work on real-world projects, follow industry workflows, and gain hands-on engineering experience.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#areas-of-internship"
                className="h-12 px-8 rounded-full bg-white hover:bg-gray-100 text-black font-medium flex items-center gap-2 transition-all hover:scale-105 shadow-lg"
              >
                Apply for Internship
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/company/internships/full-stack-developer#syllabus"
                className="h-12 px-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium flex items-center gap-2 transition-all hover:scale-105"
              >
                See Curriculum
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
