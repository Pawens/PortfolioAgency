import Customer from "@/components/Organisms/server/Customer";
import Hero from "@/components/Organisms/server/Hero";
import KeyMetricsServer from "@/components/Organisms/server/KeyMetricsServer";
import ContactSection from "@/components/Organisms/client/ContactSection";
import FaqSection from "@/components/Organisms/server/FaqSection";
import WhoAreWe from "@/components/Organisms/server/WhoAreWe";
import Footer from "@/components/Organisms/server/Footer";
import LogoFooter from "@/assets/icons/LogoFooter.svg";
import BackgroundProcess from "@/assets/icons/BackgroundProcess.svg";
import Review from "@/components/Organisms/server/Reviews";
import Projects from "@/components/Organisms/server/Projects";
import Services from "@/components/Organisms/server/Services";
import Process from "@/components/Organisms/server/Process";
import { getLanguageFromSearchParams } from "@/utils/serverTranslations";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Home({ searchParams }: Props) {
  const language = getLanguageFromSearchParams(searchParams);
  return (
    <>
      <main className="flex align-center justify-center flex-col">
        <Hero language={language} />
        <KeyMetricsServer language={language} />
        <Customer language={language} />
        <section className="relative" style={{ backgroundColor: "#010101" }}>
          <div className="absolute inset-0 pointer-events-none">
            <BackgroundProcess className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10">
            <Projects language={language} />
            <Services language={language} />
            <Process language={language} />
            <Review language={language} />
          </div>
        </section>

        <section className="relative bg-gradient-to-t from-[#193345] to-[var(--color-black)]">
          <div
            className="absolute z-10 pointer-events-none max-w-[100vw] overflow-hidden"
            style={{ bottom: 0, left: 0 }}
          >
            <LogoFooter />
          </div>
          <div className="relative z-20">
            <WhoAreWe />
            <FaqSection language={language} />
            <ContactSection language={language} />
            <Footer />
          </div>
        </section>
      </main>
    </>
  );
}
