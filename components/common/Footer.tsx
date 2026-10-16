import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from 'react-icons/fa';
import { FooterProps } from '@/types/templates.types';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF':
      return <FaFacebookF />;
    case 'FaLinkedinIn':
      return <FaLinkedinIn />;
    case 'FaInstagram':
      return <FaInstagram />;
    case 'FaYoutube':
      return <FaYoutube />;
    default:
      return null;
  }
};

const renderContactIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPhoneAlt':
      return <FaPhoneAlt className="text-base text-[var(--color-accent)]" />;
    case 'FaEnvelope':
      return <FaEnvelope className="text-base text-[var(--color-accent)]" />;
    case 'FaMapMarkerAlt':
      return <FaMapMarkerAlt className="text-base text-[var(--color-accent)]" />;
    default:
      return null;
  }
};

const renderLinkIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaChevronRight':
      return <FaChevronRight />;
    default:
      return null;
  }
};

const renderHighlightedTitle = (title: string) => {
  const parts = title.split(' ');
  if (parts.length < 2) {
    return <span className="text-[var(--color-on-primary)]">{title}</span>;
  }
  return (
    <>
      <span className="text-[var(--color-on-primary)]">{parts[0]} </span>
      <span className="text-[var(--color-accent)]">{parts.slice(1).join(' ')}</span>
    </>
  );
};

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  return (
    <footer className="relative overflow-hidden bg-[#071322] pb-0 pt-10 text-[var(--color-on-primary)] lg:pt-12">
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.3fr_auto_1.1fr_0.9fr] lg:gap-8">
          
          {/* Left Column: Brand Logo, About Information, Description, Copyright */}
          <div className="flex flex-col">
            <Link href={data.logoUrl} className="inline-block" aria-label={data.logoAlt}>
              <Image
                src={data.logo}
                alt={data.logoAlt}
                width={360}
                height={110}
                className="h-14 w-auto sm:h-16 lg:h-20 object-contain"
              />
            </Link>

            <h3 className="mt-8 text-xl font-bold tracking-tight text-white sm:text-2xl">
              About Information
            </h3>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/85 max-w-md">
              {data.description}
            </p>

            <p className="mt-8 text-xs sm:text-sm text-white/70">
              {data.copyrightText}
            </p>
          </div>

          {/* Vertical Divider Line for desktop */}
          <div className="hidden h-full min-h-[220px] w-px bg-white/15 lg:block" aria-hidden="true" />

          {/* Middle Column: Quick Contact with bright orange circle icons */}
          <div>
            <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              {data.contactTitle || 'Quick Contact'}
            </h3>

            <ul className="mt-6 space-y-5">
              {data.contactItems.map((item) => (
                <li key={item.id} className="flex items-center gap-4">
                  {/* Solid orange circular icon container */}
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-lg text-white shadow-md">
                    {item.icon === 'FaPhoneAlt' ? (
                      <FaPhoneAlt className="text-base text-white" />
                    ) : item.icon === 'FaEnvelope' ? (
                      <FaEnvelope className="text-base text-white" />
                    ) : (
                      <FaMapMarkerAlt className="text-base text-white" />
                    )}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-white/70">
                      {item.title}
                    </span>
                    {item.url ? (
                      <Link
                        href={item.url}
                        className="text-sm sm:text-base font-semibold text-white transition-colors hover:text-[var(--color-accent)]"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <span className="text-sm sm:text-base font-semibold text-white">
                        {item.value}
                      </span>
                    )}
                    {item.subtext && (
                      <span className="text-sm font-semibold text-white">
                        {item.subtext}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Our Company / Links */}
          <div className="lg:pl-6">
            <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Our Company
            </h3>

            <ul className="mt-6 space-y-3.5">
              {data.quickLinks.slice(0, 5).map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    className="group inline-flex items-center gap-2.5 text-sm sm:text-base font-medium text-white/90 transition-colors duration-200 hover:text-[var(--color-accent)]"
                  >
                    <span className="text-xs text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1">
                      <FaChevronRight className="text-[11px]" />
                    </span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Watermark text: Left-aligned with upper layout columns and slightly enlarged */}
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 select-none overflow-hidden pt-10 sm:pt-14 pb-4">
        <p className="font-black tracking-widest text-[#13233a] leading-none text-[48px] sm:text-[80px] md:text-[110px] lg:text-[145px] xl:text-[160px] m-0 p-0 text-left pointer-events-none">
          ENERGYPRO
        </p>
      </div>
    </footer>
  );
};
