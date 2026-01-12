/**
 * components/providers/SmoothScrollProvider.tsx
 *
 * PURPOSE: Lenis smooth scrolling provider for the entire application.
 * WHY: Premium, buttery smooth scrolling experience like top-tier websites.
 *
 * FEATURES:
 * - Smooth, momentum-based scrolling
 * - Works with GSAP ScrollTrigger
 * - Customizable scroll speed and smoothness
 * - Mobile-friendly with touch support
 */

"use client";

import { useEffect, useRef, ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Scroll duration (higher = smoother/slower)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Use GSAP ticker for smooth animation frame updates
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP's default lag smoothing for better Lenis integration
    gsap.ticker.lagSmoothing(0);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}

/**
 * Hook to access Lenis instance for programmatic scrolling
 * Usage: const lenis = useLenis();
 *        lenis?.scrollTo('#section-id');
 */
export function useLenis() {
  // This would need context for proper implementation
  // For now, access via window
  if (typeof window !== "undefined") {
    return (window as unknown as { lenis?: Lenis }).lenis;
  }
  return null;
}
