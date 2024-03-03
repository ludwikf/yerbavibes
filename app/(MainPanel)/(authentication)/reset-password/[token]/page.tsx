import ResetPasswordForm from "@/app/ui/resetPassword/ResetPasswordForm";
import React from "react";

export default function page({ params }: { params: { token: string } }) {
  return (
    <div className="w-screen min-h-screen">
      <ResetPasswordForm token={params.token} />
    </div>
  );
}
