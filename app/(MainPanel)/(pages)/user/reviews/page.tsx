import PostImage from "@/app/components/PostImage";
import Ratings from "@/app/components/Ratings";
import UserNavbar from "@/app/ui/main/user/UserNavbar";
import ReviewView from "@/app/ui/main/user/review/ReviewView";
import { TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="flex w-[80%] min-h-[440px] justify-center mt-[130px] ">
        <UserNavbar />
        <div className="w-[60%] pl-10 py-1">
          <div className="text-3xl mb-10">Your Reviews</div>
          <ReviewView />
        </div>
      </div>
    </div>
  );
}
