import { ui, defaultLang, categoryTranslations } from './ui';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const base = import.meta.env.BASE_URL;
  let pathname = url.pathname;
  if (pathname.startsWith(base)) {
    pathname = pathname.slice(base.length);
  }
  if (pathname.startsWith('en/') || pathname === 'en') {
    return 'en';
  }
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)[key] || (ui[defaultLang] as Record<string, string>)[key] || key;
  };
}

export function getHomeHref(lang: Lang): string {
  const base = import.meta.env.BASE_URL;
  return lang === 'en' ? `${base}en/` : base;
}

export function getCategoryName(slug: string, lang: Lang): string {
  if (lang === 'en' && categoryTranslations[slug]) {
    return categoryTranslations[slug].name;
  }
  return '';
}

export function getCategoryDescription(slug: string, lang: Lang): string {
  if (lang === 'en' && categoryTranslations[slug]) {
    return categoryTranslations[slug].description;
  }
  return '';
}

export function getCategoryReplaces(slug: string, lang: Lang): string {
  if (lang === 'en' && categoryTranslations[slug]) {
    return categoryTranslations[slug].replaces;
  }
  return '';
}

// Maps German path segments to English
const deToEn: Record<string, string> = {
  'kategorien': 'categories',
  'vergleich': 'comparison',
  'selbst-hosten': 'self-hosting',
  'ueber-uns': 'about',
  'mitmachen': 'contribute',
  'impressum': 'legal-notice',
  'datenschutz': 'privacy',
  'lizenzuebersicht': 'license-overview',
  'kategorie': 'category',
};

// Reverse mapping: English path segments to German
const enToDe: Record<string, string> = {};
for (const [de, en] of Object.entries(deToEn)) {
  enToDe[en] = de;
}

export function getLocalizedPath(url: URL, targetLang: Lang): string {
  const base = import.meta.env.BASE_URL;
  let pathname = url.pathname;

  if (pathname.startsWith(base)) {
    pathname = pathname.slice(base.length);
  }

  // Remove trailing slash for processing
  if (pathname.endsWith('/') && pathname.length > 1) {
    pathname = pathname.slice(0, -1);
  }

  const currentLang = getLangFromUrl(url);
  if (currentLang === targetLang) return url.pathname;

  if (currentLang === 'de' && targetLang === 'en') {
    const segments = pathname.split('/').filter(Boolean);
    const translatedSegments = segments.map(seg => deToEn[seg] || seg);
    const path = translatedSegments.length > 0 ? translatedSegments.join('/') + '/' : '';
    return `${base}en/${path}`;
  }

  if (currentLang === 'en' && targetLang === 'de') {
    let segments = pathname.split('/').filter(Boolean);
    if (segments[0] === 'en') segments = segments.slice(1);
    const translatedSegments = segments.map(seg => enToDe[seg] || seg);
    const path = translatedSegments.length > 0 ? translatedSegments.join('/') + '/' : '';
    return `${base}${path}`;
  }

  return url.pathname;
}
