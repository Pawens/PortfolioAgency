"use client";

import React from "react";
import ExpertiseCard from "../ExpertiseCard/ExpertiseCard";
import { LuCodeXml, LuPaintbrush, LuSmartphone } from "react-icons/lu";
import { motion } from "framer-motion";
import "./Expertises.css";
import { useLanguage } from "@/context/LanguageContext";
import translations from "../../../public/translation";

function Expertises() {
  const { selectedLanguage } = useLanguage();

  const expertises = [
    {
      icon: LuCodeXml,
      label: translations[selectedLanguage].expertise.expertise1.title,
      description:
        translations[selectedLanguage].expertise.expertise1.description,
    },
    {
      icon: LuPaintbrush,
      label: translations[selectedLanguage].expertise.expertise2.title,
      description:
        translations[selectedLanguage].expertise.expertise2.description,
    },
    {
      icon: LuSmartphone,
      label: translations[selectedLanguage].expertise.expertise3.title,
      description:
        translations[selectedLanguage].expertise.expertise3.description,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="expertisesContainer"
    >
      {expertises.map((expertise, index) => (
        <ExpertiseCard key={index} {...expertise} index={index} />
      ))}
    </motion.div>
  );
}

export default Expertises;
