"use client";
import { AlertTriangle, TrendingDown, Droplets } from "lucide-react";

export default function AlertsPreview() {
  const alerts = [
    {
      type: "Illegal Encroachment",
      time: "5 min ago",
      level: "CRITICAL",
      icon: AlertTriangle,
      color: "text-red-400",
    },
    {
      type: "NDVI Drop Detected",
      time: "18 min ago",
      level: "WARNING",
      icon: TrendingDown,
      color: "text-yellow-400",
    },
    {
      type: "Waterbody Shrink",
      time: "1 hour ago",
      level: "MODERATE",
      icon: Droplets,
      color: "text-blue-400",
    },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl h-full">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-6">
        Alerts Preview
      </p>
      <div className="space-y-3">
        {alerts.map((a, i) => (
          <div
            key={i}
            className="group flex flex-col gap-2 rounded-xl border border-white/5 bg-white/5 p-4 transition-all hover:bg-white/10 hover:border-white/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a.icon className={`h-4 w-4 ${a.color}`} />
                <p className="text-xs font-bold text-white tracking-tight">
                  {a.type}
                </p>
              </div>
              <span
                className={`text-[9px] font-black px-2 py-0.5 rounded border ${
                  a.level === "CRITICAL"
                    ? "border-red-500/30 text-red-400 bg-red-500/10"
                    : a.level === "WARNING"
                      ? "border-yellow-500/30 text-yellow-400 bg-yellow-500/10"
                      : "border-blue-500/30 text-blue-400 bg-blue-500/10"
                }`}
              >
                {a.level}
              </span>
            </div>
            <p className="text-[10px] text-white/30 font-medium pl-7">
              {a.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
