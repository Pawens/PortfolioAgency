"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./BackgroundCircles.css";

type AnimatedBackgroundProps = {
  parentRef: React.RefObject<HTMLElement | null>;
  numCircles?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  blurAmount?: number;
  initialPositions?: { top: number; left: number }[];
  moveDistances?: { x: number; y: number }[];
  sides?: ("left" | "right" | "top" | "bottom")[];
  scrollSpeedFactor?: number;
};

const BackgroundCircles: React.FC<AnimatedBackgroundProps> = ({
  parentRef,
  numCircles = 3,
  colors = ["rgba(255, 0, 150, 0.7)", "rgba(0, 150, 255, 0.7)"],
  minSize = 200,
  maxSize = 500,
  blurAmount = 50,
  initialPositions = [],
  moveDistances = [],
  sides = [],
  scrollSpeedFactor = 300,
}) => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen size detection
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 800);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Intersection Observer for visibility detection
  useEffect(() => {
    if (!parentRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(parentRef.current);
    return () => observer.disconnect();
  }, [parentRef]);

  // Scroll handler with parent-relative calculations
  useEffect(() => {
    if (!isInView || !parentRef.current) return;

    const handleScroll = () => {
      const section = parentRef.current;
      if (section) {
        setScrollOffset(window.scrollY - section.offsetTop);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInView, parentRef]);

  // Memoized circles configuration
  const circles = useMemo(() => {
    const allSides: ("left" | "right" | "top" | "bottom")[] = [
      "left",
      "right",
      "top",
      "bottom",
    ];

    return Array.from({ length: numCircles }).map((_, index) => {
      const assignedSide = sides[index] || allSides[index % allSides.length];
      const assignedTop = initialPositions[index]?.top ?? Math.random() * 80;
      const assignedLeft = initialPositions[index]?.left ?? Math.random() * 80;
      const moveX =
        assignedSide === "left"
          ? -(moveDistances[index]?.x ?? 50)
          : assignedSide === "right"
          ? moveDistances[index]?.x ?? 50
          : 0;
      const moveY =
        assignedSide === "top"
          ? -(moveDistances[index]?.y ?? 50)
          : assignedSide === "bottom"
          ? moveDistances[index]?.y ?? 50
          : 0;
      const colorIndex = index % colors.length;

      return {
        size: Math.random() * (maxSize - minSize) + minSize,
        top: assignedTop,
        left: assignedLeft,
        background: colors[colorIndex],
        side: assignedSide,
        moveX,
        moveY,
      };
    });
  }, [
    numCircles,
    colors,
    minSize,
    maxSize,
    initialPositions,
    moveDistances,
    sides,
  ]);

  return (
    <div className="backgroundAnimationCirclesContainer">
      {isInView &&
        !isMobile &&
        circles.map((circle, index) => (
          <motion.div
            key={index}
            className="backgroundAnimationCircles"
            style={{
              width: circle.size,
              height: circle.size,
              top: `${circle.top}%`,
              left: `${circle.left}%`,
              background: circle.background,
              filter: `blur(${blurAmount}px)`,
              x: (scrollOffset / scrollSpeedFactor) * circle.moveX,
              y: (scrollOffset / scrollSpeedFactor) * circle.moveY,
            }}
          />
        ))}
    </div>
  );
};

export default BackgroundCircles;
