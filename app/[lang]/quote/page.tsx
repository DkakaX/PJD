export default function QuotePage() {
  return (
    <main className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem', maxWidth: '800px' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient-primary" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Request for Quote (RFQ)</h1>
        <p className="text-secondary">Upload your BOM or manually enter part numbers below for a rapid response within 24 hours.</p>
      </div>

      <div className="glass-panel" style={{ padding: '3rem' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div>
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent)', fontSize: '1.1rem' }}>1. Component Details</h3>
            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
              <input type="text" placeholder="Part Number (e.g. STM32F103C8T6)" required style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', padding: '1rem', color: '#fff', borderRadius: 'var(--radius-md)' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <input type="number" placeholder="Target Quantity" required style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', padding: '1rem', color: '#fff', borderRadius: 'var(--radius-md)' }} />
                <input type="text" placeholder="Target Price (Optional)" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', padding: '1rem', color: '#fff', borderRadius: 'var(--radius-md)' }} />
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent)', fontSize: '1.1rem', marginTop: '1rem' }}>OR Upload BOM (Excel, PDF)</h3>
            <div style={{ border: '2px dashed rgba(0, 102, 255, 0.4)', borderRadius: 'var(--radius-md)', padding: '2rem', textAlign: 'center', background: 'rgba(0,0,0,0.2)' }}>
              <p className="text-secondary" style={{ marginBottom: '1rem' }}>Drag and drop your files here or</p>
              <button type="button" className="btn-outline">Browse Files</button>
            </div>
          </div>

          <div>
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent)', fontSize: '1.1rem', marginTop: '1rem' }}>2. Contact Information</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <input type="text" placeholder="Your Name" required style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', padding: '1rem', color: '#fff', borderRadius: 'var(--radius-md)' }} />
              <input type="email" placeholder="Business Email" required style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', padding: '1rem', color: '#fff', borderRadius: 'var(--radius-md)' }} />
            </div>
          </div>
          
          <button type="button" className="btn-primary" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}>Submit RFQ</button>
        </form>
      </div>
    </main>
  );
}
