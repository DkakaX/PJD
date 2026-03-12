import Link from 'next/link';
import './Footer.css';
import { getDictionary } from '@/get-dictionary';
import type { Locale } from '@/i18n-config';

export default async function Footer({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);
  
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link href={`/${lang}`} className="brand-logo mb-1">
            <span className="text-gradient-primary">PJD</span> Electronics
          </Link>
          <p className="footer-desc text-secondary mt-1">
            {dict.footer.desc}
          </p>
          <div className="cert-badges mt-2">
            <span className="cert-badge">ISO 9001:2015</span>
            <span className="cert-badge">RoHS Compliant</span>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>{dict.footer.products_heading}</h4>
          <ul>
            <li><Link href={`/${lang}/products`}>Integrated Circuits</Link></li>
            <li><Link href={`/${lang}/products`}>Capacitors & Resistors</Link></li>
            <li><Link href={`/${lang}/products`}>Connectors</Link></li>
            <li><Link href={`/${lang}/products`}>Sensors</Link></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>{dict.footer.company_heading}</h4>
          <ul>
            <li><Link href={`/${lang}/about`}>About Us</Link></li>
            <li><Link href={`/${lang}/about#quality`}>Quality Control</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>{dict.footer.contact_heading}</h4>
          <p className="text-secondary mb-05">Email: ouyanghaobang@cozysheep.tech</p>
          <p className="text-secondary mb-05">Phone: +852 68102591 / +86 13723711356</p>
          <p className="text-secondary mt-1">
            {dict.footer.hq}<br/>
            Huaqiangbei SEG Technology Park, Shenzhen
          </p>
          <div className="mt-2">
            <Link href={`/${lang}/contact`} className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
              {dict.footer.btn_whatsapp}
            </Link>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container bottom-content">
          <p className="text-secondary">{dict.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
