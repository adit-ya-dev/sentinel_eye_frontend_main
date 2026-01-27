import type { ScanResultResponse } from "@/types/scanResult";

export default function ScanSummaryCards({
  data,
}: {
  data: ScanResultResponse;
}) {
  const cards = [
    {
      label: "Severity",
      value: data.severity,
      color: "text-red-600 dark:text-red-400",
    },
    {
      label: "NDVI Mean",
      value: data.stats.ndviMean.toFixed(2),
      color: "text-emerald-600 dark:text-emerald-400",
    },
    {
      label: "Forest Loss",
      value: `${data.stats.forestLossPercent.toFixed(1)}%`,
      color: "text-orange-600 dark:text-orange-400",
    },
    {
      label: "Urban Gain",
      value: `${data.stats.urbanGainPercent.toFixed(1)}%`,
      color: "text-blue-600 dark:text-blue-400",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((c) => (
        <div
          key={c.label}
          className="bg-card border border-border rounded-2xl p-5 shadow-sm"
        >
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
            {c.label}
          </p>
          <p className={`mt-2 text-xl font-black ${c.color}`}>{c.value}</p>
        </div>
      ))}
    </div>
  );
}
