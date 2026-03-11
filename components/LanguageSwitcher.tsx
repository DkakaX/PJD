'use client';

import { usePathname } from 'next/navigation';
import { i18n, type Locale } from '@/i18n-config';
import Link from 'next/link';
import './LanguageSwitcher.css';

export default function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
  const pathname = usePathname();

  const redirectedPathName = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div className="lang-switcher">
      {i18n.locales.map((locale) => (
        <Link
          key={locale}
          href={redirectedPathName(locale)}
          className={`lang-btn ${locale === currentLang ? 'active' : ''}`}
        >
          {locale === 'en' ? 'EN' : '中'}
        </Link>
      ))}
    </div>
  );
}
