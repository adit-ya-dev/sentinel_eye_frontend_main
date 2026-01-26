"use client";

export default function ScanResultHeader() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-xl">
      <p className="text-xs uppercase tracking-widest text-white/40">
        Scan Result
      </p>
      <h1 className="mt-2 text-2xl font-black tracking-wide text-white">
        SENTINEL EYE — Results & History
      </h1>
      <p className="mt-1 text-sm text-white/60">
        View latest scan output, compare imagery, and download reports.
      </p>
    </div>
  );
}
