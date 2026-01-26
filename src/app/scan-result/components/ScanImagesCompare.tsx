"use client";

import type { ScanResultResponse } from "@/types/scanResult";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function ScanImagesCompare({
  data,
}: {
  data: ScanResultResponse;
}) {
  return (
    <div className="glass-card rounded-2xl p-5 shadow-xl">
      <p className="text-xs uppercase tracking-widest text-white/40">
        Before vs After
      </p>

      <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={data.images.beforeImageUrl}
              alt="Before"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={data.images.afterImageUrl}
              alt="After"
            />
          }
        />
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-white/60">
        <p>Before: {data.timestamps.before}</p>
        <p className="text-right">After: {data.timestamps.after}</p>
      </div>
    </div>
  );
}
