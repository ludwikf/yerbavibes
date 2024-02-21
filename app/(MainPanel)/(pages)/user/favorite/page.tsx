import UserNavbar from "@/app/ui/main/user/UserNavbar";
import Favorite from "@/app/ui/main/user/favorite/Favorite";

import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="flex w-[80%] min-h-[440px] justify-center mt-[130px] ">
        <UserNavbar />
        <div className="w-[60%] min-h-screen pl-10 py-1">
          <div className="text-3xl mb-10">Favorite List</div>
          <Favorite />
        </div>
      </div>
    </div>
  );
}
