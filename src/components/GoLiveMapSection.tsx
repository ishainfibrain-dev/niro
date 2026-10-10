"use client";

import React from "react";
import Image from "next/image";
import { useI18n } from "@/i18n/language";
import { useInquiry } from "@/components/InquiryProvider";

export default function GoLiveMapSection() {
  const { t } = useI18n();
  const { openInquiry } = useInquiry();
  const listItems = [
    { title: t.business.items[0], icon: "/images/icon-shop.png", alt: "Business storefront", width: 36, height: 36 },
    { title: t.business.items[1], icon: "/images/business-promotion-tag.png", alt: "Promotion tag", width: 32, height: 32 },
    { title: t.business.items[2], icon: "/images/business-offer-badge.png", alt: "Offer badge", width: 31, height: 31 },
    { title: t.business.items[3], icon: "/images/clarity_map-marker-line.png", alt: "Location marker", width: 24, height: 33 },
    { title: t.business.items[4], icon: "/images/icon-bell.png", alt: "Notification bell", width: 30, height: 30 },
  ];

  return (
    <section id="for-business" className="niro-go-live-section">
      <div className="max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="niro-phone-split phone-first grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-start">
          {/* Left Column: Phone Mockup (m3.png) */}
          <div className="flex justify-center items-center relative order-1 lg:order-1 reveal-on-scroll reveal-left delay-150">
            <div className="absolute w-[500px] h-[500px] bg-[#0743FC]/25 rounded-full blur-[130px] animate-ambient-glow pointer-events-none" />
            <div className="niro-phone-image-container relative flex justify-center animate-float">
              <Image
                src="/images/m3.png"
                alt="NIRO Map Listings and Exploration on Mobile"
                width={1024}
                height={1536}
                className="object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.85)]"
                priority
              />
            </div>
          </div>

          {/* Right Column: Heading, Subtitle, List & Button */}
          <div className="flex flex-col items-start text-left order-2 lg:order-2 lg:pt-11 reveal-on-scroll reveal-right">
            <h2 className="heading-write reveal-on-scroll text-white font-[800] text-[32px] sm:text-[38px] md:text-[42px] leading-[42px] sm:leading-[48px] md:leading-[54px] tracking-tight">
              <span className="heading-line">{t.business.line1}</span>
              <span className="heading-line mt-1">{t.business.line2}</span>
            </h2>

            <p className="mt-6 text-[#9CA3AF] text-[15px] leading-[23px] sm:text-[16px] sm:leading-[24px]">
              {t.business.introLine1}
              <br />
              {t.business.introLine2}
            </p>

            {/* 5 Features List */}
            <div className="mt-8 w-full divide-y divide-white/[0.08]">
              {listItems.map((item, index) => (
                <div
                  key={index}
                  className="py-4.5 first:pt-0 flex items-center gap-4 group cursor-default hover:pl-2 transition-all duration-300"
                >
                  <div className="group-hover:scale-115 transition-transform duration-300"><Image src={item.icon} alt={item.alt} width={item.width} height={item.height} className="object-contain" /></div>
                  <span className="text-white text-[16px] sm:text-[17px] font-medium tracking-tight group-hover:text-[#4DD7CB] transition-colors">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[#9CA3AF] text-[15px] leading-[24px]">
              {t.business.closing}
            </p>

            <button
              type="button"
              onClick={openInquiry}
              className="mt-6 inline-flex shrink-0 items-center justify-center rounded-full px-5 text-center text-[15.5px] font-semibold text-white shadow-[0_4px_10px_rgba(7,67,252,0.1)] hover:shadow-[0_6px_16px_rgba(7,67,252,0.2)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              style={{
                width: "389px",
                height: "64px",
                backgroundImage:
                  "linear-gradient(90deg, #0B43FF 0%, #2CAFE4 100%)",
              }}
            >
              {t.business.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
