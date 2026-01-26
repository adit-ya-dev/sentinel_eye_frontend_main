"use client";

import { useDashboardStats } from "@/hooks/useDashboardStats";
import { formatNdvi, formatPercent } from "@/lib/utils/format";
import { Leaf, TrendingDown, Building2, Zap, Activity } from "lucide-react";

export default function StatsCards() {
  const { data, loading } = useDashboardStats();

  const stats = [
    {
      label: "Mean NDVI",
      value: data ? formatNdvi(data.meanNdvi) : "--",
      icon: Leaf,
      color: "text-emerald-400",
    },
    {
      label: "Forest Loss",
      value: data ? formatPercent(data.forestLossPercent) : "--",
      icon: TrendingDown,
      color: "text-rose-400",
    },
    {
      label: "Urban Gain",
      value: data ? formatPercent(data.urbanGainPercent) : "--",
      icon: Building2,
      color: "text-blue-400",
    },
    {
      label: "Scans Today",
      value: data ? String(data.scansToday) : "--",
      icon: Activity,
      color: "text-amber-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((s) => {
        const Icon = s.icon;

        return (
          <div
            key={s.label}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-2xl"
          >
            {/* Background Glow Ornament */}
            <div
              className={`absolute -right-2 -top-2 h-12 w-12 rounded-full blur-3xl opacity-20 ${s.color.replace("text", "bg")}`}
            />

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                  {s.label}
                </p>
                <div
                  className={`p-2 rounded-lg bg-white/5 border border-white/5 ${s.color}`}
                >
                  <Icon size={16} />
                </div>
              </div>

              <div className="flex items-baseline gap-2">
                <h3 className="text-3xl font-bold tracking-tight text-white">
                  {loading ? (
                    <div className="h-8 w-16 animate-pulse rounded-md bg-white/10" />
                  ) : (
                    s.value
                  )}
                </h3>
              </div>

              {/* Status Footer */}
              <div className="flex items-center gap-1.5 mt-1">
                <div
                  className={`h-1 w-1 rounded-full animate-pulse ${s.color.replace("text", "bg")}`}
                />
                <span className="text-[9px] font-medium text-white/30 uppercase tracking-wider">
                  Live Satellite Feed
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
