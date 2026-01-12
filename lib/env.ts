/**
 * lib/env.ts
 *
 * PURPOSE: Environment variable validation and typing.
 * WHY: Catches missing env vars at build time, provides type safety.
 */

/**
 * Server-side environment variables
 * These are only available on the server
 */
export const serverEnv = {
  // CMS
  CMS_API_URL: process.env.CMS_API_URL,
  CMS_API_TOKEN: process.env.CMS_API_TOKEN,

  // Email (for contact form)
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASS: process.env.SMTP_PASS,

  // Analytics (server-side)
  GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
} as const;

/**
 * Client-side environment variables
 * Must be prefixed with NEXT_PUBLIC_
 */
export const clientEnv = {
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
} as const;

/**
 * Validates required environment variables
 * Call this in your app initialization
 */
export function validateEnv(): void {
  const required: string[] = [
    // TODO: Add required env vars for production
    // 'NEXT_PUBLIC_SITE_URL',
  ];

  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables:\n${missing.join("\n")}`
    );
  }
}

/**
 * Type-safe environment variable getter
 */
export function getEnv(key: string, fallback?: string): string {
  const value = process.env[key];

  if (!value && fallback === undefined) {
    throw new Error(`Environment variable ${key} is not set`);
  }

  return value || fallback || "";
}
