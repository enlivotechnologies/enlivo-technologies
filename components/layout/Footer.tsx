/**
 * components/layout/Footer.tsx
 *
 * DESIGN: Premium Dark Mode Footer.
 * UPDATES: Width increased to max-w-[85rem] for a spacious, modern layout.
 */

"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Twitter, ArrowRight } from "lucide-react";

// --- CONFIGURATION ---

const FOOTER_LINKS = {
  menu: [
    { label: "About Enlivo", href: "/company/about" },
    { label: "How We Work", href: "/#our-process" },
    { label: "Careers", href: "/company/careers" },
    { label: "Internships", href: "/company/internships" },
  ],
  info: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Support", href: "mailto:enlivotechnologies@gmail.com" },
  ],
};

const SOCIALS = [
  { icon: Twitter, href: "#", label: "X (Twitter)" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/enlivo-global-tech-solutions-pvt-ltd/", label: "LinkedIn" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* INCREASED WIDTH CONTAINER: max-w-[85rem] for better spacing */}
      <div className="max-w-[85rem] mx-auto px-6 lg:px-8">
        
        {/* --- MAIN GRID CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* 1. BRAND COLUMN (Left - lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 relative flex items-center justify-center flex-shrink-0">
                 <Image
                    src="https://res.cloudinary.com/dqmryiyhz/image/upload/v1768460030/EnlivotechnologiesLogo_kzklhg.png"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                    alt="Enlivo Technologies Logo"
                    priority
                  />
              </div>
              <span className="text-xl font-semibold text-white tracking-tight group-hover:opacity-80 transition-opacity font-sans" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Enlivo Technologies
              </span>
            </Link>

            {/* Description */}
            <p className="text-[15px] text-gray-400 leading-relaxed max-w-sm mb-8 font-light font-sans" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Your trusted engineering partner. We transform complex ideas into scalable, reliable software products without the overhead.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {SOCIALS.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon strokeWidth={1.5} className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* 2. NAVIGATION LINKS (Center - lg:col-span-3) */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8 lg:pl-4">
            
            {/* Column: Menu */}
            <div className="flex flex-col gap-5">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-sans" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Menu</h3>
              <nav className="flex flex-col gap-3">
                {FOOTER_LINKS.menu.map((link) => (
                  <Link 
                    key={link.label} 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-[14px] font-sans" 
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column: Info */}
            <div className="flex flex-col gap-5">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-sans" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Info</h3>
              <nav className="flex flex-col gap-3">
                {FOOTER_LINKS.info.map((link) => (
                  <Link 
                    key={link.label} 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-[14px] font-sans"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* 3. NEWSLETTER (Right - lg:col-span-4) */}
          <div className="lg:col-span-4 lg:pl-10">
            <h3 className="text-lg font-semibold text-white mb-3 font-sans" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 font-light mb-6 max-w-sm leading-relaxed text-[14px] font-sans" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Stay informed with our latest tech insights and company updates.
            </p>

            {/* Premium Pill Input */}
            <form 
              className="relative w-full group"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 pl-5 pr-14 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-gray-500 text-sm outline-none focus:border-white/20 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 w-9 h-9 bg-[#D4F24F] hover:bg-[#ccee3e] text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-[0_0_10px_rgba(212,242,79,0.2)]"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4 transition-transform group-hover:-rotate-45" />
              </button>
            </form>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-light font-sans" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Copyright © {currentYear} Enlivo Technologies. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-gray-500 text-xs font-medium font-sans" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>All Systems Normal</span>
          </div>
        </div>

      </div>
    </footer>
  );
}