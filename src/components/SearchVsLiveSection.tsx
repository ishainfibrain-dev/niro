"use client";

import React from "react";

export default function SearchVsLiveSection() {
  const listItems = [
    {
      title: "Explore Nearby Businesses",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#4DD7CB] shrink-0">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="9 22 9 12 15 12 15 22" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "See Current Promotions",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#4DD7CB] shrink-0">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="7" cy="7" r="1.5" fill="#4DD7CB" />
        </svg>
      ),
    },
    {
      title: "Discover Products and Offers",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#4DD7CB] shrink-0">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Find Places You Didn't Know Were There",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#4DD7CB] shrink-0">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="3" stroke="#4DD7CB" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "See When Businesses Update What They are Offering",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#4DD7CB] shrink-0">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#4DD7CB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="for-people" className="niro-search-vs-live-section">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Heading, Description, Comparison Boxes */}
          <div className="flex flex-col items-start text-left reveal-on-scroll reveal-left">
            <h2 className="text-white font-[800] text-[32px] sm:text-[38px] md:text-[42px] leading-[42px] sm:leading-[48px] md:leading-[54px] tracking-tight">
              Don’t Just Search for
              <span className="block mt-1">Businesses.</span>
              <span className="block mt-1">See What’s Happening</span>
              <span className="block mt-1">Around You.</span>
            </h2>

            <p className="mt-6 text-[#9CA3AF] text-[15px] sm:text-[16px] leading-[26px] max-w-xl">
              Niro gives people ready to shop a visual way to explore nearby businesses, products, promotions and current activity through a Live Map.
            </p>

            {/* Comparison Flow with Arrow */}
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl reveal-on-scroll delay-150">
              {/* Box 1 */}
              <div className="w-full sm:flex-1 p-5 rounded-xl bg-[rgba(6,9,19,0.7)] border border-[#15203D] hover:border-slate-600 transition-colors">
                <span className="text-[#9CA3AF] text-[13px] block">Instead of only asking:</span>
                <span className="text-white text-[16px] font-semibold mt-1 block">
                  “What’s near me?”
                </span>
              </div>

              {/* Arrow */}
              <div className="text-[#4DD7CB] rotate-90 sm:rotate-0 shrink-0 animate-pulse-glow">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="#4DD7CB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Box 2 with Cyan Glow/Border */}
              <div className="w-full sm:flex-1 p-5 rounded-xl bg-[rgba(6,9,19,0.85)] border border-[#4DD7CB]/50 shadow-[0_0_24px_rgba(77,215,203,0.18)] hover:shadow-[0_0_32px_rgba(77,215,203,0.3)] transition-all">
                <span className="text-[#9CA3AF] text-[13px] block">Niro helps answer:</span>
                <span className="text-[#4DD7CB] text-[16px] font-bold mt-1 block leading-snug">
                  “What’s happening near me right now?”
                </span>
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
                  <div className="group-hover:scale-115 transition-transform duration-300">{item.icon}</div>
                  <span className="text-white text-[16px] sm:text-[17px] font-medium tracking-tight group-hover:text-[#4DD7CB] transition-colors">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[#9CA3AF] text-[15px] leading-[24px]">
              Niro turns the city around you into something you can explore and act on.
            </p>

            <button
              type="button"
              className="mt-6 px-9 py-3.5 rounded-full bg-gradient-to-r from-[#0743FC] to-[#2563EB] text-white font-semibold text-[15.5px] shadow-[0_4px_24px_rgba(7,67,252,0.4)] hover:shadow-[0_6px_32px_rgba(7,67,252,0.6)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              Explore Niro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
