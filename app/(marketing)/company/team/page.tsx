/**
 * app/(marketing)/company/team/page.tsx
 *
 * PURPOSE: Team page — introduce the people behind Enlivo.
 * WHY: Builds trust, humanizes the brand, establishes E-E-A-T.
 * Startup founders want to know who they're working with.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema, buildOrganizationSchema } from "@/lib/schema";
import { 
  ArrowUpRight, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Globe,
  Zap,
  Coffee,
  Heart,
  Users,
  ArrowRight
} from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = buildMetadata({
  title: "Our Team | Meet the Engineers Behind Enlivo",
  description:
    "Meet the team behind Enlivo Technologies — engineers, designers, and product thinkers who help funded startups ship world-class products in weeks, not months.",
  keywords: [
    "Enlivo team",
    "software development team",
    "startup engineering team",
    "product development team",
    "Enlivo Technologies team",
    "tech team India",
    "offshore development team",
    "dedicated software engineers",
  ],
  pathname: "/company/team",
  ogImage: "/images/og/enlivo-technologies.png",
});

// --- Team Data ---
const TEAM_MEMBERS = [
  {
    type: "highlight",
    name: "Akshay K",
    role: "CEO & Founder",
    bio: "Akshay has over 12 years of experience in strategic leadership and business development.",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    type: "image",
    name: "Akshay K",
    role: "Chief Executive Officer",
    image: "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772011582/ceo_sqqqov.jpg",
  },
  {
    type: "image",
    name: "Abhi",
    role: "Managing Director",
    image: "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772011582/ceo_sqqqov.jpg",
  },
  {
    type: "image",
    name: "Neha S Rao",
    role: "HR Manager",
    image: "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772011582/ceo_sqqqov.jpg",
  },
  {
    type: "image",
    name: "Nishal N Poojary",
    role: "Backend Engineer",
    image: "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772125329/nishal_c2gzz4.jpg",
  },
  {
    type: "image",
    name: "Nishmitha V G",
    role: "UI/UX Designer",
    image: "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772125545/nishmitha_krs5xs.jpg",
  },
  {
    type: "image",
    name: "K Vivek Acharya",
    role: "Frontend Developer",
    image: "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772125090/vivek_kjtnki.jpg",
  },
  {
    type: "image",
    name: "Anush",
    role: "What isthe role?", // Kept exactly as you provided
    image: "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772125659/anush_e2pzvy.jpg",
  },
];

const VALUES = [
  {
    title: "Ship Fast, Ship Right",
    description: "We believe speed and quality aren't mutually exclusive. Every sprint delivers working software.",
  },
  {
    title: "Founders First",
    description: "We treat every project like it's our own startup. Your success is our success.",
  },
  {
    title: "Transparent Always",
    description: "Weekly demos, honest timelines, no surprises. You see what we build as we build it.",
  },
];

// --- NEW DATA FOR CULTURE SECTIONS ---
const CULTURE_PERKS = [
  {
    icon: Users,
    title: "Highly Collaborative",
    description: "No silos. Engineers, designers, and founders work side-by-side to solve complex product challenges together.",
  },
  {
    icon: Zap,
    title: "Empowered to Act",
    description: "We hire smart people and get out of their way. Everyone has a voice in the product architecture.",
  },
  {
    icon: Coffee,
    title: "Bangalore HQ",
    description: "Operating from the Silicon Valley of India, surrounded by top-tier talent and an incredible tech ecosystem.",
  },
  {
    icon: Heart,
    title: "Work-Life Integration",
    description: "We sprint hard, but we know burnout doesn't build good software. We prioritize health and sustainable pacing.",
  },
];

const CULTURE_IMAGES = [
  "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772182498/corporate3_ngyrdp.jpg", // Team collaborating
  "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772182346/corporate-2_qxthan.jpg", // Whiteboard session
  "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772182607/corporate4_ewjr7m.jpg", // Modern office
  "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772182498/corporate3_ngyrdp.jpg", // Corporate event/fun
];

export default function TeamPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Company", path: "/company/about" },
          { name: "Team" },
        ])}
      />
      <JsonLd data={buildOrganizationSchema()} />

      <main className="min-h-screen bg-white">
        
        {/* Header & Team Grid Section */}
        <section className="pt-36 pb-24 md:pt-48 lg:pt-56 md:pb-32">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-16 mb-20 lg:mb-24">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-gray-900 tracking-tight leading-[1.1] lg:w-1/2">
               The people behind<br />
                every product we ship.
              </h1>
              <p className="text-lg lg:text-[1.125rem] text-black/70 leading-relaxed lg:w-1/2 lg:mt-3">
                We&apos;re a tight-knit team of engineers, designers, and product thinkers based in Bangalore, India. We help ambitious startups turn ideas into live products — fast.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {TEAM_MEMBERS.map((member, index) => {
                if (member.type === "highlight") {
                  return (
                    <div 
                      key={index} 
                      className="bg-[#2B6DF5] rounded-[2rem] p-8 flex flex-col justify-between aspect-[4/5] sm:aspect-auto sm:h-full shadow-lg"
                    >
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-1">{member.name}</h3>
                        <p className="text-blue-200 text-sm font-medium mb-6">{member.role}</p>
                        <p className="text-blue-100/90 text-[15px] leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                      <div className="flex items-center gap-5 text-white/80 mt-8">
                        {member.socials?.linkedin && (
                          <a href={member.socials.linkedin} className="hover:text-white transition-colors duration-300">
                            <Linkedin className="w-5 h-5 fill-current" />
                          </a>
                        )}
                        {member.socials?.twitter && (
                          <a href={member.socials.twitter} className="hover:text-white transition-colors duration-300">
                            <Twitter className="w-5 h-5 fill-current" />
                          </a>
                        )}
                        {member.socials?.instagram && (
                          <a href={member.socials.instagram} className="hover:text-white transition-colors duration-300">
                            <Instagram className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                }

                return (
                  <div 
                    key={index} 
                    className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-gray-100 isolate"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${member.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent opacity-80" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center z-10">
                      <h3 className="text-xl font-medium text-white mb-1 drop-shadow-sm">{member.name}</h3>
                      <p className="text-sm text-white/80 font-medium drop-shadow-sm">{member.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

   {/* Values */}
   <section className="py-24  bg-white">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            
            <div className="text-center mb-20 md:mb-24">
              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-gray-900 tracking-tight mb-6">
                What drives us
              </h2>
              <p className="text-lg lg:text-[1.125rem] text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Our values aren&apos;t wall posters — they&apos;re how we actually work, every day.
              </p>
            </div>

            {/* Premium Divider Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {VALUES.map((value, index) => (
                <div 
                  key={value.title} 
                  className="relative pt-12 md:pt-0 md:px-10 lg:px-16 first:pt-0 first:md:pl-0 last:md:pr-0 flex flex-col group"
                >
                  {/* Subtle editorial numbering */}
                  <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 mb-6 block uppercase">
                    0{index + 1} &mdash;
                  </span>
                  
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-500 leading-relaxed text-[1.05rem]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
            
          </div>
        </section>

        {/* Life at Enlivo (Culture Gallery) */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-black tracking-tight mb-4">
                  Life at Enlivo
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Great software isn't built in a vacuum. It’s built by people who enjoy 
                  working together, challenging each other, and sharing a few laughs along the way.
                </p>
              </div>
              <Link 
                href="/company/careers" 
                className="hidden md:flex items-center gap-2 text-[#2B6DF5] font-medium hover:text-blue-700 transition-colors"
              >
                Join our team <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Premium Bento Box Style Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div 
                className="md:col-span-2 aspect-video md:aspect-auto rounded-[2rem] bg-gray-100 bg-cover bg-center"
                style={{ backgroundImage: `url(${CULTURE_IMAGES[0]})` }}
              />
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
                <div 
                  className="aspect-square rounded-[2rem] bg-gray-100 bg-cover bg-center"
                  style={{ backgroundImage: `url(${CULTURE_IMAGES[1]})` }}
                />
                <div 
                  className="aspect-square rounded-[2rem] bg-gray-100 bg-cover bg-center"
                  style={{ backgroundImage: `url(${CULTURE_IMAGES[2]})` }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Culture & Perks (Trust Builder) */}
        <section className="py-24 md:py-32 bg-black text-white">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            
            {/* Header Row (Standalone to allow paragraph and grid to align below it) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-4 lg:mb-6">
              <div className="lg:col-span-5 lg:pr-8">
                <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.1]">
                  An environment built<br className="hidden lg:block"/> for builders.
                </h2>
              </div>
            </div>

            {/* Content Row: Paragraph (Left) perfectly aligns with Perks Grid (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
              
              {/* Left Side: Subheading / Paragraph */}
              <div className="lg:col-span-5 lg:pr-8">
                <p className="text-lg text-white/50 leading-relaxed">
                  We are deeply invested in the growth and well-being of our team. 
                  When you work with Enlivo, you are partnering with a team that is 
                  motivated, supported, and equipped to do the best work of their lives.
                </p>
              </div>
              
              {/* Right Side: Premium 2x2 Crosshair Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2">
                {CULTURE_PERKS.map((perk, index) => {
                  const Icon = perk.icon;
                  
                  // Logic to draw the perfect inner crosshair lines based on index
                  let gridClasses = "";
                  if (index === 0) {
                    // Top Left
                    gridClasses = "pb-10 sm:pb-12 border-b border-white/15 border-dashed sm:border-r sm:pr-8 lg:pr-12";
                  } else if (index === 1) {
                    // Top Right
                    gridClasses = "py-10 sm:py-0 sm:pb-12 border-b border-white/15 border-dashed sm:pl-8 lg:pl-12";
                  } else if (index === 2) {
                    // Bottom Left
                    gridClasses = "py-10 sm:py-0 sm:pt-12 border-b sm:border-b-0 border-white/15 border-dashed sm:border-r sm:pr-8 lg:pr-12";
                  } else if (index === 3) {
                    // Bottom Right
                    gridClasses = "pt-10 sm:pt-12 sm:pl-8 lg:pl-12";
                  }

                  return (
                    <div key={index} className={`flex items-start gap-4 sm:gap-6 ${gridClasses}`}>
                      {/* Icon left-aligned, perfectly matched to reference image */}
                      <div className="shrink-0 mt-0.5">
                        <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                      
                      {/* Text block aligned together */}
                      <div>
                        <h3 className="text-[1.15rem] font-medium mb-2 text-white">{perk.title}</h3>
                        <p className="text-white/50 leading-relaxed text-[15px]">
                          {perk.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* Final CTA Block */}
        <section className="bg-black pb-12 sm:pb-20">
          <div className="max-w-[105rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] rounded-b-[2.5rem] sm:rounded-b-[3.5rem] overflow-hidden isolate">
              
              {/* Static Background Image (No hover scaling) */}
              <Image
                src="https://res.cloudinary.com/dqmryiyhz/image/upload/v1771168488/bg12_eqq2bv.jpg"
                alt="Background Visual"
                fill
                className="object-cover object-center -z-10"
                quality={100}
                priority
              />

              

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                  
                  {/* Heading */}
                  <h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-white tracking-tight drop-shadow-lg">
                    Liked what you saw? Let's build something together.
                  </h2>
                  
                  {/* Subheading */}
                  <p className="text-lg lg:text-[1.125rem] text-white/90 font-normal drop-shadow-md max-w-2xl mx-auto">
                    We're selective about who we work with — and so are you. If it feels like a fit, let's find out.
                  </p>

                  {/* Buttons Container */}
                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    {/* Primary Button */}
                    <a
                      href="https://cal.com/info-enlivo-yyhgqr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 bg-white text-black text-base sm:text-[15px] font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors w-full sm:w-auto"
                    >
                      Start a Project
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    {/* Secondary Button */}
                    <Link
                      href="/company/careers"
                      className="inline-flex items-center justify-center gap-2 text-white/80 hover:text-white text-base sm:text-[15px] font-medium px-8 py-4 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
                    >
                      View open roles
                      <Globe className="w-4 h-4" />
                    </Link>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}