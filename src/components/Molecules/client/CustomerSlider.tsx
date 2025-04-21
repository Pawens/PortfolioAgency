"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { fetchProjects } from "@/utils/clientCache";
import CustomerBox from "@/components/Atoms/server/CustomerBox";
import "../../../assets/styles/slider.css";

type RawProject = {
  id: number;
  Title: string;
  Icon: { url: string; alternativeText: string | null } | null;
};

export default function CustomerSlider() {
  const { language } = useLanguage();
  const [projects, setProjects] = useState<RawProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProjects(language.toLowerCase())
      .then((resp) => setProjects(resp.data || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [language]);

  if (loading) {
    return <p className="text-center py-4">Chargement …</p>;
  }

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
