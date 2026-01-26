"use client";

import { useState } from "react";
import AnalysisHeader from "./components/AnalysisHeader";
import MapAOISelector from "./components/MapAOISelector";
import VisualResultsCard from "./components/VisualAnalysisHub";
import DateRangePicker from "./components/DateRangePicker";
import AnalyzeButton from "./components/AnalyzeButton";
import AnalysisStatsPanel from "./components/AnalysisStatsPanel";
import ScanProgressLog from "./components/ScanProgressLog";
import type { BoundingBox } from "@/types/geo";
import { useAnalyzeRegion } from "@/hooks/useAnalyzeRegion";
import { daysAgoISO, todayISO } from "@/lib/utils/time";

export default function MapAnalysisPage() {
  const [bbox, setBbox] = useState<BoundingBox | null>(null);
  const [startDate, setStartDate] = useState(() => daysAgoISO(365));
  const [endDate, setEndDate] = useState(() => todayISO());
  const { run, loading, result, error } = useAnalyzeRegion();

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      {/* THE HEADER:
         - z-[150] ensures it is higher than everything else.
         - Solid bg-[#020817] prevents the "ghosting" overlap seen in your image.
         - No border-b to remove that line you disliked.
      */}
      <header className="sticky top-0 z-[150] w-full bg-[#020817] py-6 shadow-2xl">
        <div className="container mx-auto px-6">
          <AnalysisHeader />
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Removed the big global card wrapper. Components are now independent blocks. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: PRIMARY WORKSPACE */}
          <div className="lg:col-span-8 space-y-8">
            {/* Map Block */}
            <div className="rounded-2xl border border-white/10 shadow-xl overflow-hidden h-[550px]">
              <MapAOISelector onBboxChange={setBbox} result={result} />
            </div>

            {/* Action/Command Block */}
            <div className="flex flex-col md:flex-row gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 items-center">
              <div className="flex-1 w-full">
                <DateRangePicker
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(s, e) => {
                    setStartDate(s);
                    setEndDate(e);
                  }}
                />
              </div>
              <div className="md:w-56 w-full">
                <AnalyzeButton
                  loading={loading}
                  disabled={!bbox || loading}
                  onClick={() =>
                    run({
                      bbox: bbox!,
                      startDate,
                      endDate,
                      regionName: "Selected AOI",
                    })
                  }
                />
              </div>
            </div>

            {/* Visual Hub - Only appears when result exists */}
            {result && <VisualResultsCard result={result} />}
          </div>

          {/* RIGHT COLUMN: SIDEBAR */}
          <aside className="lg:col-span-4 space-y-6">
            <AnalysisStatsPanel bbox={bbox} result={result} error={error} />
            <ScanProgressLog loading={loading} result={result} />
          </aside>
        </div>
      </main>
    </div>
  );
}
