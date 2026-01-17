"use client";

/**
 * app/(marketing)/company/internships/page.tsx
 *
 * PURPOSE: Premium Internship/Training Program Landing Page.
 * DESIGN: Modern white theme with premium aesthetics.
 *
 * This is the main page component that composes all internship sections.
 */

import React from "react";
import { InternshipHero, WhyDifferent, InternshipTracks, HowItWorks } from "./components";

export default function InternshipsPage() {
  return (
    <main className="bg-white min-h-screen">
      <InternshipHero />
      <WhyDifferent />
      <InternshipTracks />
      <HowItWorks />
    </main>
  );
}
