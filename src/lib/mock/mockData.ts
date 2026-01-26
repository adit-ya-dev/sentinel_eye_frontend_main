import type { Scan } from "@/types/scan";
import type { AlertItem } from "@/types/alert";
import type { DashboardStats } from "@/types/analysis";

export const mockDashboardStats: DashboardStats = {
  meanNdvi: 0.42,
  forestLossPercent: 24,
  urbanGainPercent: 13,
  scansToday: 8,
  totalScans: 156,
  activeAlerts: 12,
  criticalAlerts: 3,
};

export const mockRecentScans: Scan[] = [
  {
    id: "SCAN-1001",
    regionName: "New Delhi",
    createdAt: new Date().toISOString(),
    status: "COMPLETED",
    severity: "CRITICAL",
    forestLossPercent: 24,
    urbanGainPercent: 13,
    meanNdvi: 0.32,
  },
  {
    id: "SCAN-1002",
    regionName: "Agra",
    createdAt: new Date().toISOString(),
    status: "COMPLETED",
    severity: "WARNING",
    forestLossPercent: 14,
    urbanGainPercent: 9,
    meanNdvi: 0.41,
  },
];

export const mockAlerts: AlertItem[] = [
  {
    id: "ALERT-01",
    type: "Illegal Encroachment",
    severity: "CRITICAL",
    message: "Forest → Urban conversion detected above threshold.",
    createdAt: new Date().toISOString(),
    scanId: "SCAN-1001",
  },
  {
    id: "ALERT-02",
    type: "NDVI Drop",
    severity: "WARNING",
    message: "NDVI dropped below 0.30 indicating vegetation stress.",
    createdAt: new Date().toISOString(),
    scanId: "SCAN-1002",
  },
];
