import Link from 'next/link';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="container pb-4" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
      <div className="text-center mb-4" style={{ marginBottom: '4rem' }}>
        <h1 className="text-gradient-primary" style={{ fontSize: '3rem', marginBottom: '1rem' }}>About PJD Electronics</h1>
        <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
          We bridge the gap between global electronic component shortages and mission-critical production lines.
        </p>
      </div>

      <div className="glass-panel" style={{ overflow: 'hidden', padding: '0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', alignItems: 'stretch', marginBottom: '4rem', borderRadius: 'var(--radius-lg)' }}>
        <div style={{ position: 'relative', minHeight: '400px' }}>
           <Image src="/images/warehouse.png" alt="Warehouse Inventory" fill style={{ objectFit: 'cover' }} />
        </div>
        <div style={{ padding: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent)' }}>Our Mission</h2>
          <p className="text-secondary" style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
            Founded in the heart of the global electronics hub, PJD Electronics is dedicated to sourcing, inspecting, and delivering hard-to-find, obsolete, and highly demanded electronic components to manufacturers worldwide.
          </p>
          <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
            Our dynamic inventory model and strict QA processes guarantee that the parts you receive are 100% authentic and delivered on time.
          </p>
          <div style={{ display: 'flex', gap: '3rem', marginTop: '2.5rem' }}>
             <div>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)' }}>10M+</div>
                <div className="text-secondary" style={{ fontSize: '0.9rem' }}>Components</div>
             </div>
             <div>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent)' }}>0%</div>
                <div className="text-secondary" style={{ fontSize: '0.9rem' }}>Counterfeit</div>
             </div>
          </div>
        </div>
      </div>

      <div className="text-center" id="quality" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Strict Quality Control</h2>
        <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>Every component passes through our certified lab testing before shipment.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', textAlign: 'left' }}>
          <div className="glass-panel" style={{ position: 'relative', minHeight: '300px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
             <Image src="/images/qa.png" alt="QA Inspection" fill style={{ objectFit: 'cover' }} />
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {[
              { title: 'Visual Inspection', desc: 'High-resolution microscopy to check for resurfacing and pin damages.' },
              { title: 'X-Ray Testing', desc: 'Non-destructive internal die and wire bond verifications.' },
              { title: 'Decapsulation', desc: 'Chemical etching to expose and verify the original manufacturer die.' },
              { title: 'Solderability', desc: 'Ensuring components meet modern PCB assembly heat tolerances.' }
            ].map(q => (
              <div key={q.title} className="glass-panel" style={{ padding: '2rem' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>{q.title}</h3>
                <p className="text-secondary">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
