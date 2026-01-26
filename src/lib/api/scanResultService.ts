import type { ScanResultResponse } from "@/types/scanResult";

export async function fetchScanResult(): Promise<ScanResultResponse> {
  const res = await fetch("/api/scan-result", { method: "GET" });

  if (!res.ok) {
    throw new Error("Failed to fetch scan result");
  }

  return res.json();
}
