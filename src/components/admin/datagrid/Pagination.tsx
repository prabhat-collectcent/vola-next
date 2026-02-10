'use client';
import React from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  handlePageClick: (e: { selected: number }) => void;
}

export default function PaginationComponent({
  pageCount,
  currentPage,
  handlePageClick,
}: PaginationProps) {
  return (
    <div className="flex justify-end mt-[16px]">
      <ReactPaginate
        onPageChange={handlePageClick}
        pageCount={pageCount}
        forcePage={currentPage}
        pageRangeDisplayed={5}
        marginPagesDisplayed={0}
        containerClassName="flex items-center gap-2"
        pageClassName="w-[28px] h-[28px] flex items-center justify-center rounded-[12px]
                       border border-[#F8F8F8] text-[12px] cursor-pointer bg-white"
        activeClassName="!bg-[#EDF1F4] text-[#000]"
        previousLabel={currentPage > 0 ? '‹' : ''}
        previousClassName="w-[28px] h-[28px] flex items-center justify-center rounded-[12px] border border-[#F8F8F8] cursor-pointer bg-white"
        nextLabel={currentPage < pageCount - 1 ? '›' : ''}
        nextClassName="w-[28px] h-[28px] flex items-center justify-center rounded-[12px] border border-[#F8F8F8] cursor-pointer bg-white"
        disabledClassName="opacity-40 cursor-default"
      />
    </div>
  );
}
