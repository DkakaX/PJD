import Link from 'next/link';
import Image from 'next/image';
import './home.css';
import { getDictionary } from '@/get-dictionary';
import type { Locale } from '@/i18n-config';

type Props = {
  params: Promise<{ lang: string }>
};

export default async function Home({ params }: Props) {
  const lang = (await params).lang as Locale;
  const dict = await getDictionary(lang);

  return (
    <main className="home-main">
      <section className="hero-section">
        <Image src="/images/hero-bg.png" alt="PCB Tech Background" fill style={{ objectFit: 'cover', zIndex: -1, opacity: 0.2 }} priority />
        <div className="container hero-content">
          <div className="hero-text animate-fade-in">
            <div className="badge">
              <span className="pulse-dot"></span> 
              {dict.home.badge}
            </div>
            <h1 className="hero-title">
              {dict.home.title_primary} <br />
              <span className="text-gradient-primary">{dict.home.title_highlight}</span>
            </h1>
            <p className="hero-description text-secondary">
              {dict.home.description}
            </p>
            <div className="hero-actions">
              <Link href={`/${lang}/products`} className="btn-primary">{dict.home.btn_catalog}</Link>
              <Link href={`/${lang}/quote`} className="btn-outline">{dict.home.btn_bom}</Link>
            </div>
          </div>
          
          <div className="hero-visual glass-panel animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="chip-visual">
               <div className="chip-core text-gradient-primary">IC</div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="container">
          <p className="trust-label text-secondary">{dict.home.trust}</p>
          <div className="brand-grid">
            <div className="brand-placeholder">Texas Instruments</div>
            <div className="brand-placeholder">Analog Devices</div>
            <div className="brand-placeholder">STMicroelectronics</div>
            <div className="brand-placeholder">Infineon</div>
            <div className="brand-placeholder">NXP</div>
          </div>
        </div>
      </section>
    </main>
  );
}
