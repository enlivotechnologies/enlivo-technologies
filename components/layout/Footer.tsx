/**
 * components/layout/Footer.tsx
 *
 * DESIGN: Premium Dark Mode Footer.
 * UPDATES: Width increased to max-w-[85rem] for a spacious, modern layout.
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getCareersUrl } from "@/lib/constants";

// --- CONFIGURATION ---

const FOOTER_LINKS_INFO = [
  { label: "Support", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

// Custom SVG Icons
const LinkedInIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm5-1.775v.5"/>
    <path d="M8 16.375V10.75m4 5.625V13.5m0 0v-2.75m0 2.75c0-1.288 1.222-2 2.4-2 1.6 0 1.6 1.375 1.6 2.875v2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm14-2.9h.5"/>
    <path d="M15.462 11.487a3.5 3.5 0 1 1-6.925 1.026 3.5 3.5 0 0 1 6.925-1.026"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
    <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/>
  </svg>
);

const SOCIALS = [
  { 
    icon: LinkedInIcon, 
    href: "https://www.linkedin.com/company/enlivo-global-tech-solutions-pvt-ltd/", 
    label: "LinkedIn" 
  },
  { 
    icon: InstagramIcon, 
    href: "https://www.instagram.com/enlivo_globalsolutions_techpvt?igsh=MTlydnYxbGRzbm14Mw==", 
    label: "Instagram" 
  },
  { 
    icon: WhatsAppIcon, 
    href: "https://wa.me/918971363921", 
    label: "WhatsApp" 
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Get careers URL dynamically
  const careersUrl = getCareersUrl();
  const FOOTER_LINKS = {
    menu: [
      { label: "About Enlivo", href: "/company/about", isExternal: false },
      { label: "How We Work", href: "/#our-process", isExternal: false },
      { label: "Careers", href: careersUrl, isExternal: careersUrl.startsWith('http') },
      { label: "Internships", href: "/company/internships", isExternal: false },
    ],
    info: FOOTER_LINKS_INFO,
  };

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      // Simple UI feedback - no storage
      setIsSubmitted(true);
      setEmail("");
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <footer id="footer" className="bg-black pt-20 pb-10 border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* INCREASED WIDTH CONTAINER: max-w-[85rem] for better spacing */}
      <div className="max-w-[85rem] mx-auto px-6 lg:px-8">
        
        {/* --- MAIN GRID CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 items-start">
          
          {/* 1. BRAND COLUMN (Left - lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-7 h-7 relative flex items-center justify-center flex-shrink-0">
                <Image
                  src="https://res.cloudinary.com/dqmryiyhz/image/upload/v1768460030/EnlivotechnologiesLogo_kzklhg.png"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
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
                    className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* 2. NAVIGATION LINKS (Center - lg:col-span-3) */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8 lg:pl-4">
            
            {/* Column: Company */}
            <div className="flex flex-col gap-5">
              <h3 className="text-lg font-medium text-white tracking-wider font-sans" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Company</h3>
              <nav className="flex flex-col gap-3">
                {FOOTER_LINKS.menu.map((link) => {
                  if (link.isExternal) {
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-[14px] font-sans"
                        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                      >
                        {link.label}
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-[14px] font-sans"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Column: Resources */}
            <div className="flex flex-col gap-5">
              <h3 className="text-lg font-medium text-white tracking-wider font-sans" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Resources</h3>
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
          <div className="lg:col-span-4 lg:pl-10 flex flex-col items-start">
            <h3 className="text-lg font-medium text-white mb-3 font-sans" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 font-light mb-6 max-w-sm leading-relaxed text-[14px] font-sans" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Stay informed with our latest tech insights and company updates.
            </p>

            {/* Premium Pill Input */}
            {!isSubmitted ? (
              <form 
                className="relative w-full group"
                onSubmit={handleNewsletterSubmit}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
            ) : (
              <div className="w-full h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-white text-sm">
                Thank you for subscribing!
              </div>
            )}
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-light font-sans" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Copyright © 2025 Enlivo Technologies. All Rights Reserved.
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