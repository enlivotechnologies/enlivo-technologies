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

// --- Stats Data ---
const STATS = [
  { value: "15+", label: "Projects delivered" },
  { value: "8", label: "Full-time experts" },
  { value: "$1M+", label: "Revenue generated" },
  { value: "4", label: "Countries served" },
  { value: "100%", label: "On-time delivery" },
];

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
          SECTION 1: CORE CAPABILITIES HEADING
      -------------------------------------------------------------------------- */}
      <section className="pt-36 pb-20 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16 text-center">
          <h2 className="text-3xl md:text-5xl font-medium text-[#1a1a1a] mb-6 tracking-tight">
            What Defines Enlivo<span className="text-[#2563EB]">.</span>
          </h2>
          <p className="text-base md:text-xl text-[#5a5a5a] max-w-5xl mx-auto leading-relaxed">
            We started with one belief: most startups don't fail because of bad ideas - they fail because of bad execution. Enlivo exists to fix that. We are a product engineering company that turns half baked ideas into production ready software - without the chaos most founders expect.
          </p>
        </div>
      </section>

{/* -------------------------------------------------------------------------
          SECTION 2: BY THE NUMBERS (Clean, Editorial UI)
      -------------------------------------------------------------------------- */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[100rem] mx-auto w-full">
          
          {/* Premium Grid: 
            - border-y border-dashed creates the top and bottom dashed lines
            - md:divide-x creates the solid vertical dividers
          */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:divide-x divide-gray-200 border-y border-dashed border-gray-200">
            {STATS.map((stat, index) => (
              <div 
                key={index} 
                className={cn(
                  // Reduced padding to py-8 lg:py-10 to tighten the height of the vertical lines
                  "flex flex-col items-center justify-center text-center px-4 py-8 lg:py-10"
                )}
              >
                {/* Numbers */}
                <h3 className="text-5xl lg:text-[4.5rem] font-light text-[#1a1a1a] tracking-tight mb-2 lg:mb-3">
                  {stat.value}
                </h3>
                {/* Labels */}
                <p className="text-[13px] sm:text-[15px] text-[#1a1a1a] font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* -------------------------------------------------------------------------
          SECTION 3: COMPANY STORY (Narrative Section)
      -------------------------------------------------------------------------- */}
      <section className="py-24 md:py-32 bg-[#FFFFFF]">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Sticky Heading */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <p className="text-[#2563EB] text-base font-medium mb-2">
                Our Origin
              </p>
              <h2 className="text-4xl md:text-5xl font-medium text-black tracking-tight">
                How we started.
              </h2>
            </div>

            {/* Right Column: Story Narrative */}
            <div className="lg:col-span-8 max-w-3xl">
              {/* The Hook */}
              <p className="text-2xl md:text-[2rem] font-medium text-black leading-[1.3] mb-10 tracking-tight">
                Enlivo was born out of frustration. Our founder Akshay K spent years inside product teams watching the same pattern repeat - startups with great ideas burning months and money on agencies that overpromised and underdelivered.
              </p>
              
              {/* The Body */}
              <div className="space-y-8 text-lg md:text-[1.125rem] text-[#5a5a5a] leading-[1.8]">
                <p>
                  The problem wasn't the idea. It was the gap between what founders imagined and what engineering teams actually built. There was a desperate need for teams that didn't just write code blindly, but actually cared about the business outcome.
                </p>
                <p>
                  In 2024, Akshay built Enlivo to completely close that gap. We didn't want to be just another outsourced dev shop taking orders. We wanted to be a true product partner.
                </p>
                <p>
                Today, we operate with one standard: your product ships on time, works as promised, and is built to grow with you. When you build with Enlivo, you're not just getting engineers; you're getting a team that is as deeply invested in your product's success as you are.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------
          SECTION 4: BENTO GRID LAYOUT (About the Founder)
      -------------------------------------------------------------------------- */}
      <section className="pb-24 pt-8 lg:pt-12 bg-[#FFFFFF]">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* LEFT COLUMN: Single Large Quote Card */}
            <div className="flex flex-col h-full">
              <div className="bg-[#F2F2F0] p-10 rounded-[2rem] flex flex-col justify-start h-full relative overflow-hidden">
                <Quote className="w-12 h-12 text-[#E5E5E5] fill-[#E5E5E5] mb-6" />
                <blockquote className="text-3xl font-medium text-[#1a1a1a] leading-tight tracking-tight mb-8">
                We don't take on projects we can't deliver. That selectivity is what makes us good at what we do.
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-[#1a1a1a]" />
                  <p className="text-sm font-medium text-[#5a5a5a] tracking-wider">
                    Founder & CEO, Akshay K
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
                    Akshay brings over 8 years of hands-on experience building scalable SaaS products across cloud infrastructure, backend systems, and product strategy. Before founding Enlivo, he led engineering across multiple product teams, where he saw firsthand how the wrong technical decisions early on could cripple a startup's growth.
                    <br/><br/>
                    He founded Enlivo to give startup founders what they actually need - a technical partner who owns the outcome, not just the code.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------
          SECTION 5: MISSION & VISION (New Section)
      -------------------------------------------------------------------------- */}
      <section className="py-24 md:py-32 bg-white text-black">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/15">
            
            {/* Our Mission */}
            <div className="md:pr-12 lg:pr-20 pb-12 md:pb-0">
              <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <h2 className="text-[#2563EB] text-base font-medium">
                  Our Mission
                </h2>
              </div>
              <p className="text-3xl sm:text-4xl lg:text-[2rem] font-medium leading-[1.3] tracking-tight text-black/95">
                To make world-class product engineering accessible to every ambitious founder - regardless of where they are in the world.
              </p>
            </div>

            {/* Our Vision */}
            <div className="md:pl-12 lg:pl-20 pt-12 md:pt-0">
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <h2 className="text-[#2563EB] text-base font-medium">
                  Our Vision
                </h2>
              </div>
              <p className="text-3xl sm:text-4xl lg:text-[2rem] font-medium leading-[1.3] tracking-tight text-black/95">
              To be the go-to product engineering partner for early-stage startups in the US, UK, and Europe
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}