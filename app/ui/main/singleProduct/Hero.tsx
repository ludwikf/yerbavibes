import PostImage from "@/app/components/PostImage";
import RatingStars from "@/app/components/RatingStars";
import Ratings from "@/app/components/Ratings";
import AddReviewButton from "@/app/components/main/AddReviewButton";
import FavoriteButton from "@/app/components/main/FavoriteButton";
import Link from "next/link";
import React from "react";

export default async function Hero({
  data,
  review,
}: {
  data: any;
  review: any;
}) {
  const totalRating = review.reduce(
    (acc: any, review: any) => acc + review.rating,
    0
  );
  const averageRating = totalRating / review.length;
  const rating = averageRating.toFixed(1);

  async function fetchData() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WEB_URL}/api/get-yerba-producer?producer=${data.producer}`,
        { cache: "no-store" }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const resData = await res.json();
      return resData;
    } catch (error) {
      return null;
    }
  }

  const producerData = await fetchData();
  return (
    <div className="max-w-screen h-screen flex justify-evenly items-center mx-52">
      <div className="min-w-[400px] h-[400px] animateZoomIn shadow-lg p-5 flex justify-center items-center">
        <PostImage src={`${data.image}`} />
      </div>
      <div className="flex flex-col items-center justify-evenly h-[350px] w-[500px]">
        <div className="flex flex-col items-center">
          <div className="text-black text-4xl mb-3 text-center">
            {data.title}
          </div>
          <div className="text-center flex items-center gap-1.5">
            <RatingStars rating={rating} w={7} />
            <div className="text-xl text-[#888]">({review.length})</div>
          </div>
          <div className="text-[#888] text-lg mt-3 text-center flex gap-3">
            <FavoriteButton id={data._id} />
            <AddReviewButton />
          </div>
        </div>
        <div className="flex flex-col mt-2 items-center gap-1.5 w-[100%]">
          <div className="text-[#888] select-none">
            More{" "}
            <Link href={"/"} className="text-pageTheme">
              {data.producer}
            </Link>{" "}
            products
          </div>
          <div className="flex justify-center gap-1.5 w-[100%]">
            {producerData.map((e: any) => (
              <Link
                key={e._id}
                href={`/yerba/details?id=${e._id}`}
                className="w-[130px] h-[130px] border-2 border-[#bbb] rounded p-1 flex justify-center items-center"
              >
                <div className="w-[110px] h-[110px] flex justify-center items-center">
                  <PostImage src={`${e.image}`} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
