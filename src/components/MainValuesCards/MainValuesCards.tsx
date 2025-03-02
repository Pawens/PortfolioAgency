"use client";

import React from "react";
import useSWR from "swr";
import "./MainValuesCards.css";
import MainValueCard from "../MainValueCard/MainValueCard";
import { useLanguage } from "@/context/LanguageContext";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type IconType = "check" | "star" | "work";

interface MainValueCardProps {
  id: number;
  Value: string;
  Label: string;
  iconName: IconType;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function MainValuesCards() {
  const { selectedLanguage } = useLanguage();

  const { data, error } = useSWR(
    selectedLanguage
      ? `${BASE_URL}/api/key-values?locale=${selectedLanguage}`
      : null,
    fetcher,
    {
      dedupingInterval: 86400000, // Cache data for 24 hours
      revalidateOnFocus: false, // Prevent refetch when switching tabs
      revalidateIfStale: false, // Do not revalidate if data is in cache
    }
  );

  if (error) return <p>Error loading data</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div className="mainValuesCards">
      {data.data?.map((value: MainValueCardProps) => (
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

export default MainValuesCards;
