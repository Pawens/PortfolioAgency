"use client";

import { useEffect } from "react";

export default function AnimateListObserver({
  selector = ".service-item",
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

    // Trigger when the element reaches about 25% from the top of the viewport
    // (rootMargin creates a horizontal line at that vertical position)
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const idxAttr = el.getAttribute("data-index");
          const idx = idxAttr ? parseInt(idxAttr, 10) : 0;
          // staggered delay
          el.style.animationDelay = `${(idx || 0) * stagger}ms`;
          el.classList.add("animate-slide-in-left");
          // Keep the initial "opacity-0" class so the animation can smoothly animate
          // opacity from 0 -> 1; removing the class causes a visual jump.
          obs.unobserve(el);
        });
      },
      // rootMargin creates an intersection line closer to the bottom of the viewport.
      // '-90% 0px -10% 0px' collapses the intersection box to a horizontal line at ~90%
      // from the top (i.e. the bottom 10% of the screen) so elements trigger when
      // they reach that bottom-10% area.
      { root: null, rootMargin: "-90% 0px -10% 0px", threshold: 0 }
    );

    items.forEach((it) => observer.observe(it));

    return () => observer.disconnect();
  }, [selector, stagger]);

  return null;
}
