"use client";

import React, { useRef } from "react";
import { IconType } from "react-icons";
import { motion, useInView } from "framer-motion";
import "./ExpertiseCard.css";

interface ExpertiseCardProps {
  icon: IconType;
  label: string;
  description: string;
  index: number;
}

function ExpertiseCard({
  icon: Icon,
  label,
  description,
  index,
}: ExpertiseCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
    once: true,
  });

  const getInitialX = () => {
    if (index === 0) return -50; // First card from left
    if (index === 2) return 50; // Third card from right
    return 0; // Second card from bottom
  };

  const getInitialY = () => (index === 1 ? 50 : 0); // Second card from bottom

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: getInitialX(), y: getInitialY() }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="expertiseCard"
    >
      <Icon />
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {label}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

export default ExpertiseCard;
