<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Learned User Preferences

- Sections should be full-viewport-height with CSS scroll-snap (snap-mandatory + `scroll-snap-stop: always`) between them
- Minimal section padding preferred — no top or bottom padding on major page sections
- Nav links should route to separate pages, not scroll-to-section anchors
- Visual-only placeholders preferred during initial build; no backend wiring until explicitly requested
- Use `snap-section` custom CSS class for full-height snapping sections (defined in globals.css)
- Images should have glassmorphic border treatment: `rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md`
- Carousel/hero animations should move text+image as a unified parent, not separately
- Responsive animation direction: swipe-up on desktop, swipe-right on mobile (below `sm` breakpoint)
- Prefers extracting repeated UI patterns into small, reusable components
- Mouse-tracking tilt should use window-level `mousemove`, not container-scoped
- Overflowing elements should clip at viewport/screen edge, not at parent container boundary
- Prefer server actions over API route handlers for form mutations; keep route handlers only for external/admin endpoints
- Footer should be a separate snap section with `snap-end` alignment, not merged into the CTA section

## Learned Workspace Facts

- Project is "ConMan" — a lightweight UI for managing multiple AI coding CLIs
- Stack: Next.js 16 + Tailwind CSS v4 + Motion (framer-motion successor) + Drizzle ORM
- Tailwind v4 gradient syntax: use `bg-linear-to-b` not `bg-gradient-to-b`
- Fonts: Bebas Neue (`font-heading`) for headings, Josefin Sans (`font-sans`) for body text
- Dark theme using oklch color tokens; purple primary accent scale (`--primary-500` to `--primary-900`)
- `--gold` CSS variable used for the Gated Beta badge accent
- Uses `@/` path alias for imports
- Page layout: sticky Navbar in layout.tsx, sections scroll-snap in page.tsx `<main>`, fixed GatedBetaBadge
- Carousel images stored in `/public/assets/carouselImages/`; per-slide images (screen1–4.png) + CTA image (cta.png)
- `TiltImage` component provides glassmorphic frame + mouse-tracking 3D tilt (`src/components/tilt-image.tsx`)
- `CtaImage` component (`src/components/cta-image.tsx`) — CTA image with window-level mouse-tracking 3D tilt
- `DownloadForm` component (`src/components/download-form.tsx`) — extracted download card with email input
- `useMediaQuery` hook at `src/hooks/use-media-query.ts` using `useSyncExternalStore`
- CTA section layout: form left (40%), image absolute-positioned overflowing right, clipped at viewport via `overflow-x-hidden` on `<main>`
- Supabase PostgreSQL backend; Drizzle ORM tables: `beta_users` (email-gated beta) + `config` (key/value settings)
- `registerBetaUser` server action in `src/app/actions.ts` — email gate with slot limits and waitlist
- API routes: `GET /api/releases` (cached GitHub proxy), `POST /api/notify-waitlist` (admin Bearer-token protected)
- GitHub release fetching via `src/lib/github.ts` with 10-minute in-memory TTL cache
- `detectPlatform()` utility at `src/lib/platform.ts` — OS detection via `navigator.userAgent`
- `Footer` component (`src/components/footer.tsx`) — 4-column grid: brand, product links, resources, legal
- Privacy Policy at `src/app/privacy/page.tsx`, Terms of Service at `src/app/terms/page.tsx`
- GitHub repo: `fuck-eer/conman-releases` (used for releases API and issue links)
- `useSyncExternalStore` snapshots must return a cached/stable reference to avoid infinite re-render loops
- Google Fonts may fail during build due to network; this is environmental, not a code error
