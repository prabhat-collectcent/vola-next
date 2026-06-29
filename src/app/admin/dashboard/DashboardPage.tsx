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
import { getMonthlyStatsAction, getStatisticsOverviewAction, getTotalStatsAction } from '@/actions/campaign.actions';
import { useToast } from '@/components/toast/ToastProvider';
import Select from '@/components/form/fields/Select';
import { start } from 'repl';

export default function DashboardPage() {

  const [loading, setLoading] = useState(true);
  const [monthlyStatsLoading, setMonthyStatsLoading] = useState(false);
  const [statsOverviewLoading, setStatsOverviewLoading] = useState(false);
  const { showToast } = useToast();

  const today = new Date().toISOString().split('T')[0];
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [range, setRange] = useState('Custom');

  const [stats, setStats] = useState([
    { label: 'Impressions', value: '0', change: '+11.01%', trend: 'up' },
    { label: 'Clicks', value: '0', change: '+0.03%', trend: 'down' },
    { label: 'Conversions', value: '0', change: '+15.03%', trend: 'up' },
    { label: 'Spends', value: '0', change: '+6.08%', trend: 'up' },
    { label: 'CTR', value: '0', change: '+6.08%', trend: 'up' },
  ])

  const COLORS = [
    '#FDBA74',
    '#4F7CD1',
    '#6EE7B7',
    '#A5B4FC',
    '#FCA5A5',
    '#C4B5FD',
    '#67E8F9',
  ];


  const [geoData, setGeoData] = useState([
    // { label: 'United States', value: 0, color: '#FDBA74' },
    // { label: 'Canada', value: 0, color: '#4F7CD1' },
    // { label: 'Mexico', value: 0, color: '#6EE7B7' },
    // { label: 'Other', value: 0, color: '#A5B4FC' },
  ])

  const [inventoryData, setInvetoryData] = useState([
    // { label: 'In app', value: 0, color: '#FDBA74' },
    // { label: 'Direct app', value: 0, color: '#4F7CD1' },
    // { label: 'OEM', value: 0, color: '#6EE7B7' },
  ])

  const [barData, setBarData] = useState([
    // { label: 'Linux', value: 1000 },
    // { label: 'Mac', value: 0 },
    // { label: 'iOS', value: 0 },
    // { label: 'Windows', value: 0 },
    // { label: 'Android', value: 0 },
    // { label: 'Other', value: 0 },
  ]);

  const [monthlyTrafficStats, setMonthlyTrafficStats] = useState<LineStatsItem[]>([]);
  const [monthlyConverionStats, setMonthlyConversionStats] = useState<LineStatsItem[]>([]);

  useEffect(() => {
    async function fetchStats() {
      setLoading(true);
      try {
        const result: any = await getTotalStatsAction({ start_date: startDate, end_date: endDate });
        console.log("total stats", result);
        if (result.success) {
          const updatedStats = stats.map((item) => {
            const key = item.label.toLowerCase();
            let value = result.data[key] !== undefined ? result.data[key]['value'] : item.value;
            console.log(`key: ${key}, value: ${value}`);
            if (key == 'spends') value = result.data['total_spend']['value'];
            if (key === 'ctr') value = Number(value).toFixed(2);
            return {
              ...item,
              value: value,
              change: result.data[key] !== undefined ? result.data[key]['change'] : (key === 'spends' ? result.data['total_spend']['change'] : item.change),
              trend: result.data[key] !== undefined ? result.data[key]['change_type'] : (key === 'spends' ? result.data['total_spend']['change_type'] : item.trend),
            };
          });
          setStats(updatedStats);
        } else {

          showToast(result.message || 'Failed to fetch stats', 'error');
        }
      } catch (error) {
        showToast('Failed to fetch stats', 'error');

      } finally {
        setLoading(false);
      }
    }

    fetchStats();

  }, [startDate, endDate]);

  useEffect(() => {
    async function fetchMonthlyStats() {
      setMonthyStatsLoading(true);
      try {
        const result: any = await getMonthlyStatsAction();
        console.log("monthly stats", result.data);
        if (result.success) {

          const updatedMonthlyStats = result.data.map((item: any) => {
            return {
              label: item.month,
              value1: item.total_impressions,
              value2: item.total_clicks
            };
          });
          setMonthlyTrafficStats(updatedMonthlyStats);

          const updateMonthlyConvStats = result.data.map((item: any) => {
            return {
              label: item.month,
              value1: item.total_spends,
              value2: item.total_conversions
            }
          })

          setMonthlyConversionStats(updateMonthlyConvStats);
        } else {
          showToast(result.message || 'Failed to fetch monthly stats', 'error');
        }
      } catch (error) {
        showToast('Failed to fetch monthly stats', 'error');

      } finally {
        setMonthyStatsLoading(false);
      }
    }

    fetchMonthlyStats();

  }, [])


  useEffect(() => {
    async function fetchStatsOverview() {
      setStatsOverviewLoading(true);
      try {
        const result: any = await getStatisticsOverviewAction({ start_date: startDate, end_date: endDate });
        console.log("stats overview", result.data);
        if (result.success) {

          setBarData(result.data.os_wise_statistics.map((os: any, index: number) => {
            return {
              label: os.os_type,
              value: os.clicks,
              color: COLORS[index % COLORS.length],

            }
          }))

          setGeoData(result.data.geo_wise_statistics.map((geo: any) => {
            return {
              label: geo.country_code,
              value: geo.percentage,
            }

          }))

          setInvetoryData(result.data.inventory_wise_statistics.map((inventory: any, index: number) => {
            return {
              label: inventory.inventory_type,
              value: inventory.percentage,
              color: COLORS[index % COLORS.length],

            }
          }))
        } else {
          showToast(result.message || 'Failed to fetch stats overview', 'error');
        }
      } catch (error) {
        setStatsOverviewLoading(false);
        showToast('Failed to fetch monthly stats', 'error');

      } finally {
        setStatsOverviewLoading(false);
      }
    }

    fetchStatsOverview();

  }, [startDate, endDate]);

  const handleRangeChange = (value: string) => {
    setRange(value);

    const today = new Date();

    const formatDate = (date: Date) => {
      return date.toISOString().split('T')[0];
    };

    if (value === 'Today') {
      const current = formatDate(today);

      setStartDate(current);
      setEndDate(current);
    }

    if (value === 'Last 7 Days') {
      const start = new Date();
      start.setDate(today.getDate() - 6);

      setStartDate(formatDate(start));
      setEndDate(formatDate(today));
    }

    if (value === 'Last 30 Days') {
      const start = new Date();
      start.setDate(today.getDate() - 29);

      setStartDate(formatDate(start));
      setEndDate(formatDate(today));
    }
  };


  return (
    <div className="w-full bg-stone-50">
      {/* ================= Dashboard Sub Header ================= */}
      <div className="h-14 px-3 bg-white border-b border-gray-200 flex items-center justify-between">
        <span className="text-xs text-black font-normal">Dashboard</span>

        <div className="flex items-center gap-2 border border-neutral-200 rounded-lg px-2 py-1 h-7">

          <select
            value={range}
            onChange={(e) => handleRangeChange(e.target.value)}
            className="text-xs bg-transparent outline-none"
          >
            <option>Custom</option>
            <option>Today</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
          </select>

          <span className="h-3 border-l border-black/40" />

          <input
            type="date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
            // defaultValue={startDate}
            className="text-xs outline-none bg-transparent"
          />

          <span className="text-xs">-</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
            // defaultValue={endDate}
            className="text-xs outline-none bg-transparent"
          />
        </div>
      </div>

      {/* ================= Stats Cards ================= */}
      <div className="p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-md animate-pulse flex flex-col gap-2"
            >
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-6 w-20 bg-gray-300 rounded" />
            </div>
          ))
          : stats.map((item) => (
            <div
              key={item.label}
              className="p-6 bg-white rounded-md flex flex-col gap-2"
            >
              <span className="text-sm font-light text-black">
                {item.label}
              </span>

              <div className="flex justify-between items-center">
                <span className="text-2xl font-medium text-black">
                  {item.value || 0}
                </span>

                <span
                  className={`flex items-center gap-1 text-xs font-normal ${(2) >= 1 ? 'text-green-500' : 'text-red-500'
                    }`}
                >
                  {item.change}
                  {2 >= 1 ? (
                    <TrendingUpIcon sx={{ fontSize: 14 }} />
                  ) : (
                    <TrendingDownIcon sx={{ fontSize: 14 }} />
                  )}
                </span>


              </div>
            </div>
          ))}
      </div>

      <div className="px-3 grid grid-cols-1 lg:grid-cols-3 gap-3">

        {statsOverviewLoading
          ? Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-md p-4 animate-pulse flex flex-col gap-4"
            >
              {/* Title */}
              <div className="h-4 w-40 bg-gray-200 rounded" />

              {/* Chart */}
              <div className="h-[300px] w-full bg-gray-100 rounded" />

              {/* Legend rows */}
              <div className="space-y-2">
                <div className="h-3 bg-gray-100 rounded w-full" />
                <div className="h-3 bg-gray-100 rounded w-5/6" />
                <div className="h-3 bg-gray-100 rounded w-4/6" />
              </div>
            </div>
          ))
          : (
            <>
              <GeoDonut
                title="Geo Wise Statistics"
                data={geoData}
              />

              <BarChartSimple
                title="OS Wise Statistics"
                data={barData}
              />

              <GeoDonut
                title="Inventory Wise Statistics"
                data={inventoryData}
              />
            </>
          )}
      </div>



      {/* ================= Line Stats Section ================= */}
      <div className="px-3 mt-3 grid grid-cols-1 lg:grid-cols-2 gap-3">
        {monthlyStatsLoading
          ? Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-md p-4 animate-pulse flex flex-col gap-4"
            >
              {/* Title skeleton */}
              <div className="h-4 w-40 bg-gray-200 rounded" />

              {/* Chart area skeleton */}
              <div className="h-64 w-full bg-gray-100 rounded" />
            </div>
          ))
          : (
            <>
              <LineStatsChart
                title="Traffic statistics"
                legends={{
                  label1: 'Total Impressions',
                  label2: 'Total Clicks',
                }}
                data={monthlyTrafficStats}
              />

              <LineStatsChart
                title="Conversion statistics"
                legends={{
                  label1: 'Total Spends',
                  label2: 'Total Conversions',
                }}
                data={monthlyConverionStats}
              />
            </>
          )}
      </div>
    </div>
  );
}
