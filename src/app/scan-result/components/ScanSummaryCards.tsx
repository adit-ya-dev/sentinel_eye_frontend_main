import type { ScanResultResponse } from "@/types/scanResult";

export default function ScanSummaryCards({
  data,
}: {
  data: ScanResultResponse;
}) {
  const cards = [
    { label: "Severity", value: data.severity },
    { label: "NDVI Mean", value: data.stats.ndviMean.toFixed(2) },
    {
      label: "Forest Loss",
      value: `${data.stats.forestLossPercent.toFixed(1)}%`,
    },
    {
      label: "Urban Gain",
      value: `${data.stats.urbanGainPercent.toFixed(1)}%`,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((c) => (
        <div key={c.label} className="glass-card rounded-2xl p-5 shadow-xl">
          <p className="text-xs uppercase tracking-widest text-white/40">
            {c.label}
          </p>
          <p className="mt-2 text-xl font-black text-white">{c.value}</p>
        </div>
      ))}
    </div>
  );
}
