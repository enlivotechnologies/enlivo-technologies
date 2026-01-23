/**
 * app/(marketing)/company/about/page.tsx
 *
 * PURPOSE: About page - company overview, mission, values.
 * WHY: Critical for E-E-A-T. Redesigned for Premium Brand Authority.
 */

import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";
import { ABOUT_SEO, COMPANY_HEADINGS } from "@/seo/company";
import { ORGANIZATION_SCHEMA } from "@/seo/schemas/organization";
import {
  ArrowUpRight,
  Trophy,
  Users,
  Globe2,
  Sparkles,
  Quote,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Page Metadata
 */
export const metadata: Metadata = buildMetadata(ABOUT_SEO);

/**
 * About Page
 */
export default function AboutPage() {
  const headings = COMPANY_HEADINGS.about;

  return (
    <main className="bg-[#FFFFFF] min-h-screen">
      {/* Structured Data */}
      <JsonLd data={ORGANIZATION_SCHEMA} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About" },
        ])}
      />

      {/* -------------------------------------------------------------------------
          SECTION 1: CORE CAPABILITIES HEADING (New Section Added)
          
      -------------------------------------------------------------------------- */}
      <section className="pt-36 pb-20 lg:pt-52 lg:pb-32 overflow-hidde">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-medium text-[#1a1a1a] mb-6 tracking-tight">
            What Defines Enlivo<span className="text-[#2563EB]">.</span>
          </h2>
          <p className="text-base md:text-xl text-[#5a5a5a] max-w-5xl mx-auto leading-relaxed">
            Enlivo is built on a simple belief: technology should be dependable,
            intentional, and designed for the long term. Every decision we make
            from architecture to delivery - is guided by clarity, discipline,
            and a commitment to building systems businesses can trust.
          </p>
        </div>
      </section>

      {/* -------------------------------------------------------------------------
          SECTION 2: BENTO GRID LAYOUT
      -------------------------------------------------------------------------- */}
      <section className="pb-24 pt-8">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LEFT COLUMN: Single Large Quote Card */}
            <div className="flex flex-col h-full">
              <div className="bg-[#F2F2F0] p-10 rounded-[2rem] flex flex-col justify-start h-full relative overflow-hidden">
                <Quote className="w-12 h-12 text-[#E5E5E5] fill-[#E5E5E5] mb-6" />
                <blockquote className="text-3xl font-medium text-[#1a1a1a] leading-tight tracking-tight mb-8">
                  What sets Enlivo apart is our{" "}
                  <span className="text-[#1a1a1a] font-bold">
                    commitment to excellence
                  </span>{" "}
                  and our focus on building{" "}
                  <span className="text-[#1a1a1a] font-bold">
                    long-lasting partnerships.
                  </span>
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-[#1a1a1a]" />
                  <p className="text-sm font-medium text-[#5a5a5a] tracking-wider">
                    Akshay K, Founder & CEO
                  </p>
                </div>
              </div>
            </div>

            {/* CENTER COLUMN: Large Portrait Image */}
            <div className="relative h-[500px] lg:h-auto min-h-[500px] rounded-[2rem] overflow-hidden shadow-sm">
              <Image
                src="https://res.cloudinary.com/dqmryiyhz/image/upload/v1768642767/ceo_mstgxw.png"
                alt="Akshay K - CEO Enlivo Technologies"
                fill
                className="object-cover"
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Text Overlay at Bottom Center */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-8 px-6 z-10">
                <div className="text-center">
                  <p className="text-sm font-medium text-white/90 uppercase tracking-wider mb-2 font-sans" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    Meet the Founder
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight font-sans" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    Akshay K
                  </h3>
                  <p className="text-base text-white/80 mt-1 font-light font-sans" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    Founder & CEO Enlivo Technologies
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Single "About CEO" Card */}
            <div className="flex flex-col h-full">
              <div className="bg-[#F2F2F0] p-10 md:p-12 rounded-[2rem] flex flex-col justify-start h-full transition-colors duration-300 min-h-[500px]">
                <div className="space-y-6">
                  <p className="text-[#1a1a1a] text-sm md:text-lg leading-[1.7] font-normal font-sans tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    <span className="font-normal text-black">Akshay K</span> founded Enlivo with a clear vision: to bridge the gap between ambitious founders and reliable engineering execution. After years of building scalable products and witnessing the challenges founders face, he created Enlivo to solve a fundamental problem.
                  </p>
                  <p className="text-[#1a1a1a] text-sm md:text-lg leading-[1.7] font-normal font-sans tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    Today, he leads a team dedicated to turning ideas into production-ready software — without the hiring headaches, management overhead, or technical debt that derails most startups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
