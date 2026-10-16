'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { OurBlogProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaArrowRight':
      return <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />;
    default:
      return null;
  }
};

export const OurBlog = ({ data }: OurBlogProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (!data?.posts?.length) return null;

  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-bg-main)] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* Header Block with Slow Smooth Slide-in Animation */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={false}
            whileInView={
              shouldReduceMotion
                ? { opacity: 1, x: 0 }
                : { opacity: [0, 1], x: [-80, 0] }
            }
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[760px]"
          >
            {/* Orange Tag Badge */}
            {data.subtitle && (
              <div className="flex items-center gap-2">
                <span className="h-[3px] w-7 rounded-full bg-[var(--color-accent)]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] sm:text-sm">
                  {data.subtitle}
                </span>
              </div>
            )}

            {/* Main Heading */}
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--color-primary)] sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.12]">
              {data.title}{' '}
              <span className="text-[var(--color-accent)]">{data.highlightedTitle}</span>
            </h2>

            {/* Description */}
            {data.description && (
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-light)] sm:text-base">
                {data.description}
              </p>
            )}
          </motion.div>

          {/* Right Button */}
          {data.button && (
            <motion.div
              initial={false}
              whileInView={
                shouldReduceMotion
                  ? { opacity: 1, x: 0 }
                  : { opacity: [0, 1], x: [50, 0] }
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

        {/* 3-Column Blog Cards Grid with Slow Smooth Float Animation */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-8">
          {data.posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={false}
              whileInView={
                shouldReduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: [0, 1], y: [110, 0] }
              }
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                duration: 1.4,
                delay: index * 0.22,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl will-change-transform"
            >
              {/* Card Image Wrapper with Date Badge */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Top-Left Date Badge matching screenshot */}
                <div className="absolute left-4 top-4 flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-white/95 text-center shadow-md backdrop-blur-sm">
                  <span className="text-lg font-black leading-none text-[var(--color-accent)]">
                    {post.day}
                  </span>
                  <span className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--color-primary)]">
                    {post.monthYear}
                  </span>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                {/* Category Pill Tag */}
                <div className="mb-3">
                  <span className="inline-block rounded-md bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-accent)]">
                    {post.category}
                  </span>
                </div>

                {/* Post Title */}
                <Link href={post.url} className="group/link">
                  <h3 className="text-lg font-bold leading-snug tracking-tight text-[var(--color-primary)] transition-colors duration-200 group-hover/link:text-[var(--color-accent)] sm:text-xl">
                    {post.title}
                  </h3>
                </Link>

                {/* Post Description */}
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[var(--color-text-light)]">
                  {post.description}
                </p>

                {/* Read More Link with Circle Arrow */}
                <div className="mt-auto pt-6">
                  <Link
                    href={post.url}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] transition-colors duration-200 group-hover:text-[var(--color-accent)]"
                  >
                    <span>{post.readMoreText || 'Read More'}</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent)] text-xs text-white transition-transform duration-300 group-hover:translate-x-1">
                      <FaArrowRight className="text-[10px]" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
