"use client";

import React from "react";
import "./Hero.css";
import Bubble from "../Bubble/Bubble";
import { motion } from "framer-motion";
import translations from "@/translation";
import { CustomButton } from "../CustomButton/CustomButton";
import { SimpleButton } from "../CustomButton/SimpleButton";
import { useLanguage } from "@/context/LanguageContext";

function Hero() {
  const { selectedLanguage } = useLanguage();

  return (
    <div className="hero">
      <motion.p
        className="heroCredits"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {translations[selectedLanguage].hero.by} PARISOT Romain & SIMON Adam
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {translations[selectedLanguage].hero.titleH1}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {translations[selectedLanguage].hero.descriptionHero}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <CustomButton
          value={translations[selectedLanguage].hero.ourRealizations}
          callback="scrollToProjects"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="testtest"
      >
        <Bubble showBackground>
          <motion.div className="devisBubble">
            <SimpleButton
              value={translations[selectedLanguage].hero.getQuote}
              callback="scrollToContact"
            />
          </motion.div>
        </Bubble>
      </motion.div>
    </div>
  );
}

export default Hero;
