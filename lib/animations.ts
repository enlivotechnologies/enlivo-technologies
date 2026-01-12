/**
 * lib/animations.ts
 *
 * PURPOSE: GSAP animation utilities for premium text and element animations.
 * WHY: Centralized animation configurations for consistency across the site.
 *
 * PHILOSOPHY:
 * - Subtle, elegant animations that enhance UX without being distracting
 * - Enterprise-grade feel with smooth, professional transitions
 * - Performance optimized with will-change and GPU acceleration
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Default animation settings for consistency
 */
export const ANIMATION_CONFIG = {
  // Durations
  duration: {
    fast: 0.4,
    normal: 0.8,
    slow: 1.2,
  },
  // Easing curves - premium feel
  ease: {
    smooth: "power2.out",
    smoothInOut: "power2.inOut",
    elastic: "elastic.out(1, 0.5)",
    bounce: "bounce.out",
    expo: "expo.out",
  },
  // Stagger timing for lists
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
} as const;

/**
 * Animate text reveal - fade up with slight movement
 * Premium, subtle animation for headings and paragraphs
 */
export function animateTextReveal(
  element: HTMLElement | string,
  options?: {
    delay?: number;
    duration?: number;
    y?: number;
  }
) {
  const {
    delay = 0,
    duration = ANIMATION_CONFIG.duration.normal,
    y = 30,
  } = options || {};

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: y,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: ANIMATION_CONFIG.ease.smooth,
    }
  );
}

/**
 * Animate elements with scroll trigger
 * Reveals content as user scrolls into view
 */
export function animateOnScroll(
  element: HTMLElement | string,
  options?: {
    y?: number;
    duration?: number;
    start?: string;
    markers?: boolean;
  }
) {
  const {
    y = 40,
    duration = ANIMATION_CONFIG.duration.normal,
    start = "top 85%",
    markers = false,
  } = options || {};

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: y,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      ease: ANIMATION_CONFIG.ease.smooth,
      scrollTrigger: {
        trigger: element,
        start,
        markers,
        toggleActions: "play none none none",
      },
    }
  );
}

/**
 * Staggered animation for lists/grids
 * Each child animates in sequence
 */
export function animateStaggerChildren(
  parent: HTMLElement | string,
  childSelector: string,
  options?: {
    y?: number;
    duration?: number;
    stagger?: number;
    start?: string;
  }
) {
  const {
    y = 30,
    duration = ANIMATION_CONFIG.duration.normal,
    stagger = ANIMATION_CONFIG.stagger.normal,
    start = "top 85%",
  } = options || {};

  return gsap.fromTo(
    `${parent} ${childSelector}`,
    {
      opacity: 0,
      y: y,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: ANIMATION_CONFIG.ease.smooth,
      scrollTrigger: {
        trigger: parent,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

/**
 * Counter animation for statistics
 * Animates numbers from 0 to target value
 */
export function animateCounter(
  element: HTMLElement,
  endValue: number,
  options?: {
    duration?: number;
    prefix?: string;
    suffix?: string;
  }
) {
  const { duration = 2, prefix = "", suffix = "" } = options || {};

  const counter = { value: 0 };

  return gsap.to(counter, {
    value: endValue,
    duration,
    ease: ANIMATION_CONFIG.ease.smooth,
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none none",
    },
    onUpdate: () => {
      element.textContent = `${prefix}${Math.round(counter.value)}${suffix}`;
    },
  });
}

/**
 * Split text animation - animate each word/character
 * For premium hero headings
 */
export function animateSplitText(
  element: HTMLElement,
  options?: {
    type?: "words" | "chars";
    duration?: number;
    stagger?: number;
    y?: number;
  }
) {
  const {
    type = "words",
    duration = ANIMATION_CONFIG.duration.fast,
    stagger = ANIMATION_CONFIG.stagger.fast,
    y = 20,
  } = options || {};

  // Get text content and split
  const text = element.textContent || "";
  const items = type === "words" ? text.split(" ") : text.split("");

  // Clear and rebuild with spans
  element.innerHTML = items
    .map(
      (item) =>
        `<span class="inline-block overflow-hidden"><span class="inline-block">${item}${
          type === "words" ? "&nbsp;" : ""
        }</span></span>`
    )
    .join("");

  // Animate inner spans
  return gsap.fromTo(
    element.querySelectorAll("span > span"),
    {
      y: y,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      ease: ANIMATION_CONFIG.ease.smooth,
    }
  );
}

/**
 * Cleanup all ScrollTrigger instances
 * Call on component unmount
 */
export function cleanupAnimations() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}
