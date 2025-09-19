"use client";

import { useState, useEffect } from "react";
import CountUp from "react-countup";

interface Feature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  features: Feature[];
  perMonth: string;
  buttonText?: string; // Temporairement optionnel
  popularText?: string;
  isPopular?: boolean;
  originalPrice?: string;
  aidAmount?: number;
  aidPercentage?: number;
  selectedRegion?: string; // Pour détecter les changements de région
}

export default function PricingCard({
  name,
  price,
  features,
  perMonth,
  // buttonText, // Temporairement désactivé
  popularText = "POPULAR",
  isPopular = false,
  originalPrice,
  aidAmount,
  aidPercentage,
  selectedRegion,
}: PricingCardProps) {
  const [countKey, setCountKey] = useState(0);
  const currentPrice = parseInt(price);

  // Déclenchement de l'animation quand la région change
  useEffect(() => {
    setCountKey((prev) => prev + 1); // Force le re-render de CountUp à chaque changement de région
  }, [selectedRegion]);
  return (
    <div
      className={`pricing-card relative flex flex-col transition-all duration-300 hover:scale-105 ${
        isPopular
          ? "scale-105"
          : "bg-[var(--color-primary)] border-1 border-[var(--color-secondary)]"
      }`}
      style={{
        padding: "2rem",
        minHeight: "32rem",
        borderRadius: "40px",
        backgroundImage: isPopular
          ? "url('/backgroundLightToDark.webp')"
          : undefined,
        backgroundPosition: isPopular ? "50% 20%" : undefined,
        backgroundSize: isPopular ? "cover" : undefined,
      }}
    >
      {isPopular && (
        <div
          className="absolute top-0 left-1/2 bg-[var(--color-secondary)] text-[var(--color-primary)] font-bold text-[0.875rem] rounded-full"
          style={{
            padding: "0.75rem 2rem",
            width: "max-content",
            transform:
              "translateX(-50%) translateY(calc(calc(1 / 2 * 100%) * -2.5))",
          }}
        >
          {popularText}
        </div>
      )}

      <div className="flex flex-col items-center text-center mb-[1rem]">
        <h3 className="font-bold text-[1.5rem] mb-[1rem] text-[var(--color-secondary)]">
          {name}
        </h3>

        {/* Prix avec aide */}
        {originalPrice && aidAmount && aidAmount > 0 ? (
          <div className="flex flex-col items-center">
            {/* Prix original barré */}
            <div className="flex items-baseline mb-[0.5rem]">
              <span
                className="font-medium text-[1.2rem] text-[var(--color-secondary-opa50)] line-through"
                style={{ opacity: 0.6 }}
              >
                €{originalPrice}
              </span>
              <span
                className="ml-[0.25rem] text-[0.8rem] text-[var(--color-secondary-opa50)]"
                style={{ opacity: 0.6 }}
              >
                {perMonth}
              </span>
            </div>

            {/* Prix avec aide - animé */}
            <div className="flex items-baseline">
              <CountUp
                key={countKey}
                start={0}
                end={currentPrice}
                duration={1.5}
                prefix="€"
                useEasing={true}
                preserveValue={true}
              >
                {({ countUpRef }) => (
                  <span
                    ref={countUpRef}
                    className="font-bold text-[2rem] text-[var(--color-accent)]"
                  />
                )}
              </CountUp>
              <span
                className="ml-[0.5rem] text-[1rem] text-[var(--color-secondary-opa50)]"
                style={{ opacity: 0.7 }}
              >
                {perMonth}
              </span>
            </div>

            {/* Badge d'aide */}
            <div
              className="mt-[0.5rem] px-[1rem] py-[0.25rem] rounded-full"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-primary)",
              }}
            >
              <span className="text-[0.75rem] font-medium">
                -{aidPercentage}% d&apos;aide régionale
              </span>
            </div>
          </div>
        ) : (
          // Prix normal sans aide - animé
          <div className="flex items-baseline">
            <CountUp
              key={countKey}
              start={0}
              end={currentPrice}
              duration={1.5}
              prefix="€"
              useEasing={true}
              preserveValue={true}
            >
              {({ countUpRef }) => (
                <span
                  ref={countUpRef}
                  className="font-bold text-[2rem] text-[var(--color-secondary)]"
                />
              )}
            </CountUp>
            <span
              className="ml-[0.5rem] text-[1rem] text-[var(--color-secondary-opa50)]"
              style={{ opacity: 0.7 }}
            >
              {perMonth}
            </span>
          </div>
        )}
      </div>

      <ul className="flex-1 flex flex-col gap-[0.2rem]">
        {" "}
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <div
              className="flex items-center justify-center mr-[0.75rem]"
              style={{
                width: "1.25rem",
                height: "1.25rem",
              }}
            >
              {feature.included ? (
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 6L6 11L15 1"
                    stroke="var(--color-secondary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L13 13M13 1L1 13"
                    stroke="var(--color-secondary-opa50)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <span
              className={`text-[0.875rem] ${
                feature.included
                  ? "text-[var(--color-secondary)]"
                  : "text-[var(--color-secondary-opa50)]"
              }`}
              style={{
                opacity: feature.included ? 1 : 0.5,
              }}
            >
              {feature.name}
            </span>
          </li>
        ))}
      </ul>

      {/* Bouton temporairement désactivé */}
      {/* <div className="mt-[2rem]">
        <button
          className="w-full font-medium text-[1rem] rounded-[8px] transition-all duration-300 hover:scale-105 bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-[var(--color-white)]"
          style={{
            padding: "0.875rem 1.5rem",
          }}
        >
          {buttonText}
        </button>
      </div> */}
    </div>
  );
}
