'use client';

import React, { useState } from 'react';
import {
  FaArrowRight,
  FaBuilding,
  FaCog,
  FaEnvelope,
  FaListUl,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegCommentDots,
  FaRegFileAlt,
  FaRegUser,
} from 'react-icons/fa';
import { EnquirySectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaArrowRight': return <FaArrowRight />;
    case 'FaBuilding': return <FaBuilding />;
    case 'FaCog': return <FaCog />;
    case 'FaEnvelope': return <FaEnvelope />;
    case 'FaListUl': return <FaListUl />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
    case 'FaPhoneAlt': return <FaPhoneAlt />;
    case 'FaRegCommentDots': return <FaRegCommentDots />;
    case 'FaRegFileAlt': return <FaRegFileAlt />;
    case 'FaRegUser': return <FaRegUser />;
    default: return null;
  }
};

export const EnquirySection = ({ data }: EnquirySectionProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1240px] px-4 py-8 text-center md:px-6 lg:px-8 lg:py-12">
        <h2 className="text-3xl font-extrabold leading-tight text-[#002e5d] sm:text-4xl lg:text-5xl">
          {data.intro.title1}
          <span className="block text-[#ff5a00]">
            {data.intro.titleHighlight} <span className="text-[#002e5d]">{data.intro.title2}</span>
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#5b6f88] md:text-lg">
          {data.intro.description}
        </p>
      </div>

      <div
        className="relative overflow-hidden bg-cover bg-center px-4 py-8 md:px-6 lg:px-8 lg:py-12"
        style={{ backgroundImage: `url(${data.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-white/85" aria-hidden="true" />
        <span className="absolute -left-8 bottom-20 text-8xl text-[#002e5d]/10" aria-hidden="true">
          {renderIcon(data.form.icons.decorative)}
        </span>
        <span className="absolute -right-10 top-20 text-9xl text-[#002e5d]/10" aria-hidden="true">
          {renderIcon(data.form.icons.decorative)}
        </span>
        <span className="absolute -right-8 bottom-10 text-8xl text-[#002e5d]/10" aria-hidden="true">
          {renderIcon(data.form.icons.decorative)}
        </span>

        <div className="relative mx-auto max-w-[1000px] rounded-2xl border border-[#dce5ee] bg-white/95 p-4 shadow-[0_10px_35px_rgba(0,46,93,0.06)] sm:p-6 lg:p-8">
          <div className="flex items-center justify-center gap-3 text-sm font-bold uppercase text-[#002e5d]">
            <span className="h-[3px] w-10 bg-[#ff5a00]" aria-hidden="true" />
            <p>{data.form.eyebrow}</p>
          </div>
          <h3 className="mt-5 text-center text-3xl font-extrabold leading-tight text-[#002e5d] sm:text-4xl lg:text-5xl">
            {data.form.title}
          </h3>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm leading-6 text-[#5b6f88] sm:text-base">
            {data.form.description}
          </p>

          <form
            className="mt-8 space-y-4"
            onChange={() => setSubmitted(false)}
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
              event.currentTarget.reset();
            }}
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="flex items-center gap-4 rounded-lg border border-[#cfdae5] bg-white px-4 py-4 focus-within:border-[#ff5a00]">
                <span className="shrink-0 text-lg text-[#24496e]" aria-hidden="true">{renderIcon(data.form.icons.name)}</span>
                <input name="name" type="text" required aria-label={data.form.namePlaceholder} placeholder={data.form.namePlaceholder} className="min-w-0 flex-1 bg-transparent text-sm text-[#002e5d] outline-none placeholder:text-[#5b6f88] sm:text-base" />
              </label>
              <label className="flex items-center gap-4 rounded-lg border border-[#cfdae5] bg-white px-4 py-4 focus-within:border-[#ff5a00]">
                <span className="shrink-0 text-lg text-[#24496e]" aria-hidden="true">{renderIcon(data.form.icons.email)}</span>
                <input name="email" type="email" required aria-label={data.form.emailPlaceholder} placeholder={data.form.emailPlaceholder} className="min-w-0 flex-1 bg-transparent text-sm text-[#002e5d] outline-none placeholder:text-[#5b6f88] sm:text-base" />
              </label>
              <label className="flex items-center gap-4 rounded-lg border border-[#cfdae5] bg-white px-4 py-4 focus-within:border-[#ff5a00]">
                <span className="shrink-0 text-lg text-[#24496e]" aria-hidden="true">{renderIcon(data.form.icons.phone)}</span>
                <input name="phone" type="tel" required aria-label={data.form.phonePlaceholder} placeholder={data.form.phonePlaceholder} className="min-w-0 flex-1 bg-transparent text-sm text-[#002e5d] outline-none placeholder:text-[#5b6f88] sm:text-base" />
              </label>
              <label className="flex items-center gap-4 rounded-lg border border-[#cfdae5] bg-white px-4 py-4 focus-within:border-[#ff5a00]">
                <span className="shrink-0 text-lg text-[#24496e]" aria-hidden="true">{renderIcon(data.form.icons.company)}</span>
                <input name="company" type="text" aria-label={data.form.companyPlaceholder} placeholder={data.form.companyPlaceholder} className="min-w-0 flex-1 bg-transparent text-sm text-[#002e5d] outline-none placeholder:text-[#5b6f88] sm:text-base" />
              </label>
              <label className="flex items-center gap-4 rounded-lg border border-[#cfdae5] bg-white px-4 py-4 focus-within:border-[#ff5a00]">
                <span className="shrink-0 text-lg text-[#24496e]" aria-hidden="true">{renderIcon(data.form.icons.enquiryType)}</span>
                <select name="enquiryType" required defaultValue="" aria-label={data.form.enquiryTypePlaceholder} className="min-w-0 flex-1 bg-transparent text-sm text-[#5b6f88] outline-none sm:text-base">
                  <option value="" disabled>{data.form.enquiryTypePlaceholder}</option>
                  {data.form.enquiryTypeOptions.map((option) => <option key={option.id} value={option.value}>{option.label}</option>)}
                </select>
              </label>
              <label className="flex items-center gap-4 rounded-lg border border-[#cfdae5] bg-white px-4 py-4 focus-within:border-[#ff5a00]">
                <span className="shrink-0 text-lg text-[#24496e]" aria-hidden="true">{renderIcon(data.form.icons.location)}</span>
                <input name="location" type="text" aria-label={data.form.locationPlaceholder} placeholder={data.form.locationPlaceholder} className="min-w-0 flex-1 bg-transparent text-sm text-[#002e5d] outline-none placeholder:text-[#5b6f88] sm:text-base" />
              </label>
            </div>

            <label className="flex items-center gap-4 rounded-lg border border-[#cfdae5] bg-white px-4 py-4 focus-within:border-[#ff5a00]">
              <span className="shrink-0 text-lg text-[#24496e]" aria-hidden="true">{renderIcon(data.form.icons.requirements)}</span>
              <select name="requirements" required defaultValue="" aria-label={data.form.requirementsPlaceholder} className="min-w-0 flex-1 bg-transparent text-sm text-[#5b6f88] outline-none sm:text-base">
                <option value="" disabled>{data.form.requirementsPlaceholder}</option>
                {data.form.requirementOptions.map((option) => <option key={option.id} value={option.value}>{option.label}</option>)}
              </select>
            </label>

            <label className="flex items-start gap-4 rounded-lg border border-[#cfdae5] bg-white px-4 py-4 focus-within:border-[#ff5a00]">
              <span className="mt-1 shrink-0 text-lg text-[#24496e]" aria-hidden="true">{renderIcon(data.form.icons.message)}</span>
              <textarea name="message" required rows={5} aria-label={data.form.messagePlaceholder} placeholder={data.form.messagePlaceholder} className="min-w-0 flex-1 resize-none bg-transparent text-sm text-[#002e5d] outline-none placeholder:text-[#5b6f88] sm:text-base" />
            </label>

            <div className="flex justify-center pt-3">
              <button type="submit" className="flex w-full max-w-xs items-center justify-center gap-5 rounded-full bg-[#ff5a00] px-6 py-3 text-base font-bold text-white transition-colors hover:bg-[#e95000] sm:w-auto sm:min-w-[300px] sm:text-lg">
                <span>{data.form.buttonText}</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-[#ff5a00]" aria-hidden="true">
                  {renderIcon(data.form.icons.button)}
                </span>
              </button>
            </div>

            {submitted && (
              <p role="status" className="rounded-lg border border-[#ffd0b7] bg-[#fff4ed] px-4 py-3 text-center text-sm font-semibold text-[#002e5d]">
                {data.form.successMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
