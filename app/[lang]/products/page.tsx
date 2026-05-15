import Link from 'next/link'
import { getDictionary } from '@/get-dictionary'
import type { Locale } from '@/i18n-config'

type Props = { params: Promise<{ lang: string }> }

export default async function ProductsPage({ params }: Props) {
  const lang = (await params).lang as Locale
  const dict = await getDictionary(lang)
  const p = dict.products

  const categories = [
    { key: 'ic',     name: p.cat_ic,     count: 4205 },
    { key: 'cap',    name: p.cat_cap,    count: 1832 },
    { key: 'res',    name: p.cat_res,    count: 3100 },
    { key: 'conn',   name: p.cat_conn,   count: 850  },
    { key: 'sensor', name: p.cat_sensor, count: 640  },
    { key: 'power',  name: p.cat_power,  count: 320  },
  ]

  const parts = [
    { part: 'STM32F407VGT6',     mfg: 'STMicroelectronics', desc: 'ARM MCU 32BIT 1MB FLASH 100LQFP', stock: 1200  },
    { part: 'ADuM1201ARZ-RL7',   mfg: 'Analog Devices',     desc: 'DGTL ISO 2.5KV GEN PURP 8SOIC',  stock: 5000  },
    { part: 'TPS54331DR',        mfg: 'Texas Instruments',  desc: 'IC REG BUCK ADJ 3A 8SOIC',       stock: 850   },
    { part: 'CC0805KRX7R9BB104', mfg: 'Yageo',              desc: 'CAP CER 0.1UF 50V X7R 0805',    stock: 25000 },
  ]

  const sidebarStyle: React.CSSProperties = { padding: '1.5rem', borderRadius: 'var(--radius-lg)', position: 'sticky', top: '100px' }
  const inputStyle: React.CSSProperties = { flex: 1, padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', color: 'var(--text-primary)', fontSize: '0.95rem', outline: 'none' }

  return (
    <main className="container" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient-primary" style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{p.title}</h1>
        <p className="text-secondary">{p.subtitle}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '3rem', alignItems: 'start' }}>
        <div className="glass-panel" style={sidebarStyle}>
          <h3 style={{ marginBottom: '1.25rem', fontWeight: 700, fontSize: '1rem' }}>{p.categories_title}</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {categories.map((cat) => (
              <li key={cat.key} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontSize: '0.9rem' }}>{cat.name}</span>
                <span style={{ fontSize: '0.8rem', background: 'rgba(0,102,255,0.15)', color: 'var(--primary)', padding: '0.1rem 0.5rem', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>{cat.count}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' }}>
            <input placeholder={p.search_placeholder} style={inputStyle} />
            <span className="text-secondary" style={{ fontSize: '0.9rem', whiteSpace: 'nowrap' }}>{p.sort_label} {p.sort_recommended}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {parts.map((item) => (
              <div key={item.part} className="glass-panel" style={{ padding: '1.5rem 2rem', borderRadius: 'var(--radius-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.25rem' }}>{item.part}</div>
                  <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{item.mfg}</div>
                  <div className="text-secondary" style={{ fontSize: '0.9rem' }}>{item.desc}</div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: '0.85rem', background: 'rgba(0,200,100,0.15)', color: '#00c864', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontWeight: 600, marginBottom: '1rem' }}>
                    {p.in_stock} ({item.stock.toLocaleString()})
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button style={{ padding: '0.5rem 1rem', background: 'transparent', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', color: 'var(--text-secondary)', fontSize: '0.85rem', cursor: 'pointer' }}>{p.datasheet}</button>
                    <Link href={`/${lang}/quote`} style={{ padding: '0.5rem 1rem', background: 'var(--primary)', borderRadius: 'var(--radius-md)', color: '#fff', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>{p.get_quote}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
