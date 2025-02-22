import React from "react";
import "./ProjectsStep.css";

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
        <p className="ProjectsStepsValidation">+ Validation client</p>
      </div>
    </div>
  );
}

export default ProjectsStep;
