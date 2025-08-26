import {
  getMainValuesData,
  getTestimonialsData,
  getTeamMembersData,
  getProjectsData,
  getProjectData,
} from "@/utils/StrapiCallsUtils";

const PREFIX = "strapi_";

async function fetchWithCache<T>(
  key: string,
  loader: () => Promise<T>
): Promise<T> {
  // 1) Check sessionStorage
  const stored = sessionStorage.getItem(PREFIX + key);
  if (stored) {
    try {
      return JSON.parse(stored) as T;
    } catch {
      /* en cas de JSON corrompu, on refetch */
    }
  }

  // 2) Sinon on fetch via Strapi
  const data = await loader();
  sessionStorage.setItem(PREFIX + key, JSON.stringify(data));
  return data;
}

// Wrappers pour chaque call
export function fetchMainValues(lang: string) {
  return fetchWithCache(`mainValues_${lang}`, () => getMainValuesData(lang));
}

export function fetchTestimonials(lang: string) {
  return fetchWithCache<any>(`testimonials_${lang}`, () =>
    getTestimonialsData(lang)
  );
}

export function fetchTeamMembers(lang: string) {
  return fetchWithCache<any>(`teamMembers_${lang}`, () =>
    getTeamMembersData(lang)
  );
}

export function fetchProjects(lang: string) {
  return fetchWithCache<any>(`projects_${lang}`, () => getProjectsData(lang));
}

export function fetchProjectDetail(id: string, lang: string) {
  return fetchWithCache<any>(`project_${id}_${lang}`, () =>
    getProjectData(id, lang)
  );
}
