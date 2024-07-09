'use client';

import dynamic from 'next/dynamic';

const BlogForm = dynamic(() => import('../forms/BlogsForm'), { ssr: false });

export default function BlogPage() {
  return (
    <div>
      <BlogForm/>
    </div>
  );
}
