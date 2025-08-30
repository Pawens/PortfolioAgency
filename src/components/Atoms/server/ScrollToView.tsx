import { Language } from "@/context/LanguageContext";
import { t } from "@/utils/serverTranslations";
import ArrowPawens from "../../../assets/icons/ArrowPawens.svg";
import "../../../assets/styles/scrollToView.css";

function ScrollToView({ language }: { language: Language }) {
  return (
    <div className="absolute bottom-[32px] flex items-center justify-center flex-col bg-transparent gap-[8px]">
      <p className="uppercase font-[500] text-[var(--color-primary)] ">
        {t(language, "hero.scroll")}
      </p>
      <ArrowPawens
        className="animate-arrow-bounce"
        style={{ fill: "var(--color-primary)" }}
      />
    </div>
  );
}

export default ScrollToView;
