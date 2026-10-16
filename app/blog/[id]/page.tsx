import React from 'react';
import { notFound } from 'next/navigation';
import rawData from '@/data/templates.json';
import { BlogDetailsPageProps, EnergyTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BlogDetailSection } from '@/components/sections/BlogDetailSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { id } = await params;
  const templateData: EnergyTemplateData = rawData;
  const sectionData = templateData?.categories?.Energy?.sections;
  const commonData = templateData?.common;
  const blogData = sectionData?.Blog?.variants?.EnergyBlog1;
  const selectedPost = blogData?.posts.find((post) => post.id === id);

  if (!sectionData || !commonData) return null;
  if (!blogData || !selectedPost) notFound();

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-bg-card)]">
      <div className="contents">
        <TopBar data={sectionData.TopBar?.variants?.EnergyTopBar1} />
        <Header data={sectionData.Header?.variants?.EnergyHeader1} /> 
        <Breadcrumb data={selectedPost.breadcrumb} ui={commonData.globalUI} />
      </div>
      <BlogDetailSection data={blogData} postId={id} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
