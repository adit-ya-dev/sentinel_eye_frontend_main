import type { ScanResult } from "@/types/scan";
import type { DataLogsFilters } from "@/types/dataLogs";
import { getScanHistory } from "@/lib/scans/scanStorage";

export function getFilteredLogs(filters: DataLogsFilters): ScanResult[] {
  const history = getScanHistory();

  let logs = [...history];

  // filter severity
  if (filters.severity !== "ALL") {
    logs = logs.filter((s) => s.severity === filters.severity);
  }

  // search query
  if (filters.query.trim().length > 0) {
    const q = filters.query.toLowerCase();
    logs = logs.filter(
      (s) =>
        s.scanId.toLowerCase().includes(q) ||
        s.regionName.toLowerCase().includes(q),
    );
  }

  // sort
  logs.sort((a, b) => {
    const t1 = new Date(a.createdAt).getTime();
    const t2 = new Date(b.createdAt).getTime();
    return filters.sort === "NEWEST" ? t2 - t1 : t1 - t2;
  });

  return logs;
}
