"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/i18n/language";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="niro-footer">
      <div className="niro-footer-inner">
        {/* Top: Logo & Contact Info Container */}
        <div className="w-full flex flex-col items-center">
          {/* NIRO Brand Logo (centered) */}
          <div className="flex justify-center">
            <Image
              src="/images/logo.png"
              alt="NIRO Logo"
              width={132}
              height={33}
              className="h-[33px] w-auto object-contain hover:opacity-90 transition-opacity"
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </div>

          {/* Contact Info Row: Gap ~44px, Inter 400 16px/24px White */}
          <div className="niro-footer-contacts flex flex-wrap items-center justify-center text-[16px] leading-[24px] text-white font-normal">
            {/* Phone */}
            <a
              href="tel:+11321231234"
              className="flex items-center gap-2.5 hover:text-[#4DD7CB] transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4DD7CB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[18px] h-[18px] text-[#4DD7CB] shrink-0"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+1 132 123 1234</span>
            </a>

            {/* Email */}
            <a
              href="mailto:founder@niro-app.com"
              className="flex items-center gap-2.5 hover:text-[#4DD7CB] transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4DD7CB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[18px] h-[18px] text-[#4DD7CB] shrink-0"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>founder@niro-app.com</span>
            </a>

            {/* Address */}
            <div className="flex items-center gap-2.5 hover:text-[#4DD7CB] transition-colors cursor-default">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4DD7CB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[18px] h-[18px] text-[#4DD7CB] shrink-0"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{t.footer.address}</span>
            </div>

            {/* Website */}
            <a
              href="https://www.niro-app.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 hover:text-[#4DD7CB] transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4DD7CB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[18px] h-[18px] text-[#4DD7CB] shrink-0"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>www.niro-app.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Row: Exact Figma Typography Inter 400 16px/24px White - NO BORDER DIVIDER, ALWAYS VISIBLE */}
        <div className="niro-footer-bottom-row text-white font-normal tracking-[0px]">
          <p className="m-0 select-none text-white text-[16px] leading-[24px] font-normal">
            {t.footer.copyright}
          </p>
          <div className="flex items-center gap-8 text-white text-[16px] leading-[24px] font-normal">
            <Link
              href="/terms"
              className="text-white hover:text-[#4DD7CB] transition-colors"
            >
              {t.footer.terms}
            </Link>
            <Link
              href="/privacy"
              className="text-white hover:text-[#4DD7CB] transition-colors"
            >
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
