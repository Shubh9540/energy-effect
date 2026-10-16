'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { IndustriesWeServeProps } from '@/types/templates.types';

export const IndustriesWeServe = ({ data }: IndustriesWeServeProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (!data) return null;

  return (
    <section className="w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1320px] px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10 lg:mb-14">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 mb-3"
          >
            <span className="h-[2px] w-8 bg-[#ff5500]" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--color-heading)]">
              {data.subtitle}
            </span>
            <span className="h-[2px] w-8 bg-[#ff5500]" aria-hidden="true" />
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 25 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--color-heading)]"
          >
            {data.title}{' '}
            <span className="text-[var(--color-heading)]">{data.highlightedTitle}</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="mt-4 text-sm sm:text-base text-[var(--color-text-light)] max-w-3xl mx-auto leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>

        {/* 3x3 Non-clickable Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {data.items.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 35 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
                delay: (idx % 3) * 0.1,
              }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image Container with subtle hover zoom */}
              <div className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden bg-[var(--color-image-surface)]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Text Info */}
              <div className="p-5 sm:p-6 flex flex-col justify-between">
                <div className="relative pl-3 border-l-2 border-[#ff5500]">
                  <h3 className="text-base sm:text-lg font-black text-[var(--color-heading)] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-[var(--color-text-light)]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
