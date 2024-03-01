import { StarIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function RatingStars({ rating, w }: any) {
  const fullStars = Math.floor(rating);
  const decimal = Math.floor((rating - fullStars) * 10);

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <StarIcon key={`full-${i}`} className={`w-${w} text-pageTheme`} />
        );
      } else if (i === fullStars && decimal > 0) {
        let widthPercentage = 0;

        if (decimal <= 2) widthPercentage = 30;
        else if (decimal <= 4) widthPercentage = 43;
        else if (decimal === 5) widthPercentage = 50;
        else if (decimal <= 7) widthPercentage = 59;
        else widthPercentage = 72;

        stars.push(
          <div
            key="half-star"
            className={`relative inline-block text-[#00000020] w-${w}`}
          >
            <StarIcon className={`w-${w}`} />
            <div
              style={{ width: widthPercentage + "%" }}
              className={`text-pageTheme absolute left-0 top-0 overflow-hidden`}
            >
              <StarIcon className={`w-${w}`} />
            </div>
          </div>
        );
      } else {
        stars.push(
          <StarIcon key={`empty-${i}`} className={`w-${w} text-[#00000020]`} />
        );
      }
    }
    return stars;
  };

  return <div className="flex items-center">{renderStars()}</div>;
}
