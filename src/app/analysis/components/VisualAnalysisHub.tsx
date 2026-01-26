"use client";

import { useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { Layers, Columns, Eye, Info } from "lucide-react";
import type { AnalyzeResponse } from "@/types/analysis";

type DisplayMode = "COMPARISON" | "OVERLAY";
type OverlayType = "CHANGE_MASK" | "NDVI" | "NONE";

export default function VisualResultsCard({
  result,
}: {
  result: AnalyzeResponse | null;
}) {
  const [displayMode, setDisplayMode] = useState<DisplayMode>("COMPARISON");
  const [overlayType, setOverlayType] = useState<OverlayType>("CHANGE_MASK");
  const [opacity, setOpacity] = useState(55);

  if (!result) return null;

  const beforeImage = result.images?.beforeImageUrl;
  const afterImage = result.images?.afterImageUrl;
  const overlayUrl =
    overlayType === "CHANGE_MASK"
      ? result.images?.changeMaskUrl
      : overlayType === "NDVI"
        ? result.images?.ndviHeatmapUrl
        : null;

  return (
    <div className="rounded-2xl border border-white/10 bg-[#071225] overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* TACTICAL HEADER */}
      <div className="flex flex-col md:flex-row items-center justify-between p-4 gap-4 border-b border-white/5 bg-white/5">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Eye className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white/90">
              Visual Analysis
            </h3>
            <p className="text-[10px] text-white/40 uppercase font-medium">
              Post-Processing Output
            </p>
          </div>
        </div>

        {/* MAIN TOGGLE: Comparison vs Overlay */}
        <div className="flex bg-black/40 p-1 rounded-xl border border-white/10">
          <button
            onClick={() => setDisplayMode("COMPARISON")}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-[10px] font-black tracking-widest transition-all ${
              displayMode === "COMPARISON"
                ? "bg-white text-black shadow-lg"
                : "text-white/40 hover:text-white"
            }`}
          >
            <Columns size={12} /> COMPARISON
          </button>
          <button
            onClick={() => setDisplayMode("OVERLAY")}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-[10px] font-black tracking-widest transition-all ${
              displayMode === "OVERLAY"
                ? "bg-white text-black shadow-lg"
                : "text-white/40 hover:text-white"
            }`}
          >
            <Layers size={12} /> OVERLAYS
          </button>
        </div>
      </div>

      <div className="p-5">
        {/* SUB-CONTROLS: Only show when in OVERLAY mode */}
        {displayMode === "OVERLAY" && (
          <div className="mb-4 space-y-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {(["CHANGE_MASK", "NDVI", "NONE"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setOverlayType(type)}
                    className={`px-3 py-1.5 rounded-md text-[10px] font-bold border transition-all ${
                      overlayType === type
                        ? "bg-blue-600/20 border-blue-500 text-blue-400"
                        : "bg-white/5 border-white/5 text-white/50 hover:bg-white/10"
                    }`}
                  >
                    {type.replace("_", " ")}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3 bg-black/20 px-3 py-1.5 rounded-lg border border-white/5">
                <span className="text-[10px] text-white/40 font-bold uppercase">
                  Opacity
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={opacity}
                  onChange={(e) => setOpacity(parseInt(e.target.value))}
                  className="w-24 accent-blue-500 h-1 rounded-full cursor-pointer"
                />
                <span className="text-[10px] font-mono text-white/80 w-8">
                  {opacity}%
                </span>
              </div>
            </div>
          </div>
        )}

        {/* VIEWPORT */}
        <div className="relative rounded-xl border border-white/10 bg-black/40 aspect-video overflow-hidden group">
          {displayMode === "COMPARISON" ? (
            <ReactCompareSlider
              className="h-full"
              itemOne={
                <ReactCompareSliderImage
                  src={beforeImage}
                  alt="Before"
                  className="object-cover"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={afterImage}
                  alt="After"
                  className="object-cover"
                />
              }
            />
          ) : (
            <div className="relative h-full w-full">
              <img
                src={afterImage}
                alt="Base"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {overlayUrl && overlayType !== "NONE" && (
                <img
                  src={overlayUrl}
                  alt="Overlay"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                  style={{
                    opacity: opacity / 100,
                    mixBlendMode:
                      overlayType === "CHANGE_MASK" ? "screen" : "normal",
                  }}
                />
              )}
            </div>
          )}

          {/* FLOATING DATA LABELS */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            <div className="px-3 py-1.5 rounded-md bg-black/80 backdrop-blur-md border border-white/10 flex items-center gap-2">
              <div
                className={`w-1.5 h-1.5 rounded-full ${displayMode === "COMPARISON" ? "bg-blue-400" : "bg-emerald-400"} animate-pulse`}
              />
              <span className="text-[9px] font-black tracking-widest text-white uppercase">
                {displayMode === "COMPARISON"
                  ? "Dual-Temporal Sync"
                  : `${overlayType} ACTIVE`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
