'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';
import { ProjectGridProps } from '@/types/templates.types';

export const ProjectGrid = ({ data }: ProjectGridProps) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const shouldReduceMotion = useReducedMotion();

  if (!data) return null;

  const filteredItems =
    activeTab === 'all'
      ? data.items
      : data.items.filter((item) => item.category === activeTab);

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
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--color-heading)] uppercase"
          >
            {data.title}{' '}
            <span className="text-[#ff5500]">{data.highlightedTitle}</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="mt-4 text-sm sm:text-base text-[var(--color-text-light)] max-w-2xl mx-auto leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Filter Tabs with Working Smooth Filter Interaction */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:mb-10">
          {/* All Tab */}
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-[#ff5500] text-white shadow-md shadow-orange-500/25'
                : 'bg-white dark:bg-white/5 text-[var(--color-heading)] border border-gray-200 dark:border-white/10 hover:border-[#ff5500]'
            }`}
          >
            {data.allTabLabel}
          </button>

          {/* Dynamic Tabs */}
          {data.tabs.map((tab) => {
            const isActive = activeTab === tab.category;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.category)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'bg-[#ff5500] text-white shadow-md shadow-orange-500/25'
                    : 'bg-white dark:bg-white/5 text-[var(--color-heading)] border border-gray-200 dark:border-white/10 hover:border-[#ff5500]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Animated Project Cards Grid - 3 Columns on desktop */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.94, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -20 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: idx * 0.05,
                }}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Image Container with Parallax Zoom and Category Badge */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-image-surface)]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-[#ff5500] text-white shadow-md">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {item.location && (
                    <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 text-white/90 text-xs font-semibold">
                      <FaMapMarkerAlt className="text-[#ff5500] text-xs" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="flex-1 flex flex-col justify-start p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-black text-[var(--color-heading)] leading-snug group-hover:text-[#ff5500] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[var(--color-text-light)]">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
