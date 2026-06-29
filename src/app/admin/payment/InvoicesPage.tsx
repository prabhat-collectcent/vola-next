'use client';

import React, { useMemo, useState } from 'react';
import Table from '@/components/admin/datagrid/Table';
import PaginationComponent from '@/components/admin/datagrid/Pagination';
import SearchIcon from '@mui/icons-material/Search';

interface InvoiceItem {
  id: number;
  date: string;
  invoiceId: string;
  amount: number;
  checked: boolean;
}

const PAGE_SIZE = 5;

export default function InvoicesPage() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [sortKey, setSortKey] = useState<string>('date');
  const [order, setOrder] = useState<'asc' | 'desc' | ''>('asc');

  const [data, setData] = useState<InvoiceItem[]>(
    Array.from({ length: 12 }).map((_, i) => ({
      id: i + 1,
      date: 'Dec, 2025',
      invoiceId: `IN22400${100 + i}`,
      amount: 38.64,
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
        x.invoiceId.toLowerCase().includes(search.toLowerCase())
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
    { key: 'date', label: 'Date', sortable: true },
    { key: 'invoiceId', label: 'Invoice Id', sortable: true },
    { key: 'amount', label: 'Amount', sortable: true },
  ];

  const customRender = (row: InvoiceItem, key: string) => {
    if (key === 'amount') return `$${row.amount.toFixed(2)}`;
    return row[key as keyof InvoiceItem];
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
              placeholder="Search by date or invoice id"
              className="bg-transparent outline-none text-xs placeholder:text-black/30 w-full"
            />
          </div>

          {/* Export */}
          <button className="h-7 px-3 rounded-md border border-gray-200 text-xs text-neutral-950">
            Export
          </button>
        </div>

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
