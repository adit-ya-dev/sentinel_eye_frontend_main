"use client";

import { useEffect, useState } from "react";
import type { ScanResultResponse } from "@/types/scanResult";
import { fetchScanResult } from "@/lib/api/scanResultService";

export function useScanResult() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ScanResultResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetchScanResult();
      setData(res);
    } catch (e: any) {
      setError(e.message || "Error loading scan result");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return { loading, data, error, reload: load };
}
