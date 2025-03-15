import { getMainValuesData } from "@/utils/StrapiCallsUtils";
import { cookies } from "next/headers";
import MainValuesCardsClient from "./MainValuesCardsClient";

export default async function MainValuesCardsFetcher() {
  const cookieStore = await cookies();
  const selectedLanguage =
    (cookieStore.get("selectedLanguage")?.value as
      | "en"
      | "fr"
      | "de"
      | "es"
      | "it") || "fr";

  // Fetch initial data on the server
  const data = await getMainValuesData(selectedLanguage);

  return <MainValuesCardsClient initialData={data.data} />;
}
