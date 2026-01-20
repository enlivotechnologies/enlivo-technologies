/**
 * components/sections/CTA.tsx
 *
 * PURPOSE: Final Call to Action section.
 * DESIGN: Replicating "Vectura" Image + Floating Card Layout.
 * FUNCTIONALITY: Integrated Cal.com modal for the "Get started now" button.
 */

"use client";

import Image from "next/image";
import { CheckCircle2, TrendingUp, ArrowRight } from "lucide-react";

interface CTAProps {
  heading?: string;
  description?: string;
}

export function CTA({ 
  heading = "Start with clarity, scale with confidence.",
  description = "Enlivo helps founders move faster — with a dedicated engineering team, transparent processes, and a focus on building scalable products from day one."
}: CTAProps = {}) {

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-[105rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Container */}
        <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch justify-end rounded-2xl sm:rounded-[2.5rem] overflow-hidden bg-gray-50 min-h-[400px] sm:min-h-[500px] lg:h-[600px]">
          
          {/* --- Left: Full Height Image --- */}
          <div className="relative w-full lg:absolute lg:inset-y-0 lg:left-0 lg:w-[65%] h-[250px] sm:h-[300px] lg:h-full">
            <Image
              src="https://res.cloudinary.com/dqmryiyhz/image/upload/v1768831613/business_nle9oq.jpg"
              alt="Founder looking confidently at the future"
              fill
              className="object-cover object-center"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20 lg:to-transparent" />
          </div>

          {/* --- Right: The Black Card (Premium UI) --- */}
          {/* CHANGED: Removed `lg:mr-16` so it touches the right edge. Kept everything else. */}
          <div className="relative z-10 w-full lg:w-[45%] max-w-2xl -mt-6 sm:-mt-10 lg:mt-0 px-4 sm:px-6 lg:px-0 lg:h-full">
            
            {/* Inner Content Box */}
            <div className="bg-black text-white rounded-xl sm:rounded-2xl lg:rounded-[2rem] p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-gray-800 lg:h-full lg:flex lg:flex-col lg:justify-center">
              
              {/* Heading */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-medium leading-[1.15] sm:leading-[1.1] tracking-tight mb-4 sm:mb-5">
                {heading}
              </h2>
              
              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-gray-400 font-light leading-relaxed mb-6 sm:mb-8">
                {description}
              </p>

              {/* Dividers & Features */}
              <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
                {/* Feature 1 */}
                <div className="group">
                  <div className="flex items-start gap-2 sm:gap-3 mb-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white mt-0.5 sm:mt-1 flex-shrink-0" />
                    <h3 className="text-sm sm:text-base font-medium text-white">Fast onboarding</h3>
                  </div>
                  <p className="text-gray-400 pl-6 sm:pl-8 text-xs sm:text-sm leading-relaxed">
                    Most projects are fully staffed and ready to kick off within a week of agreement.
                  </p>
                </div>

                {/* Divider Line */}
                <div className="h-px w-full bg-gray-800" />

                {/* Feature 2 */}
                <div className="group">
                  <div className="flex items-start gap-2 sm:gap-3 mb-2">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white mt-0.5 sm:mt-1 flex-shrink-0" />
                    <h3 className="text-sm sm:text-base font-medium text-white">Built for scale</h3>
                  </div>
                  <p className="text-gray-400 pl-6 sm:pl-8 text-xs sm:text-sm leading-relaxed">
                    From MVP to enterprise-grade systems, we build with future growth in mind—no bloat, no friction.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                    href="https://cal.com/nishal-pktyks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black text-sm sm:text-base font-medium px-5 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-[1.02]"
                >
                    <span className="whitespace-nowrap">Get a Free Product Clarity Call</span>
                    <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}