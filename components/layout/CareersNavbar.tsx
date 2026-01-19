/**
 * components/layout/CareersNavbar.tsx
 *
 * PURPOSE: Custom navbar for careers subdomain pages.
 * STYLE: Minimal, clean design with logo, About link, and social icons.
 * WIDTH: Reduced to max-w-6xl for a more focused, premium look.
 */

"use client";

import Link from "next/link";
import Image from "next/image";

export function CareersNavbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-white/95 backdrop-blur-sm border-b border-gray-100/50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section (Left) */}
          <Link
            href="https://www.enlivotechnologies.com"
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0 transition-opacity hover:opacity-80"
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
              className="text-lg font-semibold font-sans text-black tracking-tight whitespace-nowrap"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Enlivo Technologies
            </span>
          </Link>

          {/* Navigation Links (Right) */}
          <div className="flex items-center gap-4">
            {/* About Link */}
            <Link
              href="https://www.enlivotechnologies.com/company/about"
              className="text-base font-medium text-gray-700 hover:text-black transition-colors duration-200 font-sans px-3 py-1.5 rounded-md hover:bg-gray-50"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              About Enlivo
            </Link>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/company/enlivo-global-tech-solutions-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-black transition-colors duration-200"
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
              className="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-black transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm14-2.9h.5"/>
                <path d="M15.462 11.487a3.5 3.5 0 1 1-6.925 1.026 3.5 3.5 0 0 1 6.925-1.026"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
