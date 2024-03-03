import UserNavbar from "@/app/ui/main/user/UserNavbar";
import Favorite from "@/app/ui/main/user/favorite/Favorite";
import React from "react";

export default async function page() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="flex flex-col md:flex-row w-[90%] md:w-[80%] min-h-[440px] justify-center mt-[130px] ">
        <UserNavbar />
        <div className="w-full md:w-[80%] lg:w-[60%] min-h-screen md:pl-10 py-1">
          <div className="text-3xl mb-10">Favorite List</div>
          <Favorite />
        </div>
      </div>
    </div>
  );
}
