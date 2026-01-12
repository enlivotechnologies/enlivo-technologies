# website-v2

Production-ready, enterprise-grade Next.js website with SEO as the top priority.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── (marketing)/       # Marketing pages (route group)
│   │   ├── services/      # Service pages
│   │   ├── case-studies/  # Case study pages
│   │   ├── insights/      # Blog/insights pages
│   │   ├── company/       # Company pages (about, careers)
│   │   └── contact/       # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
│
├── components/            # React components
│   ├── layout/           # Header, Footer
│   ├── sections/         # Page sections (Hero, CTA, etc.)
│   ├── cards/            # Card components
│   └── ui/               # UI primitives (Button, Container)
│
├── lib/                   # Utilities and helpers
│   ├── seo.ts            # Metadata builder
│   ├── schema.ts         # JSON-LD schema helpers
│   ├── constants.ts      # Site configuration
│   ├── cms.ts            # CMS client
│   ├── utils.ts          # General utilities
│   └── analytics.ts      # Analytics tracking
│
├── seo/                   # Centralized SEO content
│   ├── home.ts           # Homepage SEO
│   ├── services.ts       # Services SEO
│   ├── company.ts        # Company pages SEO
│   ├── contact.ts        # Contact page SEO
│   └── schemas/          # JSON-LD schema configs
│
├── content/              # MDX content (when needed)
│   ├── services/
│   ├── case-studies/
│   └── insights/
│
├── public/               # Static assets
│   ├── images/
│   │   ├── og/          # OpenGraph images
│   │   ├── hero/
│   │   └── ...
│   └── icons/
│
├── styles/               # Global styles
│   └── globals.css
│
└── middleware.ts         # Security headers & redirects
```

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Copy environment variables:

   ```bash
   cp .env.example .env.local
   ```

3. Update `.env.local` with your values

4. Run development server:

   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## SEO Features

### Metadata Management

- Centralized metadata builder in `lib/seo.ts`
- Page-specific SEO content in `seo/` directory
- Automatic canonical URL handling
- OpenGraph and Twitter card support

### Structured Data (JSON-LD)

- Organization schema
- Service schemas
- Article/Case Study schemas
- Breadcrumb schemas
- FAQ schemas

### Technical SEO

- Dynamic sitemap generation (`/sitemap.xml`)
- Robots.txt configuration (`/robots.txt`)
- Security headers via middleware
- Canonical URL enforcement
- Trailing slash removal

## Development Guidelines

### Server Components by Default

- All components are Server Components unless marked with `"use client"`
- Only use client components when absolutely necessary (forms, interactivity)

### SEO Content Management

- **Never hardcode SEO content in UI components**
- All SEO content lives in `seo/` directory
- Use `buildMetadata()` for page metadata
- Use `JsonLd` component for structured data

### Adding New Pages

1. Create page in appropriate route folder
2. Add SEO configuration in `seo/` directory
3. Use `buildMetadata()` for metadata export
4. Add JSON-LD structured data as needed
5. Update sitemap if needed (dynamic pages are auto-included)

## TODO Before Launch

### Critical

- [ ] Update `SITE_CONFIG` in `lib/constants.ts` with actual company details
- [ ] Set `NEXT_PUBLIC_SITE_URL` in production environment
- [ ] Add actual company logo
- [ ] Update all placeholder content
- [ ] Create OG images for each page

### SEO

- [ ] Conduct keyword research
- [ ] Update page titles and descriptions
- [ ] Add Google Search Console verification
- [ ] Submit sitemap to search engines
- [ ] Set up Google Analytics

### Content

- [ ] Add actual case studies
- [ ] Add insight/blog articles
- [ ] Complete service page content
- [ ] Add team member information
- [ ] Add job listings

### Technical

- [ ] Integrate CMS (Sanity/Contentful)
- [ ] Set up contact form API route
- [ ] Configure error tracking (Sentry)
- [ ] Performance optimization review
- [ ] Accessibility audit

## Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## Architecture Decisions

### Why App Router?

- Server Components for better SEO (content rendered on server)
- Built-in metadata API
- Streaming and Suspense support
- Better caching strategies

### Why Centralized SEO?

- Prevents inconsistent metadata across pages
- Easy to audit and update
- Marketing team can update without touching UI code
- Scales to 100+ pages without refactor

### Why JSON-LD for Structured Data?

- Recommended by Google
- Doesn't clutter HTML
- Easy to maintain and validate
- Supports all schema types

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
