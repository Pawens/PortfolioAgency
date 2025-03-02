import React from "react";
import ProjectsStep from "../ProjectsStep/ProjectsStep";
import "./ProjectsSteps.css";
import { useLanguage } from "@/context/LanguageContext";
import translations from "../../../public/translation";

function ProjectsSteps() {
  const { selectedLanguage } = useLanguage();

  return (
    <div className="ProjectsStepsContainer">
      <ProjectsStep
        index={"01."}
        title={translations[selectedLanguage].projectsSteps.steps1.title}
        descriptions={
          translations[selectedLanguage].projectsSteps.steps1.description
        }
        first
      />
      <ProjectsStep
        index={"02."}
        title={translations[selectedLanguage].projectsSteps.steps2.title}
        descriptions={
          translations[selectedLanguage].projectsSteps.steps2.description
        }
      />
      <ProjectsStep
        index={"03."}
        title={translations[selectedLanguage].projectsSteps.steps3.title}
        descriptions={
          translations[selectedLanguage].projectsSteps.steps3.description
        }
      />
      <ProjectsStep
        index={"04."}
        title={translations[selectedLanguage].projectsSteps.steps4.title}
        descriptions={
          translations[selectedLanguage].projectsSteps.steps4.description
        }
      />
      <ProjectsStep
        index={"05."}
        title={translations[selectedLanguage].projectsSteps.steps5.title}
        descriptions={
          translations[selectedLanguage].projectsSteps.steps5.description
        }
      />
      <ProjectsStep
        index={"06."}
        title={translations[selectedLanguage].projectsSteps.steps6.title}
        descriptions={
          translations[selectedLanguage].projectsSteps.steps6.description
        }
      />
      <ProjectsStep
        index={"07."}
        title={translations[selectedLanguage].projectsSteps.steps7.title}
        descriptions={
          translations[selectedLanguage].projectsSteps.steps7.description
        }
      />
    </div>
  );
}

export default ProjectsSteps;
