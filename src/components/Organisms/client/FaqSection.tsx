'use client'

import React from 'react'
import Count from '@/components/Atoms/client/Count'
import FaqItem from '@/components/Molecules/client/FaqItem'

const faqData = [
  {
    question: "Comment fonctionne votre service ?",
    answer:
      "Nous offrons un accompagnement complet : formation aux enjeux du web, conseil sur votre objectif de digitalisation, conception grâce à notre expertise, et maintenance pour vous assurer une solution fiable et performante. Nous accordons une grande importance à la transparence quant à la faisabilité de votre projet, les bénéfices que vous en tirerez et la clarté des prix avec des tarifs fixes définis en amont. Contrairement aux forfaits journaliers qui peuvent inciter à rallonger les délais, notre approche garantit une vision précise des coûts et du calendrier.",
  },
  {
    question: "Combien de temps faut-il pour créer un site ?",
    answer:
      "La durée de création de votre site dépend de la complexité de votre projet. En général, un site vitrine prend entre 3 et 4 semaines, tandis qu’un site e-commerce peut nécessiter entre 4 et 8 semaines.",
  },
  {
    question: "Combien coûte la création d’un site ?",
    answer:
      "Le prix de la création de votre site dépend des fonctionnalités que vous souhaitez intégrer. Nous proposons un devis personnalisé en fonction de vos besoins. Nos prestations n'ont pas de prix fixe pour un site en lui-même, mais chaque fonctionnalité possède un tarif défini à l’avance. Parlez-nous de votre projet et nous vous fournirons un devis sous 48 heures.",
  },
  {
    question: "Comment se déroule un projet avec vous ?",
    answer:
      "Nous débutons par une discussion approfondie pour bien comprendre vos besoins et objectifs. Ensuite, nous réalisons des maquettes, suivies du développement et de l’intégration de vos contenus. Une fois votre site prêt, nous effectuons des tests et ajustements avant sa mise en ligne. Vous bénéficiez d’un suivi régulier tout au long du projet pour valider chaque étape.",
  },
  {
    question: "Mon site sera-t-il optimisé pour le référencement ?",
    answer:
      "Nous appliquons les meilleures pratiques en matière de référencement naturel (SEO) dès la conception de votre site. Cela inclut une structure optimisée, des temps de chargement rapides et un balisage adapté. Pour améliorer encore davantage votre visibilité, nous proposons également des prestations spécifiques en SEO.",
  },
  {
    question: "Pourrai-je modifier mon site moi-même ?",
    answer:
      "Oui ! Si vous avez choisi cette option, nous vous fournirons un accès à un espace d’administration où vous pourrez facilement modifier le contenu de votre site (textes, images, etc.). Si besoin, nous pouvons également vous proposer une formation pour prendre en main votre site.",
  },
  {
    question: "Proposez-vous l’hébergement et le nom de domaine ?",
    answer:
      "Oui, nous pouvons nous occuper de l’hébergement et de l’enregistrement de votre nom de domaine. Nous vous conseillons la meilleure solution en fonction de vos besoins et nous nous chargeons de la configuration technique pour garantir un fonctionnement optimal dès le lancement.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer:
      "Nous demandons généralement un acompte au début du projet, puis le solde est réglé à la livraison. Selon votre budget, nous pouvons également proposer des facilités de paiement en plusieurs fois.",
  },
  {
    question: "Proposez-vous un suivi après la mise en ligne ?",
    answer:
      "Nous restons disponibles après la mise en ligne pour toute correction de bug sans frais supplémentaires. En revanche, pour l’ajout de nouvelles fonctionnalités, nous établirons un devis personnalisé pour cette nouvelle prestation.",
  },
]

const FaqSection = () => {
  return (
    <section className="pt-[40px] pb-[100px] bg-[var(--color-primary)] px-4 py-20 text-[var(--color-secondary)]">
      <div className="max-w-6xl mx-auto flex flex-row gap-24">
        <div className="w-[25%] flex items-start gap-[10px]">
          <h2 className="ml-[60px] text-[48px] italic">FAQ</h2>
          <Count manualCount={faqData.length} />
        </div>

        <div className="w-[75%] flex flex-col pr-[60px]">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
