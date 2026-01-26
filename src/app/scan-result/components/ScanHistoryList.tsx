"use client";

import type { ScanResult } from "@/types/scan";

export default function ScanHistoryList({
  history,
  selectedScanId,
  onSelect,
  onClearAll,
}: {
  history: ScanResult[];
  selectedScanId: string | null;
  onSelect: (id: string) => void;
  onClearAll: () => void;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-xl">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-widest text-white/40">
            Scan History
          </p>
          <p className="mt-1 text-sm text-white/60">
            Click any scan to open its result
          </p>
        </div>

        <button
          onClick={onClearAll}
          className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-bold text-red-300 hover:bg-red-500/20 transition"
        >
          Clear All
        </button>
      </div>

      <div className="mt-4 space-y-2 max-h-[360px] overflow-y-auto pr-1">
        {history.length === 0 ? (
          <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-white/60">
            No scans found. Run a scan from Map Analysis first.
          </div>
        ) : (
          history.map((scan) => {
            const active = scan.scanId === selectedScanId;

            return (
              <button
                key={scan.scanId}
                onClick={() => onSelect(scan.scanId)}
                className={[
                  "w-full text-left rounded-xl border p-3 transition",
                  active
                    ? "border-blue-500/40 bg-blue-500/10"
                    : "border-white/10 bg-black/20 hover:bg-white/5",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-white">
                      {scan.regionName}
                    </p>
                    <p className="text-xs text-white/50">{scan.scanId}</p>
                  </div>

                  <span
                    className={[
                      "text-[11px] px-2 py-1 rounded-full font-bold",
                      scan.severity === "CRITICAL"
                        ? "bg-red-500/20 text-red-300 border border-red-500/30"
                        : scan.severity === "WARNING"
                          ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                          : "bg-green-500/20 text-green-300 border border-green-500/30",
                    ].join(" ")}
                  >
                    {scan.severity}
                  </span>
                </div>

                <p className="mt-2 text-xs text-white/50">
                  {new Date(scan.createdAt).toLocaleString()}
                </p>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}
