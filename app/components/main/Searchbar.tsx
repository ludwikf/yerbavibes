import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Searchbar() {
  return (
    <div>
      <form>
        <div className="relative rounded-lg">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <MagnifyingGlassIcon className="w-5" />
          </div>

          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border-2 border-gray-300 rounded-lg bg-gray-50 focus:outline-none  focus:ring-pageTheme focus:border-pageTheme focus:shadow-lg"
            placeholder="Search for Yerba Mate products"
            required
          />
          <button
            type="submit"
            className={`text-white absolute end-2.5 bottom-2.5 bg-pageTheme hover:brightness-[90%] transition focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 `}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
