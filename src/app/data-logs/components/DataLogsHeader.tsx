export default function DataLogsHeader({ total }: { total: number }) {
  return (
    <div className="py-6">
      {/* Main Heading: Bold and White */}
      <h1 className="text-2xl font-black text-white tracking-tight">
        Data Logs
      </h1>

      {/* Subheading: Small, Gray, with Dot separators style */}
      <p className="mt-1 text-sm font-medium text-zinc-500">
        Scan History Records <span className="mx-1">•</span>
        Total scans saved: <span className="text-zinc-400">{total}</span>
      </p>
    </div>
  );
}
