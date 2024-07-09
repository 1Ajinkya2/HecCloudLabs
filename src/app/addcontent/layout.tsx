// src/app/addcontent/layout.tsx

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AddContentLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '10px',
  };

  const activeLinkStyle = {
    fontWeight: 'bold',
  };

  return (
    <>
      <div style={{ backgroundColor: '#333', color: 'white', padding: '10px' }}>
        <nav style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
          <Link href="/addcontent/services" style={pathname === '/addcontent/services' ? activeLinkStyle : navLinkStyle}>Services</Link>
          <Link href="/addcontent/products" style={pathname === '/addcontent/products' ? activeLinkStyle : navLinkStyle}>Products</Link>
          <Link href="/addcontent/career" style={pathname === '/addcontent/career' ? activeLinkStyle : navLinkStyle}>Career</Link>
          <Link href="/addcontent/blogs" style={pathname === '/addcontent/blogs' ? activeLinkStyle : navLinkStyle}>Blogs</Link>
        </nav>
      </div>
      <main style={{ padding: '20px' }}>
        {children}
      </main>
    </>
  );
}
