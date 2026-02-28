/**
 * app/(marketing)/case-studies/page.tsx
 *
 * PURPOSE: Dedicated Case Studies page — story-mode format.
 * WHY: B2B buyers read case studies before making purchase decisions.
 *      This page builds trust through genuine problem-solution narratives.
 *
 * DESIGN: White bg, black text, editorial magazine layout.
 * ANIMATIONS: GSAP ScrollTrigger — staggered reveals, parallax images, counter animations.
 */

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";
import { CaseStudiesPage } from "./CaseStudiesPage";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies | Real Results for Funded Startups",
  description:
    "Real stories from funded startups we helped ship. See how we solved complex problems, delivered on time, and drove measurable results across HealthTech, FinTech, and EdTech.",
  keywords: [
    "case studies",
    "startup case studies",
    "software development case studies",
    "MVP success stories",
    "HealthTech case study",
    "FinTech case study",
    "EdTech case study",
    "product development results",
    "startup development agency",
    "software agency portfolio",
    "client success stories",
    "app development case studies",
  ],
  pathname: "/case-studies",
  ogImage: "/images/og/enlivo-technologies.png",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies" },
        ])}
      />
      <CaseStudiesPage />
    </>
  );
}
