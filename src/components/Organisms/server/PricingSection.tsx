"use client";

import { useState } from "react";
import PricingCard from "@/components/Atoms/server/PricingCard";
import RegionFilter from "@/components/Atoms/server/RegionFilter";
import { Language } from "@/context/LanguageContext";
import { getTranslations, t } from "@/utils/serverTranslations";
import { calculateRegionalPrice } from "@/utils/RegionalPricing";
import "@/assets/styles/pricing.css";

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

export default function PricingSection({ language }: PricingSectionProps) {
  const [selectedRegion, setSelectedRegion] = useState("default");

  const translations = getTranslations(language);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pricingData = (translations as any).pricing;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const regionData = (translations as any).regionFilters;

  return (
    <section
      id="pricing"
      className="text-[var(--color-secondary)]"
      style={{
        padding: "5.5rem 0",
        background: "url('/backgroundDarkToLight.webp') center/cover",
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
              <PricingCard
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
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
