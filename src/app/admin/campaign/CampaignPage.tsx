// components/admin/campaign/CampaignPage.tsx
'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Table from '@/components/admin/datagrid/Table';
import PaginationComponent from '@/components/admin/datagrid/Pagination';
import Select from '@/components/form/fields/Select';
import DateField from '@/components/form/fields/Date';

import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';
import { getCampaignAction } from '@/actions/campaign.actions';
import { getCampaignsParams } from '@/services/campaign.service';

interface CampaignItem {
  id: number;
  name: string;
  code: string;
  spend: number;
  impressions: number;
  clicks: number;
  ctr: string;
  conversions: number;
  bidding_strategy: string;
  campaign_type: 'DISPLAY' | 'PERFORMANCE';
  avg_cpc: number;
  bid_value: number;
  cr: string;
  ecpa: string;
  status: 'PAUSED' | 'ENABLED';
  checked: boolean;
}

const PAGE_SIZE = 10;

export default function CampaignPage() {

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const [sortKey, setSortKey] = useState<string>('name');
  const [order, setOrder] = useState<'asc' | 'desc' | ''>('asc');

  const [status, setStatus] = useState<'PAUSED' | 'ENABLED' | ''>('');
  const [os, setOs] = useState('');
  const [country, setCountry] = useState('');
  const [campaignType, setCampaignType] = useState<'DISPLAY' | 'PERFORMANCE' | ''>('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // console.log("campaign page rendered", search, currentPage)
  const [showColumns, setShowColumns] = useState(false);

  const [visibleColumns, setVisibleColumns] = useState<string[]>([
    'name',
    'spend',
    'impressions',
    'clicks',
    'ctr',
    'conversions',
    // 'cr',
    // 'ecpa',
    'type',
    'bidding_strategy',
    'bid_value',
    'avg_cpc',
    'status',
  ]);

  const [tempColumns, setTempColumns] = useState<string[]>(visibleColumns);

  const [data, setData] = useState<CampaignItem[]>([]);

  function useDebounce<T>(value: T, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
  }

  const debouncedSearch = useDebounce(search, 1000);


  useEffect(() => {
    async function fetchCampaigns() {

      setLoading(true);
      try {
        console.log('currentPage', currentPage);
        let queryParams: getCampaignsParams = { per_page: PAGE_SIZE, page_number: currentPage + 1 };
        if (status) queryParams.status = status;
        if (startDate) queryParams.start_date = startDate;
        if (endDate) queryParams.end_date = endDate;
        if (campaignType) queryParams.campaign_type = campaignType;
        if (debouncedSearch) queryParams.search = debouncedSearch;

        const fetchedCampaigns = await getCampaignAction(queryParams);
        console.log('fetchedCampaigns', fetchedCampaigns)
        // @ts-ignore
        setData(fetchedCampaigns.data.map((current) => ({
          id: current.id,
          name: current.name,
          spend: current.metrics?.cost_micros / 1e6 || 0,
          impressions: current.metrics?.impressions || 0,
          clicks: current.metrics?.clicks || 0,
          ctr: current.metrics?.ctr ? `${(current.metrics.ctr * 100).toFixed(2)}%` : '-',
          conversions: current.metrics?.conversions || 0,
          cr: current.metrics?.cr ? `${(current.metrics.cr * 100).toFixed(2)}%` : '-',
          ecpa: current.metrics?.ecpa ? `$${(current.metrics.ecpa / 1e6).toFixed(2)}` : '-',
          status: current.status,
          checked: false,
          bidding_strategy: current.bidding_strategy_type,
          type: current.campaign_type.toLowerCase(),
          avg_cpc: current.metrics?.average_cpc ? current.metrics.average_cpc / 1e6 : 0,
          bid_value: current.ad_group?.cpm_bid_micros ? current.ad_group?.cpm_bid_micros / 1e6 : 0,
        })));

        // @ts-ignore
        setPageCount(Math.ceil(fetchedCampaigns.pagination.total / PAGE_SIZE))

      } finally {
        setLoading(false);
      }

    }
    fetchCampaigns();
  }, [currentPage, startDate, campaignType, debouncedSearch, endDate, status]);




  const handleSortChange = (key: string, ord: 'asc' | 'desc' | '') => {
    setSortKey(key);
    setOrder(ord);
  };

  const toggleRow = (id: number) => {
    setData((prev) =>
      prev.map((x) => (x.id === id ? { ...x, checked: !x.checked } : x))
    );
  };

  const toggleAll = (checked: boolean) => {
    setData((prev) => prev.map((x) => ({ ...x, checked })));
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [debouncedSearch, status, campaignType, startDate, endDate]);


  const allColumns = [
    { key: 'name', label: 'Campaign Name', sortable: true, custom: true },
    { key: 'spend', label: 'Spend', sortable: true },
    { key: 'impressions', label: 'Impressions', sortable: true },
    { key: 'clicks', label: 'Clicks', sortable: true },
    { key: 'ctr', label: 'CTR' },
    { key: 'conversions', label: 'Conversions' },
    { key: 'type', label: 'Type' },
    // { key: 'bidding_strategy', label: 'Bidding Strategy' },
    { key: 'bid_value', label: 'Bid Value' },
    { key: 'avg_cpc', label: 'Avg CPC' },
    { key: 'status', label: 'Status', custom: true },
    { key: 'actions', label: '', custom: true },
  ];

  const columns = allColumns.filter((col) => visibleColumns.includes(col.key));

  const customRender = (row: CampaignItem, key: string) => {
    if (key === 'name') {
      return (
        <div className="flex flex-col">
          <span className="text-[12px]">{row.name}</span>
          <span className="text-[9px] text-[#8E8E93]">{row.code}</span>
        </div>
      );
    }

    if (key === 'spend') return `$${row.spend.toFixed(2)}`;

    if (key === 'status') {
      return (
        <span className="px-2 py-[2px] text-[9px] bg-[#E5E5EA] rounded">
          {row.status}
        </span>
      );
    }

    if (key === 'actions') {
      return <MoreHorizIcon sx={{ fontSize: 16 }} />;
    }

    return row[key as keyof CampaignItem];
  };

  const router = useRouter();

  return (
    <div className="flex flex-col bg-[#F8F8FA] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-[#E5E5EA]">
        <span className="text-[13px]">My Campaigns</span>

        <button
          onClick={() => router.push('/admin/campaign/create')}
          className="flex items-center gap-2 bg-[#4F46E5] text-white px-4 py-2 rounded-full text-[13px] cursor-pointer hover:bg-[#3F3CCF]"
        >
          <AddIcon sx={{ fontSize: 16 }} />
          Create campaign
        </button>
      </div>

      {/* Filters */}
      <div className="p-4">
        <div className="bg-white rounded-xl p-4 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Select
              label="Status"
              name="status"
              value={status}
              placeholder="No Status"
              // @ts-ignore
              onChange={setStatus}
              options={[
                { label: 'Enabled', value: 'ENABLED' },
                { label: 'Paused', value: 'PAUSED' },
              ]}
            />

            <Select
              label="OS"
              name="os"
              value={os}
              placeholder="No OS"
              onChange={setOs}
              options={[
                { label: 'iOS', value: 'iOS' },
                { label: 'Android', value: 'Android' },
              ]}
            />

            <Select
              label="Country"
              name="country"
              value={country}
              placeholder="No Country"
              onChange={setCountry}
              options={[
                { label: 'United States', value: 'US' },
                { label: 'India', value: 'IN' },
              ]}
            />

            <Select
              label="Campaign Type"
              name="campaignType"
              value={campaignType}
              placeholder="No Type"
              // @ts-ignore
              onChange={setCampaignType}
              options={[
                { label: 'Performance', value: 'PERFORMANCE' },
                { label: 'Branding', value: 'DISPLAY' },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="w-full h-[37px] border border-[#00000026] rounded-[13px] px-[16px] py-[8px] flex items-center">
              <SearchIcon sx={{ fontSize: 16 }} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search campaign"
                className="ml-2 outline-none text-[12px] w-full"
              />
            </div>

            <DateField
              name="startDate"
              value={startDate}
              onChange={setStartDate}
            />

            <DateField name="endDate" value={endDate} onChange={setEndDate} />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl mt-4 p-4">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => {
                setTempColumns(visibleColumns);
                setShowColumns(true);
              }}
              className="h-[37px] border border-[#00000026] rounded-[13px] px-[16px] py-[8px] text-[12px] flex items-center gap-2"
            >
              Columns
              <span className="bg-purple-50 text-indigo-600 px-2 rounded text-[11px]">
                {visibleColumns.length}
              </span>
            </button>
          </div>

          <div className="w-full overflow-x-auto">
            <div className="min-w-[900px]">
              <Table
                loading={loading}
                columns={columns}
                data={data}
                toggleRow={toggleRow}
                toggleAll={toggleAll}
                customRender={customRender}
                sortKey={sortKey}
                order={order}
                onSortChange={handleSortChange}
                onRowClick={(row) => { router.push(`/admin/campaign/edit/${row.id}`); }}
              />
            </div>
          </div>

          <PaginationComponent
            pageCount={pageCount}
            currentPage={currentPage}
            handlePageClick={(e) => setCurrentPage(e.selected)}
          />
        </div>
      </div>

      {/* Columns Modal */}
      {showColumns && (
        <div className="fixed inset-0 z-[9999]">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowColumns(false)}
          />

          <div className="relative z-10 flex justify-center items-center h-full">
            <div className="bg-white w-[320px] max-h-[80vh] rounded-lg p-4 flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-[14px] font-medium text-[#1E1E1E]">
                  Columns
                </span>
                <button onClick={() => setShowColumns(false)}>✕</button>
              </div>

              {/* Select All */}
              <label className="flex items-center gap-3 text-[12px] mb-3 font-medium text-[#4144E6]">
                <input
                  type="checkbox"
                  checked={
                    tempColumns.length ===
                    allColumns.filter((c) => c.key !== 'actions').length
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setTempColumns(
                        allColumns
                          .filter((c) => c.key !== 'actions')
                          .map((c) => c.key)
                      );
                    } else {
                      setTempColumns([]);
                    }
                  }}
                  className="accent-[#4144E6]"
                />
                Select All
              </label>

              {/* Columns List */}
              <div className="flex-1 overflow-y-auto space-y-3">
                {allColumns
                  .filter((c) => c.key !== 'actions')
                  .map((col) => (
                    <label
                      key={col.key}
                      className="flex items-center gap-3 text-[12px]"
                    >
                      <input
                        type="checkbox"
                        checked={tempColumns.includes(col.key)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setTempColumns([...tempColumns, col.key]);
                          } else {
                            setTempColumns(
                              tempColumns.filter((k) => k !== col.key)
                            );
                          }
                        }}
                        className="accent-[#4144E6]"
                      />
                      {col.label}
                    </label>
                  ))}
              </div>

              {/* Footer */}
              <div className="flex justify-end gap-4 mt-4">
                <button
                  onClick={() => setShowColumns(false)}
                  className="text-[#4144E6] text-[12px]"
                >
                  Cancel
                </button>

                <button
                  onClick={() => {
                    setVisibleColumns(tempColumns);
                    setShowColumns(false);
                  }}
                  className="bg-[#4144E6] text-white px-4 py-1 rounded-full text-[12px]"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
