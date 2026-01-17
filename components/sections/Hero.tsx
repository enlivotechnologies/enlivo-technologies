/**
 * components/sections/Hero.tsx
 *
 * PURPOSE: Hero section with centered content and premium animations.
 * STYLE: Replicating "Windaro/Vectura" UI (Centered text, pill buttons, dark aesthetic).
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

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
  const button2Ref = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    let ctx: gsap.Context | null = null;
    let timer: NodeJS.Timeout | null = null;
    
    // Wait for next tick to ensure DOM is ready
    timer = setTimeout(() => {
      // Check if refs are still valid before creating context
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

        // 4. Buttons pop in
        if (button1Ref.current && button2Ref.current) {
          tl.fromTo(
            [button1Ref.current, button2Ref.current],
            { opacity: 0, y: 20, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1 },
            "-=0.2"
          );
        }
      }, sectionRef);
    }, 50);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
      if (ctx) {
        try {
          ctx.revert();
        } catch (error) {
          // Silently handle cleanup errors that may occur during unmount
        }
      }
    };
  }, [isMounted]);

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
      >
        <video
          src={imageUrl}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        
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

          {/* Buttons Group */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
          {/* Button 1: White Pill */}
          <a
            ref={button1Ref}
            href="https://cal.com/nishal-pktyks"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black text-[15px] font-medium px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all duration-200 min-w-[160px] opacity-0"
          >
           Request a Demo
          </a>

          {/* Button 2: Glass/Dark Pill */}
          <a
            ref={button2Ref}
            href="mailto:enlivotechnologies@gmail.com"
            className="bg-white/10 backdrop-blur-md text-white text-[15px] font-medium px-8 py-3.5 rounded-full hover:bg-white/20 transition-all duration-200 min-w-[160px] opacity-0 border border-white/10"
          >
            Contact us
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}