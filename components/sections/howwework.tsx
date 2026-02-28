/**
 * components/sections/howwework.tsx
 *
 * PURPOSE: "How We Work" process section — 5 steps + communication guarantee.
 * WHY: Transparently shows founders the exact process, timelines, and payments.
 *
 * WIDTH: max-w-[90rem] with px-6 sm:px-12 lg:px-16 — matches Navbar, Hero, Footer.
 *
 * DESIGN:
 * - Row 1: Steps 01-03 (Free Audit → Kickoff → Build)
 * - Row 2: Steps 04-05 + Communication Guarantee
 * - Grid layout with dividers, equal card heights
 * - First column has no left padding to align with header
 * - Last column has no right padding to align with container edge
 * - Communication card uses real brand SVG icons (Slack, Gmail, Google Meet, WhatsApp)
 * - GSAP scroll-triggered entrance animations
 */

"use client";

import { useEffect, useRef } from "react";
import {
  Check,
  ArrowRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ── Brand SVG Icons ──

function SlackIcon({ className }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g clipPath="url(#slack-clip)">
        <path d="M5.39523 15.2103C5.39523 16.5898 4.28027 17.7048 2.90074 17.7048C1.52121 17.7048 0.40625 16.5898 0.40625 15.2103C0.40625 13.8307 1.52121 12.7158 2.90074 12.7158H5.39523V15.2103ZM6.64247 15.2103C6.64247 13.8307 7.75743 12.7158 9.13696 12.7158C10.5165 12.7158 11.6314 13.8307 11.6314 15.2103V21.4465C11.6314 22.826 10.5165 23.941 9.13696 23.941C7.75743 23.941 6.64247 22.826 6.64247 21.4465V15.2103Z" fill="#E01E5A"/>
        <path d="M9.13828 5.19452C7.75875 5.19452 6.64379 4.07956 6.64379 2.70004C6.64379 1.32051 7.75875 0.205547 9.13828 0.205547C10.5178 0.205547 11.6328 1.32051 11.6328 2.70004V5.19452H9.13828ZM9.13828 6.46067C10.5178 6.46067 11.6328 7.57563 11.6328 8.95515C11.6328 10.3347 10.5178 11.4496 9.13828 11.4496H2.88316C1.50363 11.4496 0.388672 10.3347 0.388672 8.95515C0.388672 7.57563 1.50363 6.46067 2.88316 6.46067H9.13828Z" fill="#36C5F0"/>
        <path d="M19.1347 8.95515C19.1347 7.57563 20.2496 6.46067 21.6291 6.46067C23.0087 6.46067 24.1236 7.57563 24.1236 8.95515C24.1236 10.3347 23.0087 11.4496 21.6291 11.4496H19.1347V8.95515ZM17.8874 8.95515C17.8874 10.3347 16.7725 11.4496 15.3929 11.4496C14.0134 11.4496 12.8984 10.3347 12.8984 8.95515V2.70004C12.8984 1.32051 14.0134 0.205547 15.3929 0.205547C16.7725 0.205547 17.8874 1.32051 17.8874 2.70004V8.95515Z" fill="#2EB67D"/>
        <path d="M15.3929 18.952C16.7725 18.952 17.8874 20.067 17.8874 21.4465C17.8874 22.826 16.7725 23.941 15.3929 23.941C14.0134 23.941 12.8984 22.826 12.8984 21.4465V18.952H15.3929ZM15.3929 17.7048C14.0134 17.7048 12.8984 16.5898 12.8984 15.2103C12.8984 13.8307 14.0134 12.7158 15.3929 12.7158H21.648C23.0276 12.7158 24.1425 13.8307 24.1425 15.2103C24.1425 16.5898 23.0276 17.7048 21.648 17.7048H15.3929Z" fill="#ECB22E"/>
      </g>
      <defs>
        <clipPath id="slack-clip">
          <rect width="24" height="24" fill="white" transform="translate(0.255859 0.0921631)"/>
        </clipPath>
      </defs>
    </svg>
  );
}

function GmailIcon({ className }: { className?: string }) {
  return (
    <svg width="26" height="20" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g clipPath="url(#gmail-clip)">
        <path d="M2.09569 24.0921H6.99003V12.2058L-0.00195312 6.96179V21.9946C-0.00195312 23.1535 0.936728 24.0922 2.09569 24.0922V24.0921Z" fill="#4285F4"/>
        <path d="M23.7754 24.0923H28.6698C29.8287 24.0923 30.7674 23.1537 30.7674 21.9948V6.96204L23.7754 12.206V24.0923Z" fill="#34A853"/>
        <path d="M23.7754 3.11628V12.2058L30.7674 6.96186V4.1651C30.7674 1.57282 27.8081 0.0922772 25.7331 1.64799L23.7754 3.11628Z" fill="#FBBC04"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M6.99219 12.206V3.11639L15.3825 9.4092L23.7728 3.11639V12.206L15.3825 18.4987L6.99219 12.206Z" fill="#EA4335"/>
        <path d="M-0.00195312 4.16504V6.9618L6.99003 12.2058V3.11622L5.03227 1.64793C2.95734 0.0922189 -0.00195312 1.57277 -0.00195312 4.16492V4.16504Z" fill="#C5221F"/>
      </g>
      <defs>
        <clipPath id="gmail-clip">
          <rect width="30.7646" height="24" fill="white" transform="translate(-0.00390625 0.0921631)"/>
        </clipPath>
      </defs>
    </svg>
  );
}

function GoogleMeetIcon({ className }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M13.4023 12.069L15.4818 14.4459L18.2781 16.2329L18.7657 12.0836L18.2781 8.02692L15.4282 9.59692L13.4023 12.069Z" fill="#188038"/>
      <path d="M1.33398 15.8478V19.3828C1.33398 20.191 1.98855 20.8455 2.7967 20.8455H6.33161L7.06297 18.1736L6.33161 15.8478L3.90593 15.1165L1.33398 15.8478Z" fill="#1967D2"/>
      <path d="M6.33161 3.29218L1.33398 8.28988L3.90593 9.02127L6.33161 8.28988L7.05078 5.99583L6.33161 3.29218Z" fill="#EA4335"/>
      <path d="M6.33161 8.28986H1.33398V15.8474H6.33161V8.28986Z" fill="#4285F4"/>
      <path d="M21.4692 5.40857L18.2756 8.02689V16.2329L21.4838 18.8634C21.9641 19.2388 22.6662 18.8963 22.6662 18.2856V5.97417C22.6662 5.35615 21.9483 5.01729 21.4692 5.40857ZM13.3999 12.0689V15.8477H6.33008V20.8454H16.8129C17.6211 20.8454 18.2756 20.1908 18.2756 19.3827V16.2329L13.3999 12.0689Z" fill="#34A853"/>
      <path d="M16.8129 3.29218H6.33008V8.28988H13.3999V12.0687L18.2756 8.02903V4.75492C18.2756 3.94676 17.621 3.29218 16.8129 3.29218Z" fill="#FBBC05"/>
    </svg>
  );
}

function LoomIcon({ className }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g clipPath="url(#loom-clip)">
        <path d="M24.0138 10.8362H16.6984L23.0336 7.18016L21.7772 5.00417L15.4413 8.66016L19.0982 2.32817L16.9217 1.07216L13.264 7.40256V0.0921631H10.7498V7.40336L7.09211 1.07216L4.91478 2.32817L8.57166 8.65856L2.23734 5.00417L0.980239 7.18016L7.31536 10.8362H0V13.3489H7.31456L0.980239 17.005L2.23654 19.1809L8.57246 15.525L4.91478 21.8569L7.09131 23.113L10.7498 16.7817V24.0922H13.264V16.6249L16.9889 23.073L19.0302 21.8954L15.3045 15.4458L21.7756 19.1801L23.0327 17.0042L16.6984 13.3481H24.013V10.8362H24.0138ZM12.0069 15.5081C11.5581 15.5082 11.1136 15.4199 10.699 15.2483C10.2844 15.0766 9.90752 14.8249 9.59015 14.5077C9.27278 14.1905 9.02096 13.8138 8.84917 13.3993C8.67737 12.9847 8.58895 12.5405 8.58887 12.0918C8.58879 11.6431 8.67713 11.1987 8.84885 10.7842C9.0206 10.3696 9.27224 9.99288 9.58961 9.6756C9.9069 9.35831 10.2836 9.10658 10.6983 8.9348C11.1129 8.76304 11.5573 8.67464 12.0061 8.67456C12.9124 8.67448 13.7818 9.03432 14.4228 9.67506C15.0639 10.3158 15.424 11.1848 15.4241 12.091C15.4242 12.9971 15.0643 13.8663 14.4234 14.5071C13.7825 15.148 12.9133 15.508 12.0069 15.5081Z" fill="#5753F3"/>
      </g>
      <defs>
        <clipPath id="loom-clip">
          <rect width="24" height="24" fill="white" transform="translate(0 0.0921631)"/>
        </clipPath>
      </defs>
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2773 21.0497 21.7438 19.0074C23.2103 16.9651 24.0001 14.5143 24 12C24 5.37 18.63 0 12 0Z" fill="#181717"/>
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g clipPath="url(#whatsapp-clip)">
        <path d="M7.08822 20.6472L7.47602 20.8411C9.09208 21.8107 10.9019 22.2632 12.7118 22.2632C18.4 22.2632 23.054 17.6092 23.054 11.921C23.054 9.20622 21.9551 6.55603 20.016 4.61685C18.0768 2.67767 15.4912 1.57886 12.7118 1.57886C7.02363 1.57886 2.36958 6.23282 2.43426 11.9857C2.43426 13.9248 3.01601 15.7994 3.98555 17.4152L4.24408 17.8031L3.20995 21.6168L7.08822 20.6472Z" fill="#00E676"/>
        <path d="M21.1149 3.58263C18.9171 1.32033 15.8791 0.0921631 12.7765 0.0921631C6.18343 0.0921631 0.883039 5.45714 0.947626 11.9856C0.947626 14.054 1.52937 16.0579 2.49901 17.8677L0.818359 24.0084L7.08829 22.3924C8.83353 23.3621 10.7726 23.8145 12.7119 23.8145C19.2404 23.8145 24.5407 18.4495 24.5407 11.9211C24.5407 8.75375 23.3125 5.78035 21.1149 3.58263ZM12.7765 21.8108C11.0312 21.8108 9.28601 21.3584 7.7993 20.4534L7.4115 20.2595L3.6625 21.229L4.63204 17.5447L4.37351 17.1568C1.52937 12.5675 2.88681 6.49136 7.54077 3.64722C12.1947 0.803175 18.2061 2.16061 21.0503 6.81457C23.8943 11.4685 22.5369 17.4799 17.883 20.3241C16.3962 21.2936 14.5864 21.8107 12.7765 21.8107V21.8108ZM18.4647 14.636L17.7537 14.3128C17.7537 14.3128 16.7195 13.8603 16.0731 13.5371C16.0084 13.5371 15.9438 13.4724 15.8791 13.4724C15.6852 13.4724 15.5559 13.5371 15.4267 13.6018C15.4267 13.6018 15.3621 13.6663 14.4571 14.7006C14.3924 14.8298 14.2632 14.8945 14.1339 14.8945H14.0692C14.0046 14.8945 13.8754 14.8298 13.8107 14.7652L13.4875 14.636C12.7765 14.3128 12.1301 13.9249 11.613 13.4078C11.4837 13.2785 11.2898 13.1493 11.1605 13.02C10.708 12.5675 10.2555 12.0504 9.93243 11.4686L9.86775 11.3394C9.80316 11.2747 9.80316 11.2101 9.73848 11.0808C9.73848 10.9516 9.73848 10.8223 9.80316 10.7576C9.80316 10.7576 10.0617 10.4344 10.2555 10.2405C10.3849 10.1112 10.4495 9.91734 10.5788 9.78807C10.708 9.59412 10.7727 9.33559 10.708 9.14165C10.6434 8.81843 9.86775 7.0732 9.6739 6.6854C9.54454 6.49145 9.41536 6.42687 9.22142 6.36219H8.51041C8.38105 6.36219 8.25187 6.42687 8.12251 6.42687L8.05783 6.49145C7.92857 6.55613 7.7993 6.6854 7.67004 6.74999C7.54077 6.87934 7.47609 7.00852 7.34682 7.13788C6.89434 7.71962 6.63581 8.43063 6.63581 9.14165C6.63581 9.65871 6.76508 10.1759 6.95902 10.6283L7.0237 10.8223C7.60545 12.0504 8.38105 13.1493 9.41536 14.1188L9.6739 14.3774C9.86775 14.5713 10.0617 14.7006 10.191 14.8944C11.5484 16.058 13.0997 16.8983 14.8449 17.3508C15.0389 17.4153 15.2974 17.4153 15.4913 17.48H16.1377C16.4609 17.48 16.8487 17.3508 17.1073 17.2215C17.3012 17.0922 17.4304 17.0922 17.5597 16.963L17.6891 16.8336C17.8183 16.7043 17.9476 16.6397 18.0769 16.5105C18.2061 16.3812 18.3354 16.2519 18.4001 16.1226C18.5293 15.8641 18.5939 15.5408 18.6586 15.2177V14.7652C18.6586 14.7652 18.5939 14.7006 18.4647 14.636Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="whatsapp-clip">
          <rect width="23.722" height="24" fill="white" transform="translate(0.818359 0.0921631)"/>
        </clipPath>
      </defs>
    </svg>
  );
}

// ── Data ──

const ROW_ONE_STEPS = [
  {
    step: "01",
    title: "Free Technical Audit",
    meta: "Timeline: 30 mins | Investment: $0",
    description:
      "Before you commit a single dollar, we audit your idea and give you a full technical plan.",
    features: [
      "Honest technical assessment",
      "Recommended tech stack & architecture",
      "Realistic timeline estimate",
      "Accurate budget range",
      "Risk analysis & mitigation plan",
      "Detailed PDF roadmap (yours to keep)",
    ],
    footer:
      "Even if you never hire us, you walk away with a technical roadmap worth $500. No strings attached",
    cta: "Book Free Audit →",
  },
  {
    step: "02",
    title: "Week 1 - Kickoff",
    meta: "Payment: 30% deposit",
    description:
      "Week 1 is not about code. It's about getting everything right before we write a single line.",
    features: [
      "Meet the entire team (video call)",
      "Set up dedicated Slack channel",
      "Break project into weekly milestones",
      "Review & approve wireframes",
      "Database schema design",
      "API endpoint planning",
      "Daily 15-min standups start",
    ],
    highlight:
      "DELIVERABLE: A signed-off project plan, timeline, and milestone schedule - before build begins.",
  },
  {
    step: "03",
    title: "Weeks 2-7 - Build",
    meta: "Payment: 40% at Week 4",
    description:
      "You see working software every single week. Not promises. Not updates. Actual features.",
    subsections: [
      {
        label: "EVERY DAY:",
        items: [
          "15-minute standup call",
          "Slack updates with screenshots",
          "Code pushed to GitHub",
        ],
      },
      {
        label: "EVERY FRIDAY:",
        items: [
          "Working demo on staging server",
          "5-minute Loom video walkthrough",
          "30-minute live demo call",
        ],
      },
    ],
  },
];

const COMMUNICATION_CHANNELS = [
  {
    icon: <SlackIcon />,
    name: "Slack",
    detail: "Direct access to devs. Responses within 2 hours.",
  },
  {
    icon: <GoogleMeetIcon />,
    name: "Video Calls",
    detail: "Weekly demos + Ad-hoc calls whenever needed.",
  },
  {
    icon: <LoomIcon />,
    name: "Loom",
    detail: "Weekly video walkthroughs of every feature built.",
  },
  {
    icon: <GitHubIcon />,
    name: "GitHub",
    detail: "Live code access. Every commit visible in real-time.",
  },
  {
    icon: <GmailIcon />,
    name: "Email",
    detail: "Same-day response guaranteed for all queries.",
  },
  {
    icon: <WhatsAppIcon />,
    name: "Emergency",
    detail: "Dedicated WhatsApp line. If your product is down, we pick up.",
    isUrgent: true,
  },
];

const ROW_TWO_STEPS = [
  {
    type: "step" as const,
    step: "04",
    title: "Week 8 - Launch",
    meta: "Payment: Final 30%",
    description:
      "You receive complete ownership of everything we built — code, data, credentials, documentation",
    features: [
      "Production deployment (live URL)",
      "Full GitHub repository transfer",
      "Complete technical documentation",
      "Video tutorials (how to maintain)",
      "All passwords & credentials",
      "Database backups & export",
      "Admin panel access",
    ],
    highlight:
      "ZERO LOCK-IN. ZERO DEPENDENCY. THE CODE IS YOURS FOREVER.",
  },
  {
    type: "step" as const,
    step: "05",
    title: "Next 30 Days - Support",
    meta: "Payment: $0 (Included)",
    description:
      "Your product just launched. We stay on for 30 days to make sure nothing breaks — at no extra cost.",
    features: [
      "Critical bugs fixed same day — guaranteed.",
      "Direct line to the engineers who built your product. Not a support ticket. Not a chatbot.",
    ],
    extraContent: (
      <div className="mt-6 pt-6 border-t border-dashed border-gray-200 mx-[-1rem] lg:mx-[-2.5rem] px-4 lg:px-10">
        <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
          After 30 Days, You Choose:
        </p>
        <ul className="space-y-3 text-sm text-gray-600">
          <li className="flex gap-2">
            <span className="font-semibold text-black">Option A:</span> Hire
            your own team.
          </li>
          <li className="flex gap-2">
            <span className="font-semibold text-black">Option B:</span>{" "}
            Continue with us.
          </li>
          <li className="flex gap-2">
            <span className="font-semibold text-black">Option C:</span>{" "}
            On-demand support.
          </li>
        </ul>
      </div>
    ),
  },
  {
    type: "communication" as const,
    title: "Communication Guarantee",
    meta: "Response Time: < 2 Hours",
    description:
      "You will never be left wondering what's happening with your product.",
  },
];

// ── Helper: Card padding — first col no left pad, last col no right pad ──
function cardPadding(idx: number, total: number) {
  if (idx === 0) return "py-8 lg:py-10 pr-4 lg:pr-10 pl-0";
  if (idx === total - 1) return "py-8 lg:py-10 pl-4 lg:pl-10 pr-0";
  return "py-8 lg:py-10 px-4 lg:px-10";
}

// ── Helper: Full-width divider margins — counteract card padding ──
function dividerMargin(idx: number, total: number) {
  if (idx === 0) return "mr-[-1rem] lg:mr-[-2.5rem] pr-4 lg:pr-10";
  if (idx === total - 1) return "ml-[-1rem] lg:ml-[-2.5rem] pl-4 lg:pl-10";
  return "mx-[-1rem] lg:mx-[-2.5rem] px-4 lg:px-10";
}

export function OurProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      // Row 1
      if (row1Ref.current) {
        const cards1 = row1Ref.current.children;
        gsap.fromTo(
          cards1,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row1Ref.current,
              start: "top 75%",
            },
          }
        );
      }

      // Row 2
      if (row2Ref.current) {
        const cards2 = row2Ref.current.children;
        gsap.fromTo(
          cards2,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            delay: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row2Ref.current,
              start: "top 80%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-white py-24 lg:py-32 overflow-hidden text-black font-sans relative"
    >
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">

        {/* ── Header ── */}
        <div ref={headerRef} className="mb-20 max-w-4xl">
          <div className="text-[11px] md:text-[12px] font-medium text-[#2563EB] flex items-center gap-2 uppercase mb-6">
            <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.05]">
            How We Work - From Idea to Launched Product — In 8 Weeks.
          </h2>
        </div>

        {/* ── Row 1: Steps 01-03 ── */}
        <div className="border-t border-b border-black/10">
          <div
            ref={row1Ref}
            className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-black/10"
          >
            {ROW_ONE_STEPS.map((item, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex flex-col h-full",
                  cardPadding(idx, ROW_ONE_STEPS.length)
                )}
              >
                {/* Step number + meta badge */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-6xl font-light text-gray-200/80 tracking-tighter leading-none">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest bg-gray-50 border border-black/5 px-3 py-1.5 rounded-md self-center">
                    {item.meta.split("|")[0].trim()}
                  </span>
                </div>

                {/* Title + meta */}
                <h3 className="text-2xl font-medium mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 font-medium mb-6 uppercase tracking-wider">
                  {item.meta}
                </p>

                {/* Description */}
                <p className="text-gray-600 mb-6 font-normal pl-4 border-l-2 border-black leading-relaxed">
                  {item.description}
                </p>

                {/* Features */}
                <div className="flex-grow space-y-3">
                  {item.features &&
                    item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600 leading-relaxed">
                          {feat}
                        </span>
                      </div>
                    ))}

                  {item.subsections &&
                    item.subsections.map((sub, sIdx) => (
                      <div key={sIdx} className="mb-4">
                        <p className="text-xs font-semibold text-black mb-2 uppercase tracking-wide">
                          {sub.label}
                        </p>
                        <ul className="space-y-2">
                          {sub.items.map((subItem, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Check className="w-3.5 h-3.5 text-gray-400 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-600">
                                {subItem}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>

                {/* Highlight */}
                {item.highlight && (
                  <div className={cn("mt-8 pt-6 border-t border-black/5", dividerMargin(idx, ROW_ONE_STEPS.length))}>
                    <p className="text-sm font-medium text-black">
                      {item.highlight}
                    </p>
                  </div>
                )}

                {/* Footer */}
                {item.footer && (
                  <div className={cn("mt-8 pt-6 border-t border-black/5", dividerMargin(idx, ROW_ONE_STEPS.length))}>
                    <p className="text-sm text-gray-400">{item.footer}</p>
                  </div>
                )}

                {/* CTA */}
                {item.cta && (
                  <div className="mt-8">
                    <a
                      href="https://cal.com/info-enlivo-yyhgqr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-base font-medium text-black border-b border-black hover:text-gray-500 hover:border-gray-500 transition-colors tracking-tight group"
                    >
                      {item.cta.replace("→", "")}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Row 2: Steps 04-05 + Communication ── */}
        <div className="border-b border-black/10">
          <div
            ref={row2Ref}
            className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-black/10"
          >
            {ROW_TWO_STEPS.map((item, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex flex-col h-full bg-white",
                  cardPadding(idx, ROW_TWO_STEPS.length)
                )}
              >
                {/* ── Standard Step Layout ── */}
                {item.type === "step" && (
                  <>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-6xl font-light text-gray-200/80 tracking-tighter leading-none">
                        {item.step}
                      </span>
                      <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest bg-gray-50 border border-black/5 px-3 py-1.5 rounded-md self-center">
                        {item.meta}
                      </span>
                    </div>

                    <h3 className="text-2xl font-medium mb-2 tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mb-6 pl-4 border-l-2 border-black leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex-grow space-y-3">
                      {item.features?.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 leading-relaxed">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>

                    {item.extraContent}

                    {item.highlight && (
                      <div className={cn("mt-8 pt-6 border-t border-black/5", dividerMargin(idx, ROW_TWO_STEPS.length))}>
                        <p className="text-sm font-semibold text-black uppercase tracking-wide">
                          {item.highlight}
                        </p>
                      </div>
                    )}
                  </>
                )}

                {/* ── Communication Card Layout ── */}
                {item.type === "communication" && (
                  <>
                    {/* Message icon — same height & spacing as step number area */}
                    <div className="flex justify-between items-start mb-6">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" className="text-gray-200/80">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                      </svg>
                      <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest bg-gray-50 border border-black/5 px-3 py-1.5 rounded-md self-center">
                        {item.meta}
                      </span>
                    </div>

                    <h3 className="text-2xl font-medium mb-2 tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mb-6 pl-4 border-l-2 border-black leading-relaxed">
                      {item.description}
                    </p>

                    {/* Channel list with brand icons — tight spacing */}
                    <div className="flex-grow">
                      {COMMUNICATION_CHANNELS.map((channel, cIdx) => (
                        <div
                          key={cIdx}
                          className={cn(
                            "flex items-center gap-3.5 py-3",
                            cIdx < COMMUNICATION_CHANNELS.length - 1
                              ? "border-b border-black/5"
                              : ""
                          )}
                        >
                          <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                            {channel.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span
                              className={cn(
                                "font-medium text-[13px]",
                                channel.isUrgent ? "text-black" : "text-black"
                              )}
                            >
                              {channel.name}
                            </span>
                            <span className="text-[13px] text-gray-600 block leading-snug">
                              {channel.detail}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
