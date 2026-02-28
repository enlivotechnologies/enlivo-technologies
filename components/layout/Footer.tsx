"use client";

import Link from "next/link";
import Script from "next/script";
import { getCareersUrl } from "@/lib/constants";

// --- COMPONENTS: ICONS ---

const LinkedInIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

// --- DATA ---

const FOOTER_NAV = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/company/about" },
      { label: "Team", href: "/company/team" },
      { label: "Careers", href: getCareersUrl() },
      { label: "Blog", href: "/blog" },
    ],
    // Nested Legal Section for Column 1
    legalGroup: {
      title: "Legal",
      links: [
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Notice", href: "/privacy" },
        { label: "Privacy Notice", href: "/privacy" },
        { label: "Refund Policy", href: "/refund-policy" },
      ]
    }
  },
  {
    title: "Services",
    links: [
      { label: "MVP Development", href: "/services/mvp-development" },
      { label: "Product Rebuild", href: "/services/product-rebuild" },
      { label: "Dedicated Team", href: "/services/dedicated-team" },
      { label: "Free Audit", href: "/services/free-audit" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "FAQs", href: "/#faq" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Email", href: "mailto:contact@enlivotechnologies.com" },
      { label: "WhatsApp",  href: "https://wa.me/919876543210?text=Hi%20Enlivo%20Team%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20discuss%3F"   },
      { label: "Calendly", href: "#" }, // This will be intercepted in the render
      { label: "Support", href: "/contact" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-24 pb-8 font-sans border-t border-white/5">
      
      {/* Calendly Widget Dependencies */}
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

      {/* Container Width Match */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* --- MAIN FLEX CONTAINER: LEFT vs RIGHT --- */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20 min-h-[500px]">
          
          {/* === LEFT SIDE: BRANDING (35%) === */}
          <div className="lg:w-[35%] flex flex-col justify-end items-start order-2 lg:order-1">
             
             {/* Logo (Typography) */}
             <Link href="/" className="group block mb-5">
               <h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
               Enlivo Global Tech Solution Pvt Ltd
               </h1>
             </Link>

             {/* Socials */}
             <div className="flex items-center gap-5">
                <span className="text-[15px] font-medium text-white">Follow us</span>
                <div className="flex gap-3">
                  <a
                     href="https://www.linkedin.com/company/enlivo-global-technology-private-limited/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-11 h-11 rounded-full bg-[#1c1c1c] hover:bg-[#333] flex items-center justify-center text-white transition-all duration-300"
                     aria-label="Follow Enlivo Technologies on LinkedIn"
                  >
                     <LinkedInIcon />
                  </a>
                  <a
                     href="https://www.instagram.com/enlivo_globalsolutions_techpvt"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-11 h-11 rounded-full bg-[#1c1c1c] hover:bg-[#333] flex items-center justify-center text-white transition-all duration-300"
                     aria-label="Follow Enlivo Technologies on Instagram"
                  >
                     <InstagramIcon />
                  </a>
                </div>
             </div>
          </div>

          {/* === RIGHT SIDE: NAVIGATION GRID (65%) === */}
          <div className="lg:w-[65%] grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 order-1 lg:order-2">
            {FOOTER_NAV.map((col) => (
              <div key={col.title} className="flex flex-col">
                <h3 className="text-[16px] font-medium text-white mb-6">
                  {col.title}
                </h3>
                
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.label === "Calendly" ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            if ((window as any).Calendly) {
                              (window as any).Calendly.initPopupWidget({
                                url: 'https://calendly.com/enlivotechnologies/30min'
                              });
                            }
                          }}
                          className="text-[#9E9EA0] hover:text-white transition-colors duration-200 text-[15px] cursor-pointer text-left w-full"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <Link 
                          href={link.href}
                          className="text-[#9E9EA0] hover:text-white transition-colors duration-200 text-[15px]"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Vertical Stacking: Legal goes under Solutions */}
                {col.legalGroup && (
                  <div className="mt-16">
                    <h3 className="text-[16px] font-medium text-white mb-6">
                      {col.legalGroup.title}
                    </h3>
                    <ul className="space-y-4">
                      {col.legalGroup.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="text-[#9E9EA0] hover:text-white transition-colors duration-200 text-[15px]"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* --- BOTTOM BAR: COPYRIGHT & ADDRESS --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[#9E9EA0] text-[13px]">
          <p>© {currentYear} Enlivo Global Tech Solutions Pvt Ltd</p>
          <p className="md:text-right font-light">
            #31 Srusthti police colony kengeri, Bangalore - 560060, India
          </p>
        </div>

      </div>
    </footer>
  );
}
