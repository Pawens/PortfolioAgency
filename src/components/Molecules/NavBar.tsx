import React from "react";
import Link from "next/link";
import ButtonDefault from "../Atoms/ButtonDefault";

const navItems = ["Projets", "Services", "Contact"];

function NavBar() {
  return (
    <nav className="flex items-center gap-[32px] text-[var(--color-secondary)] text-[12px]">
      {navItems.map((item) => (
        <Link
          key={item}
          href={`#${item.toLowerCase()}`}
          className="transition duration-200 hover:opacity-80 hover:-translate-y-[2px]"
        >
          {item}
        </Link>
      ))}

      <ButtonDefault href="https://calendly.com/romainparisot-pro/30min">
        Réserver un appel
      </ButtonDefault>
    </nav>
  );
}

export default NavBar;
