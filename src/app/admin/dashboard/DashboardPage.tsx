'use client';
import React, { useEffect, useState } from 'react';
import GeoDonut, { DonutItem } from '@/components/admin/charts/GeoDonut';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import BarChartSimple, {
  BarItem,
} from '@/components/admin/charts/BarChartSimple';
import LineStatsChart, {
  LineStatsItem,
} from '@/components/admin/charts/LineStatsChart';
import { getTotalStatsAction } from '@/actions/campaign.actions';
import { useToast } from '@/components/toast/ToastProvider';

export default function DashboardPage() {

  const [loading, setLoading] = useState(true);
  const showToast = useToast();

  const [stats, setStats] = useState([
    { label: 'Impressions', value: '0', change: '+11.01%', trend: 'up' },
    { label: 'Clicks', value: '0', change: '-0.03%', trend: 'down' },
    { label: 'Conversions', value: '0', change: '+15.03%', trend: 'up' },
    { label: 'Spends', value: '0', change: '+6.08%', trend: 'up' },
    { label: 'CTR', value: '0', change: '+6.08%', trend: 'up' },
  ])

  useEffect(() => {
    async function fetchStats() {
      setLoading(true);
      try {
        const result: any = await getTotalStatsAction();
        if (result.success) {
          const updatedStats = stats.map((item) => {
            const key = item.label.toLowerCase();
            let value = result.data[key] !== undefined ? result.data[key] : item.value;
            if (key === 'ctr') value = Number(value).toFixed(2);
            return {
              ...item,
              value: value,
            };
          });
          setStats(updatedStats);
        }
      } catch (error) {
        showToast('Failed to fetch stats', 'error');

      } finally {
        setLoading(false);
      }
    }

    fetchStats();

  }, [])
  const GEO_DATA: DonutItem[] = [
    { label: 'United States', value: 52.1, color: '#FDBA74' },
    { label: 'Canada', value: 22.8, color: '#4F7CD1' },
    { label: 'Mexico', value: 13.9, color: '#6EE7B7' },
    { label: 'Other', value: 11.2, color: '#A5B4FC' },
  ];

  const INVENTORY_DATA: DonutItem[] = [
    { label: 'In app', value: 52.1, color: '#FDBA74' },
    { label: 'Direct app', value: 22.8, color: '#4F7CD1' },
    { label: 'OEM', value: 13.9, color: '#6EE7B7' },
  ];


  const BAR_DATA: BarItem[] = [
    { label: 'Linux', value: 17000 },
    { label: 'Mac', value: 30000 },
    { label: 'iOS', value: 22000 },
    { label: 'Windows', value: 32000 },
    { label: 'Android', value: 13000 },
    { label: 'Other', value: 26000 },
  ];

  const TRAFFIC_DATA: LineStatsItem[] = [
    { label: 'Jan', value1: 12000, value2: 5000 },
    { label: 'Feb', value1: 8000, value2: 13000 },
    { label: 'Mar', value1: 14000, value2: 20000 },
    { label: 'Apr', value1: 25000, value2: 7000 },
    { label: 'May', value1: 28000, value2: 15000 },
    { label: 'Jun', value1: 22000, value2: 25000 },
    { label: 'Jul', value1: 24000, value2: 31000 },
  ];

  return (
    <div className="w-full bg-stone-50">
      {/* ================= Dashboard Sub Header ================= */}
      <div className="h-14 px-3 bg-white border-b border-gray-200 flex items-center justify-between">
        <span className="text-xs text-black font-normal">Dashboard</span>

        <div className="flex items-center gap-2 border border-neutral-200 rounded-lg px-2 py-1 h-7">
          <select className="text-xs bg-transparent outline-none">
            <option>Custom</option>
            <option>Today</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
          </select>

          <span className="h-3 border-l border-black/40" />

          <input
            type="date"
            defaultValue="2026-01-01"
            className="text-xs outline-none bg-transparent"
          />
          <span className="text-xs">-</span>
          <input
            type="date"
            defaultValue="2026-01-28"
            className="text-xs outline-none bg-transparent"
          />
        </div>
      </div>

      {/* ================= Stats Cards ================= */}
      <div className="p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((item) => {
          // const isUp = item.trend === 'up';


          return (
            <div
              key={item.label}
              className="p-6 bg-white rounded-md flex flex-col gap-2"
            >
              <span className="text-sm font-light text-black">
                {item.label}
              </span>

              <div className="flex justify-between items-center">
                <span className="text-2xl font-medium text-black">

                  {
                    item.value
                  }
                </span>

                {/* <span className={`flex items-center gap-1 text-xs font-normal`}>
                  {item.change}
                  {isUp ? (
                    <TrendingUpIcon sx={{ fontSize: 14 }} />
                  ) : (
                    <TrendingDownIcon sx={{ fontSize: 14 }} />
                  )}
                </span> */}
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= Charts Section ================= */}
      <div className="px-3 grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Geo Wise */}
        <GeoDonut title="Geo Wise Statistics" data={GEO_DATA} />

        <BarChartSimple title="OS Wise Statistics" data={BAR_DATA} />

        {/* Inventory wise */}
        <GeoDonut title="Inventory Wise Statistics" data={INVENTORY_DATA} />
      </div>

      {/* ================= Line Stats Section ================= */}
      <div className="px-3 mt-3 grid grid-cols-1 lg:grid-cols-2 gap-3">
        <LineStatsChart
          title="Traffic statistics"
          legends={{
            label1: 'Total Clicks',
            label2: 'Total Impressions',
          }}
          data={TRAFFIC_DATA}
        />

        <LineStatsChart
          title="Conversion statistics"
          legends={{
            label1: 'Total Spends',
            label2: 'Total Conversions',
          }}
          data={TRAFFIC_DATA}
        />
      </div>
    </div>
  );
}
