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
    { part: 'STM32F405RGT6', mfg: 'STMicroelectronics', desc: 'ARM MCU 32BIT 1MB FLASH 64LQFP', stock: 1500 },
    { part: 'ICM-42688-P', mfg: 'TDK InvenSense', desc: '6-AXIS MEMS MOTIONTRACKING', stock: 3000 },
    { part: 'STM32F103C8T6', mfg: 'STMicroelectronics', desc: 'ARM MCU 32BIT 64KB FLASH 48LQFP', stock: 8000 },
    { part: 'W25Q128JVSIQ', mfg: 'Winbond', desc: 'IC FLASH 128MBIT SPI 8SOIC', stock: 12000 },
    { part: 'MT41K256M16TW-107:P', mfg: 'Micron', desc: 'IC DRAM 4GBIT DDR3L 96FBGA', stock: 600 },
    { part: 'STM32F407VET6', mfg: 'STMicroelectronics', desc: 'ARM MCU 32BIT 512KB FLASH 100LQFP', stock: 900 },
    { part: 'W25Q64JVSSIQ', mfg: 'Winbond', desc: 'IC FLASH 64MBIT SPI 8SOIC', stock: 15000 },
    { part: 'MT41K256M16TW-107 IT:P', mfg: 'Micron', desc: 'IC DRAM 4GBIT DDR3L IT 96FBGA', stock: 500 },
    { part: 'TPS82130SILR', mfg: 'Texas Instruments', desc: 'IC REG BUCK 3A SYNC 8VSON', stock: 4000 },
    { part: 'TPS5430DDAR', mfg: 'Texas Instruments', desc: 'IC REG BUCK ADJ 3A 8SOPWRPAD', stock: 3500 },
    { part: 'HC32L130F8UA-QFN32TR', mfg: 'HDSC', desc: 'ARM MCU 32BIT 64KB FLASH QFN32', stock: 5000 },
    { part: 'PI7C8150BNDIE', mfg: 'Pericom', desc: 'IC PCI-TO-PCI BRIDGE', stock: 48 },
    { part: 'TLE4266G', mfg: 'Infineon', desc: 'IC REG LDO 5V 0.17A SOT223', stock: 22178 },
    { part: 'TPM2003C-TS3R', mfg: '3PEAK', desc: 'IC OPAMP GP 1 CIRCUIT SOT23', stock: 9000 },
    { part: 'JQC-3FF/012-1HS(551)', mfg: 'HONGFA', desc: 'RELAY GEN PURPOSE SPST 10A 12V', stock: 63422 },
    { part: 'LTC6820HMS#3ZZTRPBF', mfg: 'Analog Devices', desc: 'IC isoSPI ISOLATED COMM 16MSOP', stock: 2200 },
    { part: 'CDSOD323-T03C', mfg: 'Bourns', desc: 'TVS DIODE 3.3V SOD323', stock: 132000 },
    { part: 'OPA2340UA/2K5', mfg: 'Texas Instruments', desc: 'IC OPAMP GP 2 CIRCUIT 8SOIC', stock: 12987 },
    { part: 'Hi3531DRBCV100', mfg: 'HiSilicon', desc: 'IC SOC VIDEO PROCESSOR BGA', stock: 100 },
    { part: 'LTR-381RGB-WA', mfg: 'LITEON', desc: 'RGB COLOR LIGHT SENSOR', stock: 1500 },
    { part: 'MX66UM2G45GXRI00', mfg: 'MXIC', desc: 'IC FLASH 2GBIT OCTAL BGA', stock: 2000 },
    { part: 'ISM330DHCXTR', mfg: 'STMicroelectronics', desc: 'IMU 3-AXIS ACCEL/GYRO LGA', stock: 5000 },
    { part: 'XC7A35T-2FGG484I', mfg: 'AMD Xilinx', desc: 'IC FPGA ARTIX-7 484FBGA', stock: 1200 },
    { part: 'XC7A75T-2FGG484I', mfg: 'AMD Xilinx', desc: 'IC FPGA ARTIX-7 484FBGA', stock: 1200 },
    { part: 'FX2CA2-100S-1.27DSAL(71)', mfg: 'Hirose', desc: 'CONN PLUG 100POS 1.27MM', stock: 292 },
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
