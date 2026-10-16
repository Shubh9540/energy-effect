'use client';
import React from 'react';
import Link from 'next/link';
import { TopBarProps } from '@/types/templates.types';
import { FaChartLine, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaChartLine': return <FaChartLine />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    case 'FaYoutube': return <FaYoutube />;
    default: return null;
  }
};

export const TopBar = ({ data }: TopBarProps) => {
  if (!data) return null;

  return (
    <div className="relative z-[60] hidden h-10 w-full bg-[var(--color-primary-dark)] text-[var(--color-on-primary)] lg:block">
      <div className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-between px-6 xl:px-8">
        <div className="flex items-center gap-2 text-[12px] font-medium text-[var(--color-on-primary)]/90">
          <span className="text-[15px] text-[var(--color-on-primary)]">{renderIcon(data.taglineIcon)}</span>
          <span>{data.tagline}</span>
        </div>

        <div className="flex h-full items-center text-[12px] text-[var(--color-on-primary)]/90">
          <a href={`tel:${data.phoneValue.replace(/\s+/g, '')}`} className="flex items-center gap-2 transition-colors hover:text-[var(--color-accent-light)]">
            <FiPhone className="text-[15px] text-[var(--color-on-primary)]" />
            <span>{data.phoneValue}</span>
          </a>

          <span className="mx-4 h-4 w-px bg-[var(--color-accent)]/70" />

          <a href={`mailto:${data.emailValue}`} className="flex items-center gap-2 transition-colors hover:text-[var(--color-accent-light)]">
            <FiMail className="text-[15px] text-[var(--color-on-primary)]" />
            <span>{data.emailValue}</span>
          </a>

          <span className="mx-4 h-4 w-px bg-[var(--color-accent)]/70" />

          <div className="flex items-center gap-2">
            <FiMapPin className="text-[15px] text-[var(--color-on-primary)]" />
            <span>{data.locationValue}</span>
          </div>

          <span className="mx-4 h-4 w-px bg-[var(--color-accent)]/70" />

          <div className="flex items-center gap-4">
            {data.socialLinks?.map((social) => (
              <Link
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.icon}
                className="text-[13px] text-[var(--color-on-primary)] transition-colors hover:text-[var(--color-accent-light)]"
              >
                {renderIcon(social.icon)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
