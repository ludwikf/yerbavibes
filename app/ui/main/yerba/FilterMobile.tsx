"use client";
import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function Filter({ data, filteredData }: any) {
  const [expandedFilters, setExpandedFilters] = React.useState<string[]>([]);
  const [form, setForm] = useState<boolean>(false);
  const dropRef = useRef<any>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryParams = Object.fromEntries(searchParams);

  const producerQ = searchParams.get("producer");
  const flavorQ = searchParams.get("flavor");
  const strengthQ = searchParams.get("strength");
  const categoryQ = searchParams.get("category");
  const originQ = searchParams.get("origin");

  const handleFilter = (filtercategory: string, filter: string) => {
    const newParams = { ...queryParams, [filtercategory]: filter, page: "1" };
    if (queryParams[filtercategory] === filter) {
      delete newParams[filtercategory];
    }
    router.push(`/yerba/?${new URLSearchParams(newParams)}`, {
      scroll: false,
    });
  };

  const producers: any = {};
  data.forEach((item: any) => {
    producers[item.producer] = (producers[item.producer] || 0) + 1;
  });

  const flavors: any = {};
  data.forEach((item: any) => {
    flavors[item.flavor] = (flavors[item.flavor] || 0) + 1;
  });

  const strengths: any = {};
  data.forEach((item: any) => {
    strengths[item.strength] = (strengths[item.strength] || 0) + 1;
  });

  const categories: any = {};
  data.forEach((item: any) => {
    categories[item.category] = (categories[item.category] || 0) + 1;
  });

  const origins: any = {};
  data.forEach((item: any) => {
    origins[item.origin] = (origins[item.origin] || 0) + 1;
  });

  const producersCount: any = {};
  filteredData.forEach((item: any) => {
    producersCount[item.producer] = (producersCount[item.producer] || 0) + 1;
  });

  const flavorsCount: any = {};
  filteredData.forEach((item: any) => {
    flavorsCount[item.flavor] = (flavorsCount[item.flavor] || 0) + 1;
  });

  const strengthsCount: any = {};
  filteredData.forEach((item: any) => {
    strengthsCount[item.strength] = (strengthsCount[item.strength] || 0) + 1;
  });

  const categoriesCount: any = {};
  filteredData.forEach((item: any) => {
    categoriesCount[item.category] = (categoriesCount[item.category] || 0) + 1;
  });

  const originsCount: any = {};
  filteredData.forEach((item: any) => {
    originsCount[item.origin] = (originsCount[item.origin] || 0) + 1;
  });

  const toggleFilter = (filterType: string) => {
    setExpandedFilters((prevFilters) =>
      prevFilters.includes(filterType)
        ? prevFilters.filter((filter) => filter !== filterType)
        : [...prevFilters, filterType]
    );
  };

  const renderFilterOptions = (
    filterType: string,
    filterOptions: any,
    filterCount: any,
    filterQ: any
  ) => {
    const filterKeys = Object.keys(filterOptions);
    const sortedFilterKeys = filterKeys.sort((a, b) => {
      return (filterCount[b] || 0) - (filterCount[a] || 0);
    });
    const shouldExpand =
      filterKeys.length > 4 && expandedFilters.includes(filterType);

    return (
      <>
        {sortedFilterKeys
          .slice(0, shouldExpand ? sortedFilterKeys.length : 4)
          .map((filterKey) => (
            <div key={filterKey} className="w-full flex items-center gap-1.5">
              <div
                onClick={() => {
                  handleFilter(filterType, filterKey);
                }}
                className="my-1.5 border-[2px] w-5 h-5 border-[#aaa] p-[1px] rounded cursor-pointer select-none"
              >
                {filterQ === filterKey && <CheckIcon />}
              </div>
              <div className="text-sm">
                {filterKey}
                <span className="text-[#999] ml-[2px]">
                  ({filterCount[filterKey] || 0})
                </span>
              </div>
            </div>
          ))}
        {filterKeys.length > 4 && (
          <div
            className="text-[#888] cursor-pointer"
            onClick={() => toggleFilter(filterType)}
          >
            {expandedFilters.includes(filterType)
              ? "Show less"
              : "Show more..."}
          </div>
        )}
      </>
    );
  };

  const handleClickOutside = (e: any) => {
    if (dropRef.current && !dropRef.current.contains(e.target)) {
      setForm(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropRef}>
      <AdjustmentsHorizontalIcon
        className={`w-7 ${
          queryParams.producer ||
          queryParams.flavor ||
          queryParams.strength ||
          queryParams.category ||
          queryParams.origin ||
          queryParams.sort
            ? "text-pageTheme"
            : "text-[#888]"
        } select-none`}
        onClick={() => setForm(true)}
      />
      {form && (
        <>
          <div className="z-[400] w-full h-min-screen absolute top-0 left-0 bg-bodyTheme overflow-y-auto border-b-2 border-black">
            <div className="p-5 flex justify-between items-center">
              <span className=" text-2xl font-bold flex gap-1.5 items-center">
                Filters
                <XMarkIcon className="w-7" onClick={() => setForm(false)} />
              </span>
              <button
                onClick={() => router.push("/yerba")}
                className={`text-sm text-${
                  queryParams.producer ||
                  queryParams.flavor ||
                  queryParams.strength ||
                  queryParams.category ||
                  queryParams.origin ||
                  queryParams.sort
                    ? "red-500"
                    : "[#bbb]"
                } select-none`}
              >
                Clear all
              </button>
            </div>
            <div className="w-full p-5">
              <div className="flex flex-col mb-7">
                <div className="font-bold mb-3">Producer</div>
                {renderFilterOptions(
                  "producer",
                  producers,
                  producersCount,
                  producerQ
                )}
              </div>
              <div className="flex flex-col mb-7">
                <div className="font-bold mb-3">Flavor</div>
                {renderFilterOptions("flavor", flavors, flavorsCount, flavorQ)}
              </div>
              <div className="flex flex-col mb-7">
                <div className="font-bold mb-3">Strength</div>
                {renderFilterOptions(
                  "strength",
                  strengths,
                  strengthsCount,
                  strengthQ
                )}
              </div>
              <div className="flex flex-col mb-7">
                <div className="font-bold mb-3">Category</div>
                {renderFilterOptions(
                  "category",
                  categories,
                  categoriesCount,
                  categoryQ
                )}
              </div>
              <div className="flex flex-col mb-7">
                <div className="font-bold mb-3">Origin</div>
                {renderFilterOptions("origin", origins, originsCount, originQ)}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
