"use client";

import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineWorkHistory } from "react-icons/md";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import "./MainValueCard.css";

type IconType = "check" | "star" | "work";

interface MainValueCardProps {
  value: string;
  label: string;
  icon: IconType;
}

function MainValueCard({
  value = "40+",
  label = "Project Done",
  icon = "check",
}: MainValueCardProps) {
  const renderIcon = () => {
    switch (icon) {
      case "check":
        return <FaCheckCircle />;
      case "star":
        return <AiFillStar />;
      case "work":
        return <MdOutlineWorkHistory />;
      default:
        return <FaCheckCircle />;
    }
  };

  // Motion value for number animation
  const count = useMotionValue(0);
  const roundedValue = useTransform(count, (latest) => Math.round(latest));

  // Extract numbers from the value
  const numericValue = parseInt(value.replace(/\D/g, ""), 10) || 100;

  // Detect when the component is in view
  const ref = React.useRef(null);
  const isInView = useInView(ref, { margin: "-30% 0px -30% 0px", once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, { duration: 3 });
      return () => controls.stop();
    }
  }, [isInView]);

  return (
    <motion.div ref={ref} className="mainValueCard">
      {renderIcon()}

      <motion.h4
        style={{ fontSize: "32px", color: "black", fontWeight: "bold" }}
      >
        {roundedValue}
      </motion.h4>

      <motion.p
        style={{ fontSize: "18px", color: "black", fontWeight: "600" }}
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
      >
        {label}
      </motion.p>
    </motion.div>
  );
}

export default MainValueCard;
