"use client";

import type { ScanResult } from "@/types/scan";
import { downloadFromUrl, downloadJson } from "@/lib/download/downloadFile";

export default function ScanResultViewer({
  scan,
}: {
  scan: ScanResult | null;
}) {
  if (!scan) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-xl">
        <p className="text-sm text-white/60">
          No scan selected. Run a scan from Map Analysis.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-xl space-y-5">
      {/* Title */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-widest text-white/40">
            Latest Output
          </p>
          <h2 className="mt-1 text-xl font-black text-white">
            {scan.regionName}
          </h2>
          <p className="text-xs text-white/50 mt-1">
            {scan.scanId} • {new Date(scan.createdAt).toLocaleString()}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => downloadJson(scan, `${scan.scanId}.json`)}
            className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs font-bold text-white/80 hover:bg-white/10 transition"
          >
            Download JSON
          </button>

          <button
            onClick={() =>
              downloadFromUrl(
                scan.images.changeMaskUrl,
                `${scan.scanId}-mask.png`,
              )
            }
            className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs font-bold text-white/80 hover:bg-white/10 transition"
          >
            Download Mask
          </button>

          <button
            onClick={() =>
              downloadFromUrl(
                scan.images.ndviHeatmapUrl,
                `${scan.scanId}-ndvi.png`,
              )
            }
            className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs font-bold text-white/80 hover:bg-white/10 transition"
          >
            Download NDVI
          </button>
        </div>
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl overflow-hidden border border-white/10 bg-black/30">
          <div className="p-3 text-xs text-white/50">Before</div>
          <img
            src={scan.images.beforeImageUrl}
            alt="Before"
            className="h-[220px] w-full object-cover"
          />
        </div>

        <div className="rounded-xl overflow-hidden border border-white/10 bg-black/30">
          <div className="p-3 text-xs text-white/50">After</div>
          <img
            src={scan.images.afterImageUrl}
            alt="After"
            className="h-[220px] w-full object-cover"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs text-white/40 uppercase">NDVI Mean</p>
          <p className="text-2xl font-black text-white mt-1">
            {scan.ndvi.mean.toFixed(2)}
          </p>
          <p className="text-xs text-white/50 mt-1">{scan.ndvi.healthStatus}</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs text-white/40 uppercase">Forest → Urban</p>
          <p className="text-2xl font-black text-white mt-1">
            {scan.transitions.forestToUrbanPercent.toFixed(1)}%
          </p>
          <p className="text-xs text-white/50 mt-1">Encroachment indicator</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs text-white/40 uppercase">Water → Land</p>
          <p className="text-2xl font-black text-white mt-1">
            {scan.transitions.waterToLandPercent.toFixed(1)}%
          </p>
          <p className="text-xs text-white/50 mt-1">Drying / reclamation</p>
        </div>
      </div>

      {/* Message */}
      {scan.message && (
        <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-white/70">
          {scan.message}
        </div>
      )}
    </div>
  );
}
