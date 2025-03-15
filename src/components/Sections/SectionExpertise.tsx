"use client";

import React from "react";
import Expertises from "../Expertises/Expertises";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/translation";

function SectionExpertise() {
  const { selectedLanguage } = useLanguage();

  return (
    <section className="section sectionExpertise">
      <h2>{translations[selectedLanguage].expertise.title}</h2>
      <p>{translations[selectedLanguage].expertise.description}</p>
      <Expertises />
    </section>
  );
}

export default SectionExpertise;
