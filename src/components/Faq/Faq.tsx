import React from "react";
import FaqCard, { FaqItem } from "../FaqCard/FaqCard";
import "./Faq.css";

const faqData: FaqItem[] = [
  {
    id: "panel1",
    title: "Pourquoi vous ?",
    description:
      "Nous offrons un accompagnement complet : formation aux enjeux du web, conseil sur votre objectif de digitalisation, conception grâce à notre expertise, et maintenance pour vous assurer une solution fiable et performante. Nous accordons une grande importance à la transparence quant à la faisabilité de votre projet, les bénéfices que vous en tirerez et la clarté des prix avec des tarifs fixes définis en amont. Contrairement aux forfaits journaliers qui peuvent inciter à rallonger les délais, notre approche garantit une vision précise des coûts et du calendrier.",
  },
  {
    id: "panel2",
    title: "Combien de temps prendra la création de mon site web ?",
    description:
      "La durée de création de votre site dépend de la complexité de votre projet. En général, un site vitrine prend entre 3 et 4 semaines, tandis qu’un site e-commerce peut nécessiter entre 4 et 8 semaines.",
  },
  {
    id: "panel3",
    title: "Quel est le prix pour réaliser mon site ?",
    description:
      "Le prix de la création de votre site dépend des fonctionnalités que vous souhaitez intégrer. Nous proposons un devis personnalisé en fonction de vos besoins. Nos prestations n'ont pas de prix fixe pour un site en lui-même, mais chaque fonctionnalité possède un tarif défini à l’avance. Parlez-nous de votre projet et nous vous fournirons un devis sous 48 heures.",
  },
  {
    id: "panel4",
    title: "Comment se déroule la création de mon site web ?",
    description:
      "Nous débutons par une discussion approfondie pour bien comprendre vos besoins et objectifs. Ensuite, nous réalisons des maquettes, suivies du développement et de l’intégration de vos contenus. Une fois votre site prêt, nous effectuons des tests et ajustements avant sa mise en ligne. Vous bénéficiez d’un suivi régulier tout au long du projet pour valider chaque étape.",
  },
  {
    id: "panel5",
    title: "Mon site sera-t-il bien référencé sur Google ?",
    description:
      "Nous appliquons les meilleures pratiques en matière de référencement naturel (SEO) dès la conception de votre site. Cela inclut une structure optimisée, des temps de chargement rapides et un balisage adapté. Pour améliorer encore davantage votre visibilité, nous proposons également des prestations spécifiques en SEO.",
  },
  {
    id: "panel6",
    title: "Pourrai-je modifier mon site moi-même après sa mise en ligne ?",
    description:
      "Oui ! Si vous avez choisi cette option, nous vous fournirons un accès à un espace d’administration où vous pourrez facilement modifier le contenu de votre site (textes, images, etc.). Si besoin, nous pouvons également vous proposer une formation pour prendre en main votre site.",
  },
  {
    id: "panel7",
    title: "Proposez-vous l’hébergement et le nom de domaine ?",
    description:
      "Oui, nous pouvons nous occuper de l’hébergement et de l’enregistrement de votre nom de domaine. Nous vous conseillons la meilleure solution en fonction de vos besoins et nous nous chargeons de la configuration technique pour garantir un fonctionnement optimal dès le lancement.",
  },
  {
    id: "panel8",
    title: "Comment se passe le paiement de mon site ?",
    description:
      "Nous demandons généralement un acompte au début du projet, puis le solde est réglé à la livraison. Selon votre budget, nous pouvons également proposer des facilités de paiement en plusieurs fois.",
  },
  {
    id: "panel9",
    title:
      "Que se passe-t-il si j’ai besoin de modifications après la mise en ligne ?",
    description:
      "Nous restons disponibles après la mise en ligne pour toute correction de bug sans frais supplémentaires. En revanche, pour l’ajout de nouvelles fonctionnalités, nous établirons un devis personnalisé pour cette nouvelle prestation.",
  },
];

function Faq() {
  return (
    <div className="faqContainer">
      <div className="faqTitle">
        <h2>FAQ</h2>
        <p>Vos questions les plus courantes:</p>
      </div>
      <div className="faqContent">
        <FaqCard items={faqData} />
      </div>
    </div>
  );
}

export default Faq;
