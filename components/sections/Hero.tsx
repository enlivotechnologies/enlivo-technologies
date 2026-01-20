/**
 * components/sections/Hero.tsx
 *
 * PURPOSE: Hero section with centered content and premium animations.
 * STYLE: Replicating "Windaro/Vectura" UI (Centered text, pill buttons, dark aesthetic).
 */

"use client";

import { useEffect, useRef, useState } from "react";

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

  // Load GSAP only when needed (after component mounts)
  useEffect(() => {
    loadGSAP().then((gsapModule) => {
      setGsap(gsapModule);
      setIsMounted(true);
    });
  }, []);

  // Intersection Observer for video lazy loading
  useEffect(() => {
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
  }, [shouldLoadVideo]);

  // GSAP animations - only run when GSAP is loaded
  useEffect(() => {
    if (!isMounted || !gsap) return;
    
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
  }, [isMounted, gsap]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-6 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#FFFFFF" }}
      aria-labelledby="hero-heading"
    >
      {/* Background Container (Video/Image) */}
      <figure
        ref={imageRef}
        className="absolute inset-x-4 top-18 bottom-6 rounded-3xl overflow-hidden shadow-2xl opacity-0 bg-black"
        style={{ aspectRatio: "16/9", minHeight: "400px" }}
      >
        {shouldLoadVideo ? (
          <video
            ref={videoRef}
            src={imageUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
            onLoadedData={() => {
              // Video loaded, ensure it plays
              if (videoRef.current) {
                videoRef.current.play().catch(() => {
                  // Auto-play may fail, that's okay
                });
              }
            }}
          />
        ) : (
          // Placeholder/poster image while video loads
          <div 
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 to-gray-800"
            aria-hidden="true"
          />
        )}
        
        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40" />
      </figure>

      {/* Content Container - Centered */}
      <div className="relative z-10 max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* H1 Heading */}
        <h1
          ref={headingRef}
          id="hero-heading"
            className="text-2xl md:text-4xl lg:text-5xl font-normal  text-white tracking-tight leading-[1.1] mb-6 opacity-0"
        >
            {heading}
        </h1>

          {/* Description Text */}
        <p
          ref={descriptionRef}
            className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-xl mx-auto mb-10 opacity-0 font-light"
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
              className="bg-white text-black text-[15px] font-medium px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all duration-200 min-w-[180px] opacity-0"
          >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}