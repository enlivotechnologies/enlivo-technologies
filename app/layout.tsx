/**
 * app/layout.tsx
 *
 * PURPOSE: Root layout for the entire application.
 * WHY: Sets up HTML structure, global metadata, fonts, and providers.
 *
 * SEO CRITICAL:
 * - This is where global metadata defaults are set
 * - Fonts should be optimized (next/font)
 * - No blocking resources in <head>
 *
 * PREMIUM FEATURES:
 * - Lenis smooth scrolling for buttery scroll experience
 * - GSAP integration for premium animations
 */

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

/**
 * Font optimization using next/font
 * WHY: Eliminates layout shift, improves Core Web Vitals
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Ensures text remains visible during font load
  variable: "--font-inter",
});

/**
 * Global metadata defaults
 * These are inherited by all pages unless overridden
 *
 * SEO NOTES:
 * - metadataBase is REQUIRED for correct canonical URLs
 * - robots defaults allow indexing (can be overridden per page)
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,

  // Robots defaults - allow full indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Site verification - TODO: Add actual verification codes
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  // },

  // Icons configuration
  icons: {
    icon: "/images/navbar/EnlivotechnologiesLogo.png",
    shortcut: "/images/navbar/EnlivotechnologiesLogo.png",
    apple: "/images/navbar/EnlivotechnologiesLogo.png",
  },

  // Manifest for PWA
  manifest: "/site.webmanifest",
};

/**
 * Viewport configuration
 * Separated from metadata in Next.js 14+
 */
export const viewport: Viewport = {
  themeColor: SITE_CONFIG.themeColor,
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/**
 * Root Layout Component
 *
 * STRUCTURE:
 * - Server Component by default (no "use client")
 * - Wraps all pages
 * - Includes persistent elements (Navbar, Footer)
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={SITE_CONFIG.language}
      className={inter.variable}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-[#F5F5F0] font-sans antialiased"
        suppressHydrationWarning
      >
        {/* Lenis Smooth Scrolling Provider */}
        <SmoothScrollProvider>
          {/* 
            Skip to main content link for accessibility
            Hidden visually but available for screen readers
          */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white"
          >
            Skip to main content
          </a>

          {/* Global Navigation */}
          <Navbar />

          {/* Main Content Area */}
          <main id="main-content" className="flex-1">
            {children}
          </main>

          {/* Global Footer */}
          <Footer />

        </SmoothScrollProvider>
        <Analytics />

        {/* 
          Analytics scripts would go here
          TODO: Add Google Analytics / Plausible when ready
          Use next/script with strategy="afterInteractive"
        */}
      </body>
    </html>
  );
}
