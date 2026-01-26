import type { ScanResultResponse } from "@/types/scanResult";

export default function ScanFindingsTable({
  data,
}: {
  data: ScanResultResponse;
}) {
  return (
    <div className="glass-card rounded-2xl p-5 shadow-xl">
      <p className="text-xs uppercase tracking-widest text-white/40">
        Findings
      </p>

      <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-white/60">
            <tr>
              <th className="text-left p-3">Type</th>
              <th className="text-left p-3">Severity</th>
              <th className="text-left p-3">Area (ha)</th>
              <th className="text-left p-3">Confidence</th>
            </tr>
          </thead>

          <tbody>
            {data.findings.map((f) => (
              <tr key={f.id} className="border-t border-white/10 text-white/80">
                <td className="p-3 font-semibold">{f.type}</td>
                <td className="p-3">{f.severity}</td>
                <td className="p-3">{f.areaHectares.toFixed(1)}</td>
                <td className="p-3">{Math.round(f.confidence * 100)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 space-y-2 text-xs text-white/60">
        {data.findings.map((f) => (
          <p key={f.id}>
            • <span className="font-bold text-white/80">{f.id}</span> —{" "}
            {f.description}
          </p>
        ))}
      </div>
    </div>
  );
}
