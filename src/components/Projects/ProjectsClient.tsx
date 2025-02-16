"use client";

import React, { useState } from "react";
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
    features: [
      "Gestion des états avec Redux",
      "Optimisation des performances",
      "Tests unitaires",
    ],
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

  const filteredProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) => selectedTags.find((t) => t.id === tag.id))
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
            "& .MuiAutocomplete-clearIndicator, & .MuiAutocomplete-popupIndicator":
              {
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
            description={project.description}
            features={project.features}
          />
        ))}
      </div>
      {visibleCount < filteredProjects.length && (
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
          className="showMoreButton"
        >
          Show More
        </Button>
      )}
    </div>
  );
}

export default ProjectsClient;
