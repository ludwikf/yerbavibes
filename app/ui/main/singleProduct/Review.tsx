"use client";
import Link from "next/link";
import React from "react";
import AddReviewButton from "@/app/components/main/AddReviewButton";
import RatingStars from "@/app/components/RatingStars";
import SingleReview from "@/app/components/main/SingleReview";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { PlusCircleIcon as PlusCircleIconActive } from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function Review({ data }: any) {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  let rating: any = 0;

  if (data.length > 0) {
    const totalRating = data.reduce(
      (acc: any, review: any) => acc + review.rating,
      0
    );
    const averageRating = totalRating / data.length;
    rating = averageRating.toFixed(2);
  }

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

  const reviewsWithComments = data.filter((review: any) => review.comment);
  const reviewsToDisplay = reviewsWithComments.slice(0, 4);

  return (
    <div className="max-w-[screen] min-h-[400px] flex justify-center items-start">
      <div className="h-full w-[90%] lg:w-[1000px] flex flex-col items-center">
        <div className="text-4xl border-l-[8px] pl-2 border-pageTheme w-full">
          Reviews
        </div>

        <div className="w-full mt-5">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="text-center">
              <div className="text-5xl">{rating}</div>
              <div className="w-full flex justify-center">
                <RatingStars rating={rating} w={7} />
              </div>
              <div className="pt-1 text-[#666]">{data.length} reviews</div>
            </div>
            <div className="w-full lg:w-1/2 lg:ml-8">
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
        <div className="self-center lg:self-start">
          <div className="flex  my-7">
            {session ? (
              <AddReviewButton />
            ) : (
              <Link
                href={"/login"}
                className="group cursor-pointer flex items-center gap-1 select-none text-[#888]"
              >
                <PlusCircleIcon className="w-9 group-hover:hidden" />
                <PlusCircleIconActive className="w-9 hidden group-hover:block text-pageTheme" />
                <div className="group-hover:text-pageTheme">Add review</div>
              </Link>
            )}
          </div>
          {reviewsToDisplay.map((e: any) => (
            <div key={e._id} className="w-[90vw] lg:w-[650px]">
              <SingleReview data={e} />
            </div>
          ))}
          {reviewsWithComments.length > 4 && (
            <div className="text-lg text-pageTheme mb-14">
              <Link
                href={`/yerba/reviews?id=${id}`}
                className="hover:brightness-[80%] p-2 rounded transition"
              >
                See all reviews
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
