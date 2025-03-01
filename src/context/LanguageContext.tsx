import React, { createContext, useContext, useState } from 'react';

type LanguageKeys = 'en' | 'fr' | 'de' | 'es' | 'it';

interface LanguageContextProps {
  selectedLanguage: LanguageKeys;
  setSelectedLanguage: (lang: LanguageKeys) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined,
);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageKeys>('en');

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
