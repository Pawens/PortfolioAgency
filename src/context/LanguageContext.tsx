"use client";

import { useRouter } from "next/navigation";
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

interface LanguageProviderProps {
  initialLanguage: Language;
  children: React.ReactNode;
}

export const LanguageProvider = ({
  initialLanguage,
  children,
}: LanguageProviderProps) => {
  const router = useRouter();
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  // Au montage: si pas de ?lang dans l'URL mais une langue stockée, ajouter le param pour cohérence partage lien
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? (sessionStorage.getItem('lang_pref') as Language | null) : null;
    if (stored && stored !== language) {
      setLanguageState(stored);
      const params = new URLSearchParams(window.location.search);
      if (!params.get('lang')) {
        params.set('lang', stored);
        router.replace(`${window.location.pathname}?${params.toString()}`);
      }
      return; // déjà synchronisé
    }
    // Si aucune langue stockée, stocker la langue initiale
    if (!stored) {
      try { sessionStorage.setItem('lang_pref', language); } catch {}
    }
    // S'assurer que l'URL contient le param (pour navigation sans perte)
    const params = new URLSearchParams(window.location.search);
    if (!params.get('lang')) {
      params.set('lang', language);
      router.replace(`${window.location.pathname}?${params.toString()}`);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLanguage = (newLang: Language) => {
    if (newLang === language) return;
  setLanguageState(newLang); // optimistic
  try { sessionStorage.setItem('lang_pref', newLang); } catch {}
  const params = new URLSearchParams(window.location.search);
  params.set("lang", newLang);
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  router.replace(newUrl);
    // Optionnel: router.refresh(); // pas nécessaire car replace déclenche déjà une nouvelle arborescence RSC
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
