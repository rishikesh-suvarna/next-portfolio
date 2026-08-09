# Rishikesh Suvarna — Portfolio

Personal portfolio site, built from the "Portfolio Site — Terminal Dark" mock in `design/project/`.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://typescriptlang.org) (strict)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Biome](https://biomejs.dev) — linting & formatting

## Editing content

Every string on the page lives in [`src/lib/content.ts`](src/lib/content.ts). Nothing is hardcoded in the components, so copy changes are a single-file edit.

Items still carrying mock data are marked `PLACEHOLDER` in that file:

- all four projects
- the 2022–2024 and 2020–2022 employers
- the email address (`contact.ctaHref` and the `email` entry in `contactLinks`)
- the CV link — create `public/` and drop a PDF in it, then point `cv.pdf` at it

## SEO and metadata

| File | Emits |
| --- | --- |
| `src/app/layout.tsx` | Title, description, keywords, canonical, robots, OpenGraph, Twitter card |
| `src/app/opengraph-image.tsx` | 1200x630 share card, generated with `next/og` |
| `src/app/icon.tsx`, `apple-icon.tsx` | Favicon and home-screen icon (the `rs` mark) |
| `src/components/PersonJsonLd.tsx` | Schema.org `Person` structured data |
| `src/app/robots.ts`, `sitemap.ts` | `/robots.txt` and `/sitemap.xml` |

Set the production origin so canonical and OG image URLs resolve absolutely:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

On Vercel this falls back to `VERCEL_PROJECT_PRODUCTION_URL` automatically, and to `http://localhost:3000` in development. See [`src/lib/site.ts`](src/lib/site.ts).

## Design tokens

Colors, fonts, and the caret animation are defined as a Tailwind v4 `@theme` block in [`src/app/globals.css`](src/app/globals.css). The accent (`--color-accent`) is the one value the mock exposed as configurable.

## Development

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Scripts

| Command          | Description             |
| ---------------- | ----------------------- |
| `bun run dev`    | Start dev server        |
| `bun run build`  | Production build        |
| `bun run start`  | Start production server |
| `bun run lint`   | Lint with Biome         |
| `bun run format` | Format with Biome       |
