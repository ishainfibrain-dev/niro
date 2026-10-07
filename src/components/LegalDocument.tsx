"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/language";
import type { LegalCopy } from "@/i18n/legal";

export default function LegalDocument({
  copy,
}: {
  copy: { en: LegalCopy; es: LegalCopy };
}) {
  const { lang } = useI18n();
  const page = copy[lang];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <section className="niro-legal-page">
          <div className="niro-legal-hero">
            <p className="niro-legal-kicker">{page.kicker}</p>
            <h1 className="niro-legal-title heading-write heading-write-center reveal-on-scroll">
              <span className="heading-line">{page.title}</span>
            </h1>
            <p className="niro-legal-intro">{page.intro}</p>
            <nav className="niro-legal-toc" aria-label={page.tocLabel}>
              {page.sections.map((section, index) => (
                <a key={section.id} href={`#${section.id}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </a>
              ))}
            </nav>
          </div>

          <div className="niro-legal-sections">
            {page.sections.map((section, index) => (
              <article
                key={section.id}
                id={section.id}
                className="niro-legal-section"
              >
                <header className="niro-legal-section-head">
                  <span className="niro-legal-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="heading-write reveal-on-scroll">
                    <span className="heading-line">{section.title}</span>
                  </h2>
                </header>
                <div className="niro-legal-clauses">
                  {section.clauses.map((clause) => (
                    <div key={clause.title} className="niro-legal-clause">
                      <h3>{clause.title}</h3>
                      <p>{clause.body}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
