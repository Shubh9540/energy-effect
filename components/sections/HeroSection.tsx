import Image from 'next/image';
import { HeroSectionProps } from '@/types/templates.types';

export const HeroSection = ({ data }: HeroSectionProps) => {
  const slide = data?.slides[0];
  if (!slide) return null;

  return (
    <section className="relative h-full min-h-[60svh] w-full overflow-hidden bg-[var(--color-primary-dark)]">
      <Image src={slide.image} alt={slide.imageAlt} fill priority sizes="100vw" className="select-none object-cover object-center" />
    </section>
  );
};
