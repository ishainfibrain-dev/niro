"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { messages, type Lang } from "@/i18n/messages";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof messages)["en"];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("niro-lang");
    if (saved === "en" || saved === "es") setLangState(saved);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = lang === "es" ? "es" : "en";
    window.localStorage.setItem("niro-lang", lang);
  }, [lang, ready]);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang: setLangState, t: messages[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return context;
}
