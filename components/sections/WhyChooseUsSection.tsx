'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { WhyChooseUsSectionProps } from '@/types/templates.types';

export const WhyChooseUsSection = ({ data }: WhyChooseUsSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Track scroll progression through the section continuously in both scroll directions
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Smooth springs for fluid, buttery response - stops exactly when scrolling stops, reverses seamlessly on scroll up
  const springConfig = { stiffness: 70, damping: 26, mass: 0.5 };

  // 1. Heading & Tag Scroll Tracking
  const rawHeaderY = useTransform(scrollYProgress, [0, 0.35, 0.9, 1], [60, 0, 0, -30]);
  const rawHeaderOpacity = useTransform(scrollYProgress, [0, 0.25, 0.85, 1], [0.3, 1, 1, 0.3]);
  const headerY = useSpring(rawHeaderY, springConfig);
  const headerOpacity = useSpring(rawHeaderOpacity, springConfig);

  // 2. Left Column (25 Years + Refinery Plant Image)
  // Image glides upward from below and subtle scale expansion inside view
  const rawLeftY = useTransform(scrollYProgress, [0, 0.45, 0.85, 1], [130, 0, 0, -40]);
  const rawLeftScale = useTransform(scrollYProgress, [0, 0.45, 0.85, 1], [0.93, 1, 1, 0.96]);
  const rawPlantImageY = useTransform(scrollYProgress, [0, 1], [25, -25]); // Parallax inside frame
  const leftY = useSpring(rawLeftY, springConfig);
  const leftScale = useSpring(rawLeftScale, springConfig);
  const plantImageY = useSpring(rawPlantImageY, springConfig);

  // 3. Center Cards (01 & 02)
  // Staggered float up with subtle slide-in
  const rawCard1Y = useTransform(scrollYProgress, [0.05, 0.48, 0.88, 1], [110, 0, 0, -35]);
  const rawCard1Opacity = useTransform(scrollYProgress, [0.05, 0.35, 0.85, 1], [0.2, 1, 1, 0.4]);
  const rawCard2Y = useTransform(scrollYProgress, [0.1, 0.52, 0.9, 1], [140, 0, 0, -45]);
  const rawCard2Opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.88, 1], [0.2, 1, 1, 0.4]);

  const card1Y = useSpring(rawCard1Y, springConfig);
  const card1Opacity = useSpring(rawCard1Opacity, springConfig);
  const card2Y = useSpring(rawCard2Y, springConfig);
  const card2Opacity = useSpring(rawCard2Opacity, springConfig);

  // 4. Right Column (Tall Engineer Portrait Image)
  // Enters slowly from depth, image counter-parallaxes inside the viewport
  const rawRightY = useTransform(scrollYProgress, [0, 0.46, 0.86, 1], [150, 0, 0, -50]);
  const rawRightScale = useTransform(scrollYProgress, [0, 0.46, 0.86, 1], [0.94, 1, 1, 0.97]);
  const rawEngineerImageY = useTransform(scrollYProgress, [0, 1], [-25, 25]); // Smooth parallax depth
  const rightY = useSpring(rawRightY, springConfig);
  const rightScale = useSpring(rawRightScale, springConfig);
  const engineerImageY = useSpring(rawEngineerImageY, springConfig);

  if (!data) return null;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-12"
    >
      <div className="mx-auto w-full max-w-[1320px] px-4 md:px-6 lg:px-8">
        {/* Top Header Row — Smooth Scroll Tracking */}
        <motion.div
          style={shouldReduceMotion ? {} : { y: headerY, opacity: headerOpacity }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start mb-10 lg:mb-14 will-change-transform"
        >
          {/* Subtitle Tag */}
          <div className="lg:col-span-3 flex items-center gap-3 pt-2">
            <span className="h-[2px] w-8 bg-[#ff5500]" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--color-heading)]">
              {data.subtitle}
            </span>
          </div>

          {/* Main Headline */}
          <div className="lg:col-span-9">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.2] text-[var(--color-heading)] max-w-4xl">
              <span>{data.title}&nbsp;</span>
              <span className="text-[#ff5500]">
                {data.highlightedTitle?.replace(/\s*\.$/, '')}
                <span className="text-[#ffb703]">.</span>
              </span>
            </h2>
          </div>
        </motion.div>

        {/* 3-Column Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Experience Stat + Refinery Image */}
          <motion.div
            style={
              shouldReduceMotion
                ? {}
                : {
                    y: leftY,
                    scale: leftScale,
                  }
            }
            className="lg:col-span-4 flex flex-col justify-between space-y-6 will-change-transform"
          >
            {/* 25 Years of experience badge */}
            <div className="flex items-center gap-4 bg-white/70 dark:bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm transition-transform duration-500 hover:scale-[1.02]">
              <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#ff5500] leading-none tracking-tight">
                {data.experienceYears}
              </span>
              <span className="text-sm sm:text-base font-bold leading-tight text-[var(--color-heading)] whitespace-pre-line">
                {data.experienceLabel}
              </span>
            </div>

            {/* Refinery Plant Image with Parallax Depth */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group border border-gray-100 dark:border-white/10">
              {data.imagePlant && (
                <motion.div
                  style={shouldReduceMotion ? {} : { y: plantImageY, scale: 1.08 }}
                  className="relative w-full h-full will-change-transform"
                >
                  <Image
                    src={data.imagePlant}
                    alt={data.imagePlantAlt || 'Refinery Plant'}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </motion.div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </motion.div>

          {/* Center Column: Stacked Feature Cards (01 & 02) */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6 lg:space-y-8">
            {data.features.map((feature, idx) => {
              const cardMotionStyle = shouldReduceMotion
                ? {}
                : idx === 0
                ? { y: card1Y, opacity: card1Opacity }
                : { y: card2Y, opacity: card2Opacity };

              return (
                <motion.div
                  key={feature.id}
                  style={cardMotionStyle}
                  className="group relative flex items-start justify-between gap-4 p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-500 will-change-transform"
                >
                  {/* Number & Text Content */}
                  <div className="flex-1 pr-2">
                    <div className="flex items-baseline gap-3 mb-2">
                      {feature.number && (
                        <span className="text-sm sm:text-base font-bold text-gray-400 group-hover:text-[#ff5500] transition-colors duration-300">
                          {feature.number}
                        </span>
                      )}
                      <h3 className="text-base sm:text-lg font-bold leading-snug text-[var(--color-heading)] whitespace-pre-line">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-[var(--color-text-light)]">
                      {feature.description}
                    </p>
                  </div>

                  {/* Illustrated Outline Icon Container */}
                  <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-orange-50/60 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/30 flex items-center justify-center p-2.5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2">
                    {feature.icon === 'engineer' ? (
                      <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        className="w-full h-full text-[#0a2540] stroke-current"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {/* Hard Hat */}
                        <path
                          d="M18 28c0-8 6-14 14-14s14 6 14 14H18z"
                          stroke="#ff5500"
                          strokeWidth="2.5"
                          fill="none"
                        />
                        <path
                          d="M14 28h36v3H14z"
                          stroke="#ff5500"
                          strokeWidth="2.5"
                          fill="#ff5500"
                          fillOpacity="0.15"
                        />
                        <line x1="32" y1="14" x2="32" y2="28" stroke="#ff5500" strokeWidth="2" />
                        {/* Face */}
                        <path d="M22 31v6c0 5.5 4.5 10 10 10s10-4.5 10-10v-6" />
                        {/* Glasses */}
                        <rect x="23" y="34" width="7" height="4" rx="1.5" />
                        <rect x="34" y="34" width="7" height="4" rx="1.5" />
                        <line x1="30" y1="36" x2="34" y2="36" />
                        {/* Collar & Safety Vest */}
                        <path d="M26 47l-8 11h28l-8-11" stroke="#ff5500" strokeWidth="2" />
                        <line x1="32" y1="47" x2="32" y2="58" />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        className="w-full h-full text-[#0a2540] stroke-current"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {/* Oil Pumpjack Rig */}
                        <line x1="10" y1="56" x2="54" y2="56" strokeWidth="3" />
                        <line x1="36" y1="56" x2="42" y2="28" />
                        <line x1="48" y1="56" x2="42" y2="28" />
                        <line x1="39" y1="42" x2="45" y2="42" stroke="#ff5500" />
                        {/* Walking Beam */}
                        <line x1="20" y1="36" x2="54" y2="20" strokeWidth="2.8" stroke="#ff5500" />
                        {/* Horse Head */}
                        <path
                          d="M16 40c2-6 5-10 8-12l-4-4c-5 3-7 10-4 16z"
                          fill="#ff5500"
                          fillOpacity="0.2"
                          stroke="#ff5500"
                          strokeWidth="2"
                        />
                        {/* Polished Rod / Wellhead */}
                        <line x1="16" y1="40" x2="16" y2="56" strokeWidth="2" />
                        <rect x="12" y="50" width="8" height="6" rx="1" />
                        {/* Counterweight & Crank */}
                        <circle cx="50" cy="44" r="5" stroke="#ff5500" />
                        <line x1="50" y1="44" x2="52" y2="21" strokeDasharray="2 2" />
                      </svg>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Tall Engineer Tablet Portrait Image */}
          <motion.div
            style={
              shouldReduceMotion
                ? {}
                : {
                    y: rightY,
                    scale: rightScale,
                  }
            }
            className="h-full min-h-[300px] will-change-transform sm:min-h-[380px] md:col-span-2 lg:col-span-4 lg:min-h-full"
          >
            <div className="group relative h-full min-h-[300px] w-full overflow-hidden rounded-2xl border border-gray-100 shadow-xl dark:border-white/10 sm:min-h-[380px]">
              {data.imageEngineer && (
                <motion.div
                  style={shouldReduceMotion ? {} : { y: engineerImageY, scale: 1.1 }}
                  className="relative w-full h-full will-change-transform"
                >
                  <Image
                    src={data.imageEngineer}
                    alt={data.imageEngineerAlt || 'Industrial Engineer'}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                  />
                </motion.div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
