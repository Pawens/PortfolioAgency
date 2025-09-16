// Types pour les règles de pricing par région
export interface RegionPricingRule {
  region: string;
  aidPercentage: number;
  ceiling?: number;
  minimum?: number;
  specialConditions?: string;
  alternativeAid?: {
    percentage: number;
    minAmount: number;
    maxAmount: number;
  };
}

// Règles d'aide par région française
const REGION_PRICING_RULES: RegionPricingRule[] = [
  { region: "ile-de-france", aidPercentage: 50, ceiling: 3000 },
  { region: "nouvelle-aquitaine", aidPercentage: 50, ceiling: 50000 },
  { region: "auvergne-rhone-alpes", aidPercentage: 50, ceiling: 32000 },
  { region: "bretagne", aidPercentage: 30, ceiling: 7500 },
  { region: "pays-de-la-loire", aidPercentage: 30, ceiling: 15000 },
  { region: "occitanie", aidPercentage: 50, ceiling: 10000 },
  { region: "centre-val-de-loire", aidPercentage: 30, ceiling: 20000 },
  { region: "grand-est", aidPercentage: 50, ceiling: 3000 },
  { region: "hauts-de-france", aidPercentage: 20, ceiling: 26000 },
  { region: "corse", aidPercentage: 30 },
  { region: "la-reunion", aidPercentage: 80, ceiling: 3200 },
  { region: "guadeloupe", aidPercentage: 80, ceiling: 10000 },
  { region: "martinique", aidPercentage: 50, ceiling: 8000 },
];

/**
 * Calcule l'aide financière selon la région sélectionnée
 * @param monthlyPrice - Prix mensuel de base (en euros)
 * @param region - Région sélectionnée
 * @returns Object avec le prix final mensuel et les détails de l'aide
 */
export function calculateRegionalPrice(
  monthlyPrice: number,
  region: string
): {
  finalMonthlyPrice: number;
  originalYearlyPrice: number;
  aidAmount: number;
  aidPercentage: number;
  hasSpecialConditions: boolean;
  specialConditions?: string;
} {
  const rule = REGION_PRICING_RULES.find((r) => r.region === region);

  if (!rule) {
    // Si région non trouvée, retourner le prix de base
    return {
      finalMonthlyPrice: monthlyPrice,
      originalYearlyPrice: monthlyPrice * 12,
      aidAmount: 0,
      aidPercentage: 0,
      hasSpecialConditions: false,
    };
  }

  const yearlyPrice = monthlyPrice * 12;
  let aidAmount = 0;
  const aidPercentage = rule.aidPercentage;

  // Calcul de l'aide
  const potentialAid = (yearlyPrice * aidPercentage) / 100;

  // Application du plafond si existant
  if (rule.ceiling) {
    const ceilingAid = (rule.ceiling * aidPercentage) / 100;
    aidAmount = Math.min(potentialAid, ceilingAid);
  } else {
    aidAmount = potentialAid;
  }

  // Calcul du prix final mensuel
  const finalYearlyPrice = yearlyPrice - aidAmount;
  const finalMonthlyPrice = Math.round(finalYearlyPrice / 12);

  return {
    finalMonthlyPrice: Math.max(finalMonthlyPrice, 0),
    originalYearlyPrice: yearlyPrice,
    aidAmount: Math.round(aidAmount),
    aidPercentage,
    hasSpecialConditions: false,
    specialConditions: undefined,
  };
}

/**
 * Obtient les informations d'aide pour une région donnée
 * @param region - Région sélectionnée
 * @returns Informations sur l'aide disponible
 */
export function getRegionAidInfo(region: string): RegionPricingRule | null {
  return REGION_PRICING_RULES.find((r) => r.region === region) || null;
}

/**
 * Formate le prix pour affichage (avec espace pour les milliers)
 * @param price - Prix à formater
 * @returns Prix formaté sous forme de string
 */
export function formatPrice(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
