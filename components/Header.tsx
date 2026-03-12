import Link from 'next/link';
import './Header.css';
import { getDictionary } from '@/get-dictionary';
import type { Locale } from '@/i18n-config';
import LanguageSwitcher from './LanguageSwitcher';

export default async function Header({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);
  
  return (
    <header className="site-header glass-panel">
      <div className="container header-content">
        <Link href={`/${lang}`} className="brand-logo">
          <span className="text-gradient-primary">PJD</span> Electronics
        </Link>
        
        <div className="header-search">
          <input type="text" placeholder="Search by Part Number, Keyword..." className="search-input" />
          <button className="btn-search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        <nav className="desktop-nav">
          <Link href={`/${lang}/products`} className="nav-link">{dict.navigation.products}</Link>
          <Link href={`/${lang}/about`} className="nav-link">{dict.navigation.about}</Link>
          <Link href={`/${lang}/contact`} className="nav-link">{dict.navigation.contact}</Link>
        </nav>

        <div className="header-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <LanguageSwitcher currentLang={lang} />
          <Link href={`/${lang}/quote`} className="btn-primary">{dict.navigation.rfq}</Link>
        </div>
      </div>
    </header>
  );
}
