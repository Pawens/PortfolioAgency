"use client";

import React, { useRef } from "react";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";
import ProjectStack from "../ProjectStack/ProjectStack";

function SectionTeamStack() {
  const sectionRef = useRef<HTMLElement>(null);
  return (
    <section className="section sectionFlex sectionTeamStack" ref={sectionRef}>
      <BackgroundCircles
        parentRef={sectionRef}
        numCircles={1}
        colors={["rgba(252, 109, 54, 0.6)"]}
        minSize={200}
        maxSize={200}
        blurAmount={110}
        initialPositions={[{ top: 0, left: 80 }]}
        moveDistances={[{ x: 600, y: 0 }]}
        sides={["left"]}
        scrollSpeedFactor={100}
      />
      <ProjectStack />
    </section>
  );
}

export default SectionTeamStack;
