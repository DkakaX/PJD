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
            <span className="text-gradient-primary">Nex</span>Components
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
          <p className="text-secondary mb-05">Email: sales@nexcomponents.com</p>
          <p className="text-secondary mb-05">Phone: +1 (555) 123-4567</p>
          <p className="text-secondary mt-1">
            {dict.footer.hq}<br/>
            Tech Dist., Shenzhen, China
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
