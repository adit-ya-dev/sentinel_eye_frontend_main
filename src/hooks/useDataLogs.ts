"use client";

import { useEffect, useMemo, useState } from "react";
import type { DataLogsFilters } from "@/types/dataLogs";
import type { ScanResult } from "@/types/scan";
import { getFilteredLogs } from "@/lib/data-logs/dataLogsService";
import { clearScanHistory } from "@/lib/scans/scanStorage";

export function useDataLogs() {
  const [filters, setFilters] = useState<DataLogsFilters>({
    query: "",
    severity: "ALL",
    sort: "NEWEST",
  });

  const [logs, setLogs] = useState<ScanResult[]>([]);

  const refresh = () => {
    const data = getFilteredLogs(filters);
    setLogs(data);
  };

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.query, filters.severity, filters.sort]);

  const total = useMemo(() => logs.length, [logs]);

  const clearAll = () => {
    clearScanHistory();
    setLogs([]);
  };

  return {
    logs,
    total,
    filters,
    setFilters,
    refresh,
    clearAll,
  };
}
