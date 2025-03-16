"use client";

import React, { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/translation";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";
import Testimonials from "../Testimonials/Testimonials";

function SectionTestimonials() {
  const { selectedLanguage } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      className="section sectionFlex sectionTestimonials"
      ref={sectionRef}
    >
      <BackgroundCircles
        parentRef={sectionRef}
        numCircles={1}
        colors={["rgb(50, 43, 225, 0.6)"]}
        minSize={800}
        maxSize={800}
        blurAmount={160}
        initialPositions={[{ top: 0, left: 80 }]}
        moveDistances={[{ x: 400, y: 0 }]}
        sides={["left"]}
        scrollSpeedFactor={100}
      />
      <h2>{translations[selectedLanguage].testimonials.title}</h2>
      <Testimonials />
    </section>
  );
}

export default SectionTestimonials;
