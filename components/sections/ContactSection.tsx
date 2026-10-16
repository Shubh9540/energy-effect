'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowRight,
  FaCog,
  FaEnvelope,
  FaFacebookF,
  FaHardHat,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ContactSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaEnvelope': return <FaEnvelope aria-hidden="true" />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt aria-hidden="true" />;
    case 'FaPhoneAlt': return <FaPhoneAlt aria-hidden="true" />;
    case 'FaHardHat': return <FaHardHat aria-hidden="true" />;
    case 'FaCog': return <FaCog aria-hidden="true" />;
    case 'FaFacebookF': return <FaFacebookF aria-hidden="true" />;
    case 'FaXTwitter': return <FaXTwitter aria-hidden="true" />;
    case 'FaLinkedinIn': return <FaLinkedinIn aria-hidden="true" />;
    case 'FaInstagram': return <FaInstagram aria-hidden="true" />;
    case 'FaYoutube': return <FaYoutube aria-hidden="true" />;
    default: return null;
  }
};

export const ContactSection = ({ data }: ContactSectionProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  return (
    <section className="w-full bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.45fr] lg:items-stretch">
          <div className="flex flex-col justify-between">
            <div>
              <Image src={data.intro.logo} alt={data.intro.logoAlt} width={430} height={144} className="h-auto w-64 sm:w-72" />
              <div className="mt-5 flex items-center gap-3">
                <span className="h-0.5 w-10 bg-[var(--color-accent)]" aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary)] sm:text-sm">{data.intro.eyebrow}</p>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[var(--color-primary)] sm:text-4xl lg:text-[46px]">
                {data.intro.title1} {data.intro.titleHighlight} {data.intro.title2} <span className="text-[var(--color-accent)]">{data.intro.accentMark}</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-[var(--color-text)] sm:text-base">{data.intro.description}</p>
            </div>

            <div className="mt-7 flex items-end gap-4">
              <span
                className="bg-cover bg-center bg-clip-text text-7xl font-black leading-none text-transparent sm:text-8xl lg:text-9xl"
                style={{ backgroundImage: `url(${data.intro.experienceImage})` }}
              >
                {data.intro.experienceYears}
              </span>
              <span className="pb-2 text-5xl font-black leading-none text-[var(--color-accent)] sm:text-6xl">{data.intro.experienceSuffix}</span>
              <p className="max-w-24 pb-2 text-sm font-bold leading-tight text-[var(--color-primary)] sm:text-base">{data.intro.experienceLabel}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {data.contactCards.map((item) => (
              <article
                key={item.id}
                className={`relative min-h-52 overflow-hidden p-6 sm:p-7 ${
                  item.variant === 'accent'
                    ? 'bg-[#ffe27d] text-[var(--color-primary)]'
                    : item.variant === 'dark'
                      ? 'bg-[var(--color-primary)] text-[var(--color-on-primary)]'
                      : 'bg-[var(--color-bg-alt)] text-[var(--color-primary)]'
                }`}
              >
                {item.variant === 'dark' && (
                  <Image src={data.intro.experienceImage} alt="" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover opacity-20" aria-hidden="true" />
                )}
                <div className="relative z-10">
                  <div className="flex items-center gap-5">
                    <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-md text-2xl shadow-sm ${item.variant === 'dark' ? 'bg-white/10 text-white' : 'bg-white text-[var(--color-primary)]'}`}>
                      {renderIcon(item.icon)}
                    </span>
                    <h3 className={`text-xl font-extrabold sm:text-2xl ${item.variant === 'dark' ? 'text-white' : 'text-[var(--color-primary)]'}`}>{item.title}</h3>
                  </div>

                  {item.description && <p className="mt-5 max-w-xs text-sm leading-6 text-white/85">{item.description}</p>}

                  {item.url ? (
                    <Link href={item.url} className={`mt-6 block text-sm leading-6 transition-colors sm:text-base ${item.variant === 'dark' ? 'text-white/90 hover:text-[var(--color-accent-light)]' : 'text-[var(--color-text)] hover:text-[var(--color-accent)]'}`}>
                      {item.lines.map((line) => <span key={line.id} className="block">{line.text}</span>)}
                    </Link>
                  ) : (
                    <div className={`mt-6 text-sm leading-6 sm:text-base ${item.variant === 'dark' ? 'text-white/90' : 'text-[var(--color-text)]'}`}>
                      {item.lines.map((line) => <p key={line.id}>{line.text}</p>)}
                    </div>
                  )}

                  {item.socialLinks && (
                    <div className="mt-5 flex flex-wrap gap-3">
                      {item.socialLinks.map((social) => (
                        <Link key={social.id} href={social.url} aria-label={social.label} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm text-white transition-colors hover:bg-[var(--color-accent)]">
                          {renderIcon(social.icon)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-8 sm:px-8 lg:px-12 lg:py-12">
          <span className="pointer-events-none absolute -left-12 top-16 text-9xl text-[var(--color-border)]/40" aria-hidden="true">{renderIcon(data.form.decorativeIcon)}</span>
          <span className="pointer-events-none absolute -right-10 top-6 text-9xl text-[var(--color-border)]/40" aria-hidden="true">{renderIcon(data.form.decorativeIcon)}</span>
          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ffe27d] text-3xl text-[var(--color-primary)]">{renderIcon(data.form.icon)}</span>
              <h2 className="mt-4 text-3xl font-extrabold text-[var(--color-primary)] sm:text-4xl lg:text-5xl">{data.form.title}</h2>
              <span className="mx-auto mt-4 block h-0.5 w-16 bg-[var(--color-accent)]" aria-hidden="true" />
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-[var(--color-text)] sm:text-base">{data.form.description}</p>
            </div>

            <form
              className="mx-auto mt-8 max-w-4xl"
              onChange={() => setSubmitted(false)}
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
                event.currentTarget.reset();
              }}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-5 py-4 focus-within:border-[var(--color-accent)]">
                  <input name="name" type="text" required aria-label={data.form.fullNamePlaceholder} placeholder={data.form.fullNamePlaceholder} className="w-full bg-transparent text-sm text-[var(--color-primary)] outline-none placeholder:text-[var(--color-text-light)]" />
                </label>
                <label className="border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-5 py-4 focus-within:border-[var(--color-accent)]">
                  <input name="email" type="email" required aria-label={data.form.emailPlaceholder} placeholder={data.form.emailPlaceholder} className="w-full bg-transparent text-sm text-[var(--color-primary)] outline-none placeholder:text-[var(--color-text-light)]" />
                </label>
                <label className="border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-5 py-4 focus-within:border-[var(--color-accent)]">
                  <input name="phone" type="tel" required aria-label={data.form.phonePlaceholder} placeholder={data.form.phonePlaceholder} className="w-full bg-transparent text-sm text-[var(--color-primary)] outline-none placeholder:text-[var(--color-text-light)]" />
                </label>
                <label className="border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-5 py-4 focus-within:border-[var(--color-accent)]">
                  <input name="company" type="text" aria-label={data.form.companyPlaceholder} placeholder={data.form.companyPlaceholder} className="w-full bg-transparent text-sm text-[var(--color-primary)] outline-none placeholder:text-[var(--color-text-light)]" />
                </label>
                <label className="border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-5 py-4 focus-within:border-[var(--color-accent)]">
                  <select name="projectType" required defaultValue="" aria-label={data.form.projectTypePlaceholder} className="w-full bg-transparent text-sm text-[var(--color-text-light)] outline-none">
                    <option value="" disabled>{data.form.projectTypePlaceholder}</option>
                    {data.form.projectTypeOptions.map((option) => <option key={option.id} value={option.value}>{option.label}</option>)}
                  </select>
                </label>
                <label className="border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-5 py-4 focus-within:border-[var(--color-accent)]">
                  <select name="budgetRange" required defaultValue="" aria-label={data.form.budgetRangePlaceholder} className="w-full bg-transparent text-sm text-[var(--color-text-light)] outline-none">
                    <option value="" disabled>{data.form.budgetRangePlaceholder}</option>
                    {data.form.budgetRangeOptions.map((option) => <option key={option.id} value={option.value}>{option.label}</option>)}
                  </select>
                </label>
              </div>

              <label className="mt-4 block border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-5 py-4 focus-within:border-[var(--color-accent)]">
                <textarea name="message" required rows={5} aria-label={data.form.messagePlaceholder} placeholder={data.form.messagePlaceholder} className="w-full resize-none bg-transparent text-sm text-[var(--color-primary)] outline-none placeholder:text-[var(--color-text-light)]" />
              </label>

              <button type="submit" className="mx-auto mt-6 flex w-full items-center justify-center gap-4 rounded-full bg-[var(--color-accent)] py-2 pl-7 pr-2 text-base font-bold text-[var(--color-on-accent)] transition-colors hover:bg-[var(--color-accent-light)] sm:w-auto sm:text-lg">
                <span>{data.form.buttonText}</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--color-accent)]"><FaArrowRight aria-hidden="true" /></span>
              </button>

              {submitted && <p role="status" className="mx-auto mt-5 max-w-xl bg-[var(--color-accent-soft)] px-4 py-3 text-center text-sm font-semibold text-[var(--color-primary)]">{data.form.successMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
