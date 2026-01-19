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
  
  // Check if we're on careers subdomain or careers path
  const isCareersPage = 
    typeof window !== 'undefined' && 
    (window.location.hostname.startsWith('careers.') || 
     pathname?.startsWith("/company/careers"));
  
  // Use CareersNavbar for careers pages
  if (isCareersPage) {
    return <CareersNavbar />;
  }
  
  // Use default Navbar for all other pages
  return <Navbar />;
}
