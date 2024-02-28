import React from "react";
import PostImage from "@/app/components/PostImage";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function TopList({ data }: any) {
  return (
    <div className="w-1/2 mt-[130px]">
      <div className="text-2xl font-bold mb-14">Top Rated Yerba Mate</div>
      <div className="w-full">
        {data.map((e: any, index: any) => (
          <div
            key={e._id}
            className="flex items-center h-[170px] mb-5 border-b-[1px] pb-5 border-[#ccc]"
          >
            <div className="text-2xl w-[70px] text-center">{index + 1}</div>
            <Link
              href={`/yerba/details?id=${e._id}`}
              className="min-w-[150px] h-[150px]"
            >
              <PostImage src={e.image} />
            </Link>
            <div className="flex flex-col justify-between w-[60%] h-[100%] py-1 pl-5">
              <div>
                <Link
                  href={`/yerba/details?id=${e._id}`}
                  className="font-bold text-lg"
                >
                  {e.title}
                </Link>
                <div>{e.flavor}</div>
              </div>
              <div>{e.producer}</div>
            </div>
            <div className="flex flex-col items-end h-[100%] pt-1 pl-5">
              <div className="flex gap-1 items-center">
                <StarIcon className="w-7 text-pageTheme" />{" "}
                <span className="text-2xl">{e.ratingValue.toFixed(2)}</span>
              </div>
              <div className="text-[#888] text-sm">{e.ratingCount} ratings</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
