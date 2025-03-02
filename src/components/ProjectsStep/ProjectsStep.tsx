import React from "react";
import "./ProjectsStep.css";
import translations from "../../../public/translation";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectsStepProps {
  index: string;
  title: string;
  descriptions: string[];
  first?: boolean;
}

function ProjectsStep({
  index,
  title,
  descriptions,
  first,
}: ProjectsStepProps) {
  const { selectedLanguage } = useLanguage();

  return (
    <div
      className={`ProjectsStepsCard ${first ? "FirstProjectsStepsCard" : ""}`}
    >
      <p className="ProjectsStepsIndex">{index}</p>
      <h3 className="ProjectsStepsTitle">{title}</h3>
      <div className="ProjectsStepsDescriptionContainer">
        {descriptions.map((description, i) => (
          <p key={i} className="ProjectsStepsDescription">
            {description}
          </p>
        ))}
        <p className="ProjectsStepsValidation">
          {translations[selectedLanguage].projectsSteps.clientValidation}
        </p>
      </div>
    </div>
  );
}

export default ProjectsStep;
