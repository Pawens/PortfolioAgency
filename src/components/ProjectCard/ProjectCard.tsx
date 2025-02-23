import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Grid,
  Typography,
  List,
  ListItem,
  Chip,
  Card,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ReactPlayer from "react-player";
import placeholderImage from "../../../public/img/placeholder.webp";
import "./ProjectCard.css";

interface ImageData {
  id: number;
  name: string;
  url: string;
}

interface Feature {
  id: number;
  Name?: string;
}

interface Stack {
  id: number;
  Name?: string;
}

interface ProjectCardProps {
  name: string;
  imageUrl?: string;
  videoUrl?: string | null;
  projectId: string;
  description?: string;
  features?: Feature[];
  stack?: Stack[];
  images?: ImageData[];
}

function ProjectCard({
  name,
  imageUrl,
  videoUrl,
  description,
  features,
  stack,
  images,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(imageUrl || placeholderImage);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="projectCard">
      <div className="imageContainer">
        <Image
          src={imageUrl || placeholderImage}
          alt={name}
          width={400}
          height={300}
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div className="projectContent">
        <h4>{name}</h4>
        <Button
          onClick={handleOpen}
          sx={{
            width: "fit-content",
            backgroundColor: "transparent",
            color: "white",
            fontSize: "14px",
            fontWeight: "600 !important",
            borderRadius: "100px",
            padding: "8px 16px",
            border: "2px solid #FC6D36",
          }}
          variant="outlined"
        >
          View Project
        </Button>
      </div>

      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogContent
          sx={{
            backgroundColor: "#121212",
            color: "white",
            height: "80vh",
            padding: "64px",
          }}
          className="projectPopupDialog"
        >
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{ position: "absolute", top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>
          <Grid container spacing={4} className="projectPopupContainer">
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
                maxHeight: "80vh",
                scrollbarWidth: "thin",
                scrollbarColor: "#FC6D36 #1e1e1e",
              }}
              className="projectPopupContent"
            >
              <Typography variant="h4" gutterBottom>
                {name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {description || "Aucune description disponible."}
              </Typography>
              {(features ?? []).length > 0 && (
                <>
                  <Typography variant="h6">Features:</Typography>
                  <List>
                    {features
                      ?.filter((f) => f && f.Name)
                      .map((feature) => (
                        <ListItem key={feature.id} sx={{ color: "white" }}>
                          • {feature.Name}
                        </ListItem>
                      ))}
                  </List>
                </>
              )}

              {(stack ?? []).length > 0 && (
                <>
                  <Typography variant="h6">Stack:</Typography>
                  <div
                    style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
                  >
                    {stack?.map((tech) => (
                      <Chip
                        key={tech.id}
                        label={tech.Name || "Unknown Stack"}
                        sx={{ backgroundColor: "#FC6D36", color: "white" }}
                      />
                    ))}
                  </div>
                </>
              )}

              {!videoUrl && (images ?? []).length > 0 && (
                <Grid container spacing={2} sx={{ marginTop: "16px" }}>
                  {(images ?? []).map((img) => (
                    <Grid
                      item
                      key={img.id}
                      xs={6}
                      md={4}
                      lg={3}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Card
                        sx={{
                          backgroundColor: "#1e1e1e",
                          border: "2px solid white",
                          width: "160px",
                          height: "100px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "0",
                          borderRadius: "0",
                          cursor: "pointer",
                        }}
                        onClick={() => setActiveImage(img.url)}
                      >
                        <Image
                          src={img.url}
                          alt={img.name}
                          width={160}
                          height={100}
                          style={{
                            objectFit: "cover",
                            objectPosition: "top",
                            display: "block",
                          }}
                        />
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              {videoUrl ? (
                <ReactPlayer
                  url={videoUrl}
                  width="100%"
                  height="100%"
                  controls
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#FC6D36 #1e1e1e",
                  }}
                >
                  <Image
                    src={activeImage}
                    alt={name}
                    width={400}
                    height={1200}
                    style={{ objectFit: "cover", display: "block" }}
                  />
                </div>
              )}
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ProjectCard;
