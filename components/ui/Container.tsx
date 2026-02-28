/**
 * components/ui/Container.tsx
 *
 * PURPOSE: Consistent content container across all pages.
 * WHY: Ensures consistent max-width and padding.
 */

import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto max-w-[90rem] px-6 sm:px-12 lg:px-16", className)}
    >
      {children}
    </Component>
  );
}
