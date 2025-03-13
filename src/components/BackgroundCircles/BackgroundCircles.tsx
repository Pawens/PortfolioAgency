import React, { useMemo, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./BackgroundCircles.css";

interface AnimatedBackgroundProps {
  numCircles?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  blurAmount?: number;
  initialPositions?: { top: number; left: number }[];
  moveDistances?: { x: number; y: number }[];
  sides?: ("left" | "right" | "top" | "bottom")[];
  sectionRef: React.RefObject<HTMLElement>;
  scrollSpeedFactor?: number;
  enableAnimation?: boolean;
  enableScrollAnimation?: boolean;
}

const BackgroundCircles: React.FC<AnimatedBackgroundProps> = ({
  numCircles = 3,
  colors = ["rgba(255, 0, 150, 0.7)", "rgba(0, 150, 255, 0.7)"],
  minSize = 200,
  maxSize = 500,
  blurAmount = 50,
  initialPositions = [],
  moveDistances = [],
  sides = [],
  scrollSpeedFactor = 300,
  sectionRef,
  enableAnimation = true,
  enableScrollAnimation = true,
}) => {
  const isInView = useInView(sectionRef, { margin: "-10% 0px -10% 0px" });
  const [scrollOffset, setScrollOffset] = useState(0);

  React.useEffect(() => {
    if (!enableScrollAnimation) return;

    const handleScroll = () => {
      if (sectionRef.current) {
        setScrollOffset(window.scrollY - sectionRef.current.offsetTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableScrollAnimation, sectionRef]);

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
  }, [numCircles, colors, minSize, maxSize, initialPositions, moveDistances, sides]);

  return (
    <div className="backgroundAnimationCirclesContainer">
      {isInView &&
        enableAnimation &&
        circles.map((circle, index) => {
          const moveX = enableScrollAnimation
            ? (scrollOffset / scrollSpeedFactor) * circle.moveX
            : 0;
          const moveY = enableScrollAnimation
            ? (scrollOffset / scrollSpeedFactor) * circle.moveY
            : 0;

          return (
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
                x: moveX,
                y: moveY,
              }}
            />
          );
        })}
    </div>
  );
};

export default BackgroundCircles;
