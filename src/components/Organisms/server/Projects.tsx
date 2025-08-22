import ProjectsTitle from "@/components/Atoms/server/ProjectsTitle";
import ProjectsList from "@/components/Molecules/client/ProjectsList";
import { Language } from "@/context/LanguageContext";
import React from "react";

function Projects({ language }: { language: Language }) {
  return (
    <div id="projects">
      <ProjectsTitle language={language} />
      <ProjectsList />
    </div>
  );
}

export default Projects;
