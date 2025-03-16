"use client";

import React, { useRef } from "react";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";
import ProjectsClient from "../Projects/ProjectsClient";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/translation";

function SectionProjects() {
  const { selectedLanguage } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="projects"
      className="section sectionFlex sectionProjects"
      ref={sectionRef}
    >
      <BackgroundCircles
        parentRef={sectionRef}
        numCircles={2}
        colors={["rgba(252, 109, 54, 0.6)", "rgb(50, 43, 225, 0.6)"]}
        minSize={1000}
        maxSize={1000}
        blurAmount={160}
        initialPositions={[
          { top: 100, left: 0 },
          { top: 0, left: 0 },
        ]}
        moveDistances={[
          { x: 0, y: 400 },
          { x: 300, y: 0 },
        ]}
        sides={["bottom", "right"]}
        scrollSpeedFactor={100}
      />
      <h2>{translations[selectedLanguage].projects.title}</h2>
      <ProjectsClient />
    </section>
  );
}

export default SectionProjects;
