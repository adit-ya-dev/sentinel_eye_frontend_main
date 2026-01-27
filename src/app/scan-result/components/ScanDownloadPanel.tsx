import type { ScanResultResponse } from "@/types/scanResult";

export default function ScanDownloadPanel({
  data,
}: {
  data: ScanResultResponse;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-xl">
      <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
        Export
      </p>

      <div className="mt-4 space-y-3">
        <button className="w-full rounded-xl bg-secondary px-4 py-3 text-sm font-bold text-secondary-foreground hover:bg-secondary/80 transition border border-border/50">
          Download JSON Report
        </button>

        <button className="w-full rounded-xl bg-secondary px-4 py-3 text-sm font-bold text-secondary-foreground hover:bg-secondary/80 transition border border-border/50">
          Download Overlay Images
        </button>

        <button className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-black text-primary-foreground hover:opacity-90 transition">
          Generate PDF (Later)
        </button>
      </div>

      <p className="mt-4 text-[10px] text-muted-foreground italic">
        PDF export will be enabled when AWS inference is connected.
      </p>
    </div>
  );
}
