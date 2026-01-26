"use client";
import type { BoundingBox } from "@/types/geo";
import type { AnalyzeResponse } from "@/types/analysis";

export default function AnalysisStatsPanel({
  bbox,
  result,
  error,
}: {
  bbox: BoundingBox | null;
  result: AnalyzeResponse | null;
  error: string | null;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
          Analysis Stats
        </p>
        <div
          className={`h-2 w-2 rounded-full animate-pulse ${result?.status === "COMPLETED" ? "bg-emerald-400" : "bg-blue-400"}`}
        />
      </div>

      <div className="space-y-3">
        {[
          {
            label: "AOI Status",
            val: bbox ? "✓ Selected" : "✗ None",
            color: bbox ? "text-emerald-400" : "text-rose-400",
          },
          {
            label: "Status",
            val: result?.status ?? "IDLE",
            color: "text-white",
          },
          {
            label: "Severity",
            val: result?.severity ?? "--",
            color: result ? "text-orange-400" : "text-white/20",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5"
          >
            <span className="text-white/40 text-[11px] font-bold uppercase">
              {item.label}
            </span>
            <span className={`text-xs font-black tracking-tight ${item.color}`}>
              {item.val}
            </span>
          </div>
        ))}

        {result && (
          <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-3">
            <div className="flex justify-between">
              <span className="text-white/40 text-[11px] font-bold uppercase">
                Mean NDVI
              </span>
              <span className="text-emerald-400 font-black font-mono">
                {result.ndvi.mean.toFixed(3)}
              </span>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-white/30 border-t border-white/5 pt-2">
              <span>MIN: {result.ndvi.min.toFixed(2)}</span>
              <span>MAX: {result.ndvi.max.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>
      {/* Success/Error messages use the same styled alerts as the progress log below */}
    </div>
  );
}
