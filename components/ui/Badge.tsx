/**
 * components/ui/Badge.tsx
 *
 * PURPOSE: Small label/badge component.
 * WHY: Used for categories, tags, status indicators.
 */

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        {
          "bg-gray-900 text-white": variant === "default",
          "bg-gray-100 text-gray-800": variant === "secondary",
          "border border-gray-300 text-gray-700": variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
