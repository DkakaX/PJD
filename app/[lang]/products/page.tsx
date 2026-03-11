import Link from 'next/link';
import './products.css';

export default function ProductsPage() {
  const categories = [
    { name: 'Integrated Circuits (ICs)', count: 4205 },
    { name: 'Capacitors', count: 1832 },
    { name: 'Resistors', count: 3100 },
    { name: 'Connectors', count: 850 },
    { name: 'Sensors', count: 640 },
    { name: 'Power Supplies', count: 320 },
  ];

  const featuredParts = [
    { part: 'STM32F407VGT6', mfg: 'STMicroelectronics', desc: 'ARM MCU 32BIT 1MB FLASH 100LQFP', stock: 1200 },
    { part: 'ADuM1201ARZ-RL7', mfg: 'Analog Devices', desc: 'DGTL ISO 2.5KV GEN PURP 8SOIC', stock: 5000 },
    { part: 'TPS54331DR', mfg: 'Texas Instruments', desc: 'IC REG BUCK ADJ 3A 8SOIC', stock: 850 },
    { part: 'CC0805KRX7R9BB104', mfg: 'Yageo', desc: 'CAP CER 0.1UF 50V X7R 0805', stock: 25000 },
  ];

  return (
    <main className="products-main container mb-4">
      <div className="page-header">
        <h1 className="text-gradient-primary">Components Catalog</h1>
        <p className="text-secondary">Browse our extensive inventory of high-quality electronic components.</p>
      </div>

      <div className="products-layout">
        <aside className="products-sidebar glass-panel">
          <h3 className="sidebar-title">Categories</h3>
          <ul className="category-list">
            {categories.map(c => (
              <li key={c.name} className="category-item">
                <span>{c.name}</span>
                <span className="category-count">{c.count}</span>
              </li>
            ))}
          </ul>
        </aside>

        <section className="products-content">
          <div className="catalog-toolbar glass-panel">
            <input type="text" placeholder="Search Part Number within catalog..." className="filter-input" />
            <select className="filter-select">
              <option>Sort by: Recommended</option>
              <option>Sort by: Stock (High to Low)</option>
            </select>
          </div>

          <div className="parts-list">
            {featuredParts.map((item, i) => (
              <div key={i} className="part-card glass-panel animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="part-header">
                  <h3 className="part-number">{item.part}</h3>
                  <span className="stock-badge">In Stock ({item.stock})</span>
                </div>
                <div className="part-body">
                  <p className="mfg-name text-secondary">{item.mfg}</p>
                  <p className="part-desc">{item.desc}</p>
                </div>
                <div className="part-actions">
                  <Link href={`/products/${item.part}`} className="btn-outline">Datasheet</Link>
                  <Link href="/quote" className="btn-primary">Get Quote</Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
