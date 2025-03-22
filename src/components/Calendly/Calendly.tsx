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
    <div className="calendly-widget">
      <Calendar size={20} />
      <Link
        href="https://calendly.com/romainparisot-pro"
        target="_blank"
        rel="noopener noreferrer"
        className="calendly-link"
      >
        {label}
      </Link>
    </div>
  );
};

export default Calendly;
