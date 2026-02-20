'use client';

import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export type DonutItem = {
  label: string;
  value: number;
  color: string;
};

type GeoDonutProps = {
  title: string;
  data: DonutItem[];
};

export default function GeoDonut({ title, data }: GeoDonutProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="p-6 bg-white rounded-md">
      {/* Title */}
      <div className="text-sm font-normal text-black mb-6">{title}</div>

      <div className="flex items-center px-[20px] py-[53px]">
        {/* Donut */}
        <div className="w-[120px] h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={37}
                outerRadius={60}
                paddingAngle={3}
                stroke="none"
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {data.map((item, index) => (
                  <Cell
                    key={index}
                    fill={item.color}
                    opacity={
                      activeIndex === null || activeIndex === index ? 1 : 0.4
                    }
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Flexible space */}
        <div className="flex-1" />

        {/* Legend */}
        <div className="flex flex-col justify-center gap-4 w-[142px]">
          {data.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={item.label}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-[6px] h-[6px] rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span
                    className={`text-xs text-black p-1 rounded rounded transition-colors ${
                      isActive ? 'bg-[#E2E2E2]' : ''
                    }`}
                  >
                    {item.label}
                  </span>
                </div>

                <span
                  className={`text-xs text-black p-1 rounded transition-colors ${
                    isActive ? 'bg-[#E2E2E2]' : ''
                  }`}
                >
                  {item.value}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
