"use client";

import React, { useEffect } from "react";

export default function ScrollAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px",
    });

    const initObserver = () => {
      const elements = document.querySelectorAll(".reveal-on-scroll");
      elements.forEach((el) => {
        // If element is already in the viewport upon initial load, reveal immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 40 && rect.bottom > 0) {
          el.classList.add("is-revealed");
        }
        observer.observe(el);
      });
    };

    initObserver();

    // Observe dynamically added elements
    const mutationObserver = new MutationObserver(() => {
      const newElements = document.querySelectorAll(
        ".reveal-on-scroll:not([data-observed])"
      );
      newElements.forEach((el) => {
        el.setAttribute("data-observed", "true");
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 40 && rect.bottom > 0) {
          el.classList.add("is-revealed");
        }
        observer.observe(el);
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return <>{children}</>;
}

