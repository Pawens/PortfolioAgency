import ArrowPawens from "@/assets/icons/ArrowPawens.svg";
import { Language } from "@/context/LanguageContext";
import { t } from "@/utils/serverTranslations";
import Link from "next/link";
import "../../../assets/styles/heroButton.css";

function HeroButton({ language }: { language: Language }) {
  return (
    <Link href="#contact" scroll={true}>
      <button className="hero-button group">
        <span className="hero-background" />
        <span className="hero-content">
          <ArrowPawens className="hero-icon-left" />
          <span className="hero-text-wrapper">
            <span className="hero-text">{t(language, "hero.buttonHero")}</span>
          </span>
          <ArrowPawens className="hero-icon-right" />
        </span>
      </button>
    </Link>
  );
}

export default HeroButton;
