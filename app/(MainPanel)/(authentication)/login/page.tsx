import React from "next-auth/react";
import LoginForm from "@/app/ui/main/login/LoginForm";

export default async function page() {
  return (
    <main className="max-w-[100%]">
      <div className="h-[100svh] flex justify-center items-center">
        <LoginForm />
      </div>
    </main>
  );
}
