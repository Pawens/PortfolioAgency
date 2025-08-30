"use client";

import Link from "next/link";
import "../../../assets/styles/animation.css";
import ButtonDefault from "../../Atoms/server/ButtonDefault";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/hooks/useTranslations";

function NavBar() {
  const { language } = useLanguage();
  const { t } = useTranslations();

  const items: { id: string; label: string }[] = [
    { id: "projects", label: t("header.projects") },
    { id: "services", label: t("header.services") },
    { id: "contact", label: t("header.contact") },
  ];

  const langLower = language.toLowerCase();

  return (
    <nav className="navbar flex items-center gap-[32px] text-[var(--color-secondary)] text-[14px]">
      {items.map((item, i) => (
        <Link
          key={item.id}
          href={`/?lang=${langLower}#${item.id}`}
          scroll={true}
          className="navbar-item opacity-0 animate-fade-in-down transition duration-200 hover:opacity-80 hover:-translate-y-[2px]"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {item.label}
        </Link>
      ))}

      <div
        className="navbar-button opacity-0 animate-fade-in-down"
        style={{ animationDelay: `${items.length * 0.1}s` }}
      >
        <ButtonDefault href="https://calendly.com/romainparisot-pro/30min">
          {t("header.bookCall")}
        </ButtonDefault>
      </div>
    </nav>
  );
}

export default NavBar;
