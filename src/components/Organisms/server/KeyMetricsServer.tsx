import React from "react";
import KeyMetricsClient from "../client/KeyMetricsClient";
import AnimatedText from "@/components/Atoms/client/AnimatedText";
import { Language } from "@/context/LanguageContext";
import { t } from "@/utils/serverTranslations";

export default function KeyMetricsServer({ language }: { language: Language }) {
  return (
    <section className="keymetrics-section flex flex-col items-center justify-center gap-[32px] py-[120px] bg-[var(--color-white)]">
      <div className="max-w-[900px] flex flex-col gap-[22px] items-center justify-center">
        <KeyMetricsClient />
        <div className="flex flex-col items-center justify-center text-center gap-[22px] text-[32px] text-[var(--color-black)] font-[450]">
          <h2 className="keymetrics-description">
            {t(language, "keyMetrics.description")}
          </h2>
          <h2 className="keymetrics-description flex align-center justify-center gap-[8px]">
            {t(language, "keyMetrics.ourGoal.title")}
            <AnimatedText
              text={t(language, "keyMetrics.ourGoal.description")}
            />
          </h2>
        </div>
      </div>
    </section>
  );
}
