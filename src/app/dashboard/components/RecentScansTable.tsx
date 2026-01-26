"use client";

import { Badge } from "@/components/ui/badge";

const scans = [
  {
    id: "SCAN-1001",
    region: "New Delhi",
    status: "COMPLETED",
    severity: "CRITICAL",
    time: "2 min ago",
  },
  {
    id: "SCAN-1002",
    region: "Agra",
    status: "COMPLETED",
    severity: "WARNING",
    time: "18 min ago",
  },
  {
    id: "SCAN-1003",
    region: "Noida",
    status: "PROCESSING",
    severity: "—",
    time: "Just now",
  },
];

export default function RecentScansTable() {
  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case "CRITICAL":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "WARNING":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "MODERATE":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-white/5 text-white/40 border-white/10";
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
      {/* Table Header Section */}
      <div className="p-6 border-b border-white/10">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
          Recent Scans
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-[10px] font-bold uppercase tracking-widest text-white/30">
            <tr>
              <th className="px-6 py-4 text-left">Scan ID</th>
              <th className="px-6 py-4 text-left">Region</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Severity</th>
              <th className="px-6 py-4 text-left">Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {scans.map((s) => (
              <tr
                key={s.id}
                className="transition-colors duration-200" // Hover removed as per your general request for these cards
              >
                <td className="px-6 py-4 font-mono text-xs font-bold text-primary italic">
                  {s.id}
                </td>
                <td className="px-6 py-4 text-white/80 font-medium">
                  {s.region}
                </td>
                <td className="px-6 py-4">
                  <Badge
                    variant="outline"
                    className="bg-white/5 border-white/10 text-white/50 text-[10px] font-medium"
                  >
                    {s.status}
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2.5 py-1 rounded-md text-[10px] font-black border ${getSeverityStyles(s.severity)}`}
                  >
                    {s.severity}
                  </span>
                </td>
                <td className="px-6 py-4 text-[11px] text-white/30 font-medium whitespace-nowrap">
                  {s.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
