"use client";

import React, { useState } from "react";
import { Language, useLanguage } from "../../context/LanguageContext";
import "../../assets/styles/languageSelector.css";

const allLanguages = ["Fr", "En", "Es", "De", "It"];

function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const otherLanguages = allLanguages.filter((lang) => lang !== language);

  const handleSelect = (lang: string) => {
    setLanguage(lang as Language);
    setOpen(false);
  };

  return (
    <div className="relative w-fit">
      <button
        className="text-[var(--color-secondary)] text-[12px]"
        onClick={() => setOpen(!open)}
      >
        {language}
      </button>

      {open && (
        <div className="flex flex-col gap-[8px] mt-[4px]">
          {otherLanguages.map((lang, i) => (
            <button
              key={lang}
              onClick={() => handleSelect(lang)}
              className="text-[var(--color-secondary)] text-[12px] animate-fadeDropIn"
              style={{
                animationDelay: `${i * 100}ms`,
                opacity: 0, // <- ça garde le bouton invisible avant son tour
              }}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
