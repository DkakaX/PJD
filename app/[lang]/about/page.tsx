import { getDictionary } from '@/get-dictionary'
import type { Locale } from '@/i18n-config'

type Props = { params: Promise<{ lang: string }> }

export default async function AboutPage({ params }: Props) {
  const lang = (await params).lang as Locale
  const dict = await getDictionary(lang)
  const a = dict.about

  const stats = [
    { value: a.stat1_value, label: a.stat1_label },
    { value: a.stat2_value, label: a.stat2_label },
    { value: a.stat3_value, label: a.stat3_label },
    { value: a.stat4_value, label: a.stat4_label },
  ]

  const qualities = [
    { icon: '🔬', title: a.q1_title, desc: a.q1_desc },
    { icon: '🛡️', title: a.q2_title, desc: a.q2_desc },
    { icon: '📋', title: a.q3_title, desc: a.q3_desc },
    { icon: '✅', title: a.q4_title, desc: a.q4_desc },
  ]

  return (
    <main className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="text-gradient-primary" style={{ fontSize: '3rem', marginBottom: '1rem' }}>{a.title}</h1>
        <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>{a.subtitle}</p>
      </div>

      {/* Mission + Stats */}
      <div className="glass-panel" style={{ padding: '3rem', marginBottom: '4rem', borderRadius: 'var(--radius-lg)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--accent)' }}>{a.mission_title}</h2>
            <p className="text-secondary" style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>{a.mission_p1}</p>
            <p className="text-secondary" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>{a.mission_p2}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.4rem' }}>{s.value}</div>
                <div className="text-secondary" style={{ fontSize: '0.85rem', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality Control */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 className="text-gradient-primary" style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '0.75rem' }}>{a.quality_title}</h2>
        <p className="text-secondary" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>{a.quality_subtitle}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }}>
          {qualities.map((q) => (
            <div key={q.title} className="glass-panel" style={{ padding: '2rem 1.5rem', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{q.icon}</div>
              <h3 style={{ fontWeight: 700, marginBottom: '0.75rem' }}>{q.title}</h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem', lineHeight: '1.65' }}>{q.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        {[a.cert_iso, a.cert_rohs, a.cert_reach].map((c) => (
          <span key={c} style={{ padding: '0.5rem 1.5rem', border: '1px solid var(--accent)', borderRadius: 'var(--radius-full)', color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 600 }}>{c}</span>
        ))}
      </div>
    </main>
  )
}
