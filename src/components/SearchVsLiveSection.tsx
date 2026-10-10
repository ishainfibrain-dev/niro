"use client";

import React from "react";
import Image from "next/image";
import { useI18n } from "@/i18n/language";

export default function SearchVsLiveSection() {
  const { lang, t } = useI18n();
  const listItems = [
    { title: t.people.items[0], icon: "/images/icon-shop.png", alt: "Business storefront", width: 36, height: 36 },
    { title: t.people.items[1], icon: "/images/icon-current-promotions.png", alt: "Current promotions tag", width: 36, height: 36 },
    { title: t.people.items[2], icon: "/images/icon-offer-badge.png", alt: "Offer badge", width: 31, height: 31 },
    { title: t.people.items[3], icon: "/images/clarity_map-marker-line.png", alt: "Location marker", width: 36, height: 36 },
    { title: t.people.items[4], icon: "/images/icon-bell.png", alt: "Notification bell", width: 30, height: 30 },
  ];

  return (
    <section id="for-people" className="niro-search-vs-live-section">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="niro-people-layout grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Description, Comparison Boxes */}
          <div className="flex flex-col items-start text-left reveal-on-scroll reveal-left">
            <h2 className="heading-write reveal-on-scroll text-white font-[800] text-[32px] sm:text-[38px] md:text-[42px] leading-[42px] sm:leading-[48px] md:leading-[54px] tracking-tight">
              {t.people.lines.map((line, index) => (
                <span key={line} className={`heading-line${index > 0 ? " mt-1" : ""}`}>
                  {line}
                </span>
              ))}
            </h2>

            <p className="mt-6 text-[#9CA3AF] text-[16px] sm:text-[18px] leading-[28px] max-w-xl">
              {t.people.intro}
            </p>

            <div className={`niro-people-compare reveal-on-scroll delay-150${lang === "es" ? " niro-people-compare--spanish" : ""}`}>
              <div className="niro-people-compare-box">
                <span className="niro-people-compare-label">{t.people.instead}</span>
                <span className="niro-people-compare-quote">{t.people.insteadQuote}</span>
              </div>

              <div className="niro-people-compare-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="#4DD7CB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="niro-people-compare-box niro-people-compare-box-live">
                <span className="niro-people-compare-label">{t.people.niro}</span>
                <span className="niro-people-compare-quote niro-people-compare-quote-live">{t.people.niroQuote}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 5 List items, text & Explore Niro button */}
          <div className="flex flex-col items-start w-full reveal-on-scroll reveal-right delay-200">
            <div className="w-full divide-y divide-white/[0.08]">
              {listItems.map((item, index) => (
                <div
                  key={index}
                  className="py-4.5 first:pt-0 flex items-center gap-4 group cursor-default hover:pl-2 transition-all duration-300"
                >
                  <div className="group-hover:scale-115 transition-transform duration-300"><Image src={item.icon} alt={item.alt} width={item.width} height={item.height} className="object-contain" /></div>
                  <span className="text-white font-[var(--font-inter)] text-[18px] leading-[24px] font-semibold tracking-normal group-hover:text-[#4DD7CB] transition-colors">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-9 text-[#9CA3AF] text-[15px] leading-[24px]">
              {t.people.closing}
            </p>

            <button
              type="button"
              className="mt-6 inline-flex items-center justify-center rounded-full text-white font-semibold text-[20px] shadow-[0_4px_24px_rgba(7,67,252,0.4)] hover:shadow-[0_6px_32px_rgba(44,175,228,0.6)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              style={{
                width: "266px",
                height: "66px",
                backgroundImage: "linear-gradient(90deg, #0B43FF 0%, #2CAFE4 100%)",
              }}
            >
              {t.people.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
