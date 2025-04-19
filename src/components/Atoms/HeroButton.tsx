"use client";

import React from "react";
import "../../assets/styles/heroButton.css";
import ArrowPawens from "../../assets/icons/ArrowPawens.svg";
function HeroButton() {
  return (
    <button className="hero-button group">
      <span className="hero-background" />
      <span className="hero-content">
        <ArrowPawens className="hero-icon-left" />
        <span className="hero-text-wrapper">
          <span className="hero-text">OBTENEZ UN DEVIS EN 48H</span>
        </span>
        <ArrowPawens className="hero-icon-right" />
      </span>
    </button>
  );
}

export default HeroButton;
