import MemberCard from "@/components/Molecules/server/MemberCard";
import { Language } from "@/context/LanguageContext";
import { getTeamMembersData } from "@/utils/StrapiCallsUtils";

interface TeamMemberRaw {
  id: number;
  FullName?: string;
  JobTitle?: string;
  JobPosition?: string;
  ProfilePicture?: any;
  LinkedinUrl?: string;
}

interface WhoAreWeProps {
  language: Language;
}

async function WhoAreWe({ language }: WhoAreWeProps) {
  let team: TeamMemberRaw[] = [];
  try {
    const resp: any = await getTeamMembersData(language.toLowerCase());
    team = resp?.data || [];
  } catch (e) {
    console.error("WhoAreWe: failed to fetch team members", e);
  }

  return (
    <section className="flex py-[128px]">
      <div className="team-members-container flex flex-row flex-wrap justify-around items-center w-full gap-[32px]">
        {team.length === 0 ? (
          <p className="opacity-70 text-sm">Team unavailable.</p>
        ) : (
          team.map((m) => {
            const profile: any = (m as any).ProfilePicture || {};
            const thumb =
              profile?.formats?.medium?.url ||
              profile?.formats?.small?.url ||
              profile?.url ||
              profile?.formats?.thumbnail?.url ||
              "";
            return (
              <MemberCard
                key={(m as any).id}
                name={(m as any).FullName || ""}
                role={(m as any).JobTitle || ""}
                job={(m as any).JobPosition || ""}
                imageUrl={thumb}
                linkedInUrl={(m as any).LinkedinUrl || ""}
              />
            );
          })
        )}
      </div>
    </section>
  );
}

export default WhoAreWe;
