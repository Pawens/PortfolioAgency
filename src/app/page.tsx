import Customer from "@/components/Organisms/server/Customer";
import Hero from "@/components/Organisms/server/Hero";
import KeyMetricsServer from "@/components/Organisms/server/KeyMetricsServer";

export default function Home() {
  return (
    <main className="flex align-center justify-center flex-col">
      <Hero />
      <KeyMetricsServer />
      <Customer />
    </main>
  );
}
