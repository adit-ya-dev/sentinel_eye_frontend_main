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
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl h-full">
      <div className="flex items-center justify-between mb-8">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
          NDVI Trend
        </p>
        <span className="text-[10px] py-1 px-2 rounded-md bg-white/5 border border-white/10 text-white/40 uppercase">
          6 Month Analysis
        </span>
      </div>

      <div className="h-[240px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.06)"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 10 }}
              dy={10}
            />

            {/* ✅ Y AXIS FIXED */}
            <YAxis
              domain={[0, 1]}
              axisLine={false}
              tickLine={false}
              width={40}
              tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 10 }}
              tickFormatter={(value) => value.toFixed(1)}
            />

            <Tooltip
              contentStyle={{
                background: "rgba(15, 23, 42, 0.9)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              labelStyle={{ color: "rgba(255,255,255,0.6)" }}
              itemStyle={{ color: "#10b981" }}
              formatter={(value: number) => [value.toFixed(2), "NDVI"]}
            />

            <Line
              type="monotone"
              dataKey="ndvi"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ r: 4, fill: "#10b981", strokeWidth: 0 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
