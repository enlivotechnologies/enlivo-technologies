/**
 * components/layout/ConditionalNavbar.tsx
 *
 * PURPOSE: Conditionally render navbar based on route.
 * WHY: Careers pages use a different navbar.
 * FIX: Removed `typeof window !== 'undefined'` check which caused hydration
 *      mismatch (server renders false, client renders true). usePathname() is
 *      SSR-safe and sufficient for path-based routing.
 */

"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { CareersNavbar } from "./CareersNavbar";

export function ConditionalNavbar() {
  const pathname = usePathname();

  // Use pathname only — it's SSR-safe and avoids hydration mismatch
  const isCareersPage = pathname?.startsWith("/company/careers");

  if (isCareersPage) {
    return <CareersNavbar />;
  }

  return <Navbar />;
}
