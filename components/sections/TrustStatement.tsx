/**
 * components/sections/TrustStatement.tsx
 *
 * PURPOSE: Trust statement section with team avatars and value proposition.
 * STYLE: Clean, modern design with subtle grid background and smooth animations.
 * MOBILE OPTIMIZED: Lazy loaded GSAP, simplified animations, optimized images.
 */

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Lazy load GSAP to reduce initial bundle size (mobile performance)
let gsapPromise: Promise<any> | null = null;
let scrollTriggerPromise: Promise<any> | null = null;

function loadGSAP() {
  if (!gsapPromise) {
    gsapPromise = import("gsap").then((mod) => mod.gsap);
  }
  return gsapPromise;
}

function loadScrollTrigger() {
  if (!scrollTriggerPromise) {
    scrollTriggerPromise = import("gsap/ScrollTrigger").then((mod) => mod.ScrollTrigger);
  }
  return scrollTriggerPromise;
}

// Avatar images configuration
const AVATAR_IMAGES = [
  "/images/person/person5.jpg",
  "/images/person/person2.jpg",
  "/images/person/person3.jpg",
  "/images/person/person4.jpg",
] as const;

export function TrustStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const avatarsRef = useRef<HTMLSpanElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Detect mobile device and hydrate
  useEffect(() => {
    setIsHydrated(true);
    if (typeof window !== "undefined") {
      setIsMobileDevice(window.innerWidth < 768);
    }
  }, []);

  // Lazy load GSAP only when component mounts (mobile performance)
  useEffect(() => {
    if (!isHydrated) return;

    Promise.all([loadGSAP(), loadScrollTrigger()]).then(([gsap, ScrollTrigger]) => {
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);
      setIsMounted(true);
    });
  }, [isHydrated]);

  // Setup animations only after GSAP is loaded
  useEffect(() => {
    if (!isMounted || !sectionRef.current) return;

    let ctx: any = null;

    // Load GSAP and ScrollTrigger, then setup animations
    Promise.all([loadGSAP(), loadScrollTrigger()]).then(([gsap, ScrollTrigger]) => {
      if (!sectionRef.current) return;

      // Register plugin
      gsap.registerPlugin(ScrollTrigger);

      // Mobile: Simpler, faster animations for better performance
      // Desktop: More complex animations
      const animationDuration = isMobileDevice ? 0.6 : 1;
      const avatarEase = isMobileDevice ? "power2.out" : "back.out(1.2)";

      ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
            start: isMobileDevice ? "top 80%" : "top 75%",
          toggleActions: "play none none none",
            // Mobile: Less aggressive refresh for better performance
            refreshPriority: isMobileDevice ? -1 : 0,
        },
      });

      // Animate heading text
        if (headingRef.current) {
      tl.fromTo(
        headingRef.current,
            { opacity: 0, y: isMobileDevice ? 20 : 30 },
            {
              opacity: 1,
              y: 0,
              duration: animationDuration,
              ease: "power3.out",
            }
      );
        }

        // Animate avatar group with optimized animation for mobile
        if (avatarsRef.current) {
      tl.fromTo(
        avatarsRef.current,
            {
              scale: isMobileDevice ? 0.8 : 0,
              opacity: 0,
              width: isMobileDevice ? "auto" : 0,
            },
        {
          scale: 1,
          opacity: 1,
          width: "auto",
              duration: isMobileDevice ? 0.5 : 0.8,
              ease: avatarEase,
        },
            isMobileDevice ? "-=0.5" : "-=0.8"
      );
        }
    }, sectionRef);
    });

    return () => {
      if (ctx && typeof ctx.revert === "function") {
        try {
          ctx.revert();
        } catch (error) {
          // Silent cleanup errors
        }
      }
    };
  }, [isMounted, isMobileDevice]);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-40 bg-white overflow-hidden"
      aria-labelledby="trust-heading"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content="Enlivo Technologies" />

      {/* Grid Background Effect - Optimized for mobile */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(90deg, #E5E7EB 1px, transparent 1px)",
            backgroundSize: isMobileDevice ? "30px 30px" : "40px 40px",
            backgroundPosition: "0 -1px",
            maskImage: "radial-gradient(circle at center, black 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          ref={headingRef}
          id="trust-heading"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#1a1a1a] leading-[1.15] tracking-tight opacity-0 max-w-5xl mx-auto"
          itemProp="slogan"
        >
          <span className="inline">
            Our flexible team
            {/* Avatar Group - Optimized spacing for mobile */}
            <span
              ref={avatarsRef}
              className="inline-flex items-center align-middle mx-2 sm:mx-3 -space-x-2 sm:-space-x-3 translate-y-[-1px] sm:translate-y-[-2px] md:translate-y-[-4px]"
              style={{ opacity: 0 }}
              aria-label="Enlivo team members"
            >
              {AVATAR_IMAGES.map((src, i) => (
                <div
                  key={i}
                  className="relative w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-100 overflow-hidden z-10 border-2 border-white shadow-sm"
                >
                  <Image
                    src={src}
                    alt={`Enlivo Team Member ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 28px, (max-width: 768px) 32px, (max-width: 1024px) 40px, 48px"
                    loading="lazy"
                  />
                </div>
              ))}
            </span>
            of engineers{" "}
            <span className="text-[#1a1a1a]/80">
              architects the secure, high-performance digital solutions that empower your business to scale with confidence.
            </span>
          </span>
        </h2>
      </div>
    </section>
  );
}
