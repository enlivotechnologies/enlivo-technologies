/**
 * components/layout/ConditionalNavbar.tsx
 *
 * PURPOSE: Conditionally render navbar based on route.
 * WHY: Careers pages use a different navbar.
 */

"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { CareersNavbar } from "./CareersNavbar";

export function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Use CareersNavbar for careers pages
  if (pathname?.startsWith("/company/careers")) {
    return <CareersNavbar />;
  }
  
  // Use default Navbar for all other pages
  return <Navbar />;
}
