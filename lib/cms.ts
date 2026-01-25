/**
 * lib/cms.ts
 *
 * PURPOSE: CMS client abstraction layer.
 * WHY: Decouples application from specific CMS implementation.
 *      Easy to switch between Sanity, Contentful, Strapi, or static content.
 *
 * TODO: Implement actual CMS integration when ready
 */

import { SERVICES } from "./constants";

/**
 * Content types
 */
export interface Insight {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  image: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string;
  updatedAt?: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface JobPosting {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "internship";
  description: string;
  requirements: string[];
  responsibilities: string[];
  publishedAt: string;
}

/**
 * Mock data for development
 * TODO: Replace with actual CMS queries
 */

// Mock insights
const MOCK_INSIGHTS: Insight[] = [
  {
    slug: "future-of-enterprise-ai",
    title: "The Future of Enterprise AI in 2024",
    description:
      "Exploring how artificial intelligence is reshaping enterprise operations.",
    content: "TODO: Add full content",
    category: "AI & Technology",
    tags: ["AI", "Enterprise", "Digital Transformation"],
    image: "/images/insights/placeholder.jpg",
    author: {
      name: "John Doe",
      role: "CTO",
    },
    publishedAt: "2024-03-01",
  },
  // TODO: Add more insights
];

// Mock job postings
const MOCK_JOBS: JobPosting[] = [
  {
    slug: "senior-software-engineer",
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote",
    type: "full-time",
    description: "TODO: Add job description",
    requirements: ["5+ years experience", "React/Node.js expertise"],
    responsibilities: [
      "Lead technical initiatives",
      "Mentor junior developers",
    ],
    publishedAt: "2024-03-15",
  },
  // TODO: Add more job postings
];

/**
 * CMS Query Functions
 * These will be replaced with actual CMS queries
 */

export async function getAllInsights(): Promise<Insight[]> {
  // TODO: Replace with actual CMS query
  return MOCK_INSIGHTS;
}

export async function getInsightBySlug(slug: string): Promise<Insight | null> {
  // TODO: Replace with actual CMS query
  const insight = MOCK_INSIGHTS.find((i) => i.slug === slug);
  return insight || null;
}

export async function getAllJobs(): Promise<JobPosting[]> {
  // TODO: Replace with actual CMS query
  return MOCK_JOBS;
}

export async function getJobBySlug(slug: string): Promise<JobPosting | null> {
  // TODO: Replace with actual CMS query
  const job = MOCK_JOBS.find((j) => j.slug === slug);
  return job || null;
}

export async function getServiceBySlug(slug: string) {
  // TODO: Replace with actual CMS query or extended service data
  const service = SERVICES.find((s) => s.slug === slug);
  return service || null;
}

/**
 * Generate static params for dynamic routes
 * WHY: Required for static generation of dynamic pages
 */
export async function getInsightSlugs(): Promise<string[]> {
  const insights = await getAllInsights();
  return insights.map((i) => i.slug);
}

export async function getJobSlugs(): Promise<string[]> {
  const jobs = await getAllJobs();
  return jobs.map((j) => j.slug);
}
