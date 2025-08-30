import { LanguageProvider, Language } from "@/context/LanguageContext";
import StickyHeader from "@/components/Organisms/client/StickyHeader";

// On ne reçoit pas searchParams ici directement: on fait un petit wrapper client pour détecter la langue dans l'URL
import React from "react";

function NotFoundInner() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] gap-6 p-12 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p>Page introuvable.</p>
      <a href="/" className="underline">
        Retour à l&apos;accueil
      </a>
    </main>
  );
}

export default function NotFound() {
  // Fallback Fr (pas de SSR ici), le header et sélecteur pourront changer la langue ensuite
  const initialLanguage: Language = "Fr";
  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <StickyHeader />
      <NotFoundInner />
    </LanguageProvider>
  );
}
