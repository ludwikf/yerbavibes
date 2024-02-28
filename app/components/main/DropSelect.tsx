"use client";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function DropSelect() {
  const [drop, setDrop] = useState(false);
  const [sort, setSort] = useState("");
  const dropRef = useRef<any>(null);
  const router = useRouter();

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
    router.push(`/yerba?sort=${sort}`);
  }, [sort]);

  return (
    <div
      onClick={() => {
        setDrop(!drop);
      }}
      ref={dropRef}
      className="relative w-[225px]"
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
