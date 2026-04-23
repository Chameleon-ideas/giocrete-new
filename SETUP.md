# Astro Agency Template — Setup Guide

## Stack
- **Astro v6** (SSR, Vercel adapter)
- **Sanity v3** (embedded Studio at `/studio`)
- **GSAP + ScrollTrigger** (scroll animations, page transitions)
- **Framer Motion** (available for React island components)
- **Resend** (contact form email)
- **TypeScript**

---

## Per-Project Setup (5 steps)

### 1. Clone & install
```bash
cp -r astro-agency-template client-project-name
cd client-project-name
npm install
```

### 2. Create Sanity project
```bash
npx sanity init
# Choose "Create new project"
# Dataset: production
# Copy the projectId
```

### 3. Configure environment variables
```bash
cp .env.example .env
# Fill in:
#   PUBLIC_SANITY_PROJECT_ID=abc123
#   RESEND_API_KEY=re_xxxx
#   CONTACT_TO_EMAIL=client@example.com
#   CONTACT_FROM_EMAIL=noreply@clientdomain.com
```

### 4. Deploy to Vercel
```bash
vercel --prod
# Add the same env vars in Vercel dashboard → Settings → Environment Variables
```

### 5. Populate CMS
- Visit `https://yoursite.com/studio`
- Start with **Site Settings** — set site name, logo, accent color, contact info
- Fill **Home Page**, **About Page**, **Contact Page**
- Add **Services**, **Portfolio**, **Testimonials**, **FAQ**

---

## Customising per client

### Accent color
Set `siteSettings.accentColor` in Sanity. Injected as `--clr-accent` CSS variable automatically.

### Enable / disable pages
In **Site Settings → Features & Pages**:
- Blog (off by default)
- Portfolio
- Testimonials Page
- FAQ Page

Disabled pages are hidden from the nav and redirect to home.

### Multi-language (EN/FR)
In **Site Settings → Multi-Language**:
- Toggle `Enable Multi-Language` on
- A language switcher appears in the nav automatically
- Go into each content document and fill the French fields

French content appears at `yoursite.com?lang=fr`.
All text fields have both `en` and `fr` variants.

### Custom nav CTA button
In **Site Settings → Navigation** → "Nav CTA Button" — change label and destination.

---

## Pages & Routes

| Route | Source |
|---|---|
| `/` | `src/pages/index.astro` |
| `/about` | `src/pages/about.astro` |
| `/services` | `src/pages/services.astro` |
| `/services/[slug]` | `src/pages/services/[slug].astro` |
| `/portfolio` | `src/pages/portfolio.astro` |
| `/portfolio/[slug]` | `src/pages/portfolio/[slug].astro` |
| `/testimonials` | `src/pages/testimonials.astro` |
| `/faq` | `src/pages/faq.astro` |
| `/contact` | `src/pages/contact.astro` |
| `/blog` | `src/pages/blog.astro` |
| `/blog/[slug]` | `src/pages/blog/[slug].astro` |
| `/studio` | Sanity Studio (embedded) |
| `/api/contact` | Resend email endpoint |

---

## Animation classes (GSAP)

Add to any HTML element — GSAP picks them up automatically:

| Class | Effect |
|---|---|
| `.reveal-up` | Fade + slide up on scroll |
| `.reveal-left` | Fade + slide from left |
| `.reveal-right` | Fade + slide from right |
| `.reveal-fade` | Fade in only |
| `.stagger-children` | Stagger animate direct children |
| `.hero-title .line span` | Hero line clip reveal (auto) |
| `data-count="250" data-suffix="+"` | CountUp number on scroll |

Page transitions (Cavalry-style dual wipe) run automatically on internal link clicks.

---

## Sanity schemas at a glance

| Schema | Type | Purpose |
|---|---|---|
| `siteSettings` | Singleton | Logo, colors, nav, socials, feature toggles |
| `homePage` | Singleton | Hero, stats, about snippet, CTA banner |
| `aboutPage` | Singleton | Story, values, team toggle |
| `contactPage` | Singleton | Form labels, map embed |
| `service` | Collection | Service cards + detail pages |
| `portfolioItem` | Collection | Gallery grid + detail pages |
| `testimonial` | Collection | Client reviews |
| `faqItem` | Collection | FAQ accordion, grouped by category |
| `blogPost` | Collection | Blog (enable in siteSettings) |
| `teamMember` | Collection | Team bios (enable in aboutPage) |
| `localeString` | Helper | `{ en, fr }` text fields |
| `localeText` | Helper | `{ en, fr }` textarea fields |
| `localeBlock` | Helper | `{ en[], fr[] }` portable text |
