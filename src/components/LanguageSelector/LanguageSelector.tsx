import { useEffect, useState } from "react";
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
  const [showFlags, setShowFlags] = useState(true);
  const [showFlags2, setShowFlags2] = useState(true);
  const [flagSide, setFlagSide] = useState(false);

  useEffect(() => {
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
  }, [selectedLanguage]);

  const changeLanguage = (language: string) => {
    setSelectedLanguage(language as "en" | "fr" | "de" | "es" | "it");
  };

  return (
    <div className={`${styles.btLanguageContainer}`}>
      <button
        type="button"
        onClick={() => {
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
        }}
        className="MouseHoverEffect"
      >
        {selectedLanguage === "fr" && (
          <div>
            <FlagFrance alt="French flag" />
          </div>
        )}
        {selectedLanguage === "en" && (
          <div>
            <FlagEngland alt="England flag" />
          </div>
        )}
        {selectedLanguage === "de" && (
          <div>
            <FlagGermany alt="German flag" />
          </div>
        )}
        {selectedLanguage === "es" && (
          <div>
            <FlagSpain alt="Spanish flag" />
          </div>
        )}
        {selectedLanguage === "it" && (
          <div>
            <FlagItaly alt="Italian flag" />
          </div>
        )}
      </button>
      <button
        type="button"
        onClick={() => changeLanguage("fr")}
        className={`${
          showFlags2 && selectedLanguage !== "fr"
            ? styles.flagDisplay
            : styles.flagHidden
        } ${
          showFlags && selectedLanguage !== "fr" ? "" : styles.dpnone
        } MouseHoverEffect`}
      >
        <FlagFrance alt="French flag" />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage("en")}
        className={`${
          showFlags2 && selectedLanguage !== "en"
            ? styles.flagDisplay
            : styles.flagHidden
        } ${
          showFlags && selectedLanguage !== "en" ? "" : styles.dpnone
        } MouseHoverEffect`}
      >
        <FlagEngland alt="England flag" />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage("de")}
        className={`${
          showFlags2 && selectedLanguage !== "de"
            ? styles.flagDisplay
            : styles.flagHidden
        } ${
          showFlags && selectedLanguage !== "de" ? "" : styles.dpnone
        } MouseHoverEffect`}
      >
        <FlagGermany alt="German flag" />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage("es")}
        className={`${
          showFlags2 && selectedLanguage !== "es"
            ? styles.flagDisplay
            : styles.flagHidden
        } ${
          showFlags && selectedLanguage !== "es" ? "" : styles.dpnone
        } MouseHoverEffect`}
      >
        <FlagSpain alt="Spanish flag" />
      </button>
      <button
        type="button"
        onClick={() => changeLanguage("it")}
        className={`${
          showFlags2 && selectedLanguage !== "it"
            ? styles.flagDisplay
            : styles.flagHidden
        } ${
          showFlags && selectedLanguage !== "it" ? "" : styles.dpnone
        } MouseHoverEffect`}
      >
        <FlagItaly alt="Italian flag" />
      </button>
    </div>
  );
}
