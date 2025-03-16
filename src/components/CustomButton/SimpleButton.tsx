"use client";

import React from "react";

interface SimpleButtonProps {
  value: string;
  callback: "scrollToContact";
}

export const SimpleButton: React.FC<SimpleButtonProps> = ({
  value,
  callback,
}) => {
  const handleClick = () => {
    if (callback === "scrollToContact") {
      document.querySelector(".sectionContact")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return <button onClick={handleClick}>{value}</button>;
};
