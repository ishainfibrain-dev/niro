"use client";

import React from "react";
import Image from "next/image";
import { useI18n } from "@/i18n/language";
import { useInquiry } from "@/components/InquiryProvider";

export default function FoodTruckSection() {
  const { t } = useI18n();
  const { openInquiry } = useInquiry();
  const steps = t.truck.steps;
  const checklistLeft = t.truck.left;
  const checklistRight = t.truck.right;

  return (
    <section id="mobile-business" className="niro-food-truck-section">
      <div className="max-w-[1480px] mx-auto px-6 sm:px-[62px] lg:px-14">
        <div className="niro-phone-split grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Paragraphs, Flow Pills, Checklist Box, Button */}
          <div className="flex flex-col items-start text-left reveal-on-scroll reveal-left">
            <h2 className="heading-write reveal-on-scroll text-white font-[800] text-[32px] sm:text-[38px] md:text-[42px] leading-[42px] sm:leading-[48px] md:leading-[54px] tracking-tight">
              <span className="heading-line">{t.truck.line1}</span>
              <span className="heading-line mt-1">{t.truck.line2}</span>
            </h2>

            <div className="mt-6 max-w-[640px] space-y-4 text-[15px] leading-[24px] text-[#9CA3AF]">
              <p>
                {t.truck.p1.split("\n").map((line, index, lines) => (
                  <React.Fragment key={`${line}-${index}`}>
                    {line}
                    {index < lines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
              <p>
                {t.truck.p2}
              </p>
            </div>

            {/* Flow Steps Pills with Arrows */}
            <div className="mt-8 flex flex-wrap items-center gap-2 pl-[30px] sm:gap-3 reveal-on-scroll delay-100">
              {steps.map((step, idx) => (
                <React.Fragment key={`${step}-${idx}`}>
                                    <div
                    className="inline-flex items-center justify-center rounded-lg border px-4 py-2 text-[15px] font-semibold leading-none transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      minWidth: ["77px", "91px", "72px", "160px"][idx],
                      minHeight: "42px",
                      color: idx === 2 ? "#11D5A5" : idx === 3 ? "#50DDD5" : "#FFFFFF",
                      borderColor: idx === 2 ? "#00B78A" : idx === 3 ? "#46D8D1" : "#29456E",
                      background:
                        idx === 2
                          ? "linear-gradient(135deg, #003B2F 0%, #006A50 100%)"
                          : idx === 3
                            ? "linear-gradient(135deg, #07313B 0%, #0A5662 100%)"
                            : "linear-gradient(180deg, #0B1020 0%, #050812 100%)",
                      boxShadow:
                        idx === 2
                          ? "0 0 14px rgba(0, 183, 138, 0.28), inset 0 1px 0 rgba(17, 213, 165, 0.18)"
                          : idx === 3
                            ? "0 0 14px rgba(70, 216, 209, 0.22), inset 0 1px 0 rgba(80, 221, 213, 0.16)"
                            : "inset 0 1px 0 rgba(255, 255, 255, 0.04)",
                    }}
                  >
                    {step}
                  </div>
                  {idx < steps.length - 1 && (
                    <span className="text-[#4DD7CB] text-[18px] leading-none">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Checklist Box */}
                        <div
              className="mt-8 w-full rounded-2xl transition-all duration-300 hover:border-[#4DD7CB]/50 reveal-on-scroll delay-200"
              style={{
                width: "700px",
                maxWidth: "100%",
                minHeight: "190px",
                padding: "20px",
                background: "#080C19",
                border: "1px solid #162D52",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.28)",
              }}
            >
              <h3 className="mb-4 text-[18px] font-bold text-[#4DD7CB]">
                {t.truck.boxTitle}
              </h3>
              <div className="grid grid-cols-1 gap-3 text-[18px] leading-[24px] text-white sm:grid-cols-2 sm:gap-x-14">
                <div className="space-y-1">
                  {checklistLeft.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 group">
                      <span className="text-[#4DD7CB] font-bold group-hover:scale-125 transition-transform">✓</span>
                      <span className="group-hover:text-[#4DD7CB] transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-1">
                  {checklistRight.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 group">
                      <span className="text-[#4DD7CB] font-bold group-hover:scale-125 transition-transform">✓</span>
                      <span className="group-hover:text-[#4DD7CB] transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-8 max-w-[608px] text-[15px] leading-[24px] text-[#9CA3AF]">
              {t.truck.closing
                .replace("Your customers", "\nYour customers")
                .replace("New location.", "\nNew location.")
                .split("\n")
                .map((line, index) => (
                  <React.Fragment key={`${line}-${index}`}>
                    {line}
                    {index < 2 && <br />}
                  </React.Fragment>
                ))}
            </p>

            <button
              type="button"
              onClick={openInquiry}
              className="mt-6 inline-flex items-center justify-center rounded-full text-[16px] font-semibold text-white shadow-[0_4px_24px_rgba(7,67,252,0.4)] hover:shadow-[0_6px_32px_rgba(44,175,228,0.6)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              style={{
                width: "389px",
                height: "64px",
                backgroundImage: "linear-gradient(90deg, #0B43FF 0%, #2CAFE4 100%)",
              }}
            >
              {t.truck.button}
            </button>
          </div>

          {/* Right Column: Phone Mockup (m4.png) */}
          <div className="flex justify-center items-center relative reveal-on-scroll reveal-right delay-150">
            <div className="absolute w-[500px] h-[500px] bg-[#0743FC]/25 rounded-full blur-[130px] animate-ambient-glow pointer-events-none" />
            <div className="niro-phone-image-container relative flex justify-center animate-float-delayed">
              <Image
                src="/images/m4.png"
                alt="NIRO Mobile Food Truck Location Updates on Mobile"
                width={1024}
                height={1536}
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
