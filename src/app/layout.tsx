import type { Metadata } from "next";
import "./globals.css";
import "../assets/styles/responsive.css";
import "./reset.css";

export const metadata: Metadata = {
  title: "Pawens",
  metadataBase: new URL("https://pawens.com"),
  alternates: {
    canonical: "https://pawens.com",
  },
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
    icon: "/PawensLogo.png",
  },
  openGraph: {
    title: "Pawens – Agence web pour TPE/PME",
    description:
      "Obtenez un site web professionnel personnalisé juste pour vous.",
    url: "https://pawens.com",
    siteName: "Pawens",
    images: [
      {
        url: "https://pawens.com/openGraphImagePawens.webp",
        width: 1200,
        height: 630,
        alt: "Pawens – Agence web",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawens – Agence web pour TPE/PME",
    description:
      "Obtenez un site web professionnel personnalisé juste pour vous.",
    images: ["https://pawens.com/openGraphImagePawens.webp"],
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
        {/* StickyHeader rendu dans chaque page avec son LanguageProvider */}
        {children}
      </body>
    </html>
  );
}
