import PostImage from "@/app/components/PostImage";
import Ratings from "@/app/components/Ratings";
import DropSelect from "@/app/components/main/DropSelect";
import FavoriteButton from "@/app/components/main/FavoriteButton";
import PaginationControls from "@/app/components/main/PaginationControls";
import { HeartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Yerba({ page, per_page }: any) {
  async function fetchData() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WEB_URL}/api/get-products`,
        { cache: "no-store" }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      return Promise.resolve(data);
    } catch (error) {
      return null;
    }
  }
  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);
  const data = await fetchData();
  const entries = data.slice(start, end);
  const totalPages = Math.ceil(data.length / per_page);
  return (
    <>
      <div className="w-[100%] mr-20 mb-10 flex flex-col items-center">
        <div className="w-[98%] px-2 py-4 border-y-[1px] border-[#ccc] mb-5 flex justify-between items-center">
          <div className="text-[#888] text-sm">{data.length} results</div>
          <div className="flex gap-5">
            <DropSelect />
            <PaginationControls
              hasNextPage={end < data.length}
              hasPrevPage={start > 0}
              totalPages={totalPages}
            />
          </div>
        </div>
        <div className="w-[100%] flex flex-wrap gap-x-[20px] gap-y-[40px] justify-center">
          {entries.map((e: any) => (
            <div
              key={e._id}
              className="w-[30%] group hover:shadow-xl rounded-xl pb-5 px-2 border-b-[1px] border-[#ccc] transition"
            >
              <div className="min-w-[100%] h-[0] relative pt-[100%]">
                <Link
                  href={`/yerba/details?id=${e._id}`}
                  className="absolute top-0"
                >
                  <Image
                    rel="stylesheet preload prefetch"
                    src={e.image}
                    alt="img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className={`rounded-xl object-cover object-left select-none w-[100%]`}
                  />
                </Link>
              </div>

              <div className="w-[100%] min-h-[216px] flex flex-col justify-between">
                <div className="p-5">
                  <Link href={`/yerba/details?id=${e._id}`}>{e.title}</Link>
                  <div>
                    <div className="w-[100px] my-1">
                      <Ratings />
                    </div>
                  </div>
                  <div className="text-sm">
                    Producer <span className="text-[#777]">{e.producer}</span>
                  </div>
                  <div className="text-sm">
                    Flavor <span className="text-[#777]">{e.flavor}</span>
                  </div>
                  <div className="text-sm">
                    Origin <span className="text-[#777]">{e.origin}</span>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-2 relative">
                  <Link
                    href={`/yerba/details?id=${e._id}`}
                    className="px-5 py-2 bg-pageTheme rounded-lg hover:brightness-[90%] transition"
                  >
                    Explore
                  </Link>
                  <button className="text-[#888]">
                    <FavoriteButton id={e._id} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[90%] py-4 border-t-[1px] border-[#ccc] flex justify-end items-center">
          <div className="flex gap-5">
            <PaginationControls
              hasNextPage={end < data.length}
              hasPrevPage={start > 0}
              totalPages={totalPages}
            />
          </div>
        </div>
      </div>
    </>
  );
}
