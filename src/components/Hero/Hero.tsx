"use client";

import React from "react";
import Button from "@mui/material/Button";
import "./Hero.css";
import Bubble from "../Bubble/Bubble";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import translations from "../../../public/translation";

function Hero() {
  const { selectedLanguage } = useLanguage();
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, {
    margin: "-20% 0px -20% 0px",
    once: true,
  });

  return (
    <div className="hero">
      <motion.p
        className="heroCredits"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {translations[selectedLanguage].hero.by} PARISOT Romain & SIMON Adam
      </motion.p>

      <motion.h1
        ref={titleRef}
        initial={{ opacity: 1 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {translations[selectedLanguage].hero.titleH1}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {translations[selectedLanguage].hero.descriptionHero}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Button
          onClick={() => {
            document.querySelector(".sectionProjects")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          sx={{
            backgroundColor: "transparent",
            color: "white",
            fontSize: "16px",
            fontWeight: "600 !important",
            borderRadius: "100px",
            padding: "12px 48px",
            border: "2px solid #FC6D36",
            position: "relative",
            overflow: "hidden",
            zIndex: 1,
            fontFamily: "Inter, sans-serif",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "#FC6D36",
              transform: "translateX(-100%)",
              transition: "transform 0.5s ease",
              zIndex: -1,
            },
            "&:hover": {
              color: "white",
              border: "2px solid #FC6D36",
            },
            "&:hover::after": {
              transform: "translateX(0)",
            },
          }}
          variant="outlined"
        >
          {translations[selectedLanguage].hero.ourRealizations}
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="testtest"
      >
        <Bubble showBackground>
          <motion.div className="devisBubble">
            <button
              onClick={() => {
                document.querySelector(".sectionContact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {translations[selectedLanguage].hero.getQuote}
            </button>
          </motion.div>
        </Bubble>
      </motion.div>
    </div>
  );
}

export default Hero;
