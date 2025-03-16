"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./LanguageSelector.module.css";

// Flags
import FlagEngland from "./FlagSvg/FlagEngland";
import FlagFrance from "./FlagSvg/FlagFrance";
import FlagGermany from "./FlagSvg/FlagGermany";
import FlagItaly from "./FlagSvg/FlagItaly";
import FlagSpain from "./FlagSvg/FlagSpain";

const LanguageSelectorComponent: React.FC = () => {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  // 🔹 Initially set flags as hidden instead of visible
  const [showFlags, setShowFlags] = useState(false);
  const [showFlags2, setShowFlags2] = useState(false);
  const [, setFlagSide] = useState(false);

  useEffect(() => {
    setFlagSide((prev) => !prev);
    setShowFlags((prev) => !prev);
    setTimeout(() => {
      setShowFlags2((prev) => !prev);
    }, 100);
  }, [selectedLanguage]);

  const changeLanguage = useCallback(
    (language: "en" | "fr" | "de" | "es" | "it") => {
      setSelectedLanguage(language);
    },
    [setSelectedLanguage]
  );

  return (
    <div className={styles.btLanguageContainer}>
      {/* Button to open/close language selection */}
      <button
        type="button"
        onClick={() => {
          setFlagSide((prev) => !prev);
          setShowFlags((prev) => !prev);
          setTimeout(() => {
            setShowFlags2((prev) => !prev);
          }, 100);
        }}
        className="MouseHoverEffect"
      >
        {selectedLanguage === "fr" && <FlagFrance aria-label="French flag" />}
        {selectedLanguage === "en" && <FlagEngland aria-label="English flag" />}
        {selectedLanguage === "de" && <FlagGermany aria-label="German flag" />}
        {selectedLanguage === "es" && <FlagSpain aria-label="Spanish flag" />}
        {selectedLanguage === "it" && <FlagItaly aria-label="Italian flag" />}
      </button>

      {/* Language selection buttons */}
      {(["fr", "en", "de", "es", "it"] as const).map((lang) =>
        selectedLanguage !== lang ? (
          <button
            key={lang}
            type="button"
            onClick={() => changeLanguage(lang)}
            className={`${
              showFlags2 ? styles.flagDisplay : styles.flagHidden
            } ${showFlags ? "" : styles.dpnone} MouseHoverEffect`}
          >
            {lang === "fr" && <FlagFrance aria-label="French flag" />}
            {lang === "en" && <FlagEngland aria-label="English flag" />}
            {lang === "de" && <FlagGermany aria-label="German flag" />}
            {lang === "es" && <FlagSpain aria-label="Spanish flag" />}
            {lang === "it" && <FlagItaly aria-label="Italian flag" />}
          </button>
        ) : null
      )}
    </div>
  );
};

// ✅ Fix: Add a Display Name
const LanguageSelector = React.memo(LanguageSelectorComponent);
LanguageSelector.displayName = "LanguageSelector";

export default LanguageSelector;
