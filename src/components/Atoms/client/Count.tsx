"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { fetchProjects } from "@/utils/clientCache";
import CountUp from "react-countup";

interface CountProps {
  manualCount?: number;
}

export default function Count({ manualCount }: CountProps) {
  const { language } = useLanguage();
  const [value, setValue] = useState<number | null>(
    manualCount !== undefined ? manualCount : null
  );

  useEffect(() => {
    if (manualCount !== undefined) return;

    fetchProjects(language.toLowerCase())
      .then((resp) => {
        const arr = Array.isArray(resp.data) ? resp.data : [];
        setValue(arr.length);
      })
      .catch((err) => {
        console.error("Count fetch error:", err);
        setValue(0);
      });
  }, [language, manualCount]);

  if (value === null) {
    return <span className="text-[18px] pt-[8px] font-[500]">(…)</span>;
  }

  return (
    <CountUp
      start={0}
      end={value}
      duration={4}
      prefix="("
      suffix=")"
      enableScrollSpy
      scrollSpyOnce
    >
      {({ countUpRef }) => (
        <span ref={countUpRef} className="text-[18px] pt-[8px] font-[500]" />
      )}
    </CountUp>
  );
}
