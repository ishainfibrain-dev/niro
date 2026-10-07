"use client";

import React from "react";
import { useI18n } from "@/i18n/language";

interface StepItem {
  title: React.ReactNode;
  icon: React.ReactNode;
}

export default function HowItWorksSection() {
  const { t } = useI18n();
  const steps: StepItem[] = [
    {
      title: "Business Changes",
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] text-[#4DD7CB]"
        >
          {/* Awning Top & Sides */}
          <path
            d="M10 19L12.5 10H35.5L38 19"
            stroke="#4DD7CB"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* 3 Scallops */}
          <path
            d="M10 19C10 22.8 19.3 22.8 19.3 19C19.3 22.8 28.7 22.8 28.7 19C28.7 22.8 38 22.8 38 19"
            stroke="#4DD7CB"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Awning Vertical Stripes */}
          <path
            d="M19.3 10V19"
            stroke="#4DD7CB"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M28.7 10V19"
            stroke="#4DD7CB"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Store Body Container */}
          <path
            d="M12 23V36C12 38.2 13.8 40 16 40H32C34.2 40 36 38.2 36 36V23"
            stroke="#4DD7CB"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Merchant Updates Niro",
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] text-[#4DD7CB]"
        >
          {/* Pencil body angled at 45 degrees */}
          <path
            d="M13 35L29 19L35 25L19 41L11 43L13 35Z"
            stroke="#4DD7CB"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Eraser divider band */}
          <path
            d="M25 23L31 29"
            stroke="#4DD7CB"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Eraser top cap */}
          <path
            d="M29 19C30.5 17.5 33.5 17.5 35 19L37 21C38.5 22.5 38.5 25.5 37 27L35 25"
            stroke="#4DD7CB"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Horizontal underline line */}
          <path
            d="M24 41H38"
            stroke="#4DD7CB"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: (
        <>
          The Update Goes LIVE
          <br className="hidden sm:inline" /> on the Map
        </>
      ),
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] text-[#4DD7CB]"
        >
          {/* Central solid circle dot */}
          <circle cx="24" cy="24" r="4" fill="#4DD7CB" />
          {/* Inner Left Wave */}
          <path
            d="M18 16C13.8 20.2 13.8 27.8 18 32"
            stroke="#4DD7CB"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Inner Right Wave */}
          <path
            d="M30 16C34.2 20.2 34.2 27.8 30 32"
            stroke="#4DD7CB"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Outer Left Wave */}
          <path
            d="M12 10C5.5 17.5 5.5 30.5 12 38"
            stroke="#4DD7CB"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Outer Right Wave */}
          <path
            d="M36 10C42.5 17.5 42.5 30.5 36 38"
            stroke="#4DD7CB"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: (
        <>
          Nearby Consumers
          <br className="hidden sm:inline" /> Discover It
        </>
      ),
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] text-[#4DD7CB]"
        >
          {/* Left User Head */}
          <circle
            cx="17"
            cy="16"
            r="5.5"
            stroke="#4DD7CB"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Right User Head */}
          <circle
            cx="32"
            cy="16"
            r="5.5"
            stroke="#4DD7CB"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Left User Torso (nested behind) */}
          <path
            d="M9 38C9 32 13 28 18 28C20.6 28 22.9 29.1 24.5 31"
            stroke="#4DD7CB"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Right User Torso (front arch) */}
          <path
            d="M23 38C23 32 27 28 32 28C37 28 41 32 41 38H23Z"
            stroke="#4DD7CB"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="niro-how-it-works-section">
      <div className="niro-livemap-frame">
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Main Heading: Exact Figma Image 1 - ONE SINGLE LINE */}
        <h2 className="niro-livemap-title heading-write heading-write-center reveal-on-scroll">
          <span className="heading-line">{t.how.title}</span>
        </h2>

        {/* Subtitle: Exact Figma Image 1 - EXACT 2 LINES */}
        <div className="niro-livemap-subtitle reveal-on-scroll delay-100">
          <p>{t.how.subtitle1}</p>
          <p>{t.how.subtitle2}</p>
        </div>

        {/* 4 Process Cards Flow with Big Icons & Connecting Arrows */}
        <div className="niro-flow-cards-row">
          {steps.map((step, idx) => {
            const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];
            return (
              <React.Fragment key={idx}>
                <div
                  className={`niro-flow-card reveal-on-scroll reveal-scale ${delays[idx]} group`}
                >
                  <div className="group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h3 className="niro-flow-card-title group-hover:text-[#4DD7CB]">
                    {t.how.cards[idx].split("\n").map((line, lineIdx) => (
                      <React.Fragment key={line}>
                        {lineIdx > 0 && <br />}
                        {line}
                      </React.Fragment>
                    ))}
                  </h3>
                </div>

                {/* Connecting Arrow beside the card matching Image 1 */}
                {idx < steps.length - 1 && (
                  <div className="niro-flow-arrow" aria-hidden="true">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-[#4DD7CB] drop-shadow-[0_0_8px_rgba(77,215,203,0.3)]"
                    >
                      <path
                        d="M4 12h16"
                        stroke="#4DD7CB"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 6l6 6-6 6"
                        stroke="#4DD7CB"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Bottom Tagline: Exact typography matching Image 1 */}
        <div className="niro-flow-tagline reveal-on-scroll delay-500">
          <p>
            {t.how.taglineLead}{" "}
            <span className="niro-flow-tagline-highlight">{t.how.taglineLive}</span>
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
