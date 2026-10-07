"use client";

import React from "react";
import Image from "next/image";

export default function FoodTruckSection() {
  const steps = ["Move", "Update", "Go Live", "Get Discovered"];

  const checklistLeft = [
    "Today's special",
    "Current menu promotion",
    "Current location",
  ];

  const checklistRight = [
    "Limited-time offers",
    "Operating hours",
    "Next stop timing",
  ];

  return (
    <section id="mobile-business" className="niro-food-truck-section">
      <div className="max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="niro-phone-split grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Paragraphs, Flow Pills, Checklist Box, Button */}
          <div className="flex flex-col items-start text-left reveal-on-scroll reveal-left">
            <h2 className="heading-write reveal-on-scroll text-white font-[800] text-[32px] sm:text-[38px] md:text-[42px] leading-[42px] sm:leading-[48px] md:leading-[54px] tracking-tight">
              <span className="heading-line">New Location?</span>
              <span className="heading-line mt-1">Go LIVE on the Map Again.</span>
            </h2>

            <div className="mt-6 space-y-3 text-[#9CA3AF] text-[15px] sm:text-[16px] leading-[25px]">
              <p>
                Food trucks are one of the best examples of why Niro is different. A food truck might serve lunch downtown, move to a brewery later, then move again for an evening event.
              </p>
              <p>
                When the business changes locations, it should be able to update its location in Niro and make that new location LIVE on the map immediately.
              </p>
            </div>

            {/* Flow Steps Pills with Arrows */}
            <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3 reveal-on-scroll delay-100">
              {steps.map((step, idx) => (
                <React.Fragment key={step}>
                  <div className="px-4 py-2 rounded-lg bg-[rgba(6,9,19,0.7)] border border-[#15203D] hover:border-[#4DD7CB] hover:-translate-y-0.5 text-[#E2E8F0] font-medium text-[14px] transition-all duration-200">
                    {step}
                  </div>
                  {idx < steps.length - 1 && (
                    <span className="text-[#4DD7CB] text-[16px] animate-pulse">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Checklist Box */}
            <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-[rgba(6,9,19,0.7)] border border-[#15203D] hover:border-[#4DD7CB]/50 w-full max-w-xl transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.3)] reveal-on-scroll delay-200">
              <h3 className="text-[#4DD7CB] font-bold text-[16px] mb-4">
                A Food Truck Can Also Update
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white text-[14.5px]">
                <div className="space-y-2.5">
                  {checklistLeft.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 group">
                      <span className="text-[#4DD7CB] font-bold group-hover:scale-125 transition-transform">✓</span>
                      <span className="group-hover:text-[#4DD7CB] transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2.5">
                  {checklistRight.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 group">
                      <span className="text-[#4DD7CB] font-bold group-hover:scale-125 transition-transform">✓</span>
                      <span className="group-hover:text-[#4DD7CB] transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-8 text-[#9CA3AF] text-[15px] leading-[24px]">
              Your address changed. Your customers shouldn’t have to guess where you went. New location. New nearby audience. Same Niro presence.
            </p>

            <button
              type="button"
              className="mt-6 px-9 py-3.5 rounded-full bg-gradient-to-r from-[#0743FC] to-[#2563EB] text-white font-semibold text-[15.5px] shadow-[0_4px_24px_rgba(7,67,252,0.4)] hover:shadow-[0_6px_32px_rgba(7,67,252,0.6)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              Promote Your Business on Niro
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
