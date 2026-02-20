'use client';

import React, { useMemo, useState } from 'react';
import Table from '@/components/admin/datagrid/Table';
import PaginationComponent from '@/components/admin/datagrid/Pagination';
import SearchIcon from '@mui/icons-material/Search';

interface TransactionItem {
  id: number;
  transactionId: string;
  date: string;
  type: string;
  amount: number;
  status: string;
  checked: boolean;
}

const PAGE_SIZE = 5;

export default function TransactionsPage() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [sortKey, setSortKey] = useState<string>('date');
  const [order, setOrder] = useState<'asc' | 'desc' | ''>('asc');

  const [data, setData] = useState<TransactionItem[]>(
    Array.from({ length: 12 }).map((_, i) => ({
      id: i + 1,
      transactionId: `5e00b36c-3ee7-${100 + i}`,
      date: 'Aug 10, 2022 15:22 PM',
      type: i % 2 === 0 ? 'Wire Transfer' : 'PayPal',
      amount: 38.64,
      status: 'Completed',
      checked: false,
    }))
  );

  const toggleRow = (id: number) => {
    setData((prev) =>
      prev.map((x) => (x.id === id ? { ...x, checked: !x.checked } : x))
    );
  };

  const toggleAll = (checked: boolean) => {
    setData((prev) => prev.map((x) => ({ ...x, checked })));
  };

  const filtered = useMemo(() => {
    let rows = [...data];

    if (search) {
      rows = rows.filter((x) =>
        x.transactionId.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortKey) {
      rows.sort((a: any, b: any) => {
        if (a[sortKey] < b[sortKey]) return order === 'asc' ? -1 : 1;
        if (a[sortKey] > b[sortKey]) return order === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return rows;
  }, [data, search, sortKey, order]);

  const pageCount = Math.ceil(filtered.length / PAGE_SIZE);

  const paginated = filtered.slice(
    currentPage * PAGE_SIZE,
    currentPage * PAGE_SIZE + PAGE_SIZE
  );

  const columns = [
    { key: 'transactionId', label: 'Transaction Id', sortable: true },
    { key: 'date', label: 'Date', sortable: true },
    { key: 'type', label: 'Transaction Type', sortable: true },
    { key: 'amount', label: 'Amount', sortable: true },
    { key: 'status', label: 'Status' },
  ];

  const customRender = (row: TransactionItem, key: string) => {
    if (key === 'amount') return `$${row.amount.toFixed(2)}`;

    if (key === 'status') {
      return (
        <span className="px-2 py-[2px] text-[9px] bg-[#E5E5EA] rounded">
          {row.status}
        </span>
      );
    }

    return row[key as keyof TransactionItem];
  };

  return (
    <div className="">
      <div className="bg-white rounded-xl p-4">
        {/* Search + Export Row */}
        <div className="px-6 py-4 flex justify-between items-center">
          {/* Search */}
          <div className="w-80 h-7 px-2 py-1 bg-black/5 rounded-lg flex items-center gap-2">
            <SearchIcon sx={{ fontSize: 14, color: 'rgba(0,0,0,0.3)' }} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by date or transaction id"
              className="bg-transparent outline-none text-xs placeholder:text-black/30 w-full"
            />
          </div>

          {/* Export */}
          <button className="h-7 px-3 rounded-md border border-gray-200 text-xs text-neutral-950">
            Export
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-black/10" />

        <div className="w-full overflow-x-auto">
          <Table
            columns={columns}
            data={paginated}
            toggleRow={toggleRow}
            toggleAll={toggleAll}
            customRender={customRender}
            sortKey={sortKey}
            order={order}
            onSortChange={(k, o) => {
              setSortKey(k);
              setOrder(o);
            }}
          />
        </div>

        <PaginationComponent
          pageCount={pageCount}
          currentPage={currentPage}
          handlePageClick={(e) => setCurrentPage(e.selected)}
        />
      </div>
    </div>
  );
}
