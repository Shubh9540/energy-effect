import React from 'react';
import { EnergyTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import rawData from '@/data/templates.json';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Page() {
  const templateData: EnergyTemplateData = rawData;
  const sectionData = templateData?.categories?.Energy?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <div className="contents">
        <TopBar data={sectionData.TopBar?.variants?.EnergyTopBar1} />
        <Header data={sectionData.Header?.variants?.EnergyHeader1} />
        <Breadcrumb data={commonData.aboutBreadcrumb} ui={commonData.globalUI} />
      </div>
      <AboutUsSection data={sectionData.AboutUs?.variants?.EnergyAboutUs1} hideButton={true} />
      <WhyChooseUsSection data={sectionData.whyChooseUs?.variants?.EnergyWhyChooseUs1} />
      <TestimonialSection data={sectionData.Testimonials?.variants?.EnergyTestimonials1} /> 
      <Footer data={commonData.Footer} />
    </main>
  );
}
