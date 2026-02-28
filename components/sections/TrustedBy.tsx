/**
 * components/sections/TrustedBy.tsx
 *
 * PURPOSE: Trusted-by / client logo marquee strip.
 * WHY: Social proof strip immediately after TrustStatement builds credibility.
 *      Infinite marquee keeps the section alive and premium-feeling.
 *
 * WIDTH: max-w-[90rem] — matches Navbar, Hero, Footer, and all other sections.
 *        Dashed border lines span full viewport width.
 *
 * DESIGN:
 * - Left: fixed "Our Beloved Clients" label box
 * - Right: infinite horizontal marquee of company names with vertical dividers
 * - Vertical dividers stretch full height (border-to-border)
 * - Clean, minimal aesthetic — typographic names only
 *
 * MARQUEE:
 * - Pure CSS animation using @keyframes injected via <style> tag
 * - Duplicated client list for seamless infinite loop
 * - translateX(-50%) moves exactly one set width for perfect looping
 */

"use client";

import { useRef, useEffect, useState } from "react";

// ── Client / Company Names ──
const CLIENTS = [
  "HealthSync",
  "Fintrace",
  "CareerPlanet",
  "AdShine",
  "MedFlow",
  "ScaleGrid",
  "CloudNest",
  "DataVault",
  "East theory",
  "ShipFast AI",
  "TrustLayer",
  "PayWise",
  "CodeBridge",
  "HireLoop",
  "LaunchPad",
];

export function TrustedBy() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Wait a frame so the browser has laid out the content
    requestAnimationFrame(() => {
      const halfWidth = track.scrollWidth / 2;
      // Speed: ~40px/s for a smooth, premium feel
      setDuration(halfWidth / 40);
    });
  }, []);

  return (
    <section className="relative bg-white overflow-hidden border-y border-dashed border-black/15">
      {/* ── Constrained container matching Navbar / Hero / all sections ── */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex items-stretch h-24 md:h-28">

          {/* ── Left: Fixed Label Box ── */}
          <div className="flex-shrink-0 relative z-10 flex items-center bg-white border-r border-dashed border-black/15 pr-8 md:pr-14">
          <div className="flex flex-col gap-1">
              {/* Added items-center to align them vertically, and gap-2 for spacing */}
              <div className="text-[11px] md:text-[12px] font-medium text-[#2563EB] flex items-center gap-2 uppercase">
                <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                Our
              </div>
              <span className="text-2xl md:text-4xl font-medium text-black tracking-tight leading-none">
                Clients
              </span>
            </div>
            {/* Fade edge so text doesn't hard-clip */}
            <div className="absolute top-0 bottom-0 -right-10 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          </div>

          {/* ── Right: Marquee Strip ── */}
          <div className="flex-1 overflow-hidden h-full">
            <div
              ref={trackRef}
              className="flex items-stretch h-full whitespace-nowrap"
              style={{
                willChange: "transform",
                backfaceVisibility: "hidden",
                ...(duration > 0
                  ? { animation: `trustedby-marquee ${duration}s linear infinite` }
                  : {}),
              }}
            >
              {/* First set */}
              {CLIENTS.map((name, i) => (
                <div key={`a-${i}`} className="flex items-center h-full">
                  <span className="px-8 md:px-12 text-[1.1rem] md:text-[1.35rem] font-light text-gray-400 tracking-tight select-none">
                    {name}
                  </span>
                  <span className="w-px h-full border-r border-dashed border-black/15 flex-shrink-0" />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {CLIENTS.map((name, i) => (
                <div key={`b-${i}`} className="flex items-center h-full">
                  <span className="px-8 md:px-12 text-[1.1rem] md:text-[1.35rem] font-light text-gray-400 tracking-tight select-none">
                    {name}
                  </span>
                  <span className="w-px h-full border-r border-dashed border-black/15 flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
