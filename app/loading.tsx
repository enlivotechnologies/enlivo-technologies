/**
 * app/loading.tsx
 *
 * PURPOSE: Global loading UI for page transitions.
 * WHY: Improves perceived performance during navigation.
 *
 * SEO NOTE: This is purely for UX, doesn't affect SEO.
 */

import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Spinner } from "@/components/ui/spinner"

export default function Loading() {
  return (
    <div className="w-full min-h-[50vh] flex items-center justify-center py-24">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Spinner className="!size-8 w-8 h-8" />
          </EmptyMedia>
          <EmptyTitle>Almost there…</EmptyTitle>
        </EmptyHeader>
      </Empty>
    </div>
  );
}
