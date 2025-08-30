"use client";

import { useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import { getTranslations } from "../utils/serverTranslations";

export function useTranslations() {
  const { language } = useLanguage();

  const translations = useMemo(() => {
    return getTranslations(language);
  }, [language]);

  const t = useMemo(() => {
    return (path: string) => {
      const keys = path.split(".");
      let current: any = translations;

      for (const key of keys) {
        if (current && typeof current === "object" && key in current) {
          current = current[key];
        } else {
          console.warn(
            `Translation missing for path: ${path} in language: ${language}`
          );
          return path;
        }
      }

      return typeof current === "string" ? current : path;
    };
  }, [translations, language]);

  return { translations, t };
}
