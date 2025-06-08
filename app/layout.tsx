import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ankit Ram - Data Analyst Portfolio',
  description: 'Professional portfolio of Ankit Ram, a passionate data analyst specializing in machine learning, data visualization, and business intelligence.',
  keywords: 'data analyst, machine learning, power bi, python, sql, data visualization, business intelligence',
  authors: [{ name: 'Ankit Ram' }],
  openGraph: {
    title: 'Ankit Ram - Data Analyst Portfolio',
    description: 'Professional portfolio showcasing data analysis projects, ML models, and business intelligence solutions.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}