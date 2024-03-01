import RatingStars from "@/app/components/RatingStars";
import React from "react";

export default async function YerbaListRating({ data }: any) {
  return (
    <div className="text-center flex items-center gap-1">
      <RatingStars rating={data.ratingValue} w={5} />
      <div className="text-md text-[#888]">({data.ratingCount})</div>
    </div>
  );
}
