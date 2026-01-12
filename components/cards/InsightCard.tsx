/**
 * components/cards/InsightCard.tsx
 *
 * PURPOSE: Card component for displaying insight/article summary.
 * WHY: Reusable on insights index and homepage.
 */

import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

interface InsightCardProps {
  title: string;
  description: string;
  category: string;
  href: string;
  image?: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
  };
}

export function InsightCard({
  title,
  description,
  category,
  href,
  image,
  publishedAt,
  author,
}: InsightCardProps) {
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
            Insight
          </div>
        )}
      </div>

      {/* Content */}
      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded mb-2">
        {category}
      </span>
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

      {/* Meta */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>{author.name}</span>
        <span>•</span>
        <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
      </div>
    </Link>
  );
}
