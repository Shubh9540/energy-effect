'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { TestimonialCardItemProps, TestimonialsSectionProps } from '@/types/templates.types';

const TestimonialCardItem = ({
  item,
  index,
  total,
  cardBackground,
  stackMotion,
}: TestimonialCardItemProps) => {
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start center'],
  });

  // Smooth card entry from bottom to top as you scroll to each card
  const rawY = useTransform(scrollYProgress, [0, 1], [index === 0 ? 0 : stackMotion.entryTravel, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 1], [index === 0 ? 1 : 0.96, 1]);

  const smoothY = useSpring(rawY, { stiffness: 70, damping: 24, mass: 0.5 });
  const smoothScale = useSpring(rawScale, { stiffness: 70, damping: 24, mass: 0.5 });
  const stackLayer = Math.min(index, stackMotion.visibleLayers - 1);

  return (
    <motion.div
      ref={cardRef}
      style={{
        top: `${stackMotion.stickyTop + stackLayer * stackMotion.layerOffset}px`,
        zIndex: index + 1,
        ...(shouldReduceMotion || index === 0
          ? {}
          : {
              y: smoothY,
              scale: smoothScale,
            }),
      }}
      className={`relative w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 shadow-lg transition-shadow duration-300 hover:shadow-2xl sm:p-6 lg:sticky lg:p-8 ${
        index < total - 1 ? 'mb-6 sm:mb-8 lg:mb-32' : 'mb-4 sm:mb-6 lg:mb-20'
      }`}
    >
      {/* Subtle industrial background watermark */}
      {cardBackground && (
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-1/2 opacity-[0.07] transition-opacity duration-300 group-hover:opacity-[0.12]">
          <Image
            src={cardBackground}
            alt=""
            fill
            sizes="400px"
            className="object-cover object-right"
          />
        </div>
      )}

      {/* Quote Mark */}
      <div
        className="relative text-5xl font-black leading-none text-[#ff8b57]/45 sm:text-6xl"
        aria-hidden="true"
      >
        “
      </div>

      {/* Quote Text */}
      <p className="relative mt-3 text-base leading-relaxed text-[var(--color-primary)] sm:text-lg sm:leading-8">
        {item.quote}
      </p>

      {/* Rating Stars */}
      <div className="relative mt-5 flex items-center gap-1.5 text-amber-500">
        {Array.from({ length: item.rating || 5 }).map((_, starIndex) => (
          <FaStar key={starIndex} className="text-base sm:text-lg" />
        ))}
      </div>

      {/* Author Details */}
      <div className="relative mt-6 flex items-center gap-4 border-t border-[var(--color-border)]/50 pt-5">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-[var(--color-accent)] shadow-sm sm:h-14 sm:w-14">
          <Image
            src={item.avatar}
            alt={item.imageAlt || item.name}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-base font-bold text-[var(--color-primary)] sm:text-lg">
            {item.name}
          </h3>
          <p className="text-xs text-[var(--color-text-light)] sm:text-sm">
            {item.role ? `${item.role}` : item.location}
            {item.company ? ` • ${item.company}` : ''}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const TestimonialSection = ({ data }: TestimonialsSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (!data?.testimonials?.length) return null;

  return (
    <section className="relative w-full bg-[var(--color-bg-main)] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12 xl:gap-16">
        
        {/* Left Fixed / Sticky Title Block */}
        <div className="lg:sticky lg:top-32 lg:pt-4">
          <motion.div
            initial={false}
            whileInView={
              shouldReduceMotion
                ? { opacity: 1, x: 0 }
                : { opacity: [0, 1], x: [-60, 0] }
            }
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Orange Tag Badge */}
            <div className="flex items-center gap-2">
              <span className="h-[3px] w-7 rounded-full bg-[var(--color-accent)]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] sm:text-sm">
                {data.subtitle}
              </span>
            </div>

            {/* Sticky Main Heading */}
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              <span className="block">{data.title1}</span>
              <span className="block text-[var(--color-accent)]">{data.highlightedTitle}</span>
              {data.title2 && <span className="block">{data.title2}</span>}
            </h2>
          </motion.div>
        </div>

        {/* Right Scrolling Stacking Cards Column */}
        <div className="relative w-full">
          {data.testimonials.map((item, index) => (
            <TestimonialCardItem
              key={item.id}
              item={item}
              index={index}
              total={data.testimonials.length}
              cardBackground={data.cardBackground}
              stackMotion={data.stackMotion}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
