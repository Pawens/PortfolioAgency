import { Language } from "@/context/LanguageContext";
import { t } from "@/utils/serverTranslations";
import TypeWritterAnimation from "../client/TypeWritterAnimation";

export default function ProjectsTitle({ language }: { language: Language }) {
  return (
    <div
      className="project-title-container flex flex-col items-center w-full"
      style={{
        backgroundImage: "url('/backgroundLightToDark.webp')",
        backgroundSize: "100% 101%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "70vh",
      }}
    >
      <h2
        className="projects-title text-[260px] font-bold uppercase pt-[64px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(45, 83, 111, 0.99) 0%, rgba(124, 164, 192, 1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
          lineHeight: 1,
        }}
      >
        <TypeWritterAnimation
          text={t(language, "projects.title")}
          speed={120}
        />
      </h2>
    </div>
  );
}
