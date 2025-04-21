import Customer from "@/components/Organisms/server/Customer";
import Hero from "@/components/Organisms/server/Hero";
import KeyMetricsServer from "@/components/Organisms/server/KeyMetricsServer";
import ContactSection from "@/components/Organisms/client/ContactSection";
import FaqSection from "@/components/Organisms/client/FaqSection";


export default function Home() {
  return (
    <main className="flex align-center justify-center flex-col">
      <Hero />
      <KeyMetricsServer />
      <Customer />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
