import UserNavbar from "@/app/ui/main/user/UserNavbar";
import AvatarEdit from "@/app/ui/main/user/settings/AvatarEdit";
import DeleteUser from "@/app/ui/main/user/settings/DeleteUser";
import PasswordEdit from "@/app/ui/main/user/settings/PasswordEdit";
import UsernameEdit from "@/app/ui/main/user/settings/UsernameEdit";
import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth";
import React, { Suspense } from "react";

export default async function page() {
  const session: any = await getServerSession(authOptions);
  return (
    <div className="min-h-screen flex justify-center mb-10">
      <div className="flex w-full xs:w-[80%] min-h-[440px] justify-center mt-[130px] ">
        <UserNavbar />
        <div className="w-full md:w-[60%] md:pl-10 py-1 flex flex-col items-center md:items-start">
          <div className="text-3xl mb-5">Account settings</div>
          <div className="mb-5">
            <AvatarEdit />
          </div>
          <div className="w-3/4">
            <div className="text-2xl mb-7">Details</div>
            <div>
              <div className="text-lg">Username</div>
              <div className="mt-2 mb-7 border-[1px] border-[#bbb] p-4 rounded-lg flex justify-between">
                {session?.user?.username} <UsernameEdit />
              </div>
            </div>
            <div>
              <div className="text-lg">Password</div>
              <div className="mt-2 border-[1px] border-[#bbb] px-4 py-3 rounded-lg flex justify-between items-center">
                <span className="text-2xl">••••••••</span> <PasswordEdit />
              </div>
            </div>
          </div>
          <div>
            <DeleteUser />
          </div>
        </div>
      </div>
    </div>
  );
}
