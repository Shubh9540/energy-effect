'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderProps } from '@/types/templates.types';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaArrowRight':
      return <FaArrowRight className="text-sm" />;
    default:
      return null;
  }
};

export const Header = ({ data }: HeaderProps) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!data) return null;

  const navLinks = [...(data.navLinksLeft || []), ...(data.navLinksRight || [])];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-3 shadow-[0_2px_12px_var(--color-shadow-soft)] sm:px-5 lg:px-6 xl:px-8">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 xl:gap-6">
        <div className="flex shrink-0 items-center gap-5">
          <Link href={data.logoUrl} aria-label={data.logoAlt} className="flex shrink-0 items-center">
            <Image
              src={data.logo}
              alt={data.logoAlt}
              width={2171}
              height={724}
              sizes="(min-width: 1024px) 168px, (min-width: 640px) 144px, 120px"
              className="h-9 w-auto object-contain sm:h-11 lg:h-10 xl:h-14"
            />
          </Link>
          <span className="hidden h-10 w-px bg-[var(--color-border)] lg:block" aria-hidden="true" />
        </div>

        {/* Desktop Navigation */}
        <nav aria-label={data.navigationLabel} className="hidden min-w-0 flex-1 items-center justify-center gap-2 lg:flex xl:gap-5">
          {navLinks.map((link) => {
            const isActive =
              link.url === '/' ? pathname === '/' : pathname === link.url || pathname.startsWith(`${link.url}/`);

            return (
              <div key={link.id} className="relative flex flex-col items-center">
                <Link
                  href={link.url}
                  className={`flex items-center whitespace-nowrap text-xs font-semibold transition-colors duration-200 xl:text-[13px] ${
                    isActive
                      ? 'text-[var(--color-accent)]'
                      : 'text-[var(--color-primary)] hover:text-[var(--color-accent)]'
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
                {isActive && (
                  <span className="absolute -bottom-5 h-0.5 w-full bg-[var(--color-accent)]" />
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href={data.contactButton.url}
            aria-label={data.contactButton.text}
            className="hidden h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-on-accent)] shadow-[0_4px_20px_var(--color-accent-shadow)] transition-colors hover:bg-[var(--color-accent-light)] lg:flex xl:hidden"
          >
            {renderIcon(data.contactButton.icon)}
          </Link>
          <Link
            href={data.contactButton.url}
            className="hidden items-center gap-3 rounded-full bg-[var(--color-accent)] py-2 pl-5 pr-2 text-sm font-bold text-[var(--color-on-accent)] shadow-[0_4px_20px_var(--color-accent-shadow)] transition-colors duration-300 hover:bg-[var(--color-accent-light)] xl:inline-flex"
          >
            <span className="tracking-wide">{data.contactButton.text}</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-on-primary)] text-[var(--color-accent)] shadow-sm">
              {renderIcon(data.contactButton.icon)}
            </span>
          </Link>

          <button
            type="button"
            aria-label={mobileMenuOpen ? data.closeMenuLabel : data.openMenuLabel}
            aria-controls="mobile-navigation"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-alt)] text-lg text-[var(--color-primary)] shadow-sm transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] lg:hidden"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label={data.navigationLabel}
          className="mx-auto mt-3 flex w-full max-w-[1280px] flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 shadow-2xl lg:hidden"
        >
          {navLinks.map((link) => {
            const isActive =
              link.url === '/' ? pathname === '/' : pathname === link.url || pathname.startsWith(`${link.url}/`);

            return (
              <Link
                key={link.id}
                href={link.url}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between border-b border-[var(--color-border)] px-3 py-3.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-[var(--color-accent)]'
                    : 'text-[var(--color-primary)] hover:text-[var(--color-accent)]'
                }`}
              >
                <span>{link.label}</span>
              </Link>
            );
          })}
          <Link
            href={data.contactButton.url}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 flex items-center justify-between rounded-full bg-[var(--color-accent)] py-2.5 pl-6 pr-2 text-base font-bold text-[var(--color-on-accent)] shadow-md"
          >
            <span>{data.contactButton.text}</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-on-primary)] text-[var(--color-accent)] shadow-sm">
              {renderIcon(data.contactButton.icon)}
            </span>
          </Link>
        </nav>
      )}
    </header>
  );
};
