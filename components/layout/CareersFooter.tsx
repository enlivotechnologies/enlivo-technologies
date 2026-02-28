/**
 * components/layout/CareersFooter.tsx
 *
 * PURPOSE: Premium footer for careers pages — clean, spacious, professional.
 * STYLE: Dark background, multi-column layout, matching main site quality.
 * WIDTH: max-w-[95rem] matching CareersNavbar for consistency.
 */

"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  careers: [
    { label: "Open Positions", href: "/company/careers" },
    { label: "Internships", href: "/company/internships" },
    { label: "Life at Enlivo", href: "/company/about" },
  ],
  company: [
    { label: "About Us", href: "/company/about" },
    { label: "Services", href: "/#services-overview" },
    { label: "Contact", href: "/contact" },
    { label: "Main Website", href: "/" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/enlivo-global-tech-solutions-pvt-ltd/",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm5-1.775v.5" />
        <path d="M8 16.375V10.75m4 5.625V13.5m0 0v-2.75m0 2.75c0-1.288 1.222-2 2.4-2 1.6 0 1.6 1.375 1.6 2.875v2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/enlivo_globalsolutions_techpvt",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm14-2.9h.5" />
        <path d="M15.462 11.487a3.5 3.5 0 1 1-6.925 1.026 3.5 3.5 0 0 1 6.925-1.026" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:contact@enlivotechnologies.com",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="m2.357 7.714 6.98 4.654c.963.641 1.444.962 1.964 1.087.46.11.939.11 1.398 0 .52-.125 1.001-.446 1.964-1.087l6.98-4.654M7.157 19.5h9.686c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.31-1.311c.328-.642.328-1.482.328-3.162V9.3c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311c-.642-.327-1.482-.327-3.162-.327H7.157c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.31 1.311c-.328.642-.328 1.482-.328 3.162v5.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.642.327 1.482.327 3.162.327" />
      </svg>
    ),
  },
];

export function CareersFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-[#9E9EA0]">
      {/* Main footer */}
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Link
              href="/company/careers"
              className="flex items-center gap-2.5 mb-5"
              aria-label="Enlivo Careers"
            >
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/navbar/EnlivotechnologiesLogo.png"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                  alt="Enlivo Technologies Logo"
                />
              </div>
              <span
                className="text-lg font-semibold text-white tracking-tight"
                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              >
                Enlivo Careers
              </span>
            </Link>
            <p className="text-sm text-[#9E9EA0] leading-relaxed max-w-sm mb-6">
              Join a globally distributed team building premium software for startups and enterprises. We hire worldwide — talent has no borders.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-lg bg-[white/5] flex items-center justify-center text-[#9E9EA0] hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Careers links */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h3 className="text-xs font-medium text-white uppercase mb-4">
              Careers
            </h3>
            <ul className="space-y-3">
              {footerLinks.careers.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9E9EA0] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-medium text-white uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9E9EA0] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-medium text-white uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9E9EA0] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-[#9E9EA0]">
              &copy; {currentYear} Enlivo Technologies. All rights reserved.
            </p>
            <p className="text-xs text-[#9E9EA0]">
              Built with care, worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
