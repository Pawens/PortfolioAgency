import Customer from "@/components/Organisms/server/Customer";
import Hero from "@/components/Organisms/server/Hero";
import KeyMetricsServer from "@/components/Organisms/server/KeyMetricsServer";
import ContactSection from "@/components/Organisms/client/ContactSection";
import FaqSection from "@/components/Organisms/server/FaqSection";
import WhoAreWe from "@/components/Organisms/server/WhoAreWe";
import Footer from "@/components/Organisms/server/Footer";
import LogoFooter from "@/assets/icons/LogoFooter.svg";

import Projects from "@/components/Organisms/server/Projects";
import Services from "@/components/Organisms/server/Services";
import Process from "@/components/Organisms/server/Process";

export default function Home() {
  return (
    <>
      <main className="flex align-center justify-center flex-col">
        <Hero />
        <KeyMetricsServer />
        <Customer />
        <Projects />
        <Services />
        <Process />
        <section className="relative bg-gradient-to-t from-[#193345] to-[var(--color-black)]">
          <div
            className="absolute z-10 pointer-events-none"
            style={{ bottom: 0, left: 0 }}
          >
            <LogoFooter />
          </div>
          <div className="relative z-20">
            <WhoAreWe />
            <FaqSection />
            <ContactSection />
            <Footer />
          </div>
        </section>
      </main>
    </>
  );
}
