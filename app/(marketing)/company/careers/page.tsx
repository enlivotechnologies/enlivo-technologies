import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";
import { CAREERS_SEO } from "@/seo/company"; 
// Note: We are using a direct div with Navbar classes instead of the generic Container component
import { Globe, ArrowUpRight, Clock, Sparkles, MapPin, Briefcase } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  ...CAREERS_SEO,
  title: "Careers at Enlivo - Join our India Team",
  description: "Explore internships and full-time positions in Design and Engineering at our India hubs.",
});

/**
 * MOCK DATA
 */
const MOCK_JOBS = [
  // DESIGN
  {
    slug: "senior-product-designer",
    title: "Senior Product Designer",
    department: "Design",
    type: "Full-time",
    location: "Bengaluru, India",
    salary: "₹35L - ₹50L",
    description: "Lead our core platform initiatives and design system for the next generation of users.",
    isIntern: false
  },
  {
    slug: "product-design-intern",
    title: "Product Design Intern",
    department: "Design",
    type: "Internship (6 Months)",
    location: "Remote / India",
    salary: "₹45k / month",
    description: "Work closely with senior designers to craft pixel-perfect interfaces and user flows.",
    isIntern: true
  },
  
  // ENGINEERING
  {
    slug: "frontend-engineer-ii",
    title: "Frontend Engineer II",
    department: "Engineering",
    type: "Full-time",
    location: "Mumbai, India",
    salary: "₹28L - ₹42L",
    description: "Craft beautiful, high-performance UI components using Next.js and Tailwind.",
    isIntern: false
  },
  {
    slug: "backend-engineering-intern",
    title: "Backend Engineering Intern",
    department: "Engineering",
    type: "Internship (Summer)",
    location: "Bengaluru, India",
    salary: "₹50k / month",
    description: "Help build scalable APIs and optimize database queries for high-traffic systems.",
    isIntern: true
  },
  {
    slug: "staff-software-engineer",
    title: "Staff Software Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / India",
    salary: "₹60L - ₹85L",
    description: "Architect scalable systems for our enterprise analytics platform.",
    isIntern: false
  }
];

export default function CareersPage() {
  const departments = [
    {
      id: "design",
      name: "Design",
      description: "Shape the future of our visual language.",
      filter: (job: any) => job.department === "Design",
    },
    {
      id: "engineering",
      name: "Engineering",
      description: "Build the engines that power our platform.",
      filter: (job: any) => job.department === "Engineering",
    },
  ];

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Company", path: "/company" },
          { name: "Careers" },
        ])}
      />

      {/* Main Background */}
      <main className="bg-[#F5F5F0] min-h-screen font-sans selection:bg-zinc-900 selection:text-white">
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          {/* NAV WIDTH CONSTRAINT APPLIED HERE */}
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E5E0] text-xs font-medium text-zinc-600 mb-8 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Hiring in India
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-[#1a1a1a] tracking-tight mb-8 leading-[1]">
                Do work that defines <br />
                <span className="text-zinc-400">your decade.</span>
              </h1>
              <p className="text-xl text-[#555] font-medium leading-relaxed max-w-2xl">
                Join a team of obsessive craftsmen in India. We foster a culture 
                where the best idea wins, regardless of your title.
              </p>
            </div>
          </div>
        </section>

        {/* Listings Section */}
        <div className="pb-32 space-y-20">
          {departments.map((dept) => {
            const deptJobs = MOCK_JOBS.filter(dept.filter);
            if (deptJobs.length === 0) return null;

            return (
              /* NAV WIDTH CONSTRAINT APPLIED HERE */
              <section key={dept.id} className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-10 items-start border-t border-[#E5E5E0] pt-12">
                  
                  {/* Department Header - Sticky */}
                  <div className="lg:col-span-3 sticky top-32">
                    <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">
                      {dept.name}
                    </h2>
                    <p className="text-base text-[#666] font-medium leading-relaxed pr-4">
                      {dept.description}
                    </p>
                  </div>

                  {/* Job Cards */}
                  <div className="lg:col-span-9 flex flex-col gap-5">
                    {deptJobs.map((job) => (
                      <Link 
                        href={`/company/careers/${job.slug}`} 
                        key={job.slug}
                        className="group block"
                      >
                        <article className="relative bg-white rounded-2xl p-7 transition-all duration-300 border border-[#EBEBE6] hover:border-zinc-400 hover:shadow-xl hover:shadow-zinc-200/40 group-hover:-translate-y-1">
                          
                          <div className="flex flex-col gap-5">
                            {/* Header Row */}
                            <div className="flex justify-between items-start">
                              <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                  <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-black transition-colors">
                                    {job.title}
                                  </h3>
                                  {job.isIntern && (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-indigo-50 text-indigo-600 border border-indigo-100 uppercase tracking-wider">
                                      Internship
                                    </span>
                                  )}
                                </div>
                                <p className="text-[#666] text-[15px] leading-relaxed max-w-2xl">
                                  {job.description}
                                </p>
                              </div>
                              
                              {/* Hover Arrow */}
                              <div className="hidden sm:flex w-8 h-8 rounded-full items-center justify-center bg-zinc-50 text-zinc-300 group-hover:bg-[#1a1a1a] group-hover:text-white transition-all duration-300">
                                <ArrowUpRight className="w-4 h-4" />
                              </div>
                            </div>

                            {/* Footer / Meta Row */}
                            <div className="flex flex-wrap items-center gap-4 mt-1 pt-4 border-t border-zinc-50">
                               {/* Location */}
                              <div className="flex items-center gap-1.5 text-[13px] font-medium text-zinc-600 bg-[#F5F5F0] px-2.5 py-1.5 rounded-md border border-[#E5E5E0]">
                                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                                {job.location}
                              </div>

                              {/* Type */}
                              <div className="flex items-center gap-1.5 text-[13px] font-medium text-zinc-500">
                                {job.isIntern ? <Sparkles className="w-3.5 h-3.5 text-amber-500" /> : <Clock className="w-3.5 h-3.5" />}
                                {job.type}
                              </div>

                              {/* Salary */}
                              <div className="flex items-center gap-1.5 text-[13px] font-medium text-zinc-500">
                                <Briefcase className="w-3.5 h-3.5" />
                                {job.salary}
                              </div>
                            </div>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
}