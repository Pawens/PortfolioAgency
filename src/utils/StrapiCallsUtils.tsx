"use server";

export async function getMainValuesData(lang: string) {
  console.log(`Fetching main values for language: ${lang}`);

  const res = await fetch(
    `${process.env.BASE_URL}/api/key-values?locale=${lang}`,
    {
      next: { revalidate: 86400 },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch values");
  return res.json();
}

export async function getTestimonialsData(lang: string) {
  console.log(`Fetching testimonials for language: ${lang}`);

  const res = await fetch(
    `${process.env.BASE_URL}/api/testimonials?locale=${lang}`,
    {
      next: { revalidate: 86400 },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch testimonials");

  return res.json();
}

export async function getTeamMembersData(lang: string) {
  console.log(`Fetching team members data for language: ${lang}`);

  const res = await fetch(
    `${process.env.BASE_URL}/api/team-members?populate=*&locale=${lang}`,
    {
      next: { revalidate: 86400 },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch team members");

  return res.json();
}

export async function getProjectsData(lang: string) {
  console.log(`Fetching projects for language: ${lang}`);

  const res = await fetch(
    `${process.env.BASE_URL}/api/projects?populate=*&locale=${lang}`,
    {
      next: { revalidate: 86400 },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch projects");

  return res.json();
}

export async function getProjectData(documentId: string, lang: string) {
  console.log(
    `Fetching project details for documentId: ${documentId} in language: ${lang}`
  );

  const res = await fetch(
    `${process.env.BASE_URL}/api/projects/${documentId}?populate=*&locale=${lang}`,
    {
      next: { revalidate: 86400 },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch project details");

  return res.json();
}

export async function getBlogArticlesData(lang: string) {
  console.log(`Fetching blog articles for language: ${lang}`);

  const res = await fetch(
    `${process.env.BASE_URL}/api/articles?populate=*&locale=${lang}`,
    {
      next: { revalidate: 86400 },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch blog articles");

  return res.json();
}

export async function getBlogArticleData(documentId: string, lang: string) {
  console.log(
    `Fetching blog article details for documentId: ${documentId} in language: ${lang}`
  );

  const res = await fetch(
    `${process.env.BASE_URL}/api/articles/${documentId}?populate=*&locale=${lang}`,
    {
      next: { revalidate: 86400 },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch blog article details");

  return res.json();
}
