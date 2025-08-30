"use client";

import CustomerBox from "@/components/Atoms/server/CustomerBox";
import { Language } from "@/context/LanguageContext";
import { t } from "@/utils/serverTranslations"; // Réutilisable côté client (pas marqué use server)
import "../../../assets/styles/slider.css";

type RawProject = {
  id: number;
  Title: string;
  Icon: { url: string; alternativeText: string | null } | null;
};

interface CustomerSliderProps {
  projects: RawProject[];
  language: Language;
}

export default function CustomerSlider({
  projects,
  language,
}: CustomerSliderProps) {
  if (!projects || projects.length === 0) {
    return (
      <div className="border-t border-b border-[var(--color-primary)] py-8 text-center text-sm opacity-70">
        {t(language, "customer.noProjects") || "Chargement ..."}
      </div>
    );
  }

  // Duplique pour effet infini
  const items = [...projects, ...projects];

  return (
    <div className="relative overflow-hidden w-full border-t border-b border-[var(--color-primary)]">
      <div className="animate-marquee">
        {items.map((p, idx) => {
          const iconUrl = p.Icon?.url ?? "";
          const alt = p.Icon?.alternativeText ?? p.Title;
          return (
            <div key={`${p.id}-${idx}`} className="px-4">
              <CustomerBox title={p.Title} iconUrl={iconUrl} alt={alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
