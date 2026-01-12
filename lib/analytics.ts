/**
 * lib/analytics.ts
 *
 * PURPOSE: Analytics abstraction layer for tracking.
 * WHY: Centralizes tracking logic, easy to switch providers,
 *      keeps components clean of tracking code.
 *
 * SEO NOTE: Page speed matters for SEO. Only load analytics
 *           scripts after initial page load (defer/async).
 */

/**
 * Analytics event types
 */
export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, string | number | boolean>;
}

/**
 * Page view tracking
 * @param url - Page URL
 * @param title - Page title
 */
export function trackPageView(url: string, title: string): void {
  // Google Analytics 4
  if (typeof window !== "undefined" && "gtag" in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
      "event",
      "page_view",
      {
        page_path: url,
        page_title: title,
      }
    );
  }

  // TODO: Add other analytics providers (Plausible, Mixpanel, etc.)
  // if (window.plausible) {
  //   window.plausible('pageview');
  // }
}

/**
 * Custom event tracking
 * @param event - Event name and properties
 */
export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window !== "undefined" && "gtag" in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
      "event",
      event.name,
      event.properties
    );
  }

  // TODO: Add other analytics providers
}

/**
 * Predefined events for consistency
 */
export const ANALYTICS_EVENTS = {
  // Navigation
  NAV_CLICK: "nav_click",
  CTA_CLICK: "cta_click",

  // Form interactions
  FORM_START: "form_start",
  FORM_SUBMIT: "form_submit",
  FORM_ERROR: "form_error",

  // Content engagement
  CASE_STUDY_VIEW: "case_study_view",
  INSIGHT_VIEW: "insight_view",
  SERVICE_VIEW: "service_view",

  // Conversions
  CONTACT_FORM_SUBMIT: "contact_form_submit",
  DEMO_REQUEST: "demo_request",
  NEWSLETTER_SIGNUP: "newsletter_signup",

  // Downloads
  DOWNLOAD_RESOURCE: "download_resource",
} as const;

/**
 * Track CTA click
 */
export function trackCTAClick(ctaLabel: string, location: string): void {
  trackEvent({
    name: ANALYTICS_EVENTS.CTA_CLICK,
    properties: {
      cta_label: ctaLabel,
      location,
    },
  });
}

/**
 * Track form submission
 */
export function trackFormSubmit(formName: string, success: boolean): void {
  trackEvent({
    name: success ? ANALYTICS_EVENTS.FORM_SUBMIT : ANALYTICS_EVENTS.FORM_ERROR,
    properties: {
      form_name: formName,
      success,
    },
  });
}

/**
 * Track content view
 */
export function trackContentView(
  contentType: "case_study" | "insight" | "service",
  contentId: string,
  contentTitle: string
): void {
  const eventName = {
    case_study: ANALYTICS_EVENTS.CASE_STUDY_VIEW,
    insight: ANALYTICS_EVENTS.INSIGHT_VIEW,
    service: ANALYTICS_EVENTS.SERVICE_VIEW,
  }[contentType];

  trackEvent({
    name: eventName,
    properties: {
      content_id: contentId,
      content_title: contentTitle,
    },
  });
}
