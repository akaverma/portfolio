import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Akarshit Verma | Senior Frontend Engineer & Tech Lead',
  description:
    'Senior Frontend Engineer with 8+ years of experience building scalable web applications. Expert in React.js, Next.js, TypeScript. Led teams of 14+, boosted PageSpeed from 30→90%.',
  keywords: [
    'Akarshit Verma',
    'Senior Frontend Engineer',
    'React.js',
    'Next.js',
    'TypeScript',
    'Tech Lead',
    'Portfolio',
  ],
  authors: [{ name: 'Akarshit Verma' }],
  creator: 'Akarshit Verma',
  openGraph: {
    title: 'Akarshit Verma | Senior Frontend Engineer & Tech Lead',
    description:
      'Senior Frontend Engineer with 8+ years experience. React.js, Next.js, TypeScript expert.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akarshit Verma | Senior Frontend Engineer',
    description: '8+ years building scalable web applications. React.js, Next.js, TypeScript.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#050816] text-slate-100 antialiased">{children}</body>
    </html>
  );
}
