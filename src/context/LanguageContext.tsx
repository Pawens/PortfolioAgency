"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "Fr" | "En" | "Es" | "De" | "It";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
};

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get initial language from URL or default to French
  const getInitialLanguage = (): Language => {
    const urlLang = searchParams.get("lang") as Language;
    const validLanguages: Language[] = ["Fr", "En", "Es", "De", "It"];
    return validLanguages.includes(urlLang) ? urlLang : "Fr";
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  // Update language and URL
  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);

    // Update URL with new language parameter
    const params = new URLSearchParams(window.location.search);
    params.set("lang", newLang);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    router.replace(newUrl);
  };

  // Sync with URL changes (when user navigates back/forward)
  useEffect(() => {
    const urlLang = searchParams.get("lang") as Language;
    const validLanguages: Language[] = ["Fr", "En", "Es", "De", "It"];
    const currentLang = validLanguages.includes(urlLang) ? urlLang : "Fr";

    if (currentLang !== language) {
      setLanguageState(currentLang);
    }
  }, [searchParams, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
