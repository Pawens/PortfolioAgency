"use client";

import React, { useState, useEffect } from "react";
import "./Projects.css";
import { Button } from "@mui/material";
import ProjectCard from "../ProjectCard/ProjectCard";
import { MutatingDots } from "react-loader-spinner";
import { useLanguage } from "@/context/LanguageContext";
import translations from "../../../public/translation";

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
  websiteUrl?: string;
}

const fetchProjects = async (lang: string): Promise<Project[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/projects?populate=*&locale=${lang}`
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const result = await response.json();

    console.log("Fetched Projects:", result.data);

    return result.data || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

function ProjectsClient() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState<number>(2);

  const { selectedLanguage } = useLanguage();

  useEffect(() => {
    if (selectedLanguage) {
      setLoading(true);
      fetchProjects(selectedLanguage).then((data) => {
        setProjects(data);
        setLoading(false);
      });
    }
  }, [selectedLanguage]);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, projects.length));
  };

  return (
    <div className="projectsContainer">
      <div className="projectsGrid">
        {loading
          ? Array.from({ length: visibleCount }).map((_, index) => (
              <div key={index} className="projectCardLoader">
                <MutatingDots
                  visible={true}
                  height="100"
                  width="100"
                  color="#fc6e36"
                  secondaryColor="#fc6e36"
                  radius="12.5"
                  ariaLabel="mutating-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            ))
          : projects.slice(0, visibleCount).map((project) => (
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
        <Button
          onClick={handleShowMore}
          sx={{
            width: "fit-content",
            backgroundColor: "transparent",
            color: "white",
            fontSize: "14px",
            fontWeight: "600 !important",
            borderRadius: "100px",
            padding: "8px 16px",
            border: "2px solid #FC6D36",
            position: "relative",
            overflow: "hidden",
            zIndex: 1,
            fontFamily: "Inter, sans-serif",
            marginTop: "32px",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "#FC6D36",
              transform: "translateX(-100%)",
              transition: "transform 0.5s ease",
              zIndex: -1,
            },
            "&:hover": {
              color: "white",
              border: "2px solid #FC6D36",
            },
            "&:hover::after": {
              transform: "translateX(0)",
            },
          }}
          variant="outlined"
        >
          {translations[selectedLanguage].projects.showMore}
        </Button>
      )}
    </div>
  );
}

export default ProjectsClient;
