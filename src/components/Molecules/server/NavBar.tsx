import React from "react";
import Link from "next/link";
import ButtonDefault from "../../Atoms/server/ButtonDefault";
import "../../../assets/styles/animation.css";

const navItems = ["Projects", "Services", "Contact"];

function NavBar() {
  return (
    <nav className="flex items-center gap-[32px] text-[var(--color-secondary)] text-[14px]">
      {navItems.map((item, i) => (
        <Link
          key={item}
          href={`#${item.toLowerCase()}`}
          scroll={true}
          className="opacity-0 animate-fade-in-down transition duration-200 hover:opacity-80 hover:-translate-y-[2px]"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {item}
        </Link>
      ))}

      <div
        className="opacity-0 animate-fade-in-down"
        style={{ animationDelay: `${navItems.length * 0.1}s` }}
      >
        <ButtonDefault href="https://calendly.com/romainparisot-pro/30min">
          Réserver un appel
        </ButtonDefault>
      </div>
    </nav>
  );
}

export default NavBar;
