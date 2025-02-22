"use client";

import React, { useState, useEffect } from "react";
import "./Projects.css";
import { Button } from "@mui/material";
import ProjectCard from "../ProjectCard/ProjectCard";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

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
}

// Fetch projects from Strapi
const fetchProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch(`${BASE_URL}/api/projects?populate=*`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const result = await response.json();
    console.log("Fetched Projects:", result);
    return result.data || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

function ProjectsClient() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(2);

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, projects.length));
  };

  return (
    <div className="projectsContainer">
      <div className="projectsGrid">
        {projects.slice(0, visibleCount).map((project) => (
          <ProjectCard
            key={project.id}
            name={project.Title}
            imageUrl={project.Images?.[0]?.url ? `${BASE_URL}${project.Images[0].url}` : undefined}
            videoUrl={project.videoUrl}
            projectId={project.id.toString()}
            tags={project.stacks || []}
            description={project.Description}
            features={project.features?.map((f) => f ? { id: f.id, Name: f.Name } : null).filter((f): f is Feature => f !== null) || []}
            stack={project.stacks || []}
            images={project.Images?.map((img, index) => ({
              id: index, // Utilisation d'un index temporaire comme ID unique
              name: img.url.split("/").pop() || "Image", // Extraire le nom du fichier
              url: `${BASE_URL}${img.url}`, // Construire l'URL complète
            })) || []}
          />
        ))}
      </div>
      {visibleCount < projects.length && (
        <Button onClick={handleShowMore} className="showMoreButton">
          Show More
        </Button>
      )}
    </div>
  );
}

export default ProjectsClient;