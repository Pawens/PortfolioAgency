"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

function Bubble({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    setPosition({
      x: e.clientX - centerX,
      y: e.clientY - centerY,
    });

    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={containerRef}
      style={{
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setPosition({ x: 0, y: 0 });
        setIsHovered(false);
      }}
      onMouseEnter={() => setIsHovered(true)}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {/* Background effect */}
      <motion.div
        className="background-effect"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 2 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fc6d36",
          borderRadius: "50%",
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Children wrapper */}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </motion.div>
  );
}

export default Bubble;
