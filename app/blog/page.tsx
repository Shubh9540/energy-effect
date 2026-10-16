import React from 'react';
import { EnergyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BlogGrid } from '@/components/sections/BlogGrid';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function BlogsPage() {
  const templateData: EnergyTemplateData = rawData;
  const sectionData = templateData?.categories?.Energy?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-bg-card)]">
      <div className="contents">
        <TopBar data={sectionData.TopBar?.variants?.EnergyTopBar1} />
        <Header data={sectionData.Header?.variants?.EnergyHeader1} /> 
        <Breadcrumb data={commonData.blogsBreadcrumb} ui={commonData.globalUI} />
      </div>
      <BlogGrid data={sectionData.Blog?.variants?.EnergyBlog1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
