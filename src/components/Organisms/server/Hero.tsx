import { Language } from "@/context/LanguageContext";
import { t } from "@/utils/serverTranslations";
import "../../../assets/styles/animation.css";
import HeroButton from "../../Atoms/server/HeroButton";
import ScrollToView from "../../Atoms/server/ScrollToView";

function Hero({ language }: { language: Language }) {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-screen"
      style={{
        backgroundImage: "url('/backgroundDarkToLight.webp')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="flex flex-col items-center justify-center text-[var(--color-secondary)] uppercase font-thin">
        <h2
          className="hero-title font-thin opacity-0 animate-fade-in-down text-[80px]"
          style={{ animationDelay: "0.2s" }}
        >
          {t(language, "hero.creativeAgency")}
        </h2>
        <div
          className="hero-button-mobile-wrapper opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <HeroButton language={language} />
        </div>
        <div className="hero-subrow flex items-center justify-center gap-[42px] mt-[20px]">
          <h2
            className="opacity-0 animate-fade-in-left text-[80px]"
            style={{ animationDelay: "0.4s" }}
          >
            {t(language, "hero.for")}
          </h2>
          <div
            className="hero-button-inline opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <HeroButton language={language} />
          </div>
          <h2
            className="opacity-0 animate-fade-in-right text-[80px]"
            style={{ animationDelay: "0.4s" }}
          >
            {t(language, "hero.you")}
          </h2>
        </div>
      </div>
      <ScrollToView language={language} />
    </div>
  );
}

export default Hero;
