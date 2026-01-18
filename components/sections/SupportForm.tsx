/**
 * components/sections/SupportForm.tsx
 *
 * PURPOSE: Support contact form component.
 * WHY: Client-side form handling for support inquiries.
 */

"use client";

import { useState, useRef, useEffect } from "react";

// Country list with codes
const COUNTRIES = [
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "China", code: "+86", flag: "🇨🇳" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Italy", code: "+39", flag: "🇮🇹" },
  { name: "Spain", code: "+34", flag: "🇪🇸" },
  { name: "Brazil", code: "+55", flag: "🇧🇷" },
  { name: "Mexico", code: "+52", flag: "🇲🇽" },
  { name: "Russia", code: "+7", flag: "🇷🇺" },
  { name: "South Korea", code: "+82", flag: "🇰🇷" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱" },
  { name: "Sweden", code: "+46", flag: "🇸🇪" },
  { name: "Switzerland", code: "+41", flag: "🇨🇭" },
  { name: "Belgium", code: "+32", flag: "🇧🇪" },
  { name: "Austria", code: "+43", flag: "🇦🇹" },
  { name: "Poland", code: "+48", flag: "🇵🇱" },
  { name: "Denmark", code: "+45", flag: "🇩🇰" },
  { name: "Norway", code: "+47", flag: "🇳🇴" },
  { name: "Finland", code: "+358", flag: "🇫🇮" },
  { name: "Ireland", code: "+353", flag: "🇮🇪" },
  { name: "Portugal", code: "+351", flag: "🇵🇹" },
  { name: "Greece", code: "+30", flag: "🇬🇷" },
  { name: "Turkey", code: "+90", flag: "🇹🇷" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾" },
  { name: "Thailand", code: "+66", flag: "🇹🇭" },
  { name: "Indonesia", code: "+62", flag: "🇮🇩" },
  { name: "Philippines", code: "+63", flag: "🇵🇭" },
  { name: "Vietnam", code: "+84", flag: "🇻🇳" },
  { name: "New Zealand", code: "+64", flag: "🇳🇿" },
  { name: "South Africa", code: "+27", flag: "🇿🇦" },
  { name: "Egypt", code: "+20", flag: "🇪🇬" },
  { name: "Israel", code: "+972", flag: "🇮🇱" },
  { name: "Argentina", code: "+54", flag: "🇦🇷" },
  { name: "Chile", code: "+56", flag: "🇨🇱" },
  { name: "Colombia", code: "+57", flag: "🇨🇴" },
  { name: "Peru", code: "+51", flag: "🇵🇪" },
  { name: "Venezuela", code: "+58", flag: "🇻🇪" },
  { name: "Pakistan", code: "+92", flag: "🇵🇰" },
  { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
  { name: "Afghanistan", code: "+93", flag: "🇦🇫" },
  { name: "Albania", code: "+355", flag: "🇦🇱" },
  { name: "Algeria", code: "+213", flag: "🇩🇿" },
];

export function SupportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter countries based on search term
  const filteredCountries = COUNTRIES.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.includes(searchTerm)
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setSearchTerm("");
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleCountrySelect = (country: typeof COUNTRIES[0]) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    setSearchTerm("");
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      // Prepare form data
      const data = {
        fullName: formData.get("fullName") as string,
        email: formData.get("email") as string,
        companyName: formData.get("companyName") as string || undefined,
        phoneNumber: formData.get("phoneNumber") as string || undefined,
        countryCode: formData.get("countryCode") as string || undefined,
        message: formData.get("message") as string,
      };

      // Send to API
      const response = await fetch("/api/contact/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="p-8 bg-green-50 rounded-lg text-center border border-green-200">
        <p className="text-green-800 font-medium text-base">
          Thank you for your inquiry! We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name Field */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-black mb-2"
        >
          Full name *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-base"
          placeholder="John Doe"
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-black mb-2"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-base"
          placeholder="john@company.com"
        />
      </div>

      {/* Company Name Field */}
      <div>
        <label
          htmlFor="companyName"
          className="block text-sm font-medium text-black mb-2"
        >
          Company name
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-base"
          placeholder="Your company name"
        />
      </div>

      {/* Phone Number Field */}
      <div>
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-black mb-2"
        >
          Phone number
        </label>
        <div className="flex gap-2">
          <div className="relative flex-shrink-0" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-base bg-white cursor-pointer min-w-[100px] hover:border-gray-400"
            >
              <span>{selectedCountry.code}</span>
              <svg
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-[300px] bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-[400px] flex flex-col">
                {/* Search Input */}
                <div className="p-3 border-b border-gray-200">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search countries..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-black focus:border-transparent"
                    autoFocus
                  />
                </div>

                {/* Country List */}
                <div className="overflow-y-auto max-h-[320px]">
                  {filteredCountries.length > 0 ? (
                    filteredCountries.map((country) => (
                      <button
                        key={`${country.code}-${country.name}`}
                        type="button"
                        onClick={() => handleCountrySelect(country)}
                        className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors flex items-center justify-between ${
                          selectedCountry.code === country.code && selectedCountry.name === country.name
                            ? "bg-gray-100"
                            : ""
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{country.flag}</span>
                          <span>{country.name}</span>
                        </span>
                        <span className="text-gray-600">{country.code}</span>
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-sm text-gray-500 text-center">
                      No countries found
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-base"
            placeholder="(XXX) XXX-XXXX"
          />
          <input type="hidden" name="countryCode" value={selectedCountry.code} />
        </div>
      </div>

      {/* How can we help Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-black mb-2"
        >
          How can we help? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent resize-none transition-all duration-200 text-base"
          placeholder="Please provide details about your request..."
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send inquiry"}
        </button>
      </div>
    </form>
  );
}
