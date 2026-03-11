import Link from 'next/link';

type Props = {
  params: Promise<{ id: string }>
};

export default async function ProductDetail({ params }: Props) {
  const resolvedParams = await params;
  const partNumber = decodeURIComponent(resolvedParams.id);

  // Mock data for demo
  const part = {
    part: partNumber,
    mfg: 'Texas Instruments',
    desc: 'IC REG BUCK ADJ 3A 8SOIC',
    category: 'Integrated Circuits (ICs) > PMIC - Voltage Regulators',
    stock: 1540,
    price: '$1.45',
    specs: {
      'Mounting Type': 'Surface Mount',
      'Package / Case': '8-SOIC (0.154", 3.90mm Width)',
      'Output Type': 'Adjustable',
      'Voltage - Input (Max)': '28V',
      'Voltage - Output (Min/Fixed)': '0.8V',
      'Operating Temperature': '-40°C ~ 125°C (TJ)'
    }
  };

  return (
    <main className="container" style={{ padding: '4rem 0', minHeight: '80vh' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/products" className="text-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }}>
           &larr; Back to Catalog
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        
        <div>
          <h1 style={{ fontSize: '2.5rem', fontFamily: 'monospace', color: 'var(--accent)', marginBottom: '0.5rem', wordBreak: 'break-all' }}>{part.part}</h1>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>{part.mfg}</p>
          <p className="text-secondary" style={{ marginBottom: '2rem' }}>{part.desc}</p>
          
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Specifications</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {Object.entries(part.specs).map(([key, val]) => (
                  <tr key={key} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem 0', color: 'var(--text-secondary)', width: '40%', fontSize: '0.95rem' }}>{key}</td>
                    <td style={{ padding: '1rem 0', fontWeight: '500', fontSize: '0.95rem' }}>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="glass-panel" style={{ padding: '2.5rem', position: 'sticky', top: 'var(--header-height)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span className="text-secondary">Availability</span>
              <span style={{ color: '#00ff88', fontWeight: '600', background: 'rgba(0, 200, 100, 0.1)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)' }}>{part.stock} In Stock</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <span className="text-secondary">Reference Price</span>
              <span style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--text-primary)' }}>{part.price}</span>
            </div>
            
            <Link href="/quote" className="btn-primary" style={{ width: '100%', textAlign: 'center', padding: '1rem', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Request Full Quote
            </Link>
            <button className="btn-outline" style={{ width: '100%', padding: '1rem' }}>
              Download Datasheet (PDF)
            </button>
            <p className="text-secondary" style={{ fontSize: '0.85rem', textAlign: 'center', marginTop: '1.5rem' }}>
              Ships within 24 hours globally. Quality Guaranteed.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
