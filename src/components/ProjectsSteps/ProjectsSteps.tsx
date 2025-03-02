"use client";

import React, { useRef } from "react";
import ProjectsStep from "../ProjectsStep/ProjectsStep";
import "./ProjectsSteps.css";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useInView } from "framer-motion";
import translations from "../../../public/translation";

interface ProjectStepWrapperProps {
  index: number;
  title: string;
  descriptions: string[];
  first?: boolean;
}

const ProjectStepWrapper: React.FC<ProjectStepWrapperProps> = ({
  index,
  title,
  descriptions,
  first,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <ProjectsStep
        index={`${index + 1 < 10 ? "0" : ""}${index + 1}.`}
        title={title}
        descriptions={descriptions}
        first={first}
      />
    </motion.div>
  );
};

function ProjectsSteps() {
  const { selectedLanguage } = useLanguage();

  const steps = [
    translations[selectedLanguage].projectsSteps.steps1,
    translations[selectedLanguage].projectsSteps.steps2,
    translations[selectedLanguage].projectsSteps.steps3,
    translations[selectedLanguage].projectsSteps.steps4,
    translations[selectedLanguage].projectsSteps.steps5,
    translations[selectedLanguage].projectsSteps.steps6,
    translations[selectedLanguage].projectsSteps.steps7,
  ];

  return (
    <div className="ProjectsStepsContainer">
      {steps.map((step, index) => (
        <ProjectStepWrapper
          key={index}
          index={index}
          title={step.title}
          descriptions={step.description}
          first={index === 0}
        />
      ))}
    </div>
  );
}

export default ProjectsSteps;
