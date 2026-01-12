/**
 * components/sections/Stats.tsx
 *
 * PURPOSE: Statistics/numbers section for social proof.
 * WHY: Quantifiable achievements build trust.
 */

import { Container } from "@/components/ui/Container";
import { COMPANY_STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {COMPANY_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
