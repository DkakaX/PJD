import { getDictionary } from '@/get-dictionary'
import type { Locale } from '@/i18n-config'

type Props = { params: Promise<{ lang: string }> }

export default async function ContactPage({ params }: Props) {
  const lang = (await params).lang as Locale
  const dict = await getDictionary(lang)
  const c = dict.contact

  return (
    <main className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="text-gradient-primary" style={{ fontSize: '3rem', marginBottom: '1rem' }}>{c.title}</h1>
        <p className="text-secondary" style={{ fontSize: '1.2rem' }}>{c.subtitle}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }}>
        {/* Left: Contact Info */}
        <div>
          <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent)', fontSize: '1.1rem', fontWeight: 700 }}>{c.direct_title}</h3>
            <p className="text-secondary" style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span>📧</span><span>ouyanghaobang@cozysheep.tech</span>
            </p>
            <p className="text-secondary" style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span>📞</span><span>+852 68102591 / +86 13723711356</span>
            </p>
            <p className="text-secondary" style={{ marginBottom: '2rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span>💬</span><span>+852 68102591 (WhatsApp)</span>
            </p>
            <a
              href="https://wa.me/85268102591"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'block', textAlign: 'center' }}
            >
              {c.whatsapp_btn}
            </a>
            <p className="text-secondary" style={{ textAlign: 'center', fontSize: '0.8rem', marginTop: '0.75rem' }}>{c.response_time}</p>
          </div>

          <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent)', fontSize: '1.1rem', fontWeight: 700 }}>{c.hq_title}</h3>
            <p className="text-secondary" style={{ display: 'flex', gap: '0.75rem' }}>
              <span>📍</span><span>{c.hq_address}</span>
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
          <h3 style={{ marginBottom: '2rem', fontWeight: 700, fontSize: '1.2rem' }}>{c.form_title}</h3>
          <form
            action={`mailto:ouyanghaobang@cozysheep.tech?subject=Inquiry from website`}
            method="get"
            encType="text/plain"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.9rem' }}>{c.form_name}</label>
                <input name="name" placeholder={c.form_placeholder_name} style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.9rem' }}>{c.form_company}</label>
                <input name="company" placeholder={c.form_placeholder_company} style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.9rem' }}>{c.form_email}</label>
              <input name="email" type="email" placeholder={c.form_placeholder_email} style={inputStyle} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.9rem' }}>{c.form_message}</label>
              <textarea name="body" rows={5} placeholder={c.form_placeholder_message} style={{ ...inputStyle, resize: 'vertical' }} />
            </div>
            <button type="submit" className="btn-primary">{c.form_submit}</button>
          </form>
        </div>
      </div>
    </main>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid var(--border-color)',
  borderRadius: 'var(--radius-md)',
  color: 'var(--text-primary)',
  fontSize: '0.95rem',
  outline: 'none',
}
