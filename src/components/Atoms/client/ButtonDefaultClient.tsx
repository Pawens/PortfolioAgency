"use client";

import React from "react";
import "../../../assets/styles/buttonDefault.css";

type ButtonDefaultClientProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function ButtonDefaultClient({
  children,
  className = "",
  onClick,
}: ButtonDefaultClientProps) {
  return (
    <button
      onClick={onClick}
      className={`button-default relative overflow-hidden px-[82px] py-[20px]
        border border-[var(--color-secondary-opa50)]
        text-[var(--color-secondary)] text-[18px]
        group ${className}`}
    >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--color-primary)]">
        {children}
      </span>
    </button>
  );
}
