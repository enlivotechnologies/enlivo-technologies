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
      // TODO: Add CMS image domains when integrated
      // {
      //   protocol: 'https',
      //   hostname: 'cdn.sanity.io',
      // },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // Allow Cloudinary for video as well (for static serving, not Next.js video optimization)
  experimental: {
    optimizePackageImports: ["@radix-ui/react-slot"],
    serverComponentsExternalPackages: ["cloudinary"],
  },

  // Experimental features
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ["@radix-ui/react-slot"],
  },

  // Headers configuration (additional security headers)
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
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
