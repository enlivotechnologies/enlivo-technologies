/**
 * app/loading.tsx
 *
 * PURPOSE: Global loading UI for page transitions.
 * WHY: Improves perceived performance during navigation.
 *
 * SEO NOTE: This is purely for UX, doesn't affect SEO.
 */

import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <Container className="py-24 flex items-center justify-center min-h-[50vh]">
      <div className="flex flex-col items-center gap-4">
        {/* Simple loading spinner */}
        <div className="w-8 h-8 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin" />
        <p className="text-gray-500 text-sm">Loading...</p>
      </div>
    </Container>
  );
}
