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

// Components - Lazy load below-fold components for better performance
import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

// Skeleton loader components for premium loading experience
const SectionSkeleton = () => (
  <div className="min-h-[400px] w-full p-6 md:p-12">
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="space-y-3">
        <Skeleton className="h-10 w-3/4 max-w-md mx-auto" />
        <Skeleton className="h-6 w-1/2 max-w-xs mx-auto" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-48 w-full rounded-lg" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-3/5" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CTASkeleton = () => (
  <div className="min-h-[200px] w-full p-6 md:p-12">
    <div className="max-w-4xl mx-auto space-y-4 text-center">
      <Skeleton className="h-12 w-3/4 max-w-2xl mx-auto" />
      <Skeleton className="h-6 w-1/2 max-w-md mx-auto" />
      <Skeleton className="h-12 w-40 mx-auto mt-6 rounded-full" />
    </div>
  </div>
);

// Helper to add delay for testing skeleton loaders (remove in production if too slow)
const delayLoad = <T,>(importPromise: Promise<T>, ms: number = 500): Promise<T> => {
  return Promise.all([
    importPromise,
    new Promise(resolve => setTimeout(resolve, ms))
  ]).then(([module]) => module as T);
};

// Lazy load below-fold components to reduce initial bundle size
const TrustStatement = dynamic(() => delayLoad(import("@/components/sections/TrustStatement").then((mod) => ({ default: mod.TrustStatement }))), {
  loading: () => <SectionSkeleton />,
});

const FounderProblem = dynamic(() => delayLoad(import("@/components/sections/FounderProblem").then((mod) => ({ default: mod.FounderProblem }))), {
  loading: () => <SectionSkeleton />,
});

const ServicesOverview = dynamic(() => delayLoad(import("@/components/sections/ServicesOverview").then((mod) => ({ default: mod.ServicesOverview }))), {
  loading: () => <SectionSkeleton />,
});

const OurProcess = dynamic(() => delayLoad(import("@/components/sections/OurProcess").then((mod) => ({ default: mod.OurProcess }))), {
  loading: () => <SectionSkeleton />,
});

const Testimonials = dynamic(() => delayLoad(import("@/components/sections/Testimonials").then((mod) => ({ default: mod.Testimonials }))), {
  loading: () => <SectionSkeleton />,
});

const OurVision = dynamic(() => delayLoad(import("@/components/sections/OurVision").then((mod) => ({ default: mod.OurVision }))), {
  loading: () => <SectionSkeleton />,
});

const CTA = dynamic(() => delayLoad(import("@/components/sections/CTA").then((mod) => ({ default: mod.CTA }))), {
  loading: () => <CTASkeleton />,
});

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
          // Logo for Google Knowledge Panel - using app/icon.png
          // Next.js automatically serves app/icon.png at /icon.png
          // Google requires: minimum 112x112px (our icon is 512x512px - exceeds requirement)
          logo: {
            '@type': 'ImageObject',
            url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enlivotechnologies.com'}/icon.png`,
            width: 512,
            height: 512,
          },
          // Founding date
          foundingDate: '2025',
          // Contact information for Knowledge Panel
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-89713-63921',
            contactType: 'customer service',
            email: 'Info.enlivo@gmail.com',
            availableLanguage: ['English'],
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
