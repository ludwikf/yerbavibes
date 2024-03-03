"use client";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

interface DropSelectProps {
  filters: Record<string, string>;
}

export default function DropSelect({ filters }: DropSelectProps) {
  const [drop, setDrop] = useState(false);
  const [sort, setSort] = useState("");
  const dropRef = useRef<any>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "24";

  const sortOptions: { [key: string]: string } = {
    popular: "Most popular",
    top: "Top rating",
    low: "Low rating",
  };

  const handleClickOutside = (e: any) => {
    if (dropRef.current && !dropRef.current.contains(e.target)) {
      setDrop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const sortParam = searchParams.get("sort");
    if (sortParam) {
      setSort(sortParam);
    } else {
      setSort("");
    }
  }, [searchParams]);

  useEffect(() => {
    if (sort !== "") {
      const params = new URLSearchParams();
      for (const [key, value] of Object.entries(filters)) {
        if (value !== "") {
          params.set(key, value);
        }
      }
      params.set("sort", String(sort));
      router.push(`/yerba/?${params.toString()}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  return (
    <div
      onClick={() => {
        setDrop(!drop);
      }}
      ref={dropRef}
      className="relative w-[50%] max-w-[300px] lg:w-[225px]"
    >
      <div
        className={`${
          drop
            ? "border-[1px] border-b-[#ccc] rounded-t-lg"
            : "border-[1px] rounded-lg"
        } relative flex justify-between text-sm items-center select-none cursor-pointer px-3 py-2 w-full border-[#aaa]`}
      >
        <span className="absolute top-[-8px] px-1 left-[8px] text-[#888] bg-bodyTheme text-xs">
          Sort by
        </span>
        <span>{sortOptions[sort] || "- - - - - -"}</span>
        <span>
          <ChevronDownIcon className="w-4" />
        </span>
      </div>
      <div
        className={`${
          drop ? "block" : "hidden"
        } overflow-hidden absolute z-10 w-full border-r-[1px] border-b-[1px] border-l-[1px] border-[#aaa] text-sm rounded-b-lg bg-bodyTheme`}
      >
        <div
          onClick={() => setSort("popular")}
          className="hover:brightness-[90%] bg-bodyTheme px-3 py-2 select-none cursor-pointer"
        >
          Most popular
        </div>
        <div
          onClick={() => setSort("top")}
          className="hover:brightness-[90%] bg-bodyTheme px-3 py-2 select-none cursor-pointer"
        >
          Top rating
        </div>
        <div
          onClick={() => setSort("low")}
          className="hover:brightness-[90%] bg-bodyTheme px-3 py-2 select-none cursor-pointer"
        >
          Low rating
        </div>
      </div>
    </div>
  );
}
