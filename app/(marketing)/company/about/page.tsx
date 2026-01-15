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
    <main className="bg-[#F9FAF8] min-h-screen">
      {/* Structured Data */}
      <JsonLd data={ORGANIZATION_SCHEMA} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Company", path: "/company" },
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
                src="https://res.cloudinary.com/dqmryiyhz/image/upload/v1768466580/image_hp6od6.jpg"
                alt="Akshay K - CEO Enlivo Technologies"
                fill
                className="object-cover"
              />
            </div>

            {/* RIGHT COLUMN: Single "About CEO" Card */}
            <div className="flex flex-col h-full">
              <div className="bg-[#F2F2F0] p-10 rounded-[2rem] flex flex-col justify-end h-full transition-colors duration-300 min-h-[500px]">
                <p className="text-[#5a5a5a] text-base leading-relaxed font-medium">
                  Under the leadership of Founder & CEO{" "}
                  <span className="font-bold text-black">Akshay K</span>, Enlivo
                  operates with a clear focus on building{" "}
                  <span className="font-bold text-black">secure</span>,{" "}
                  <span className="font-bold text-black">dependable </span>
                  software systems. The company’s approach prioritizes{" "}
                  <span className="font-bold text-black">
                    long-term value
                  </span>,{" "}
                  <span className="font-bold text-black">
                    operational reliability
                  </span>
                  , and{" "}
                  <span className="font-bold text-black">
                    technology decisions
                  </span>{" "}
                  that support real{" "}
                  <span className="font-bold text-black">business growth</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
