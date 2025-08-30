"use client";

import { useLanguage } from "@/context/LanguageContext";
import { fetchMainValues } from "@/utils/clientCache";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

type RawMetric = {
  id: number;
  Label: string;
  Value: string;
  iconName: string;
};

interface Metric {
  id: number;
  label: string;
  value: number;
}

export default function KeyMetricsClient() {
  const { language } = useLanguage();
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchMainValues(language.toLowerCase())
      .then((resp) => {
        const raw: RawMetric[] = resp.data || [];
        const order = ["work", "check", "star"];
        const ordered: Metric[] = order
          .map((icon) => raw.find((r) => r.iconName === icon))
          .filter((r): r is RawMetric => !!r)
          .map((r) => ({
            id: r.id,
            label: r.Label,
            value: parseInt(r.Value.replace(/\D/g, ""), 10),
          }));
        setMetrics(ordered);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [language]);

  if (loading) return <p>Chargement…</p>;

  return (
    <div className="keymetrics-row flex gap-[32px] w-full justify-between text-center">
      {metrics.map((m, idx) => {
        const prefix = idx < 2 ? "+" : "";
        const suffix = idx === 2 ? "/5" : "";
        const alignClass =
          idx === 0 ? "text-left" : idx === 1 ? "text-center" : "text-right";

        return (
          <div key={m.id} className={`flex flex-col ${alignClass}`}>
            <CountUp
              start={0}
              end={m.value}
              duration={2}
              prefix={prefix}
              suffix={suffix}
              enableScrollSpy
              scrollSpyOnce
              className="keymetrics-count text-[38px] font-bold text-[var(--color-primary)]"
            />
            <span className="text-[14px] text-[var(--color-black)]">
              {m.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
