import { NextResponse } from "next/server";

export async function GET() {
  const mock: any = {
    scanId: "SCAN-9021",
    status: "COMPLETED",
    severity: "WARNING",

    timestamps: {
      before: "2023-01-12",
      after: "2025-01-18",
      analyzedAt: new Date().toISOString(),
    },

    images: {
      beforeImageUrl:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop",
      afterImageUrl:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1400&auto=format&fit=crop",
      changeMaskUrl:
        "https://images.unsplash.com/photo-1520975693411-b1f2f3e7d6b2?q=80&w=1400&auto=format&fit=crop",
      ndviHeatmapUrl:
        "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?q=80&w=1400&auto=format&fit=crop",
    },

    stats: {
      ndviMean: 0.41,
      forestLossPercent: 14.6,
      urbanGainPercent: 9.8,
      waterLossPercent: 2.3,
    },

    findings: [
      {
        id: "F-01",
        type: "URBAN_EXPANSION",
        severity: "WARNING",
        areaHectares: 18.4,
        confidence: 0.87,
        description: "New construction detected near forest boundary.",
      },
      {
        id: "F-02",
        type: "DEFORESTATION",
        severity: "MODERATE",
        areaHectares: 10.1,
        confidence: 0.79,
        description: "Vegetation decline suggests logging activity.",
      },
      {
        id: "F-03",
        type: "WATER_LOSS",
        severity: "LOW",
        areaHectares: 3.2,
        confidence: 0.72,
        description: "Minor reduction in water body surface area.",
      },
    ],
  };

  return NextResponse.json(mock);
}
