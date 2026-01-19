/**
 * lib/schema.ts
 * 
 * PURPOSE: JSON-LD structured data helpers for rich search results.
 * WHY: Structured data helps Google understand page content and can
 *      generate rich snippets (ratings, FAQs, breadcrumbs, etc.)
 * 
 * IMPORTANT: JSON-LD must be valid. Test with Google's Rich Results Test.
 */

import { SITE_CONFIG } from './constants';

/**
 * Base interface for all schema types
 */
interface BaseSchema {
  '@context': 'https://schema.org';
  '@type': string;
}

/**
 * Organization Schema
 * WHY: Appears in Knowledge Panel, establishes brand entity
 */
export interface OrganizationSchema extends BaseSchema {
  '@type': 'Organization';
  name: string;
  url: string;
  logo: string | {
    '@type': 'ImageObject';
    url: string;
    width?: number;
    height?: number;
  };
  description: string;
  foundingDate?: string;
  founders?: Array<{ '@type': 'Person'; name: string }>;
  address?: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    '@type': 'ContactPoint';
    telephone: string;
    contactType: string;
    email?: string;
    availableLanguage?: string[];
  };
  sameAs?: string[];
}

export function buildOrganizationSchema(
  overrides?: Partial<Omit<OrganizationSchema, '@context' | '@type'>>
): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    // Use ImageObject format for better Google recognition
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/images/navbar/EnlivotechnologiesLogo.png`,
      width: 500,
      height: 500,
    },
    description: SITE_CONFIG.description,
    // TODO: Add when business details are finalized
    // foundingDate: '2020',
    // address: { ... },
    // contactPoint: { ... },
    sameAs: [
      'https://www.linkedin.com/company/enlivo-global-tech-solutions-pvt-ltd/',
      'https://www.instagram.com/enlivo_globalsolutions_techpvt',
      // Add other social profiles as needed
    ],
    ...overrides,
  };
}

/**
 * Service Schema
 * WHY: Helps Google understand service offerings, can show in local results
 */
export interface ServiceSchema extends BaseSchema {
  '@type': 'Service';
  name: string;
  description: string;
  url: string;
  provider: {
    '@type': 'Organization';
    name: string;
    url: string;
  };
  serviceType?: string;
  areaServed?: string | string[];
  hasOfferCatalog?: {
    '@type': 'OfferCatalog';
    name: string;
    itemListElement: Array<{
      '@type': 'Offer';
      itemOffered: {
        '@type': 'Service';
        name: string;
        description: string;
      };
    }>;
  };
}

export function buildServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
  offerings?: Array<{ name: string; description: string }>;
}): ServiceSchema {
  const schema: ServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: `${SITE_CONFIG.url}/services/${service.slug}`,
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: 'Worldwide', // TODO: Adjust based on actual service area
  };

  if (service.offerings && service.offerings.length > 0) {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: `${service.name} Offerings`,
      itemListElement: service.offerings.map((offering) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: offering.name,
          description: offering.description,
        },
      })),
    };
  }

  return schema;
}

/**
 * Case Study / Article Schema
 * WHY: Can generate rich snippets with author, date, etc.
 */
export interface ArticleSchema extends BaseSchema {
  '@type': 'Article' | 'TechArticle' | 'NewsArticle';
  headline: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: {
    '@type': 'Organization' | 'Person';
    name: string;
    url?: string;
  };
  publisher: {
    '@type': 'Organization';
    name: string;
    logo: {
      '@type': 'ImageObject';
      url: string;
    };
  };
  mainEntityOfPage: {
    '@type': 'WebPage';
    '@id': string;
  };
}

export function buildArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
  authorName?: string;
  type?: 'Article' | 'TechArticle' | 'NewsArticle';
  basePath?: string;
}): ArticleSchema {
  const url = `${SITE_CONFIG.url}${article.basePath || '/case-studies'}/${article.slug}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': article.type || 'Article',
    headline: article.title,
    description: article.description,
    url,
    image: article.image.startsWith('http') 
      ? article.image 
      : `${SITE_CONFIG.url}${article.image}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      '@type': 'Organization',
      name: article.authorName || SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/images/navbar/EnlivotechnologiesLogo.png`,
        width: 500,
        height: 500,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

/**
 * Breadcrumb Schema
 * WHY: Shows breadcrumb trail in search results, improves CTR
 */
export interface BreadcrumbSchema extends BaseSchema {
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item?: string;
  }>;
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path?: string }>
): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.path && index < items.length - 1 
        ? { item: `${SITE_CONFIG.url}${item.path}` } 
        : {}),
    })),
  };
}

/**
 * FAQ Schema
 * WHY: Can generate FAQ rich snippets, takes up more SERP real estate
 */
export interface FAQSchema extends BaseSchema {
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
}

export function buildFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): FAQSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * WebSite Schema (for homepage)
 * WHY: Enables sitelinks searchbox in Google
 */
export interface WebSiteSchema extends BaseSchema {
  '@type': 'WebSite';
  name: string;
  url: string;
  description: string;
  potentialAction?: {
    '@type': 'SearchAction';
    target: {
      '@type': 'EntryPoint';
      urlTemplate: string;
    };
    'query-input': string;
  };
}

export function buildWebSiteSchema(): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    // TODO: Enable when site search is implemented
    // potentialAction: {
    //   '@type': 'SearchAction',
    //   target: {
    //     '@type': 'EntryPoint',
    //     urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
    //   },
    //   'query-input': 'required name=search_term_string',
    // },
  };
}

/**
 * Helper component to inject JSON-LD into page
 * Use in Server Components only
 */
export function JsonLd<T extends BaseSchema>({ data }: { data: T | T[] }) {
  const jsonLd = Array.isArray(data) ? data : [data];
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd.length === 1 ? jsonLd[0] : jsonLd),
      }}
    />
  );
}
