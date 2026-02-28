"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// --- Navbar height constant ---
// Announcement bar (~44px) + Navbar header (72px) = ~116px
// We use a CSS custom property approach so sticky cards sit below the fixed navbar
const NAV_HEIGHT = 116;

// --- Portfolio Data ---
const PROJECTS = [
  {
    id: "01",
    name: "ElderlyCare",
    category: "HealthTech",
    title: "Compassionate care, powered by technology",
    description:
      "A comprehensive elderly care management platform connecting caregivers, families, and healthcare providers — real-time health monitoring, medication tracking, and emergency alerts.",
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2678&auto=format&fit=crop",
    tags: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    stats: { metric: "Health Tech", label: "Delivered" },
    href: "/case-studies",
    accent: "#10B981",
  },
  {
    id: "02",
    name: "FreshKart",
    category: "E-Commerce",
    title: "Farm-to-door grocery, reimagined",
    description:
      "A hyperlocal grocery delivery platform with real-time inventory sync, route-optimized delivery, and a vendor dashboard — 5,000+ orders per week across three cities.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2674&auto=format&fit=crop",
    tags: ["Next.js", "Stripe", "Supabase", "Vercel"],
    stats: { metric: "E-Commerce", label: "Delivered" },
    href: "/case-studies",
    accent: "#F59E0B",
  },
  {
    id: "03",
    name: "AI Dashboard",
    category: "AI / SaaS",
    title: "Decisions at the speed of intelligence",
    description:
      "An AI-powered analytics dashboard that aggregates business data, generates predictive insights, and automates reports — replacing 20+ hours of manual analysis.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    tags: ["Next.js", "Python", "OpenAI", "Redis"],
    stats: { metric: "AI Saas", label: "Delivered" },
    href: "/case-studies",
    accent: "#6366F1",
  },
];

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [navHeight, setNavHeight] = useState(NAV_HEIGHT);

  // Dynamically measure actual navbar height on mount
  useEffect(() => {
    const measure = () => {
      // The navbar is a fixed div with z-[100] at the top
      const navbar = document.querySelector<HTMLElement>(".fixed.top-0.left-0.w-full.z-\\[100\\]");
      if (navbar) {
        setNavHeight(navbar.offsetHeight);
      }
    };
    measure();
    // Re-measure after a short delay (fonts/images may shift layout)
    const t = setTimeout(measure, 500);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Calculate how far the track needs to move horizontally
  const calcScrollDistance = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const distance = track.scrollWidth - window.innerWidth;
    setScrollDistance(distance > 0 ? distance : 0);
  }, []);

  useEffect(() => {
    calcScrollDistance();
    window.addEventListener("resize", calcScrollDistance);
    const t1 = setTimeout(calcScrollDistance, 300);
    const t2 = setTimeout(calcScrollDistance, 1000);
    return () => {
      window.removeEventListener("resize", calcScrollDistance);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [calcScrollDistance]);

  // Boost Lenis lerp when inside the horizontal scroll zone for snappier feel
  useEffect(() => {
    if (!scrollAreaRef.current) return;
    const lenis = (window as unknown as { lenis?: { options: { lerp: number } } }).lenis;
    if (!lenis) return;

    const defaultLerp = lenis.options.lerp;
    const boostedLerp = 0.12; // Slightly faster interpolation for horizontal section

    const onScroll = () => {
      const rect = scrollAreaRef.current?.getBoundingClientRect();
      if (!rect) return;
      // When the scroll area is active (sticky zone), speed up Lenis
      const isInZone = rect.top <= 0 && rect.bottom >= window.innerHeight;
      lenis.options.lerp = isInZone ? boostedLerp : defaultLerp;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      lenis.options.lerp = defaultLerp; // Reset on unmount
    };
  }, []);

  // GSAP animations
  useEffect(() => {
    if (!sectionRef.current || !trackRef.current || !scrollAreaRef.current || scrollDistance === 0) return;

    const ctx = gsap.context(() => {
      // 1. Header reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 2. Horizontal scroll — Lenis provides the smooth interpolation,
      //    GSAP just maps scroll position to translateX with scrub: true (instant)
      gsap.to(trackRef.current, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: scrollAreaRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      // 3. Card content stagger reveal (first time only)
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const textBlock = card.querySelector("[data-card-text]");
        if (!textBlock) return;

        gsap.fromTo(
          textBlock,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: scrollAreaRef.current,
              start: "top 90%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [scrollDistance]);

  // Available viewport height below the fixed navbar
  const viewportHeight = `calc(100vh - ${navHeight}px)`;

  return (
    <section ref={sectionRef} id="portfolio" className="relative bg-[#F8F8F8]">
      {/* ─── Header — scrolls normally, NOT sticky ─── */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16 pt-20 md:pt-24 lg:pt-28 pb-6 md:pb-8">
        <div ref={headerRef} className="opacity-0">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
            <div className="max-w-3xl">
            <div className="text-[11px] md:text-[12px] font-medium text-[#2563EB] flex items-center gap-2 uppercase mb-2">
                <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                Case Study
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] font-medium text-gray-900 tracking-tight leading-[1.1]">
                Products we&apos;ve shipped. Results they&apos;ve driven.
              </h2>
            </div>

            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 text-sm font-medium text-black hover:bg-white/40 border border-gray-200 rounded-full px-6 py-3 bg-white"
            >
              Explore All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Scroll Area — tall div drives horizontal movement ─── */}
      <div
        ref={scrollAreaRef}
        style={{
          height: scrollDistance > 0
            ? `calc(${viewportHeight} + ${scrollDistance}px)`
            : "auto",
        }}
      >
        {/*
          Sticky viewport:
          - top: navHeight → sits right below the fixed navbar
          - height: 100vh - navHeight → fills only the visible area below navbar
          - Cards are vertically centered in this space
        */}
        <div
          ref={viewportRef}
          className="sticky overflow-hidden flex items-center"
          style={{
            top: `${navHeight}px`,
            height: viewportHeight,
          }}
        >
          <div
            ref={trackRef}
            className="flex items-start gap-7 lg:gap-9 pl-6 sm:pl-12 lg:pl-16 will-change-transform"
            style={{ paddingRight: "6vw" }}
          >
            {PROJECTS.map((project, index) => (
              <Link
                href={project.href}
                key={project.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                className="group block flex-shrink-0 w-[80vw] sm:w-[60vw] lg:w-[38vw] xl:w-[34vw]"
              >
                {/* Image — static, no parallax, no hover scale */}
                <div className="relative w-full aspect-[16/10] rounded-2xl lg:rounded-[1.25rem] overflow-hidden bg-gray-200 mb-5 lg:mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 38vw"
                  />

                  {/* Category badge — bottom left */}
                  {/* <div className="absolute bottom-4 left-4 z-20">
                    <span
                      className="text-xs font-medium px-3.5 py-1.5 rounded-full backdrop-blur-xl border"
                      style={{
                        backgroundColor: `${project.accent}18`,
                        color: project.accent,
                        borderColor: `${project.accent}30`,
                      }}
                    >
                      {project.category}
                    </span>
                  </div> */}

                  {/* Arrow icon — top right, always visible, blur bg */}
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="w-4 h-4 text-black" />
                  </div>

                  {/* Delivery badge — bottom right */}
                  <div className="absolute bottom-4 right-4 z-20">
                    <span className="text-xs font-medium text-white/90 bg-black/25 backdrop-blur-xl px-3.5 py-1.5 rounded-full border border-white/10">
                      {project.stats.metric}
                    </span>
                  </div>
                </div>

                {/* Text content — revealed with GSAP, no hover effects */}
                <div data-card-text className="px-1">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="text-xs font-medium tracking-tight uppercase text-gray-700">
                      {project.name}
                    </span>
                    <span className="w-5 h-[1px] bg-gray-500" />
                    <span className="text-xs font-medium text-gray-600">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-medium text-black tracking-tight leading-snug mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-black leading-relaxed max-w-md line-clamp-2">
                    {project.description}
                  </p>

                  {/* <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-gray-500 bg-white border border-gray-200 px-2.5 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
