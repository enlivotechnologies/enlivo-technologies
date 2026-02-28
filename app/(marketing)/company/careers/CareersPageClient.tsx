/**
 * app/(marketing)/company/careers/CareersPageClient.tsx
 *
 * PURPOSE: Premium careers listing page replicating a clean, professional UI.
 * DESIGN: "Join us" badge, "Current Openings" heading, search bar, department
 *         filters as category headers, job cards in 2-col grid with hover states.
 *         No salary/price — worldwide remote hiring.
 */

"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, Globe, Briefcase, ArrowUpRight, Sparkles } from "lucide-react";
import { JOBS_DATA, type Job } from "./data";

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

type Department = Job["department"];

const DEPARTMENT_ORDER: Department[] = [
  "Engineering",
  "Design",
  "Product",
  "Operations",
  "Sales & Marketing",
];

/** Group jobs by department, preserving order. */
function groupByDepartment(jobs: Job[]): Map<Department, Job[]> {
  const grouped = new Map<Department, Job[]>();
  for (const dept of DEPARTMENT_ORDER) {
    const deptJobs = jobs.filter((j) => j.department === dept);
    if (deptJobs.length > 0) grouped.set(dept, deptJobs);
  }
  return grouped;
}

/** Simple substring search across title, department, description. */
function matchesSearch(job: Job, query: string): boolean {
  if (!query) return true;
  const q = query.toLowerCase();
  return (
    job.title.toLowerCase().includes(q) ||
    job.department.toLowerCase().includes(q) ||
    job.description.toLowerCase().includes(q) ||
    job.type.toLowerCase().includes(q)
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export function CareersPageClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState<"all" | Department>("all");
  const searchRef = useRef<HTMLInputElement>(null);

  /* Focus search on "/" */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== searchRef.current) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  /* Filtered & grouped jobs */
  const filteredJobs = useMemo(() => {
    let jobs = JOBS_DATA;
    if (selectedDept !== "all") {
      jobs = jobs.filter((j) => j.department === selectedDept);
    }
    if (searchQuery) {
      jobs = jobs.filter((j) => matchesSearch(j, searchQuery));
    }
    return jobs;
  }, [searchQuery, selectedDept]);

  const grouped = useMemo(() => groupByDepartment(filteredJobs), [filteredJobs]);

  const departmentCounts = useMemo(() => {
    const counts: Record<string, number> = { all: JOBS_DATA.length };
    for (const dept of DEPARTMENT_ORDER) {
      counts[dept] = JOBS_DATA.filter((j) => j.department === dept).length;
    }
    return counts;
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* ========== HERO ========== */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-white border-b border-gray-200 border-dashed">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sm font-normal text-emerald-700">
                We're hiring worldwide
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight mb-5">
              Current Openings
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-800  max-w-2xl font-light">
              Discover exciting career opportunities at Enlivo Technologies and join our talented, globally distributed team. Find the perfect role to showcase your skills.
            </p>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-gray-200 border-dashed">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-2xl font-medium text-black">{JOBS_DATA.length}</p>
                <p className="text-sm text-gray-600">Open positions</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-2xl font-medium text-black">100%</p>
                <p className="text-sm text-gray-600">Remote friendly</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-2xl font-medium text-black">{DEPARTMENT_ORDER.length}</p>
                <p className="text-sm text-gray-600">Departments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FILTERS ========== */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 border-dashed">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4 py-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search positions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-300 transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-600 text-xs"
                  aria-label="Clear search"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Department tabs */}
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setSelectedDept("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedDept === "all"
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-black"
                }`}
              >
                All ({departmentCounts.all})
              </button>
              {DEPARTMENT_ORDER.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    selectedDept === dept
                      ? "bg-black text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-black"
                  }`}
                >
                  {dept} ({departmentCounts[dept]})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== JOB LISTINGS ========== */}
      <section className="py-12 md:py-16">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          {filteredJobs.length === 0 ? (
            /* Empty state */
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-5">
                <Search className="w-7 h-7 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                No positions found
              </h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDept("all");
                }}
                className="mt-6 px-6 py-2.5 rounded-xl bg-black text-white text-sm font-medium hover:bg-gray-900 transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            /* Department groups */
            <div className="space-y-14">
              {Array.from(grouped.entries()).map(([department, jobs]) => (
                <div key={department}>
                  {/* Department header */}
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl md:text-3xl font-medium text-black tracking-tight">
                      {department}
                    </h2>
                    <span className="text-sm text-gray-400 font-medium">
                      {jobs.length} {jobs.length === 1 ? "role" : "roles"}
                    </span>
                  </div>

                  {/* Job cards grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {jobs.map((job) => (
                      <Link
                        key={job.slug}
                        href={`/company/careers/${job.slug}`}
                        className="group relative bg-white rounded-2xl border border-gray-200 p-6 md:p-7 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100/80 transition-all duration-300"
                      >
                        {/* Top row: Title + New badge */}
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="text-lg font-medium text-gray-900 group-hover:text-black transition-colors leading-snug">
                            {job.title}
                          </h3>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            {job.isIntern && (
                              <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-200">
                                Intern
                              </span>
                            )}
                            <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                              New
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-2">
                          {job.description}
                        </p>

                        {/* Meta row */}
                        <div className="flex items-center gap-5 text-sm text-gray-500">
                          {/* Location */}
                          <div className="flex items-center gap-1.5">
                            <Globe className="w-3.5 h-3.5 text-gray-400" strokeWidth={2} />
                            <span>{job.location}</span>
                          </div>

                          {/* Type */}
                          <div className="flex items-center gap-1.5">
                            <Briefcase className="w-3.5 h-3.5 text-gray-400" strokeWidth={2} />
                            <span>{job.type}</span>
                          </div>
                        </div>

                        {/* Arrow indicator */}
                        <div className="absolute top-6 right-6 md:top-7 md:right-7 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
                          <ArrowUpRight className="w-5 h-5 text-gray-400" strokeWidth={2} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-200 border-dashed ">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-medium text-black mb-4 tracking-tight">
              Don't see the right role?
            </h2>
            <p className="text-gray-500 text-lg mb-8 font-light">
              We're always looking for talented people. Send us your resume and we'll
              reach out when there's a match.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:contact@enlivotechnologies.com"
                className="inline-flex items-center gap-2 bg-black text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-gray-900 transition-colors duration-200"
              >
                Send your resume
                <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
              </a>
              <Link
                href="/company/internships"
                className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-medium text-sm border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
              >
                View internships
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
