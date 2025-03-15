"use client";

import React, { useRef } from "react";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";
import ProjectsSteps from "../ProjectsSteps/ProjectsSteps";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/translation";

function SectionProjectSteps() {
  const { selectedLanguage } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section className="section sectionProjectsSteps" ref={sectionRef}>
      <BackgroundCircles
        parentRef={sectionRef}
        numCircles={1}
        colors={["rgba(252, 109, 54, 0.6)"]}
        minSize={400}
        maxSize={400}
        blurAmount={170}
        initialPositions={[{ top: 0, left: 90 }]}
        moveDistances={[{ x: 0, y: 400 }]}
        sides={["bottom"]}
        scrollSpeedFactor={100}
      />
      <h2>{translations[selectedLanguage].projectsSteps.title}</h2>
      <ProjectsSteps />
    </section>
  );
}

export default SectionProjectSteps;
