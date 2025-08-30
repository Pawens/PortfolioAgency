import Count from "@/components/Atoms/client/Count";
import CustomerSlider from "@/components/Molecules/client/CustomerSlider";
import { Language } from "@/context/LanguageContext";
import { t } from "@/utils/serverTranslations";
import { getProjectsData } from "@/utils/StrapiCallsUtils";

interface RawProject {
  id: number;
  Title: string;
  Icon: { url: string; alternativeText: string | null } | null;
}

export default async function Customer({ language }: { language: Language }) {
  // Fetch côté serveur pour éviter le loader côté client et améliorer SEO.
  let projects: RawProject[] = [];
  try {
    const resp: any = await getProjectsData(language.toLowerCase());
    projects = resp?.data || [];
  } catch (e) {
    console.error("Failed to fetch projects for Customer section", e);
    // On laisse projects = [] (fallback silencieux)
  }

  return (
    <section className="pt-[80px] pb-[96px] ">
      <div>
        <div className="customer-wrapper flex justify-between items-center px-[88px] pb-[48px]">
          <div className="flex items-top justify-center gap-[8px]">
            <h2 className="customer-title text-[46px] italic font-[450]">
              {t(language, "customer.ourClients")}
            </h2>
            <Count />
          </div>
          <div>
            <p>{t(language, "customer.description1")}</p>
            <p>
              <strong className="font-[550] italic">
                {t(language, "customer.description2")}
              </strong>
            </p>
          </div>
        </div>

        <CustomerSlider projects={projects} language={language} />
      </div>
    </section>
  );
}
