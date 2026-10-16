'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { FaCheckCircle, FaCogs, FaShieldAlt, FaUsers, FaLeaf } from 'react-icons/fa';
import { ServiceDetailSectionProps } from '@/types/templates.types';

const renderFeatureIcon = (iconName: string) => {
  switch (iconName) {
    case 'gear':
      return <FaCogs className="w-6 h-6 text-[#ff5500]" />;
    case 'shield':
      return <FaShieldAlt className="w-6 h-6 text-[#ff5500]" />;
    case 'team':
      return <FaUsers className="w-6 h-6 text-[#ff5500]" />;
    case 'leaf':
      return <FaLeaf className="w-6 h-6 text-[#ff5500]" />;
    default:
      return <FaCheckCircle className="w-6 h-6 text-[#ff5500]" />;
  }
};

export const ServiceDetail = ({ data, serviceId }: ServiceDetailSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (!data) return null;

  const service = data.services.find((s) => s.id === serviceId) || data.services[0];
  if (!service) return null;

  return (
    <section className="w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1320px] space-y-10 px-4 md:px-6 lg:space-y-16 lg:px-8">
        {/* ============================================================== */}
        {/* ROW 1: Hero Section (Image Left + Info & 4 Grid Cards Right)   */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Image with Orange Accent Background Tab */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -40 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Orange background accent decor tab */}
            <div className="absolute -left-3 -top-3 w-24 h-24 bg-[#ff5500] rounded-tl-2xl -z-10" />

            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-white/10 group">
              <Image
                src={service.image}
                alt={service.imageAlt || service.title}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right Column: Title, Description, and 4 Feature Cards */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 40 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Tag / Category */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#ff5500]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--color-heading)]">
                {service.tag1 || 'OUR SERVICE'}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black tracking-tight leading-[1.2] text-[var(--color-heading)]">
              {service.heading1 || service.title}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-light)]">
              {service.description1 || service.description2}
            </p>

            {/* 4 Feature Cards (2x2 Grid) */}
            {service.featureCards && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {service.featureCards.map((card) => (
                  <div
                    key={card.id}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-50 dark:bg-orange-950/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {renderFeatureIcon(card.icon)}
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[var(--color-heading)] leading-snug whitespace-pre-line">
                      {card.title}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* ROW 2: What We Offer (Checklist Left + Large Image Right)      */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, intro, and Checkmark Bullet list */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 35 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#ff5500]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--color-heading)]">
                {service.tag2 || 'KEY FEATURES'}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[var(--color-heading)]">
              {service.heading2 || 'What We Offer'}
            </h3>

            {service.description2 && (
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-light)]">
                {service.description2}
              </p>
            )}

            {/* Checkmark List */}
            {service.offerPoints && (
              <ul className="space-y-3 pt-2">
                {service.offerPoints.map((point) => (
                  <li key={point.id} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 text-[#ff5500]">
                      <FaCheckCircle className="w-5 h-5" />
                    </span>
                    <span className="text-sm sm:text-base font-medium text-[var(--color-heading)]">
                      {point.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>

          {/* Right Column: Platform Offshore Image with Navy Frame Accent */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 40 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-6 relative"
          >
            {/* Navy frame accent */}
            <div className="absolute -right-3 -top-3 w-28 h-28 bg-[#0a2540] rounded-tr-2xl -z-10 hidden sm:block" />

            <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-white/10 group">
              <Image
                src={service.imageOffer || service.image}
                alt={service.imageOfferAlt || 'Offshore platform facility'}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* ROW 3: Why Choose Us (Image Left + Why Choose Checklist Right) */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Engineers Reviewing Specifications Image */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -40 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Orange bottom corner accent */}
            <div className="absolute -left-3 -top-3 w-20 h-20 bg-[#ff5500] rounded-tl-xl -z-10" />

            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-white/10 group">
              <Image
                src={service.imageWhyChoose || service.image}
                alt={service.imageWhyChooseAlt || 'Engineers at industrial refinery facility'}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right Column: Why Choose Details & Checkmarks */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 40 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#ff5500]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--color-heading)]">
                {service.tag3 || 'WHY CHOOSE US'}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[var(--color-heading)] leading-snug">
              {service.heading3 || 'Why Choose Our Oil & Gas Engineering Services'}
            </h3>

            {service.description3 && (
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-light)]">
                {service.description3}
              </p>
            )}

            {/* Checkmark List */}
            {service.whyChoosePoints && (
              <ul className="space-y-3 pt-2">
                {service.whyChoosePoints.map((point) => (
                  <li key={point.id} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 text-[#ff5500]">
                      <FaCheckCircle className="w-5 h-5" />
                    </span>
                    <span className="text-sm sm:text-base font-medium text-[var(--color-heading)]">
                      {point.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
