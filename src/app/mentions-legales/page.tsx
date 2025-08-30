import { LanguageProvider } from "@/context/LanguageContext";
import StickyHeader from "@/components/Organisms/client/StickyHeader";
import Link from "next/link";
import {
  getLanguageFromSearchParams,
  t,
  type Language,
} from "@/utils/serverTranslations";

export const metadata = {
  title: "Mentions légales - Pawens",
  robots: { index: true, follow: true },
};

export default function MentionsLegales({
  searchParams,
}: {
  searchParams: any;
}) {
  const language: Language = getLanguageFromSearchParams(searchParams);
  return (
    <LanguageProvider initialLanguage={language}>
      <StickyHeader />
      <main className="flex flex-col gap-[32px] px-[88px] pb-[88px] pt-[150px] bg-[var(--color-black)] text-[var(--color-secondary)]">
        <div className="ml-auto mr-auto text-center pb-[64px]">
          <h2 className="text-[60px]">Mentions légales</h2>
          <p className="opacity-70">Dernière mise à jour: 2025</p>
        </div>
        <p>
          Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004
          pour la Confiance dans l’Économie Numérique (LCEN), il est porté à la
          connaissance des utilisateurs et visiteurs, ci-après l’« Utilisateur
          », du site pawens.com, ci-après le « Site », les présentes mentions
          légales. La connexion et la navigation sur le Site par l’Utilisateur
          implique l’acceptation intégrale et sans réserve des présentes
          mentions légales. Ces dernières sont accessibles sur le Site à la
          rubrique « Mentions légales ».
        </p>
        <div className="flex flex-col gap-[4px]">
          <h3 className="text-[30px]">EDITION DU SITE</h3>
          <p>
            L’édition et la direction de la publication du Site est assurée par:
          </p>
          <p>Monsieur Romain PARISOT</p>
          <p>Adresse : 60 rue François 1er</p>
          <p>Téléphone : 06 99 41 69 00</p>
          <p>Email : romainparisot.pro@gmail.com</p>
          <p>Ci-après l’« Éditeur ».</p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h3 className="text-[30px]">HEBERGEUR</h3>
          <p>
            L’hébergeur du Site est la société Railway Corporation, dont le
            siège social est situé au : 548 Market St PMB 68956, San Francisco,
            California, USA
          </p>
          <p>
            L’Utilisateur peut contacter l’hébergeur pour tout problème
            technique via :
          </p>
          <ul>
            <li>- Email : support@railway.app</li>
            <li>- Formulaire de contact : https://railway.app/support</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h3 className="text-[30px]">ACCES AU SITE</h3>
          <p>
            Le Site est normalement accessible à tout moment à l’Utilisateur.
          </p>
          <p>
            Toutefois, l’Éditeur pourra suspendre, limiter ou interrompre le
            Site pour effectuer des mises à jour ou modifications.
          </p>
          <p>
            L’Éditeur ne pourra être tenu responsable des conséquences
            éventuelles de cette indisponibilité sur les activités de
            l’Utilisateur.
          </p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h3 className="text-[30px]">COLLECTE DES DONNEES</h3>
          <p>
            Le Site collecte certaines informations via le formulaire de contact
            :
          </p>
          <ul>
            <li>- Nom</li>
            <li>- Prénom</li>
            <li>- Email</li>
            <li>- Message / demande de service</li>
          </ul>
          <p>
            Ces informations sont uniquement utilisées afin de répondre aux
            demandes de l’Utilisateur et ne sont jamais transmises à des tiers.
          </p>
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD, règlement UE 2016/679) et à la loi française n°78-17 du 6
            janvier 1978, l’Utilisateur dispose d’un droit :
          </p>
          <ul>
            <li>- Droit d’accès</li>
            <li>- Droit de rectification</li>
            <li>- Droit à l’effacement</li>
            <li>- Droit à la limitation du traitement</li>
          </ul>
          <p>
            Pour exercer ces droits, l’Utilisateur peut contacter l’Éditeur à
            l’adresse suivante : romainparisot.pro@gmail.com.
          </p>
          <p>
            Les données sont conservées pendant une durée maximale de 3 ans à
            compter du dernier contact.
          </p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h3 className="text-[30px]">Propriété intellectuelle</h3>
          <p>
            Toute utilisation, reproduction, diffusion, commercialisation,
            modification de toute ou partie du Site, sans autorisation expresse
            de l’Éditeur, est interdite et pourra entraîner des actions et
            poursuites judiciaires conformément à la réglementation en vigueur.
          </p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h3 className="text-[30px]">Limitation de responsabilité</h3>
          <p>
            L’Éditeur ne pourra être tenu responsable en cas de dommages directs
            ou indirects résultant de l’utilisation du Site ou de
            l’impossibilité d’y accéder. L’Utilisateur est responsable de
            l’usage qu’il fait des informations disponibles sur le Site.
          </p>
        </div>
        <div className="pt-[16px] ml-auto mr-auto text-center ">
          <p>
            Pour plus d’informations sur la collecte et l’utilisation de vos
            données personnelles, veuillez consulter notre{" "}
            <Link
              href="/politique-de-confidentialite"
              className="underline hover:opacity-80 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-secondary)] focus-visible:ring-offset-[var(--color-black)] rounded-sm"
              aria-label="Lire la politique de confidentialité"
            >
              politique de confidentialité
            </Link>
            .
          </p>
        </div>
      </main>
    </LanguageProvider>
  );
}
