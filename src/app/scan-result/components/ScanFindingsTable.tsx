import type { ScanResultResponse } from "@/types/scanResult";

export default function ScanFindingsTable({
  data,
}: {
  data: ScanResultResponse;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-xl transition-colors">
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
        Findings
      </p>

      <div className="mt-4 overflow-hidden rounded-xl border border-border bg-background/50">
        <table className="w-full text-sm">
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="p-3 text-left text-[10px] font-bold uppercase tracking-wider">
                Type
              </th>
              <th className="p-3 text-left text-[10px] font-bold uppercase tracking-wider">
                Severity
              </th>
              <th className="p-3 text-left text-[10px] font-bold uppercase tracking-wider">
                Area (ha)
              </th>
              <th className="p-3 text-left text-[10px] font-bold uppercase tracking-wider">
                Confidence
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {data.findings.map((f) => (
              <tr
                key={f.id}
                className="text-foreground/80 transition-colors hover:bg-muted/30"
              >
                <td className="p-3 font-semibold">{f.type}</td>
                <td className="p-3">
                  <span
                    className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-tight ${
                      f.severity === "High"
                        ? "bg-red-500/10 text-red-600 dark:text-red-400"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {f.severity}
                  </span>
                </td>
                <td className="p-3 font-mono">{f.areaHectares.toFixed(1)}</td>
                <td className="p-3 font-mono">
                  {Math.round(f.confidence * 100)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Description List */}
      <div className="mt-4 space-y-2 text-xs text-muted-foreground">
        {data.findings.map((f) => (
          <p key={f.id} className="leading-relaxed">
            • <span className="font-bold text-foreground">{f.id}</span> —{" "}
            {f.description}
          </p>
        ))}
      </div>
    </div>
  );
}
