"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { Linkedin, Twitter } from "lucide-react";

// --- Custom Icons ---

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// --- Configuration ---

// Navigation Data
const FOOTER_NAVIGATION = [
  {
    header: "Company",
    links: [
      { label: "About Enlivo", href: "/company/about" },
      { label: "How We Work", href: "/#our-process" },
      // { label: "Case Studies" },
      // { label: "Leadership" },
      { label: "Careers", href: "/company/careers" },
      { label: "Internships" },
    ],
  },
  {
    header: "Resources",
    links: [
      { label: "Support" },
      // { label: "FAQs" },
      // { label: "Security Practices" },
      // { label: "Tech Glossary" },
      { label: "Blog & Insights" },
    ],
  },
];

export function Footer() {
  // Explicitly set year to 2025
  const currentYear = 2025;

  // Social Links Configuration
  const socialMediaLinks = [
    {
      id: "whatsapp",
      icon: WhatsappIcon,
      href: "https://wa.me/918971363921",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/enlivo-global-tech-solutions-pvt-ltd/",
    },
    {
      id: "twitter",
      icon: Twitter,
      href: "https://twitter.com/test",
    },
  ];

  return (
    <footer
      className="bg-black text-white border-t border-white/10 pt-24 pb-12"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-12 mb-28">
          {/* 1. LEFT SECTION: BRAND IDENTITY */}
          <div className="xl:col-span-4 flex flex-col items-start">
            <Link href="/" className="group block mb-6">
              <span className="font-bold text-4xl tracking-tight text-white">
                Enlivo<span className="text-[#2563EB]">.</span>
              </span>
            </Link>

            <p className="text-[15px] font-medium text-[#B2B2B2] mb-8 max-w-[280px] leading-relaxed">
              From concept to scalable enterprise system in record time.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              {socialMediaLinks.map((item) => {
                const Icon = item.icon;
                const isClickable = item.href.length > 0;

                return (
                  <a
                    key={item.id}
                    href={isClickable ? item.href : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white transition-all duration-300 ${
                      isClickable
                        ? "opacity-60 hover:opacity-100 hover:text-white cursor-pointer"
                        : "opacity-40 cursor-default"
                    }`}
                    aria-label={`Follow us on ${item.id}`}
                    onClick={(e) => {
                      if (!isClickable) e.preventDefault();
                    }}
                  >
                    <Icon strokeWidth={2} className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* 2. CENTER SECTION: NEWSLETTER CTA */}
          <div className="xl:col-span-4 flex flex-col items-start xl:pl-8">
            <div className="max-w-md w-full">
              <h3 className="text-3xl tracking-tight text-white leading-tight mb-8">
                <span className="block text-[#B2B2B2] font-medium mb-1">
                  Don't miss a beat.
                </span>
                <span className="font-medium">
                  Subscribe to our newsletter.
                </span>
              </h3>

              <form
                className="relative w-full group"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="name@workemail.com"
                  required
                  className="w-full h-[3.5rem] pl-6 pr-32 bg-white/5 text-[#B2B2B2] placeholder:text-[#A1A1A1] rounded-full border border-white/10 outline-none focus:border-white/30 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all duration-300 ease-out font-medium"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-6 bg-white hover:bg-gray-200 text-black text-sm font-medium rounded-full transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* 3. RIGHT SECTION: NAVIGATION LINKS */}
          <div className="xl:col-span-4 xl:pl-12">
            <div className="grid grid-cols-2 gap-y-10 gap-x-4">
              {FOOTER_NAVIGATION.map((column) => (
                <div key={column.header} className="flex flex-col gap-4">
                  <div className="h-0 opacity-0" aria-hidden="true">
                    {column.header}
                  </div>
                  {column.links.map((link) =>
                    link.href ? (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-[14px] font-medium text-[#B2B2B2] hover:text-white hover:underline decoration-white/30 underline-offset-4 transition-all duration-200 cursor-pointer"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <span
                        key={link.label}
                        className="text-[14px] font-medium text-[#B2B2B2] hover:text-white hover:underline decoration-white/30 underline-offset-4 transition-all duration-200 cursor-pointer"
                      >
                        {link.label}
                      </span>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 text-[13px] font-medium text-[#B2B2B2]">
          <p>
            © {currentYear} {SITE_CONFIG.name || "Enlivo Technologies"} Private
            Limited. All rights reserved.
          </p>

          <nav className="flex flex-wrap gap-8" aria-label="Legal navigation">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Public Notice
            </span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
