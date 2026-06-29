'use client';

import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';

export type BarItem = {
  label: string;
  value: number;
};

type BarChartSimpleProps = {
  title: string;
  data: BarItem[];
};

export default function BarChartSimple({ title, data }: BarChartSimpleProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="p-6 bg-white rounded-md">
      {/* Title */}
      <div className="text-sm font-normal text-black mb-6">{title}</div>

      {/* Chart */}
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barCategoryGap={24}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <XAxis
              dataKey="label"
              interval={0}
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: '#6B7280',
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={[0, 10000, 20000, 30000]}
              tickFormatter={(v) => (v === 0 ? '0' : `${v / 1000}K`)}
              tick={{
                fontSize: 12,
                fill: '#9CA3AF',
              }}
            />

            <Bar
              dataKey="value"
              barSize={28}
              radius={[8, 8, 8, 8]}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              isAnimationActive={false}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={activeIndex === index ? '#4144E6' : '#E5E5E5'}
                />
              ))}

              {/* Show value only for active bar */}
              <LabelList
                content={(props: any) => {
                  const { x, y, width, value, index } = props;

                  if (
                    index !== activeIndex ||
                    x == null ||
                    y == null ||
                    width == null
                  )
                    return null;

                  const boxHeight = 24;
                  const offset = 8;

                  const rectY = Math.max(y - boxHeight - offset, 4);
                  const textY = rectY + boxHeight / 2;

                  return (
                    <g>
                      <rect
                        x={x + width / 2 - 26}
                        y={rectY}
                        width={52}
                        height={boxHeight}
                        rx={6}
                        fill="#000000"
                      />
                      <text
                        x={x + width / 2}
                        y={textY}
                        textAnchor="middle"
                        fill="#FFFFFF"
                        fontSize={12}
                        fontWeight={500}
                        dominantBaseline="middle"
                      >
                        {value}
                      </text>
                    </g>
                  );
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
