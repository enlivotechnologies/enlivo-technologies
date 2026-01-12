/**
 * seo/company.ts
 *
 * PURPOSE: Centralized SEO content for company pages.
 * WHY: Company pages (About, Careers) help establish E-E-A-T
 *      (Experience, Expertise, Authoritativeness, Trustworthiness)
 *      which is critical for Google rankings.
 */

import type { PageSEO } from "@/lib/seo";

/**
 * Company index page SEO
 */
export const COMPANY_INDEX_SEO: PageSEO = {
  title: "About Our Company",
  description:
    "Learn about our mission, values, and the team behind our enterprise technology solutions. Discover why leading organizations trust us for their digital transformation.",
  keywords: [
    "about us",
    "company overview",
    "technology company",
    "enterprise solutions provider",
  ],
  pathname: "/company",
};

/**
 * About page SEO
 *
 * E-E-A-T NOTES:
 * - About page establishes company credibility
 * - Include founding story, team credentials, achievements
 * - Link to leadership profiles, certifications
 */
export const ABOUT_SEO: PageSEO = {
  title: "About Us - Our Story & Mission",
  description:
    "Founded with a mission to transform enterprises through technology. Meet our leadership team and discover our values that drive innovation and client success.",
  keywords: [
    "about company",
    "company mission",
    "company values",
    "technology leadership",
    "enterprise technology company",
  ],
  pathname: "/company/about",
  ogImage: "/images/og/about.png",
};

/**
 * Careers page SEO
 *
 * SEO NOTES:
 * - Careers pages can rank for "[company] jobs" queries
 * - Use JobPosting schema for individual listings
 */
export const CAREERS_SEO: PageSEO = {
  title: "Careers - Join Our Team",
  description:
    "Build your career with us. Explore exciting opportunities in software engineering, AI, cloud platforms, and more. Remote-friendly positions available.",
  keywords: [
    "careers",
    "jobs",
    "software engineering jobs",
    "technology careers",
    "remote jobs",
  ],
  pathname: "/company/careers",
  ogImage: "/images/og/careers.png",
};

/**
 * Internships page SEO
 */
export const INTERNSHIPS_SEO: PageSEO = {
  title: "Internship Program - Start Your Tech Career",
  description:
    "Launch your technology career with our internship program. Gain hands-on experience working on real enterprise projects alongside industry experts.",
  keywords: [
    "internships",
    "tech internship",
    "software engineering internship",
    "student opportunities",
    "graduate program",
  ],
  pathname: "/company/internships",
  ogImage: "/images/og/internships.png",
};

/**
 * Company page headings
 */
export const COMPANY_HEADINGS = {
  index: {
    h1: "Our Company",
    sections: {
      overview: "Who We Are",
      values: "Our Values",
      leadership: "Leadership Team",
    },
  },
  about: {
    h1: "About Us",
    sections: {
      story: "Our Story",
      mission: "Our Mission",
      vision: "Our Vision",
      values: "Our Core Values",
      leadership: "Leadership Team",
      awards: "Recognition & Awards",
    },
  },
  careers: {
    h1: "Careers",
    sections: {
      why: "Why Work With Us",
      culture: "Our Culture",
      benefits: "Benefits & Perks",
      openings: "Open Positions",
      process: "Hiring Process",
    },
  },
  internships: {
    h1: "Internship Program",
    sections: {
      overview: "Program Overview",
      benefits: "What You'll Gain",
      roles: "Available Roles",
      apply: "How to Apply",
      testimonials: "Intern Stories",
    },
  },
} as const;
