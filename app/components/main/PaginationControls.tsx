"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalPages: number;
  filters: Record<string, string>;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  totalPages,
  filters,
}) => {
  const router: any = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "24";

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(filters)) {
      if (value !== "") {
        params.set(key, value);
      }
    }
    params.set("page", String(page));
    params.set("per_page", String(per_page));
    router.push(`/yerba/?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-1.5 select-none">
      <button
        className="p-1.5 bg-pageTheme rounded-lg hover:brightness-[90%] border-[1px] border-pageTheme"
        disabled={!hasPrevPage}
        onClick={() => handlePageChange(Number(page) - 1)}
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      {hasPrevPage && Number(page) > 2 && (
        <>
          <button
            className="p-1.5 border-[1px] border-[#bbb] rounded-lg hover:border-black "
            onClick={() => handlePageChange(Number(1))}
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
          onClick={() => handlePageChange(Number(page) - 1)}
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
          onClick={() => handlePageChange(Number(page) + 1)}
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
            onClick={() => handlePageChange(totalPages)}
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
        onClick={() => handlePageChange(Number(page) + 1)}
      >
        <ChevronRightIcon className="w-5" />
      </button>
    </div>
  );
};

export default PaginationControls;
