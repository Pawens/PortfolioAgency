"use client";

import { useEffect } from "react";

export default function AnimateProcessObserver({
  selector = ".process-square",
  stagger = 120,
}: {
  selector?: string;
  stagger?: number;
}) {
  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll(selector)
    ) as HTMLElement[];
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const idxAttr = el.getAttribute("data-index");
          const idx = idxAttr ? parseInt(idxAttr, 10) : 0;
          el.style.animationDelay = `${(idx || 0) * stagger}ms`;
          // Alternate direction
          if (el.getAttribute("data-direction") === "left") {
            el.classList.add("animate-slide-in-left");
          } else {
            el.classList.add("animate-slide-in-right");
          }
          obs.unobserve(el);
        });
      },
      { root: null, rootMargin: "0px 0px -20% 0px", threshold: 0 }
    );

    items.forEach((it) => observer.observe(it));

    return () => observer.disconnect();
  }, [selector, stagger]);

  return null;
}
