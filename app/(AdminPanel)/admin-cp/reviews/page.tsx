import React from "react";
import ReviewsMain from "@/app/ui/admin/reviews/ReviewsMain";

export default async function Reviews() {
  return (
    <main className="flex h-screen">
      <div className="my-[25px] flex w-screen lg:h-auto flex-col short:justify-start lg:justify-center items-center">
        <div className="w-[100%] short:w-[100%] lg:w-[90%] short:h-[auto] lg:h-[18%] flex justify-center short:justify-center lg:justify-start mb-[20px] short:mb-[20px] lg:mb-[0px]">
          <div className="flex flex-col items-center short:flex lg:block">
            <h1 className="text-3xl font-bold">Reviews</h1>
            <p className="text-mainTheme mb-1">Manage user feedback</p>
          </div>
        </div>
        <div className="w-[90%] h-[84%] flex flex-col items-end">
          <ReviewsMain />
        </div>
      </div>
    </main>
  );
}
