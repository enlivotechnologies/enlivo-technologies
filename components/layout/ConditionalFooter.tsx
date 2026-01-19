/**
 * components/layout/ConditionalFooter.tsx
 *
 * PURPOSE: Conditionally render CareersFooter for careers pages, Footer for all other pages.
 * WHY: Careers pages need a different footer design.
 */

"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";
import { CareersFooter } from "./CareersFooter";

export function ConditionalFooter() {
  const pathname = usePathname();
  const isCareersPage = pathname?.startsWith("/company/careers");

  if (isCareersPage) {
    return <CareersFooter />;
  }

  return <Footer />;
}
