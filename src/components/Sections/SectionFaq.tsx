"use client";

import React, { useRef } from "react";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";
import Faq from "../Faq/Faq";

function SectionFaq() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section className="section sectionFaq" ref={sectionRef}>
      <BackgroundCircles
        parentRef={sectionRef}
        numCircles={1}
        colors={["rgba(252, 109, 54, 0.6)"]}
        minSize={400}
        maxSize={400}
        blurAmount={170}
        initialPositions={[{ top: 0, left: 0 }]}
        moveDistances={[{ x: 0, y: 400 }]}
        sides={["bottom"]}
        scrollSpeedFactor={100}
      />
      <Faq />
    </section>
  );
}

export default SectionFaq;
