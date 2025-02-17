"use client";

import React, { useState, useEffect } from "react";
import "./Projects.css";
import {
  Button,
  FormControl,
  Chip,
  Autocomplete,
  TextField,
} from "@mui/material";
import ProjectCard from "../ProjectCard/ProjectCard";

interface Tag {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

// Fake data à remplacer par strapi
const tags = [
  { id: "1", name: "React", createdAt: new Date(), updatedAt: new Date() },
  { id: "2", name: "Node.js", createdAt: new Date(), updatedAt: new Date() },
  { id: "3", name: "JavaScript", createdAt: new Date(), updatedAt: new Date() },
  { id: "4", name: "TypeScript", createdAt: new Date(), updatedAt: new Date() },
  { id: "5", name: "MongoDB", createdAt: new Date(), updatedAt: new Date() },
  { id: "6", name: "GraphQL", createdAt: new Date(), updatedAt: new Date() },
];

const projects = [
  {
    id: "p1",
    title: "Projet React",
    description: "Une application React moderne avec hooks et context API.",
    images: [{ filePath: "/images/cover-illustration.png" }],
    tags: [tags[0], tags[2]],
    features: ["Gestion des états avec Redux", "Optimisation des performances", "Tests unitaires"],
    stack: [tags[0], tags[2]],
  },
  {
    id: "p2",
    title: "Projet Node.js",
    description: "API REST robuste avec Express et MongoDB.",
    images: [{ filePath: "/images/cover-illustration.png" }],
    tags: [tags[1], tags[2], tags[5]],
    features: ["Authentification JWT", "CRUD API", "Déploiement avec Docker"],
    stack: [tags[1], tags[2], tags[5]],
  },
  {
    id: "p3",
    title: "Projet TypeScript",
    description: "Projet full-stack utilisant TypeScript et GraphQL.",
    images: [{ filePath: "/images/cover-illustration.png" }],
    tags: [tags[3], tags[6]],
    features: ["Type-safety", "Code plus robuste", "API GraphQL"],
    stack: [tags[3], tags[6]],
  },
];

const fetchProjects = async () => {
  try {
    const response = await fetch("https://portfolioagencystrapi-production.up.railway.app/api/projects");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erreur de récupération :", error);
  }
};

function ProjectsClient() {
  const [visibleCount, setVisibleCount] = useState(2);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, filteredProjects.length));
  };

  const handleTagChange = (_event: React.SyntheticEvent, newValue: Tag[]) => {
    setSelectedTags(newValue);
    setVisibleCount(2);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const filteredProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) =>
            selectedTags.find((t) => t.id === tag.id)
          )
        );

  return (
    <div className="projectsContainer">
      <FormControl sx={{ minWidth: 200, marginBottom: 4 }}>
        <Autocomplete
          multiple
          options={tags}
          getOptionLabel={(option) => option.name}
          value={selectedTags}
          onChange={handleTagChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Filter by Tags"
              sx={{
                color: "white",
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "#FC6D36" },
                  "&.Mui-focused fieldset": { borderColor: "#FC6D36" },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                  "&.Mui-focused": { color: "#FC6D36" },
                },
              }}
            />
          )}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                key={option.id}
                label={option.name}
                sx={{
                  color: "white",
                  backgroundColor: "#FC6D36",
                  "& .MuiChip-deleteIcon": {
                    color: "white",
                    "&:hover": { color: "rgba(255, 255, 255, 0.7)" },
                  },
                }}
              />
            ))
          }
          sx={{
            minWidth: "300px",
            "& .MuiAutocomplete-clearIndicator, & .MuiAutocomplete-popupIndicator": {
              color: "white",
            },
          }}
        />
      </FormControl>
      <div className="projectsGrid">
        {filteredProjects.slice(0, visibleCount).map((project) => (
          <ProjectCard
            key={project.id}
            name={project.title}
            imageUrl={project.images[0]?.filePath || undefined}
            projectId={project.id}
            tags={project.tags}
            description={project.description}
            features={project.features}
            stack={project.stack}
          />
        ))}
      </div>
      {visibleCount < filteredProjects.length && (
        <Button onClick={handleShowMore} className="showMoreButton">
          Show More
        </Button>
      )}
    </div>
  );
}

export default ProjectsClient;
