// components/admin/campaign/CampaignPage.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Table from '@/components/admin/datagrid/Table';
import PaginationComponent from '@/components/admin/datagrid/Pagination';
import Select from '@/components/form/fields/Select';
import SearchIcon from '@mui/icons-material/Search';
import Text from '@/components/admin/form/fields/Text';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';
import { getReportsAction, getSiteWiseDataAction } from '@/actions/campaign.actions';
import { getReportsParams, getSiteReportsParams } from '@/services/campaign.service';
import { start } from 'repl';
import { useToast } from '@/components/toast/ToastProvider';

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

export default function SiteWiseReportPage({ queryParams }: { queryParams: { value: any } }) {

    const parsedParams = JSON.parse(queryParams.value);


    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    const [sortKey, setSortKey] = useState<string>('name');
    const [order, setOrder] = useState<'asc' | 'desc' | ''>('asc');

    const [date, setDate] = useState('');
    const [search, setSearch] = useState('');
    const [campaign, setCampaign] = useState('');
    const { showToast } = useToast();


    console.log("report page rendered", date, search);
    const [showColumns, setShowColumns] = useState(false);

    const [visibleColumns, setVisibleColumns] = useState<string[]>([
        'app_name',
        'campaign',
        'goal',
        'daily_budget_target',
        'bid',
        // 'viewable_impressions',
        'clicks',
        'install',
        'ecpm',
        'cost',
        'status',
        'actions'
    ]);

    const [tempColumns, setTempColumns] = useState<string[]>(visibleColumns);

    const [data, setData] = useState<CampaignItem[]>([]);


    const today = new Date().toISOString().split('T')[0];
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(today);
    const [range, setRange] = useState('Custom');

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

        console.log("start date and end date", startDate, endDate);
    };




    useEffect(() => {
        async function fetchReports() {

            setLoading(true);
            try {
                let queryParams: getSiteReportsParams = { per_page: PAGE_SIZE, page_number: currentPage + 1, campaign_id: parsedParams.id };

                // @ts-ignore
                if (startDate) queryParams.start_date = startDate;
                if (endDate) queryParams.end_date = endDate;
                const today = new Date().toISOString().split('T')[0];

                const fetchedReports = await getSiteWiseDataAction(queryParams);
                if (fetchedReports.success) {
                    console.log('fetchedReports', fetchedReports);
                    // @ts-ignore
                    setData(Object.entries(fetchedReports.data).map(([key, current]: [string, any]) => ({
                        id: key,
                        'app_name': current.app_name,
                        'campaign': current.advertiser_campaign_name,
                        'goal': current.uid || 'NA',
                        'daily_budget_target': current.daily_budget,
                        'bid': current.cpa,
                        // 'viewable_impressions': current.viewable_impressions || 'NA',
                        'clicks': current.clickcount,
                        'install': current.conversion_count_unique,
                        'ecpm': current.ecpm || 'NA',
                        'cost': current.cost,
                        'status': current.status == '0' ? 'STOPPED' : 'ACTIVE',

                    })));
                } else {
                    showToast(fetchedReports.message || 'Failed to fetch report data', 'error');
                }


                // @ts-ignore
                // setPageCount(Math.ceil(fetchReports.pagination.total / PAGE_SIZE))

            } finally {
                setLoading(false);
            }

        }
        fetchReports();
    }, [currentPage, startDate, endDate]);




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
    }, [date]);


    const allColumns = [
        { key: 'app_name', label: 'App Name' },
        { key: 'campaign', label: 'Campaign', sortable: true, custom: true },
        { key: 'goal', label: 'Goal', sortable: true },
        { key: 'daily_budget_target', label: 'Daily Budget Target', sortable: true },
        { key: 'bid', label: 'Bid', sortable: true },
        // { key: 'viewable_impressions', label: 'Viewable Impr.' },
        { key: 'clicks', label: 'Clicks' },
        { key: 'install', label: 'Install' },
        // { key: 'bidding_strategy', label: 'Bidding Strategy' },
        { key: 'ecpm', label: 'eCPM' },
        { key: 'cost', label: 'Cost' },
        { key: 'status', label: 'Status', custom: true },
        // { key: 'actions', label: '', custom: true },
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
                <span className="text-[13px]">Site Wise Reports</span>

                {/* <button
                    onClick={() => router.push('/admin/campaign/create')}
                    className="flex items-center gap-2 bg-[#4F46E5] text-white px-4 py-2 rounded-full text-[13px] cursor-pointer hover:bg-[#3F3CCF]"
                >
                    <AddIcon sx={{ fontSize: 16 }} />
                    Create campaign
                </button> */}
            </div>

            {/* Filters */}
            <div className="p-4">
                <div className="bg-white rounded-xl p-4 flex flex-col gap-2">
                    {/* <div className="flex flex-wrap justify-center gap-4"> */}

                    {/* <div className="flex justify-center w-full md:w-auto">
                            <div className="w-[280px]">
                                <Select
                                    label="Date"
                                    name="date"
                                    value={date}
                                    placeholder="Select Date"
                                    // @ts-ignore
                                    onChange={setDate}
                                    options={[
                                        { label: 'Today', value: 'today' },
                                        { label: 'Yesterday', value: 'yesterday' },
                                    ]}
                                />
                            </div>
                        </div> */}

                    {/* <div className="w-full h-[37px] border border-[#00000026] rounded-[13px] px-[16px] py-[8px] flex items-center">
                            <SearchIcon sx={{ fontSize: 16 }} />
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search campaign"
                                className="ml-2 outline-none text-[12px] w-full"
                            />
                        </div> */}

                    {/* <div className="flex justify-center w-full md:w-auto">
                            <div className="w-[280px]">
                                <Select
                                    label="publisher"
                                    name="publisher"
                                    value={publisherId}
                                    placeholder="Select publisher"
                                    onChange={setPublisherId}
                                    options={[
                                        { label: 'publisher1', value: 'publisher1' },
                                        { label: 'publisher2', value: 'publisher2' },
                                    ]}
                                />
                            </div>
                        </div> */}

                    {/* <div className="flex justify-center w-full md:w-auto"> */}
                    {/* <div className="w-[280px]"> */}

                    {/* <Text
                                    // label="Parent CCA"
                                    name="parent_cca"
                                    value={parentCCa}
                                    onChange={(e) => { setParentCca(e.target.value) }}
                                    placeholder="Enter Parent CCA"
                                // className="mb-[24px]"
                                /> */}

                    {/* <Select
                                    label="parent_cca"
                                    name="parent_cca"
                                    value={parentCCa}
                                    placeholder="Parent CCA"
                                    onChange={setParentCca}
                                    options={[
                                        { label: 'parent cca1', value: 'US' },
                                        { label: 'parent cca2', value: 'IN' },
                                    ]}
                                /> */}
                    {/* </div> */}
                    {/* </div> */}

                    {/* </div> */}

                    <div className="flex flex-wrap justify-center items-end gap-4">

                        {/* Publisher */}
                        {/* <div className="w-[280px]">
                            <Select
                                label="campaign"
                                name="campaign"
                                placeholder="Select campaign"
                                // @ts-ignore
                                options={data.map(item => ({ label: item.advertiser_campaign_name, value: item.campaign_id }))}
                            //     [
                            //     { label: 'campaign1', value: 'campaign1' },
                            //     { label: 'campaign2', value: 'campaign2' },
                            // ]
                            // }
                            />
                        </div> */}

                        {/* Date Range */}
                        <div className="h-[37px] border border-[#00000026] rounded-[13px] px-[14px] flex items-center gap-3 bg-white mb-[12px]">

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


                            <span className="h-4 border-l border-black/20" />

                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => {
                                    setStartDate(e.target.value);
                                }}
                                // defaultValue={startDate}
                                className="text-xs outline-none bg-transparent"
                            />


                            <span className="text-[12px] text-black/50">-</span>

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

                        {/* Search */}
                        {/* <div className="w-[280px] mb-[12px]">
                            <div className="h-[37px] border border-[#00000026] rounded-[13px] px-[16px] flex items-center bg-white">
                                <SearchIcon sx={{ fontSize: 16 }} />

                                <input
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search campaign"
                                    className="ml-2 outline-none text-[12px] w-full bg-transparent"
                                />
                            </div>
                        </div> */}

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
                                onRowClick={(row) => {
                                    console.log("clicked", row)
                                    //router.push(`/admin/report/site/test`); 
                                }}
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
