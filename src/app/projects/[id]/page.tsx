import ProjectDetailPage from "@/components/Pages/ProjectDetailPage";
import StickyHeader from "@/components/Organisms/client/StickyHeader";
import { LanguageProvider } from "@/context/LanguageContext";
import { getProjectData } from "@/utils/StrapiCallsUtils";
import { getLanguageFromSearchParams } from "@/utils/serverTranslations";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ProjectPage({ params, searchParams }: Props) {
  const language = getLanguageFromSearchParams(searchParams);

  try {
    const project = await getProjectData(params.id, language.toLowerCase());

    if (!project || !project.data) {
      return <div>Project not found</div>;
    }

    return (
      <LanguageProvider initialLanguage={language}>
        <StickyHeader />
        <ProjectDetailPage project={project} language={language} />
      </LanguageProvider>
    );
  } catch (error) {
    console.error("Error fetching project:", error);
    return <div>Error loading project</div>;
  }
}
