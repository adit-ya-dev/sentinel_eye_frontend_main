"use client";

import type { ScanResult } from "@/types/scan";
import Link from "next/link";

export default function DataLogsTable({ logs }: { logs: ScanResult[] }) {
  return (
    <div className="glass-card rounded-2xl p-5 shadow-xl overflow-hidden">
      <p className="text-xs uppercase tracking-widest text-white/40">
        Records Table
      </p>

      <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-white/60">
            <tr>
              <th className="text-left p-3">Scan ID</th>
              <th className="text-left p-3">Region</th>
              <th className="text-left p-3">Severity</th>
              <th className="text-left p-3">Date</th>
              <th className="text-left p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {logs.length === 0 ? (
              <tr>
                <td className="p-4 text-white/60" colSpan={5}>
                  No scan logs found. Run a scan from Map Analysis first.
                </td>
              </tr>
            ) : (
              logs.map((s) => (
                <tr
                  key={s.scanId}
                  className="border-t border-white/10 text-white/80"
                >
                  <td className="p-3 font-semibold">{s.scanId}</td>
                  <td className="p-3">{s.regionName}</td>
                  <td className="p-3">
                    <span
                      className={[
                        "px-2 py-1 rounded-full text-xs font-bold border",
                        s.severity === "CRITICAL"
                          ? "bg-red-500/20 text-red-200 border-red-500/30"
                          : s.severity === "WARNING"
                            ? "bg-yellow-500/20 text-yellow-200 border-yellow-500/30"
                            : "bg-green-500/20 text-green-200 border-green-500/30",
                      ].join(" ")}
                    >
                      {s.severity}
                    </span>
                  </td>
                  <td className="p-3 text-white/60">
                    {new Date(s.createdAt).toLocaleString()}
                  </td>
                  <td className="p-3">
                    <Link
                      href="/scan-result"
                      className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs font-bold text-white/80 hover:bg-white/10 transition inline-block"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
