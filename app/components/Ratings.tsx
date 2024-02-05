import { StarIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function Ratings() {
  return (
    <div className="flex">
      <StarIcon className="w-7 text-pageTheme" />
      <StarIcon className="w-7 text-pageTheme" />
      <StarIcon className="w-7 text-pageTheme" />
      <StarIcon className="w-7 text-pageTheme" />
      <StarIcon className="w-7 text-pageTheme" />
    </div>
  );
}
