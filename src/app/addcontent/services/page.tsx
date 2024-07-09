'use client';

import dynamic from 'next/dynamic';

const ServiceForm = dynamic(() => import('../forms/ServiceForm'), { ssr: false });

export default function ServicesPage() {
  return (
    <div>
      <ServiceForm />
    </div>
  );
}
