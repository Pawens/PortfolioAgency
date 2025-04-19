"use client";

import React from "react";
import "../../assets/styles/ButtonDefault.css";

type ButtonDefaultProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

function ButtonDefault({
  onClick,
  children,
  className = "",
}: ButtonDefaultProps) {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden p-[12px] border border-[var(--color-secondary)] text-[var(--color-secondary)] font-medium group ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}

export default ButtonDefault;
