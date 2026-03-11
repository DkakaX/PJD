import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';
import { i18n, type Locale } from '@/i18n-config';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: 'B2B Electronic Components | Global Supplier',
  description: 'Global supplier of high-quality electronic components, ICs, and semiconductor parts. Fast quoting, premium stock.',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const lang = (await params).lang as Locale;
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <div className="bg-grid"></div>
        <div className="bg-glow"></div>
        <div className="bg-glow-right"></div>
        <Header lang={lang} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  );
}
