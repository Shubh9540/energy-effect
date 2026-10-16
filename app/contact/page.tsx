import React from 'react';
import { EnergyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  const templateData: EnergyTemplateData = rawData;
  const sectionData = templateData?.categories?.Energy?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-card)]">
      <div className="contents">
        <TopBar data={sectionData.TopBar?.variants?.EnergyTopBar1} logoData={sectionData.Header?.variants?.EnergyHeader1} />
        <Header data={sectionData.Header?.variants?.EnergyHeader1} />
        <Breadcrumb data={commonData.contactBreadcrumb} ui={commonData.globalUI} />
      </div>
      
      <ContactSection data={sectionData.contact?.variants?.EnergyContact1} /> 

      <Footer data={commonData.Footer} />
    </main>
  );
}
