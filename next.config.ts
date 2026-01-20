/**
 * next.config.ts
 *
 * PURPOSE: Next.js configuration file.
 * WHY: Configures build optimizations, images, and other settings.
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Compiler (Next.js 15+)
  reactCompiler: true,

  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // TODO: Add CMS image domains when integrated
      // {
      //   protocol: 'https',
      //   hostname: 'cdn.sanity.io',
      // },
    ],
    formats: ["image/avif", "image/webp"],
    // Optimize image loading
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Bundle optimization
  experimental: {
    optimizePackageImports: [
      "@radix-ui/react-slot",
      "gsap",
      "lenis",
      "lucide-react",
    ],
  },
  serverExternalPackages: ["cloudinary"],

  // Compression
  compress: true,

  // Headers configuration (performance & security)
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
      {
        // Cache static assets aggressively
        source: "/:path*\\.(jpg|jpeg|png|gif|ico|svg|webp|avif|woff|woff2|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache fonts
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirects (for SEO - old URLs to new)
  async redirects() {
    return [
      // TODO: Add redirects for old URL structure
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true, // 308 status code
      // },
    ];
  },
};

export default nextConfig;
