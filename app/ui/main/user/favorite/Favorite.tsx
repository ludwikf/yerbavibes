"use client";
import PostImage from "@/app/components/PostImage";
import { FavoriteSkeleton } from "@/app/components/Skeletons";
import { TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Favorite() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(`/api/get-favorite-list`);
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

  const deleteFavorite = async (id: any) => {
    try {
      const res = await fetch(`/api/delete-favorite?id=${id}`, {
        method: "PUT",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      setData((prevData) =>
        prevData.filter((item: any) => item.productId._id !== id)
      );
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
              key={e.productId._id}
              className="flex items-center h-[140px] md:h-[170px] mb-5 border-b-[1px] pb-5 border-[#ccc]"
            >
              <Link
                href={`/yerba/details?id=${e.productId._id}`}
                className="min-w-[90px] xs:min-w-[120px] md:min-w-[150px] h-[90px] xs:h-[120px] md:h-[150px]"
              >
                <PostImage src={`${e.productId.image}`} />
              </Link>
              <div className="flex flex-col justify-between w-full md:w-[60%] h-[100%] py-1 pl-2 md:pl-5">
                <div>
                  <Link
                    href={`/yerba/details?id=${e.productId._id}`}
                    className="font-bold text-md md:text-lg"
                  >
                    {e.productId.title}
                  </Link>
                  <div className="hidden md:block">{e.productId.category}</div>
                </div>
                <div className="flex items-center">
                  <div className="hidden xs:block md:block text-xs md:text-[16px]">
                    {e.productId.producer}
                  </div>

                  <button
                    onClick={() => deleteFavorite(e.productId._id)}
                    className="hover:bg-[#dcd8c5] p-1 rounded-xl lg:hidden"
                  >
                    <TrashIcon className="w-5" />
                  </button>
                </div>
              </div>
              <div className="hidden md:flex flex-col items-end h-[100%] pl-5">
                <button
                  onClick={() => deleteFavorite(e.productId._id)}
                  className="hover:bg-[#dcd8c5] p-1 rounded-xl"
                >
                  <TrashIcon className="w-7" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
