import React from 'react';
import { EnergyTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { HeroHeading } from '@/components/sections/HeroHeading';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { OurServices } from '@/components/sections/OurServices';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { OurBlog } from '@/components/sections/OurBlog';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: EnergyTemplateData = rawData;
  const sectionData = templateData?.categories?.Energy?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <div className="contents">
        <Header data={sectionData.Header?.variants?.EnergyHeader1} />
        <HeroHeading data={sectionData.HeroHeading?.variants?.EnergyHeroHeading1} bannerData={sectionData.Hero?.variants?.EnergyHero1} />
      </div>
      <AboutUsSection data={sectionData.AboutUs?.variants?.EnergyAboutUs1} />
      <OurServices data={sectionData.OurServices?.variants?.EnergyOurServices1} />
      <TestimonialSection data={sectionData.Testimonials?.variants?.EnergyTestimonials1} />
      <OurBlog data={sectionData.OurBlog?.variants?.EnergyOurBlog1} /> 
      <Footer data={commonData.Footer} />
    </main>
  );
}
