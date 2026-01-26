import type { ScanResultResponse } from "@/types/scanResult";

export default function ScanTimeline({ data }: { data: ScanResultResponse }) {
  return (
    <div className="glass-card rounded-2xl p-5 shadow-xl">
      <p className="text-xs uppercase tracking-widest text-white/40">
        Timeline
      </p>

      <div className="mt-4 space-y-3 text-sm text-white/70">
        <p>
          📍 Scan ID:{" "}
          <span className="text-white font-bold">{data.scanId}</span>
        </p>
        <p>
          🛰 Before Date:{" "}
          <span className="text-white/90">{data.timestamps.before}</span>
        </p>
        <p>
          🛰 After Date:{" "}
          <span className="text-white/90">{data.timestamps.after}</span>
        </p>
        <p>
          🧠 Analyzed At:{" "}
          <span className="text-white/90">
            {new Date(data.timestamps.analyzedAt).toLocaleString()}
          </span>
        </p>
      </div>
    </div>
  );
}
