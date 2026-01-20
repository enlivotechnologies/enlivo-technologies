/**
 * app/manifest.json/route.ts
 *
 * Fallback route handler for manifest.json
 * This ensures /manifest.json works even if app/manifest.ts doesn't generate it
 */

import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/lib/constants";

export async function GET() {
  const manifest = {
    name: SITE_CONFIG.name,
    short_name: "Enlivo",
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: SITE_CONFIG.themeColor,
    orientation: "portrait-primary",
    icons: [
      {
        src: "/images/navbar/EnlivotechnologiesLogo.png",
        sizes: "any",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/images/navbar/EnlivotechnologiesLogo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/navbar/EnlivotechnologiesLogo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["business", "technology", "software"],
    lang: SITE_CONFIG.language,
    dir: "ltr",
  };

  return NextResponse.json(manifest, {
    headers: {
      "Content-Type": "application/manifest+json",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
