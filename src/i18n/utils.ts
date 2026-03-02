import en from './en.json';
import hu from './hu.json';

export type Locale = 'en' | 'hu';
export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'hu'];

const translations: Record<Locale, typeof en> = { en, hu };

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: unknown = translations[locale];
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }
  return typeof value === 'string' ? value : key;
}

export function tArray(locale: Locale, key: string): string[] {
  const keys = key.split('.');
  let value: unknown = translations[locale];
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return [];
    }
  }
  return Array.isArray(value) ? (value as string[]) : [];
}

export function getLocaleFromUrl(url: URL): Locale {
  const segments = url.pathname.replace(/^\/wrap/, '').split('/').filter(Boolean);
  if (segments[0] && locales.includes(segments[0] as Locale)) {
    return segments[0] as Locale;
  }
  return defaultLocale;
}

export function localePath(locale: Locale, path: string): string {
  const base = '/wrap';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) {
    return `${base}${cleanPath}`;
  }
  return `${base}/${locale}${cleanPath}`;
}

export function switchLocalePath(currentUrl: URL, targetLocale: Locale): string {
  const base = '/wrap';
  const pathname = currentUrl.pathname.replace(/^\/wrap/, '');
  const segments = pathname.split('/').filter(Boolean);

  if (locales.includes(segments[0] as Locale)) {
    segments.shift();
  }

  const newPath = segments.length > 0 ? `/${segments.join('/')}` : '/';

  if (targetLocale === defaultLocale) {
    return `${base}${newPath}`;
  }
  return `${base}/${targetLocale}${newPath}`;
}
