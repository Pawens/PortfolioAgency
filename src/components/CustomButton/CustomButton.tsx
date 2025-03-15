"use client";

import React from "react";
import Button from "@mui/material/Button";
import { SxProps, Theme } from "@mui/system";

interface CustomButtonProps {
  value?: string; // Make value optional since children can be used instead
  children?: React.ReactNode; // Allow children to be passed
  callback?: "scrollToProjects" | "scrollToContact";
  onClick?: () => void;
  sx?: SxProps<Theme>; // Allow additional sx styles
  variant?: "default" | "small"; // Add a variant prop
  styleType?: "default" | "none"; // Add a styleType prop
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  value,
  children,
  callback,
  onClick,
  sx,
  variant = "default", // Default to "default" variant
  styleType = "default", // Default to "default" styleType
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Use the onClick prop if defined
    } else if (callback === "scrollToProjects") {
      document.querySelector(".sectionProjects")?.scrollIntoView({
        behavior: "smooth",
      });
    } else if (callback === "scrollToContact") {
      document.querySelector(".sectionContact")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Define styles for the two variants
  const styles = {
    default: {
      fontSize: "16px",
      padding: "12px 48px",
    },
    small: {
      fontSize: "14px",
      padding: "8px 24px",
    },
  };

  // Define styles for the two style types
  const styleTypes = {
    default: {
      backgroundColor: "transparent",
      color: "white",
      fontWeight: "600 !important",
      borderRadius: "100px",
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
    },
    none: {
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
    },
  };

  return (
    <Button
      onClick={handleClick}
      sx={{
        ...styleTypes[styleType], // Apply styles based on the styleType prop
        ...styles[variant], // Apply styles based on the variant prop
        ...sx, // Merge additional styles passed via the sx prop
      }}
      variant="outlined"
    >
      {children || value}{" "}
      {/* Render children if provided, otherwise render value */}
    </Button>
  );
};
