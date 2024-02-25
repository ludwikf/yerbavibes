"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import AddReviewButton from "@/app/components/main/AddReviewButton";
import RatingStars from "@/app/components/RatingStars";
import SingleReview from "@/app/components/main/SingleReview";

export default function Review({ data }: any) {
  const totalRating = data.reduce(
    (acc: any, review: any) => acc + review.rating,
    0
  );
  const averageRating = totalRating / data.length;
  const rating = averageRating.toFixed(1);

  const ratingCounts: any = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

  data.forEach((review: any) => {
    ratingCounts[review.rating]++;
  });

  return (
    <div className="max-w-screen min-h-screen flex justify-center items-start">
      <div className="h-full w-[1000px] flex flex-col items-center">
        <div className="text-4xl border-l-[8px] pl-2 border-pageTheme w-full">
          Reviews
        </div>

        <div className="w-full mt-5">
          <div className="w-full flex">
            <div className="w-[120px] text-center">
              <div className="text-5xl">{rating}</div>
              <div>
                <RatingStars rating={rating} />
              </div>
              <div className="pt-1 text-[#666]">{data.length} reviews</div>
            </div>
            <div className="w-1/2 ml-8">
              {[5, 4, 3, 2, 1].map((rating: any) => (
                <div key={rating} className="flex justify-center items-center">
                  <div className="text-sm">{rating}</div>
                  <div className="w-full ml-3 bg-[#cfcfcf] rounded h-2.5">
                    <div
                      className="bg-pageTheme h-2.5 rounded-full"
                      style={{
                        width: `${(ratingCounts[rating] / data.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="self-start">
          <div className="flex  my-7">
            <AddReviewButton data={data} />
          </div>
          {data.map((e: any) => (
            <SingleReview key={e._id} data={e} />
          ))}
          <div className="text-lg text-pageTheme mb-14">
            <Link
              href={""}
              className="hover:brightness-[80%] p-2 rounded transition"
            >
              See all reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
