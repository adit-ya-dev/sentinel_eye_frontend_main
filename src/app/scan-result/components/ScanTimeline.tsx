"use client";

import { Fingerprint, CalendarDays, Zap } from "lucide-react";
import type { ScanResultResponse } from "@/types/scanResult";

export default function ScanTimeline({ data }: { data: ScanResultResponse }) {
  return (
    <div className="flex flex-col py-4">
      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">
        Temporal Metadata
      </p>

      <div className="mt-4 space-y-4">
        {/* Scan ID */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted border border-border shadow-sm">
            <Fingerprint className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
              Scan Identity
            </p>
            <p className="text-xs font-mono font-bold text-foreground">
              {data.scanId}
            </p>
          </div>
        </div>

        {/* Date Range Group */}
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted border border-border">
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                Baseline Date
              </p>
              <p className="text-xs font-semibold text-foreground">
                {data.timestamps.before}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted border border-border">
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                Analysis Date
              </p>
              <p className="text-xs font-semibold text-foreground">
                {data.timestamps.after}
              </p>
            </div>
          </div>
        </div>

        {/* Processing Timestamp */}
        <div className="flex items-center gap-3 border-t border-border pt-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <Zap className="h-4 w-4 text-emerald-500" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
              Processed At
            </p>
            <p className="text-xs font-semibold text-foreground">
              {new Date(data.timestamps.analyzedAt).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
