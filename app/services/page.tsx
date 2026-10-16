import React from 'react';
import { EnergyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { OurServices } from '@/components/sections/OurServices';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function ServicesPage() {
  const templateData: EnergyTemplateData = rawData;
  const sectionData = templateData?.categories?.Energy?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <div className="contents">
        <TopBar data={sectionData.TopBar?.variants?.EnergyTopBar1} />
        <Header data={sectionData.Header?.variants?.EnergyHeader1} /> 
        <Breadcrumb data={commonData.servicesBreadcrumb} ui={commonData.globalUI} />
      </div>
      <OurServices data={sectionData.OurServices?.variants?.EnergyOurServices1} hideButton />
      <Footer data={commonData.Footer} />
    </main>
  );
}
