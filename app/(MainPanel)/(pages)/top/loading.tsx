import {
  CardSkeleton,
  FavoriteSkeleton,
  ProductSkeleton,
  YomSkeleton,
} from "@/app/components/Skeletons";
import React from "react";

export default function loading() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <FavoriteSkeleton />
      <FavoriteSkeleton />
    </div>
  );
}
