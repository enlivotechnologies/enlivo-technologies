/**
 * components/providers/SmoothScrollProvider.tsx
 *
 * PURPOSE: Lenis smooth scrolling provider — premium, buttery scroll feel.
 * WHY: Smooth inertia scrolling like Apple, Stripe, Linear. GSAP-synced.
 *
 * KEY DESIGN DECISIONS:
 * - autoRaf: false → GSAP ticker drives Lenis for perfect ScrollTrigger sync
 * - lerp: 0.08 → smoother interpolation for premium feel
 * - duration: 1.2 → balanced weight
 * - lagSmoothing(0) → prevents GSAP from "catching up" and breaking Lenis flow
 * - Lenis instance stored on window + React context for global access
 *
 * PERFORMANCE FIXES:
 * - Use state instead of ref for context value (triggers re-render so children get Lenis)
 * - ScrollTrigger.update called directly (no extra scroll listeners)
 * - Single RAF loop prevents competing animation frames
 */

"use client";

import {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins once at module level
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Context for clean hook access ---
const LenisContext = createContext<Lenis | null>(null);

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with optimized config
    const lenisInstance = new Lenis({
      // --- Feel & Weight ---
      lerp: 0.08,            // Slightly smoother for premium feel (0.06 ultra-smooth, 0.12 snappy)
      duration: 1.2,          // Balanced scroll weight
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out

      // --- Scroll Behaviour ---
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.85,  // Slightly dampened for controlled feel
      touchMultiplier: 1.8,   // Touch needs more sensitivity

      // --- Advanced ---
      autoRaf: false,         // CRITICAL: GSAP ticker drives Lenis for perfect sync
      infinite: false,
      syncTouch: false,       // Let native touch feel natural on mobile
      syncTouchLerp: 0.075,
    });

    // Expose on window for programmatic access (navbar, etc.)
    (window as unknown as { lenis: Lenis }).lenis = lenisInstance;

    // --- GSAP ↔ Lenis Bridge ---
    // 1. When Lenis scrolls, tell ScrollTrigger to recalculate
    lenisInstance.on("scroll", ScrollTrigger.update);

    // 2. Drive Lenis RAF from GSAP ticker (single unified loop = no jank)
    const onTick = (time: number) => {
      lenisInstance.raf(time * 1000);
    };
    gsap.ticker.add(onTick);

    // 3. Disable GSAP lag smoothing — conflicts with Lenis interpolation
    gsap.ticker.lagSmoothing(0);

    // Set state to trigger re-render with Lenis instance in context
    setLenis(lenisInstance);

    // Cleanup
    return () => {
      gsap.ticker.remove(onTick);
      lenisInstance.destroy();
      setLenis(null);
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}

/**
 * Hook to access the Lenis instance for programmatic scroll.
 *
 * Usage:
 *   const lenis = useLenis();
 *   lenis?.scrollTo('#portfolio', { offset: -100, duration: 1.2 });
 */
export function useLenis(): Lenis | null {
  // Try context first (inside provider tree)
  const ctx = useContext(LenisContext);
  if (ctx) return ctx;

  // Fallback to window (always available after mount)
  if (typeof window !== "undefined") {
    return (window as unknown as { lenis?: Lenis }).lenis ?? null;
  }
  return null;
}
