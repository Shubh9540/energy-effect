'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { FaLinkedinIn, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { TeamSectionProps } from '@/types/templates.types';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaLinkedinIn':
      return <FaLinkedinIn className="w-3.5 h-3.5" />;
    case 'FaEnvelope':
      return <FaEnvelope className="w-3.5 h-3.5" />;
    case 'FaPhoneAlt':
      return <FaPhoneAlt className="w-3.5 h-3.5" />;
    default:
      return null;
  }
};

export const TeamSection = ({ data }: TeamSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (!data) return null;

  return (
    <section className="w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1320px] px-4 md:px-6 lg:px-8">
        {/* Section Header matching exact design */}
        <div className="mb-10 lg:mb-12 max-w-3xl">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -15 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-2"
          >
            <span className="h-[3px] w-10 bg-[#ff5500]" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--color-heading)]">
              {data.subtitle}
            </span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--color-heading)]"
          >
            {data.title}{' '}
            <span className="text-[var(--color-heading)]">{data.highlightedTitle}</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="mt-4 text-sm sm:text-base text-[var(--color-text-light)] leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>

        {/* 3x3 Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {data.members.map((member, idx) => (
            <motion.article
              key={member.id}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
                delay: (idx % 3) * 0.2,
              }}
              className="group flex flex-col bg-white dark:bg-[#071328] rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 border border-gray-100 dark:border-white/5"
            >
              {/* Member Image - Reusing images from public/team/ */}
              <div className="relative w-full aspect-[4/3] sm:aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card Bottom Area (Non-clickable) */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-black text-[var(--color-heading)] tracking-tight">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--color-text-light)]">
                  {member.role}
                </p>

                {/* Orange Accent Line */}
                <div className="mt-3 w-10 h-[3px] bg-[#ff5500]" />

                {/* Social Icon Buttons Row */}
                <div className="mt-5 flex items-center gap-2.5 pt-2">
                  {member.socials.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} ${social.label}`}
                      className="w-10 h-10 rounded-lg bg-blue-50/70 dark:bg-slate-800/80 text-[#0c2340] dark:text-blue-300 hover:bg-[#ff5500] hover:text-white dark:hover:bg-[#ff5500] dark:hover:text-white flex items-center justify-center transition-all duration-200"
                    >
                      {renderSocialIcon(social.icon)}
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
