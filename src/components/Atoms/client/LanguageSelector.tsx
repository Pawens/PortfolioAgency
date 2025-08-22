"use client";

import React, { useState } from "react";
import { Language, useLanguage } from "../../../context/LanguageContext";
import "../../../assets/styles/languageSelector.css";

const allLanguages = ["Fr", "En", "Es", "De", "It"];

function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const otherLanguages = allLanguages.filter((lang) => lang !== language);

  const handleSelect = (lang: string) => {
    setLanguage(lang as Language);
    console.log(`Language changed to: ${lang}`);

    setOpen(false);
  };

  return (
    <div className="relative w-[14px] h-fit ">
      <button
        className="text-[var(--color-secondary)] text-[14px] transition duration-200 hover:opacity-80 hover:-translate-y-[2px]"
        onClick={() => setOpen(!open)}
      >
        {language}
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-[12px] flex flex-col gap-[12px]">
          {otherLanguages.map((lang, i) => (
            <button
              key={lang}
              onClick={() => handleSelect(lang)}
              className="text-[var(--color-secondary)] text-[14px] animate-fadeDropIn transition duration-200 hover:opacity-80 hover:-translate-y-[2px]"
              style={{
                animationDelay: `${i * 100}ms`,
                opacity: 0,
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
