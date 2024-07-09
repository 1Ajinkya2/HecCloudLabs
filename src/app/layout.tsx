"use client";

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
// import hectronicLogo from '../assets/hectronic-logo.png'; 
import './globals.css';

const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <nav className="nav-links">
          <Link href="/">
            <Image src="/hectronic_logo.png" alt="Hectronic Logo" width={70} height={25} className="logo" />
          </Link>
            {/* <Link href="/solution" className={pathname === '/solution' ? 'active' : ''}>Solution</Link> */}
            <Link href="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link>
            <Link href="/career" className={pathname === '/career' ? 'active' : ''}>Career</Link>
            <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
            <Link href="/aboutus" className={pathname === '/about-us' ? 'active' : ''}>About Us</Link>
            <Link href="/addcontent" className={pathname === '/addcontent' ? 'active' : ''}>add content</Link>
          </nav>
        </header>
        <main className="main-content">
          {children}
        </main>
        <footer className="footer">
          <p>&copy; 2024 Hectronic India Pvt. Ltd. Privacy protection GTC&apos;s Imprint</p>
        </footer>
      </body> 
    </html>
  );
}
