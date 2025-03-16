import SectionAdvantagesCards from "@/components/Sections/SectionAdvantagesCards";
import SectionContact from "@/components/Sections/SectionContact";
import SectionFaq from "@/components/Sections/SectionFaq";
import SectionHero from "@/components/Sections/SectionHero";
import SectionProjectSteps from "@/components/Sections/SectionProjectSteps";
import SectionProjects from "@/components/Sections/SectionProjects";
import SectionTeamPresentation from "@/components/Sections/SectionTeamPresentation";
import SectionTeamStack from "@/components/Sections/SectionTeamStack";
import SectionTestimonials from "@/components/Sections/SectionTestimonials";
import { FormProvider } from "@/context/ConfirmationPopupContext";
import ConfirmationPopup from "@/components/ConfirmationPopup/ConfirmationPopup";
import SectionExpertise from "@/components/Sections/SectionExpertise";
import SectionMainValuesCards from "@/components/Sections/SectionMainValuesCards";

import DynamicLanguageSelector from "@/components/LanguageSelector/DynamicLanguageSelector";

export default async function Home() {
  return (
    <div style={{ position: "relative" }}>
      <FormProvider>
        <ConfirmationPopup />
        <DynamicLanguageSelector />
        <SectionHero />
        <SectionAdvantagesCards />
        <SectionMainValuesCards />
        <SectionProjectSteps />
        <SectionExpertise />
        <SectionProjects />
        <SectionTestimonials />
        <SectionTeamPresentation />
        <SectionTeamStack />
        <SectionFaq />
        <SectionContact />
      </FormProvider>
    </div>
  );
}
