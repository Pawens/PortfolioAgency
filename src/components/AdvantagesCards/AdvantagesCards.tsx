import React from "react";
import AdvantageCard from "../AdvantageCard/AdvantageCard";
import "./AdvantagesCards.css";
import { useLanguage } from "@/context/LanguageContext";
import translations from "../../../public/translation";

function AdvantagesCards() {
  const { selectedLanguage } = useLanguage();

  return (
    <div className="advantagesCards">
      <AdvantageCard
        title={translations[selectedLanguage].advantagesCards.title1}
        items={translations[selectedLanguage].advantagesCards.items1}
        color="blue"
      />
      <AdvantageCard
        title={translations[selectedLanguage].advantagesCards.title2}
        items={translations[selectedLanguage].advantagesCards.items2}
      />
    </div>
  );
}

export default AdvantagesCards;
