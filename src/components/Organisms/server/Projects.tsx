import ProjectsTitle from "@/components/Atoms/server/ProjectsTitle";
import ProjectsList from "@/components/Molecules/client/ProjectsList";
import { Language } from "@/context/LanguageContext";
import { getProjectsData } from "@/utils/StrapiCallsUtils";

interface RawProject {
  id: number;
  documentId: string;
  Title: string;
  Images: Array<{ url: string }>;
}

async function Projects({ language }: { language: Language }) {
  let projects: RawProject[] = [];
  try {
    const resp: any = await getProjectsData(language.toLowerCase());
    projects = resp?.data || [];
  } catch (e) {
    console.error("Failed to fetch projects for Projects section", e);
  }

  return (
    <div id="projects">
      <ProjectsTitle language={language} />
      <ProjectsList projects={projects} language={language} />
    </div>
  );
}

export default Projects;
