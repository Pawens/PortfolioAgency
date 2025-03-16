"use client";

import React, { useRef } from "react";
import Hero from "../Hero/Hero";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";

function SectionHero() {
  const sectionRef = useRef<HTMLElement>(null);
  return (
    <section className="section sectionHero" ref={sectionRef}>
      <Hero />
      <BackgroundCircles
        parentRef={sectionRef}
        numCircles={2}
        colors={["rgba(252, 109, 54, 0.6)", "rgb(50, 43, 225, 0.6)"]}
        minSize={1000}
        maxSize={1000}
        blurAmount={110}
        initialPositions={[
          { top: -75, left: 0 },
          { top: -60, left: 60 },
        ]}
        moveDistances={[
          { x: 280, y: 0 },
          { x: 290, y: 0 },
        ]}
        sides={["left", "right"]}
        scrollSpeedFactor={100}
      />
    </section>
  );
}

export default SectionHero;
