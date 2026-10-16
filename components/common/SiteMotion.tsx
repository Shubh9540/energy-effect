'use client';

import { useEffect } from 'react';
import { SiteMotionProps } from '@/types/templates.types';

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const ease = (value: number) => 1 - Math.pow(1 - value, 3);

export const SiteMotion = ({ data }: SiteMotionProps) => {
  useEffect(() => {
    if (!data || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    let refreshFrame = 0;
    let stages: HTMLElement[] = [];
    const originalStyles = new Map<HTMLElement, string | null>();

    const remember = (element: HTMLElement) => {
      if (!originalStyles.has(element)) originalStyles.set(element, element.getAttribute('style'));
    };

    const refresh = () => {
      const roots = Array.from(document.querySelectorAll<HTMLElement>('main > section, main > footer'))
        .filter((root) => !root.hasAttribute('data-site-motion-ignore'));

      stages = roots.flatMap((root) => Array.from(root.children)
        .filter((child): child is HTMLElement => child instanceof HTMLElement && child.tagName !== 'STYLE'));

      stages.forEach(remember);
      schedule();
    };

    const progressFor = (element: HTMLElement, start = 0.92, distance = 0.72) => {
      const rect = element.getBoundingClientRect();
      return ease(clamp((window.innerHeight * start - rect.top) / (window.innerHeight * (distance + data.smoothing))));
    };

    const render = () => {
      frame = 0;

      stages.forEach((element, index) => {
        const progress = progressFor(element);
        const remaining = 1 - progress;
        const direction = index % 2 === 0 ? -1 : 1;
        element.style.transformOrigin = direction < 0 ? 'left center' : 'right center';
        element.style.transform = `perspective(${data.perspective}px) translate3d(${direction * remaining * data.sectionTravel}px, ${remaining * data.sectionTravel * 0.28}px, 0) rotateY(${direction * remaining * -4}deg) scale(${0.965 + progress * 0.035})`;
        element.style.clipPath = `inset(${remaining * 3}% ${remaining * 9}% ${remaining * 5}% ${remaining * 9}% round ${remaining * 28}px)`;
        element.style.willChange = 'transform, clip-path';
      });

    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const mutationObserver = new MutationObserver(() => {
      window.cancelAnimationFrame(refreshFrame);
      refreshFrame = window.requestAnimationFrame(refresh);
    });

    refresh();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.cancelAnimationFrame(refreshFrame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      mutationObserver.disconnect();
      originalStyles.forEach((style, element) => {
        if (style === null) element.removeAttribute('style');
        else element.setAttribute('style', style);
      });
    };
  }, [data]);

  return null;
};
