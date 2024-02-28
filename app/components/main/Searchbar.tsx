"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Searchbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router: any = useRouter();

  const path = usePathname();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.push(`/yerba?title=${searchQuery}`);
  };

  useEffect(() => {
    setSearchQuery("");
  }, [path]);

  return (
    <div className="w-[100%]">
      <form onSubmit={handleSubmit}>
        <div className="rounded-lg flex">
          <input
            type="search"
            id="default-search"
            name="search"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            className="block w-full p-2 ps-4 text-sm text-gray-900 border-l-2 border-t-2 border-b-2 border-[#ccc] rounded-l-lg bg-bodyTheme focus:outline-none  focus:ring-pageTheme focus:border-pageTheme focus:shadow-lg placeholder:text-[#666]"
            placeholder="Search for Yerba Mate products"
          />
          <button
            type="submit"
            className={`text-white bg-pageTheme hover:brightness-[90%] transition focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-r-lg text-sm px-4 py-2 `}
          >
            <MagnifyingGlassIcon className="w-6" />
          </button>
        </div>
      </form>
    </div>
  );
}
