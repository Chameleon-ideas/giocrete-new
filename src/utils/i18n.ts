// ── i18n helper ───────────────────────────────────────────────────────────────
// Usage:
//   import { t, getLang } from '@/utils/i18n';
//   const lang = getLang(Astro.url);
//   t(page.heroHeadline, lang)   → returns 'en' or 'fr' value

export type Locale = 'en' | 'fr';

export type LocaleString = { en?: string; fr?: string } | null | undefined;

/**
 * Read ?lang= query param, falling back to 'en'.
 * Works in both Astro page scripts (pass `Astro.url`) and client-side (pass window.location).
 */
export function getLang(url: URL | string): Locale {
  const u = typeof url === 'string' ? new URL(url) : url;
  const param = u.searchParams.get('lang');
  if (param === 'fr') return 'fr';
  return 'en';
}

/**
 * Resolve a localized string field.
 * Falls back to English if the target locale has no content.
 */
export function t(field: LocaleString, locale: Locale = 'en'): string {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[locale] || field.en || '';
}

/** Same as t() but returns null instead of '' when empty — useful for conditional rendering. */
export function tn(field: LocaleString, locale: Locale = 'en'): string | null {
  const val = t(field, locale);
  return val || null;
}
