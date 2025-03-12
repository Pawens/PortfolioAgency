"use server";

const BASE_URL = process.env.BASE_URL;

export const fetchTestimonials = async (selectedLanguage: string | null) => {
  const url = selectedLanguage
    ? `${BASE_URL}/api/testimonials?locale=${selectedLanguage}`
    : null;

  if (!url) {
    throw new Error("No provided selectedLanguage for fetching testimonials");
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching testimonials: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    throw error;
  }
};
