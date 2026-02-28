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
  buildFAQSchema,
} from "@/lib/schema";
import { SITE_CONFIG } from "@/lib/constants";
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

// Lazy load below-fold components — NO artificial delay (it causes layout shifts + scroll jank)
const TrustStatement = dynamic(() => import("@/components/sections/TrustStatement").then((mod) => ({ default: mod.TrustStatement })), {
  loading: () => <SectionSkeleton />,
});

const FounderProblem = dynamic(() => import("@/components/sections/FounderProblem").then((mod) => ({ default: mod.FounderProblem })), {
  loading: () => <SectionSkeleton />,
});

const ServicesOverview = dynamic(() => import("@/components/sections/ServicesOverview").then((mod) => ({ default: mod.ServicesOverview })), {
  loading: () => <SectionSkeleton />,
});

const Portfolio = dynamic(() => import("@/components/sections/Portfolio").then((mod) => ({ default: mod.Portfolio })), {
  loading: () => <SectionSkeleton />,
});

const OurProcess = dynamic(() => import("@/components/sections/howwework").then((mod) => ({ default: mod.OurProcess })), {
  loading: () => <SectionSkeleton />,
});

const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((mod) => ({ default: mod.Testimonials })), {
  loading: () => <SectionSkeleton />,
});

const OurVision = dynamic(() => import("@/components/sections/FAQ").then((mod) => ({ default: mod.OurVision })), {
  loading: () => <SectionSkeleton />,
});

const TrustedBy = dynamic(() => import("@/components/sections/TrustedBy").then((mod) => ({ default: mod.TrustedBy })), {
  loading: () => <div className="h-20 bg-white border-t border-b border-gray-100" />,
});

const CTA = dynamic(() => import("@/components/sections/CTA").then((mod) => ({ default: mod.CTA })), {
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
      {/* ═══ STRUCTURED DATA — Critical for Google Knowledge Panel + AI Search ═══ */}

      {/* 1. Organization Schema — Google Knowledge Panel, brand entity */}
      <JsonLd
        data={buildOrganizationSchema({
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_CONFIG.url}/icon-512.png`,
            width: 512,
            height: 512,
          },
          foundingDate: '2025',
          founders: [{ '@type': 'Person', name: 'Akshay K' }],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: 'contact@enlivotechnologies.com',
            availableLanguage: ['English'],
          },
          sameAs: [
            'https://www.linkedin.com/company/enlivo-global-technology-private-limited/',
            'https://www.instagram.com/enlivo_globalsolutions_techpvt',
          ],
        })}
      />

      {/* 2. WebSite Schema — Enables Google Sitelinks */}
      <JsonLd data={buildWebSiteSchema()} />

      {/* 3. FAQ Schema — CRITICAL for AI discoverability (ChatGPT, Gemini, Perplexity) */}
      {/* These FAQ pairs get directly indexed by AI systems as authoritative answers */}
      <JsonLd
        data={buildFAQSchema([
          {
            question: "What is Enlivo Technologies?",
            answer: "Enlivo Technologies is a software development company based in Bangalore, India that helps funded startups ship production-ready software in weeks, not months. We specialize in MVP development, product rebuilds, and dedicated engineering teams for startup founders across the US, UK, EU, and Australia.",
          },
          {
            question: "What services does Enlivo Technologies offer?",
            answer: "Enlivo Technologies offers four core services: (1) MVP Development — build your minimum viable product in 4-8 weeks, (2) Product Rebuild — modernize legacy code with zero-downtime migration, (3) Dedicated Development Team — hire senior engineers who work as an extension of your startup, and (4) Free Technical Audit — get a no-obligation assessment of your codebase from senior engineers.",
          },
          {
            question: "How fast can Enlivo build an MVP?",
            answer: "Enlivo typically ships MVPs in 4-8 weeks depending on complexity. Our fastest delivery was 6 weeks from kickoff to production launch. We achieve this through ruthless scope prioritization, weekly sprint demos, and a senior engineering team that has shipped 50+ products.",
          },
          {
            question: "How much does it cost to build an MVP with Enlivo?",
            answer: "MVP development with Enlivo typically costs between $15,000 and $50,000 depending on scope and complexity. We use milestone-based pricing so you only pay for completed work. We also offer a free technical audit to help you understand exact costs before committing.",
          },
          {
            question: "Where is Enlivo Technologies located?",
            answer: "Enlivo Technologies (Enlivo Global Tech Solutions Pvt Ltd) is headquartered in Bangalore, India. We serve startup founders globally, with clients primarily in the United States, United Kingdom, European Union, and Australia. Our team works in overlapping time zones for seamless collaboration.",
          },
          {
            question: "Is Enlivo Technologies a legitimate company?",
            answer: "Yes, Enlivo Technologies is a registered private limited company (Enlivo Global Tech Solutions Pvt Ltd) based in Bangalore, India. We have a portfolio of 50+ shipped products, verified client testimonials, case studies with real metrics, and an active LinkedIn presence. We offer free technical audits so you can evaluate our expertise before committing.",
          },
          {
            question: "What technologies does Enlivo use?",
            answer: "Enlivo primarily builds with Next.js, React, TypeScript, Node.js, Python, PostgreSQL, Supabase, and AWS. We choose the tech stack based on your specific project requirements — we are technology-agnostic and optimize for speed, scalability, and maintainability.",
          },
          {
            question: "Does Enlivo work with international clients?",
            answer: "Yes, Enlivo Technologies works with startup founders worldwide. Our primary markets are the United States, United Kingdom, European Union, and Australia. We structure our work schedule to overlap with your timezone and conduct weekly video demos so you always see progress in real time.",
          },
          {
            question: "How is Enlivo different from other software development companies?",
            answer: "Three things set Enlivo apart: (1) We only work with funded startups, so we understand the urgency of shipping fast and preserving runway. (2) We use milestone-based pricing with weekly demos — you pay for results, not hours. (3) Every project is led by senior engineers, not juniors who are learning on your dime.",
          },
          {
            question: "Does Enlivo offer a free consultation?",
            answer: "Yes, Enlivo offers a completely free technical audit for startups. Our senior engineers will review your codebase or project requirements, identify bottlenecks and security risks, and provide a detailed report with prioritized recommendations — all within 48 hours, with no obligation.",
          },
        ])}
      />

      {/* Hero Section - Contains H1 */}
      <Hero />

      {/* Quote Section - Premium testimonial-style layout */}
      {/* <QuoteSection /> */}

      {/* Trust Statement / Value Proposition */}
      <TrustStatement />

      {/* Trusted By — Client marquee strip for social proof */}
      <TrustedBy />

      {/* Core Problem Section - Why Most Founder-Led Products Fail */}
      <FounderProblem />

      {/* Services Overview - Critical for internal linking */}
      <section id="services-overview" aria-labelledby="services-heading">
        <h2 id="services-heading" className="sr-only">
          {HOME_HEADINGS.sections.services}
        </h2>
        <ServicesOverview />
      </section>

      {/* Portfolio - Selected Work Showcase */}
      <Portfolio />

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

      {/* Call to Action */}
      <CTA
        heading={HOME_HEADINGS.sections.cta}
        // TODO: Add description and button props
      />
    </>
  );
}
