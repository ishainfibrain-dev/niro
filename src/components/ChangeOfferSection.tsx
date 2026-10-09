"use client";

import React from "react";
import Image from "next/image";
import { useI18n } from "@/i18n/language";
import { useInquiry } from "@/components/InquiryProvider";

export default function ChangeOfferSection() {
  const { t } = useI18n();
  const { openInquiry } = useInquiry();
  const cards = [
    {
      tag: t.offer.cards[0].tag,
      title: t.offer.cards[0].title,
      iconSrc: "/images/icon-offer-badge.png",
      alt: "Offer Icon",
    },
    {
      tag: t.offer.cards[1].tag,
      title: t.offer.cards[1].title,
      iconSrc: "/images/icon-megaphone.png",
      alt: "Promote Icon",
    },
    {
      tag: t.offer.cards[2].tag,
      title: t.offer.cards[2].title,
      iconSrc: "/images/icon-users.png",
      alt: "Users Icon",
    },
    {
      tag: t.offer.cards[3].tag,
      title: t.offer.cards[3].title,
      iconSrc: "/images/clarity_map-marker-line.png",
      alt: "Location Pin Icon",
    },
    {
      tag: t.offer.cards[4].tag,
      title: t.offer.cards[4].title,
      iconSrc: "/images/icon-calendar.png",
      alt: "Calendar Icon",
    },
  ];

  return (
    <section id="promotions" className="niro-change-offer-section">
      <div className="max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="niro-phone-split grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Paragraphs, Cards, Button */}
          <div className="flex flex-col items-start text-left reveal-on-scroll reveal-left">
            <h2 className="heading-write reveal-on-scroll w-full max-w-full text-white font-[800] text-[32px] sm:text-[38px] md:text-[42px] leading-[42px] sm:leading-[48px] md:leading-[54px] tracking-tight">
              <span className="heading-line">{t.offer.line1}</span>
              <span className="heading-line mt-1">{t.offer.line2}</span>
            </h2>

            <div className="mt-6 space-y-3 whitespace-pre-line text-[#9CA3AF] text-[15px] sm:text-[16px] leading-[25px]">
              <p>
                {t.offer.p1.split("\n").map((line, index, lines) => (
                  <React.Fragment key={`${line}-${index}`}>
                    {line}
                    {index < lines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
              <p>
                {t.offer.p2.split("\n").map((line, index, lines) => (
                  <React.Fragment key={`${line}-${index}`}>
                    {line}
                    {index < lines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>

            {/* 5 Feature Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-[620px]">
              {cards.map((c, i) => (
                <div
                  key={i}
                  className={`group p-4 rounded-xl bg-[rgba(6,9,19,0.7)] border border-[#15203D] hover:border-[#4DD7CB] hover:bg-[rgba(7,67,252,0.08)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] cursor-pointer ${
                    i === 4 ? "sm:col-span-2 sm:max-w-[300px]" : ""
                  }`}
                >
                  <div className="w-[30px] h-[30px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={c.iconSrc}
                      alt={c.alt}
                      width={30}
                      height={30}
                      className="object-contain"
                      style={{ width: 30, height: 30 }}
                    />
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <span className="text-[#9CA3AF] text-[12.5px] leading-tight font-normal">
                      {c.tag}
                    </span>
                    <span className="text-white text-[14.5px] font-semibold mt-1 leading-snug">
                      {c.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-[400px] text-[#9CA3AF] text-[15px] leading-[24px]">
              <span className="block">{t.offer.closingLine1}</span>
              <span className="block">{t.offer.closingLine2}</span>
            </p>

            <button
              type="button"
              onClick={openInquiry}
              className="mt-6 inline-flex shrink-0 items-center justify-center gap-[10px] rounded-full px-5 text-center text-[16px] font-semibold leading-6 text-white shadow-[0_4px_24px_rgba(7,67,252,0.4)] hover:shadow-[0_6px_32px_rgba(44,175,228,0.6)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              style={{
                width: "389px",
                height: "64px",
                backgroundImage: "linear-gradient(90deg, #0B43FF 0%, #2CAFE4 100%)",
              }}
            >
              {t.offer.button}
            </button>
          </div>

          {/* Right Column: Mobile App Mockup (m2.png) */}
          <div className="flex justify-center items-center relative reveal-on-scroll reveal-right delay-150">
            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-[#0743FC]/25 rounded-full blur-[130px] animate-ambient-glow pointer-events-none" />
            <div className="niro-phone-image-container relative flex justify-center animate-float-delayed">
              <Image
                src="/images/m2.png"
                alt="NIRO Live Promotions Management on Mobile"
                width={1145}
                height={1374}
                className="object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.85)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
