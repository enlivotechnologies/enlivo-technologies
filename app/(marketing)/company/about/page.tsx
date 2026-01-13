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
                src="/images/about/image.jpg"
                alt="Akshay K - CEO Enlivo Technologies"
                fill
                className="object-cover"
              />
            </div>

            {/* RIGHT COLUMN: Single "About CEO" Card */}
            <div className="flex flex-col h-full">
              <div className="bg-[#F2F2F0] p-10 rounded-[2rem] flex flex-col justify-end h-full transition-colors duration-300 min-h-[500px]">
                <p className="text-[#5a5a5a] text-lg leading-relaxed font-medium">
                  Under the leadership of Founder and CEO Akshay K, Enlivo
                  operates with a clear focus on building secure, dependable
                  software systems. The company’s approach prioritizes long-term
                  value, operational reliability, and technology decisions that
                  support real business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------
          SECTION 4: VALUES / IMPACT
      -------------------------------------------------------------------------- */}
      <section className="py-24 bg-[#1a1a1a] text-white rounded-t-[3rem] mt-12">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Why Global Leaders <br />
                Trust Enlivo
              </h2>
            </div>
            <button className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300">
              <span>View our Case Studies</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Trophy className="w-6 h-6" />,
                label: "Award Winning",
                desc: "Recognized for excellence in enterprise architecture.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                label: "Elite Talent",
                desc: "Top 1% of engineering talent from around the globe.",
              },
              {
                icon: <Globe2 className="w-6 h-6" />,
                label: "Global Reach",
                desc: "Serving clients across 12 countries and 4 continents.",
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                label: "Innovation First",
                desc: "Pioneering AI and Cloud Native methodologies.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Big Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-white/10">
            {[
              { num: "500+", label: "Projects Delivered" },
              { num: "98%", label: "Client Retention" },
              { num: "12", label: "Global Offices" },
              { num: "50M+", label: "Users Impacted" },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.num}
                </p>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
