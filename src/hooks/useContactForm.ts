"use client";

import { useContactForm } from "@/context/ContactFormContext";

export const useContactForm = () => {
  const context = useContactForm();

  if (!context) {
    throw new Error("useContactForm must be used within a ContactFormProvider");
  }

  return context;
};
