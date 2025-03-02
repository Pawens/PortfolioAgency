import React, { useEffect, useState } from "react";
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

const fetchMainValues = async (lang: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/key-values?locale=${lang}`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const result = await response.json();
    console.log("Fetched key values:", result);
    return result.data || [];
  } catch (error) {
    console.error("Error fetching kay values:", error);
    return [];
  }
};

function MainValuesCards() {
  const [values, setValues] = useState([]);
  const { selectedLanguage } = useLanguage();

  useEffect(() => {
    if (selectedLanguage) {
      fetchMainValues(selectedLanguage).then(setValues);
    }
  }, [selectedLanguage]);

  return (
    <div className="mainValuesCards">
      {values.map((value: MainValueCardProps) => (
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
