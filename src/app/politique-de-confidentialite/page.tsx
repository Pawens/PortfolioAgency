import { LanguageProvider } from "@/context/LanguageContext";
import StickyHeader from "@/components/Organisms/client/StickyHeader";
import Link from "next/link";
import {
  getLanguageFromSearchParams,
  t,
  type Language,
} from "@/utils/serverTranslations";

export const metadata = {
  title: "Politique de confidentialité - Pawens",
  robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialite({
  searchParams,
}: {
  searchParams: any;
}) {
  const language: Language = getLanguageFromSearchParams(searchParams);
  return (
    <LanguageProvider initialLanguage={language}>
      <StickyHeader />
      <main className="flex flex-col gap-[32px] px-[88px] pt-[150px] bg-[var(--color-black)] text-[var(--color-secondary)]">
        <div className="ml-auto mr-auto text-center">
          <h2 className="text-[60px]">Politique de confidentialité</h2>
          <p className="opacity-70">En vigueur au 30/08/2025</p>
        </div>
        <p>
          La présente politique de confidentialité a pour objectif d’informer
          les utilisateurs du site pawens.com (ci-après le « Site ») sur la
          collecte, l’utilisation et la protection de leurs données
          personnelles.
        </p>
        <div className="flex flex-col gap-[4px]">
          <h3 className="text-[30px]">1. Responsable du traitement</h3>
          <p>Monsieur Romain PARISOT</p>
          <p>Email : romainparisot.pro@gmail.com</p>
          <p>Téléphone : 06 99 41 69 00</p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h3 className="text-[30px]">2. Données collectées</h3>
          <p>
            Les données personnelles collectées sur le Site via le formulaire de
            contact sont :
          </p>
          <ul className=" pl-6">
            <li>- Nom</li>
            <li>- Prénom</li>
            <li>- Adresse email</li>
            <li>- Message / demande de service</li>
          </ul>
          <p>Aucune autre donnée personnelle n’est collectée sur le Site.</p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h3 className="text-[30px]">3. Finalité de la collecte</h3>
          <p>
            Les informations recueillies sont utilisées uniquement pour répondre
            à vos demandes et échanger avec vous concernant nos services. Elles
            ne sont jamais communiquées à des tiers à des fins commerciales ou
            autres.
          </p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h3 className="text-[30px]">4. Base légale</h3>
          <ul className=" pl-6">
            <li>
              - L’exécution de mesures précontractuelles à la demande de
              l’utilisateur (article 6.1.b du RGPD)
            </li>
            <li>
              - Le consentement de l’utilisateur lorsqu’il envoie volontairement
              son message via le formulaire
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h3 className="text-[30px]">5. Durée de conservation</h3>
          <p>
            Les données collectées sont conservées pendant une durée maximale de
            3 ans à compter du dernier contact.
          </p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h3 className="text-[30px]">6. Destinataires des données</h3>
          <p>
            Les messages envoyés via le formulaire de contact sont accessibles
            uniquement à l’Éditeur du Site et aux membres de l&apos;équipe
            Pawens qui reçoivent ces emails. Les données sont transmises via le
            service EmailJS pour acheminement vers nos adresses email et ne sont
            pas accessibles à l’hébergeur Railway Corporation, qui n’intervient
            pas dans le traitement des données personnelles.
          </p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h3 className="text-[30px]">7. Droits des utilisateurs</h3>
          <p>Conformément au RGPD, chaque utilisateur dispose d’un droit :</p>
          <ul className=" pl-6">
            <li>- d’accès à ses données</li>
            <li>- de rectification</li>
            <li>- de suppression</li>
            <li>- d’opposition au traitement</li>
          </ul>
          <p>
            Pour exercer ces droits, l’utilisateur peut contacter l’Éditeur à :
            <br />
            <span className="underline">romainparisot.pro@gmail.com</span>
          </p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h3 className="text-[30px]">8. Sécurité</h3>
          <p>
            L’Éditeur met en œuvre les mesures techniques et organisationnelles
            appropriées pour protéger les données personnelles contre toute
            perte, altération, divulgation ou accès non autorisé.
          </p>
        </div>
        <div className="flex flex-col gap-[4px] pb-[32px]">
          <h3 className="text-[30px]">9. Modification de la politique</h3>
          <p>
            Cette politique de confidentialité peut être modifiée à tout moment.
            La version en vigueur est toujours disponible sur le Site.
          </p>
        </div>
        <div className="pt-[16px] ml-auto mr-auto text-center pb-[64px]">
          <p>
            Pour plus d’informations légales générales, consultez nos{" "}
            <Link
              href="/mentions-legales"
              className="underline hover:opacity-80 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-secondary)] focus-visible:ring-offset-[var(--color-black)] rounded-sm"
              aria-label="Lire les mentions légales"
            >
              mentions légales
            </Link>
            .
          </p>
        </div>
      </main>
    </LanguageProvider>
  );
}
