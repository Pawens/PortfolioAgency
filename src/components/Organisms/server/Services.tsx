import React from "react";
import Count from "@/components/Atoms/client/Count";
import ServiceItem from "@/components/Molecules/server/ServiceItem";
import AnimateListObserver from "@/components/Molecules/client/AnimateListObserver";
import { Language } from "@/context/LanguageContext";
import { t, getTranslations } from "@/utils/serverTranslations";

const Services = ({ language }: { language: Language }) => {
  const translations = getTranslations(language);
  const servicesData = translations.services.servicesData;
  return (
    <section id="services" className="text-[var(--color-secondary)] pt-[88px]">
      <div className="service-container px-[88px]">
        <div className="service-header flex justify-between items-center pb-[64px]">
          <div className="service-title-container flex items-top justify-center gap-[8px]">
            <h2 className="service-title text-[46px] italic">
              {t(language, "services.title")}
            </h2>
            <Count manualCount={7} />
          </div>

          <div className="max-w-[400px] ml-auto">
            <p
              className="service-description text-[14px]"
              style={{ textAlign: "justify" }}
            >
              {t(language, "services.description")}
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          {servicesData.map((item, index) => (
            <ServiceItem
              key={index}
              title={item.title}
              isFirst={index === 0}
              index={index}
            />
          ))}
        </div>
        <AnimateListObserver selector=".service-item" stagger={120} />
      </div>
    </section>
  );
};

export default Services;
