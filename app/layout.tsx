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
import localFont from "next/font/local";
import "@/styles/globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { Analytics } from "@vercel/analytics/next";
import { ConditionalNavbar } from "@/components/layout/ConditionalNavbar";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

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
 * Custom font: Neue Montreal Medium
 * Used for premium hero headings
 */
const neueMontreal = localFont({
  src: "../public/fonts/neue-montreal/NeueMontreal-Medium.otf",
  display: "swap",
  variable: "--font-neue-montreal",
  weight: "500",
});

/**
 * Custom font: Geist Regular
 * Used for body text and hero descriptions
 */
const geist = localFont({
  src: "../public/fonts/geist-font/Geist-Regular-BF6569491e3eff1.otf",
  display: "swap",
  variable: "--font-geist",
  weight: "400",
});

/**
 * Custom font: Geist Light
 * Used for navigation items
 */
const geistLight = localFont({
  src: "../public/fonts/geist-font/Geist-Light-BF6569491dc9c01.otf",
  display: "swap",
  variable: "--font-geist-light",
  weight: "300",
});

/**
 * Custom font: Corinthia Regular
 * Used for elegant script text
 */
const corinthia = localFont({
  src: "../public/fonts/Corinthia/Corinthia-Regular.ttf",
  display: "swap",
  variable: "--font-corinthia",
  weight: "400",
});

/**
 * Global metadata defaults
 * These are inherited by all pages unless overridden
 *
 * SEO NOTES:
 * - metadataBase is REQUIRED for correct canonical URLs
 * - robots defaults allow indexing (can be overridden per page)
 */

/**
 * Viewport configuration
 * Separated from metadata in Next.js 14+
 */
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

  // Robots defaults — allow full indexing with maximum snippet/preview
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

  // Icons — all circular with transparent background
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32", type: "image/x-icon" },
      { url: "/icon.png", sizes: "any", type: "image/png" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon-192.png",
  },

  // Manifest for PWA
  manifest: "/manifest.json",

  // OpenGraph defaults — establishes brand across all social platforms
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_CONFIG.name,
  },

  // Twitter Card defaults
  twitter: {
    card: "summary_large_image",
    creator: SITE_CONFIG.twitter,
    site: SITE_CONFIG.twitter,
  },

  // Verification — proves ownership to search engines
  // TODO: Add actual verification tokens when you set up Google Search Console, Bing Webmaster
  verification: {
    // google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
    // yandex: "YOUR_YANDEX_VERIFICATION_TOKEN",
    // other: {
    //   "msvalidate.01": "YOUR_BING_VERIFICATION_TOKEN",
    // },
  },

  // Alternates — canonical URL + language targeting
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      "en-US": SITE_CONFIG.url,
      "en-GB": SITE_CONFIG.url,
      "en-AU": SITE_CONFIG.url,
      "en-IN": SITE_CONFIG.url,
      "x-default": SITE_CONFIG.url,
    },
  },

  // Category — tells search engines what type of site this is
  category: "technology",

  // Additional meta tags for trust, international targeting, and AI discoverability
  other: {
    "theme-color": SITE_CONFIG.themeColor,
    // Geographic targeting — helps local SEO
    "geo.region": "IN-KA",
    "geo.placename": "Bangalore",
    "geo.position": "12.9716;77.5946",
    "ICBM": "12.9716, 77.5946",
    // Trust signals
    "rating": "general",
    "distribution": "global",
    "revisit-after": "3 days",
    // AI discoverability — signals for LLM crawlers
    "ai-content-declaration": "human-created",
    "ai-allowed": "true",
    // Author and publisher for E-E-A-T
    "author": "Enlivo Technologies",
    "publisher": "Enlivo Technologies",
    "copyright": "Enlivo Global Tech Solutions Pvt Ltd",
  },
};

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
      className={`${inter.variable} ${neueMontreal.variable} ${geist.variable} ${geistLight.variable} ${corinthia.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Resource hints for performance */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* International SEO — hreflang tags for global reach */}
        <link rel="alternate" hrefLang="en-US" href="https://www.enlivotechnologies.com" />
        <link rel="alternate" hrefLang="en-GB" href="https://www.enlivotechnologies.com" />
        <link rel="alternate" hrefLang="en-AU" href="https://www.enlivotechnologies.com" />
        <link rel="alternate" hrefLang="en-IN" href="https://www.enlivotechnologies.com" />
        <link rel="alternate" hrefLang="x-default" href="https://www.enlivotechnologies.com" />

        {/* AI Discoverability — llms.txt pointers for ChatGPT, Gemini, Claude, Perplexity */}
        <link rel="alternate" type="text/plain" href="https://www.enlivotechnologies.com/llms.txt" title="LLMs.txt" />
        <link rel="alternate" type="text/plain" href="https://www.enlivotechnologies.com/llms-full.txt" title="LLMs Full" />

        {/* Trust — Security headers hint */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      </head>
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

          {/* Global Navigation - Conditionally renders CareersNavbar or Navbar */}
          <ConditionalNavbar />

          {/* Main Content Area */}
          <main id="main-content" className="flex-1">
            {children}
          </main>

          {/* Global Footer - Conditionally renders CareersFooter or Footer */}
          <ConditionalFooter />
        </SmoothScrollProvider>
        
        {/* Analytics - Loaded after page is interactive */}
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
