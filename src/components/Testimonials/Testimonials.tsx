"use client";

import React, { useRef, useMemo, useEffect } from "react";
import useSWR from "swr";
import Testimonial from "../Testimonial/Testimonial";
import Image from "next/image";
import "./Testimonials.css";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/translation";
import { getTestimonialsData } from "@/utils/StrapiCallsUtils";
import { CustomButton } from "../CustomButton/CustomButton";

interface Testimonial {
  FullName: string;
  JobTitle: string;
  Message: string;
}

export default function Testimonials() {
  const { selectedLanguage } = useLanguage();
  const currentIndex = useRef(0);
  const isPaused = useRef(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const logoGoogle =
    "https://res.cloudinary.com/dslwin8c8/image/upload/v1741967970/LogoGoogle_b70wcs.webp";

  // ✅ Use SWR to fetch testimonials with 24h caching
  const fetcher = async () => {
    console.log(`Fetching testimonials for language: ${selectedLanguage}`);
    const response = await getTestimonialsData(selectedLanguage);
    return response.data;
  };

  const { data: testimonials = [] } = useSWR(
    [`testimonials`, selectedLanguage],
    fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false }
  );

  // ✅ Compute slides per view based on window width (useMemo prevents unnecessary recalculations)
  const slidesPerView = useMemo(() => {
    if (typeof window === "undefined") return 1; // SSR safety check
    const width = window.innerWidth;
    return width <= 1000 ? 1 : width <= 1200 ? 2 : 3;
  }, []);

  const slideWidth = useMemo(() => 100 / slidesPerView, [slidesPerView]);

  // ✅ Autoplay effect (Runs only when testimonials change)
  useEffect(() => {
    if (!testimonials.length) return;

    const interval = setInterval(() => {
      if (isPaused.current || !sliderRef.current) return;

      currentIndex.current += 1;
      if (currentIndex.current >= testimonials.length - slidesPerView + 1) {
        currentIndex.current = 0;
      }
      sliderRef.current.style.transform = `translateX(-${
        currentIndex.current * slideWidth
      }%)`;
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length, slideWidth, slidesPerView]);

  return (
    <div
      className="testimonialsContainer"
      onMouseEnter={() => (isPaused.current = true)}
      onMouseLeave={() => (isPaused.current = false)}
    >
      <div
        ref={sliderRef}
        className="testimonialsSlider"
        style={{
          transition: "transform 1s ease-in-out",
        }}
      >
        {testimonials.map((testimonial: Testimonial, index: number) => (
          <div
            key={index}
            className="testimonialSlide"
            style={{ width: `${slideWidth}%` }}
          >
            <Testimonial
              description={testimonial.Message}
              name={testimonial.FullName}
              role={testimonial.JobTitle}
            />
          </div>
        ))}
      </div>
      <a
        href="https://g.co/kgs/y9aYSmx"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Voir les avis sur Google (ouvre dans un nouvel onglet)"
        style={{ textDecoration: "none" }}
      >
        <CustomButton sx={{ marginTop: "16px", gap: "16px" }}>
          {translations[selectedLanguage].testimonials.seeGoogleReview}
          <Image
            src={logoGoogle}
            alt={`Logo Google`}
            objectFit="cover"
            width={32}
            height={32}
          />
        </CustomButton>
      </a>
    </div>
  );
}
