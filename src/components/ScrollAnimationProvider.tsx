"use client";

import React, { useEffect } from "react";

export default function ScrollAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const reveal = (el: Element) => {
      if (el.classList.contains("is-revealed")) return;
      if (el.classList.contains("heading-write")) {
        el.querySelectorAll(".heading-line").forEach((line) => {
          (line as HTMLElement).style.animation = "";
        });
        void (el as HTMLElement).offsetWidth;
      }
      el.classList.add("is-revealed");
    };

    const reset = (el: Element) => {
      el.classList.remove("is-revealed");
      if (el.classList.contains("heading-write")) {
        el.querySelectorAll(".heading-line").forEach((line) => {
          (line as HTMLElement).style.animation = "none";
        });
      }
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.18) {
          reveal(entry.target);
        } else if (entry.intersectionRatio === 0) {
          reset(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0, 0.18],
      rootMargin: "0px 0px -40px 0px",
    });

    const watch = (el: Element) => {
      if (el.getAttribute("data-observed") === "true") return;
      el.setAttribute("data-observed", "true");
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40 && rect.bottom > 0) {
        reveal(el);
      }
      observer.observe(el);
    };

    const initObserver = () => {
      document.querySelectorAll(".reveal-on-scroll").forEach(watch);
    };

    initObserver();

    // Observe dynamically added elements
    const mutationObserver = new MutationObserver(() => {
      const newElements = document.querySelectorAll(
        ".reveal-on-scroll:not([data-observed])"
      );
      newElements.forEach(watch);
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.querySelectorAll("[data-observed]").forEach((el) => {
        el.removeAttribute("data-observed");
      });
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return <>{children}</>;
}

