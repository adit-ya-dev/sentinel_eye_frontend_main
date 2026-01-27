"use client";

import ScanResultHeader from "./components/ScanResultHeader";
import ScanSummaryCards from "./components/ScanSummaryCards";
import ScanImagesCompare from "./components/ScanImagesCompare";
import ScanFindingsTable from "./components/ScanFindingsTable";
import ScanDownloadPanel from "./components/ScanDownloadPanel";
import ScanTimeline from "./components/ScanTimeline";
import { useScanResult } from "@/hooks/useScanResult";

export default function ScanResultPage() {
  const { loading, data, error, reload } = useScanResult();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 pb-12 space-y-8">
        <ScanResultHeader loading={loading} error={error} onReload={reload} />

        {data ? (
          <>
            <ScanSummaryCards data={data} />

            <div className="grid grid-cols-12 gap-8">
              {/* Main Content */}
              <div className="col-span-12 lg:col-span-8 space-y-8">
                <ScanImagesCompare data={data} />
                <ScanFindingsTable data={data} />
              </div>

              {/* Sidebar */}
              <div className="col-span-12 lg:col-span-4 space-y-8">
                <div className="sticky top-24 space-y-8">
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                    <ScanTimeline data={data} />
                  </div>
                  <ScanDownloadPanel data={data} />
                </div>
              </div>
            </div>
          </>
        ) : !loading ? (
          <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-border bg-muted/30 text-muted-foreground font-bold uppercase tracking-widest">
            No scan result found.
          </div>
        ) : (
          <div className="space-y-8 animate-pulse">
            <div className="h-12 w-1/3 bg-muted rounded-lg" />
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-24 bg-muted rounded-2xl" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
