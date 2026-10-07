"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface FeatureSlide {
  tag: string;
  title: string;
  description: string;
  iconSrc: string;
}

const slides: FeatureSlide[] = [
  {
    tag: "New Promotion?",
    title: "Update Niro.",
    description: "Launch instantaneous flash promos without running costly ads.",
    iconSrc: "/images/icon.png",
  },
  {
    tag: "Live Activity?",
    title: "See Crowd Levels.",
    description: "Real-time foot traffic and vibes at your favorite local spots.",
    iconSrc: "/images/icon.png",
  },
  {
    tag: "Exclusive Deals?",
    title: "Instant Rewards.",
    description: "Unlock nearby flash discounts right as you step into the neighborhood.",
    iconSrc: "/images/icon.png",
  },
  {
    tag: "For Business?",
    title: "Hyperlocal Reach.",
    description: "Connect directly with customers already in walking distance.",
    iconSrc: "/images/icon.png",
  },
  {
    tag: "Mobile Business?",
    title: "Live Location Broadcast.",
    description: "Broadcast your pop-up or food truck to nearby customers in real-time.",
    iconSrc: "/images/icon.png",
  },
];

const SLIDE_INTERVAL_MS = 4500;

export default function MapFeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const activeSlide = slides[activeIndex];

  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearTimeout(timer);
  }, [activeIndex, paused]);

  return (
    <section id="why-niro" className="niro-map-section">
      {/* Ambient background lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-[#0c2e4e]/30 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-[480px] h-[480px] bg-[#0a383f]/25 rounded-full blur-[130px]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(13, 37, 63, 0.25) 0%, rgba(2, 5, 11, 0.95) 75%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 flex flex-col items-center">
        {/* Figma Container: Flow Vertical, Width 896px, Padding Top 5.5px, Gap 16px */}
        <div className="niro-map-container">
          {/* Main Section Heading: Inter 800 Extra Bold, 42px size, 54px line-height */}
          <h2 className="niro-map-heading heading-write heading-write-center reveal-on-scroll">
            <span className="niro-map-heading-line heading-line">
              A Map That Changes With What’s
            </span>
            <span className="niro-map-heading-span heading-line">
              Happening Around You.
            </span>
          </h2>

          {/* Comparison Pill / Box */}
          <div className="niro-comparison-card reveal-on-scroll delay-100">
            <p className="niro-comparison-muted">
              Other maps show people where a business is.
            </p>
            <p className="niro-comparison-highlight">
              NIRO Shows You What’s Happening There Right Now.
            </p>
          </div>
        </div>

        {/* Feature Carousel Section with Megaphone & Text */}
        <div
          className="niro-feature-wrapper reveal-on-scroll reveal-scale delay-200"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="niro-feature-item">
            {/* Cyan Megaphone Icon */}
            <div className="niro-feature-icon-box animate-pulse-glow">
              <Image
                src={activeSlide.iconSrc}
                alt={activeSlide.title}
                width={136}
                height={136}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            {/* Feature Content */}
            <div className="niro-feature-text" key={activeIndex}>
              <span className="niro-feature-tag">
                {activeSlide.tag}
              </span>
              <h3 className="niro-feature-title">
                {activeSlide.title}
              </h3>
              <p className="niro-feature-desc">
                {activeSlide.description}
              </p>
            </div>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="niro-carousel-dots reveal-on-scroll delay-300">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`niro-carousel-dot ${
                  activeIndex === index ? "active" : "inactive"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
