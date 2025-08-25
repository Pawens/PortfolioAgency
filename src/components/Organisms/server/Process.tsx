import Count from "@/components/Atoms/client/Count";
import SquareProcess from "@/components/Molecules/server/SquareProcess";
import React from "react";
import AnimateProcessObserver from "@/components/Molecules/client/AnimateProcessObserver";
import { Language } from "@/context/LanguageContext";
import { t, getTranslations } from "@/utils/serverTranslations";

function Process({ language }: { language: Language }) {
  const translations = getTranslations(language);
  const processData = translations.process.processData;

  return (
    <section className="text-[var(--color-secondary)] pt-[192px]">
      <div className="process-container px-[88px] flex flex-col gap-[64px]">
        <div className="process-title-container flex items-top justify-start gap-[8px]">
          <h2 className="process-title text-[46px] italic">
            {t(language, "process.title")}
          </h2>
          <Count manualCount={7} />
        </div>

        <div className="process-grid-container grid grid-cols-2 w-max mx-auto">
          {processData.map((item, i) => {
            const colClass = i % 2 === 0 ? "col-start-1" : "col-start-2";
            const rowClass =
              i % 2 === 0
                ? `row-start-${Math.floor(i / 2) * 2 + 1}`
                : `row-start-${Math.floor(i / 2) * 2 + 2}`;
            const direction = i % 2 === 0 ? "left" : "right";
            return (
              <div
                key={i}
                className={`process-square opacity-0 ${colClass} ${rowClass}`}
                data-index={i}
                data-direction={direction}
              >
                <SquareProcess
                  title={item.title}
                  list={item.list}
                  index={i}
                  language={language}
                />
              </div>
            );
          })}
          <AnimateProcessObserver selector=".process-square" stagger={120} />
        </div>
      </div>
    </section>
  );
}

export default Process;
