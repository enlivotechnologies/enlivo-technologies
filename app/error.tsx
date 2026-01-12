/**
 * app/error.tsx
 *
 * PURPOSE: Global error boundary.
 * WHY: Catches runtime errors and displays a user-friendly message.
 *
 * NOTE: This MUST be a Client Component to use error boundaries.
 * This is one of the few cases where "use client" is required.
 */

"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    // TODO: Integrate with error tracking (Sentry, etc.)
    console.error("Application error:", error);
  }, [error]);

  return (
    <Container className="py-24 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Something went wrong
      </h1>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        We apologize for the inconvenience. Please try again or contact support
        if the problem persists.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={reset}>Try Again</Button>
        <Button variant="outline" asChild>
          <Link href="/">Go to Homepage</Link>
        </Button>
      </div>

      {/* Error digest for debugging (visible in development) */}
      {process.env.NODE_ENV === "development" && error.digest && (
        <p className="mt-8 text-sm text-gray-400">Error ID: {error.digest}</p>
      )}
    </Container>
  );
}
