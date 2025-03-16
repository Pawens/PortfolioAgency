"use client";

import React, { useState } from "react";
import useSWR from "swr";
import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/translation";
import { getProjectsData } from "@/utils/StrapiCallsUtils";
import { CustomButton } from "../CustomButton/CustomButton";

interface Stack {
  id: number;
  Name: string;
}

interface Feature {
  id: number;
  Name: string;
}

interface ImageData {
  id: number;
  url: string;
}

interface Project {
  documentId: string;
  Title: string;
  Description?: string;
  videoUrl?: string | null;
  Images?: ImageData[];
  stacks?: Stack[];
  features?: Feature[];
  websiteUrl?: string;
}

export default function ProjectsClient() {
  const { selectedLanguage } = useLanguage();
  const [visibleCount, setVisibleCount] = useState<number>(2);

  const fetcher = async () => {
    console.log(`Fetching projects for language: ${selectedLanguage}`);
    const response = await getProjectsData(selectedLanguage);
    return response.data || [];
  };

  const { data: projects = [] } = useSWR(
    [`projects`, selectedLanguage],
    fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false }
  );

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, projects.length));
  };

  return (
    <div className="projectsContainer">
      <div className="projectsGrid">
        {projects.slice(0, visibleCount).map((project: Project) => (
          <ProjectCard
            key={project.documentId}
            documentId={project.documentId}
            name={project.Title}
            imageUrl={project.Images?.[0]?.url || undefined}
            features={project.features || []}
            stack={project.stacks || []}
            images={project.Images || []}
            websiteUrl={project.websiteUrl}
          />
        ))}
      </div>

      {visibleCount < projects.length && (
        <CustomButton
          value={translations[selectedLanguage].projects.showMore}
          onClick={handleShowMore}
          sx={{ marginTop: "32px" }}
          variant="small"
        />
      )}
    </div>
  );
}
