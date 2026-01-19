"use client";

import { useState } from "react";
import { MapPin, Building2 } from "lucide-react";
import type { Job } from "../data";
import { JobApplicationFormInline } from "./JobApplicationFormInline";

interface JobDetailClientProps {
  job: Job;
}

/**
 * Client Component for Job Detail Page
 * Handles tab navigation and interactive elements
 */
export function JobDetailClient({ job }: JobDetailClientProps) {
  const [activeTab, setActiveTab] = useState<"details" | "application">("details");

  const workType = job.location.toLowerCase().includes("remote") ? "Remote" : "On-site";

  return (
    <main className="bg-white min-h-screen">
      
      {/* Dark Header Section */}
      <section className="bg-[#1A1A1A] text-white pt-20 lg:pt-28">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          {/* Job Title */}
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 tracking-[-0.02em] leading-[1.1]">
            {job.title}
          </h1>

          {/* Job Summary */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl leading-[1.7]">
            {job.description}
          </p>

          {/* Location & Type Info */}
          <div className="flex flex-wrap items-center gap-6 text-base text-white/80">
            <div className="flex items-center gap-2.5">
              <Building2 className="w-5 h-5 text-white/60" />
              <span>{workType}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-5 h-5 text-white/60" />
              <span>{job.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="border-b border-[#E5E5E0] bg-white sticky top-0 z-10 backdrop-blur-sm bg-white/95">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <button
              onClick={() => setActiveTab("details")}
              className={`py-4 px-1 border-b-2 transition-all duration-200 font-medium text-[15px] tracking-tight ${
                activeTab === "details"
                  ? "border-[#1A1A1A] text-[#1A1A1A]"
                  : "border-transparent text-[#666] hover:text-[#1A1A1A]"
              }`}
            >
              Job details
            </button>
            <button
              onClick={() => setActiveTab("application")}
              className={`py-4 px-1 border-b-2 transition-all duration-200 font-medium text-[15px] tracking-tight ${
                activeTab === "application"
                  ? "border-[#1A1A1A] text-[#1A1A1A]"
                  : "border-transparent text-[#666] hover:text-[#1A1A1A]"
              }`}
            >
              Application
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {activeTab === "details" ? (
          <div>
            
            {/* Job Description */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-5 tracking-tight">
                Job description
              </h2>
              <p className="text-base md:text-[17px] text-[#666] leading-[1.75]">
                {job.about || job.description}
              </p>
            </div>

            {/* Company Details */}
            {job.companyDetails && (
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-5 tracking-tight">
                  Company details
                </h2>
                <p className="text-base md:text-[17px] text-[#666] leading-[1.75]">
                  {job.companyDetails}
                </p>
              </div>
            )}

            {/* Responsibilities */}
            {job.responsibilities && job.responsibilities.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-5 tracking-tight">
                  Responsibilities
                </h2>
                <ul className="space-y-3.5">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] mt-2.5 flex-shrink-0" />
                      <span className="text-base md:text-[17px] text-[#666] leading-[1.75]">
                        {responsibility}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Requirements */}
            {job.requirements && job.requirements.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-5 tracking-tight">
                  Requirements
                </h2>
                <ul className="space-y-3.5">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] mt-2.5 flex-shrink-0" />
                      <span className="text-base md:text-[17px] text-[#666] leading-[1.75]">
                        {requirement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Preferred Skills */}
            {job.preferredSkills && job.preferredSkills.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-5 tracking-tight">
                  Preferred Skills
                </h2>
                <ul className="space-y-3.5">
                  {job.preferredSkills.map((skill, index) => (
                    <li key={index} className="flex items-start gap-3.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] mt-2.5 flex-shrink-0" />
                      <span className="text-base md:text-[17px] text-[#666] leading-[1.75]">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Interview Process */}
            {job.interviewProcess && job.interviewProcess.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-5 tracking-tight">
                  Interview process
                </h2>
                <ul className="space-y-3.5">
                  {job.interviewProcess.map((step, index) => (
                    <li key={index} className="flex items-start gap-3.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] mt-2.5 flex-shrink-0" />
                      <span className="text-base md:text-[17px] text-[#666] leading-[1.75]">
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            {job.benefits && job.benefits.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-5 tracking-tight">
                  Benefits
                </h2>
                <ul className="space-y-3.5">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] mt-2.5 flex-shrink-0" />
                      <span className="text-base md:text-[17px] text-[#666] leading-[1.75]">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        ) : (
          /* Application Form Tab */
          <div className="max-w-4xl">
            <JobApplicationFormInline job={job} />
          </div>
        )}
      </div>

    </main>
  );
}
