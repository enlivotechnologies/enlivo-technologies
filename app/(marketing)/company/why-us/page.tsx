/**
 * app/(marketing)/company/why-us/page.tsx
 *
 * PURPOSE: "Why Us" page — honest pros & cons with interactive toggle.
 * WHY: Builds trust by being radically transparent. Toggle switches
 *      between blue (pros) and red (cons) to show both sides.
 *
 * WIDTH: max-w-[90rem] with px-6 sm:px-12 lg:px-16 — matches all sections.
 */

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";
import { WHY_US_SEO } from "@/seo/company";
import { WhyUsContent } from "./WhyUsContent";

export const metadata: Metadata = buildMetadata(WHY_US_SEO);

export default function WhyUsPage() {
  return (
    <main className="bg-[#FFFFFF] min-h-screen">
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Why Us" },
        ])}
      />
      <WhyUsContent />
    </main>
  );
}
