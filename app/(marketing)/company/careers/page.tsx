import type { Metadata } from "next";
import { CareersPageClient } from "./CareersPageClient";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";
import { CAREERS_SEO } from "@/seo/company";

export const metadata: Metadata = buildMetadata({
  ...CAREERS_SEO,
  title: "Careers at Enlivo - Join our India Team",
  description: "Explore internships and full-time positions in Design and Engineering at our India hubs.",
});

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Careers" },
        ])}
      />
      <CareersPageClient />
    </>
  );
}
