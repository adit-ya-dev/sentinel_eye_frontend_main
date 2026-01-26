import type { ScanResultResponse } from "@/types/scanResult";

export default function ScanDownloadPanel({
  data,
}: {
  data: ScanResultResponse;
}) {
  return (
    <div className="glass-card rounded-2xl p-5 shadow-xl">
      <p className="text-xs uppercase tracking-widest text-white/40">Export</p>

      <div className="mt-4 space-y-3">
        <button className="w-full rounded-xl bg-white/10 px-4 py-3 text-sm font-bold text-white/80 hover:bg-white/15 transition">
          Download JSON Report
        </button>

        <button className="w-full rounded-xl bg-white/10 px-4 py-3 text-sm font-bold text-white/80 hover:bg-white/15 transition">
          Download Overlay Images
        </button>

        <button className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-black text-white hover:bg-blue-500 transition">
          Generate PDF (Later)
        </button>
      </div>

      <p className="mt-4 text-xs text-white/50">
        PDF export will be enabled when AWS inference is connected.
      </p>
    </div>
  );
}
