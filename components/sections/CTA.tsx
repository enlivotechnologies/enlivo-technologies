/**
 * components/sections/CTA.tsx
 *
 * PURPOSE: Final Call to Action section.
 * DESIGN: Full-width visual with centered text overlay and CTA button.
 */

"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  heading?: string;
  description?: string;
}

export function CTA({ 
  heading,
  description
}: CTAProps = {}) {

  return (
    <section className="bg-black">
      {/* Container for outer left/right space */}
      <div className="max-w-[105rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Image Container: Rounded bottom, no top rounding */}
        <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] rounded-b-[2.5rem] sm:rounded-b-[3.5rem] overflow-hidden">
          
          {/* 1. Background Image */}
          <Image
            src="https://res.cloudinary.com/dqmryiyhz/image/upload/v1771168488/bg12_eqq2bv.jpg"
            alt="Background Visual"
            fill
            className="object-cover object-center"
            quality={100}
            priority
          />

          {/* 2. Content Overlay (Centered ON TOP of the image) */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-white tracking-tight drop-shadow-lg">
                Ready to Ship Your Product?
              </h2>
              
              {/* Subheading */}
              <div className="space-y-2">
                <p className="text-lg sm:text-xl text-white font-normal drop-shadow-md">
                  Book a FREE 30-minute technical audit.
                </p>
                <p className="text-lg sm:text-xl text-gray-300 font-light drop-shadow-md">
                  No obligation. No sales pressure.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="https://cal.com/info-enlivo-yyhgqr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 bg-white text-black text-base sm:text-lg font-medium px-8 py-4 rounded-full hover:bg-gray-100"
                >
                  Book Free Technical Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}