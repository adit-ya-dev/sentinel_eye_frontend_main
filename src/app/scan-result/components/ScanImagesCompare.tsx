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
    <div className="rounded-2xl border border-border bg-card p-5 shadow-xl">
      <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
        Before vs After
      </p>

      <div className="mt-4 overflow-hidden rounded-xl border border-border bg-black shadow-inner">
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

      <div className="mt-3 grid grid-cols-2 gap-3 text-[10px] font-mono uppercase tracking-tight text-muted-foreground">
        <p>Before: {data.timestamps.before}</p>
        <p className="text-right">After: {data.timestamps.after}</p>
      </div>
    </div>
  );
}
