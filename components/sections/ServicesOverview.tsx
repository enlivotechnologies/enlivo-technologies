/**
 * components/sections/ServicesOverview.tsx
 *
 * PURPOSE: Services accordion with vertical image marquee.
 * WHY: Shows service offerings with a dynamic, premium visual element.
 *
 * WIDTH: max-w-[90rem] with px-6 sm:px-12 lg:px-16 — matches Navbar, Hero, Footer.
 *
 * DESIGN:
 * - Left (7 cols): Service accordion with expand/collapse
 * - Right (5 cols): Two-column vertical image marquee
 *   - Column 1 scrolls UP, Column 2 scrolls DOWN
 *   - Images are rounded with slight gap between them
 *   - Smooth infinite loop using CSS @keyframes
 * - Sticky right panel on desktop
 */

"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ChevronDown, CheckCircle, ArrowUpRight, Check } from "lucide-react";

// ── Service Data ──
const SERVICES_DATA = [
  {
    id: "01",
    title: "MVP Development",
    slug: "mvp-development",
    subtitle: "Ship in 6-8 weeks",
    details: {
      perfectFor:
        "You have an idea. You need a real, working product in your investors' hands - fast.",
      whatYouGet: [
        "Complete product development - frontend, backend, everything.",
        "Your data is structured properly from day one so it never breaks at scale.",
        "Your product goes live on world class infrastructure - fast, secure, reliable.",
        "Admin dashboard & Analytics",
        "GitHub repository ownership",
      ],
      timeline: "6-8 weeks",
      investment: "$8,000 - $20,000",
    },
  },
  {
    id: "02",
    title: "Product Rebuild",
    slug: "product-rebuild",
    subtitle: "Fix technical debt & scale",
    details: {
      perfectFor:
        "Your current product is slow, buggy, or falling apart. We fix it properly - without shutting it down.",
      whatYouGet: [
        "Full diagnosis of what's broken and why.",
        "We rebuild everything while your product stays live. No outages, no disruptions.",
        "We replace outdated code with a clean, modern foundation built to last.",
        "Your product loads faster, crashes less, and handles more users.",
        "Scalable infrastructure setup",
      ],
      timeline: "10-16 weeks",
      investment: "$15,000 - $40,000",
    },
  },
  {
    id: "03",
    title: "Dedicated Team",
    slug: "dedicated-team",
    subtitle: "Ongoing development partnership",
    details: {
      perfectFor:
        "You've launched. Now you need a reliable engineering team to keep building - without the cost of full-time hires.",
      whatYouGet: [
        "2-4 senior engineers dedicated to your project",
        "Weekly progress calls so you always know exactly what's being built.",
        "Direct Slack/Teams access",
        "Scale your team up or down any month based on what your product needs.",
      ],
      timeline: "Ongoing",
      investment: "$6,000 - $13,000/Month",
    },
  },
];

// ── Marquee Images — Two columns, scrolling opposite directions ──
const MARQUEE_COL_1 = [
  "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772092544/image1_ia3bma.jpg",
  "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772092544/image5_ol1xzp.jpg",
  "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772092544/image3_pb9sfp.jpg",
  "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772092545/image2_tcenkg.jpg",
  "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772092547/image4_luezzy.jpg",
];

const MARQUEE_COL_2 = [
  "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772092660/image6_apdi7e.jpg",
  "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772092819/image7_qlt4kw.jpg",
  "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772092821/image10_hc9m8s.jpg",
  "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772092820/image8_lklihd.jpg",
  "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772092820/image9_n5ph1k.jpg",
];

// ── Vertical Marquee Column Component ──
function VerticalMarqueeColumn({
  images,
  direction,
  speed = 25,
}: {
  images: string[];
  direction: "up" | "down";
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    requestAnimationFrame(() => {
      const halfHeight = track.scrollHeight / 2;
      setDuration(halfHeight / speed);
    });
  }, [speed]);

  const animationName =
    direction === "up" ? "services-marquee-up" : "services-marquee-down";

  return (
    <div className="flex-1 overflow-hidden h-full">
      <div
        ref={trackRef}
        className="flex flex-col gap-3"
        style={{
          willChange: "transform",
          backfaceVisibility: "hidden",
          ...(duration > 0
            ? { animation: `${animationName} ${duration}s linear infinite` }
            : {}),
        }}
      >
        {/* First set */}
        {images.map((src, i) => (
          <div
            key={`a-${i}`}
            className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 flex-shrink-0"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {images.map((src, i) => (
          <div
            key={`b-${i}`}
            className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 flex-shrink-0"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Export ──
export function ServicesOverview() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section className="bg-[#F8F8F8] min-h-screen w-full flex flex-col justify-center py-20 font-sans text-slate-900">
      <div className="max-w-[90rem] w-full mx-auto px-6 sm:px-12 lg:px-16">
        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-9">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 tracking-tight leading-[1.05]">
              We build products that work on day one &amp; still work when you
              hit 100,000 users.
            </h2>
          </div>
          <div className="lg:col-span-3 flex flex-col justify-end lg:items-end pb-2">
            <div className="text-left lg:text-right">
              {/* Added justify-start lg:justify-end to align the flex items to the right */}
              <div className="text-[11px] md:text-[12px] font-medium text-[#2563EB] flex items-center justify-start lg:justify-end gap-2 uppercase mb-1.5">
                <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                What we Build
              </div>
              <p className="text-black/70 text-sm leading-relaxed">
                Fixed price. Fixed timeline. You always know what you&apos;re
                paying and when you&apos;re launching.
              </p>
            </div>
          </div>
        </div>

        {/* ── Main Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-12 items-start">
          {/* Left: Accordion List */}
          <div className="lg:col-span-7 flex flex-col">
            {SERVICES_DATA.map((item, index) => {
              const isActive = activeItem === index;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(index)}
                  className={`border-t border-gray-300  border-dashed py-6 cursor-pointer transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  {/* Top Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 md:gap-8">
                      <span className="text-sm font-mono text-black/70">
                        ({item.id})
                      </span>
                      <h3
                        className={`text-2xl md:text-3xl font-medium tracking-tight leading-[1.05] ${
                          isActive ? "text-black" : "text-black"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <ChevronDown
                      strokeWidth={1.5}
                      className={`w-6 h-6 transform transition-transform duration-500 ease-out ${
                        isActive
                          ? "rotate-180 text-gray-900"
                          : "rotate-0 text-gray-400"
                      }`}
                    />
                  </div>

                  {/* Expandable Content */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100 mt-6"
                        : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden pl-0 md:pl-[4.5rem]">
                      <p className="text-gray-600 leading-relaxed font-medium mb-6">
                        {item.details.perfectFor}
                      </p>

                      <ul className="flex flex-col gap-y-3.5 mb-10">
                        {item.details.whatYouGet.map((feat, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-gray-600 font-medium"
                          >
                            <Check
                              className="w-[18px] h-[18px] text-green-600 flex-shrink-0 mt-[2px]"
                              strokeWidth={1.5}
                            />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Timeline, Investment & CTA */}
                      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-gray-300 border-dashed pt-6 mt-8">
                        {/* Left: Stats */}
                        <div className="flex gap-12 sm:gap-16">
                          <div>
                            <span className="text-[12px] font-medium text-gray-600 tracking-tight block mb-2">
                              TIMELINE
                            </span>
                            <span className="text-base sm:text-lg font-medium text-gray-900">
                              {item.details.timeline}
                            </span>
                          </div>
                          <div>
                            <span className="text-[12px] font-medium text-gray-600 tracking-tight block mb-2">
                              INVESTMENT
                            </span>
                            <span className="text-base sm:text-lg font-medium text-black">
                              {item.details.investment}
                            </span>
                          </div>
                        </div>

                        {/* Right: Learn More */}
                        <Link
                          href={`/services/${item.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          className="group flex items-center gap-2 cursor-pointer pb-1 w-fit relative"
                        >
                          <span className="text-base font-medium tracking-tight text-black group-hover:text-black/80 transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[1.5px] after:bg-[#D95D39] after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out">
                            Learn More
                          </span>
                          <ArrowUpRight
                            className="w-4 h-4 text-gray-900 group-hover:text-black/80 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                            strokeWidth={2.5}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="border-t border-gray-200 w-full" />
          </div>

          {/* ── Right: Vertical Image Marquee (2 columns, opposite directions) ── */}
          <div className="lg:col-span-5 h-[500px] lg:h-[650px] w-full hidden lg:block relative">
            <div className="sticky top-12 h-full w-full">
              <div className="relative w-full h-full overflow-hidden">
                {/* Gradient fade top */}
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#F8F8F8] to-transparent z-10 pointer-events-none" />
                {/* Gradient fade bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F8F8F8] to-transparent z-10 pointer-events-none" />

                {/* Two columns */}
                <div className="flex gap-3 h-full">
                  {/* Column 1: scrolls UP */}
                  <VerticalMarqueeColumn
                    images={MARQUEE_COL_1}
                    direction="up"
                    speed={20}
                  />
                  {/* Column 2: scrolls DOWN */}
                  <VerticalMarqueeColumn
                    images={MARQUEE_COL_2}
                    direction="down"
                    speed={20}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
