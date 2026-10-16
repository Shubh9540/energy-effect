import React from 'react';
import rawData from '@/data/templates.json';
import { EnergyTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { EnquirySection } from '@/components/sections/EnquirySection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function EnquiryPage() {
  const templateData: EnergyTemplateData = rawData;
  const sectionData = templateData?.categories?.Energy?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-bg-card)]">
      <div className="contents">
        <TopBar data={sectionData.TopBar?.variants?.EnergyTopBar1} logoData={sectionData.Header?.variants?.EnergyHeader1} />
        <Header data={sectionData.Header?.variants?.EnergyHeader1} />
        <Breadcrumb data={commonData.enquiryBreadcrumb} ui={commonData.globalUI} />
      </div>
      <EnquirySection data={sectionData.Enquiry?.variants?.EnergyEnquiry1} /> 
      <Footer data={commonData.Footer} />
    </main>
  );
}
