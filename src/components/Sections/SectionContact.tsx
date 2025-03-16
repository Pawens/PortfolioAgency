"use client";

import React, { useRef } from "react";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";
import ContactForm from "../ContactForm/ContactForm";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/translation";
function SectionContact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { selectedLanguage } = useLanguage();

  return (
    <section className="section sectionFlex sectionContact" ref={sectionRef}>
      <BackgroundCircles
        parentRef={sectionRef}
        numCircles={2}
        colors={["rgb(50, 43, 225, 0.6)", "rgba(252, 109, 54, 0.6)"]}
        minSize={700}
        maxSize={700}
        blurAmount={110}
        initialPositions={[
          { top: 0, left: 0 },
          { top: 0, left: 60 },
        ]}
        moveDistances={[
          { x: 500, y: 0 },
          { x: 500, y: 0 },
        ]}
        sides={["left", "right"]}
        scrollSpeedFactor={100}
      />
      <h2>{translations[selectedLanguage].contact.title}</h2>
      <ContactForm />
    </section>
  );
}

export default SectionContact;
