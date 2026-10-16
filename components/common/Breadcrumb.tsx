'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import { BreadcrumbProps } from '@/types/templates.types';

export const Breadcrumb = ({ data }: BreadcrumbProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (!data) return null;

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col justify-between gap-6 md:flex-row md:items-end">
        {/* Left Side: Page Title (Slow Smooth Visible Glide from Left to Right) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -140 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="min-w-0"
        >
          <h1 className="text-3xl font-extrabold tracking-tight text-[#1c2430] sm:text-4xl md:text-5xl lg:text-6xl lg:leading-tight">
            {data.title}
          </h1>
        </motion.div>

        {/* Right Side: Breadcrumb Trail (Slow Smooth Visible Glide from Right to Left) */}
        {data.paths && data.paths.length > 0 && (
          <motion.nav
            aria-label="Breadcrumb"
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 140 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="shrink-0"
          >
            <ol className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-semibold">
              {data.paths.map((path, index) => {
                const isLast = index === data.paths.length - 1;

                return (
                  <li key={path.id || `${path.label}-${index}`} className="flex items-center gap-2">
                    {path.url && !isLast ? (
                      <Link
                        href={path.url}
                        className="text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-light)]"
                      >
                        {path.label}
                      </Link>
                    ) : (
                      <span className="text-[#4f5f6d] font-medium">
                        {path.label}
                      </span>
                    )}

                    {!isLast && (
                      <span className="text-xs text-[var(--color-accent)]" aria-hidden="true">
                        <FaChevronRight className="text-[10px]" />
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </motion.nav>
        )}
      </div>
    </section>
  );
};
