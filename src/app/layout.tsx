import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";
import "../assets/styles/responsive.css";
import { LanguageProvider } from "@/context/LanguageContext";
import StickyHeader from "@/components/Organisms/client/StickyHeader";

export const metadata: Metadata = {
  title: "Pawens",
  description:
    "Création de sites web sur mesure pour TPE & PME – Développeur web spécialisé en sites vitrines et e-commerce performants. Design personnalisé, UX optimisée, SEO avancé pour un meilleur référencement Google. Profitez d’une approche transparente et d’un accompagnement complet : analyse des besoins, développement, optimisation SEO, maintenance et sécurité. Boostez votre visibilité en ligne dès aujourd’hui !",
  keywords: [
    "création site web",
    "site web professionnel",
    "développeur web indépendant",
    "site internet sur mesure",
    "site vitrine entreprise",
    "agence web pour PME",
    "création de site optimisé SEO",
    "site e-commerce performant",
    "refonte site internet",
    "développement web sur mesure",
    "maintenance site internet",
    "hébergement site",
    "création site web Paris",
    "création site web Val d'Oise",
    "création site web Île-de-France",
    "agence web Val d'Oise",
    "agence web Île-de-France",
    "développeur web freelance Paris",
    "création site internet entreprise",
    "agence web pour TPE et PME",
  ],
  icons: {
    icon: "/PawensLogo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased font-satoshi">
        <LanguageProvider>
          <StickyHeader />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
