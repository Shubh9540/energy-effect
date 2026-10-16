import React from 'react';
import { EnergyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { NotFoundSection } from '@/components/sections/NotFoundSection';

export default function NotFoundPage() {
  const templateData: EnergyTemplateData = rawData;
  const sectionData = templateData?.categories?.Energy?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-card)] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.EnergyTopBar1} logoData={sectionData.Header?.variants?.EnergyHeader1} />
      <Header data={sectionData.Header?.variants?.EnergyHeader1} /> 
      
      <NotFoundSection data={commonData.notFound} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
