"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
import "./Calendly.css";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/translation";

const Calendly = () => {
  const { selectedLanguage } = useLanguage();
  const label = translations[selectedLanguage]?.calendly?.label || "Book a call";

  return (
    <Link
      href="https://calendly.com/romainparisot-pro/30min"
      target="_blank"
      rel="noopener noreferrer"
      className="calendly-widget"
    >
      <Calendar size={20} />
      <span className="calendly-link">{label}</span>
    </Link>
  );
};

export default Calendly;
