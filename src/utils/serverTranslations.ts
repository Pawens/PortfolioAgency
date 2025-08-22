import translations from '../translation';

export type Language = "Fr" | "En" | "Es" | "De" | "It";
type TranslationKey = "fr" | "en" | "es" | "de" | "it";

function languageToKey(lang: Language): TranslationKey {
  return lang.toLowerCase() as TranslationKey;
}

export function getTranslations(language: Language) {
  const key = languageToKey(language);
  return translations[key] || translations.fr;
}

// Helper to get language from URL search params
export function getLanguageFromSearchParams(searchParams: URLSearchParams | { [key: string]: string | string[] | undefined }): Language {
  let langParam: string | null = null;
  
  if (searchParams instanceof URLSearchParams) {
    langParam = searchParams.get('lang');
  } else {
    const lang = searchParams.lang;
    langParam = Array.isArray(lang) ? lang[0] : lang || null;
  }
  
  const validLanguages: Language[] = ["Fr", "En", "Es", "De", "It"];
  return validLanguages.includes(langParam as Language) ? (langParam as Language) : "Fr";
}

// Simple function to get translated text for server components
export function t(language: Language, path: string): string {
  const translationObj = getTranslations(language);
  const keys = path.split('.');
  let current: any = translationObj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      console.warn(`Translation missing for path: ${path} in language: ${language}`);
      return path; // Return the path as fallback
    }
  }
  
  return typeof current === 'string' ? current : path;
}
