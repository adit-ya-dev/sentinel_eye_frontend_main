"use client";
import {
  Target,
  Satellite,
  Leaf,
  Search,
  FileText,
  Check,
  X,
  Loader2,
} from "lucide-react";

export default function ScanProgressLog({
  loading,
  result,
}: {
  loading: boolean;
  result: any;
}) {
  const steps = [
    { id: 1, label: "AOI VALIDATION", icon: Target },
    { id: 2, label: "SATELLITE ACQUISITION", icon: Satellite },
    { id: 3, label: "NDVI RADIOMETRY", icon: Leaf },
    { id: 4, label: "CHANGE DETECTION", icon: Search },
    { id: 5, label: "REPORT ENCRYPTION", icon: FileText },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
          System Diagnostics
        </p>
        <span className="text-[9px] font-mono text-primary/60">
          v4.0.2-SECURE
        </span>
      </div>

      <div className="space-y-4">
        {steps.map((step) => {
          const status = loading
            ? "processing"
            : result
              ? "completed"
              : "pending";
          return (
            <div key={step.id} className="flex items-center gap-4">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all ${
                  status === "completed"
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                    : status === "processing"
                      ? "bg-primary/10 border-primary/40 text-primary animate-pulse"
                      : "bg-white/5 border-white/5 text-white/20"
                }`}
              >
                {status === "processing" ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : (
                  <step.icon size={14} />
                )}
              </div>
              <div className="flex-1">
                <p
                  className={`text-[10px] font-black tracking-widest ${status === "pending" ? "text-white/20" : "text-white/80"}`}
                >
                  {step.label}
                </p>
                <div className="h-[2px] w-full bg-white/5 mt-1 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-1000 ${status === "completed" ? "w-full bg-emerald-500" : status === "processing" ? "w-1/2 bg-primary" : "w-0"}`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
