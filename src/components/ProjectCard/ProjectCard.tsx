import { motion, useInView } from "framer-motion";
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
} from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ReactPlayer from "react-player";
import placeholderImage from "../../../public/img/placeholder.webp";
import "./ProjectCard.css";
import { useLanguage } from "@/context/LanguageContext";
import translations from "../../../public/translation";

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
  websiteUrl?: string;
}

function ProjectCard({
  name,
  imageUrl,
  videoUrl,
  description,
  features,
  stack,
  websiteUrl,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(imageUrl || placeholderImage);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef(null);

  const { selectedLanguage } = useLanguage();

  const isInView = useInView(cardRef, {
    margin: "-30% 0px -30% 0px",
    once: true,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="projectCard"
    >
      <div className="imageContainer" ref={imageRef}>
        {isImageVisible && (
          <Image
            src={activeImage}
            alt={name}
            width={400}
            height={300}
            loading="lazy"
            style={{
              objectFit: "cover",
              objectPosition: "top",
              cursor: "pointer",
            }}
            onClick={handleOpen}
            onError={() => setActiveImage(placeholderImage)}
          />
        )}
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
        >
          {translations[selectedLanguage].projects.viewProject}
        </Button>

        {websiteUrl ? (
          <Button
            onClick={() =>
              window.open(websiteUrl, "_blank", "noopener,noreferrer")
            }
            sx={{
              width: "fit-content",
              backgroundColor: "#FC6D36",
              color: "black",
              fontSize: "14px",
              fontWeight: "600 !important",
              borderRadius: "100px",
              padding: "8px 16px",
              border: "2px solid #FC6D36",
              position: "relative",
              overflow: "hidden",
              zIndex: 1,
              marginTop: "8px",
              fontFamily: "Inter, sans-serif",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
            variant="outlined"
          >
            {translations[selectedLanguage].projects.visitWebsite}
          </Button>
        ) : (
          <Typography
            variant="body2"
            sx={{ color: "gray", fontSize: "12px", marginTop: "8px" }}
          >
            {translations[selectedLanguage].projects.notHostedMessage}
          </Typography>
        )}
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
            className="projectPopupCloseButton"
          >
            <CloseIcon />
          </IconButton>
          <Grid container spacing={4} className="projectPopupContainer">
            <Grid item xs={12} md={6} className="projectPopupContent">
              <Typography variant="h4" gutterBottom>
                {name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {description || "Aucune description disponible."}
              </Typography>

              {(features ?? []).length > 0 && (
                <>
                  <Typography variant="h6">
                    {translations[selectedLanguage].projects.features}
                  </Typography>
                  <List>
                    {features?.map((feature) => (
                      <ListItem key={feature.id} sx={{ color: "white" }}>
                        • {feature.Name}
                      </ListItem>
                    ))}
                  </List>
                </>
              )}

              {(stack ?? []).length > 0 && (
                <>
                  <Typography variant="h6">
                    {translations[selectedLanguage].projects.stack}
                  </Typography>
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
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
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
                <Image
                  src={activeImage}
                  alt={name}
                  width={400}
                  height={300}
                  loading="lazy"
                  style={{ objectFit: "cover", display: "block" }}
                  onError={() => setActiveImage(placeholderImage)}
                />
              )}
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}

export default ProjectCard;
