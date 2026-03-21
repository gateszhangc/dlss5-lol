# DLSS 5 Report

SEO-focused Next.js 16 + shadcn site for the keyword cluster around `DLSS 5`, including release timing, supported games, FAQs, and comparison pages.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Environment

Local and production analytics/runtime values are read from ignored env files:

- `.env.development`
- `.env.production`

Expected keys:

```bash
NEXT_PUBLIC_WEB_URL=
NEXT_PUBLIC_PROJECT_NAME=
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=
NEXT_PUBLIC_CLARITY_PROJECT_ID=
```

## Production Build

```bash
npm run build
npm run start
```

The project is configured with `output: "standalone"` and includes a production `Dockerfile` for Dokploy deployment.

## SEO Surface

- Route-level metadata and canonical URLs
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest`
- JSON-LD for `WebSite`, `Organization`, `FAQPage`, and `TechArticle`
- Dynamic Open Graph image plus generated app icons
- Optional Google Analytics 4 and Microsoft Clarity hooks

## Deployment

This repo is prepared for Dokploy + custom domain deployment to `https://dlss5.lol`.

Typical flow:

```bash
npm run build
docker build -t dlss5-lol .
```

Analytics IDs must be present at build time to be included in the production bundle.
