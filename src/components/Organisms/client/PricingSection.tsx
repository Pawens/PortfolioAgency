"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import RegionFilter from "@/components/Atoms/server/RegionFilter";
import { Language } from "@/context/LanguageContext";
import { getTranslations, t } from "@/utils/serverTranslations";
import { calculateRegionalPrice } from "@/utils/RegionalPricing";
import "@/assets/styles/pricing.css";

// Import dynamique pour éviter l'hydratation
const PricingCardClient = dynamic(
  () => import("@/components/Atoms/client/PricingCardClient"),
  { 
    ssr: false,
    loading: () => (
      <div className="pricing-card-skeleton animate-pulse bg-gray-200 rounded-lg" style={{ minHeight: "32rem" }} />
    )
  }
);

interface PricingSectionProps {
  language: Language;
}

interface PlanFeature {
  name: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: string;
  features: PlanFeature[];
}

interface PricingData {
  plans: Plan[];
}

interface RegionData {
  regions: Array<{ value: string; label: string }>;
  label: string;
}

export default function PricingSection({ language }: PricingSectionProps) {
  const [selectedRegion, setSelectedRegion] = useState("default");
  const [isMounted, setIsMounted] = useState(false);

  // Gestion de l'hydratation pour éviter les erreurs
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const translations = getTranslations(language);
  const pricingData = (translations as Record<string, unknown>).pricing as PricingData;
  const regionData = (translations as Record<string, unknown>).regionFilters as RegionData;

  // Afficher un placeholder pendant l'hydratation
  if (!isMounted) {
    return (
      <section
        id="pricing"
        className="text-[var(--color-secondary)]"
        style={{
          padding: "5.5rem 0",
          backgroundImage: "url('/backgroundCardSection.webp')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "var(--color-primary)",
        }}
      >
        <div
          className="pricing-container"
          style={{ maxWidth: "80rem", margin: "0 auto" }}
        >
          <div
            className="pricing-header text-center"
            style={{ marginBottom: "4rem" }}
          >
            <p className="pricing-description text-[1.2rem] text-white">
              {t(language, "pricing.description")}
            </p>
          </div>
          {/* Placeholder minimal pendant l'hydratation */}
          <div style={{ minHeight: "400px" }} />
        </div>
      </section>
    );
  }

  return (
    <section
      id="pricing"
      className="text-[var(--color-secondary)]"
      style={{
        padding: "5.5rem 0",
        backgroundImage: "url('/backgroundCardSection.webp')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "var(--color-primary)", // fallback
      }}
    >
      <div
        className="pricing-container"
        style={{ maxWidth: "80rem", margin: "0 auto" }}
      >
        <div
          className="pricing-header text-center"
          style={{ marginBottom: "4rem" }}
        >
          <p className="pricing-description text-[1.2rem] text-white">
            {t(language, "pricing.description")}
          </p>

          {/* Filtre de région */}
          <div
            className="region-filter-container"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <RegionFilter
              selectedRegion={selectedRegion}
              onRegionChange={setSelectedRegion}
              regions={regionData.regions}
              label={regionData.label}
            />
          </div>
        </div>

        <div
          className="pricing-grid grid gap-[6rem]"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
            maxWidth: "75rem",
            margin: "0 auto",
          }}
        >
          {pricingData.plans.map((plan: Plan, index: number) => {
            const basePrice = parseInt(plan.price);
            const priceCalculation = calculateRegionalPrice(
              basePrice,
              selectedRegion
            );

            return (
              <PricingCardClient
                key={index}
                name={plan.name}
                price={priceCalculation.finalMonthlyPrice.toString()}
                features={plan.features}
                perMonth={t(language, "pricing.perMonth")}
                buttonText={t(language, "pricing.selectPlan")}
                popularText={t(language, "pricing.popular")}
                isPopular={index === 1} // Make the middle plan (Pro) popular
                originalPrice={
                  priceCalculation.aidAmount > 0
                    ? basePrice.toString()
                    : undefined
                }
                aidAmount={priceCalculation.aidAmount}
                aidPercentage={priceCalculation.aidPercentage}
                selectedRegion={selectedRegion}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
