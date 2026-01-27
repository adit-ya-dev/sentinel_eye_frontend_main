"use client";

import type { ScanResult } from "@/types/scan";
import { downloadJson } from "@/lib/download/downloadFile";

export default function DataLogsActions({
  logs,
  onClearAll,
}: {
  logs: ScanResult[];
  onClearAll: () => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <button
        onClick={() => downloadJson(logs, `sentinel-eye-data-logs.json`)}
        className="glass-card rounded-xl px-4 py-2 text-sm font-bold text-white/80 hover:text-white transition"
      >
        Export JSON
      </button>

      <button
        onClick={onClearAll}
        className="rounded-xl px-4 py-2 text-sm font-bold bg-red-500/15 text-red-200 border border-red-500/30 hover:bg-red-500/25 transition"
      >
        Clear Logs
      </button>
    </div>
  );
}
