import React from "react";
import { IconType } from "react-icons";
import "./ExpertiseCard.css";

interface ExpertiseCardProps {
  icon: IconType;
  label: string;
  description: string;
}

function ExpertiseCard({ icon: Icon, label, description }: ExpertiseCardProps) {
  return (
    <div className="expertiseCard">
      <Icon />
      <h3>{label}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ExpertiseCard;
