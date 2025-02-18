import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import placeholderImage from "../../../public/images/cover-illustration.png";
import "./ProjectCard.css";

interface ProjectCardProps {
  name: string;
  imageUrl?: string;
  projectId: string;
  description?: string;
  features?: string[];
}

function ProjectCard({
  name,
  imageUrl,
  description,
  features,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

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
          objectFit="cover"
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
          View Project
        </Button>
      </div>

      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogContent
          sx={{
            backgroundColor: "#121212",
            color: "white",
            width: "80vw",
            height: "80vh",
          }}
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
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
            sx={{ height: "100%" }}
          >
            {/* Image à gauche */}
            <Grid item xs={12} md={6}>
              <Image
                src={imageUrl || placeholderImage}
                alt={name}
                width={600}
                height={400}
                objectFit="cover"
                style={{ borderRadius: "8px" }}
              />
            </Grid>
            {/* Contenu à droite */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                {name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {description || "Aucune description disponible."}
              </Typography>

              {/* Features */}
              {features && features.length > 0 && (
                <>
                  <Typography variant="h6">Features:</Typography>
                  <List>
                    {features.map((feature, index) => (
                      <ListItem key={index} sx={{ color: "white" }}>
                        • {feature}
                      </ListItem>
                    ))}
                  </List>
                </>
              )}
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ProjectCard;
