import CustomDropdown from "./CustomDropdown";

interface RegionFilterProps {
  selectedRegion: string;
  onRegionChange: (region: string) => void;
  regions: { value: string; label: string }[];
  label: string;
}

export default function RegionFilter({
  selectedRegion,
  onRegionChange,
  regions,
  label,
}: RegionFilterProps) {
  return (
    <div className="region-filter-container">
      <label className="region-filter-label">{label}</label>
      <CustomDropdown
        options={regions}
        value={selectedRegion}
        onChange={onRegionChange}
        placeholder="Sélectionnez votre région"
        className="region-filter-dropdown"
      />
    </div>
  );
}
