export default function ContactPage() {
  return (
    <main className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="text-gradient-primary" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact Us</h1>
        <p className="text-secondary" style={{ fontSize: '1.2rem' }}>Have questions? Need urgent RFQ? Our team is online 24/7.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }}>
        <div className="contact-info">
          <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>Direct Contact</h3>
            <p className="text-secondary" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <strong>Email:</strong> ouyanghaobang@cozysheep.tech
            </p>
            <p className="text-secondary" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <strong>Phone:</strong> +852 68102591 / +86 13723711356
            </p>
            <p className="text-secondary" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <strong>WhatsApp:</strong> +852 68102591 / +86 13723711356
            </p>
            <a href="#" className="btn-primary" style={{ marginTop: '2rem', width: '100%', textAlign: 'center' }}>Chat on WhatsApp</a>
          </div>

          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>Global HQ</h3>
            <p className="text-secondary" style={{ lineHeight: '1.8' }}>
              PJD Electronics Headquarters<br />
              Huaqiangbei SEG Technology Park<br />
              Shenzhen, China
            </p>
          </div>
        </div>

        <div className="contact-form glass-panel" style={{ padding: '3rem' }}>
          <h2 style={{ marginBottom: '2rem' }}>Send a Message</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <input type="text" placeholder="First Name" required style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', padding: '1rem', color: '#fff', borderRadius: 'var(--radius-md)' }} />
              <input type="text" placeholder="Last Name" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', padding: '1rem', color: '#fff', borderRadius: 'var(--radius-md)' }} />
            </div>
            <input type="email" placeholder="Business Email" required style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', padding: '1rem', color: '#fff', borderRadius: 'var(--radius-md)' }} />
            <input type="text" placeholder="Company Name" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', padding: '1rem', color: '#fff', borderRadius: 'var(--radius-md)' }} />
            <textarea placeholder="How can we help? (Include Part Number, Qty, Target Price...)" required rows={5} style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', padding: '1rem', color: '#fff', borderRadius: 'var(--radius-md)', resize: 'vertical' }}></textarea>
            
            <button type="button" className="btn-primary" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}>Send Message</button>
          </form>
        </div>
      </div>
    </main>
  );
}
