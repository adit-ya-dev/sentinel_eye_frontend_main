"use client";

export default function DateRangePicker({
  startDate,
  endDate,
  onChange,
}: {
  startDate: string;
  endDate: string;
  onChange: (start: string, end: string) => void;
}) {
  // Quick preset buttons
  const presets = [
    { label: "7 Days", days: 7 },
    { label: "30 Days", days: 30 },
    { label: "90 Days", days: 90 },
    { label: "1 Year", days: 365 },
  ];

  const applyPreset = (days: number) => {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - days);

    onChange(start.toISOString().slice(0, 10), end.toISOString().slice(0, 10));
  };

  return (
    <div className="rounded-2xl border border-black bg-black p-5 shadow-xl">
      <p className="text-xs uppercase tracking-widest text-white/40">
        Date Range
      </p>

      {/* Quick Presets */}
      <div className="mt-3 flex gap-2 flex-wrap">
        {presets.map((preset) => (
          <button
            key={preset.label}
            onClick={() => applyPreset(preset.days)}
            className="px-3 py-1 text-xs rounded-lg bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
          >
            {preset.label}
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-white/60 flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Start Date
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => onChange(e.target.value, endDate)}
            className="mt-1 w-full rounded-lg border border-gray-700 bg-black px-3 py-2 text-sm text-white outline-none focus:border-blue-500 focus:bg-gray-900 transition-all"
            max={endDate}
          />
        </div>

        <div>
          <label className="text-xs text-white/60 flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            End Date
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => onChange(startDate, e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-700 bg-black px-3 py-2 text-sm text-white outline-none focus:border-blue-500 focus:bg-gray-900 transition-all"
            min={startDate}
          />
        </div>
      </div>

      {/* Date Range Info */}
      {startDate && endDate && (
        <div className="mt-3 p-2 rounded-lg bg-gray-800 border border-gray-700">
          <p className="text-xs text-white/60">
            Range:{" "}
            {Math.ceil(
              (new Date(endDate).getTime() - new Date(startDate).getTime()) /
                (1000 * 60 * 60 * 24),
            )}{" "}
            days
          </p>
        </div>
      )}
    </div>
  );
}
