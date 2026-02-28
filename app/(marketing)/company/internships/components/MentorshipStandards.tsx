"use client";

/**
 * MentorshipStandards Component
 * 
 * Section highlighting mentorship and engineering standards
 * in the internship program.
 */

import React from "react";
import { CheckCircle2, Shield, Code, BookOpen, FileCheck } from "lucide-react";

export function MentorshipStandards() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
            Mentorship & Standards
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Senior guidance and engineering discipline are built into how systems are delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left: Features List */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <CheckCircle2 className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Senior architecture reviews</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  Every major decision goes through senior architect review to ensure scalability and best practices.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <CheckCircle2 className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Clear coding & security standards</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  Established coding standards and security protocols that match industry best practices.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <CheckCircle2 className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Ongoing mentorship throughout delivery</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  Continuous guidance from senior engineers throughout the entire development lifecycle.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Senior Oversight Model Card */}
          <div className="bg-white/5 backdrop-blur-sm text-white rounded-3xl p-8 md:p-10 overflow-hidden relative border border-white/10 hover:bg-white/10 transition-all duration-300">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
              }} />
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="mb-8 pb-6 border-b border-white/20">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 tracking-tight">
                  Senior Oversight Model
                </h3>
                <div className="w-16 h-0.5 bg-white/40" />
              </div>

              {/* Model Items */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/15 transition-colors">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Lead Architect Review</h4>
                    <p className="text-gray-300 text-sm leading-relaxed font-light">
                      All architectural decisions reviewed by senior lead architects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/15 transition-colors">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Code & Security Standards</h4>
                    <p className="text-gray-300 text-sm leading-relaxed font-light">
                      Enforced coding standards and security best practices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/15 transition-colors">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Documentation & Testing</h4>
                    <p className="text-gray-300 text-sm leading-relaxed font-light">
                      Comprehensive documentation and rigorous testing protocols.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
