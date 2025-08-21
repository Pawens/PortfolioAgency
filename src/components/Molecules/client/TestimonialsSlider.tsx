"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { fetchTestimonials } from "@/utils/clientCache";
import ArrowPawensBig from "@/assets/icons/ArrowPawensBig.svg";

type Testimonial = {
  id: number;
  Message: string;
  FullName: string;
  JobTitle: string;
};

const INTERVAL_MS = 3000;
const SIDE_PEEK = 30; // 20px gap + 10px of neighboring slide content

export default function TestimonialsSlider() {
  const { language } = useLanguage();
  const [items, setItems] = useState<Testimonial[]>([]);
  const [current, setCurrent] = useState(0);
  const [isRewinding, setIsRewinding] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchTestimonials(language.toLowerCase())
      .then((resp) => {
        const data = (resp?.data || []) as Testimonial[];
        setItems(data);
        setCurrent(0);
      })
      .catch(console.error);
  }, [language]);

  useEffect(() => {
    if (!items.length) return;

    const id = setInterval(() => {
      if (current === items.length - 1) {
        // At last slide, rewind to start
        setIsRewinding(true);
        setCurrent(0);
      } else {
        setIsRewinding(false);
        setCurrent((prev) => prev + 1);
      }
    }, INTERVAL_MS);

    return () => clearInterval(id);
  }, [items.length, current]);

  const active = useMemo(
    () => (items.length ? items[current] : null),
    [items, current]
  );

  if (!active) return null;

  return (
    <div>
      {/* Slider viewport */}
      <div
        ref={containerRef}
        className="relative overflow-hidden w-full"
        style={{
          paddingLeft: `${SIDE_PEEK}px`,
          paddingRight: `${SIDE_PEEK}px`,
        }}
      >
        <div
          className="flex gap-[30px] transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(calc(-${current * 100}% + ${
              current * SIDE_PEEK * 2
            }px))`,
            transitionDuration: isRewinding ? "900ms" : "700ms",
          }}
        >
          {items.map((item, idx) => (
            <div
              key={item.id}
              className="flex-shrink-0"
              style={{
                width: `calc(100% - ${SIDE_PEEK * 2}px)`,
              }}
            >
              <div className="flex flex-col gap-[32px] items-center">
                <div className="h-[100px] w-full overflow-hidden">
                  <p
                    className="text-center leading-[20px]"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.Message}
                  </p>
                </div>

                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-[32px]">
                    <ArrowPawensBig
                      className="rotate-90 scale-[0.8]"
                      style={{ fill: "var(--color-secondary)" }}
                    />
                    <p>{item.FullName}</p>
                  </div>
                  <div className="flex items-center gap-[32px]">
                    <p>{item.JobTitle}</p>
                    <ArrowPawensBig
                      className="rotate-270 scale-[0.8]"
                      style={{ fill: "var(--color-secondary)" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[24px] flex items-center justify-center gap-[12px]">
        {items.map((_, idx) => (
          <span key={`dot-${idx}`} className="testimonial-progress">
            {idx === current ? (
              <span
                key={`fill-${current}-${isRewinding ? "rewind" : "normal"}`}
                className="testimonial-progress__fill"
                style={{ animationDuration: `${INTERVAL_MS}ms` }}
              />
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
}
