"use client";

import React from "react";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section id="hero" className="niro-hero-section">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src="/images/hero-banner.png"
          alt="NIRO Live Network Map - Glowing particle network through 3D cityscape"
          fill
          priority
          className="object-cover object-center transform scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
        />

        {/* Cinematic Vignette & Readability Overlays matching design */}
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-[0.85]" />

        {/* Center radial vignette to enhance contrast for the text */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.65) 75%, rgba(0, 0, 0, 0.88) 100%)",
          }}
        />

        {/* Top subtle fade from header */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none" />

        {/* Bottom subtle gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#02050b] via-[#02050b]/60 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="niro-hero-content flex flex-col items-center">
        {/* Live Status Badge */}
        <div className="reveal-on-scroll reveal-scale mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/[0.12] backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4DD7CB] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4DD7CB]"></span>
          </span>
          <span className="text-[12.5px] font-semibold text-[#4DD7CB] tracking-wider uppercase">
            Live Hyperlocal Map
          </span>
        </div>

        <h1 className="niro-hero-title heading-write heading-write-center reveal-on-scroll delay-100">
          <span className="heading-line">See What’s Happening</span>
          <span className="heading-line mt-1 sm:mt-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-200">
              Around You Right Now.
            </span>
          </span>
        </h1>
      </div>
    </section>
  );
}

