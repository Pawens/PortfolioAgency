import { getProjectData } from "@/utils/StrapiCallsUtils";
import { getLanguageFromSearchParams } from "@/utils/serverTranslations";
import ProjectDetailPage from "@/components/Pages/ProjectDetailPage";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ProjectPage({ params, searchParams }: Props) {
  const language = getLanguageFromSearchParams(searchParams);

  try {
    const project = await getProjectData(params.id, language.toLowerCase());

    console.log("=== PROJECT DATA FROM SERVER ===");
    console.log("Full project object:", JSON.stringify(project, null, 2));
    console.log("Project.data:", project?.data);
    console.log("================================");

    if (!project || !project.data) {
      return <div>Project not found</div>;
    }

    return <ProjectDetailPage project={project} language={language} />;
  } catch (error) {
    console.error("Error fetching project:", error);
    return <div>Error loading project</div>;
  }
}
