"use client";

import React from "react";
import Image from "next/image";
import { useI18n } from "@/i18n/language";

export default function LiveUpdatesSection() {
  const { t } = useI18n();
  const featurePills = [
    {
      title: t.updates.pills[0],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#4DD7CB]">
          <path
            d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
            stroke="#4DD7CB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="7" cy="7" r="1.5" fill="#4DD7CB" />
        </svg>
      ),
    },
    {
      title: t.updates.pills[1],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#4DD7CB]">
          <line x1="19" y1="5" x2="5" y2="19" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" />
          <circle cx="6.5" cy="6.5" r="2.5" stroke="#4DD7CB" strokeWidth="2" />
          <circle cx="17.5" cy="17.5" r="2.5" stroke="#4DD7CB" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: t.updates.pills[2],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#4DD7CB]">
          <circle cx="12" cy="12" r="10" stroke="#4DD7CB" strokeWidth="2" />
          <line x1="12" y1="16" x2="12" y2="12" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="8" r="1" fill="#4DD7CB" />
        </svg>
      ),
    },
    {
      title: t.updates.pills[3],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#4DD7CB]">
          <path
            d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
            stroke="#4DD7CB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="10" r="3" stroke="#4DD7CB" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: t.updates.pills[4],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#4DD7CB]">
          <circle cx="12" cy="12" r="10" stroke="#4DD7CB" strokeWidth="2" />
          <polyline points="12 6 12 12 16 14" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: t.updates.pills[5],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#4DD7CB]">
          <path
            d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
            stroke="#4DD7CB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="live-map" className="niro-updates-section">
      <div className="niro-updates-frame-19">
        {/* Vector 3129: Ambient Blur Background */}
        <div className="niro-updates-vector-3129" />

        {/* Frame 5: Left Phone Mockup Column */}
        <div className="niro-updates-frame-5">
          <div className="niro-phone-image-container animate-float reveal-on-scroll reveal-left">
            <Image
              src="/images/m1.png"
              alt="NIRO Mobile App Live Local Discovery"
              width={1148}
              height={1371}
              className="object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.85)]"
              priority
            />
          </div>
        </div>

        {/* Right Container: 650px Auto Layout, Gap 42px */}
        <div className="niro-updates-right-container reveal-on-scroll reveal-right">
          {/* Frame 7: Heading Block */}
          <div className="niro-updates-frame-7">
            <h2 className="niro-updates-heading heading-write reveal-on-scroll">
              {t.updates.lines.map((line) => (
                <span key={line} className="heading-line">
                  {line}
                </span>
              ))}
            </h2>
          </div>

          {/* Component 6: Subheading & 6 Cards */}
          <div className="niro-updates-component-6">
            <div className="niro-updates-subheading-block">
              <h3 className="niro-updates-subheading-title">
                {t.updates.subheading}
              </h3>
              <p className="niro-updates-subheading-desc">
                {t.updates.subtext}
              </p>
            </div>

            {/* Container: 3x2 Grid Cards, 206px x 90px */}
            <div className="niro-updates-cards-container reveal-on-scroll delay-100">
              {featurePills.map((item, idx) => (
                <div key={idx} className="niro-feature-pill">
                  <div className="niro-feature-icon-wrapper">{item.icon}</div>
                  <span className="niro-feature-pill-text">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frame 8: Callout Box + Closing Hook */}
          <div className="niro-updates-frame-8">
            {/* Callout Container: Linear gradient background & 1px solid #24345E */}
            <div className="niro-updates-callout-card reveal-on-scroll delay-200">
              <h4 className="niro-updates-callout-title">
                {t.updates.calloutLead}{" "}
                <span className="text-[#4DD7CB]">{t.updates.calloutLive}</span>
              </h4>
              <p className="niro-updates-callout-desc">
                {t.updates.calloutBody}
              </p>
            </div>

            {/* Section Closing Hook: 16px / 28px #9CA3AF */}
            <p className="niro-updates-footer-text">
              {t.updates.footer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
