'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Springs for smooth trail effect on outer circle
  const mouseX = useSpring(0, { stiffness: 450, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 450, damping: 28 });

  // Faster spring for inner center dot
  const dotX = useSpring(0, { stiffness: 900, damping: 35 });
  const dotY = useSpring(0, { stiffness: 900, damping: 35 });

  useEffect(() => {
    // Disable on touch devices
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, input, textarea, select, [role="button"]');
      setIsHovered(Boolean(interactive));
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY, dotX, dotY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block">
      {/* Outer Circle Ring */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          borderColor: isHovered ? 'var(--color-accent)' : 'rgba(255, 100, 31, 0.65)',
          backgroundColor: isHovered ? 'rgba(255, 100, 31, 0.12)' : 'rgba(255, 100, 31, 0)',
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className="fixed left-0 top-0 h-9 w-9 rounded-full border border-[var(--color-accent)] pointer-events-none"
      />

      {/* Inner Center Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0.6 : 1,
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="fixed left-0 top-0 h-2 w-2 rounded-full bg-[var(--color-accent)] pointer-events-none"
      />
    </div>
  );
};
