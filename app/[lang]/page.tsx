import Link from 'next/link'
import Image from 'next/image'
import './home.css'
import { getDictionary } from '@/get-dictionary'
import type { Locale } from '@/i18n-config'

type Props = {
  params: Promise<{ lang: string }>
};

export default async function Home({ params }: Props) {
  const lang = (await params).lang as Locale;
  const dict = await getDictionary(lang);

  const stats = [
    { value: '1M+', label: dict.home.stats_skus },
    { value: '10K+', label: dict.home.stats_customers },
    { value: '99.8%', label: dict.home.stats_delivery },
    { value: '< 24h', label: dict.home.stats_response },
  ];

  const features = [
    { icon: '🏭', title: dict.home.feature1_title, desc: dict.home.feature1_desc },
    { icon: '🔍', title: dict.home.feature2_title, desc: dict.home.feature2_desc },
    { icon: '⚡', title: dict.home.feature3_title, desc: dict.home.feature3_desc },
    { icon: '✅', title: dict.home.feature4_title, desc: dict.home.feature4_desc },
  ];

  const categories = [
    { icon: '💾', name: dict.home.cat1, desc: dict.home.cat1_desc, href: `/${lang}/products` },
    { icon: '🔋', name: dict.home.cat2, desc: dict.home.cat2_desc, href: `/${lang}/products` },
    { icon: '🔌', name: dict.home.cat3, desc: dict.home.cat3_desc, href: `/${lang}/products` },
    { icon: '📡', name: dict.home.cat4, desc: dict.home.cat4_desc, href: `/${lang}/products` },
  ];

  return (
    <main className="home-main">
      {/* Hero Section */}
      <section className="hero-section">
        <Image src="/images/hero-bg.png" alt="PCB Tech Background" fill style={{ objectFit: 'cover', zIndex: -1, opacity: 0.2 }} priority />
        <div className="container hero-content">
          <div className="hero-text animate-fade-in">
            <div className="badge">
              <span className="pulse-dot"></span>
              {dict.home.badge}
            </div>
            <h1 className="hero-title">
              {dict.home.title_primary}<br />
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

          {/* Hero Right: Stats Cards */}
          <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="hero-stats-grid">
              {stats.map((s) => (
                <div key={s.label} className="hero-stat-card glass-panel">
                  <div className="hero-stat-value text-gradient-primary">{s.value}</div>
                  <div className="hero-stat-label text-secondary">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Brand Section */}
      <section className="trust-section">
        <div className="container">
          <p className="trust-label text-secondary">{dict.home.trust}</p>
          <div className="brand-grid">
            {['Texas Instruments', 'Analog Devices', 'STMicroelectronics', 'Infineon', 'NXP'].map((b) => (
              <div key={b} className="brand-placeholder">{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-heading text-gradient-primary">{dict.home.features_heading}</h2>
          <div className="features-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card glass-panel">
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc text-secondary">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-heading text-gradient-primary">{dict.home.categories_heading}</h2>
          <div className="categories-grid">
            {categories.map((c) => (
              <Link key={c.name} href={c.href} className="category-card glass-panel">
                <div className="category-icon">{c.icon}</div>
                <h3 className="category-name">{c.name}</h3>
                <p className="category-desc text-secondary">{c.desc}</p>
                <span className="category-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
        }
