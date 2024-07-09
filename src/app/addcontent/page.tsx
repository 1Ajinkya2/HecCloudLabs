'use client';

import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

export default function AddContent() {
  const pathname = usePathname();

  const ContentComponent = useMemo(() => {
    switch (pathname) {
      case '/addcontent/services':
        return dynamic(() => import('./forms/ServiceForm'));
      case '/addcontent/products':
        return dynamic(() => import('./forms/ProductsForm'));
      case '/addcontent/career':
        return dynamic(() => import('./forms/CareerForm'));
      case '/addcontent/blogs':
        return dynamic(() => import('./forms/BlogsForm'));
      default:
        return () => <p>This is the content home page</p>;
    }
  }, [pathname]);

  return (
    <div>
      <ContentComponent />
    </div>
  );
}
