'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { AboutRevealProps, AboutUsSectionProps } from '@/types/templates.types';

// Each reveal measures its own untransformed wrapper, including on stacked mobile layouts.
const AboutReveal = ({ children, settings, step = 0, image = false }: AboutRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 95%', 'start 35%'] });
  const progress = useSpring(scrollYProgress, { stiffness: settings.stiffness, damping: settings.damping, mass: 1 });
  const start = Math.min(step * settings.stagger, 0.3);
  const y = useTransform(progress, [start, 1], [settings.travel, 0]);
  const clipPath = useTransform(progress, [start, 1], image
    ? ['inset(0% 38% 0% 0% round 16px)', 'inset(0% 0% 0% 0% round 16px)']
    : ['inset(0% 0% 100% 0%)', 'inset(0% 0% 0% 0%)']);
  const rotate = useTransform(progress, [start, 1], [image ? -3 : 0, 0]);
  return (
    <div ref={ref}>
      <motion.div style={reduced ? {} : { y, clipPath, rotate }}>
        {children}
      </motion.div>
    </div>
  );
};

export const AboutUsSection = ({ data }: AboutUsSectionProps) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 45, damping: 24 });
  const imageScale = useTransform(smoothProgress, [0, 0.8], [data?.scrollMotion.imageScale ?? 1.18, 1]);
  const imageY = useTransform(smoothProgress, [0, 1], [18, -18]);
  const statsRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef(0);
  const [activeFieldsCount, setActiveFieldsCount] = useState(0);

  useEffect(() => {
    const statsElement = statsRef.current;

    if (!data || !statsElement) return;

    if (shouldReduceMotion) {
      setActiveFieldsCount(data.activeFieldsValue);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        window.cancelAnimationFrame(animationFrameRef.current);

        if (!entry.isIntersecting) {
          setActiveFieldsCount(0);
          return;
        }

        const startTime = performance.now();
        const duration = data.animationDuration * 1000;

        const updateCount = (currentTime: number) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          setActiveFieldsCount(Math.round(data.activeFieldsValue * easedProgress));

          if (progress < 1) {
            animationFrameRef.current = window.requestAnimationFrame(updateCount);
          }
        };

        animationFrameRef.current = window.requestAnimationFrame(updateCount);
      },
      { threshold: data.animationViewportAmount },
    );

    observer.observe(statsElement);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrameRef.current);
    };
  }, [data, shouldReduceMotion]);

  if (!data) return null;

  return (
    <section ref={sectionRef} data-site-motion-ignore className="w-full overflow-hidden bg-[var(--color-bg-main)] px-4 py-8 text-[var(--color-heading)] sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <div>
          <div>
            <AboutReveal settings={data.revealMotion}>
            <div className="flex items-center gap-3 text-sm font-semibold text-[var(--color-accent)]">
              <span className="h-0.5 w-7 bg-[var(--color-accent)]" aria-hidden="true" />
              <p>{data.subtitle}</p>
            </div>
            </AboutReveal>

            <h2 className="sr-only">{data.titleLine1} {data.highlightedTitle}</h2>
            <div aria-hidden="true" className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              <AboutReveal settings={data.revealMotion} step={1}>
                <span className="block text-[var(--color-heading)]">{data.titleLine1}</span>
              </AboutReveal>
              <AboutReveal settings={data.revealMotion} step={2}>
                <span className="mt-1 block text-[var(--color-accent)]">{data.highlightedTitle}</span>
              </AboutReveal>
            </div>
          </div>

          <div className="mt-10 lg:mt-32">
          <AboutReveal settings={data.revealMotion} image>
          <div className="rounded-2xl bg-[var(--color-bg-alt)] p-3 shadow-[0_18px_50px_var(--color-shadow-soft)]">
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-[var(--color-image-surface)]">
              <motion.div style={shouldReduceMotion ? {} : { scale: imageScale, y: imageY }} className="absolute -inset-8">
              <Image
                src={data.imageMain}
                alt={data.imageMainAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              </motion.div>
            </div>
          </div>
          </AboutReveal>
          </div>
        </div>

        <div
          className="self-start rounded-2xl bg-[var(--color-bg-alt)] p-6 shadow-[0_18px_50px_var(--color-shadow-soft)] sm:p-8 lg:mt-10 lg:p-10"
        >
          <AboutReveal settings={data.revealMotion} step={2}>
          <p className="text-base leading-8 text-[var(--color-text)] sm:text-lg">
            {data.description}
          </p>
          </AboutReveal>

          <div className="mt-8">
            <AboutReveal settings={data.revealMotion} step={2}>
            <h3 className="text-lg font-bold leading-7 text-[var(--color-heading)] sm:text-xl">
              {data.excellenceTitle}
            </h3>
            <span className="mt-3 block h-1 w-full max-w-sm bg-[var(--color-accent)]" aria-hidden="true" />
            </AboutReveal>
          </div>

          <ul className="mt-7 space-y-4">
            {data.checklist.map((item, index) => (
              <li
                key={item.id}
              >
                <AboutReveal settings={data.revealMotion} step={index}>
                <div className="flex items-center gap-3 text-sm leading-6 text-[var(--color-text)] sm:text-base">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm text-[var(--color-on-accent)]">
                  <FaCheck aria-hidden="true" />
                </span>
                <span>{item.text}</span>
                </div>
                </AboutReveal>
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-[var(--color-border)] pt-8">
          <AboutReveal settings={data.revealMotion} step={2}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-center">
            <div>
              <div className="flex -space-x-4">
                {data.expertImages.map((expert) => (
                  <div
                    key={expert.id}
                    className="relative h-14 w-14 overflow-hidden rounded-full border-4 border-[var(--color-bg-alt)] bg-[var(--color-image-surface)]"
                  >
                    <Image
                      src={expert.image}
                      alt={expert.imageAlt}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm font-medium text-[var(--color-text)]">{data.expertsLabel}</p>
            </div>

            <div ref={statsRef} className="sm:border-l sm:border-[var(--color-border)] sm:pl-6">
              <p className="text-5xl font-extrabold leading-none text-[var(--color-heading)]">
                {activeFieldsCount}{data.activeFieldsSuffix}
              </p>
              <p className="mt-2 text-xl font-bold text-[var(--color-heading)]">
                {data.activeFieldsLabel}
              </p>
            </div>
          </div>
          </AboutReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
