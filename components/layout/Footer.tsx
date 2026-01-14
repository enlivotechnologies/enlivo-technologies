/**
 * components/layout/Footer.tsx
 *
 * PURPOSE: Premium enterprise footer (Dark Mode).
 * STYLE: High-contrast black aesthetic with architectural spacing and premium interactive elements.
 */

import Link from "next/link";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

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

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  whatsapp: WhatsappIcon, // Custom Whatsapp Icon
  youtube: Youtube,
  facebook: Facebook,
};

// Navigation Data
const FOOTER_NAVIGATION = [
  {
    header: "Company",
    links: [
      { label: "About Enlivo", href: "/company/about" },
      { label: "How We Work", href: "/company/how-we-work" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Careers", href: "/company/careers" },
      { label: "Internships", href: "/company/internships" },
      { label: "Contact", href: "/contact" },
      { label: "Insights & Reports", href: "/insights" },
    ],
  },
  {
    header: "Resources",
    links: [
      { label: "Contact Support", href: "/support" },
      { label: "Ambassador Program", href: "/ambassadors" },
      { label: "Tech Glossary", href: "/glossary" },
      { label: "FAQs", href: "/faq" },
      { label: "SaaS Landing Pages", href: "/resources/saas" },
      { label: "Security Practices", href: "/security" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Public Notice", href: "/public-notice" },
      { label: "Blog / Insights", href: "/insights" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-black text-white border-t border-white/10 pt-24 pb-12"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Container width matched to Navbar (85rem) for perfect alignment */}
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

            <p className="text-[15px] font-medium text-gray-400 mb-8 max-w-[280px] leading-relaxed">
              From concept to scalable enterprise system in record time.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
                // If a specific icon isn't found, fallback to WhatsappIcon or just render nothing
                const Icon =
                  socialIcons[platform as keyof typeof socialIcons] ||
                  WhatsappIcon;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white opacity-60 hover:opacity-100 hover:text-white transition-all duration-300"
                    aria-label={`Follow us on ${platform}`}
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
                <span className="block text-gray-500 font-medium mb-1">
                  Don't miss a beat.
                </span>
                <span className="font-bold">Subscribe to our newsletter.</span>
              </h3>

              {/* Pill-Shaped Input Group (Dark Mode) */}
              <form className="relative w-full group">
                <input
                  type="email"
                  // Enterprise standard placeholder indicating B2B email
                  placeholder="name@workemail.com"
                  required
                  // Updated with #A1A1A1 placeholder and premium light focus glow
                  className="w-full h-[3.5rem] pl-6 pr-32 bg-white/5 text-white placeholder:text-[#A1A1A1] rounded-full border border-white/10 outline-none focus:border-white/30 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all duration-300 ease-out font-medium"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-6 bg-white hover:bg-gray-200 text-black text-sm font-bold rounded-full transition-colors duration-300"
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
                  {/* Visually hidden header for SEO, but providing spacing */}
                  <div className="h-0 opacity-0" aria-hidden="true">
                    {column.header}
                  </div>
                  {column.links.map((link) => (
                    <Link
                      key={link.href || link.label}
                      href={link.href || "#"}
                      className="text-[14px] font-medium text-gray-500 hover:text-white hover:underline decoration-white/30 underline-offset-4 transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR: COPYRIGHT & LEGAL --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 text-[13px] font-medium text-gray-500">
          <p>
            © {currentYear} {SITE_CONFIG.name} Private Limited. All rights
            reserved.
          </p>

          <nav className="flex flex-wrap gap-8" aria-label="Legal navigation">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link
              href="/public-notice"
              className="hover:text-white transition-colors"
            >
              Public Notice
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
