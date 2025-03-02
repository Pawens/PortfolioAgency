import React from "react";
import ExpertiseCard from "../ExpertiseCard/ExpertiseCard";
import { LuCodeXml, LuPaintbrush, LuSmartphone } from "react-icons/lu";
import "./Expertises.css";
import { useLanguage } from "@/context/LanguageContext";
import translations from "../../../public/translation";

function Expertises() {
  const { selectedLanguage } = useLanguage();

  return (
    <div className="expertisesContainer">
      <ExpertiseCard
        icon={LuCodeXml}
        label={translations[selectedLanguage].expertise.expertise1.title}
        description={
          translations[selectedLanguage].expertise.expertise1.description
        }
      />
      <ExpertiseCard
        icon={LuPaintbrush}
        label={translations[selectedLanguage].expertise.expertise2.title}
        description={
          translations[selectedLanguage].expertise.expertise2.description
        }
      />
      <ExpertiseCard
        icon={LuSmartphone}
        label={translations[selectedLanguage].expertise.expertise3.title}
        description={
          translations[selectedLanguage].expertise.expertise3.description
        }
      />
    </div>
  );
}

export default Expertises;
