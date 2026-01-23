import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";
import { getJobBySlug, JOBS_DATA } from "../data";
import { JobDetailClient } from "./JobDetailClient";

/**
 * Generate metadata for job detail pages
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return buildMetadata({
      title: "Job Not Found",
      description: "The job posting you're looking for doesn't exist.",
      pathname: "/company/careers",
    });
  }

  return buildMetadata({
    title: `${job.title} - Careers at Enlivo`,
    description: job.description,
    keywords: [
      job.title,
      job.department.toLowerCase(),
      job.type.toLowerCase(),
      "careers",
      "jobs",
      "Enlivo Technologies",
    ],
    pathname: `/company/careers/${slug}`,
  });
}

/**
 * Generate static params for all job slugs
 */
export async function generateStaticParams() {
  return JOBS_DATA.map((job) => ({
    slug: job.slug,
  }));
}

/**
 * Job Detail Page Component
 * Server component wrapper for client component
 */
export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Careers", path: "/company/careers" },
          { name: job.title },
        ])}
      />
      <JobDetailClient job={job} />
    </>
  );
}
