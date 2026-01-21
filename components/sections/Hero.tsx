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
  
  // FIXED: Changed from HTMLAnchorElement to HTMLDivElement because the ref is now on the wrapper div
  const button1Ref = useRef<HTMLDivElement>(null);
  
  const imageRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [isMounted, setIsMounted] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [gsap, setGsap] = useState<any>(null);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  // 1. Efficient Mobile Detection & Initial Setup
  useEffect(() => {
    const checkMobile = () => {
      return window.innerWidth < 768;
    };
    
    setIsMobileDevice(checkMobile());
    
    // Trigger video load shortly after mount.
    const timer = setTimeout(() => {
      setShouldLoadVideo(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  // 2. Load GSAP only for Desktop
  useEffect(() => {
    if (isMobileDevice) return; 
    
    loadGSAP().then((gsapModule) => {
      setGsap(gsapModule);
      setIsMounted(true);
    });
  }, [isMobileDevice]);

  // 3. GSAP Animations (Desktop Only)
  useEffect(() => {
    if (!isMounted || !gsap || isMobileDevice) return;
    
    let ctx: any = null;
    
    const timer = setTimeout(() => {
      if (!sectionRef.current) return;
      
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        if (imageRef.current) {
          tl.fromTo(imageRef.current, { opacity: 0, scale: 1.05 }, { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" });
        }
        if (headingRef.current) {
          tl.fromTo(headingRef.current, { opacity: 0, y: 30, filter: "blur(8px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 }, "-=0.6");
        }
        if (descriptionRef.current) {
          tl.fromTo(descriptionRef.current, { opacity: 0, y: 20, filter: "blur(4px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 }, "-=0.4");
        }
        if (button1Ref.current) {
          tl.fromTo(button1Ref.current, { opacity: 0, y: 20, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.6 }, "-=0.2");
        }
      }, sectionRef);
    }, 50);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, [isMounted, gsap, isMobileDevice]);

  // 4. Optimized Video Source Logic
  const getVideoSrc = () => {
    if (isMobileDevice && imageUrl.includes('cloudinary.com')) {
      return imageUrl.replace('/upload/', '/upload/q_auto:eco,f_auto:video,w_640,c_limit/');
    }
    return imageUrl;
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center overflow-hidden pt-18 pb-4 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]"
      aria-labelledby="hero-heading"
    >
      <figure
        ref={imageRef}
        className={`relative w-full max-w-[95rem] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-black aspect-[9/16] md:aspect-[16/9] min-h-[520px] md:min-h-[500px] md:max-h-[600px] ${
            isMobileDevice ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* --- 1. POSTER IMAGE --- */}
        <div className={`absolute inset-0 w-full h-full z-10 transition-opacity duration-700 ${isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <Image
              src={imageUrl.replace('.mp4', '.jpg').replace('/upload/', '/upload/w_1200,q_auto,f_auto/')}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              priority={true}
              sizes="(max-width: 768px) 100vw, 90vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-900/40" />
        </div>

        {/* --- 2. VIDEO ELEMENT --- */}
        {shouldLoadVideo && (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover object-center"
              playsInline
              autoPlay
              muted
              loop
              preload="metadata"
              onLoadedData={() => setIsVideoLoaded(true)}
            >
              <source src={getVideoSrc()} type="video/mp4" />
            </video>
        )}

        {/* --- 3. OVERLAYS --- */}
        <div className="absolute inset-0 bg-black/30 z-20 pointer-events-none" />

        {/* --- 4. TEXT CONTENT --- */}
        <div className="relative z-30 flex h-full w-full items-center justify-center pointer-events-auto">
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-8">
            <h1
              ref={headingRef}
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6 ${isMobileDevice ? 'opacity-100' : 'opacity-0'}`}
            >
              {heading}
            </h1>

            <p
              ref={descriptionRef}
              className={`text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl mx-auto mb-6 sm:mb-8 font-light ${isMobileDevice ? 'opacity-100' : 'opacity-0'}`}
            >
              {description}
            </p>

            <div className={`flex items-center justify-center ${isMobileDevice ? 'opacity-100' : 'opacity-0'}`} ref={button1Ref}>
              <a
                href="#footer"
                className="bg-white text-black text-sm sm:text-[15px] font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-gray-100 transition-all duration-200 w-full sm:w-auto sm:min-w-[180px] text-center"
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