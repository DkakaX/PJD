'use client'
import { useState } from 'react'

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)
    const parts = data.get('parts') as string
    const qty = data.get('qty') as string
    const name = data.get('name') as string
    const company = data.get('company') as string
    const email = data.get('email') as string
    const notes = data.get('notes') as string

    const subject = encodeURIComponent(`RFQ Request from ${company || name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\nPart Numbers:\n${parts}\n\nQuantity:\n${qty}\n\nNotes:\n${notes}`
    )
    window.location.href = `mailto:ouyanghaobang@cozysheep.tech?subject=${subject}&body=${body}`
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem', maxWidth: '800px', textAlign: 'center' }}>
        <div className="glass-panel" style={{ padding: '4rem 3rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✅</div>
          <h2 className="text-gradient-primary" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Quote Request Sent!</h2>
          <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
            Your default email client should have opened. If not, please email us directly at{' '}
            <a href="mailto:ouyanghaobang@cozysheep.tech" style={{ color: 'var(--accent)' }}>
              ouyanghaobang@cozysheep.tech
            </a>
          </p>
          <button onClick={() => setSubmitted(false)} className="btn-primary" style={{ marginTop: '2rem' }}>
            Submit Another RFQ
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem', maxWidth: '800px' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient-primary" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Request for Quote (RFQ)
        </h1>
        <p className="text-secondary">
          Upload your BOM or manually enter part numbers below for a rapid response within 24 hours.
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '3rem' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>
                Your Name <span style={{ color: 'var(--accent)' }}>*</span>
              </label>
              <input name="name" required placeholder="John Smith" style={inputStyle} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>
                Company
              </label>
              <input name="company" placeholder="Acme Corp" style={inputStyle} />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>
              Email Address <span style={{ color: 'var(--accent)' }}>*</span>
            </label>
            <input name="email" type="email" required placeholder="you@company.com" style={inputStyle} />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>
              Part Numbers <span style={{ color: 'var(--accent)' }}>*</span>
            </label>
            <textarea
              name="parts"
              required
              rows={4}
              placeholder="e.g. STM32F407VGT6, TPS54331DR, CC0805KRX7R9BB104 ..."
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>
              Quantity Required
            </label>
            <input name="qty" placeholder="e.g. 500 pcs / 1000 pcs each" style={inputStyle} />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>
              Additional Notes
            </label>
            <textarea
              name="notes"
              rows={3}
              placeholder="Delivery deadline, certification requirements, etc."
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button type="submit" className="btn-primary" disabled={loading} style={{ flex: 1 }}>
              {loading ? 'Sending...' : '⚡ Send RFQ Now'}
            </button>
            <a
              href="https://wa.me/85268102591"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ flex: 1, textAlign: 'center' }}
            >
              💬 WhatsApp Instead
            </a>
          </div>

          <p className="text-secondary" style={{ fontSize: '0.8rem', textAlign: 'center' }}>
            🔒 Your information is kept confidential. Average response time: &lt; 24 hours.
          </p>
        </form>
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
  transition: 'border-color 0.2s',
}
