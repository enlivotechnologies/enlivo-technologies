/**
 * app/page.tsx
 *
 * PURPOSE: Homepage - the most important page for SEO.
 * WHY: Homepage typically has highest authority, passes link equity to other pages.
 *
 * SEO CRITICAL:
 * - Clear H1 with primary keyword
 * - Schema.org structured data
 * - Fast load time
 * - Internal links to key pages
 */

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  JsonLd,
  buildOrganizationSchema,
  buildWebSiteSchema,
} from "@/lib/schema";
import { HOME_SEO, HOME_HEADINGS } from "@/seo/home";

// Components
import { Hero } from "@/components/sections/Hero";
// import { QuoteSection } from "@/components/sections/QuoteSection";
import { TrustStatement } from "@/components/sections/TrustStatement";
import { FounderProblem } from "@/components/sections/FounderProblem";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { OurProcess } from "@/components/sections/OurProcess";
import { Testimonials } from "@/components/sections/Testimonials";
import { OurVision } from "@/components/sections/OurVision";
// import { Stats } from "@/components/sections/Stats";
// import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { CTA } from "@/components/sections/CTA";

/**
 * Homepage Metadata
 * Generated from centralized SEO config
 */
export const metadata: Metadata = buildMetadata(HOME_SEO);

/**
 * Homepage Component
 *
 * STRUCTURE:
 * - Hero with H1 (most important)
 * - Trust indicators
 * - Services overview (internal linking)
 * - Social proof (stats, case studies)
 * - CTA section
 */
export default function HomePage() {
  return (
    <>
      {/* Structured Data - Organization Schema with Logo for Google Knowledge Panel */}
      <JsonLd 
        data={buildOrganizationSchema({
          // Ensure logo is properly configured for Google search
          logo: {
            '@type': 'ImageObject',
            url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enlivotechnologies.com'}/images/navbar/EnlivotechnologiesLogo.png`,
            width: 112,
            height: 112,
          },
        })} 
      />
      <JsonLd data={buildWebSiteSchema()} />

      {/* Hero Section - Contains H1 */}
      <Hero />

      {/* Quote Section - Premium testimonial-style layout */}
      {/* <QuoteSection /> */}

      {/* Trust Statement / Value Proposition */}
      <TrustStatement />

      {/* Core Problem Section - Why Most Founder-Led Products Fail */}
      <FounderProblem />

      {/* Services Overview - Critical for internal linking */}
      <section id="services-overview" aria-labelledby="services-heading">
        <h2 id="services-heading" className="sr-only">
          {HOME_HEADINGS.sections.services}
        </h2>
        <ServicesOverview />
      </section>

      {/* Our Process - Development methodology */}
      <OurProcess />

      {/* Client Testimonials - Social Proof & Trust Signals */}
      <Testimonials />

      {/* Our Vision - Company vision with statistics */}
      <OurVision />

      {/* Stats Section - Social Proof */}
      {/* <section aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">
          {HOME_HEADINGS.sections.stats}
        </h2>
        <Stats />
      </section> */}

      {/* Case Studies Preview - More Social Proof + Internal Links */}
      {/* <section aria-labelledby="case-studies-heading">
        <h2 id="case-studies-heading" className="sr-only">
          {HOME_HEADINGS.sections.caseStudies}
        </h2>
        <CaseStudiesPreview />
      </section> */}

      {/* Call to Action */}
      <CTA
        heading={HOME_HEADINGS.sections.cta}
        // TODO: Add description and button props
      />
    </>
  );
}
