import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./LanguageSelector.module.css";

// Flags
import FlagEngland from "./FlagSvg/FlagEngland";
import FlagFrance from "./FlagSvg/FlagFrance";
import FlagGermany from "./FlagSvg/FlagGermany";
import FlagItaly from "./FlagSvg/FlagItaly";
import FlagSpain from "./FlagSvg/FlagSpain";

export default function LanguageSelector() {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const [showFlags, setShowFlags] = useState(false);
  const [showFlags2, setShowFlags2] = useState(false);
  const [flagSide, setFlagSide] = useState(false);

  const toggleFlags = () => {
    if (flagSide) {
      setFlagSide(false);
      setShowFlags(!showFlags);
      setTimeout(() => {
        setShowFlags2(!showFlags2);
      }, 100);
    } else {
      setFlagSide(true);
      setShowFlags2(!showFlags2);
      setTimeout(() => {
        setShowFlags(!showFlags);
      }, 100);
    }
  };

  const changeLanguage = (language: "en" | "fr" | "de" | "es" | "it") => {
    setSelectedLanguage(language);
    toggleFlags();
  };

  return (
    <div className={`${styles.btLanguageContainer}`}>
      <button
        type="button"
        onClick={toggleFlags}
        className="MouseHoverEffect"
      >
        {selectedLanguage === "fr" && <FlagFrance aria-label="French flag" />}
        {selectedLanguage === "en" && <FlagEngland aria-label="England flag" />}
        {selectedLanguage === "de" && <FlagGermany aria-label="German flag" />}
        {selectedLanguage === "es" && <FlagSpain aria-label="Spanish flag" />}
        {selectedLanguage === "it" && <FlagItaly aria-label="Italian flag" />}
      </button>
      <button
        type="button"
        onClick={() => changeLanguage("fr")}
        className={`${
          showFlags2 && selectedLanguage !== "fr" ? styles.flagDisplay : styles.flagHidden
        } ${showFlags && selectedLanguage !== "fr" ? "" : styles.dpnone} MouseHoverEffect`}
      >
        <FlagFrance aria-label="French flag" />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage("en")}
        className={`${
          showFlags2 && selectedLanguage !== "en" ? styles.flagDisplay : styles.flagHidden
        } ${showFlags && selectedLanguage !== "en" ? "" : styles.dpnone} MouseHoverEffect`}
      >
        <FlagEngland aria-label="England flag" />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage("de")}
        className={`${
          showFlags2 && selectedLanguage !== "de" ? styles.flagDisplay : styles.flagHidden
        } ${showFlags && selectedLanguage !== "de" ? "" : styles.dpnone} MouseHoverEffect`}
      >
        <FlagGermany aria-label="German flag" />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage("es")}
        className={`${
          showFlags2 && selectedLanguage !== "es" ? styles.flagDisplay : styles.flagHidden
        } ${showFlags && selectedLanguage !== "es" ? "" : styles.dpnone} MouseHoverEffect`}
      >
        <FlagSpain aria-label="Spanish flag" />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage("it")}
        className={`${
          showFlags2 && selectedLanguage !== "it" ? styles.flagDisplay : styles.flagHidden
        } ${showFlags && selectedLanguage !== "it" ? "" : styles.dpnone} MouseHoverEffect`}
      >
        <FlagItaly aria-label="Italian flag" />
      </button>
    </div>
  );
}
