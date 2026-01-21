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
      
      // On mobile, wait for page to fully load before allowing video loading
      if (isMobile) {
        const handleLoad = () => {
          // Wait additional time after load for better LCP
          setTimeout(() => {
            setPageLoaded(true);
          }, 2000); // 2 second delay after page load on mobile
        };
        
        if (document.readyState === 'complete') {
          handleLoad();
        } else {
          window.addEventListener('load', handleLoad);
          return () => window.removeEventListener('load', handleLoad);
        }
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

  // Intersection Observer for video lazy loading - optimized for mobile performance
  useEffect(() => {
    if (!isHydrated) return;
    if (!imageRef.current) return;
    
    // On mobile, wait for page to load before allowing video loading
    if (isMobileDevice && !pageLoaded) return;

    // Use intersection observer for lazy loading
    // On mobile: Only load when scrolled into view AFTER page load
    // On desktop: Load slightly before it comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadVideo) {
            // On mobile, add additional delay even after intersection
            if (isMobileDevice) {
              setTimeout(() => {
                setShouldLoadVideo(true);
              }, 1000); // 1 second delay on mobile even after visible
            } else {
              setShouldLoadVideo(true);
            }
          }
        });
      },
      { 
        // Mobile: Only start loading when actually visible (no preloading)
        // Desktop: Start loading slightly before
        rootMargin: isMobileDevice ? "0px" : "100px",
        threshold: isMobileDevice ? 0.5 : 0.1 // Mobile needs 50% visible
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
        {/* Mobile: Poster image priority for better LCP. Desktop: Video with poster fallback */}
        {!isHydrated ? (
          // Initial loading skeleton with gradient (very brief)
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-800/50 to-gray-900/60" />
          </div>
        ) : videoError || (isMobileDevice && !shouldLoadVideo) ? (
          // Mobile: Show poster image initially (never load video until user scrolls)
          // Or fallback if video fails
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://res.cloudinary.com/dqmryiyhz/image/upload/w_1200,h_800,c_fill,q_auto,f_auto/v1768641853/video123_yp9n3b.jpg"
              alt={imageAlt}
              fill
              className="object-cover object-center"
              sizes="100vw"
              quality={85}
              priority={isMobileDevice} // Priority on mobile for better LCP
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-900/40" />
          </div>
        ) : (
          <>
            {/* Poster image shown while video loads */}
            {!isVideoLoaded && (
              <div className="absolute inset-0 w-full h-full z-10 transition-opacity duration-500">
                <Image
                  src="https://res.cloudinary.com/dqmryiyhz/image/upload/w_1200,h_800,c_fill,q_auto,f_auto/v1768641853/video123_yp9n3b.jpg"
                  alt={imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-900/40" />
              </div>
            )}
            {/* Video with smooth fade-in */}
            {/* On mobile: Use optimized Cloudinary video with lower quality and resolution */}
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
              autoPlay={!isMobileDevice || shouldLoadVideo} // Only autoplay on desktop or after mobile load
              loop
              muted
              playsInline
              preload={isMobileDevice ? "none" : "metadata"} // Mobile: no preload, Desktop: metadata
              aria-label={imageAlt}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-out ${
                isVideoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoadedData={() => {
                if (videoRef.current) {
                  setIsVideoLoaded(true);
                  const playPromise = videoRef.current.play();
                  if (playPromise !== undefined) {
                    playPromise.catch(() => {
                      // Silent fail if autoplay is blocked
                    });
                  }
                }
              }}
              onCanPlay={() => {
                if (videoRef.current) {
                  setIsVideoLoaded(true);
                  if (videoRef.current.paused) {
                    videoRef.current.play().catch(() => {});
                  }
                }
              }}
              onError={() => {
                setVideoError(true);
              }}
              onLoadedMetadata={() => {
                // Video metadata loaded, ready to play
                if (videoRef.current && videoRef.current.readyState >= 2) {
                  setIsVideoLoaded(true);
                }
              }}
            />
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