"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", ndvi: 0.62 },
  { month: "Feb", ndvi: 0.58 },
  { month: "Mar", ndvi: 0.52 },
  { month: "Apr", ndvi: 0.44 },
  { month: "May", ndvi: 0.39 },
  { month: "Jun", ndvi: 0.32 },
];

export default function NDVITrendChart() {
  return (
    <div
      className="h-full rounded-2xl border border-border bg-card
                 p-4 sm:p-5 lg:p-6 shadow-sm"
    >
      {/* Header */}
      <div
        className="mb-5 sm:mb-6 lg:mb-8
                      flex flex-col sm:flex-row
                      gap-2 sm:items-center sm:justify-between"
      >
        <p
          className="text-[9px] sm:text-[10px]
                      font-black uppercase tracking-[0.2em]
                      text-muted-foreground"
        >
          NDVI Trend
        </p>

        <span
          className="w-fit text-[9px] sm:text-[10px]
                     py-1 px-2 rounded-md
                     bg-muted border border-border
                     text-muted-foreground uppercase"
        >
          6 Month Analysis
        </span>
      </div>

      {/* Chart */}
      <div className="h-[200px] sm:h-[220px] lg:h-[240px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(var(--border))"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              dy={10}
              tick={{
                fill: "hsl(var(--muted-foreground))",
                fontSize: 10,
              }}
            />

            <YAxis
              domain={[0, 1]}
              axisLine={false}
              tickLine={false}
              width={32}
              tick={{
                fill: "hsl(var(--muted-foreground))",
                fontSize: 10,
              }}
              tickFormatter={(v) => v.toFixed(1)}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
                color: "hsl(var(--foreground))",
                borderRadius: "10px",
                fontSize: "12px",
              }}
              itemStyle={{ color: "#10b981" }}
              cursor={{ stroke: "hsl(var(--border))" }}
            />

            <Line
              type="monotone"
              dataKey="ndvi"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
