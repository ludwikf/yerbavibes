import React from "react";
import PostImage from "@/app/components/PostImage";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function TopList({ data }: any) {
  return (
    <div className="w-full lg:w-1/2 mt-[130px]">
      <div className="text-2xl font-bold mb-14 mt-5 lg:mt-0 text-center lg:text-start">
        Top Rated Yerba Mate
      </div>
      <div className="w-full">
        {data &&
          data.map((e: any, index: any) => (
            <div
              key={e._id}
              className="flex items-center justify-center lg:block"
            >
              <div className="lg:hidden text-2xl sm:ml-20 w-[70px] text-center">
                {index + 1}
              </div>

              <div className="flex flex-col w-screen lg:w-auto lg:flex-row justify-center lg:justify-start items-center h-[400px] xs:h-[330px] lg:h-[170px] mb-5 border-b-[1px] pb-5 border-[#ccc]">
                <div className="hidden lg:block text-2xl w-[70px] text-center">
                  {index + 1}
                </div>
                <div className="flex items-center">
                  <Link
                    href={`/yerba/details?id=${e._id}`}
                    className="min-w-[150px] h-[150px]"
                  >
                    <PostImage src={e.image} />
                  </Link>
                </div>
                <div className="flex flex-col items-center lg:items-start justify-between w-[60%] lg:h-[100%] py-1 lg:pl-5">
                  <div className="flex flex-col justify-center items-center lg:block">
                    <Link
                      href={`/yerba/details?id=${e._id}`}
                      className="font-bold text-lg text-center"
                    >
                      {e.title}
                    </Link>
                    <div>{e.flavor}</div>
                  </div>
                  <div>{e.producer}</div>
                </div>
                <div className="flex flex-col items-end lg:h-[100%] pt-1 lg:pl-5">
                  <div className="flex gap-1 items-center">
                    <StarIcon className="w-7 text-pageTheme" />{" "}
                    <span className="text-2xl">{e.ratingValue.toFixed(2)}</span>
                  </div>
                  <div className="text-[#888] text-sm">
                    {e.ratingCount} ratings
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
