"use client";

import React, { useRef } from "react";
import AdvantageCard from "../AdvantageCard/AdvantageCard";
import "./AdvantagesCards.css";
import { useLanguage } from "@/context/LanguageContext";
import translations from "../../../public/translation";
import { motion, useInView } from "framer-motion";

function AdvantagesCards() {
  const { selectedLanguage } = useLanguage();

  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px", // Ensures animation triggers when the top reaches center
    once: true,
  });

  return (
    <div className="advantagesCards" ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <AdvantageCard
          title={translations[selectedLanguage].advantagesCards.title1}
          items={translations[selectedLanguage].advantagesCards.items1}
          color="blue"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <AdvantageCard
          title={translations[selectedLanguage].advantagesCards.title2}
          items={translations[selectedLanguage].advantagesCards.items2}
        />
      </motion.div>
    </div>
  );
}

export default AdvantagesCards;
