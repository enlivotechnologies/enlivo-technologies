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
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [gsap, setGsap] = useState<any>(null);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  // Mark as hydrated after first render to prevent hydration mismatches
  useEffect(() => {
    setIsHydrated(true);
    // Detect mobile device
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 768;
      setIsMobileDevice(isMobile);
      
      // On mobile, wait briefly for LCP to complete, then allow video loading
      if (isMobile) {
        // Reduced delay - only wait for initial render cycle
        const timer = setTimeout(() => {
          setPageLoaded(true);
        }, 300); // Minimal delay just for LCP priority
        
        return () => clearTimeout(timer);
      } else {
        // Desktop: Allow immediate loading
        setPageLoaded(true);
      }
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

  // Intersection Observer for video lazy loading - optimized for performance
  // Strategy: Load video immediately when in view, poster image shows first
  useEffect(() => {
    if (!isHydrated) return;
    if (!imageRef.current) return;
    
    // On mobile, wait briefly for page load to prioritize poster image LCP
    if (isMobileDevice && !pageLoaded) return;

    // Use intersection observer - load video when section is visible
    // Video loads in background while poster image is shown
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadVideo) {
            // Start loading video immediately when visible (no additional delay)
            setShouldLoadVideo(true);
          }
        });
      },
      { 
        // Start loading slightly before it comes into view for smoother experience
        rootMargin: isMobileDevice ? "50px" : "100px",
        threshold: 0.1 // Trigger when 10% visible
      }
    );

    observer.observe(imageRef.current);

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [isHydrated, shouldLoadVideo, isMobileDevice, pageLoaded]);

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
        {/* Strategy: Show poster image first (instant LCP), then transition to video when ready */}
        {!isHydrated ? (
          // Initial loading skeleton (very brief)
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-800/50 to-gray-900/60" />
          </div>
        ) : (
          <>
            {/* Poster Image - Always shown first for instant LCP, fades out when video ready */}
            <div 
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-out z-10 ${
                isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              <Image
                src="https://res.cloudinary.com/dqmryiyhz/image/upload/v1768641853/video123_yp9n3b.jpg"
                alt={imageAlt}
                fill
                className="object-cover object-center"
                sizes="100vw"
                quality={85}
                priority={true} // Always priority for instant LCP
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-900/40" />
            </div>

            {/* Video - Loads in background, fades in when ready, replaces poster */}
            {shouldLoadVideo && (
              <video
                ref={videoRef}
                src={
                  isMobileDevice && imageUrl.includes('cloudinary.com')
                    ? imageUrl.replace(
                        '/upload/',
                        '/upload/q_auto:low,f_auto:video,w_800,h_450,c_fill/'
                      )
                    : imageUrl
                }
                autoPlay
                loop
                muted
                playsInline
                preload="metadata" // Load metadata for faster playback
                aria-label={imageAlt}
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-out z-0 ${
                  isVideoLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoadedData={() => {
                  // Video data loaded, can start playing
                  if (videoRef.current) {
                    setIsVideoLoaded(true);
                    videoRef.current.play().catch(() => {
                      // Silent fail if autoplay is blocked - poster image remains
                    });
                  }
                }}
                onCanPlay={() => {
                  // Video can play, switch from poster to video
                  if (videoRef.current) {
                    setIsVideoLoaded(true);
                    if (videoRef.current.paused) {
                      videoRef.current.play().catch(() => {});
                    }
                  }
                }}
                onLoadedMetadata={() => {
                  // Metadata loaded, video is ready
                  if (videoRef.current && videoRef.current.readyState >= 2) {
                    setIsVideoLoaded(true);
                  }
                }}
                onError={() => {
                  // Video failed to load, keep showing poster image
                  setVideoError(true);
                }}
              />
            )}

            {/* Fallback: Show poster if video fails */}
            {videoError && (
              <div className="absolute inset-0 w-full h-full z-10">
                <Image
                  src="https://res.cloudinary.com/dqmryiyhz/image/upload/v1768641853/video123_yp9n3b.jpg"
                  alt={imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-900/40" />
              </div>
            )}
          </>
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