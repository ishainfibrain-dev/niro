"use client";

import React from "react";
import Image from "next/image";

export default function GoLiveMapSection() {
  const listItems = [
    {
      title: "Update Your Business",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#4DD7CB] shrink-0">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="9 22 9 12 15 12 15 22" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Change a Promotion",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#4DD7CB] shrink-0">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="7" cy="7" r="1.5" fill="#4DD7CB" />
        </svg>
      ),
    },
    {
      title: "Highlight an Offer",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#4DD7CB] shrink-0">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Move Locations",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#4DD7CB] shrink-0">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="3" stroke="#4DD7CB" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Publish the Change",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#4DD7CB] shrink-0">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="for-business" className="niro-go-live-section">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Phone Mockup (m3.png) */}
          <div className="flex justify-center items-center relative order-2 lg:order-1 reveal-on-scroll reveal-left delay-150">
            <div className="absolute w-[500px] h-[500px] bg-[#0743FC]/25 rounded-full blur-[130px] animate-ambient-glow pointer-events-none" />
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px] lg:max-w-[390px] xl:max-w-[400px] flex justify-center animate-float">
              <Image
                src="/images/m3.png"
                alt="NIRO Map Listings and Exploration on Mobile"
                width={1024}
                height={1536}
                className="w-full h-auto max-h-[580px] object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.85)]"
                priority
              />
            </div>
          </div>

          {/* Right Column: Heading, Subtitle, List & Button */}
          <div className="flex flex-col items-start text-left order-1 lg:order-2 reveal-on-scroll reveal-right">
            <h2 className="text-white font-[800] text-[32px] sm:text-[38px] md:text-[42px] leading-[42px] sm:leading-[48px] md:leading-[54px] tracking-tight">
              Don’t Just Get Listed.
              <span className="block mt-1">Go LIVE on the Map.</span>
            </h2>

            <p className="mt-6 text-[#9CA3AF] text-[15px] sm:text-[16px] leading-[26px]">
              Traditional listings tell customers that your business exists. Niro lets businesses actively control what nearby consumers see.
            </p>

            {/* 5 Features List */}
            <div className="mt-8 w-full divide-y divide-white/[0.08]">
              {listItems.map((item, index) => (
                <div
                  key={index}
                  className="py-4.5 first:pt-0 flex items-center gap-4 group cursor-default hover:pl-2 transition-all duration-300"
                >
                  <div className="group-hover:scale-115 transition-transform duration-300">{item.icon}</div>
                  <span className="text-white text-[16px] sm:text-[17px] font-medium tracking-tight group-hover:text-[#4DD7CB] transition-colors">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[#9CA3AF] text-[15px] leading-[24px]">
              Your Niro presence can immediately reflect what is happening with your business.
            </p>

            <button
              type="button"
              className="mt-6 px-9 py-3.5 rounded-full bg-gradient-to-r from-[#0743FC] to-[#2563EB] text-white font-semibold text-[15.5px] shadow-[0_4px_24px_rgba(7,67,252,0.4)] hover:shadow-[0_6px_32px_rgba(7,67,252,0.6)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              Promote Your Business on Niro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
