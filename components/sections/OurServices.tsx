'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { OurServicesSectionProps, ServiceCardProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaArrowRight':
      return <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />;
    default:
      return null;
  }
};

const ServiceCard = ({
  item,
  isOffset,
  delayIndex,
  scrollMotion,
}: ServiceCardProps) => {
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 0.42, 1], [scrollMotion.travel + delayIndex * 8, 0, -25]);
  const rotate = useTransform(scrollYProgress, [0, 0.42, 1], [isOffset ? 5 : -5, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.42], [0.88, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 0.55, 1], [scrollMotion.imageScale, 1.04, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%']);
  const clipPath = useTransform(scrollYProgress, [0, 0.4], ['inset(12% 8% 12% 8% round 32px)', 'inset(0% 0% 0% 0% round 16px)']);
  const textY = useTransform(scrollYProgress, [0.12, 0.48], [40, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={shouldReduceMotion ? {} : { y, rotate, scale, clipPath }}
      className="w-full will-change-transform"
    >
      <Link
        href={item.linkUrl}
        className="group relative block aspect-[16/10] w-full overflow-hidden rounded-xl shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:rounded-2xl"
      >
        <motion.div style={shouldReduceMotion ? {} : { scale: imageScale, y: imageY }} className="absolute -inset-6">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1024px) 620px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/90 via-[var(--color-primary-dark)]/25 to-transparent" />
        <motion.div style={shouldReduceMotion ? {} : { y: textY }} className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
          <h3 className="text-xl font-bold tracking-tight text-[var(--color-on-primary)] transition-colors duration-300 group-hover:text-[var(--color-accent-light)] sm:text-2xl lg:text-3xl">
            {item.title}
          </h3>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export const OurServices = ({ data, hideButton = false }: OurServicesSectionProps) => {
  const shouldReduceMotion = useReducedMotion();
  const headingRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: headingRef, offset: ['start end', 'end center'] });
  const headingY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const headingClip = useTransform(scrollYProgress, [0, 0.9], ['inset(0 0 60% 0)', 'inset(0 0 0% 0)']);

  if (!data) return null;

  const leftServices = data.services.filter((_, index) => index % 2 === 0);
  const rightServices = data.services.filter((_, index) => index % 2 === 1);

  return (
    <section data-site-motion-ignore className="relative w-full overflow-hidden bg-[var(--color-bg-main)] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* Header Section */}
        <div ref={headingRef} className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            style={shouldReduceMotion ? {} : { y: headingY, clipPath: headingClip }}
            initial={false}
            whileInView={
              shouldReduceMotion
                ? { opacity: 1, x: 0 }
                : { x: [-40, 0] }
            }
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[760px]"
          >
            {/* Subtitle tag */}
            <div className="flex items-center gap-2">
              <span className="h-[3px] w-7 rounded-full bg-[var(--color-accent)]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] sm:text-sm">
                {data.subtitle}
              </span>
            </div>

            {/* Main Heading (Left to Right animated) */}
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--color-primary)] sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.12]">
              {data.titleLine1}{' '}
              <span className="text-[var(--color-accent)]">{data.highlightedTitle}</span>
            </h2>

            {/* Description with border left bar */}
            <p className="mt-4 border-l-2 border-[var(--color-border)] pl-4 text-sm leading-relaxed text-[var(--color-text-light)] sm:text-base">
              {data.description}
            </p>
          </motion.div>

          {/* Right CTA Button */}
          {data.button && !hideButton && (
            <motion.div
              initial={false}
              whileInView={
                shouldReduceMotion
                  ? { opacity: 1, x: 0 }
                  : { x: [40, 0] }
              }
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="shrink-0"
            >
              <Link
                href={data.button.url}
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)] bg-transparent px-6 py-2.5 text-sm font-bold text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-on-accent)]"
              >
                <span>{data.button.text}</span>
                <span className="text-[var(--color-accent)] transition-colors duration-300 group-hover:text-[var(--color-on-accent)]">
                  {renderIcon(data.button.icon)}
                </span>
              </Link>
            </motion.div>
          )}
        </div>

        {/* Staggered Alternating Waterfall Flow with Balanced Responsive Gaps */}
        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-0 lg:gap-x-20">
          {/* Left Column (Items 1 and 3) */}
          <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-24">
            {leftServices.map((item, index) => (
              <ServiceCard
                key={item.id}
                item={item}
                isOffset={false}
                delayIndex={index * 2}
                scrollMotion={data.scrollMotion}
              />
            ))}
          </div>

          {/* Right Column (Items 2 and 4) */}
          <div className="flex flex-col gap-8 sm:gap-12 md:mt-20 md:gap-16 lg:mt-28 lg:gap-24">
            {rightServices.map((item, index) => (
              <ServiceCard
                key={item.id}
                item={item}
                isOffset={true}
                delayIndex={index * 2 + 1}
                scrollMotion={data.scrollMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
