/**
 * seo/contact.ts
 *
 * PURPOSE: SEO content for the contact page.
 * WHY: Contact pages are high-intent - users ready to convert.
 *      Should be easily indexable and accessible.
 */

import type { PageSEO } from "@/lib/seo";

/**
 * Contact page SEO
 */
export const CONTACT_SEO: PageSEO = {
  title: "Contact Us - Get in Touch",
  description:
    "Ready to build your product? Contact Enlivo Technologies for a free technical audit. MVP development, product rebuilds, and dedicated engineering teams for funded startups.",
  keywords: [
    "contact enlivo technologies",
    "hire software development agency",
    "free technical consultation",
    "mvp development inquiry",
    "startup software development",
    "book a demo",
    "get a quote software development",
  ],
  pathname: "/contact",
  ogImage: "/images/og/contact.png",
};

/**
 * Contact page headings
 */
export const CONTACT_HEADINGS = {
  h1: "Contact Us",
  sections: {
    form: "Send Us a Message",
    info: "Get in Touch",
    offices: "Our Offices",
    faq: "Frequently Asked Questions",
  },
} as const;

/**
 * Contact page FAQs
 * WHY: FAQ schema generates rich snippets in Google Search
 * These are the REAL questions founders ask before hiring us
 */
export const CONTACT_FAQS = [
  {
    question: "How quickly can you start on my project?",
    answer:
      "We can typically kick off within 5-7 business days of signing the agreement. For urgent projects, we've started as fast as 48 hours. During the free audit call, we'll give you an exact start date based on current team availability.",
  },
  {
    question: "What does your free technical audit include?",
    answer:
      "Our 30-minute audit covers: a review of your idea or existing product, technology stack recommendations, a realistic timeline and budget estimate, and identification of potential technical risks. You walk away with a clear roadmap — even if you don't hire us.",
  },
  {
    question: "How much does an MVP cost with Enlivo?",
    answer:
      "Most MVP projects range from $8,000 to $20,000 depending on complexity. Simple MVPs (auth, dashboard, API) start at $8k. Standard MVPs with integrations and real-time features run $12k-$20k. Complex apps with AI/ML or multi-platform support go up to $35k. No hidden fees — ever.",
  },
  {
    question: "Do you sign an NDA before discussing my idea?",
    answer:
      "Yes, always. We sign a mutual NDA before any project discussion begins. Your idea, data, and business details are fully protected from the very first conversation. We also ensure full IP ownership transfers to you from day one.",
  },
  {
    question: "What happens after the project is delivered?",
    answer:
      "You have three options: 1) Clean handoff with full documentation to your internal team. 2) Monthly retainer for ongoing development and maintenance ($5k-$15k/mo, cancel anytime). 3) On-demand support billed by the hour. Zero lock-in — you own everything.",
  },
  {
    question: "How do you handle communication across time zones?",
    answer:
      "Most of our clients are in the US and UK. We maintain 4-7 hours of daily overlap, use async Slack for real-time updates, and hold weekly video demos of working software. Our clients consistently say they forget we're in a different time zone.",
  },
];
