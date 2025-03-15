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
  name: string;
}

interface Feature {
  id: number;
  Name: string;
}

interface ImageData {
  id: number;
  name: string;
  url: string;
}

interface Project {
  id: number;
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

  // ✅ Use SWR to fetch projects with 24h caching
  const fetcher = async () => {
    console.log(`Fetching projects for language: ${selectedLanguage}`);
    const response = await getProjectsData(selectedLanguage);
    return response.data;
  };

  const { data: projects = [], isLoading } = useSWR(
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
        {isLoading
          ? Array.from({ length: visibleCount }).map((_, index) => (
              <div key={index} className="projectCardLoader">
                {/* Placeholder for loading animation */}
              </div>
            ))
          : projects.slice(0, visibleCount).map((project: Project) => (
              <ProjectCard
                key={project.id}
                name={project.Title}
                imageUrl={project.Images?.[0]?.url || undefined}
                videoUrl={project.videoUrl}
                projectId={project.id.toString()}
                description={project.Description}
                features={
                  project.features
                    ?.map((f) => (f ? { id: f.id, Name: f.Name } : null))
                    .filter((f): f is Feature => f !== null) || []
                }
                stack={project.stacks || []}
                images={
                  project.Images?.map((img, index) => ({
                    id: index,
                    name: img.url.split("/").pop() || "Image",
                    url: img.url,
                  })) || []
                }
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
