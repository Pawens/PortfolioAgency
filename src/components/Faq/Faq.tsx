import React from "react";
import FaqCard from "../FaqCard/FaqCard";
import "./Faq.css";
import { useLanguage } from "@/context/LanguageContext";
import translations from "../../../public/translation";

function Faq() {
  const { selectedLanguage } = useLanguage();

  return (
    <div className="faqContainer">
      <div className="faqTitle">
        <h2>{translations[selectedLanguage].faq.title}</h2>
        <p>{translations[selectedLanguage].faq.description}</p>
      </div>
      <div className="faqContent">
        <FaqCard items={translations[selectedLanguage].faq.panels} />
      </div>
    </div>
  );
}

export default Faq;
