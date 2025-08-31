"use client";

import ArrowPawensBig from "@/assets/icons/ArrowPawensBig.svg";
import { Language } from "@/context/LanguageContext";
import { useEffect, useMemo, useRef, useState } from "react";

export type Testimonial = {
  id: number;
  Message: string;
  FullName: string;
  JobTitle: string;
};

const INTERVAL_MS = 3000;
const SIDE_PEEK = 30;

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
  language: Language;
}

export default function TestimonialsSlider({
  testimonials,
}: TestimonialsSliderProps) {
  const [items, setItems] = useState<Testimonial[]>(testimonials || []);
  const [current, setCurrent] = useState(0);
  const [isRewinding, setIsRewinding] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const elapsedTimeRef = useRef<number>(0);

  // If testimonials prop changes (language switch), reset.
  useEffect(() => {
    setItems(testimonials || []);
    setCurrent(0);
    startTimeRef.current = Date.now();
    elapsedTimeRef.current = 0;
  }, [testimonials]);

  useEffect(() => {
    if (!items.length) return;

    const startTimer = () => {
      if (isPaused) return;

      const remainingTime = INTERVAL_MS - elapsedTimeRef.current;

      intervalRef.current = setTimeout(() => {
        if (current === items.length - 1) {
          setIsRewinding(true);
          setCurrent(0);
        } else {
          setIsRewinding(false);
          setCurrent((prev) => prev + 1);
        }
        elapsedTimeRef.current = 0;
        startTimeRef.current = Date.now();
      }, remainingTime);
    };

    if (!isPaused && elapsedTimeRef.current === 0) {
      startTimeRef.current = Date.now();
    }

    startTimer();

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [items.length, current, isPaused]);

  const active = useMemo(
    () => (items.length ? items[current] : null),
    [items, current]
  );

  const handleMouseEnter = () => {
    if (!isPaused) {
      elapsedTimeRef.current += Date.now() - startTimeRef.current;
    }
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    startTimeRef.current = Date.now();
    setIsPaused(false);
  };

  if (!active) return null;

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
          {items.map((item) => (
            <div
              key={item.id}
              className="testimonial-item flex-shrink-0"
              style={{
                width: `calc(100% - ${SIDE_PEEK * 2}px)`,
              }}
            >
              <div className="flex flex-col gap-[32px] items-center">
                <div className="h-[100px] w-full overflow-hidden">
                  <p
                    className="testimonial-message text-center leading-[20px]"
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

                <div className="testimonial-footer flex items-center justify-between w-full">
                  <div className="testimonial-arrow-container flex items-center gap-[32px]">
                    <ArrowPawensBig
                      className="testimonial-arrow rotate-90 scale-[0.8]"
                      style={{ fill: "var(--color-secondary)" }}
                    />
                    <p className="testimonial-footer-names">{item.FullName}</p>
                  </div>
                  <div className="testimonial-arrow-container flex items-center gap-[32px]">
                    <p className="testimonial-footer-names">{item.JobTitle}</p>
                    <ArrowPawensBig
                      className="testimonial-arrow rotate-270 scale-[0.8]"
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
            {idx === current && !isPaused ? (
              <span
                key={`fill-${current}-${isRewinding ? "rewind" : "normal"}`}
                className="testimonial-progress__fill"
                style={{
                  animationDuration: `${
                    INTERVAL_MS - elapsedTimeRef.current
                  }ms`,
                }}
              />
            ) : idx === current && isPaused ? (
              <span
                className="testimonial-progress__fill paused"
                style={{
                  animationDuration: `${INTERVAL_MS}ms`,
                  animationDelay: `-${elapsedTimeRef.current}ms`,
                }}
              />
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
}
