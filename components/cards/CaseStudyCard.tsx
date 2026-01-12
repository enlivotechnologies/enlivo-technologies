/**
 * components/cards/CaseStudyCard.tsx
 *
 * PURPOSE: Card component for displaying case study summary.
 * WHY: Reusable on case studies index and homepage.
 */

import Link from "next/link";
import Image from "next/image";

interface CaseStudyCardProps {
  title: string;
  description: string;
  client: string;
  industry: string;
  href: string;
  image?: string;
}

export function CaseStudyCard({
  title,
  description,
  client,
  industry,
  href,
  image,
}: CaseStudyCardProps) {
  return (
    <Link href={href} className="block group">
      {/* Image */}
      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={600}
            height={338}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            {/* TODO: Add placeholder image */}
            Case Study
          </div>
        )}
      </div>

      {/* Content */}
      <span className="text-sm text-gray-500 mb-1 block">{industry}</span>
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      <p className="text-gray-500 text-sm">Client: {client}</p>
    </Link>
  );
}
