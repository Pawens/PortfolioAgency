"use client";

import React from "react";

interface BurgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

function BurgerMenu({ isOpen, onClick }: BurgerMenuProps) {
  return (
    <button
      className={`burger-menu-button flex flex-col justify-center items-center w-[32px] h-[32px] cursor-pointer transition-all duration-300 ${
        isOpen ? "burger-menu-open" : ""
      }`}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <span className="burger-line burger-line-1 w-[24px] h-[2px] bg-[var(--color-secondary)] transition-all duration-300" />
      <span className="burger-line burger-line-2 w-[24px] h-[2px] bg-[var(--color-secondary)] mt-[4px] transition-all duration-300" />
      <span className="burger-line burger-line-3 w-[24px] h-[2px] bg-[var(--color-secondary)] mt-[4px] transition-all duration-300" />
    </button>
  );
}

export default BurgerMenu;
