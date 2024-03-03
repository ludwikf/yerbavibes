"use client";
import PostImage from "@/app/components/PostImage";
import RatingStars from "@/app/components/RatingStars";
import Ratings from "@/app/components/Ratings";
import { FavoriteSkeleton } from "@/app/components/Skeletons";
import { TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ReviewView() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(`/api/get-review-list`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setData(data);
      } catch (error: any) {
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const deleteReview = async (id: any) => {
    try {
      const res = await fetch(`/api/delete-review?id=${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      setData((prevData) => prevData.filter((item: any) => item._id !== id));
    } catch (error) {
      return null;
    }
  };

  return (
    <>
      {loading ? (
        <FavoriteSkeleton />
      ) : (
        <div>
          {data.map((e: any) => (
            <div
              key={e._id}
              className="flex items-center h-[140px] md:h-[170px] mb-5 border-b-[1px] pb-5 border-[#ccc]"
            >
              <Link
                href={`/yerba/details?id=${e.post._id}`}
                className="hidden xs:block min-w-[90px] xs:min-w-[120px] md:min-w-[150px] h-[90px] xs:h-[120px] md:h-[150px]"
              >
                <PostImage src={e.post.image} />
              </Link>
              <div className="flex flex-col justify-between w-full md:w-[60%] h-[100%] py-1 pl-2 md:pl-5">
                <div>
                  <div>
                    <RatingStars rating={e.rating} w={6} />
                  </div>
                  <Link
                    href={`/yerba/details?id=${e.post._id}`}
                    className="ml-1 text-[#888] flex mt-1 lg:mt-0"
                  >
                    {e.post.title}
                  </Link>
                </div>
                <div className="ml-1 mt-4 overflow-hidden ">{e.comment}</div>
              </div>
              <div className="flex flex-col items-end h-[100%]  lg:pl-5">
                <button className="hover:bg-[#dcd8c5] p-1 rounded-xl">
                  <TrashIcon
                    onClick={() => deleteReview(e._id)}
                    className="w-7"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
