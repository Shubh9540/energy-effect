import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { NotFoundSectionProps } from '@/types/templates.types';

export const NotFoundSection = ({ data }: NotFoundSectionProps) => {
  if (!data) return null;

  return (
    <section className="flex w-full flex-grow flex-col items-center justify-center px-4 py-20 text-center md:py-32">
      <h1 className="mb-4 text-8xl font-extrabold text-[var(--color-primary)] drop-shadow-sm md:text-9xl">
        {data.code}
      </h1>
      <h2 className="mb-6 text-2xl font-bold text-[var(--color-heading)] md:text-4xl">{data.title}</h2>
      <p className="mb-10 max-w-lg text-sm leading-relaxed text-[var(--color-text-light)] md:text-base">{data.description}</p>
      <Link href={data.buttonUrl} className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-8 py-4 text-sm font-bold text-[var(--color-on-primary)] shadow-md transition-colors hover:bg-[var(--color-accent)]">
        <FaArrowLeft />
        {data.buttonText}
      </Link>
    </section>
  );
};
