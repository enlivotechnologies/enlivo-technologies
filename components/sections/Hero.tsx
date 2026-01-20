/**
 * components/sections/Hero.tsx
 *
 * PURPOSE: Hero section with centered content and premium animations.
 * STYLE: Replicating "Windaro/Vectura" UI (Centered text, pill buttons, dark aesthetic).
 */

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Lazy load GSAP to reduce initial bundle size
let gsapPromise: Promise<any> | null = null;

function loadGSAP() {
  if (!gsapPromise) {
    gsapPromise = import("gsap").then((mod) => mod.gsap);
  }
  return gsapPromise;
}

interface HeroProps {
  heading?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export function Hero({
  heading = "We Help Founders Turn Ideas into Reliable Products — Without Hiring a Tech Team",
  description = "Backend, frontend, and UI delivered by a founder-led engineering team that owns execution from day one.",
  imageUrl = "https://res.cloudinary.com/dqmryiyhz/video/upload/v1768641853/video123_yp9n3b.mp4",
  imageAlt = "Business finance dashboard overview",
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const button1Ref = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [gsap, setGsap] = useState<any>(null);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  // Mark as hydrated after first render to prevent hydration mismatches
  useEffect(() => {
    setIsHydrated(true);
    // Detect mobile device
    if (typeof window !== 'undefined') {
      setIsMobileDevice(window.innerWidth < 768);
    }
  }, []);

  // Load GSAP only when needed (after component mounts)
  useEffect(() => {
    if (!isHydrated) return;
    
    loadGSAP().then((gsapModule) => {
      setGsap(gsapModule);
      setIsMounted(true);
    });
  }, [isHydrated]);

  // Intersection Observer for video lazy loading - only after hydration
  // On mobile, use poster image instead of video to reduce payload
  useEffect(() => {
    if (!isHydrated) return;

    // On mobile, don't load video (use poster image only) to reduce payload
    // This reduces network payload from 24MB to ~500KB
    if (isMobileDevice) {
      return;
    }

    // On desktop, use intersection observer for lazy loading
    if (!imageRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadVideo) {
            setShouldLoadVideo(true);
          }
        });
      },
      { rootMargin: "50px" }
    );

    observer.observe(imageRef.current);

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [isHydrated, shouldLoadVideo, isMobileDevice]);

  // GSAP animations - only run when GSAP is loaded
  // On mobile, skip animations to improve LCP (show content immediately)
  useEffect(() => {
    if (!isMounted || !gsap) return;
    
    // On mobile, show content immediately without animation to improve LCP
    if (isMobileDevice) {
      if (imageRef.current) {
        imageRef.current.style.opacity = "1";
      }
      if (headingRef.current) {
        headingRef.current.style.opacity = "1";
        headingRef.current.style.transform = "none";
        headingRef.current.style.filter = "none";
      }
      if (descriptionRef.current) {
        descriptionRef.current.style.opacity = "1";
        descriptionRef.current.style.transform = "none";
        descriptionRef.current.style.filter = "none";
      }
      if (button1Ref.current) {
        button1Ref.current.style.opacity = "1";
        button1Ref.current.style.transform = "none";
      }
      return;
    }
    
    // Desktop: Use GSAP animations
    let ctx: any = null;
    let timer: NodeJS.Timeout | null = null;
    
    timer = setTimeout(() => {
      if (!sectionRef.current) return;
      
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        // 1. Image fade in
        if (imageRef.current) {
          tl.fromTo(
            imageRef.current,
            { opacity: 0, scale: 1.05 },
            { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
          );
        }

        // 2. Heading fade up
        if (headingRef.current) {
          tl.fromTo(
            headingRef.current,
            { opacity: 0, y: 30, filter: "blur(8px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 },
            "-=0.6"
          );
        }

        // 3. Description fade up
        if (descriptionRef.current) {
          tl.fromTo(
            descriptionRef.current,
            { opacity: 0, y: 20, filter: "blur(4px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 },
            "-=0.4"
          );
        }

        // 4. Button pop in
        if (button1Ref.current) {
          tl.fromTo(
            button1Ref.current,
            { opacity: 0, y: 20, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6 },
            "-=0.2"
          );
        }
      }, sectionRef);
    }, 50);

    return () => {
      if (timer) clearTimeout(timer);
      if (ctx) {
        try {
          ctx.revert();
        } catch (error) {
          // Silently handle cleanup errors
        }
      }
    };
  }, [isMounted, gsap, isMobileDevice]);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center overflow-hidden pt-18  pb-4 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]"
     
      aria-labelledby="hero-heading"
      suppressHydrationWarning
    >
      {/* Background Container (Video + Content) */}
      <figure
        ref={imageRef}
        className="relative w-full max-w-[95rem] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl opacity-0 bg-black aspect-[9/16] md:aspect-[16/9] min-h-[520px] md:min-h-[500px] md:max-h-[600px]"
        suppressHydrationWarning
      >
        {/* Video / Poster */}
        {/* On mobile: Use static poster image to reduce payload. On desktop: Load video */}
        {isMobileDevice && isHydrated ? (
          // Mobile: Always show poster image (no video to reduce payload from 24MB to ~500KB)
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://res.cloudinary.com/dqmryiyhz/image/upload/w_1200,h_800,c_fill,q_auto,f_auto/v1768641853/video123_yp9n3b.jpg"
              alt={imageAlt}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-900/40" />
          </div>
        ) : shouldLoadVideo && isHydrated ? (
          // Desktop: Load video when ready
          <video
            ref={videoRef}
            src={imageUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={imageAlt}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
            onLoadedData={() => {
              if (videoRef.current) {
                const playPromise = videoRef.current.play();
                if (playPromise !== undefined) {
                  playPromise.catch(() => {
                    // Silent fail if autoplay is blocked
                  });
                }
              }
            }}
            onCanPlay={() => {
              if (videoRef.current && videoRef.current.paused) {
                videoRef.current.play().catch(() => {});
              }
            }}
          />
        ) : (
          // Placeholder while loading
          <div
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 to-gray-800"
            aria-hidden="true"
          />
        )}

        {/* Light Black Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content Overlay */}
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-8">
            {/* H1 Heading */}
            {/* On mobile: Show immediately (no opacity-0) to improve LCP */}
            <h1
              ref={headingRef}
              id="hero-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6 opacity-100 md:opacity-0"
            >
              {heading}
            </h1>

            {/* Description Text */}
            <p
              ref={descriptionRef}
              className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl mx-auto mb-6 sm:mb-8 opacity-100 md:opacity-0 font-light"
            >
              {description}
            </p>

            {/* Button: See How It Works */}
            <div
              ref={buttonsRef}
              className="flex items-center justify-center"
            >
              <a
                ref={button1Ref}
                href="#footer"
                className="bg-white text-black text-sm sm:text-[15px] font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-gray-100 transition-all duration-200 w-full sm:w-auto sm:min-w-[180px] text-center opacity-100 md:opacity-0"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </figure>
    </section>
  );
}