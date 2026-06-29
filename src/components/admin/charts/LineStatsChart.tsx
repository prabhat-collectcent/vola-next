'use client';

import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

export type LineStatsItem = {
  label: string;
  value1: number;
  value2: number;
};

type LineStatsChartProps = {
  title: string;
  legends: {
    label1: string;
    label2: string;
  };
  data: LineStatsItem[];
};

export default function LineStatsChart({
  title,
  legends,
  data,
}: LineStatsChartProps) {
  return (
    <div className="p-6 bg-white rounded-md flex flex-col">
      {/* Title */}
      <div className="text-sm font-normal text-black mb-6">
        {title}
      </div>

      {/* Legends */}
      <div className="flex items-center gap-6 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
          <span className="text-sm text-black">
            {legends.label1}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
          <span className="text-sm text-black">
            {legends.label2}
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 10,
            }}
          >
            <defs>
              <linearGradient
                id="orangeGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#F59E0B"
                  stopOpacity={0.15}
                />
                <stop
                  offset="100%"
                  stopColor="#F59E0B"
                  stopOpacity={0.02}
                />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: '#9CA3AF',
              }}
            />

            <YAxis
              width={40}
              axisLine={false}
              tickLine={false}
              ticks={[0, 10000, 20000, 30000]}
              tickFormatter={(v) =>
                v === 0 ? '0' : `${v / 1000}K`
              }
              tick={{
                fontSize: 12,
                fill: '#9CA3AF',
              }}
            />

            <Tooltip
              cursor={false}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-black text-white text-xs px-3 py-2 rounded-md shadow-md">
                      <div>
                        {legends.label1}: {payload[0]?.value}
                      </div>
                      <div>
                        {legends.label2}: {payload[1]?.value}
                      </div>
                    </div>
                  );
                }

                return null;
              }}
            />

            {/* Area under orange line */}
            <Area
              type="natural"
              dataKey="value1"
              stroke="none"
              fill="url(#orangeGradient)"
            />

            {/* Orange line */}
            <Line
              type="natural"
              dataKey="value1"
              stroke="#F59E0B"
              strokeWidth={1.5}
              dot={false}
              activeDot={{ r: 4 }}
              isAnimationActive={false}
            />

            {/* Blue dashed line */}
            <Line
              type="natural"
              dataKey="value2"
              stroke="#3B82F6"
              strokeWidth={1.5}
              strokeDasharray="4 6"
              dot={false}
              activeDot={{ r: 4 }}
              isAnimationActive={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}