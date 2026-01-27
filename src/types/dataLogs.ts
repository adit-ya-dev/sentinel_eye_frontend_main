import type { ScanResult, ScanSeverity } from "@/types/scan";

export type DataLogsResponse = {
  total: number;
  logs: ScanResult[];
};

export type DataLogsFilters = {
  query: string;
  severity: "ALL" | ScanSeverity;
  sort: "NEWEST" | "OLDEST";
};
