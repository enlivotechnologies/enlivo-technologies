"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function TrustStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const avatarsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Animate heading text
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // Expand the avatar group
      tl.fromTo(
        avatarsRef.current,
        { scale: 0, opacity: 0, width: 0 },
        {
          scale: 1,
          opacity: 1,
          width: "auto",
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        "-=0.8"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const avatarImages = [
    "/images/person/person5.jpg",
    "/images/person/person2.jpg",
    "/images/person/person3.jpg",
    "/images/person/person4.jpg",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-40 bg-white overflow-hidden"
      aria-labelledby="trust-heading"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content="Enlivo Technologies" />

      {/* --- PREMIUM GRID BACKGROUND EFFECT --- */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(90deg, #E5E7EB 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            // ADDED: Shifts grid up by 1px to hide the top horizontal line
            backgroundPosition: "0 -1px",
            maskImage:
              "radial-gradient(circle at center, black 0%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 0%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      </div>
      {/* --------------------------------------- */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2
          ref={headingRef}
          id="trust-heading"
          className="text-2xl md:text-4xl lg:text-5xl font-medium text-[#1a1a1a] leading-[1.15] tracking-tight opacity-0"
          itemProp="slogan"
        >
          <span className="inline-block">
            Our flexible team
            {/* --- AVATAR GROUP --- */}
            <span
              ref={avatarsRef}
              className="inline-flex items-center align-middle mx-3 -space-x-3 translate-y-[-2px] md:translate-y-[-4px]"
              style={{ opacity: 0 }}
            >
              {avatarImages.map((src, i) => (
                <div
                  key={i}
                  className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-100 overflow-hidden z-10"
                >
                  <Image
                    src={src}
                    alt={`Enlivo Team Member ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
              ))}
            </span>
            {/* -------------------- */}
            of engineers
          </span>{" "}
          <span className="text-[#1a1a1a]/70 block mt-3 lg:inline lg:mt-0">
            architects the secure, high-performance digital solutions that
            empower your business to scale with confidence.
          </span>
        </h2>
      </div>
    </section>
  );
}
