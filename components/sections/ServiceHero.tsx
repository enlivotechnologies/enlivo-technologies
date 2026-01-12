/**
 * components/sections/ServiceHero.tsx
 *
 * PURPOSE: Hero section for service pages.
 * WHY: Service pages need their own hero with specific H1.
 */

import { Container } from "@/components/ui/Container";

interface ServiceHeroProps {
  heading: string;
  subheading?: string;
  description?: string;
}

export function ServiceHero({
  heading,
  subheading,
  description,
}: ServiceHeroProps) {
  return (
    <section className="bg-gray-900 text-white py-16 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          {subheading && (
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
              {subheading}
            </p>
          )}
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{heading}</h1>
          {description && (
            <p className="text-xl text-gray-300">{description}</p>
          )}
        </div>
      </Container>
    </section>
  );
}
