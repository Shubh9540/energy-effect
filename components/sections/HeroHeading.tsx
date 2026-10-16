'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { HeroHeadingProps, HeroScrollWordProps } from '@/types/templates.types';
import { HeroSection } from '@/components/sections/HeroSection';

const HeroScrollWord = ({ word, index, count, image, sequenceEnd, progress }: HeroScrollWordProps) => {
  const local = useTransform(progress, value => (value / sequenceEnd) * count - index);
  const visibility = useTransform(local, value => value >= 0 && value < 1 ? 'visible' : 'hidden');
  const scale = useTransform(local, [0, 0.2, 0.42, 1], [1.05, 1, 1, 0.42]);
  const y = useTransform(local, [0, 0.2, 0.42, 1], ['12%', '0%', '0%', '-20%']);
  const clipPath = useTransform(local, [0, 0.18], [index === 0 ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)', 'inset(0 0 0% 0)']);

  return (
    <motion.span
      aria-hidden="true"
      style={{ visibility, scale, y, clipPath, backgroundImage: `url(${image})`, fontSize: `min(36vh, ${Math.min(38, 155 / word.length)}vw)` }}
      className="absolute inset-0 flex items-center justify-center whitespace-nowrap bg-cover bg-center bg-clip-text font-extrabold leading-none tracking-[-0.055em] text-transparent will-change-transform"
    >
      {word}
    </motion.span>
  );
};

export const HeroHeading = ({ data, bannerData }: HeroHeadingProps) => {
  const sceneRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sceneRef, offset: ['start start', 'end end'] });
  const sequenceEnd = data?.wordSequenceEnd ?? 0.72;
  const bannerStart = data?.bannerRevealStart ?? 0.84;
  const sentenceVisibility = useTransform(scrollYProgress, value => value >= sequenceEnd ? 'visible' : 'hidden');
  const sentenceScale = useTransform(scrollYProgress, [sequenceEnd, bannerStart], [0.85, 1]);
  const bannerClip = useTransform(scrollYProgress, [bannerStart, 1], ['inset(49.9% 42% 49.9% 42% round 48px)', 'inset(0% 0% 0% 0% round 0px)']);
  const bannerVisibility = useTransform(scrollYProgress, value => value >= bannerStart ? 'visible' : 'hidden');
  const bannerScale = useTransform(scrollYProgress, [bannerStart, 1], [1, 1.12]);
  const bannerRotate = useTransform(scrollYProgress, [bannerStart, 1], [-5, 0]);

  if (!data) return null;

  const sentence = `${data.firstLine} ${data.secondLine}`;
  const words = sentence.trim().split(/\s+/);

  if (reducedMotion) {
    return (
      <section data-site-motion-ignore className="bg-white">
        <h1 style={{ backgroundImage: `url(${data.image})` }} className="bg-cover bg-center bg-clip-text px-4 py-8 text-center text-5xl font-extrabold leading-tight text-transparent md:text-8xl">{sentence}</h1>
        <HeroSection data={bannerData} />
      </section>
    );
  }

  return (
    <section ref={sceneRef} data-site-motion-ignore style={{ height: `${100 + words.length * data.scrollPerWord}svh` }} className="relative bg-white">
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-white">
        <h1 aria-label={sentence} className="absolute inset-0">
          {words.map((word, index) => (
            <HeroScrollWord key={`${word}-${index}`} word={word} index={index} count={words.length} image={data.image} sequenceEnd={sequenceEnd} progress={scrollYProgress} />
          ))}
        </h1>
        <motion.div aria-hidden="true" style={{ visibility: sentenceVisibility, scale: sentenceScale }} className="absolute inset-0 flex items-center justify-center px-4 md:px-8">
          <p style={{ backgroundImage: `url(${data.image})` }} className="max-w-[1400px] bg-cover bg-center bg-clip-text text-center text-[12vw] font-extrabold leading-[1.05] tracking-[-0.055em] text-transparent md:text-[10vw]">{sentence}</p>
        </motion.div>
        <motion.div style={{ clipPath: bannerClip, visibility: bannerVisibility }} className="absolute inset-0 z-10 overflow-hidden bg-[var(--color-primary-dark)]">
          <motion.div style={{ scale: bannerScale, rotate: bannerRotate }} className="h-full w-full">
            <HeroSection data={bannerData} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
