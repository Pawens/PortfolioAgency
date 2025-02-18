import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineWorkHistory } from "react-icons/md";

import "./MainValueCard.css";

type IconType = "check" | "star" | "work";

interface MainValueCardProps {
  value: string;
  label: string;
  icon: IconType;
}

function MainValueCard({
  value = "40+",
  label = "Project Done",
  icon = "check",
}: MainValueCardProps) {
  const renderIcon = () => {
    switch (icon) {
      case "check":
        return <FaCheckCircle />;
      case "star":
        return <AiFillStar />;
      case "work":
        return <MdOutlineWorkHistory />;
      default:
        return <FaCheckCircle />;
    }
  };
  return (
    <div className="mainValueCard">
      {renderIcon()}

      <h4>{value}</h4>
      <p>{label}</p>
    </div>
  );
}

export default MainValueCard;
