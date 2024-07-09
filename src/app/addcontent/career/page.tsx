'use client';

import dynamic from 'next/dynamic';

const CareerForm = dynamic(() => import('../forms/CareerForm'), { ssr: false });

export default function BlogPage() {
  return (
    <div>
      <CareerForm/>
    </div>
  );
}
