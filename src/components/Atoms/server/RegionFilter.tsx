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
    <div className="region-filter">
      <label htmlFor="region-select" className="region-filter-label">
        {label}
      </label>
      <select
        id="region-select"
        value={selectedRegion}
        onChange={(e) => onRegionChange(e.target.value)}
        className="region-filter-select"
      >
        {regions.map((region) => (
          <option key={region.value} value={region.value}>
            {region.label}
          </option>
        ))}
      </select>
    </div>
  );
}
