import UserNavbar from "@/app/ui/main/user/UserNavbar";
import React from "react";

export default function loading() {
  return (
    <div className="h-screen flex justify-center">
      <div className="flex w-[80%] h-[440px] justify-center mt-[130px] ">
        <UserNavbar />
        <div className="w-[60%] pl-10 py-1"></div>
      </div>
    </div>
  );
}
