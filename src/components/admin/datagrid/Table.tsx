'use client';
import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

interface TableProps {
  columns: any[];
  data: any[];
  toggleRow: (id: number) => void;
  toggleAll: (checked: boolean) => void;
  customRender?: (row: any, key: string) => React.ReactNode;
  emptyText?: string;
  sortKey?: string;
  order?: 'asc' | 'desc' | '';
  onSortChange?: (sort: string, order: 'asc' | 'desc' | '') => void;
  onRowClick?: (row: any) => void;
}

export default function Table({
  columns,
  data,
  toggleRow,
  toggleAll,
  customRender,
  emptyText,
  sortKey,
  order,
  onSortChange,
  onRowClick,
}: TableProps) {
  const handleSort = (key: string) => {
    if (!onSortChange) return;

    if (sortKey !== key) {
      onSortChange(key, 'asc');
    } else {
      onSortChange(key, order === 'asc' ? 'desc' : 'asc');
    }
  };

  return (
    <table className="w-full text-left border-collapse min-w-[800px]">
      <thead>
        <tr className="border-b border-[#E5E5EA] text-[11px] text-[#242424]">
          <th className="py-[12px] px-[16px]">
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                checked={data.length > 0 && data.every((x) => x.checked)}
                onChange={(e) => toggleAll(e.target.checked)}
                onClick={(e) => e.stopPropagation()} 
                disabled={data.length === 0}
              />
              {data.length > 0 && data.every((x) => x.checked) && (
                <CheckIcon sx={{ fontSize: 10, color: '#fff' }} />
              )}
            </label>
          </th>

          {columns.map((c) => (
            <th
              key={c.key}
              className={`py-[12px] px-[16px] font-medium ${c.sortable ? 'cursor-pointer select-none' : ''
                }`}
              onClick={() => c.sortable && handleSort(c.key)}
            >
              <div className="flex items-center gap-1">
                {c.label}

                {c.sortable && sortKey === c.key && (
                  <>
                    {order === 'asc' && (
                      <ArrowUpwardIcon sx={{ fontSize: 12 }} />
                    )}
                    {order === 'desc' && (
                      <ArrowDownwardIcon sx={{ fontSize: 12 }} />
                    )}
                  </>
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.length === 0 ? (
          <tr>
            <td
              colSpan={columns.length + 1}
              className="py-[32px] text-center text-[12px] text-[#8E8E93]"
            >
              {emptyText || 'No records found'}
            </td>
          </tr>
        ) : (
          data.map((row) => (
            <tr
              key={row.id}
              onClick={() => onRowClick?.(row)}
              className={`group border-b border-[#E5E5EA] transition text-[11px] text-[#242424]
    ${row.checked ? 'bg-[#F3FAFF]' : 'hover:bg-[#F8F8FA]'}
    ${onRowClick ? 'cursor-pointer' : ''}
  `}
            >
              <td className="py-[12px] px-[16px]">
                <label className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    checked={row.checked}
                    onChange={() => toggleRow(row.id)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  {row.checked && (
                    <CheckIcon sx={{ fontSize: 10, color: '#fff' }} />
                  )}
                </label>
              </td>

              {columns.map((c) => (
                <td key={c.key} className="py-[12px] px-[16px]">
                  {c.custom && customRender
                    ? customRender(row, c.key)
                    : row[c.key]}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
