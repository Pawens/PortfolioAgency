"use client";

import React, { useState, useEffect } from "react";
import Testimonial from "../Testimonial/Testimonial";
import Button from "@mui/material/Button";
import "./Testimonials.css";
import Image from "next/image";
import logoGoogle from "../../../public/img/LogoGoogle.webp";
import { useLanguage } from "@/context/LanguageContext";
import translations from "../../../public/translation";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface Testimonial {
  FullName: string;
  JobTitle: string;
  Message: string;
}

const fetchTestimonial = async (lang: string): Promise<Testimonial[]> => {
  try {
    const response = await fetch(`${BASE_URL}/api/testimonials?locale=${lang}`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const result = await response.json();
    console.log("Fetched Testimonials:", result);
    return result.data || [];
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
};

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  const { selectedLanguage } = useLanguage();

  useEffect(() => {
    if (selectedLanguage) {
      fetchTestimonial(selectedLanguage).then(setTestimonials);
    }
  }, [selectedLanguage]);

  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let interval: NodeJS.Timeout;
    const slidesPerView = windowWidth <= 1000 ? 1 : windowWidth <= 1200 ? 2 : 3;

    if (!isPaused && testimonials.length > slidesPerView) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex >= testimonials.length - slidesPerView + 1) {
            return 0;
          }
          return nextIndex;
        });
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isPaused, windowWidth, isClient, testimonials.length]);

  if (!isClient) return null;

  const slideWidth =
    windowWidth <= 1000 ? 100 : windowWidth <= 1200 ? 50 : 33.33;

  return (
    <div
      className="testimonialsContainer"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="testimonialsSlider"
        style={{
          transform: `translateX(-${currentIndex * slideWidth}%)`,
          transition: "transform 1s ease-in-out",
        }}
      >
        {testimonials.map((testimonial, index) => (
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
        style={{
          textDecoration: "none",
        }}
      >
        <Button
          sx={{
            backgroundColor: "transparent",
            color: "white",
            fontSize: "16px",
            fontWeight: "600 !important",
            borderRadius: "100px",
            padding: "12px 48px",
            border: "2px solid #FC6D36",
            position: "relative",
            overflow: "hidden",
            zIndex: 1,
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Inter, sans-serif",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "#FC6D36",
              transform: "translateX(-100%)",
              transition: "transform 0.5s ease",
              zIndex: -1,
            },
            "&:hover": {
              color: "white",
              border: "2px solid #FC6D36",
            },
            "&:hover::after": {
              transform: "translateX(0)",
            },
          }}
          variant="outlined"
        >
          {translations[selectedLanguage].testimonials.seeGoogleReview}
          <Image
            src={logoGoogle}
            alt={`Logo Google`}
            objectFit="cover"
            width={32}
            height={32}
          />
        </Button>
      </a>
    </div>
  );
}

export default Testimonials;
