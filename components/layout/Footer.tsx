/**
 * components/layout/Footer.tsx
 *
 * PURPOSE: Premium enterprise footer with navigation and company info.
 * WHY: Provides secondary navigation, builds trust, and improves SEO.
 *
 * SEO NOTE: Footer links help distribute page authority across the site.
 */

import Link from "next/link";
import Image from "next/image";
import { NAVIGATION, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

// Social Icons
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const socialIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  github: GitHubIcon,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-[#030303] text-white overflow-hidden"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2563EB]/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px]" />
      </div>

      {/* Top border gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              {/* Logo */}
              <Link href="/" className="inline-flex items-center gap-3 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/navbar/EnlivoLogo.png"
                  alt="Enlivo Technologies"
                  width={40}
                  height={40}
                  className="object-contain w-10 h-10"
                />
                <span
                  className="text-xl font-semibold tracking-tight text-white"
                  itemProp="name"
                >
                  {SITE_CONFIG.name}
                </span>
              </Link>

              {/* Tagline */}
              <p
                className="mt-6 text-[15px] leading-relaxed text-white/50 max-w-sm"
                itemProp="description"
              >
                Engineering enterprise-grade digital systems with security,
                scalability, and precision. Trusted by industry leaders for
                mission-critical software.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-8">
                {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
                  const Icon = socialIcons[platform];
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/social w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                      aria-label={`Follow us on ${platform}`}
                      itemProp="sameAs"
                    >
                      {Icon && (
                        <Icon className="w-4 h-4 text-white/40 group-hover/social:text-white transition-colors duration-300" />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
                {/* Services */}
                <div>
                  <h3 className="text-[11px] font-semibold tracking-[0.2em] text-white/30 uppercase mb-5">
                    Services
                  </h3>
                  <ul className="space-y-3.5">
                    {NAVIGATION.footer.services.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-[14px] text-white/50 hover:text-white transition-colors duration-300 inline-block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h3 className="text-[11px] font-semibold tracking-[0.2em] text-white/30 uppercase mb-5">
                    Company
                  </h3>
                  <ul className="space-y-3.5">
                    {NAVIGATION.footer.company.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-[14px] text-white/50 hover:text-white transition-colors duration-300 inline-block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/case-studies"
                        className="text-[14px] text-white/50 hover:text-white transition-colors duration-300 inline-block"
                      >
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/insights"
                        className="text-[14px] text-white/50 hover:text-white transition-colors duration-300 inline-block"
                      >
                        Insights
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Contact & Legal */}
                <div>
                  <h3 className="text-[11px] font-semibold tracking-[0.2em] text-white/30 uppercase mb-5">
                    Contact
                  </h3>
                  <ul className="space-y-3.5">
                    <li>
                      <a
                        href="mailto:hello@enlivotechnologies.com"
                        className="text-[14px] text-white/50 hover:text-white transition-colors duration-300 inline-block"
                        itemProp="email"
                      >
                        hello@enlivotechnologies.com
                      </a>
                    </li>
                    <li>
                      <span
                        className="text-[14px] text-white/50"
                        itemProp="address"
                      >
                        Bangalore, India
                      </span>
                    </li>
                  </ul>

                  <h3 className="text-[11px] font-semibold tracking-[0.2em] text-white/30 uppercase mb-5 mt-8">
                    Legal
                  </h3>
                  <ul className="space-y-3.5">
                    {NAVIGATION.footer.legal.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-[14px] text-white/50 hover:text-white transition-colors duration-300 inline-block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-[13px] text-white/30">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>

            {/* Status & Trust Badges */}
            <div className="flex items-center gap-6">
              {/* System Status */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[12px] text-white/40">
                  All systems operational
                </span>
              </div>

              {/* Made in India badge */}
              {/* <div className="hidden sm:flex items-center gap-1.5 text-[12px] text-white/30">
                <span>Made with</span>
                <svg
                  className="w-3 h-3 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>in India</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
