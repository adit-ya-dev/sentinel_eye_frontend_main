"use client";
import { AlertTriangle, TrendingDown, Activity } from "lucide-react";

export default function ThreatLevelCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl h-full">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-6">
        Threat Level
      </p>

      <div className="space-y-1">
        <h2 className="text-4xl font-black tracking-tighter text-red-500">
          CRITICAL
        </h2>
        <p className="text-xs text-white/50 leading-relaxed">
          Forest → Urban transition exceeded{" "}
          <span className="text-white font-bold">20%</span> threshold.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {[
          {
            label: "Forest Loss",
            val: "24%",
            icon: TrendingDown,
            color: "text-red-400",
          },
          {
            label: "NDVI Drop",
            val: "0.31",
            icon: Activity,
            color: "text-yellow-400",
          },
          {
            label: "Alert Confidence",
            val: "0.92",
            icon: AlertTriangle,
            color: "text-orange-400",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between border-b border-white/5 pb-2"
          >
            <div className="flex items-center gap-3">
              <item.icon className={`h-4 w-4 ${item.color}`} />
              <span className="text-xs font-medium text-white/60">
                {item.label}
              </span>
            </div>
            <span className="text-sm font-bold text-white">{item.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
