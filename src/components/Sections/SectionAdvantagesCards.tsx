"use client";

import React, { useRef } from "react";
import AdvantagesCards from "../AdvantagesCards/AdvantagesCards";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";

function SectionAdvantagesCards() {
  const sectionRef = useRef<HTMLElement>(null);
  return (
    <section className="section sectionAdvantages" ref={sectionRef}>
      <AdvantagesCards />
      <BackgroundCircles
        parentRef={sectionRef}
        numCircles={1}
        colors={["rgb(50, 43, 225, 0.6)"]}
        minSize={500}
        maxSize={500}
        blurAmount={110}
        initialPositions={[{ top: -0, left: -10 }]}
        moveDistances={[{ x: 0, y: 400 }]}
        sides={["bottom"]}
        scrollSpeedFactor={200}
      />
    </section>
  );
}

export default SectionAdvantagesCards;
