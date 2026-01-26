"use client";

import { useEffect, useMemo, useState } from "react";
import type { ScanResult } from "@/types/scan";
import { clearScanHistory, getScanHistory } from "@/lib/scans/scanStorage";

export function useScanHistory() {
  const [history, setHistory] = useState<ScanResult[]>([]);
  const [selectedScanId, setSelectedScanId] = useState<string | null>(null);

  useEffect(() => {
    const scans = getScanHistory();
    setHistory(scans);

    // Default select latest scan
    if (scans.length > 0) setSelectedScanId(scans[0].scanId);
  }, []);

  const selectedScan = useMemo(() => {
    if (!selectedScanId) return null;
    return history.find((s) => s.scanId === selectedScanId) ?? null;
  }, [history, selectedScanId]);

  const refresh = () => {
    const scans = getScanHistory();
    setHistory(scans);
    if (scans.length > 0 && !selectedScanId) setSelectedScanId(scans[0].scanId);
  };

  const clearAll = () => {
    clearScanHistory();
    setHistory([]);
    setSelectedScanId(null);
  };

  return {
    history,
    selectedScan,
    selectedScanId,
    setSelectedScanId,
    refresh,
    clearAll,
  };
}
