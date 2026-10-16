'use client';

import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export const SmoothScroll = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      lenisOptions: {
        lerp: 0.075,
        smoothWheel: true,
        syncTouch: false,
      },
    });

    return () => scroll.destroy();
  }, []);

  return null;
};
