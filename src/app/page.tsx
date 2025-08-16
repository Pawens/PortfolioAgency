import Customer from "@/components/Organisms/server/Customer";
import Hero from "@/components/Organisms/server/Hero";
import KeyMetricsServer from "@/components/Organisms/server/KeyMetricsServer";
import ContactSection from "@/components/Organisms/client/ContactSection";
import FaqSection from "@/components/Organisms/server/FaqSection";
import WhoAreWe from "@/components/Organisms/server/WhoAreWe";
import Footer from "@/components/Organisms/server/Footer";

import Projects from "@/components/Organisms/server/Projects";

export default function Home() {
  return (
    <>
      <main className="flex align-center justify-center flex-col">
        <Hero />
        <KeyMetricsServer />
        <Customer />
        <Projects />
        <WhoAreWe />
        <FaqSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
