"use client";

import { Scan, Loader2, MapPin } from "lucide-react";

export default function AnalyzeButton({
  loading,
  disabled,
  onClick,
}: {
  loading: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <div className="w-full">
      <button
        onClick={onClick}
        disabled={loading || disabled}
        className={`w-full group relative flex items-center justify-center gap-3 px-6 py-4 rounded-xl border transition-all duration-200 text-xs font-bold tracking-widest uppercase ${
          loading || disabled
            ? "bg-transparent border-white/10 text-white/30 cursor-not-allowed"
            : "bg-white text-black border-white hover:bg-zinc-200 active:scale-[0.98]"
        }`}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Scanning Region...</span>
          </>
        ) : disabled ? (
          <>
            <MapPin className="w-4 h-4 opacity-40" />
            <span>Select Area</span>
          </>
        ) : (
          <>
            <Scan className="w-4 h-4" />
            <span>Run Analysis</span>
          </>
        )}
      </button>

      {/* Optional: Subtle help text below the button */}
      {!loading && disabled && (
        <p className="text-[10px] text-center mt-2 text-white/40 tracking-tight">
          Awaiting Area of Interest (AOI) selection
        </p>
      )}
    </div>
  );
}
