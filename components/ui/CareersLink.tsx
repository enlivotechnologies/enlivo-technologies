/**
 * components/ui/CareersLink.tsx
 *
 * PURPOSE: Client component for careers link that adapts to environment
 * WHY: Careers URL needs to be dynamic (localhost vs production)
 */

"use client";

import Link from "next/link";
import { getCareersUrl } from "@/lib/constants";

interface CareersLinkProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function CareersLink({ children, className, ...props }: CareersLinkProps) {
  const careersUrl = getCareersUrl();
  const isExternal = careersUrl.startsWith('http');

  if (isExternal) {
    return (
      <a
        href={careersUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={careersUrl} className={className} {...props}>
      {children}
    </Link>
  );
}
