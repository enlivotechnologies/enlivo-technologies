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
  
  // Check if we're on careers subdomain or careers path
  const isCareersPage = 
    typeof window !== 'undefined' && 
    (window.location.hostname.startsWith('careers.') || 
     pathname?.startsWith("/company/careers"));

  if (isCareersPage) {
    return <CareersFooter />;
  }

  return <Footer />;
}
