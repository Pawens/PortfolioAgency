"use client";

import React from "react";
import { motion, Variants } from "motion/react";

interface AnimatedTextProps {
  text: string;
}

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const child: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 500, damping: 30 },
  },
};

export default function AnimatedText({ text }: AnimatedTextProps) {
  const chars = Array.from(text);

  return (
    <motion.strong
      className="inline-block italic font-[600] overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px 0px" }}
    >
      {chars.map((char, i) => {
        const isSpace = char === " ";
        return (
          <motion.span
            key={i}
            variants={child}
            style={{
              display: "inline-block",
              width: isSpace ? "0.3em" : undefined,
            }}
          >
            {isSpace ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </motion.strong>
  );
}
