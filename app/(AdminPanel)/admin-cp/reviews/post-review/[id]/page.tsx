import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import PostReviewMain from "@/app/ui/admin/reviews/post-review/PostReviewMain";
import Link from "next/link";

export default async function PostReview() {
  return (
    <main className="flex h-screen bg-[#161616] text-white">
      <div className="my-[25px] flex w-screen flex-col justify-center items-center">
        <div className="w-[90%] h-[16%] flex items-center ">
          <Link
            href={`/admin-cp/reviews`}
            className="hover:text-[#ccc] flex text-lg mt-5 lg:mt-0"
          >
            <ArrowLeftIcon className="w-6 mr-1" /> Go back
          </Link>
        </div>
        <div className="w-[90%] h-[84%] flex flex-col items-end">
          <PostReviewMain />
        </div>
      </div>
    </main>
  );
}
