# Next.js Assessment Task — "Lumen Books"


## Stack
Next.js 16 (App Router), React 19, TypeScript
Level
Intermediate → Advanced
Time
2
Styling
Tailwind CSS (or your choice — not graded)
Data
Local in-memory/JSON data module (no external API key needed). A real DB is a bonus, not a requirement.


## 1. The brief
Build Lumen Books, a small online bookstore with a seller dashboard. It is intentionally small in scope but must be built so that every major Next.js rendering and data pattern appears at least once, in the place where it actually makes sense.
You will provide your own data — a local module (e.g. lib/data.ts) that returns books, with async functions that simulate network latency (await new Promise(r => setTimeout(r, 500))). This keeps the focus on Next.js, not on integrating a third-party API. You may swap in a real database for bonus credit.
A "book" minimally has: id, slug, title, author, price, description, coverImageUrl, category, createdAt, ratingsCount.



## 2. Required routes & what each one must prove
You must implement the following routes. The point of each is not the feature itself — it's to force a specific Next.js concept. Pick the correct rendering mode for each and be ready to justify it.


## / — Home
Statically rendered, but with ISR: revalidate every 60 minutes (export const revalidate = 3600).
Shows featured / bestselling books.
Proves: Static Site Generation + Incremental Static Regeneration.



## /books — Catalog
Dynamically rendered on every request (SSR).
Reads searchParams (async in Next 16) for filtering by category and sorting by price / newest.
Data must be fresh per request — different query = different server-rendered HTML.
Proves: Server-Side Rendering driven by request-time input. (This is the headline SSR route — see §3.)


## /books/[slug] — Book detail
Dynamic route using generateStaticParams() to pre-render known books (SSG) with ISR fallback for new ones.
Implement generateMetadata() so each book has its own dynamic <title> and Open Graph tags.
Include a slow "Recommended for you" section fetched separately and wrapped in <Suspense> with a skeleton fallback, so the page streams.
Proves: dynamic routes, generateStaticParams, dynamic metadata, streaming + Suspense.


## /login — Mock authentication
A form submitted via a Server Action that validates a hardcoded credential and sets an httpOnly cookie (cookies().set(...)).
On success, redirect to /dashboard.
Proves: Server Actions, cookies(), server-side redirect.


## /dashboard — Seller dashboard (protected)
SSR, reading the auth cookie to render user-specific content. Must show this seller's listings.
Unauthenticated users never reach it (see Middleware below).
Proves: request-time SSR with cookies(), per-user dynamic rendering.
