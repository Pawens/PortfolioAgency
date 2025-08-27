import React from "react";
import Count from "@/components/Atoms/client/Count";
import FaqItem from "@/components/Molecules/client/FaqItem";
import { Language, t, getTranslations } from "@/utils/serverTranslations";

const FaqSection = ({ language }: { language: Language }) => {
  const translations = getTranslations(language);
  const faqData = translations.faq.faqData;

  return (
    <section className="faq-section pt-[40px] pb-[100px] px-4 py-20 text-[var(--color-secondary)]">
      <div className="faq-container max-w-6xl mx-auto flex flex-row gap-24">
        <div className="w-[25%] flex items-start gap-[10px]">
          <h2 className="faq-title ml-[60px] text-[48px] italic">
            {t(language, "faq.title")}
          </h2>
          <Count manualCount={faqData.length} />
        </div>

        <div className="faq-list-container w-[75%] flex flex-col pr-[60px]">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
