"use client";

import React from "react";
import PawensLogo from "../../assets/icons/PawensLogo.svg";

function PawensLogotype() {
  return (
    <div
      className="flex items-center gap-[12px]"
      style={{ color: "var(--color-secondary)" }}
    >
      <PawensLogo className="block fill-current" />
      <div className="flex">
        <h3>P</h3>
        <h3>A</h3>
        <h3>W</h3>
        <h3>E</h3>
        <h3>N</h3>
        <h3>S</h3>
      </div>
    </div>
  );
}

export default PawensLogotype;
