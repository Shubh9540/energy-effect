import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import { EnergyTemplateData } from "@/types/templates.types";
import { CustomCursor } from "@/components/common/CustomCursor";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { SiteMotion } from "@/components/common/SiteMotion";
import "./globals.css";

const templateData: EnergyTemplateData = rawData;

export const metadata: Metadata = {
  title: templateData.common.metadata.title,
  description: templateData.common.metadata.description,
  icons: {
    icon: templateData.common.metadata.icon,
    shortcut: templateData.common.metadata.icon,
    apple: templateData.common.metadata.icon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontStyles = templateData.common.fonts
    ? `:root {
        --font-primary: ${templateData.common.fonts.primary};
        --font-heading: ${templateData.common.fonts.heading};
      }`
    : '';

  return (
    <html lang="en">
      <head>
        {fontStyles && <style dangerouslySetInnerHTML={{ __html: fontStyles }} />}
      </head>
      <body className="font-sans antialiased">
        <SmoothScroll />
        <SiteMotion data={templateData.common.globalMotion} />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
