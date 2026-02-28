/**
 * components/analytics/GoogleAnalytics.tsx
 *
 * PURPOSE: Google Analytics 4 integration component.
 * WHY: Separates analytics logic from layout, makes it reusable and testable.
 *
 * SEO & PERFORMANCE:
 * - Uses Next.js Script component with "afterInteractive" strategy
 * - Loads analytics after page is interactive (doesn't block rendering)
 * - Improves Core Web Vitals scores
 *
 * USAGE:
 * - Add <GoogleAnalytics /> to app/layout.tsx
 * - Set NEXT_PUBLIC_GA_MEASUREMENT_ID in .env.local
 */

"use client";

import Script from "next/script";
import { clientEnv } from "@/lib/env";

/**
 * Google Analytics Component
 *
 * Loads Google Analytics 4 script only if Measurement ID is provided.
 * Uses "afterInteractive" strategy to not block page rendering.
 */
export function GoogleAnalytics() {
  const measurementId = clientEnv.GA_MEASUREMENT_ID || "G-B3F2KGNE2H";

  // Don't render if Measurement ID is not set
  if (!measurementId) {
    return null;
  }

  return (
    <>
      {/* Google Analytics gtag.js script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      
      {/* Google Analytics initialization script */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
