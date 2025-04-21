"use client";

import React, { useRef, useState, useEffect } from "react";
import { useInView } from "motion/react";
import "../../../assets/styles/typeWritterAnimation.css";

interface TypeWriterAnimationProps {
  text: string;
  speed?: number;
}

export default function TypeWritterAnimation({
  text,
  speed = 100,
}: TypeWriterAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-50% 0px -50% 0px",
  });
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (!inView) return;
    let idx = 0;
    function step() {
      setDisplay(text.slice(0, idx + 1));
      idx++;
      if (idx < text.length) setTimeout(step, speed);
    }
    step();
  }, [inView, text, speed]);

  return (
    <span ref={ref} className="typewriter" aria-label={text}>
      {display}
      <span className="cursor" />
    </span>
  );
}
