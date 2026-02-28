import type { Metadata } from "next";
import { CareersPageClient } from "./CareersPageClient";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";
import { CAREERS_SEO } from "@/seo/company";

export const metadata: Metadata = buildMetadata({
  ...CAREERS_SEO,
  title: "Careers at Enlivo | Join Our Global Team | Remote Worldwide",
  description: "Join Enlivo Technologies — explore open positions in Engineering, Design, Product, Operations, and Sales. Remote-first, worldwide hiring. Build premium software with us.",
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
