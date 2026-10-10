"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/i18n/language";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { lang, setLang, t } = useI18n();
  const onHome = pathname === "/";
  const navLinks = t.nav;
  const languages = t.languages;
  const selectedLang = languages.find((item) => item.code === lang)?.short ?? "EN";

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMobileMenuOpen(false);
    if (!onHome) return;
    e.preventDefault();
    const target = document.querySelector<HTMLElement>(href);
    if (target) {
      const isStackedNavigation = window.matchMedia("(max-width: 1023px)").matches;

      if (isStackedNavigation) {
        window.requestAnimationFrame(() => {
          const headerHeight = document.querySelector<HTMLElement>(".niro-navbar")?.getBoundingClientRect().height ?? 0;
          const targetTop = window.scrollY + target.getBoundingClientRect().top;
          window.scrollTo({
            top: Math.max(0, targetTop - headerHeight - 16),
            behavior: "smooth",
          });
        });
      } else {
        // Desktop sections define their own scroll margin to clear the sticky header.
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      window.history.pushState(null, "", href);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (!onHome) return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "/");
  };

  const sectionHref = (hash: string) => (onHome ? hash : `/${hash}`);

  return (
    <header className="niro-navbar">
      <div className="niro-navbar-inner">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center group select-none transition-opacity hover:opacity-90 cursor-pointer"
        >
          <Image
            src="/images/logo.png"
            alt="NIRO Logo"
            width={112}
            height={28}
            className="h-7 w-auto object-contain"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </Link>

        {/* Desktop Nav Items - Inter, 500 (Medium), 16px, 24px line-height, 0% letter spacing, center aligned */}
        <nav className="niro-desktop-nav items-center" style={{ columnGap: "42px" }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={sectionHref(link.href)}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#ededed] hover:text-[#4DD7CB] font-medium text-[16px] leading-[24px] tracking-[0px] text-center transition-colors duration-150 inline-block cursor-pointer"
              style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Section: Language Dropdown */}
        <div className="niro-desktop-language items-center">
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              onBlur={() => setTimeout(() => setLangDropdownOpen(false), 200)}
              className="flex items-center gap-2.5 text-white hover:text-neutral-200 font-medium text-[16px] leading-[24px] tracking-[0px] transition-colors cursor-pointer py-1.5 px-2 rounded focus:outline-none"
              style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
              aria-expanded={langDropdownOpen}
            >
              {/* US Flag SVG Icon */}
              <span className="niro-language-flag w-5 h-3.5 overflow-hidden rounded-[2px] inline-flex items-center justify-center shadow-xs">
                <LangFlag code={lang} />
              </span>
              <span className="font-medium text-[16px] leading-[24px] tracking-[0px]">
                {selectedLang}
              </span>
              {/* Down Chevron */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`w-3.5 h-3.5 text-white/80 transition-transform duration-200 ${
                  langDropdownOpen ? "rotate-180" : ""
                }`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-[#111111] border border-white/10 rounded-lg shadow-2xl py-1 z-50 backdrop-blur-md">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => {
                      setLang(item.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-white/10 transition-colors ${
                      lang === item.code
                        ? "text-white font-semibold"
                        : "text-neutral-300"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="niro-language-flag w-5 h-3.5 overflow-hidden rounded-[2px] inline-flex">
                        <LangFlag code={item.code} />
                      </span>
                      <span>{item.label}</span>
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      {item.short}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="niro-mobile-controls items-center gap-3">
          <div className="flex items-center gap-1.5 text-white text-sm mr-2 font-medium">
            <span className="niro-language-flag w-5 h-3.5 overflow-hidden rounded-[2px] inline-flex">
              <LangFlag code={lang} />
            </span>
            <span>{selectedLang}</span>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="niro-mobile-menu bg-black/95 border-b border-white/10 px-6 py-5 flex flex-col gap-4 backdrop-blur-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={sectionHref(link.href)}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#ededed] hover:text-[#4DD7CB] font-medium text-[16px] leading-[24px] py-1 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-2 pt-2 border-t border-white/10">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => {
                  setLang(item.code);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                  lang === item.code
                    ? "bg-white/10 text-white"
                    : "text-neutral-300"
                }`}
              >
                <span className="niro-language-flag w-5 h-3.5 overflow-hidden rounded-[2px] inline-flex">
                  <LangFlag code={item.code} />
                </span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function LangFlag({ code }: { code: "en" | "es" }) {
  if (code === "es") {
    return (
      <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
        <path fill="#c60b1e" d="M0 0h640v480H0z" />
        <path fill="#ffc400" d="M0 120h640v240H0z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
      <g fillRule="evenodd">
        <path fill="#bd3d44" d="M0 0h640v480H0z" />
        <path
          stroke="#fff"
          strokeWidth="37"
          d="M0 55.4h640M0 129.2h640M0 203.1h640M0 277h640M0 350.8h640M0 424.6h640"
        />
        <path fill="#192f5d" d="M0 0h280v258.5H0z" />
        <g fill="#fff">
          {[...Array(5)].map((_, r) =>
            [...Array(6)].map((_, c) => (
              <circle key={`${r}-${c}`} cx={24 + c * 44} cy={25 + r * 50} r="5" />
            ))
          )}
        </g>
      </g>
    </svg>
  );
}
