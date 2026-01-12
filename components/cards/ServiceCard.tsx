/**
 * components/cards/ServiceCard.tsx
 *
 * PURPOSE: Card component for displaying service summary.
 * WHY: Reusable across services index and homepage.
 */

import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all group"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className="text-blue-600 text-sm font-medium">Learn more →</span>
    </Link>
  );
}
