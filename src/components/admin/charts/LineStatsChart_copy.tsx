'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Area,
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
      <div className="text-sm font-normal text-black mb-6">{title}</div>

      {/* Legends */}
      <div className="flex items-center gap-6 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
          <span className="text-sm text-black">{legends.label1}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
          <span className="text-sm text-black">{legends.label2}</span>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
          >
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
            />

            <YAxis
              width={36}
              axisLine={false}
              tickLine={false}
              ticks={[0, 10000, 20000, 30000]}
              tickFormatter={(v) => (v === 0 ? '0' : `${v / 1000}K`)}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
            />

            <Tooltip
              cursor={{ stroke: '#E5E5E5', strokeWidth: 1 }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-black text-white text-xs px-3 py-2 rounded-md shadow-md">
                      <div>{payload[0].value}</div>
                      <div>{payload[1].value}</div>
                    </div>
                  );
                }
                return null;
              }}
            />

            <Area
              type="natural"
              dataKey="value1"
              stroke="none"
              fill="#E8A46A"
              fillOpacity={0.08}
            />

            <Area
              type="natural"
              dataKey="value2"
              stroke="none"
              fill="#4F7DF0"
              fillOpacity={0.05}
            />


            <Line
              type="natural"
              dataKey="value1"
              stroke="#F59E0B"
              strokeWidth={1}
              dot={false}
              activeDot={{ r: 5 }}
              isAnimationActive={false}
            />

            <Line
              type="natural"
              dataKey="value2"
              stroke="#3B82F6"
              strokeWidth={1}
              strokeDasharray="3 3"
              dot={false}
              activeDot={{ r: 5 }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
