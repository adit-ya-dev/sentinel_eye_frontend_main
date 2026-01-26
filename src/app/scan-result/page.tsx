"use client";

import { RefreshCw, AlertCircle } from "lucide-react";

interface ScanResultHeaderProps {
  loading: boolean;
  error: string | null;
  onReload: () => Promise<void>;
}

export default function ScanResultHeader({
  loading,
  error,
  onReload,
}: ScanResultHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Scan Results
        </h1>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-white/50 font-medium">
          <span>Sentinel Eye overview</span>
          <span className="text-white/20">•</span>
          <span>NDVI</span>
          <span className="text-white/20">•</span>
          <span>Encroachment</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Error Notification */}
        {error && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold">
            <AlertCircle size={14} />
            <span>SYNC ERROR</span>
          </div>
        )}

        {/* Reload Button */}
        <button
          onClick={() => onReload()}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all disabled:opacity-50"
        >
          <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
          <span className="text-xs font-bold uppercase tracking-widest">
            {loading ? "Syncing..." : "Reload"}
          </span>
        </button>
      </div>
    </div>
  );
}
