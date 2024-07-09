'use client';

import dynamic from 'next/dynamic';

const ProductForm = dynamic(() => import('../forms/ProductsForm'), { ssr: false });

export default function ServicesPage() {
  return (
    <div>
      <ProductForm />
    </div>
  );
}
