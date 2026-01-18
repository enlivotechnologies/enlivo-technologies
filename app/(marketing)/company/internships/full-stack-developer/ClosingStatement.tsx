"use client";

/**
 * ClosingStatement Component
 * 
 * Strong closing statement with call-to-action
 * Modern black card design with premium aesthetics.
 */

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ClosingStatement() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Dark Card with Rounded Corners */}
          <div className="relative bg-gray-900 rounded-3xl p-10 md:p-14 lg:p-16 overflow-hidden shadow-2xl">
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h80v80H10z' fill='%23fff' opacity='0.05'/%3E%3Cpath d='M20 20h60v1H20z' fill='%23fff' opacity='0.1'/%3E%3Cpath d='M20 40h60v1H20z' fill='%23fff' opacity='0.1'/%3E%3Cpath d='M20 60h60v1H20z' fill='%23fff' opacity='0.1'/%3E%3Cpath d='M20 80h60v1H20z' fill='%23fff' opacity='0.1'/%3E%3C/svg%3E")`,
              }} />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-6">
              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Your Tech Career Starts Here.
              </h2>

              {/* Sub-heading */}
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
                Be part of cohort where peers practices, pushes, and grows with you, every day.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="/company/internships"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-semibold text-base hover:scale-[1.02] hover:shadow-xl transition-all duration-200"
                >
                  Enroll Now
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
