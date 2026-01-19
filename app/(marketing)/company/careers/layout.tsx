/**
 * app/(marketing)/company/careers/layout.tsx
 *
 * PURPOSE: Custom layout for careers pages.
 * WHY: Careers pages use ConditionalNavbar which already handles
 *      showing CareersNavbar, so this layout just wraps content.
 */

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
