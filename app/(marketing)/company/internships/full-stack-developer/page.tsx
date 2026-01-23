import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/schema";
import { ArrowUpRight, ChevronDown, Shield, CheckCircle2, Video, Award } from "lucide-react";
import { CurriculumSection } from "./CurriculumSection";
import { FAQSection } from "./FAQSection";
import { WhyInternshipsFail } from "./WhyInternshipsFail";
import { ClosingStatement } from "./ClosingStatement";

export const metadata: Metadata = buildMetadata({
  title: "Full Stack Developer Internship - Apply Now | Enlivo Technologies",
  description:
    "Apply for our Full Stack Developer internship program. Gain hands-on experience building real-world applications with modern technologies. 6-month program with mentorship and portfolio development.",
  keywords: [
    "full stack developer internship",
    "web development internship",
    "software engineering internship",
    "internship program",
    "tech internship",
    "coding internship",
    "frontend backend internship",
  ],
  pathname: "/company/internships/full-stack-developer",
  ogImage: "/images/og/internships.png",
});

export default function FullStackDeveloperPage() {
  // FAQ data for structured data
  const faqData = [
    {
      question: "Who is this internship designed for?",
      answer: "College students serious about software engineering, beginners who want strong fundamentals (not shortcuts), and self-learners stuck in tutorial hell. This internship is for those ready to commit daily effort and take responsibility for real work.",
    },
    {
      question: "Do I need prior experience to apply?",
      answer: "Basic computer knowledge is enough. We start from fundamentals and move to advanced concepts step by step. What matters more is your commitment to learning and willingness to put in consistent effort throughout the program.",
    },
    {
      question: "What is the expected time commitment?",
      answer: "This is a full-time commitment over 6 months. You'll work on real projects, receive feedback, and participate in code reviews. Expect to invest significant daily hours — similar to what you'd commit in an actual engineering role.",
    },
    {
      question: "How does mentorship and feedback work?",
      answer: "You receive regular feedback on your work — what's good, what needs improvement, and how to fix it. Senior engineers guide you through decisions, review your code, and help you understand professional standards. Support is provided, but effort and responsibility are expected from you.",
    },
    {
      question: "What kind of projects will I work on?",
      answer: "Real-world projects similar to what professionals do in companies. You'll build full-stack applications with authentication, work with databases and APIs, contribute to existing systems, and complete a capstone project that demonstrates your skills.",
    },
    {
      question: "Is this internship paid or unpaid?",
      answer: "This is an unpaid educational internship focused on building real-world engineering skills and experience. You receive mentorship, structured learning, and portfolio-ready work — valuable preparation for a professional engineering career.",
    },
    {
      question: "Does this guarantee a job or placement?",
      answer: "No. We focus on skills, projects, and readiness — results depend on effort. We don't make false promises. Instead, we prepare you with real experience and the ability to demonstrate your capabilities to potential employers.",
    },
    {
      question: "What happens if I struggle during the program?",
      answer: "Struggling is part of learning. We provide support through mentorship, code reviews, and guidance. However, if you're consistently not meeting expectations or not putting in the required effort, we'll have honest conversations about whether this is the right fit.",
    },
  ];

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Internships", path: "/company/internships" },
          { name: "Full Stack Developer Internship" },
        ])}
      />
      <JsonLd data={buildFAQSchema(faqData)} />

      <main className="min-h-screen bg-white">
        {/* Hero Banner Section - Premium Design */}
        <section className="relative pt-6 pb-16 md:pt-8 md:pb-24">
          <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-8">
            <div 
              className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center rounded-3xl overflow-hidden px-8 sm:px-10 lg:px-12 pt-10 md:pt-12 pb-16 md:pb-24 bg-black"
            >
              {/* Content Container - Two Column Layout */}
              <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                
                {/* LEFT COLUMN (60%) */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Banner - New Tag */}
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-4">
                    <span className="px-2 py-0.5 rounded-md bg-purple-500 text-white text-xs font-bold uppercase">New</span>
                    <span className="text-white text-sm font-medium">Registrations are now open!</span>
                  </div>

                  {/* Main Heading - Stacked */}
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.1] tracking-tight">
                  Become a Job Ready Full-Stack Developer
                  Through Real World Work in 6 Months
                  </h1>

                  {/* Subheading */}
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed font-normal max-w-2xl">
                  This is not a tutorial based program. You work on real systems, receive continuous feedback, and grow into responsibility the way engineers do in real teams.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pt-2">
                    {/* Primary CTA - Purple/Pink Vibrant */}
                    <a
                      href="https://forms.gle/McnKvvBJtaVDhmLM6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 py-4 rounded-xl font-semibold text-base hover:scale-[1.02] hover:shadow-xl transition-all duration-200"
                    >
                      Apply for Internship
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>

                    {/* Secondary CTA - White with Border */}
                    <Link
                      href="#syllabus"
                      className="group inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-semibold text-base border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                    >
                      See Curriculum
                      <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Feature Indicators */}
                  <div className="flex flex-wrap items-center gap-6 pt-6">
                    <div className="flex items-center gap-2 text-white">
                      <Video className="w-5 h-5 text-gray-400" strokeWidth={2} />
                      <span className="text-sm font-medium">ONLINE</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <CheckCircle2 className="w-5 h-5 text-gray-400" strokeWidth={2} />
                      <span className="text-sm font-medium">HANDS-ON</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <Award className="w-5 h-5 text-gray-400" strokeWidth={2} />
                      <span className="text-sm font-medium">CERTIFICATE</span>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN (40%) - Hero Image */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-2xl">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src="https://res.cloudinary.com/dqmryiyhz/image/upload/v1768707793/full-hero_tntrrl.jpg"
                        alt="Full Stack Developer Internship"
                        fill
                        className="object-cover scale-105 transition-transform duration-700"
                        priority
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        style={{
                          maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
                          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)'
                        }}
                      />
                      {/* Enhanced gradient overlays for premium fade effect */}
                      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10" />
                      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10" />
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none z-10" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Why Most Internships Fail Students */}
        <WhyInternshipsFail />

        {/* What You'll Learn Section */}
        <CurriculumSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Closing Statement */}
        <ClosingStatement />
      </main>
    </>
  );
}
