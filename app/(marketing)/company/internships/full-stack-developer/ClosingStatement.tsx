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
    <section className="py-24 md:py-32 bg-[#FFFFFF]">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[90rem] mx-auto">
          {/* Dark Card with Rounded Corners */}
          <div className="relative bg-black rounded-3xl p-10 md:p-14 lg:p-16 overflow-hidden shadow-2xl">
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h80v80H10z' fill='%23fff' opacity='0.05'/%3E%3Cpath d='M20 20h60v1H20z' fill='%23fff' opacity='0.1'/%3E%3Cpath d='M20 40h60v1H20z' fill='%23fff' opacity='0.1'/%3E%3Cpath d='M20 60h60v1H20z' fill='%23fff' opacity='0.1'/%3E%3Cpath d='M20 80h60v1H20z' fill='%23fff' opacity='0.1'/%3E%3C/svg%3E")`,
              }} />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-6">
              {/* Main Heading */}
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.1] tracking-tight">
              Ready to Take Responsibility?
              </h2>

              {/* Sub-heading */}
              <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
              This internship is for people ready to learn through real work, feedback, and accountability — not passive watching.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="/company/internships"
                  className="group inline-flex items-center justify-center gap-2 bg-[#8B5CF6] text-black px-8 py-4 rounded-xl font-medium text-base scale-[1.02] hover:shadow-xl transition-all duration-200"
                >
                 Apply for the Internship
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
