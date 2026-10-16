'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FaCheckCircle,
  FaHardHat,
  FaLeaf,
  FaCogs,
  FaRecycle,
  FaTint,
  FaShieldAlt,
  FaFileAlt,
  FaUsers,
  FaBell,
} from 'react-icons/fa';
import { SustainabilityProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'helmet':
      return <FaHardHat className="w-7 h-7 text-[#ff5500]" />;
    case 'leaf':
      return <FaLeaf className="w-7 h-7 text-[#ff5500]" />;
    case 'gear':
      return <FaCogs className="w-7 h-7 text-[#ff5500]" />;
    case 'recycle':
      return <FaRecycle className="w-7 h-7 text-[#ff5500]" />;
    case 'drop':
      return <FaTint className="w-7 h-7 text-[#ff5500]" />;
    case 'shield':
      return <FaShieldAlt className="w-7 h-7 text-[#ff5500]" />;
    case 'document':
      return <FaFileAlt className="w-7 h-7 text-[#ff5500]" />;
    case 'team':
      return <FaUsers className="w-7 h-7 text-[#ff5500]" />;
    case 'siren':
      return <FaBell className="w-7 h-7 text-[#ff5500]" />;
    default:
      return <FaCheckCircle className="w-7 h-7 text-[#ff5500]" />;
  }
};

const getBadgeBg = (color?: string) => {
  switch (color) {
    case 'green':
      return 'bg-[#0f8b44] text-white';
    case 'red':
      return 'bg-[#d92d20] text-white';
    case 'darkblue':
      return 'bg-[#0a2540] text-white';
    case 'blue':
    default:
      return 'bg-[#0070ba] text-white';
  }
};

export const Sustainability = ({ data }: SustainabilityProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (!data) return null;

  return (
    <section className="w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1320px] space-y-10 px-4 md:px-6 lg:space-y-16 lg:px-8">
        {/* ============================================================== */}
        {/* ROW 1: HSE INTRODUCTION (Text Left + 3 Rounded Icons Right)    */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -35 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#ff5500]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--color-heading)]">
                {data.introTag}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black tracking-tight leading-[1.2] text-[var(--color-heading)]">
              {data.introTitle} <span className="text-[#ff5500]">{data.introHighlightedTitle}</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-light)]">
              {data.introDescription}
            </p>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 35 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-5 flex items-center justify-around gap-4"
          >
            {data.introPillars.map((pillar) => (
              <div key={pillar.id} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm">
                  {renderIcon(pillar.icon)}
                </div>
                <span className="mt-3 text-xs sm:text-sm font-bold text-[var(--color-heading)] whitespace-pre-line leading-tight">
                  {pillar.title}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* ROW 2: HEALTH & SAFETY POLICY (Image Left + Policy Right)       */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -35 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-white/10 group">
              <Image
                src={data.safetyImage}
                alt={data.safetyImageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 35 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#ff5500]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--color-heading)]">
                {data.safetyTag}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[var(--color-heading)] leading-snug">
              {data.safetyTitle} <span className="text-[#ff5500]">{data.safetyHighlightedTitle}</span>
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-light)]">
              {data.safetyDescription}
            </p>
            <ul className="space-y-3 pt-2">
              {data.safetyChecklist.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 text-[#ff5500]">
                    <FaCheckCircle className="w-5 h-5" />
                  </span>
                  <span className="text-sm sm:text-base font-medium text-[var(--color-heading)]">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* ROW 3: ENVIRONMENTAL MANAGEMENT (Text & 4 Icons Left + Image)  */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -35 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-5"
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#ff5500]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--color-heading)]">
                {data.envTag}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[var(--color-heading)]">
              {data.envTitle} <span className="text-[#ff5500]">{data.envHighlightedTitle}</span>
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-light)]">
              {data.envDescription}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3">
              {data.envPillars.map((p) => (
                <div key={p.id} className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    {renderIcon(p.icon)}
                  </div>
                  <span className="mt-2 text-xs font-bold text-[var(--color-heading)] whitespace-pre-line leading-tight">
                    {p.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 35 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-white/10 group">
              <Image
                src={data.envImage}
                alt={data.envImageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* ROW 4: OUR SAFETY PRACTICES (Image Left + 4 Items Right)       */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -35 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-white/10 group">
              <Image
                src={data.practicesImage}
                alt={data.practicesImageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 35 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-6 space-y-5"
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#ff5500]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--color-heading)]">
                {data.practicesTag}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[var(--color-heading)] leading-snug">
              {data.practicesTitle} <span className="text-[#ff5500]">{data.practicesHighlightedTitle}</span>
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-light)]">
              {data.practicesDescription}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3">
              {data.practicesItems.map((item) => (
                <div key={item.id} className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    {renderIcon(item.icon)}
                  </div>
                  <span className="mt-2 text-xs font-bold text-[var(--color-heading)] whitespace-pre-line leading-tight">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* ROW 5: SUSTAINABILITY INITIATIVES (Checklist Left + Image)     */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -35 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#ff5500]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--color-heading)]">
                {data.cleanerTag}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[var(--color-heading)] leading-snug">
              {data.cleanerTitle} <span className="text-[#ff5500]">{data.cleanerHighlightedTitle}</span>
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-light)]">
              {data.cleanerDescription}
            </p>
            <ul className="space-y-3 pt-2">
              {data.cleanerChecklist.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 text-[#ff5500]">
                    <FaCheckCircle className="w-5 h-5" />
                  </span>
                  <span className="text-sm sm:text-base font-medium text-[var(--color-heading)]">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 35 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-white/10 group">
              <Image
                src={data.cleanerImage}
                alt={data.cleanerImageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* ROW 6: QUALITY & COMPLIANCE (Image Left + Standards Badges)    */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -35 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-white/10 group">
              <Image
                src={data.standardsImage}
                alt={data.standardsImageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 35 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-6 space-y-5"
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#ff5500]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--color-heading)]">
                {data.standardsTag}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[var(--color-heading)] leading-snug">
              {data.standardsTitle} <span className="text-[#ff5500]">{data.standardsHighlightedTitle}</span>
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-light)]">
              {data.standardsDescription}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3">
              {data.standardsBadges.map((badge) => (
                <div key={badge.id} className="flex flex-col items-center text-center group">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center font-black text-xs sm:text-sm text-center shadow-md transition-transform duration-300 group-hover:scale-110 ${getBadgeBg(
                      badge.color
                    )}`}
                  >
                    <span className="whitespace-pre-line leading-tight">{badge.code}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* ROW 7: EMPLOYEE TRAINING & AWARENESS (Text Left + Image Right) */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -35 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#ff5500]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--color-heading)]">
                {data.cultureTag}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[var(--color-heading)] leading-snug">
              {data.cultureTitle} <span className="text-[#ff5500]">{data.cultureHighlightedTitle}</span>
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-light)]">
              {data.cultureDescription}
            </p>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 35 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-white/10 group">
              <Image
                src={data.cultureImage}
                alt={data.cultureImageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* ROW 8: OUR HSE COMMITMENT (Image Left + Commitment Right)       */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -35 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-white/10 group">
              <Image
                src={data.commitmentImage}
                alt={data.commitmentImageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 35 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#ff5500]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--color-heading)]">
                {data.commitmentTag}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[var(--color-heading)] leading-snug">
              {data.commitmentTitle} <span className="text-[#ff5500]">{data.commitmentHighlightedTitle}</span>
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-light)]">
              {data.commitmentDescription}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
