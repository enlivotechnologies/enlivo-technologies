/**
 * components/layout/CareersFooter.tsx
 *
 * PURPOSE: Custom footer for careers subdomain pages.
 * STYLE: Minimal, clean design with centered logo, navigation links, and social icons on black background.
 * WIDTH: Matches CareersNavbar width (max-w-6xl) for consistency.
 */

"use client";

import Link from "next/link";
import Image from "next/image";

export function CareersFooter() {
  return (
    <footer className="w-full bg-black py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link
              href="https://www.enlivotechnologies.com"
              className="flex items-center gap-3 cursor-pointer group transition-opacity hover:opacity-80"
              aria-label="Enlivo Technologies - Home"
            >
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                <Image
                  src="https://res.cloudinary.com/dqmryiyhz/image/upload/v1768460030/EnlivotechnologiesLogo_kzklhg.png"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                  alt="Enlivo Technologies Logo"
                  priority
                />
              </div>
              <span
                className="text-lg font-semibold font-sans text-gray-400 hover:text-white transition-colors duration-300 tracking-tight whitespace-nowrap"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Enlivo
              </span>
            </Link>
          </div>

          {/* Middle: Navigation Links - Absolutely centered */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4">
            <Link
              href="https://www.enlivotechnologies.com/company/about"
              className="text-base font-medium text-gray-400 hover:text-white transition-colors duration-300 font-sans whitespace-nowrap"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              About Enlivo
            </Link>
            <Link
              href="https://www.enlivotechnologies.com/company/internships"
              className="text-base font-medium text-gray-400 hover:text-white transition-colors duration-300 font-sans whitespace-nowrap"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Internship
            </Link>
            <Link
              href="https://www.enlivotechnologies.com/#services"
              className="text-base font-medium text-gray-400 hover:text-white transition-colors duration-300 font-sans whitespace-nowrap"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Services
            </Link>
            <Link
              href="https://www.enlivotechnologies.com/contact"
              className="text-base font-medium text-gray-400 hover:text-white transition-colors duration-300 font-sans whitespace-nowrap"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Support
            </Link>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/company/enlivo-global-tech-solutions-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm5-1.775v.5"/>
                <path d="M8 16.375V10.75m4 5.625V13.5m0 0v-2.75m0 2.75c0-1.288 1.222-2 2.4-2 1.6 0 1.6 1.375 1.6 2.875v2"/>
              </svg>
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/enlivo_globalsolutions_techpvt?igsh=MTlydnYxbGRzbm14Mw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm14-2.9h.5"/>
                <path d="M15.462 11.487a3.5 3.5 0 1 1-6.925 1.026 3.5 3.5 0 0 1 6.925-1.026"/>
              </svg>
            </a>

            {/* Mail Icon */}
            <a
              href="mailto:Info.enlivo@gmail.com"
              className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="m2.357 7.714 6.98 4.654c.963.641 1.444.962 1.964 1.087.46.11.939.11 1.398 0 .52-.125 1.001-.446 1.964-1.087l6.98-4.654M7.157 19.5h9.686c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.31-1.311c.328-.642.328-1.482.328-3.162V9.3c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311c-.642-.327-1.482-.327-3.162-.327H7.157c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.31 1.311c-.328.642-.328 1.482-.328 3.162v5.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.642.327 1.482.327 3.162.327"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
