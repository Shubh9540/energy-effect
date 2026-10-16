import { notFound } from 'next/navigation';
import rawData from '@/data/templates.json';
import { EnergyTemplateData, ServiceDetailPageProps } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServiceDetail } from '@/components/sections/ServiceDetail';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default async function ServiceDetailsPage({ params }: ServiceDetailPageProps) {
  const { id } = await params;
  const templateData: EnergyTemplateData = rawData;
  const sectionData = templateData?.categories?.Energy?.sections;
  const commonData = templateData?.common;
  const servicesData = sectionData?.OurServices?.variants?.EnergyOurServices1;
  const selectedService = servicesData?.services.find((s) => s.id === id);

  if (!sectionData || !commonData) return null;
  if (!servicesData || !selectedService) notFound();

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-bg-main)]">
      <div className="contents">
        <TopBar data={sectionData.TopBar?.variants?.EnergyTopBar1} />
        <Header data={sectionData.Header?.variants?.EnergyHeader1} /> 
        <Breadcrumb data={commonData.serviceDetailsBreadcrumb} ui={commonData.globalUI} />
      </div>
      <ServiceDetail key={id} data={servicesData} serviceId={id} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
