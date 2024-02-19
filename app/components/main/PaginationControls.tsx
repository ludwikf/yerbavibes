"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalPages: number;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  totalPages,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "24";

  return (
    <div className="flex items-center gap-1.5 select-none">
      <button
        className="p-1.5 bg-pageTheme rounded-lg hover:brightness-[90%] border-[1px] border-pageTheme"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/yerba/?page=${Number(page) - 1}&per_page=${per_page}`);
        }}
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      {hasPrevPage && Number(page) > 2 && (
        <>
          <button
            className="p-1.5 border-[1px] border-[#bbb] rounded-lg hover:border-black "
            onClick={() => {
              router.push(`/yerba/?page=${1}&per_page=${per_page}`);
            }}
          >
            <div className="w-5 h-5 flex justify-center items-center">1</div>
          </button>
          <button className="p-1.5 border-[1px] border-[#bbb] rounded-lg">
            <div className="w-5 h-5 flex justify-center items-center">...</div>
          </button>
        </>
      )}
      {hasPrevPage && (
        <button
          className="p-1.5 border-[1px] border-[#bbb] rounded-lg hover:border-black "
          onClick={() => {
            router.push(
              `/yerba/?page=${Number(page) - 1}&per_page=${per_page}`
            );
          }}
        >
          <div className="w-5 h-5 flex justify-center items-center">
            {Number(page) - 1}
          </div>
        </button>
      )}

      <button className="p-1.5 border-[1px] border-black rounded-lg hover:border-black">
        <div className="w-5 h-5 flex justify-center items-center">{page}</div>
      </button>

      {hasNextPage && (
        <button
          className="p-1.5 border-[1px] border-[#bbb] rounded-lg hover:border-black "
          onClick={() => {
            router.push(
              `/yerba/?page=${Number(page) + 1}&per_page=${per_page}`
            );
          }}
        >
          <div className="w-5 h-5 flex justify-center items-center">
            {Number(page) + 1}
          </div>
        </button>
      )}

      {hasNextPage && Number(page) + 1 < totalPages && (
        <>
          <button className="p-1.5 border-[1px] border-[#bbb] rounded-lg">
            <div className="w-5 h-5 flex justify-center items-center">...</div>
          </button>

          <button
            className="p-1.5 border-[1px] border-[#bbb] rounded-lg hover:border-black "
            onClick={() => {
              router.push(`/yerba/?page=${totalPages}&per_page=${per_page}`);
            }}
          >
            <div className="w-5 h-5 flex justify-center items-center">
              {totalPages}
            </div>
          </button>
        </>
      )}

      <button
        className="p-1.5 bg-pageTheme rounded-lg hover:brightness-[90%] border-[1px] border-pageTheme"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/yerba/?page=${Number(page) + 1}&per_page=${per_page}`);
        }}
      >
        <ChevronRightIcon className="w-5" />
      </button>
    </div>
  );
};

export default PaginationControls;
