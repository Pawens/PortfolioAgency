import LanguageSelector from "@/components/Atoms/LanguageSelector";

export default async function LandingMain() {
  return (
    <div
      style={{
        background: "var(--color-primary)",
        height: "100vh",
      }}
    >
      <LanguageSelector />
    </div>
  );
}
