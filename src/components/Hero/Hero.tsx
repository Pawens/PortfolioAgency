"use client";

import React from "react";
import Button from "@mui/material/Button";
import "./Hero.css";
import Bubble from "../Bubble/Bubble";
import { m } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import translations from "../../../public/translation";

function Hero() {
  const { selectedLanguage } = useLanguage();

  return (
    <div className="hero">
      <p className="heroCredits">
        {translations[selectedLanguage].hero.by} PARISOT Romain & SIMON Adam
      </p>
      <h1>{translations[selectedLanguage].hero.titleH1}</h1>
      <p>{translations[selectedLanguage].hero.descriptionHero}</p>
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
      <div className="testtest">
        <Bubble showBackground>
          <m.div className="devisBubble">
            <button
              onClick={() => {
                document.querySelector(".sectionContact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {translations[selectedLanguage].hero.getQuote}
            </button>
          </m.div>
        </Bubble>
      </div>
    </div>
  );
}

export default Hero;
