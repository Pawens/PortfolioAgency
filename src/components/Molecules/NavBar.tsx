"use client";

import React from "react";
import ButtonDefault from "../Atoms/ButtonDefault";

const navItems = ["Projets", "Services", "Contact"];

function NavBar() {
  return (
    <nav className="flex items-center gap-[32px] text-[var(--color-secondary)] text-[12px]">
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="transition duration-200 hover:opacity-80 hover:-translate-y-[2px]"
        >
          {item}
        </a>
      ))}

      <ButtonDefault>Réserver un appel</ButtonDefault>
    </nav>
  );
}

export default NavBar;
