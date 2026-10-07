"use client";

import React from "react";
import Image from "next/image";

export default function ChangeOfferSection() {
  const cards = [
    {
      tag: "Slow Afternoon?",
      title: "Create an Offer",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#4DD7CB]">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      tag: "Extra Inventory?",
      title: "Promote It",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#4DD7CB]">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="7" cy="7" r="1.5" fill="#4DD7CB" />
        </svg>
      ),
    },
    {
      tag: "Lunch Rush Starting?",
      title: "Update Your Promotion",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#4DD7CB]">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" />
          <circle cx="9" cy="7" r="4" stroke="#4DD7CB" strokeWidth="2" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      tag: "Last-minute Opening?",
      title: "Let Nearby Consumers Know",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#4DD7CB]">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="3" stroke="#4DD7CB" strokeWidth="2" />
        </svg>
      ),
    },
    {
      tag: "Special Event Tonight?",
      title: "Put It on the Map",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#4DD7CB]">
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="#4DD7CB" strokeWidth="2" />
          <line x1="16" y1="2" x2="16" y2="6" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="2" x2="8" y2="6" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" />
          <line x1="3" y1="10" x2="21" y2="10" stroke="#4DD7CB" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  return (
    <section id="promotions" className="niro-change-offer-section">
      <div className="max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="niro-phone-split grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Paragraphs, Cards, Button */}
          <div className="flex flex-col items-start text-left reveal-on-scroll reveal-left">
            <h2 className="heading-write reveal-on-scroll text-white font-[800] text-[32px] sm:text-[38px] md:text-[42px] leading-[42px] sm:leading-[48px] md:leading-[54px] tracking-tight">
              <span className="heading-line">Change Your Offer.</span>
              <span className="heading-line mt-1">Change Your Map Presence.</span>
            </h2>

            <div className="mt-6 space-y-3 text-[#9CA3AF] text-[15px] sm:text-[16px] leading-[25px]">
              <p>
                Businesses don’t operate on a fixed schedule. Inventory changes. Traffic changes. Demand changes. Sometimes a business wants to create activity right now.
              </p>
              <p>
                A merchant should be able to change a promotion or offer, publish it, and have that updated promotion appear LIVE on the Niro map.
              </p>
            </div>

            {/* 5 Feature Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-[620px]">
              {cards.map((c, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl bg-[rgba(6,9,19,0.7)] border border-[#15203D] hover:border-[#4DD7CB] hover:bg-[rgba(7,67,252,0.08)] hover:-translate-y-1 transition-all duration-300 flex items-start gap-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] ${
                    i === 4 ? "sm:col-span-2 sm:max-w-[300px]" : ""
                  }`}
                >
                  <div className="mt-0.5 shrink-0 transition-transform duration-300 group-hover:scale-110">{c.icon}</div>
                  <div className="flex flex-col">
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

            <p className="mt-8 text-[#9CA3AF] text-[15px] leading-[24px]">
              Your promotion doesn’t have to wait for tomorrow. It can be live while the opportunity still matters.
            </p>

            <button
              type="button"
              className="mt-6 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0743FC] to-[#4DD7CB] text-white font-semibold text-[15.5px] shadow-[0_4px_24px_rgba(7,67,252,0.4)] hover:shadow-[0_6px_32px_rgba(77,215,203,0.6)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              Promote Your Business on Niro
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
