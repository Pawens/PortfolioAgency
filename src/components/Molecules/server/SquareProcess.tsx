import React from "react";
import ArrowPawensBig from "@/assets/icons/ArrowPawensBig.svg";
import { Language } from "@/context/LanguageContext";
import { t } from "@/utils/serverTranslations";

type SquareProcessProps = {
  title: string;
  list: { text: string }[];
  index: number;
  language: Language;
};

function SquareProcess({ title, list, index, language }: SquareProcessProps) {
  return (
    <div className="process-square-container p-[36px] border border-[var(--color-secondary)] w-[418px] h-[418px] flex flex-col justify-between">
      <div className="process-square-content flex flex-col gap-[44px]">
        <div className="flex items-center gap-[4px]">
          <p className="process-item-title text-[20px] font-[600]">
            {String(index + 1).padStart(2, "0")}.
          </p>
          <p className="process-item-title text-[20px] font-[600]">{title}</p>
        </div>
        <div className="flex flex-col gap-[12px]">
          {list.map((item, i) => (
            <div key={i} className="flex gap-[8px] items-center">
              <ArrowPawensBig
                className="process-description-svg rotate-90 scale-[0.7]"
                style={{ fill: "var(--color-secondary)" }}
              />
              <p className="process-description text-[14px]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <ArrowPawensBig
          className="process-confirmation-svg rotate-90"
          style={{ fill: "var(--color-secondary)" }}
        />
        <p className="process-confirmation text-[20px]">
          {t(language, "process.confirmation")}
        </p>
        <ArrowPawensBig
          className="process-confirmation-svg rotate-270"
          style={{ fill: "var(--color-secondary)" }}
        />
      </div>
    </div>
  );
}

export default SquareProcess;
