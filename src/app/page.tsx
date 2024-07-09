"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Products from '../components/Products'; 

const initialProducts = [
  {
    id: '1',
    name: 'Product 1',
    info: 'This is a description of Product 1. It provides detailed information about the product features and benefits.',
    image: '/path/to/image1.jpg', 
    price: 100,
  },
  {
    id: '2',
    name: 'Product 2',
    info: 'This is a description of Product 2. It provides detailed information about the product features and benefits.',
    image: '/path/to/image2.jpg',
    price: 200,
  },
];

export default function Home() {
  const [products] = useState(initialProducts);

  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <Products products={products} />
      <div className="mt-8">
      </div>
    </main>
  );
}
