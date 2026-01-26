// src/types/scan.ts  (or wherever you keep your shared types)

export type ScanSeverity = "LOW" | "MODERATE" | "WARNING" | "CRITICAL";
// Note: I kept all four levels from the second definition (more granular)

export type ScanStatus = "PROCESSING" | "COMPLETED" | "FAILED";

export type ScanHealthStatus =
  | "CRITICAL"
  | "POOR"
  | "MODERATE"
  | "GOOD"
  | "EXCELLENT";

export interface ScanImages {
  beforeImageUrl: string;
  afterImageUrl: string;
  changeMaskUrl: string;
  ndviHeatmapUrl: string;
}

export interface NDVIStats {
  mean: number;
  min: number;
  max: number;
  healthStatus: ScanHealthStatus;
}

export interface BoundingBox {
  minLat: number;
  minLon: number;
  maxLat: number;
  maxLon: number;
}

export interface DateRange {
  startDate: string; // ISO string e.g. "2025-03-15"
  endDate: string;
}

// ────────────────────────────────────────────────
// Main detailed scan result (usually shown after clicking a scan)
export interface ScanResult {
  scanId: string;
  createdAt: string; // ISO timestamp
  regionName: string;
  bbox: BoundingBox;
  dateRange: DateRange;
  severity: ScanSeverity;
  status: ScanStatus; // added — very useful in detailed view
  transitions: {
    forestToUrbanPercent: number;
    waterToLandPercent: number;
  };
  ndvi: NDVIStats;
  images: ScanImages;
  message?: string; // error/info message
  forestLossPercent?: number; // added for consistency with list view
  urbanGainPercent?: number; // added for consistency
  meanNdvi?: number; // redundant with ndvi.mean, but optional for convenience
}

// ────────────────────────────────────────────────
// Compact version used in list/dashboard view
export interface Scan {
  id: string; // = scanId
  regionName: string;
  createdAt: string;
  status: ScanStatus;
  severity: ScanSeverity;
  forestLossPercent?: number;
  urbanGainPercent?: number;
  meanNdvi?: number;
}
