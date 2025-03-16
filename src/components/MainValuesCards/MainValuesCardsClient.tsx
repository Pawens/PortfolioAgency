"use client";

import React from "react";
import useSWR from "swr";
import "./MainValuesCards.css";
import MainValueCard from "../MainValueCard/MainValueCard";
import { getMainValuesData } from "@/utils/StrapiCallsUtils";
import { useLanguage } from "@/context/LanguageContext";

type IconType = "check" | "star" | "work";

interface MainValuesProps {
  id: number;
  Value: string;
  Label: string;
  iconName: IconType;
}

interface MainValuesCardsClientProps {
  initialData: MainValuesProps[];
}

export default function MainValuesCardsClient({
  initialData,
}: MainValuesCardsClientProps) {
  const { selectedLanguage } = useLanguage();

  // SWR fetcher function
  const fetcher = async () => {
    const response = await getMainValuesData(selectedLanguage);
    return response.data;
  };

  // SWR re-fetches when `selectedLanguage` changes
  const { data = initialData } = useSWR(
    [`mainValues`, selectedLanguage],
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return (
    <div className="mainValuesCards">
      {data.map((value: MainValuesProps) => (
        <MainValueCard
          key={value.id}
          label={value.Label}
          value={value.Value}
          icon={value.iconName}
        />
      ))}
    </div>
  );
}
