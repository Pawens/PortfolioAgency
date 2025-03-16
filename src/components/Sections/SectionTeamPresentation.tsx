"use client";

import React, { useRef } from "react";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";
import TeamPresentation from "../TeamPresentation/TeamPresentation";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/translation";

function SectionTeamPresentation() {
  const { selectedLanguage } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  return (
    <section
      className="section sectionFlex sectionTeamPresentation"
      ref={sectionRef}
    >
      <BackgroundCircles
        parentRef={sectionRef}
        numCircles={2}
        colors={["rgba(252, 109, 54, 0.6)", "rgb(50, 43, 225, 0.6)"]}
        minSize={300}
        maxSize={600}
        blurAmount={170}
        initialPositions={[
          { top: 0, left: 80 },
          { top: 0, left: 0 },
        ]}
        moveDistances={[
          { x: 0, y: 200 },
          { x: 0, y: 400 },
        ]}
        sides={["top", "bottom"]}
        scrollSpeedFactor={100}
      />
      <h2>{translations[selectedLanguage].team.title}</h2>
      <TeamPresentation />
    </section>
  );
}

export default SectionTeamPresentation;
