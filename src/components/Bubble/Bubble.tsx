"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";
import { BubbleContext } from "../../context/BubbleContext";

interface BubbleProps {
  children: ReactNode;
  showBackground?: boolean;
}

function Bubble({ children, showBackground = false }: BubbleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    setPosition({
      x: e.clientX - centerX,
      y: e.clientY - centerY,
    });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const entryX = e.clientX - rect.left;
    const entryY = e.clientY - rect.top;

    setOrigin({
      x: entryX - rect.width / 2,
      y: entryY - rect.height / 2,
    });

    setIsHovered(true);
  };

  return (
    <BubbleContext.Provider value={isHovered}>
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
        onMouseEnter={handleMouseEnter}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        {/* Background effect */}
        {showBackground && (
          <motion.div
            className="background-effect"
            initial={{ scale: 0, opacity: 0, x: origin.x, y: origin.y }}
            animate={{
              scale: isHovered ? 1 : 0,
              opacity: isHovered ? 1 : 0,
              x: 0,
              y: 0,
            }}
            transition={{
              scale: { duration: 0.3 },
              x: { type: "spring", stiffness: 300, damping: 20 },
              y: { type: "spring", stiffness: 300, damping: 20 },
            }}
            style={{
              position: "absolute",

              backgroundColor: "#fc6d36",
              borderRadius: "50%",
              width: "100%",
              height: "100%",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
        )}

        <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      </motion.div>
    </BubbleContext.Provider>
  );
}

export default Bubble;
