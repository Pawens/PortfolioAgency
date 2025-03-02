"use client";

import React, { useRef } from "react";
import "./AdvantageCard.css";
import { FaCircleCheck } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";

interface AdvantageCardProps {
  title: string;
  items: string[];
  color?: "orange" | "blue";
}

function AdvantageCard({ title, items, color = "orange" }: AdvantageCardProps) {
  const iconColor = color === "orange" ? "#fc6d36" : "#322be1";

  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
    once: true,
  });

  return (
    <motion.div ref={ref} className="advantageCard">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {title}
      </motion.h4>

      <motion.ul>
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -15 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.2 * (index + 1),
              ease: "easeOut",
            }}
          >
            <FaCircleCheck style={{ color: iconColor, marginRight: "8px" }} />
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default AdvantageCard;
